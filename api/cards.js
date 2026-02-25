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
