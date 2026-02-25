export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');

  try {
    const response = await fetch('https://www.phygitals.com/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
    });

    if (!response.ok) {
      throw new Error(`Phygitals returned ${response.status}`);
    }

    const html = await response.text();

    // Extract __NEXT_DATA__ JSON
    const match = html.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);
    if (!match) {
      throw new Error('Could not find __NEXT_DATA__');
    }

    const nextData = JSON.parse(match[1]);
    const pageProps = nextData?.props?.pageProps || {};

    // Extract cards from recentPulls and sales
    const cards = [];
    const seen = new Set();

    const extractCard = (item) => {
      if (!item) return null;

      // Handle different data shapes
      const name = item.metadata?.name || item.nft?.metadata?.name || '';
      const image = item.metadata?.image || item.nft?.metadata?.image || '';
      const value = item.value || item.nft?.value || item.amount || 0;
      const id = item.public_id || item.id || item.universalNFTDataAddress || '';
      const slug = item.slug || item.nft?.slug || '';

      // Only Pokemon cards
      if (!name.toUpperCase().includes('POKEMON')) return null;
      if (seen.has(id)) return null;
      seen.add(id);

      // Parse grade from name
      let grade = '';
      const gradeMatch = name.match(/(PSA|CGC|BGS)\s*([\d.]+\s*\w*)/i);
      if (gradeMatch) {
        grade = `${gradeMatch[1].toUpperCase()} ${gradeMatch[2].trim()}`;
      }

      // Parse year
      const yearMatch = name.match(/^(\d{4})\s/);
      const year = yearMatch ? yearMatch[1] : '';

      // Clean card name (remove year prefix and grade suffix for display)
      let displayName = name;
      if (yearMatch) displayName = displayName.replace(/^\d{4}\s*/, '');
      displayName = displayName.replace(/\s*(PSA|CGC|BGS)\s*[\d.]+\s*\w*/i, '').trim();
      // Remove "Pokemon" prefix variations
      displayName = displayName
        .replace(/^Pokemon\s+(Japanese\s+)?/i, '')
        .replace(/^(Sun\s*&?\s*Moon|Sword\s*&?\s*Shield|Scarlet\s*&?\s*Violet|Base\s+Set|Gym\s+\d+)\s*/i, (m) => m)
        .trim();

      return {
        id,
        slug,
        name: displayName,
        fullName: name,
        image,
        value: typeof value === 'number' ? value : parseFloat(value) || 0,
        grade,
        year,
      };
    };

    // Process recentPulls
    if (Array.isArray(pageProps.recentPulls)) {
      for (const item of pageProps.recentPulls) {
        const card = extractCard(item);
        if (card) cards.push(card);
      }
    }

    // Process sales/transactions
    if (Array.isArray(pageProps.sales)) {
      for (const item of pageProps.sales) {
        const card = extractCard(item);
        if (card) cards.push(card);
        // Also check nested nft object
        if (item.nft) {
          const nftCard = extractCard({ ...item.nft, value: item.amount || item.nft.value });
          if (nftCard) cards.push(nftCard);
        }
      }
    }

    // Process any other arrays that might contain cards
    for (const key of Object.keys(pageProps)) {
      if (Array.isArray(pageProps[key]) && key !== 'recentPulls' && key !== 'sales') {
        for (const item of pageProps[key]) {
          const card = extractCard(item);
          if (card) cards.push(card);
        }
      }
    }

    res.status(200).json({
      success: true,
      count: cards.length,
      cards,
      fetchedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Phygitals fetch error:', error);
    res.status(500).json({
      success: false,
      error: error.message,
      cards: [],
    });
  }
}
