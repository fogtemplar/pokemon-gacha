// Curated Pokemon card data from Phygitals.com
// Real PSA/CGC graded cards with actual market prices
const CARD_DATABASE = [
  {
    id: 'phyg-001',
    name: 'Crown Zenith Pikachu #160',
    fullName: '2023 Pokemon Sword and Shield Crown Zenith Pikachu #160 PSA 9',
    image: 'https://gateway.irys.xyz/3NQ8BHsx8QNiXucj78id6DRnzaxonFBjsy37HoR4DX4E',
    value: 43.09,
    grade: 'PSA 9',
    year: '2023',
  },
  {
    id: 'phyg-002',
    name: 'Time Gazer Gardenia\'s Vigor #78',
    fullName: '2022 Pokemon Sword and Shield Time Gazer Japanese Gardenia\'s Vigor #78 PSA 10',
    image: 'https://gateway.irys.xyz/D7qzFgEX7ywrFhqbFnmpd1cLHszWXNNiaBJmfGkYvT5W',
    value: 46.08,
    grade: 'PSA 10',
    year: '2022',
  },
  {
    id: 'phyg-003',
    name: 'Scarlet & Violet 151 Mew EX #151',
    fullName: '2023 Pokemon Scarlet & Violet 151 Holo Mew EX #151 CGC 10 GEM MINT',
    image: 'https://gateway.irys.xyz/7CJm7Ntkm1et5KGqUThxFpLy7z4MTE1Hxt5VuB41itDX',
    value: 21.18,
    grade: 'CGC 10 GEM',
    year: '2023',
  },
  {
    id: 'phyg-004',
    name: 'Gym 2 Giovanni\'s Gyarados #130',
    fullName: '1999 Pokemon Gym 2 Challenge From the Darkness Japanese Holo Giovanni\'s Gyarados #130 PSA 7',
    image: 'https://gateway.irys.xyz/5q5dWtzpVXUhLWBmRcfJj3bNhqc5xsvcNmC8ajbeVCdR',
    value: 47.71,
    grade: 'PSA 7',
    year: '1999',
  },
  {
    id: 'phyg-005',
    name: 'Battle Region Mightyena #72',
    fullName: '2022 Pokemon Sword and Shield Battle Region Japanese Holo Mightyena #72 CGC BL',
    image: 'https://gateway.irys.xyz/6si4oNakDxcf58VGUJo3UwRAvMdBCjeZacdc1PASMoHR',
    value: 19.87,
    grade: 'CGC BL',
    year: '2022',
  },
  {
    id: 'phyg-006',
    name: 'Silver Tempest Mawile V #70',
    fullName: '2022 Pokemon Sword & Shield Silver Tempest Holo Mawile V #70 CGC 10 PRISTINE',
    image: 'https://gateway.irys.xyz/ETRJbX4DibXDghxA1DVraaXzhyssXcYHFK54V82gGb4f',
    value: 17.99,
    grade: 'CGC 10 PRISTINE',
    year: '2022',
  },
  {
    id: 'phyg-007',
    name: 'Rocket Gang Mewtwo ex #39',
    fullName: '2025 Pokemon Japanese SV Glory Of The Rocket Gang Holo Team Rocket\'s Mewtwo ex #39 CGC 10 GEM',
    image: 'https://gateway.irys.xyz/3pYmy4Mhf4uLdCxv95WRKPo5fmSX4ei2yKr41qe1segi',
    value: 22.46,
    grade: 'CGC 10 GEM',
    year: '2025',
  },
  {
    id: 'phyg-008',
    name: 'Base Set Japanese Raichu #26',
    fullName: '1996 Pokemon Base Set Japanese Holo Raichu #26 CGC 8.5',
    image: 'https://gateway.irys.xyz/5xS75GZf6jMeT1R8zriqQJwMekPaFDVdKpT1yhEBCDhb',
    value: 53.31,
    grade: 'CGC 8.5',
    year: '1996',
  },
  {
    id: 'phyg-009',
    name: 'SV Promo Pikachu #242',
    fullName: '2025 Pokemon Japanese SV Promo Illustration Contest Winner Pikachu #242 CGC 10',
    image: 'https://gateway.irys.xyz/7BAnfkY5E7w3b4mbY7u8s9JZs3djD5hEJMm12meMkJu7',
    value: 34.23,
    grade: 'CGC 10',
    year: '2025',
  },
  {
    id: 'phyg-010',
    name: 'Hidden Fates Frogadier-Holo #SV12',
    fullName: '2019 Pokemon Sun & Moon Hidden Fates #SV12 Frogadier-Holo PSA 10',
    image: 'https://gateway.irys.xyz/9hL8XXLkXYFhrHnSgAyYFiwMi9o4RDsi1ANMtCqKNQDv',
    value: 33.21,
    grade: 'PSA 10',
    year: '2019',
  },
  {
    id: 'phyg-011',
    name: 'VMAX Climax Morpeko V-UNION #228',
    fullName: '2021 Pokemon Japanese Sword & Shield VMAX Climax CSR Morpeko V-UNION #228 CGC 10 PRISTINE',
    image: 'https://gateway.irys.xyz/DQsSBDRjR1j7msmiAsYGsKprhkyCU3ob4ZvVKSWEmRSr',
    value: 39.50,
    grade: 'CGC 10 PRISTINE',
    year: '2021',
  },
  {
    id: 'phyg-012',
    name: 'Celebrations Surfing Pikachu VMAX #9',
    fullName: '2021 Pokemon Sword & Shield Celebrations Surfing Pikachu VMAX #9 CGC 9 MINT',
    image: 'https://gateway.irys.xyz/623myqNNNpBF4HEgVUbtH3UaNgK3GNnUqTQ5AVDfRKSJ',
    value: 17.24,
    grade: 'CGC 9 MINT',
    year: '2021',
  },
  {
    id: 'phyg-013',
    name: 'VMAX Climax Blaziken VMAX #20',
    fullName: '2021 Pokemon Japanese SWSH VMAX Climax Blaziken VMAX #20 CGC 10 GEM MINT',
    image: 'https://gateway.irys.xyz/7XZqcz2v9uvnEYYx9v4HB6CKtTPxBKcjT21EmNGr9bxK',
    value: 13.58,
    grade: 'CGC 10 GEM',
    year: '2021',
  },
  {
    id: 'phyg-014',
    name: 'Charizard G Lv.X 1st Ed #2',
    fullName: '2009 Pokemon Charizard Half-Deck Japanese 1st Edition Charizard G Lv.X #2 PSA 9',
    image: 'https://gateway.irys.xyz/B7M1HLjQ5rEQJM68h9myzKYtbcsmmFp5LQ386kv3sWgD',
    value: 179.62,
    grade: 'PSA 9',
    year: '2009',
  },
  {
    id: 'phyg-015',
    name: 'SV Black Star Promo Mimikyu #075',
    fullName: '2024 Pokemon SVP EN-SV Black Star Promo #075 Mimikyu PSA 9',
    image: 'https://gateway.irys.xyz/8zvG3Sap3yBqiAHnbW8z35p14mjPJsBD3W1X129sbouh',
    value: 21.25,
    grade: 'PSA 9',
    year: '2024',
  },
];

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');

  let liveCards = [];

  try {
    const response = await fetch('https://www.phygitals.com/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'Cache-Control': 'no-cache',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests': '1',
      },
    });

    if (!response.ok) {
      throw new Error(`Phygitals returned ${response.status}`);
    }

    const html = await response.text();
    const match = html.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);
    if (!match) throw new Error('Could not find __NEXT_DATA__');

    const nextData = JSON.parse(match[1]);
    const pageProps = nextData?.props?.pageProps || {};
    const seen = new Set();

    const extractCard = (item) => {
      if (!item) return null;
      const name = item.metadata?.name || item.nft?.metadata?.name || '';
      const image = item.metadata?.image || item.nft?.metadata?.image || '';
      const value = item.value || item.nft?.value || item.amount || 0;
      const id = item.public_id || item.id || item.universalNFTDataAddress || '';
      const slug = item.slug || item.nft?.slug || '';

      if (!name.toUpperCase().includes('POKEMON')) return null;
      if (seen.has(id)) return null;
      seen.add(id);

      let grade = '';
      const gradeMatch = name.match(/(PSA|CGC|BGS)\s*([\d.]+\s*\w*)/i);
      if (gradeMatch) grade = `${gradeMatch[1].toUpperCase()} ${gradeMatch[2].trim()}`;

      const yearMatch = name.match(/^(\d{4})\s/);
      const year = yearMatch ? yearMatch[1] : '';

      let displayName = name;
      if (yearMatch) displayName = displayName.replace(/^\d{4}\s*/, '');
      displayName = displayName.replace(/\s*(PSA|CGC|BGS)\s*[\d.]+\s*\w*/i, '').trim();
      displayName = displayName.replace(/^Pokemon\s+(Japanese\s+)?/i, '').trim();

      return {
        id, slug, name: displayName, fullName: name, image,
        value: typeof value === 'number' ? value : parseFloat(value) || 0,
        grade, year,
      };
    };

    // Process all arrays in pageProps
    for (const key of Object.keys(pageProps)) {
      if (Array.isArray(pageProps[key])) {
        for (const item of pageProps[key]) {
          const card = extractCard(item);
          if (card) liveCards.push(card);
          if (item?.nft) {
            const nftCard = extractCard({ ...item.nft, value: item.amount || item.nft.value });
            if (nftCard) liveCards.push(nftCard);
          }
        }
      }
    }
  } catch (error) {
    console.warn('Live fetch failed, using curated database:', error.message);
  }

  // Merge: live cards first, then fill with curated database (no duplicates)
  const allCards = [...liveCards];
  const liveImages = new Set(liveCards.map(c => c.image));
  for (const card of CARD_DATABASE) {
    if (!liveImages.has(card.image)) {
      allCards.push(card);
    }
  }

  res.status(200).json({
    success: true,
    count: allCards.length,
    live: liveCards.length,
    cards: allCards,
    fetchedAt: new Date().toISOString(),
  });
}
