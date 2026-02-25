// Complete curated Pokemon card database from Phygitals.com
// Real PSA/CGC/BGS graded cards with gateway.irys.xyz permanent images
const CARD_DATABASE = [
  // === LOW VALUE ($10-$25) ===
  { id:'p001', name:'GX Battle Boost Tapu Lele #077', fullName:'2017 Pokemon Japanese GX Battle Boost Reverse Holo Tapu Lele #077 CGC 10', image:'https://gateway.irys.xyz/AsERKcVvtVU91Cm2mJFA8g5X7GaU4DY58fDWGMDfGVGe', value:10.13, grade:'CGC 10', year:'2017' },
  { id:'p002', name:'VMAX Climax Blaziken VMAX #20', fullName:'2021 Pokemon Japanese SWSH VMAX Climax Blaziken VMAX #20 CGC 10 GEM MINT', image:'https://gateway.irys.xyz/7XZqcz2v9uvnEYYx9v4HB6CKtTPxBKcjT21EmNGr9bxK', value:13.58, grade:'CGC 10 GEM', year:'2021' },
  { id:'p003', name:'Astral Radiance Wyrdeer V #134', fullName:'2022 Pokemon Sword & Shield Astral Radiance Full Art Wyrdeer V #134 CGC 9.5 GEM MINT', image:'https://gateway.irys.xyz/2PX1HzRAZX1CDktSs5Dxs9D4xmr22hoEg3T3om2AZhVt', value:13.16, grade:'CGC 9.5 GEM', year:'2022' },
  { id:'p004', name:'Rocket Gang Nidoking EX', fullName:'2025 Pokemon Japanese SV Rocket Gang Full Art Team Rockets Nidoking EX CGC 10', image:'https://gateway.irys.xyz/2JBctmvPrGA2GLbdoAg9F2Posyjn3iYjVebZrQi3rh2i', value:13.24, grade:'CGC 10', year:'2025' },
  { id:'p005', name:'SV 151 Art Rare Omanyte #180', fullName:'2023 Pokemon Japanese Scarlet & Violet 151 Art Rare Omanyte #180 CGC 10 GEM MINT', image:'https://gateway.irys.xyz/5KHtYBpf1ipU3SQ9QTyhZG59JzWiguJQKSVnG1cghVp8', value:14.41, grade:'CGC 10 GEM', year:'2023' },
  { id:'p006', name:'VMAX Climax Charizard #17', fullName:'2021 Pokemon Japanese SWSH VMAX Climax Holo Charizard #17 CGC 9 MINT', image:'https://gateway.irys.xyz/4pQzq8ScwxjG2Z5j3jtxNo8bdavuwmfLvmJig7ZrxPJ7', value:14.61, grade:'CGC 9 MINT', year:'2021' },
  { id:'p007', name:'Crown Zenith Toxtricity #GG09', fullName:'2023 Pokemon Sword and Shield Crown Zenith Toxtricity #GG09 PSA 9', image:'https://gateway.irys.xyz/9FTBMXmxTsdj9THTWSQxmhuD7KFj4iXjiKKuVFfVBhAC', value:15.37, grade:'PSA 9', year:'2023' },
  { id:'p008', name:'Generations Start Decks Mimikyu ex #54', fullName:'2024 Pokemon Japanese SV Generations Start Decks Holo Mimikyu ex #54 CGC 10 GEM MINT', image:'https://gateway.irys.xyz/7zYPxCzCG25U9n5xVo6DNrjbt3JfSiZdhLki6TqmmDfa', value:16.49, grade:'CGC 10 GEM', year:'2024' },
  { id:'p009', name:'VMAX Climax Umbreon V #100', fullName:'2021 Pokemon Japanese Sword & Shield VMAX Climax Holo Umbreon V #100 CGC 10 GEM', image:'https://gateway.irys.xyz/CRk8qPcpAXUsQy3Tp8HbjHcxo9uGEB75NP8HoKLSbbNT', value:16.68, grade:'CGC 10 GEM', year:'2021' },
  { id:'p010', name:'Shiny Star V Ditto VMAX #324', fullName:'2020 Pokemon Japanese SWSH Shiny Star V SSR Ditto VMAX #324 CGC 9 MINT', image:'https://gateway.irys.xyz/4zr7yRtC71edNqNjjTJ1JF6DGP2r3bNTdJiE3iHxwzZ9', value:17.01, grade:'CGC 9 MINT', year:'2020' },
  { id:'p011', name:'Celebrations Surfing Pikachu VMAX #9', fullName:'2021 Pokemon Sword & Shield Celebrations Surfing Pikachu VMAX #9 CGC 9 MINT', image:'https://gateway.irys.xyz/623myqNNNpBF4HEgVUbtH3UaNgK3GNnUqTQ5AVDfRKSJ', value:17.24, grade:'CGC 9 MINT', year:'2021' },
  { id:'p012', name:'Rocket Gang Nidoking ex', fullName:'2025 Pokemon Japanese SV Glory Of Rocket Gang Team Rockets Nidoking ex CGC 10', image:'https://gateway.irys.xyz/3ajAe8y32TXV613mFxQGZR9Rpb2mFndRte6b32mxPiLa', value:17.24, grade:'CGC 10', year:'2025' },
  { id:'p013', name:'Eevee Heroes Glaceon V #24', fullName:'2021 Pokemon Japanese SWSH Eevee Heroes Full Art Glaceon V #24 CGC 10 GEM MINT', image:'https://gateway.irys.xyz/9XS3DhgiWGkeZrLMTNvK4jVbPvBdnSn99AKhrXS4V4n6', value:17.20, grade:'CGC 10 GEM', year:'2021' },
  { id:'p014', name:'Silver Tempest Mawile V #70', fullName:'2022 Pokemon Sword & Shield Silver Tempest Holo Mawile V #70 CGC 10 PRISTINE', image:'https://gateway.irys.xyz/ETRJbX4DibXDghxA1DVraaXzhyssXcYHFK54V82gGb4f', value:17.99, grade:'CGC 10 PRISTINE', year:'2022' },
  { id:'p015', name:'Time Gazer Machamp VMAX #33', fullName:'2022 Pokemon Japanese Sword & Shield Time Gazer Machamp VMAX #33 CGC 10 GEM MINT', image:'https://gateway.irys.xyz/wT1Z5NaQ4LnDtL71eFUtMUbMoX13SHCwK59f4f1d1BS', value:18.76, grade:'CGC 10 GEM', year:'2022' },
  { id:'p016', name:'Battle Region Mightyena #72', fullName:'2022 Pokemon Sword and Shield Battle Region Japanese Holo Mightyena #72 CGC BL', image:'https://gateway.irys.xyz/6si4oNakDxcf58VGUJo3UwRAvMdBCjeZacdc1PASMoHR', value:19.87, grade:'CGC BL', year:'2022' },
  { id:'p017', name:'SV 151 Vaporeon #134', fullName:'2023 Pokemon Japanese SV 151 Poke Ball Reverse Holo Vaporeon #134 CGC 10', image:'https://gateway.irys.xyz/A1hoJPKMS2zMLYmqKA4xeDS1M5rtXAMemrfdoojPz6nL', value:20.13, grade:'CGC 10', year:'2023' },
  { id:'p018', name:'Scarlet & Violet 151 Mew EX #151', fullName:'2023 Pokemon Scarlet & Violet 151 Holo Mew EX #151 CGC 10 GEM MINT', image:'https://gateway.irys.xyz/7CJm7Ntkm1et5KGqUThxFpLy7z4MTE1Hxt5VuB41itDX', value:21.18, grade:'CGC 10 GEM', year:'2023' },
  { id:'p019', name:'SV Black Star Promo Mimikyu #075', fullName:'2024 Pokemon SVP EN-SV Black Star Promo #075 Mimikyu PSA 9', image:'https://gateway.irys.xyz/8zvG3Sap3yBqiAHnbW8z35p14mjPJsBD3W1X129sbouh', value:21.25, grade:'PSA 9', year:'2024' },
  { id:'p020', name:'Rocket Gang Mewtwo ex #39', fullName:'2025 Pokemon Japanese SV Glory Of The Rocket Gang Holo Team Rockets Mewtwo ex #39 CGC 10 GEM', image:'https://gateway.irys.xyz/3pYmy4Mhf4uLdCxv95WRKPo5fmSX4ei2yKr41qe1segi', value:22.46, grade:'CGC 10 GEM', year:'2025' },
  { id:'p021', name:'XY Gaia Volcano Rhyperior #32', fullName:'2014 Pokemon Japanese XY Gaia Volcano 1st Edition Holo Rhyperior #32 CGC 10 GEM', image:'https://gateway.irys.xyz/FNysXLwtcTehrdMgeY8gVuALr8VRLEi8vSkkRF5jhx8A', value:24.40, grade:'CGC 10 GEM', year:'2014' },

  // === MID VALUE ($25-$60) ===
  { id:'p022', name:'Hidden Fates Frogadier-Holo #SV12', fullName:'2019 Pokemon Sun & Moon Hidden Fates #SV12 Frogadier-Holo PSA 10', image:'https://gateway.irys.xyz/9hL8XXLkXYFhrHnSgAyYFiwMi9o4RDsi1ANMtCqKNQDv', value:28.23, grade:'PSA 10', year:'2019' },
  { id:'p023', name:'VMAX Climax Morpeko V-UNION #228', fullName:'2021 Pokemon Japanese Sword & Shield VMAX Climax CSR Morpeko V-UNION #228 CGC 10 PRISTINE', image:'https://gateway.irys.xyz/DQsSBDRjR1j7msmiAsYGsKprhkyCU3ob4ZvVKSWEmRSr', value:33.57, grade:'CGC 10 PRISTINE', year:'2021' },
  { id:'p024', name:'SV Promo Pikachu #242', fullName:'2025 Pokemon Japanese SV Promo Illustration Contest Winner Pikachu #242 CGC 10', image:'https://gateway.irys.xyz/7BAnfkY5E7w3b4mbY7u8s9JZs3djD5hEJMm12meMkJu7', value:34.23, grade:'CGC 10', year:'2025' },
  { id:'p025', name:'Mega Charizard X ex #109', fullName:'2025 Pokemon Mega Phantasmal Flames Full Art Mega Charizard X ex #109 CGC 9 MINT', image:'https://gateway.irys.xyz/HnQmNkFA6Rvjdwt54WMrTS4xha8ub67VHJHJ96Psor6F', value:38.21, grade:'CGC 9 MINT', year:'2025' },
  { id:'p026', name:'Crown Zenith Pikachu #160', fullName:'2023 Pokemon Sword and Shield Crown Zenith Pikachu #160 PSA 9', image:'https://gateway.irys.xyz/3NQ8BHsx8QNiXucj78id6DRnzaxonFBjsy37HoR4DX4E', value:43.09, grade:'PSA 9', year:'2023' },
  { id:'p027', name:'Time Gazer Gardenias Vigor #78', fullName:'2022 Pokemon Sword and Shield Time Gazer Japanese Gardenias Vigor #78 PSA 10', image:'https://gateway.irys.xyz/D7qzFgEX7ywrFhqbFnmpd1cLHszWXNNiaBJmfGkYvT5W', value:46.08, grade:'PSA 10', year:'2022' },
  { id:'p028', name:'Gym 2 Giovannis Gyarados #130', fullName:'1999 Pokemon Gym 2 Challenge From the Darkness Japanese Holo Giovannis Gyarados #130 PSA 7', image:'https://gateway.irys.xyz/5q5dWtzpVXUhLWBmRcfJj3bNhqc5xsvcNmC8ajbeVCdR', value:47.71, grade:'PSA 7', year:'1999' },
  { id:'p029', name:'Base Set Japanese Raichu #26', fullName:'1996 Pokemon Base Set Japanese Holo Raichu #26 CGC 8.5', image:'https://gateway.irys.xyz/5xS75GZf6jMeT1R8zriqQJwMekPaFDVdKpT1yhEBCDhb', value:53.31, grade:'CGC 8.5', year:'1996' },

  // === HIGH VALUE ($100-$250) ===
  { id:'p030', name:'Tyranitar V Full Art #155', fullName:'2021 Pokemon Sword & Shield Battle Styles #155 FA Tyranitar V', image:'https://xexhjcyxgwxfopyobhmk.supabase.co/storage/v1/object/public/images/claw-listings/external/did:privy:cm89av1a200kz28daow0x9bjq/129830434.jpg', value:135.00, grade:'Raw', year:'2021' },
  { id:'p031', name:'Hiroshimas Pikachu #261', fullName:'2025 Pokemon Japanese SV Promo Center Special Reverse Holo Hiroshimas Pikachu #261 CGC 9 MINT', image:'https://gateway.irys.xyz/2srpKNNeEWqUubKLedmZHMCVugSMBoc1b7NCv6iQ33fR', value:151.42, grade:'CGC 9 MINT', year:'2025' },
  { id:'p032', name:'Surging Sparks SIR Latias ex #239', fullName:'2024 Pokemon Scarlet & Violet Surging Sparks SIR Latias ex #239 PSA 9 MINT', image:'https://gateway.irys.xyz/FcSX2YH66TZ1fDGPPaPyrY7xHCZgPepxNB9XVyfTWav5', value:161.17, grade:'PSA 9 MINT', year:'2024' },
  { id:'p033', name:'Gym 2 Sabrina', fullName:'1999 Sabrina CGC 10 Gym 2', image:'https://arweave.net/tU6e_tdaonG6j8vqXf8eNL3IvecSYLlvA3RFf5F5Hxw', value:161.40, grade:'CGC 10', year:'1999' },
  { id:'p034', name:'151 Illustration Rare Dragonair #181', fullName:'2023 Pokemon Scarlet and Violet 151 Illustration Rare Dragonair #181 PSA 10', image:'https://gateway.irys.xyz/Dcp6s7PuQdffZzjbd6Jmrz3ssASE2pxxR1mdEKfUcwZ3', value:162.00, grade:'PSA 10', year:'2023' },
  { id:'p035', name:'151 Ultra Rare Charizard Ex #183', fullName:'2023 Pokemon Scarlet and Violet 151 Ultra Rare Charizard Ex #183 PSA 10', image:'https://gateway.irys.xyz/H4VcZJc9L6ucKdyFhr1F8MHAQZWSAPfB43QkkDEA2JNa', value:162.30, grade:'PSA 10', year:'2023' },
  { id:'p036', name:'Terastal Festival Glaceon Ex #206', fullName:'2024 Pokemon Scarlet and Violet Terastal Festival Ex Japanese Special Art Rare Glaceon Ex #206 BGS 10', image:'https://gateway.irys.xyz/FUdDRR9vvNUvo4QSiqyuGTwftQSvYpLYpy2kHYvtJzoR', value:166.49, grade:'BGS 10', year:'2024' },
  { id:'p037', name:'Dark Dragonite #5', fullName:'2000 Pokemon Team Rocket Holo Dark Dragonite #5 PSA 8', image:'https://gateway.irys.xyz/BgoN5CxaGiaqUsF2LbjKyUvgavJqHGTqv84HcqTWjYBn', value:167.57, grade:'PSA 8', year:'2000' },
  { id:'p038', name:'Skyridge Reverse Holo Snubbull #101', fullName:'2003 Pokemon Skyridge Reverse Holo Snubbull #101 CGC 10 GEM MINT', image:'https://gateway.irys.xyz/8gM1x3e358wXE4JaPpMfLWCfXQE2cwe47ePiq3fzpVAd', value:169.67, grade:'CGC 10 GEM', year:'2003' },
  { id:'p039', name:'Celebrations Birthday Pikachu #24', fullName:'2021 Pokemon Celebrations Classic Collection #24 Birthday Pikachu-Holo PSA 10', image:'https://gateway.irys.xyz/7Q5fQo3syP69XHC5sM5cSu4N3Qp6JNZajjii7za4ZaHc', value:173.72, grade:'PSA 10', year:'2021' },
  { id:'p040', name:'Crown Zenith Mewtwo VSTAR #GG44', fullName:'2023 Pokemon Sword & Shield Crown Zenith #GG44 Full Art Mewtwo VSTAR PSA 9', image:'https://gateway.irys.xyz/CWBK4Qtx7DYikanSnthRPJPZQBbs71SYzUwRNNTqhTPK', value:174.89, grade:'PSA 9', year:'2023' },
  { id:'p041', name:'Cosmic Eclipse Lana/Mallow #231', fullName:'2019 Pokemon Sun and Moon Cosmic Eclipse Lana/Mallow #231 PSA 10', image:'https://gateway.irys.xyz/FLCDBphf8WTF6b68HNt2uhuRM9GRXHKBkDXeXJYKNJ5m', value:175.86, grade:'PSA 10', year:'2019' },
  { id:'p042', name:'Black Star Promo Charizard EX #161', fullName:'2024 Pokemon SVP EN-SV Black Star Promo Charizard EX #161 PSA 10', image:'https://arweave.net/S4Km2uBbGaVkL90M_3uCOb-gYrkC-N6fNo01NZeB2MU', value:177.87, grade:'PSA 10', year:'2024' },
  { id:'p043', name:'Charizard G Lv.X 1st Ed #2', fullName:'2009 Pokemon Charizard Half-Deck Japanese 1st Edition Charizard G Lv.X #2 PSA 9', image:'https://gateway.irys.xyz/B7M1HLjQ5rEQJM68h9myzKYtbcsmmFp5LQ386kv3sWgD', value:179.62, grade:'PSA 9', year:'2009' },
  { id:'p044', name:'Jungle Vaporeon #28', fullName:'1999 Pokemon Jungle Vaporeon #28 PSA 10', image:'https://gateway.irys.xyz/FJrdjVrS9onjtFMJuy3dK9P3Gifh3Zf1B7J6jeQwFopQ', value:180.46, grade:'PSA 10', year:'1999' },
  { id:'p045', name:'Coin Promo Charizard', fullName:'2005 Pokemon Coin Promo World Championships Charizard PSA 8 NM-MT', image:'https://gateway.irys.xyz/3DpuZq5L2JWxbKG9rqVT1aB7NEauJqe3BuJ9Tq2KTizC', value:189.95, grade:'PSA 8', year:'2005' },
  { id:'p046', name:'Legendary Collection Dark Slowbro #8', fullName:'2002 Pokemon Legendary Collection Reverse Holo Dark Slowbro #8 CGC 8.5 NM-MT+', image:'https://gateway.irys.xyz/GrAQdaMDv3zb175YBaGpn4VBm3n3mq7msroTobnhhhoc', value:190.25, grade:'CGC 8.5', year:'2002' },
  { id:'p047', name:'Base Set Japanese Lass', fullName:'1996 Pokemon Base Set Japanese Trainer No Rarity Symbol Lass PSA 8', image:'https://gateway.irys.xyz/9z1Hh4NhWtCbxHRCuCs5Wyk4dUANnq6sSPrVgotp3zLT', value:194.58, grade:'PSA 8', year:'1996' },
  { id:'p048', name:'Meiji Chocolate Charizard #054', fullName:'2004 Pokemon Japanese Meiji Chocolate Charizard #054 CGC 9', image:'https://gateway.irys.xyz/8hXoM87wfuMmkzyeVxXp5mVUjRL8qBamSyjJdRYEN41V', value:194.56, grade:'CGC 9', year:'2004' },
  { id:'p049', name:'Alter Genesis Caitlin/Cynthia #106', fullName:'2019 Pokemon Sun and Moon Alter Genesis Japanese Caitlin/Cynthia #106 PSA 10', image:'https://gateway.irys.xyz/8WmJ81Qm4PysHfPwze2myVrG3akNMKiWXNo1k6J7ji51', value:199.41, grade:'PSA 10', year:'2019' },
  { id:'p050', name:'Expedition Mew Reverse Foil #19', fullName:'2002 Pokemon Expedition Mew Reverse Foil #19 CGC 8.5', image:'https://arweave.net/17vMbXqI8IK_ONLm_cePV9Enb4BTEmJK6k8HZkin8MU', value:203.56, grade:'CGC 8.5', year:'2002' },
  { id:'p051', name:'Gengar & Mimikyu GX #53', fullName:'2019 Pokemon Sun & Moon Team Up Holo Gengar & Mimikyu GX #53 CGC 8', image:'https://gateway.irys.xyz/CqLrUuJCHeT2msS5rpi7vRJRTungNDixEQv85qQzpYBq', value:203.09, grade:'CGC 8', year:'2019' },
  { id:'p052', name:'JPN Promo Umbreon #067', fullName:'2023 Pokemon JPN SV-P Promo #067 Umbreon PSA 10', image:'https://gateway.irys.xyz/umjTdbxjfauNGp4oDYjdjfdsRHGp9kVw4mgNQd55PF9', value:205.31, grade:'PSA 10', year:'2023' },
  { id:'p053', name:'Neo Rocket Dark Blastoise', fullName:'2000 Pokemon Neo Rocket Dark Blastoise Holo PSA 8', image:'https://gateway.irys.xyz/5J4Uz83RqLRTt77SdBXf4VVRW1W9GveT9gCzQj6VbXVB', value:210.03, grade:'PSA 8', year:'2000' },

  // === PREMIUM VALUE ($220-$350) ===
  { id:'p054', name:'Paradise Dragona Lisias Appeal #091', fullName:'2024 Pokemon JPN SV7A Paradise Dragona Special Art #091 Lisias Appeal PSA 10', image:'https://gateway.irys.xyz/J11JSP6Q6hnxn4SHQaby13YRDTkLc2CcUWyYur7GJpGm', value:222.22, grade:'PSA 10', year:'2024' },
  { id:'p055', name:'Obsidian Flames Ninetales #199', fullName:'2023 Pokemon Scarlet and Violet Obsidian Flames Illustration Rare Ninetales #199 PSA 10', image:'https://gateway.irys.xyz/2iphtnn3jGzMPcvXgRyUhZRf7TPwrRoEeXH1yuFrsqDi', value:223.10, grade:'PSA 10', year:'2023' },
  { id:'p056', name:'Shrouded Fable Kingdra Ex #131', fullName:'2024 Pokemon Scarlet and Violet Black Star Promo Shrouded Fable Kingdra Ex #131 PSA 10', image:'https://gateway.irys.xyz/24vGE7HfVYnfZEKLQQ3RXCTiJEtTALi11LqGp35YTkpJ', value:224.71, grade:'PSA 10', year:'2024' },
  { id:'p057', name:'Base Set Japanese Charizard #6', fullName:'1996 Pokemon Japanese Base Set Holo Charizard #6 CGC 3.5', image:'https://gateway.irys.xyz/2GZKhZyaG9eJvwVEaTHJSajg4mvzLD7eUBLGg1i9vH89', value:227.75, grade:'CGC 3.5', year:'1996' },
  { id:'p058', name:'Tag Team Pikachu/Zekrom GX #SM168', fullName:'2019 Pokemon Sun and Moon Black Star Promo Tag Team Pikachu/Zekrom GX #SM168 PSA 9', image:'https://gateway.irys.xyz/9sv2iyLgYPgAi2twNiAGiT1iEVEgWFFX8sWekiNSm49p', value:231.71, grade:'PSA 9', year:'2019' },
  { id:'p059', name:'School Festa Lillie #148', fullName:'2017 Pokemon School Festa Japanese Lillie #148 PSA 9', image:'https://gateway.irys.xyz/3P1TQ1U7X5GiTMksvo8w62mJGVRdKWbyjgDAPrvmwJA5', value:232.95, grade:'PSA 9', year:'2017' },
  { id:'p060', name:'Brilliant Stars Alt Art Charizard V #154', fullName:'2022 Pokemon Sword & Shield Brilliant Stars Alt Art Charizard V #154 CGC 9 MINT', image:'https://gateway.irys.xyz/Cz13872H2fJ4stmRVRrzwV5fg3miPzdu17vVMKP4ZEGc', value:235.47, grade:'CGC 9 MINT', year:'2022' },
  { id:'p061', name:'Unbroken Bonds Greens Exploration', fullName:'2019 Pokemon Sun & Moon Unbroken Bonds Greens Exploration PSA 10', image:'https://gateway.irys.xyz/6RHpzp9qVUZWRsFoDaxRc14jBLs2N9RKnbAtafoxfPEe', value:236.59, grade:'PSA 10', year:'2019' },
  { id:'p062', name:'Surging Sparks Pikachu Ex #247', fullName:'2024 Pokemon Surging Sparks Hyper Rare Pikachu Ex #247 PSA 10', image:'https://gateway.irys.xyz/5RRdMUPfLAsytFjfFEKgdPeWkJC4hz29ZYeNNJBYmfmo', value:242.90, grade:'PSA 10', year:'2024' },
  { id:'p063', name:'Double Crisis Groudon Ex #15', fullName:'2015 Pokemon XY Double Crisis Team Magmas Groudon Ex #15 PSA 3', image:'https://gateway.irys.xyz/3TfrSmvNUz4DLfnyChHhuxjaQyMPYkxD4rHYT5qPMGCd', value:245.67, grade:'PSA 3', year:'2015' },
  { id:'p064', name:'Plaza Challenge Victory Medal #31', fullName:'2009 Pokemon Japanese Promo Plaza Challenge Victory Medal #31 PSA 10 GEM MINT', image:'https://gateway.irys.xyz/kFvs2kVc4Jxzu87jF6GkHSEvt3rxc1FxDip8QAj3E2w', value:251.86, grade:'PSA 10 GEM', year:'2009' },
  { id:'p065', name:'Chinese SV Gem Pack Cubone #407', fullName:'2025 Pokemon Chinese Scarlet & Violet Gem Pack Volume 3 AR Cubone #407 CGC 10', image:'https://gateway.irys.xyz/J8edXfLDMEkkZd7MrRvzpbN4jCMGmHu9iBBT1hpQhMcd', value:258.28, grade:'CGC 10', year:'2025' },
  { id:'p066', name:'Topsun Blue Back Blastoise #9', fullName:'1997 Pokemon Japanese Topsun Blue Back Blastoise #9 CGC 9', image:'https://gateway.irys.xyz/7Zi32Wx4m9K4Zq39ievjK6LcVtY2wUCPigp4L8Rgpz7X', value:268.99, grade:'CGC 9', year:'1997' },

  // === ULTRA PREMIUM ($300+) ===
  { id:'p067', name:'151 SIR Charizard EX #199', fullName:'2023 Pokemon Mew EN-151 Special Illustration Rare #199 Charizard EX PSA 9', image:'https://gateway.irys.xyz/GzDrqwvHqEhLBCVguxeHMdS1xVTeQtnGRnUa65A94TRe', value:302.55, grade:'PSA 9', year:'2023' },
  { id:'p068', name:'SV Black Bolt Zekrom ex #174', fullName:'2025 Pokemon Japanese SV Black Bolt Full Art Zekrom ex #174 CGC 10', image:'https://gateway.irys.xyz/9PfS7fCv6ZDLMvSf8DfArqW158rMTvZDm9VfMwHoH5hu', value:323.12, grade:'CGC 10', year:'2025' },
  { id:'p069', name:'PM Center Shibuyas Pikachu #2', fullName:'2019 Pokemon Japanese P.M. Center Opening Shibuyas Pikachu #2 PSA 10 GEM MINT', image:'https://gateway.irys.xyz/BrTVJycT8DDcu2yYwarM3yunqQAH8ehWWG3i8TQaAmUu', value:522.99, grade:'PSA 10 GEM', year:'2019' },
  { id:'p070', name:'Plasma Freeze Latias EX', fullName:'2013 Pokemon B&W Plasma Freeze Latias EX PSA 9', image:'https://gateway.irys.xyz/Hghgnv4vbseq11Ka3ym8t1hDAeR8CpTMgGgx9Bv5rV3u', value:619.77, grade:'PSA 9', year:'2013' },

  // === NEW CARDS FROM HOMEPAGE ROTATION ===
  { id:'p071', name:'Neo Genesis 1st Ed Kingdra #8', fullName:'2000 Pokemon Neo Genesis 1st Edition Holo Kingdra #8 BGS 9.5', image:'https://gateway.irys.xyz/DHbw2yynfq3XMz8T8PbvR6bBsjeSbeDFbBun7g7swquk', value:490.14, grade:'BGS 9.5', year:'2000' },
  { id:'p072', name:'Terastal Festival Sylveon Ex #212', fullName:'2024 Pokemon SV Terastal Festival Ex JPN Sylveon Ex #212 PSA 10', image:'https://gateway.irys.xyz/H7LvGvtAmsHz1urWTJWv2fpaSjrppJi3mWs4aQQkfgMx', value:178.61, grade:'PSA 10', year:'2024' },
  { id:'p073', name:'Base Set Shadowless 1st Ed Raichu #14', fullName:'1999 Pokemon Base Set Shadowless 1st Edition Holo Raichu #14 PSA 9', image:'https://gateway.irys.xyz/4HorGKa2NuFAoXeE8NLZUJPtLmLWzy6uSPuDcfkPgRGp', value:2563.75, grade:'PSA 9', year:'1999' },
  { id:'p074', name:'Tag Team Lucario/Melmetal GX #83', fullName:'2019 Pokemon Sun and Moon Tag Team GX All Stars JPN Lucario/Melmetal GX #83 CGC 10', image:'https://gateway.irys.xyz/Ncz71FidPGnNHYXFZo2pGzfNs1cPdKpUwWf9aTSHiBH', value:22.77, grade:'CGC 10', year:'2019' },
  { id:'p075', name:'German Base Set 1st Ed Squirtle #63', fullName:'1999 Pokemon German Base Set 1st Edition Squirtle #63 PSA 10', image:'https://gateway.irys.xyz/FYEYAQ2j9rJDgGqugBZMY2cVXMUiUwoi5kwSEgoVTXxR', value:457.42, grade:'PSA 10', year:'1999' },
  { id:'p076', name:'XY Awakening Psychic King Mew #27', fullName:'2016 Pokemon Japanese XY Awakening Psychic King 1st Ed Holo Mew #27 PSA 10', image:'https://gateway.irys.xyz/4HW1KVubLBsnJqmhxoBCicgT6dTmCpnErDGPAmcz9pD4', value:175.09, grade:'PSA 10', year:'2016' },
  { id:'p077', name:'Terastal Festival Ceruledge Ex #203', fullName:'2024 Pokemon SV Terastal Festival Ex JPN Ceruledge Ex #203 PSA 10', image:'https://gateway.irys.xyz/7wYJkhEDJRwydNbPo2bQmMsmunF72QhqDq9YNdaeZoRu', value:48.97, grade:'PSA 10', year:'2024' },
  { id:'p078', name:'Base Set Unlimited Charizard', fullName:'1999 Pokemon Base Set Unlimited Charizard BGS 8', image:'https://gateway.irys.xyz/HnTwr4by3jK4KwVZGPuYX49xn9p3qncDRhKn6Xg2MBgE', value:829.34, grade:'BGS 8', year:'1999' },
  { id:'p079', name:'HeartGold SoulSilver Slowking #12', fullName:'2010 Pokemon HeartGold & SoulSilver Reverse Holo Slowking #12 CGC 8.5', image:'https://gateway.irys.xyz/HmqWrsssw1Z5EpbdcvXUt9ukZoGCZ99eVmdkB2534khs', value:32.22, grade:'CGC 8.5', year:'2010' },
  { id:'p080', name:'JPN VS 1st Ed Rockets Tyranitar #142', fullName:'2001 Pokemon JPN VS 1st Ed #142 Rockets Tyranitar-Holo PSA 10', image:'https://gateway.irys.xyz/Da9FqCwCLALVSwJdFZndFhpxn1tqWVGLpBVZStmMHd4d', value:902.36, grade:'PSA 10', year:'2001' },
  { id:'p081', name:'World Championships Mew Gold Star #101', fullName:'2008 Pokemon World Championships Promo Mew Gold Star #101 PSA 9', image:'https://gateway.irys.xyz/8Xw7eUE1GeVEQMUfwoSNVgqmUSpBsBFPyXZfvHvs7gJY', value:735.16, grade:'PSA 9', year:'2008' },
  { id:'p082', name:'SV 151 Poke Ball Arcanine #59', fullName:'2023 Pokemon Japanese SV 151 Poke Ball Reverse Holo Arcanine #59 CGC 10', image:'https://gateway.irys.xyz/EuBGJvqwyw3JDLxKuCCod1koZJmmzkvRvPW8aHxEJdGG', value:14.37, grade:'CGC 10', year:'2023' },
  { id:'p083', name:'Base Set No Rarity Blastoise #9', fullName:'1996 Pokemon Japanese Base No Rarity Symbol Holo Blastoise #9 PSA 5', image:'https://gateway.irys.xyz/5FsP34cX7na3nTPSZNjp7UGphPKS5uhF3vUNdWbLfq6b', value:742.90, grade:'PSA 5', year:'1996' },
  { id:'p084', name:'Champions Path Charizard V #79', fullName:'2020 Pokemon Sword and Shield Champions Path Secret Rare Charizard V #79 BGS 10', image:'https://gateway.irys.xyz/J4FBJZ4YVPPnakeF2eC6uAMnhioRW2SQqmHzGzkHyrbx', value:724.79, grade:'BGS 10', year:'2020' },
  { id:'p085', name:'Surging Sparks Latias EX #239', fullName:'2024 Pokemon SSP EN-Surging Sparks Special Illustration Latias EX PSA 9', image:'https://gateway.irys.xyz/2JPiG1k7WwXMzatF9dLjgALq2DDdk4d4RehL6KTkYDvg', value:161.17, grade:'PSA 9', year:'2024' },
  { id:'p086', name:'Celebrations Ultra Premium Charizard', fullName:'2021 Pokemon SWSH Celebration Classic Ultra Premium Charizard CGC 8.5', image:'https://gateway.irys.xyz/9MfnQKAiAL57pRdUN8qJNdQKUCUqfWiRK78pntuHNdzK', value:213.44, grade:'CGC 8.5', year:'2021' },
  { id:'p087', name:'Fusion Strike Celebi V #245', fullName:'2021 Pokemon Sword and Shield Fusion Strike Celebi V #245 PSA 10', image:'https://gateway.irys.xyz/6PMnv771Lkykh5JDRSp7w4FKKiad7VnNM15C3BBq4rDR', value:230.54, grade:'PSA 10', year:'2021' },
  { id:'p088', name:'EX Hidden Legends Shiftry #14', fullName:'2004 Pokemon EX Hidden Legends #14 Shiftry-Holo PSA 10', image:'https://gateway.irys.xyz/ErjBSGM56ogRLdg2VyczfDn7vBX1Ra7t4d97rM92Cm25', value:234.33, grade:'PSA 10', year:'2004' },
  { id:'p089', name:'EX Holon Phantoms Gyarados #8', fullName:'2006 Pokemon Ex Holon Phantoms Holo Gyarados #8 PSA 8', image:'https://gateway.irys.xyz/GYPMFP7inTMYj1GRnZWGTQqHtEmdEqTwNUVrWfQW4Ze6', value:256.27, grade:'PSA 8', year:'2006' },
  { id:'p090', name:'151 SIR Charizard EX #199 BGS', fullName:'2023 Pokemon Scarlet and Violet 151 Special Illustration Rare Charizard Ex #199 BGS 9.5', image:'https://gateway.irys.xyz/DqLjYhSVda3yc1tsL4PqabPgDe5Ju2w5LqAv5kH5yN2x', value:663.11, grade:'BGS 9.5', year:'2023' },
  { id:'p091', name:'EX Delta Species Gold Star Groudon #111', fullName:'2005 Pokemon Ex Delta Species Gold Star Holo Groudon #111 PSA 2', image:'https://gateway.irys.xyz/Ezribentgq92sVypLxydXR2PDpUDQL2M8sVDiF7Xt7Gu', value:912.37, grade:'PSA 2', year:'2005' },
  { id:'p092', name:'Team Rocket Dark Magneton #11', fullName:'2000 Pokemon Team Rocket Holo Dark Magneton #11 PSA 8', image:'https://gateway.irys.xyz/CLScXWU5Db4Ks4do2nzS2ptZC7VyYTwZTGQhCzdZnuc', value:55.57, grade:'PSA 8', year:'2000' },
  { id:'p093', name:'Shiny Treasure Charizard Ex #115', fullName:'2023 Pokemon Japanese SV Shiny Treasure Ex Holo Charizard Ex #115 CGC 10 GEM', image:'https://gateway.irys.xyz/9oTGwhXrckVpUKtJZb9CtSskDRPPwHFnjUR5Y4RsUsjp', value:22.30, grade:'CGC 10 GEM', year:'2023' },
  { id:'p094', name:'Double Blaze Gengar #33', fullName:'2019 Pokemon JPN Sun & Moon Double Blaze Gengar #33 PSA 10', image:'https://gateway.irys.xyz/DkkupzJEFkQnEXLR6jeARK2cTGaNaGNfGY6eRdxMrm8z', value:118.42, grade:'PSA 10', year:'2019' },
  { id:'p095', name:'Dutch Jungle 1st Ed Venomoth #13', fullName:'2000 Pokemon Dutch Jungle 1st Ed Holo Venomoth #13 CGC 9.5', image:'https://gateway.irys.xyz/D78T6XJ2SHhxkDgudZHrWAnYWZS65RVvMyq1cBqSESKN', value:133.14, grade:'CGC 9.5', year:'2000' },
  { id:'p096', name:'Fossil Moltres #27', fullName:'1999 Pokemon Fossil Moltres #27 CGC 7.5 NRMT+', image:'https://gateway.irys.xyz/CHdPYpc7eHHpjVRfFcKUyg6eDfEFH3hbJJvFhNM1Dhdh', value:15.80, grade:'CGC 7.5', year:'1999' },
  { id:'p097', name:'BW Megalo Cannon Exeggcute #83', fullName:'2013 Pokemon Japanese BW Megalo Cannon 1st Ed Exeggcute #83 PSA 9', image:'https://gateway.irys.xyz/BtNxUWZfEu6FEaTqycvj2pHarPMYuDT6XNYzsNXos6Vf', value:280.64, grade:'PSA 9', year:'2013' },
  { id:'p098', name:'Paradox Rift Iron Valiant EX', fullName:'2023 Pokemon Paradox Rift Special Illustration Rare Iron Valiant EX PSA 9', image:'https://gateway.irys.xyz/5CM4FqweSPFXAy62x7ardBtN1asLCjKQLYAYVk52Kfd7', value:24.40, grade:'PSA 9', year:'2023' },
  { id:'p099', name:'SV Triplet Beat Dendra #92', fullName:'2023 Pokemon JPN SV Triplet Beat Dendra #92 PSA 10', image:'https://gateway.irys.xyz/CwwHYF7ebch3uLgKkyReDpP3efk8NEKSRwjEFkEFpbAM', value:26.13, grade:'PSA 10', year:'2023' },
  { id:'p100', name:'Base Set Kadabra #32', fullName:'1999 Pokemon Base Set Kadabra #32 CGC 8.5', image:'https://gateway.irys.xyz/2qvWMHGytXp7mg8WTxa5GVHn5rPasnb56um2VngFHxNC', value:17.81, grade:'CGC 8.5', year:'1999' },
  { id:'p101', name:'SV2a 151 Articuno #144 Reverse', fullName:'2023 Pokemon JPN SV2a Pokemon Card 151 Articuno #144 Reverse Holo PSA 10', image:'https://gateway.irys.xyz/BanpxVr8j7jx2uE6W8mqgF9T8LGcSZLt9EHJKtsvusSH', value:43.80, grade:'PSA 10', year:'2023' },
  { id:'p102', name:'Paldean Fates Paldean Student #86', fullName:'2024 Pokemon SWSH Paldean Fates Reverse Holo Paldean Student #86 CGC 10', image:'https://gateway.irys.xyz/GkNrfR53oB8QieAxmZDdUMxyJTZcR4Csj4xRGa5jr3oy', value:14.25, grade:'CGC 10', year:'2024' },
  { id:'p103', name:'Korean SV-P Promo Ditto #173', fullName:'2025 Pokemon Korean SV-P Promo #173 Ditto PSA 10', image:'https://gateway.irys.xyz/8KvhoYm6xGaQXyCbUsCbfQAHA8f1MUKg3ANPPaat5Sev', value:180.95, grade:'PSA 10', year:'2025' },
  { id:'p104', name:'Base Set 1st Ed Super Potion #90', fullName:'1999 Pokemon Base Set 1st Edition #90 Super Potion PSA 10', image:'https://gateway.irys.xyz/DMft1EDZcuiMeG4i1yiUv5b86UaAkbbjAvuykggEQaVb', value:540.60, grade:'PSA 10', year:'1999' },
  { id:'p105', name:'Base Set Shadowless Devolution Spray #72', fullName:'1999 Pokemon Base Set Shadowless #72 Devolution Spray PSA 10', image:'https://gateway.irys.xyz/891G595jppn2LcBChqobjxkLDvc6T2JbErsBCwsFwaof', value:339.00, grade:'PSA 10', year:'1999' },
  { id:'p106', name:'Rocket 1st Ed Dark Charizard #4', fullName:'2000 Pokemon Rocket 1st Ed #4 Dark Charizard-Holo PSA 7', image:'https://gateway.irys.xyz/81CLJR3Jg3B8oSCMiABnW43To4kpQfUyKDt2NkuXojv6', value:656.43, grade:'PSA 7', year:'2000' },
];

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');

  let liveCards = [];

  // Try to fetch fresh cards from Phygitals homepage
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 7000);

    const response = await fetch('https://www.phygitals.com/', {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    });
    clearTimeout(timeout);

    if (response.ok) {
      const html = await response.text();
      const match = html.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);
      if (match) {
        const nextData = JSON.parse(match[1]);
        const pageProps = nextData?.props?.pageProps || {};
        const seen = new Set();

        const extractCard = (item) => {
          if (!item) return null;
          const name = item.metadata?.name || item.nft?.metadata?.name || '';
          const image = item.metadata?.image || item.nft?.metadata?.image || '';
          const value = item.value || item.nft?.value || item.amount || 0;
          if (!name.toUpperCase().includes('POKEMON') && !name.toUpperCase().includes('POKÉMON')) return null;
          if (!image || seen.has(image)) return null;
          seen.add(image);

          let grade = '';
          const gm = name.match(/(PSA|CGC|BGS)\s*([\d.]+[\s\w]*)/i);
          if (gm) grade = `${gm[1].toUpperCase()} ${gm[2].trim()}`;
          const ym = name.match(/^(\d{4})\s/);

          let displayName = name;
          if (ym) displayName = displayName.replace(/^\d{4}\s*/, '');
          displayName = displayName.replace(/\s*(PSA|CGC|BGS)\s*[\d.]+[\s\w]*/i, '').trim();
          displayName = displayName.replace(/^Pokemon\s+(Japanese\s+)?/i, '').trim();
          displayName = displayName.replace(/^POKEMON\s+(JPN\s+)?/i, '').trim();

          return {
            id: `live-${seen.size}`,
            name: displayName.slice(0, 80),
            fullName: name,
            image,
            value: typeof value === 'number' ? Math.round(value * 100) / 100 : parseFloat(value) || 0,
            grade,
            year: ym ? ym[1] : '',
          };
        };

        for (const key of Object.keys(pageProps)) {
          if (Array.isArray(pageProps[key])) {
            for (const item of pageProps[key]) {
              const card = extractCard(item);
              if (card) liveCards.push(card);
              if (item?.nft) {
                const c = extractCard({ ...item.nft, value: item.amount || item.nft.value });
                if (c) liveCards.push(c);
              }
            }
          }
        }
      }
    }
  } catch (e) {
    console.warn('Live fetch failed:', e.message);
  }

  // Merge: curated DB + any new live cards (dedup by image)
  const usedImages = new Set(CARD_DATABASE.map(c => c.image));
  const merged = [...CARD_DATABASE];
  for (const card of liveCards) {
    if (!usedImages.has(card.image)) {
      merged.push(card);
      usedImages.add(card.image);
    }
  }

  res.status(200).json({
    success: true,
    count: merged.length,
    curated: CARD_DATABASE.length,
    live: liveCards.length,
    cards: merged,
    fetchedAt: new Date().toISOString(),
  });
}
