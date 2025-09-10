export type Oil = {
  id: string;
  name: string;
  category: 'essential' | 'carrier' | 'scf';
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  imageHint: string;
};

export const products: Oil[] = [
  // Essential Oils
  {
    id: 'essential-1',
    name: 'Peppermint Oil',
    category: 'essential',
    shortDescription: 'Cool, minty essence.',
    longDescription:
      'Our premium-grade Peppermint Oil is distilled from the finest Mentha Piperita leaves. Its cooling sensation, crisp fragrance, and therapeutic properties make it a versatile choice across cosmetics, wellness, and personal care formulations. Naturally rich in menthol, it supports respiratory health, enhances focus, and invigorates the senses—an essential staple for brands seeking purity and performance.',
    benefits: [
      'Invigorates the senses with a cooling aroma ideal for wellness and personal care.',
      'Provides natural relief from headaches when applied topically or diffused.',
      'Eases nasal congestion due to its high menthol content.',
      'Combats bacteria in skincare and hygiene products with antimicrobial action.',
      'Promotes healthy scalp circulation to support hair growth and reduce itchiness.',
    ],
    imageHint: 'peppermint leaves',
  },
  {
    id: 'essential-2',
    name: 'Spearmint Oil',
    category: 'essential',
    shortDescription: 'Sweet, gentle fragrance.',
    longDescription:
      'Mildly sweet and herbaceous, our Spearmint Oil is steam-distilled from the lush leaves of Mentha spicata. Its gentle, minty aroma and low menthol content make it an ideal choice for sensitive formulations in oral care, cosmetics, and wellness products. Known for its soothing effects and uplifting scent, it supports digestion, freshens breath, and adds a crisp, natural fragrance to any blend.',
    benefits: [
      'Refreshes with a soft, minty aroma that calms the mind and uplifts the mood.',
      'Promotes oral hygiene with its breath-freshening and antimicrobial properties.',
      'Soothes headaches and tension, offering a milder alternative to peppermint oil.',
      'Enhances concentration and clarity through its pleasant, invigorating scent.',
      'Adds a crisp fragrance to natural personal care and home products.',
    ],
    imageHint: 'spearmint plant',
  },
  {
    id: 'essential-3',
    name: 'Basil Oil',
    category: 'essential',
    shortDescription: 'Cleansing and purifying.',
    longDescription:
      'Fresh, herbaceous, and slightly spicy, our Basil Oil is steam-distilled from the leaves of Ocimumbasilicum. Renowned for its calming aroma and antioxidant-rich profile, it’s a favorite in wellness, personal care, and aromatherapy formulations. Whether used to ease mental fatigue, purify the skin, or enrich fragrance blends, Basil Oil delivers clarity, balance, and natural vitality.',
    benefits: [
      'Eases mental fatigue and stress with its naturally calming, herbaceous aroma.',
      'Supports clear breathing thanks to its uplifting and decongestant properties.',
      'Acts as a natural antioxidant, helping combat environmental skin stressors.',
      'Reduces muscular tension and discomfort in wellness and massage applications.',
      'Purifies and balances oily skin, making it ideal for targeted skincare solutions.',
    ],
    imageHint: 'basil leaves',
  },
  {
    id: 'essential-4',
    name: 'Geranium Oil',
    category: 'essential',
    shortDescription: 'Floral elegance, balancing qualities.',
    longDescription:
      'Floral, fresh, and gently uplifting, our Geranium Oil is steam-distilled from Pelargonium graveolens leaves and blossoms. Celebrated for its balancing properties and elegant aroma, it’s a key ingredient in skincare, wellness, and perfumery. With natural antiseptic and toning effects, it promotes emotional well-being, supports clear skin, and adds a soft, rosy depth to fragrance formulations.',
    benefits: [
      'Balances skin tone and texture, supporting clear, radiant complexion.',
      'Regulates sebum production, ideal for both oily and dry skin types.',
      'Acts as a natural antiseptic, helping protect and heal minor skin irritations.',
      'Reduces signs of aging, supporting skin elasticity and firmness.',
      'Adds a rosy, elegant note to fine fragrance and cosmetic creations.',
    ],
    imageHint: 'geranium flower',
  },
  {
    id: 'essential-5',
    name: 'Vetiver Oil',
    category: 'essential',
    shortDescription: 'Earthy, grounding aroma.',
    longDescription:
      'Deep, earthy, and grounding, our Vetiver Oil is steam-distilled from the roots of Vetiveriazizanioides. Revered for its calming and stabilizing effects, it’s a cornerstone ingredient in perfumery, skincare, and wellness blends. With natural antioxidant properties and a rich, smoky base note, Vetiver Oil soothes the senses, nurtures the skin, and provides aromatic depth to premium formulations.',
    benefits: [
      'Calms the mind and nerves with its deep, grounding aroma ideal for stress relief.',
      'Promotes restful sleep, making it a go-to ingredient in bedtime wellness blends.',
      'Acts as a natural antioxidant, helping protect skin from environmental damage.',
      'Adds richness and depth as a base note in high-end perfumery and cologne.',
      'Stabilizes fragrance blends, enhancing longevity and complexity in aroma profiles.',
    ],
    imageHint: 'vetiver grass',
  },
  {
    id: 'essential-6',
    name: 'Eucalyptus Oil',
    category: 'essential',
    shortDescription: 'Clears and eases breathing.',
    longDescription:
      'Sharp, clean, and powerfully invigorating, our Eucalyptus Oil is steam-distilled from the leaves of Eucalyptus globulus. Naturally high in cineole, it’s prized for its refreshing aroma and potent therapeutic benefits. Widely used in respiratory care, wellness, and hygiene formulations, Eucalyptus Oil clears the airways, purifies the skin, and delivers a revitalizing boost to modern personal care and aromatherapy products.',
    benefits: [
      'Acts as a natural antiseptic, helpful in cleansing wounds and preventing infection.',
      'Relieves muscle and joint pain, widely used in massage and wellness formulations.',
      'Purifies the skin and controls excess oil, suitable for acne-prone care products.',
      'Supports immune function, making it a staple in seasonal wellness applications.',
      'Fights odor and bacteria, perfect for hygiene and household cleaning blends.',
    ],
    imageHint: 'eucalyptus leaves',
  },
  {
    id: 'essential-7',
    name: 'Rosemary Oil',
    category: 'essential',
    shortDescription: 'Herbaceous and energizing.',
    longDescription:
      'Bright, herbaceous, and revitalizing, our Rosemary Oil is steam-distilled from the aromatic leaves of Rosmarinus officinalis. Renowned for its stimulating properties, it’s a key ingredient in hair care, wellness, and aromatherapy formulations. Rich in antioxidants and natural camphor, Rosemary Oil boosts circulation, supports focus, and delivers a crisp, uplifting note to any blend.',
    benefits: [
      'Stimulates scalp circulation, promoting stronger, healthier hair growth.',
      'Acts as a natural antioxidant, protecting skin and hair from environmental stress.',
      'Relieves muscular aches and fatigue, widely used in massage and wellness blends.',
      'Improves skin tone and texture, ideal for oily and acne-prone formulations.',
      'Freshens ambiance and energizes mood, perfect for aromatherapy and home care.',
    ],
    imageHint: 'rosemary sprig',
  },
  {
    id: 'essential-8',
    name: 'Caraway Oil',
    category: 'essential',
    shortDescription: 'Spicy and warming.',
    longDescription:
      'Warm, spicy, and distinctly herbal, our Caraway Oil is steam-distilled from Carumcarvi seeds. Rich in carvone and limonene, it’s widely used in digestive support, perfumery, and flavoring applications. Known for its carminative and antimicrobial properties, Caraway Oil enhances gut wellness, adds aromatic depth to spice blends, and lends a bold note to herbal care formulations.',
    benefits: [
      'Supports healthy digestion, widely used to ease bloating and gas.',
      'Fights microbial growth, adding natural protection to care formulations.',
      'Boosts appetite and metabolism in traditional wellness applications.',
      'Freshens breath and oral care, suitable for minty herbal formulations.',
      'Promotes respiratory wellness, often used in chest rubs and inhalants.',
    ],
    imageHint: 'caraway seeds',
  },
  {
    id: 'essential-9',
    name: 'Anise Oil',
    category: 'essential',
    shortDescription: 'Sweet and licorice-like.',
    longDescription:
      'Sweet, spicy, and unmistakably licorice-like, our Anise Oil is steam-distilled from the aromatic seeds of Pimpinella anisum. Rich in anethole, it’s valued for its soothing digestive properties and uplifting aroma. Frequently used in wellness, oral care, and flavoring applications, Anise Oil brings warmth, clarity, and a signature herbal note to formulations across beauty, health, and natural perfumery.',
    benefits: [
      'Freshens breath naturally, commonly used in herbal oral care formulations.',
      'Calms coughs and congestion, supporting clear airways and respiratory relief.',
      'Supports hormonal health, particularly in women’s wellness applications.',
      'Offers antimicrobial protection, helping preserve natural care products.',
      'Adds warmth and sweetness to flavoring and fragrance compositions.',
    ],
    imageHint: 'star anise',
  },
  {
    id: 'essential-10',
    name: 'Lemongrass Oil',
    category: 'essential',
    shortDescription: 'Citrusy delight, uplifting scent.',
    longDescription:
      'Zesty, citrus-fresh, and purifying, our Lemongrass Oil is steam-distilled from the fragrant Cymbopogon citratus grass. Rich in citral, it offers potent antibacterial and deodorizing properties, making it a key ingredient in skincare, wellness, and household formulations. Whether refreshing the senses or clarifying the skin, this oil delivers a clean, invigorating touch to any natural blend.',
    benefits: [
      'Deodorizes naturally, perfect for freshening air and hygiene products.',
      'Supports firm, toned skin, helping reduce oiliness and acne.',
      'Repels insects effectively, ideal for natural pest control formulas.',
      'Enhances circulation and detoxification, used in wellness applications.',
      'Adds a refreshing top noteto fragrance and aromatherapy blends.',
    ],
    imageHint: 'lemongrass stalk',
  },
  {
    id: 'essential-11',
    name: 'Blackpepper Oil',
    category: 'essential',
    shortDescription: 'Spicy and stimulating.',
    longDescription:
      'Warm, spicy, and stimulating, our Black Pepper Oil is steam-distilled from the dried berries of Piper nigrum. Known for its energizing aroma and rich therapeutic profile, it’s prized in wellness, massage, and personal care formulations. Packed with antioxidants and natural analgesic properties, this oil supports circulation, eases muscle tension, and adds a bold kick to aromatic blends.',
    benefits: [
      'Stimulates circulation and warms the body, ideal for energizing massage blends.',
      'Relieves muscle and joint pain, commonly used in soothing wellness applications.',
      'Boosts digestion and metabolism, favored in herbal therapeutic formulations.',
      'Acts as a natural antioxidant, protecting skin from environmental stressors.',
      'Fights bacteria and promotes hygiene, suitable for personal care products.',
    ],
    imageHint: 'black peppercorns',
  },
  {
    id: 'essential-12',
    name: 'Tea Tree Oil',
    category: 'essential',
    shortDescription: 'Medicinal and fresh.',
    longDescription:
      'Fresh, medicinal, and powerfully purifying, our Tea Tree Oil is steam-distilled from the leaves of Melaleuca alternifolia. Celebrated for its potent antimicrobial and anti-inflammatory properties, it’s a staple in skincare, hygiene, and wellness formulations. Whether combating blemishes, soothing irritation, or enhancing natural protection, Tea Tree Oil delivers clean efficacy and trusted versatility to every application.',
    benefits: [
      'Fights bacteria and viruses, offering powerful natural antimicrobial protection.',
      'Clears blemishes and acne, widely trusted in targeted skincare formulations.',
      'Promotes wound healing, useful in natural first-aid and topical blends.',
      'Strengthens immune defenses, common in seasonal wellness blends.',
      'Adds a clean, medicinal top note to natural formulations and aromatic blends.',
    ],
    imageHint: 'tea tree',
  },
  {
    id: 'essential-13',
    name: 'Citronella Oil',
    category: 'essential',
    shortDescription: 'Natural insect repellent.',
    longDescription:
      'Bright, lemony, and naturally protective, our Citronella Oil is steam-distilled from the leaves of Cymbopogon winterianus. Rich in citronellal and geraniol, it’s widely used in insect-repellent, deodorizing, and wellness formulations. Known for its fresh scent and antimicrobial properties, Citronella Oil offers a clean, uplifting experience while keeping bugs and odors at bay.',
    benefits: [
      'Natural insect repellent with a fresh, citrusy aroma.',
      'Antimicrobial properties ideal for clean-label formulations.',
      'Deodorizes spaces with a crisp, uplifting scent.',
      'Promotes relaxation in aromatherapy blends.',
      'Perfect for candles, sprays, and skincare with a refreshing twist.',
    ],
    imageHint: 'citronella grass',
  },
  {
    id: 'essential-14',
    name: 'Palmarosa Oil',
    category: 'essential',
    shortDescription: 'Delicate floral aroma.',
    longDescription:
      'Palmarosa Oil is a steam-distilled essential oil extracted from the grassy leaves of Cymbopogon martinii. Valued for its soft, rosy-floral aroma and high geraniol content, it is widely used in skincare, perfumery, and wellness formulations. Known for its hydrating, antimicrobial, and mood-balancing properties, Palmarosa Oil is a natural choice for soothing and rejuvenating applications.',
    benefits: [
      'Soft floral aroma ideal for natural perfumery and skincare.',
      'Deeply hydrating and supports skin regeneration.',
      'Antimicrobial and antifungal properties for clean formulations.',
      'Calms the mind and promotes emotional balance in aromatherapy.',
      'Versatile ingredient for creams, serums, and wellness blends.',
    ],
    imageHint: 'pink flowers',
  },
  {
    id: 'essential-15',
    name: 'Mentha Arvensis',
    category: 'essential',
    shortDescription: 'Refreshing and invigorating aroma.',
    longDescription:
      'Mentha Arvensis, also known as Corn Mint or Wild Mint, is a potent essential oil with a strong, sharp, and minty fragrance. It is rich in menthol, which provides a cooling sensation and has various therapeutic uses. It is widely used for its uplifting and refreshing properties.',
    benefits: ['Perfect for aromatherapy', 'Ideal for personal care products', 'Also known as Menthol Mint'],
    imageHint: 'mint leaves',
  },

  // Carrier Oils
  {
    id: 'carrier-1',
    name: 'Blackseed Oil',
    category: 'carrier',
    shortDescription: 'Treats pain and infections.',
    longDescription:
      'Blackseed Oil, cold-pressed from the seeds of Nigella sativa, is prized for its rich composition of thymoquinone, antioxidants, and essential fatty acids. Known for its therapeutic, anti-inflammatory, and immune-boosting properties, it is widely used in nutraceuticals, skincare, and wellness formulations. Its earthy aroma and potent bioactive profile make it a trusted ingredient for holistic health and beauty applications.',
    benefits: [
      'Boosts immunity with potent antioxidants and thymoquinone.',
      'Soothes inflammation and supports joint health.',
      'Promotes clear, healthy skin with antibacterial properties.',
      'Supports cognitive function and overall vitality.',
      'Ideal for supplements, serums, and therapeutic blends.',
    ],
    imageHint: 'black seeds',
  },
  {
    id: 'carrier-2',
    name: 'Rosehip Seed Oil',
    category: 'carrier',
    shortDescription: 'Corrects and fades skin imperfections.',
    longDescription:
      'Rosehip Seed Oil is a cold-pressed carrier oil extracted from the seeds of Rosa canina. Renowned for its high content of essential fatty acids, vitamins A and C, and natural antioxidants, it is widely used in premium skincare and anti-aging formulations. Known for its regenerative and brightening properties, Rosehip Seed Oil helps improve skin texture, reduce scars, and restore a youthful glow.',
    benefits: [
      'Rich in vitamins A & C for enhanced skin radiance and tone.',
      'Deeply hydrates and nourishes without clogging pores.',
      'Promotes skin regeneration and reduces the appearance of scars.',
      'Packed with antioxidants to combat premature aging.',
      'Ideal for sensitive, dry, and mature skin formulations.',
    ],
    imageHint: 'rose hips',
  },
  {
    id: 'carrier-3',
    name: 'Jojoba Oil',
    category: 'carrier',
    shortDescription: 'Restores skin and hair.',
    longDescription:
      'Jojoba Oil is a golden, cold-pressed liquid wax derived from the seeds of Simmondsiachinensis. Its unique molecular structure closely resembles the skin’s natural sebum, making it an exceptional emollient for skincare, haircare, and cosmetic formulations. Non-comedogenic and highly stable, Jojoba Oil is prized for its moisturizing, balancing, and protective properties across a wide range of applications.',
    benefits: [
      'Naturally rich in vitamin E and antioxidants, promoting skin repair and anti-aging.',
      'Nourishes beard and scalp, making it popular in men’s grooming products.',
      'Enhances absorption of active ingredients in serums and essential oil blends.',
      'Softens hair and adds shine, widely used in premium haircare formulations.',
      'Highly stable and versatile, perfect for creams, serums, and balms.',
    ],
    imageHint: 'jojoba nuts',
  },
  {
    id: 'carrier-4',
    name: 'Argan Oil',
    category: 'carrier',
    shortDescription: 'Luxurious and nutrient-rich.',
    longDescription:
      'Sourced from the kernels of the Moroccan Argan tree, Argan Oil is a luxurious, nutrient-rich oil prized for its exceptional moisturizing and restorative properties. Naturally high in Vitamin E, essential fatty acids, and antioxidants, it nourishes skin, strengthens hair, and promotes a radiant, youthful appearance. Its lightweight texture and non-greasy finish make it ideal for use in premium skincare, haircare, and cosmetic formulations.',
    benefits: [
      'Deeply moisturizes and softens skin without leaving a greasy residue.',
      'Rich in Vitamin E and antioxidants for enhanced skin repair and glow.',
      'Strengthens and smoothens hair, reducing frizz and split ends.',
      'Protects against environmental damage and premature aging.',
      'Ideal for high-performance formulations in skincare, haircare, and cosmetics.',
    ],
    imageHint: 'argan nuts',
  },
  {
    id: 'carrier-5',
    name: 'Sesame Oil',
    category: 'carrier',
    shortDescription: 'Nourishing and protective.',
    longDescription:
      'Extracted from nutrient-rich sesame seeds, Sesame Oil is a versatile carrier oil known for its excellent emollient and antioxidant properties. Naturally high in linoleic acid, Vitamin E, and phytosterols, it supports skin hydration, soothes irritation, and promotes overall skin health. Its light texture and stable composition make it ideal for use in massage blends, skincare formulations, and wellness products.',
    benefits: [
      'Deeply nourishes and moisturizes dry, sensitive skin.',
      'Rich in antioxidants and Vitamin E for skin protection and repair.',
      'Ideal for massage and wellness blends due to its warming properties.',
      'Supports skin elasticity and promotes a healthy glow.',
      'Stable and easily absorbed, perfect for creams, oils, and therapeutic formulations.',
    ],
    imageHint: 'sesame seeds',
  },

  // SCF CO2 Oils & Oleoresins
  {
    id: 'scf-1',
    name: 'Ginger Oil',
    category: 'scf',
    shortDescription: 'Warming and rejuvenating.',
    longDescription:
      'Ginger Oil is a highly aromatic and therapeutic extract obtained from fresh ginger root, valued for its warming, anti-inflammatory, and revitalizing properties. Its rich concentration of bioactive compounds makes it ideal for use in wellness, personal care, and massage formulations that demand purity and performance.',
    benefits: [
      'Provides warming relief for muscle tension and joint discomfort.',
      'Stimulates circulation and energizes the body and mind.',
      'Offers natural anti-inflammatory and antioxidant support.',
      'Enhances skin tone and promotes a radiant complexion.',
      'Ideal for use in massage oils, wellness blends, and revitalizing skincare.',
    ],
    imageHint: 'ginger root',
  },
  {
    id: 'scf-2',
    name: 'Saw Palmetto Oil',
    category: 'scf',
    shortDescription: 'Supports urinary and hair health.',
    longDescription:
      'Saw Palmetto Oil is a potent botanical extract derived from the berries of the Serenoarepens plant, known for its role in promoting scalp health and hormonal balance. Rich in fatty acids and phytosterols, it is widely used in haircare and wellness formulations targeting hair thinning, inflammation, and androgen-related concerns.',
    benefits: [
      'Helps reduce hair thinning by blocking DHT activity at the follicle level.',
      'Supports scalp health with anti-inflammatory and nourishing properties.',
      'Rich in fatty acids, ideal for strengthening and conditioning hair.',
      'Promotes hormonal balance in wellness and grooming formulations.',
      'Suitable for targeted use in serums, oils, and scalp treatments.',
    ],
    imageHint: 'saw palmetto',
  },
  {
    id: 'scf-3',
    name: 'Fenugreek Seed Oil',
    category: 'scf',
    shortDescription: 'Regulates and relieves.',
    longDescription:
      'Fenugreek Seed Oil is a nutrient-rich botanical extract known for its high content of vitamins, antioxidants, and phytonutrients. Cold-pressed from premium fenugreek seeds, this golden oil supports hair growth, soothes irritated skin, and promotes overall wellness. Its natural emollient and anti-inflammatory properties make it ideal for use in haircare, skincare, and therapeutic formulations.',
    benefits: [
      'Stimulates hair growth and reduces hair fall by nourishing the scalp.',
      'Deeply hydrates and softens skin with natural emollient properties.',
      'Rich in antioxidants that help combat signs of aging and oxidative stress.',
      'Soothes inflammation and supports skin barrier repair.',
      'Ideal for wellness blends targeting hormonal balance and digestive comfort.',
    ],
    imageHint: 'fenugreek seeds',
  },
  {
    id: 'scf-4',
    name: 'Capsicum Oleoresin',
    category: 'scf',
    shortDescription: 'Metabolism-boosting and rich in vitamins.',
    longDescription:
      'Capsicum Oleoresin is a potent extract derived from dried chili peppers, rich in capsaicinoids that deliver intense heat and therapeutic value. Widely used in topical formulations, it stimulates blood circulation, relieves muscular discomfort, and adds warming effects to wellness blends. Its concentrated nature makes it ideal for use in pain relief balms, massage oils, and pharmaceutical applications.',
    benefits: [
      'Delivers deep warming sensation to relieve muscle and joint pain.',
      'Stimulates blood flow, aiding recovery in massage and sports formulations.',
      'Acts as a natural analgesic in topical pain relief products.',
      'Enhances efficacy of balms and oils with concentrated capsaicinoid content.',
      'Suitable for pharmaceutical applications requiring targeted heat therapy.',
    ],
    imageHint: 'chili peppers',
  },
  {
    id: 'scf-5',
    name: 'Turmeric Oil',
    category: 'scf',
    shortDescription: 'Anti-inflammatory and clarifying.',
    longDescription:
      'Turmeric Oil is a powerful essential oil steam-distilled from the rhizomes of Curcuma longa, prized for its high curcumin content and potent anti-inflammatory properties. Known for its antioxidant, antimicrobial, and skin-soothing benefits, it’s widely used in skincare, wellness, and therapeutic formulations. Ideal for calming irritated skin, promoting even tone, and supporting joint and immune health.',
    benefits: [
      'Reduces inflammation and soothes skin conditions like acne and eczema.',
      'Promotes even skin tone and radiance with natural curcumin compounds.',
      'Offers strong antioxidant protection against environmental stressors.',
      'Supports joint and muscle relief in wellness and massage blends.',
      'Acts as a natural antimicrobial agent in skincare and personal care products.',
    ],
    imageHint: 'turmeric root',
  },
  {
    id: 'scf-6',
    name: 'Paprika Oleoresin',
    category: 'scf',
    shortDescription: 'Rich color and health benefits.',
    longDescription:
      'Paprika Oleoresin is a vibrant natural extract obtained from the dried pods of Capsicum annuum, rich in carotenoids like capsanthin and capsorubin. Renowned for its intense red color and mild pungency, it’s widely used as a natural coloring agent in food, cosmetics, and nutraceuticals. Its antioxidant properties also make it suitable for wellness and skincare formulations.',
    benefits: [
      'Delivers vibrant natural red color for food, cosmetic, and wellness applications.',
      'Rich in carotenoids that offer antioxidant and anti-aging benefits.',
      'Acts as a natural pigment in skincare and personal care formulations.',
      'Enhances flavor with mild pungency in culinary and nutraceutical products.',
      'Supports circulation and detoxification in topical wellness blends.',
    ],
    imageHint: 'paprika powder',
  },
];
