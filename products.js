// The Practice • Retail Products Dataset (731 Items)
const PRODUCTS = [
  {
    "id": 492718,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "BeautyInUs",
    "name": "By The Woods Aromatherapy Roll-On",
    "fullTitle": "BeautyInUs - By The Woods Aromatherapy Roll-On",
    "price": "$49.99",
    "priceNum": 49.99,
    "sku": "BI-ROL-BYT-0007",
    "barcodes": [
      "BI-ROL-BYT-0007",
      "492718",
      "BIROLBYT0007"
    ],
    "pitch": "Decadent organic body oil infused with cold-pressed botanical botanicals, sweet almond, and nourishing vitamins. Leaves skin silky, radiant, and deeply hydrated.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492718/edit",
    "img": "https://images.momence.com/h/200431/product-image/d33b3622-5b91-4333-83cd-80a86fad9715.jpg"
  },
  {
    "id": 492717,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "BeautyInUs",
    "name": "Elysian Body Oil",
    "fullTitle": "BeautyInUs - Elysian Body Oil",
    "price": "$99.99",
    "priceNum": 99.99,
    "sku": "BI-BOD-ELY-0006",
    "barcodes": [
      "BI-BOD-ELY-0006",
      "492717",
      "BIBODELY0006"
    ],
    "pitch": "Decadent organic body oil infused with cold-pressed botanical botanicals, sweet almond, and nourishing vitamins. Leaves skin silky, radiant, and deeply hydrated.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492717/edit",
    "img": "https://images.momence.com/h/200431/product-image/9180e488-a75a-401d-a7e2-68d8caf31342.jpg"
  },
  {
    "id": 492719,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "BeautyInUs",
    "name": "Morning Glory Aromatherapy Roll-On",
    "fullTitle": "BeautyInUs - Morning Glory Aromatherapy Roll-On",
    "price": "$49.99",
    "priceNum": 49.99,
    "sku": "BI-ROL-MOR-0008",
    "barcodes": [
      "BI-ROL-MOR-0008",
      "492719",
      "BIROLMOR0008"
    ],
    "pitch": "Decadent organic body oil infused with cold-pressed botanical botanicals, sweet almond, and nourishing vitamins. Leaves skin silky, radiant, and deeply hydrated.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492719/edit",
    "img": "https://images.momence.com/h/200431/product-image/00f13bd3-f526-4d97-b536-2aa0224c4078.jpg"
  },
  {
    "id": 492529,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Bradley Mountain",
    "name": "Leather & Smoke Room Spray",
    "fullTitle": "Bradley Mountain - Leather & Smoke Room Spray",
    "price": "$34.99",
    "priceNum": 34.99,
    "sku": "BM-SPR-LEA-0006",
    "barcodes": [
      "BM-SPR-LEA-0006",
      "492529",
      "BMSPRLEA0006"
    ],
    "pitch": "Hand-poured all-natural soy wax candle crafted in San Diego, CA. Features a clean lead-free cotton wick and rich, woody aroma notes inspired by wilderness adventures.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492529/edit",
    "img": "https://images.momence.com/h/200431/product-image/5ebffeb1-3321-444e-b34a-bbab26ad74b6.jpg"
  },
  {
    "id": 492530,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Bradley Mountain",
    "name": "Palo Santo & Ginger Room Spray",
    "fullTitle": "Bradley Mountain - Palo Santo & Ginger Room Spray",
    "price": "$34.99",
    "priceNum": 34.99,
    "sku": "BM-SPR-PAL-0007",
    "barcodes": [
      "BM-SPR-PAL-0007",
      "492530",
      "BMSPRPAL0007"
    ],
    "pitch": "Hand-poured all-natural soy wax candle crafted in San Diego, CA. Features a clean lead-free cotton wick and rich, woody aroma notes inspired by wilderness adventures.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492530/edit",
    "img": "https://images.momence.com/h/200431/product-image/80f3f209-e2d5-4d53-bf22-2d1814e948a6.jpg"
  },
  {
    "id": 492527,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Bradley Mountain",
    "name": "Rosemary & Sage- Mustache & Beard Oil",
    "fullTitle": "Bradley Mountain - Rosemary & Sage- Mustache & Beard Oil",
    "price": "$28.99",
    "priceNum": 28.99,
    "sku": "BM-OIL-ROS-0004",
    "barcodes": [
      "BM-OIL-ROS-0004",
      "492527",
      "BMOILROS0004"
    ],
    "pitch": "Handcrafted rugged grooming oil formulated with organic argan and jojoba oils to soften facial hair, soothe skin, and impart a rich outdoors aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492527/edit",
    "img": "https://images.momence.com/h/200431/product-image/fe448fde-dfdd-44f3-8520-c83d9e64d3ff.jpg"
  },
  {
    "id": 492364,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Aged Indian Sandalwood Incense Stick Set (30 Sticks & Holder)",
    "fullTitle": "Cedar and Myrrh - Aged Indian Sandalwood Incense Stick Set (30 Sticks & Holder)",
    "price": "$44.00",
    "priceNum": 44,
    "sku": "CM-INC-CED-0033",
    "barcodes": [
      "CM-INC-CED-0033",
      "492364",
      "CMINCCED0033"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492364/edit",
    "img": "https://images.momence.com/h/200431/product-image/b5354915-dfdc-4285-9872-5a933a6d119b.jpg"
  },
  {
    "id": 492374,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Black Copal Handrolled Incense Stick - 12 Box Bundle ->10%",
    "fullTitle": "Cedar and Myrrh - Black Copal Handrolled Incense Stick - 12 Box Bundle ->10%",
    "price": "$30.99",
    "priceNum": 30.99,
    "sku": "CM-INC-PALB-0043",
    "barcodes": [
      "CM-INC-PALB-0043",
      "492374",
      "CMINCPALB0043"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492374/edit",
    "img": "https://images.momence.com/h/200431/product-image/eb0b97cd-c55d-47a5-b7c8-bf91667aa308.png"
  },
  {
    "id": 492336,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Bonne Nuit Aromatherapy Room Spray (2 fl oz)",
    "fullTitle": "Cedar and Myrrh - Bonne Nuit Aromatherapy Room Spray (2 fl oz)",
    "price": "$47.00",
    "priceNum": 47,
    "sku": "CM-RMS-BON-0005",
    "barcodes": [
      "CM-RMS-BON-0005",
      "492336",
      "CMRMSBON0005"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492336/edit",
    "img": "https://images.momence.com/h/200431/product-image/4098b0c9-d154-4b14-8bad-dac8eacd24de.jpg"
  },
  {
    "id": 492365,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Cedarwood Incense Stick Set (30 Sticks & Holder)",
    "fullTitle": "Cedar and Myrrh - Cedarwood Incense Stick Set (30 Sticks & Holder)",
    "price": "$44.00",
    "priceNum": 44,
    "sku": "CM-INC-PAL-0034",
    "barcodes": [
      "CM-INC-PAL-0034",
      "492365",
      "CMINCPAL0034"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492365/edit",
    "img": "https://images.momence.com/h/200431/product-image/d3996c62-c680-4e1c-adbf-27b8e255703e.jpg"
  },
  {
    "id": 492377,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Cinnamon Handrolled Incense Stick - 12 Box Bundle ->10%",
    "fullTitle": "Cedar and Myrrh - Cinnamon Handrolled Incense Stick - 12 Box Bundle ->10%",
    "price": "$30.99",
    "priceNum": 30.99,
    "sku": "CM-INC-SAG-0046",
    "barcodes": [
      "CM-INC-SAG-0046",
      "492377",
      "CMINCSAG0046"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492377/edit",
    "img": "https://images.momence.com/h/200431/product-image/5aa12ff2-ed0a-4905-b7fd-ce83236575eb.png"
  },
  {
    "id": 492345,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Clarté Aromatherapy Room Spray (2 fl oz)",
    "fullTitle": "Cedar and Myrrh - Clarté Aromatherapy Room Spray (2 fl oz)",
    "price": "$47.00",
    "priceNum": 47,
    "sku": "CM-RMS-DBR-0014",
    "barcodes": [
      "CM-RMS-DBR-0014",
      "492345",
      "CMRMSDBR0014"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492345/edit",
    "img": "https://images.momence.com/h/200431/product-image/4eae864e-c381-45af-8993-3db1da212230.jpg"
  },
  {
    "id": 492352,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Deep Breath Car Air Diffuser & Freshener",
    "fullTitle": "Cedar and Myrrh - Deep Breath Car Air Diffuser & Freshener",
    "price": "$92.00",
    "priceNum": 92,
    "sku": "CM-AIR-HIN-0021",
    "barcodes": [
      "CM-AIR-HIN-0021",
      "492352",
      "CMAIRHIN0021"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492352/edit",
    "img": "https://images.momence.com/h/200431/product-image/d01b059a-ad76-407a-af69-0c301030f44a.jpg"
  },
  {
    "id": 492523,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Deep Breath Reed Diffuser",
    "fullTitle": "Cedar and Myrrh - Deep Breath Reed Diffuser",
    "price": "$79.99",
    "priceNum": 79.99,
    "sku": "CM-RDS-DEE-0004",
    "barcodes": [
      "CM-RDS-DEE-0004",
      "492523",
      "CMRDSDEE0004"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492523/edit",
    "img": "https://images.momence.com/h/200431/product-image/5716506d-16ad-4d50-a8c4-b36e8e15dc10.jpg"
  },
  {
    "id": 492346,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Deep Breath Wellness Room Spray (2 fl oz)",
    "fullTitle": "Cedar and Myrrh - Deep Breath Wellness Room Spray (2 fl oz)",
    "price": "$47.00",
    "priceNum": 47,
    "sku": "CM-RMS-SAC-0015",
    "barcodes": [
      "CM-RMS-SAC-0015",
      "492346",
      "CMRMSSAC0015"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492346/edit",
    "img": "https://images.momence.com/h/200431/product-image/16685e2c-1d30-4aa3-8eaf-12b23127be96.jpg"
  },
  {
    "id": 492378,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Ecuadorian Palo Santo Sticks (10 Pieces)- Case of 12 -> 10%",
    "fullTitle": "Cedar and Myrrh - Ecuadorian Palo Santo Sticks (10 Pieces)- Case of 12 -> 10%",
    "price": "$36.99",
    "priceNum": 36.99,
    "sku": "CM-INC-CIN-0047",
    "barcodes": [
      "CM-INC-CIN-0047",
      "492378",
      "CMINCCIN0047"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492378/edit",
    "img": "https://images.momence.com/h/200431/product-image/b35be784-1f95-4253-82c5-f8f0911103f5.png"
  },
  {
    "id": 492341,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Flower Black Brass Incense Holder",
    "fullTitle": "Cedar and Myrrh - Flower Black Brass Incense Holder",
    "price": "$38.89",
    "priceNum": 38.89,
    "sku": "CM-HLD-FLB-0010",
    "barcodes": [
      "CM-HLD-FLB-0010",
      "492341",
      "CMHLDFLB0010"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492341/edit",
    "img": "https://images.momence.com/h/200431/product-image/f476ea19-4589-46e1-a84a-722915166801.jpg"
  },
  {
    "id": 492355,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Flower Brass Incense Holder",
    "fullTitle": "Cedar and Myrrh - Flower Brass Incense Holder",
    "price": "$38.89",
    "priceNum": 38.89,
    "sku": "CM-BTH-PAL-0024",
    "barcodes": [
      "CM-BTH-PAL-0024",
      "492355",
      "CMBTHPAL0024"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492355/edit",
    "img": "https://images.momence.com/h/200431/product-image/49bc0bc7-d53d-4176-84f8-59f873cb72e8.jpg"
  },
  {
    "id": 492344,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Fraicheur Aromatherapy Room Spray- Awakening & Revitalizing",
    "fullTitle": "Cedar and Myrrh - Fraicheur Aromatherapy Room Spray- Awakening & Revitalizing",
    "price": "$47.00",
    "priceNum": 47,
    "sku": "CM-RMS-CLA-0013",
    "barcodes": [
      "CM-RMS-CLA-0013",
      "492344",
      "CMRMSCLA0013"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492344/edit",
    "img": "https://images.momence.com/h/200431/product-image/200064b9-b261-4e28-bbaf-c3632142620f.png"
  },
  {
    "id": 492334,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Hand-Rolled Incense Discovery Set (5 Scents)",
    "fullTitle": "Cedar and Myrrh - Hand-Rolled Incense Discovery Set (5 Scents)",
    "price": "$33.20",
    "priceNum": 33.2,
    "sku": "CM-INC-DSC-0003",
    "barcodes": [
      "CM-INC-DSC-0003",
      "492334",
      "CMINCDSC0003"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492334/edit",
    "img": "https://images.momence.com/h/200431/product-image/019271d8-d13d-4111-a348-f416b73c9e26.jpg"
  },
  {
    "id": 492351,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Hinoki Bath Salt (80g Pouch)",
    "fullTitle": "Cedar and Myrrh - Hinoki Bath Salt (80g Pouch)",
    "price": "$23.33",
    "priceNum": 23.33,
    "sku": "CM-AIR-DBR-0020",
    "barcodes": [
      "CM-AIR-DBR-0020",
      "492351",
      "CMAIRDBR0020"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492351/edit",
    "img": "https://images.momence.com/h/200431/product-image/1b6e7941-1b37-44c0-a9d6-184137cdf56c.jpg"
  },
  {
    "id": 492370,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Hinoki Bath Salt Gift Set (5 x 40g)",
    "fullTitle": "Cedar and Myrrh - Hinoki Bath Salt Gift Set (5 x 40g)",
    "price": "$28.50",
    "priceNum": 28.5,
    "sku": "CM-BTH-HIN2-0039",
    "barcodes": [
      "CM-BTH-HIN2-0039",
      "492370",
      "CMBTHHIN20039"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492370/edit",
    "img": "https://images.momence.com/h/200431/product-image/a8bce339-c932-46cb-9fb7-376c1d863ba5.jpg"
  },
  {
    "id": 492353,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Hinoki Car Air Diffuser & Freshener",
    "fullTitle": "Cedar and Myrrh - Hinoki Car Air Diffuser & Freshener",
    "price": "$92.00",
    "priceNum": 92,
    "sku": "CM-PEN-AME-0022",
    "barcodes": [
      "CM-PEN-AME-0022",
      "492353",
      "CMPENAME0022"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492353/edit",
    "img": "https://images.momence.com/h/200431/product-image/5cf7e0c6-dcde-4372-9dfc-b411cd318c8b.jpg"
  },
  {
    "id": 492371,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Hinoki Japanese Cypress Bath Flakes",
    "fullTitle": "Cedar and Myrrh - Hinoki Japanese Cypress Bath Flakes",
    "price": "$24.00",
    "priceNum": 24,
    "sku": "CM-BTH-PAL2-0040",
    "barcodes": [
      "CM-BTH-PAL2-0040",
      "492371",
      "CMBTHPAL20040"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492371/edit",
    "img": "https://images.momence.com/h/200431/product-image/2361a466-bb06-430d-b4b5-25c4a1e8e8af.jpg"
  },
  {
    "id": 492367,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Hinoki Japanese Incense Stick Set (30 Sticks & Holder)",
    "fullTitle": "Cedar and Myrrh - Hinoki Japanese Incense Stick Set (30 Sticks & Holder)",
    "price": "$44.00",
    "priceNum": 44,
    "sku": "CM-OIL-HIN-0036",
    "barcodes": [
      "CM-OIL-HIN-0036",
      "492367",
      "CMOILHIN0036"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492367/edit",
    "img": "https://images.momence.com/h/200431/product-image/e146c0d8-d363-446e-8ef1-6e6b28f2c5aa.jpg"
  },
  {
    "id": 492368,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Hinoki Pure Essential Oil (10ml)",
    "fullTitle": "Cedar and Myrrh - Hinoki Pure Essential Oil (10ml)",
    "price": "$47.00",
    "priceNum": 47,
    "sku": "CM-OIL-PAL-0037",
    "barcodes": [
      "CM-OIL-PAL-0037",
      "492368",
      "CMOILPAL0037"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492368/edit",
    "img": "https://images.momence.com/h/200431/product-image/6c27a5fd-cbe1-4fd9-a3a4-dfc5f6c3084a.jpg"
  },
  {
    "id": 492359,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Hinoki Sacred Room Spray (2 fl oz)",
    "fullTitle": "Cedar and Myrrh - Hinoki Sacred Room Spray (2 fl oz)",
    "price": "$47.00",
    "priceNum": 47,
    "sku": "CM-BTH-GFT-0028",
    "barcodes": [
      "CM-BTH-GFT-0028",
      "492359",
      "CMBTHGFT0028"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492359/edit",
    "img": "https://images.momence.com/h/200431/product-image/60308669-0c04-4ba7-9867-47b55817b039.jpg"
  },
  {
    "id": 492375,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Lavender Handrolled Incense Stick - 12 Box Bundle ->10%",
    "fullTitle": "Cedar and Myrrh - Lavender Handrolled Incense Stick - 12 Box Bundle ->10%",
    "price": "$30.99",
    "priceNum": 30.99,
    "sku": "CM-INC-COC-0044",
    "barcodes": [
      "CM-INC-COC-0044",
      "492375",
      "CMINCCOC0044"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492375/edit",
    "img": "https://images.momence.com/h/200431/product-image/f246208d-ad73-4ce0-8805-683d9f7f3082.png"
  },
  {
    "id": 492361,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Mantra Car Air Diffuser & Freshener",
    "fullTitle": "Cedar and Myrrh - Mantra Car Air Diffuser & Freshener",
    "price": "$92.00",
    "priceNum": 92,
    "sku": "CM-AIR-PAL-0030",
    "barcodes": [
      "CM-AIR-PAL-0030",
      "492361",
      "CMAIRPAL0030"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492361/edit",
    "img": "https://images.momence.com/h/200431/product-image/7cdd0943-5592-4f4f-9fcc-de93738deca2.jpg"
  },
  {
    "id": 492521,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Mantra Reed Diffuser",
    "fullTitle": "Cedar and Myrrh - Mantra Reed Diffuser",
    "price": "$69.99",
    "priceNum": 69.99,
    "sku": "CM-RDS-MAN-0002",
    "barcodes": [
      "CM-RDS-MAN-0002",
      "492521",
      "CMRDSMAN0002"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492521/edit",
    "img": "https://images.momence.com/h/200431/product-image/60520c91-b2b3-4129-824d-19d84ecff023.jpg"
  },
  {
    "id": 492357,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Mantra Wellness Room Spray (2 fl oz)",
    "fullTitle": "Cedar and Myrrh - Mantra Wellness Room Spray (2 fl oz)",
    "price": "$47.00",
    "priceNum": 47,
    "sku": "CM-RMS-SPI-0026",
    "barcodes": [
      "CM-RMS-SPI-0026",
      "492357",
      "CMRMSSPI0026"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492357/edit",
    "img": "https://images.momence.com/h/200431/product-image/88130556-0e8f-47cd-9b44-074d49325b50.jpg"
  },
  {
    "id": 492333,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Natural Palo Santo Scented Wax Melts | 6 Cubes",
    "fullTitle": "Cedar and Myrrh - Natural Palo Santo Scented Wax Melts | 6 Cubes",
    "price": "$38.89",
    "priceNum": 38.89,
    "sku": "CM-WXM-PAL-0002",
    "barcodes": [
      "CM-WXM-PAL-0002",
      "492333",
      "CMWXMPAL0002"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492333/edit",
    "img": "https://images.momence.com/h/200431/product-image/6d679a68-5a71-4bfd-8cb4-ff3ec6918340.png"
  },
  {
    "id": 492335,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Organic White Sage Smudge Stick - Medium",
    "fullTitle": "Cedar and Myrrh - Organic White Sage Smudge Stick - Medium",
    "price": "$38.89",
    "priceNum": 38.89,
    "sku": "CM-SAG-MED-0004",
    "barcodes": [
      "CM-SAG-MED-0004",
      "492335",
      "CMSAGMED0004"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492335/edit",
    "img": "https://images.momence.com/h/200431/product-image/7e7e6901-583d-4c78-ba0b-d86e3a5499ac.png"
  },
  {
    "id": 492372,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Palo Santo Bath Flakes",
    "fullTitle": "Cedar and Myrrh - Palo Santo Bath Flakes",
    "price": "$24.00",
    "priceNum": 24,
    "sku": "CM-INC-HIN2-0041",
    "barcodes": [
      "CM-INC-HIN2-0041",
      "492372",
      "CMINCHIN20041"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492372/edit",
    "img": "https://images.momence.com/h/200431/product-image/57dfc35a-6222-4509-a4b4-4900351d5e74.jpg"
  },
  {
    "id": 492342,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Palo Santo Bath Flakes & Oil Ritual Set",
    "fullTitle": "Cedar and Myrrh - Palo Santo Bath Flakes & Oil Ritual Set",
    "price": "$87.00",
    "priceNum": 87,
    "sku": "CM-BTH-PAL-0011",
    "barcodes": [
      "CM-BTH-PAL-0011",
      "492342",
      "CMBTHPAL0011"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492342/edit",
    "img": "https://images.momence.com/h/200431/product-image/efa3bd9d-0713-41d4-b6e4-343cff43e1cc.jpg"
  },
  {
    "id": 492356,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Palo Santo Bath Salt (80g Pouch)",
    "fullTitle": "Cedar and Myrrh - Palo Santo Bath Salt (80g Pouch)",
    "price": "$24.00",
    "priceNum": 24,
    "sku": "CM-RMS-MAN-0025",
    "barcodes": [
      "CM-RMS-MAN-0025",
      "492356",
      "CMRMSMAN0025"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492356/edit",
    "img": "https://images.momence.com/h/200431/product-image/d20d874c-fa9c-4314-a473-41d8085ca143.jpg"
  },
  {
    "id": 492360,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Palo Santo Bath Salt Gift Set (5 x 40g)",
    "fullTitle": "Cedar and Myrrh - Palo Santo Bath Salt Gift Set (5 x 40g)",
    "price": "$28.00",
    "priceNum": 28,
    "sku": "CM-AIR-MAN-0029",
    "barcodes": [
      "CM-AIR-MAN-0029",
      "492360",
      "CMAIRMAN0029"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492360/edit",
    "img": "https://images.momence.com/h/200431/product-image/96a31910-6e22-4afe-adb4-573d765dbb83.jpg"
  },
  {
    "id": 492362,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Palo Santo Car Air Diffuser & Freshener",
    "fullTitle": "Cedar and Myrrh - Palo Santo Car Air Diffuser & Freshener",
    "price": "$92.00",
    "priceNum": 92,
    "sku": "CM-BTH-SUG-0031",
    "barcodes": [
      "CM-BTH-SUG-0031",
      "492362",
      "CMBTHSUG0031"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492362/edit",
    "img": "https://images.momence.com/h/200431/product-image/9382a8ee-956c-427f-9c6d-7b64df5dab2a.jpg"
  },
  {
    "id": 492373,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Palo Santo Handrolled Incense Stick - 12 Box Bundle ->10%",
    "fullTitle": "Cedar and Myrrh - Palo Santo Handrolled Incense Stick - 12 Box Bundle ->10%",
    "price": "$27.99",
    "priceNum": 27.99,
    "sku": "CM-INC-PAL2-0042",
    "barcodes": [
      "CM-INC-PAL2-0042",
      "492373",
      "CMINCPAL20042"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492373/edit",
    "img": "https://images.momence.com/h/200431/product-image/06e952e8-5ca6-4a06-aea8-9ff66f270f09.png"
  },
  {
    "id": 492366,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Palo Santo Incense Stick Set (30 Sticks & Holder)",
    "fullTitle": "Cedar and Myrrh - Palo Santo Incense Stick Set (30 Sticks & Holder)",
    "price": "$44.00",
    "priceNum": 44,
    "sku": "CM-INC-HIN-0035",
    "barcodes": [
      "CM-INC-HIN-0035",
      "492366",
      "CMINCHIN0035"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492366/edit",
    "img": "https://images.momence.com/h/200431/product-image/0ce65b57-40ce-4845-bbb1-19532c2dc51c.jpg"
  },
  {
    "id": 492369,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Palo Santo Pure Essential Oil (10ml)",
    "fullTitle": "Cedar and Myrrh - Palo Santo Pure Essential Oil (10ml)",
    "price": "$47.00",
    "priceNum": 47,
    "sku": "CM-BTH-GFT2-0038",
    "barcodes": [
      "CM-BTH-GFT2-0038",
      "492369",
      "CMBTHGFT20038"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492369/edit",
    "img": "https://images.momence.com/h/200431/product-image/2affafbf-1eba-43d5-9dc6-4a739ddd08d3.jpg"
  },
  {
    "id": 492522,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Palo Santo Reed Diffuser",
    "fullTitle": "Cedar and Myrrh - Palo Santo Reed Diffuser",
    "price": "$79.99",
    "priceNum": 79.99,
    "sku": "CM-RDS-PAL-0003",
    "barcodes": [
      "CM-RDS-PAL-0003",
      "492522",
      "CMRDSPAL0003"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492522/edit",
    "img": "https://images.momence.com/h/200431/product-image/a2feb555-0b45-45d6-abbf-5cdd6431a3cb.jpg"
  },
  {
    "id": 492347,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Palo Santo Sacred Room Spray (2 fl oz)",
    "fullTitle": "Cedar and Myrrh - Palo Santo Sacred Room Spray (2 fl oz)",
    "price": "$47.00",
    "priceNum": 47,
    "sku": "CM-RMS-SER-0016",
    "barcodes": [
      "CM-RMS-SER-0016",
      "492347",
      "CMRMSSER0016"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492347/edit",
    "img": "https://images.momence.com/h/200431/product-image/72d42f37-8d6c-4233-84ce-969ea3fd0856.jpg"
  },
  {
    "id": 492379,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Peruvian Palo Santo Sticks (6 Pieces) - Case of 12 -> 10%",
    "fullTitle": "Cedar and Myrrh - Peruvian Palo Santo Sticks (6 Pieces) - Case of 12 -> 10%",
    "price": "$28.99",
    "priceNum": 28.99,
    "sku": "CM-INC-ECU-0048",
    "barcodes": [
      "CM-INC-ECU-0048",
      "492379",
      "CMINCECU0048"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492379/edit",
    "img": "https://images.momence.com/h/200431/product-image/526e841f-1289-4bc8-a462-7a117fdbd339.png"
  },
  {
    "id": 492520,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Spiritual Reed Diffuser",
    "fullTitle": "Cedar and Myrrh - Spiritual Reed Diffuser",
    "price": "$69.99",
    "priceNum": 69.99,
    "sku": "CM-RDS-SPI-0001",
    "barcodes": [
      "CM-RDS-SPI-0001",
      "492520",
      "CMRDSSPI0001"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492520/edit",
    "img": "https://images.momence.com/h/200431/product-image/f1f6d2dc-0cb2-42b3-ad3a-3c651d060d7d.jpg"
  },
  {
    "id": 492358,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Spiritual Room Wellness Room Spray (2 fl oz)",
    "fullTitle": "Cedar and Myrrh - Spiritual Room Wellness Room Spray (2 fl oz)",
    "price": "$47.00",
    "priceNum": 47,
    "sku": "CM-RMS-HIN-0027",
    "barcodes": [
      "CM-RMS-HIN-0027",
      "492358",
      "CMRMSHIN0027"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492358/edit",
    "img": "https://images.momence.com/h/200431/product-image/4185d3c0-5085-4caf-b7ce-cabda13b6e28.jpg"
  },
  {
    "id": 492348,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Srnit Aromatherapy Room Spray-Calming & Balancing",
    "fullTitle": "Cedar and Myrrh - Srnit Aromatherapy Room Spray-Calming & Balancing",
    "price": "$47.00",
    "priceNum": 47,
    "sku": "CM-RMS-JAR-0017",
    "barcodes": [
      "CM-RMS-JAR-0017",
      "492348",
      "CMRMSJAR0017"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492348/edit",
    "img": "https://images.momence.com/h/200431/product-image/c66f304d-9a5c-4597-9579-aef969e96742.png"
  },
  {
    "id": 492363,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Sugi Japanese Cedar Bath Flakes",
    "fullTitle": "Cedar and Myrrh - Sugi Japanese Cedar Bath Flakes",
    "price": "$23.33",
    "priceNum": 23.33,
    "sku": "CM-INC-IND-0032",
    "barcodes": [
      "CM-INC-IND-0032",
      "492363",
      "CMINCIND0032"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492363/edit",
    "img": "https://images.momence.com/h/200431/product-image/3bcd57c7-812d-4b59-939e-9dd78f4496fb.jpg"
  },
  {
    "id": 492350,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "Waterdrop Brass Incense Holder",
    "fullTitle": "Cedar and Myrrh - Waterdrop Brass Incense Holder",
    "price": "$16.67",
    "priceNum": 16.67,
    "sku": "CM-BTH-HIN-0019",
    "barcodes": [
      "CM-BTH-HIN-0019",
      "492350",
      "CMBTHHIN0019"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492350/edit",
    "img": "https://images.momence.com/h/200431/product-image/1594fb88-50e5-4a07-aa68-8b550a168269.jpg"
  },
  {
    "id": 492376,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Cedar and Myrrh",
    "name": "White Sage Handrolled Incense Stick - 12 Box Bundle ->10%",
    "fullTitle": "Cedar and Myrrh - White Sage Handrolled Incense Stick - 12 Box Bundle ->10%",
    "price": "$30.99",
    "priceNum": 30.99,
    "sku": "CM-INC-LAV-0045",
    "barcodes": [
      "CM-INC-LAV-0045",
      "492376",
      "CMINCLAV0045"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492376/edit",
    "img": "https://images.momence.com/h/200431/product-image/daefbfca-8815-4f94-b6a3-e9c915db2409.png"
  },
  {
    "id": 492284,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Earths Elements",
    "name": "Earth's Elements - Chakra Sage Bundle",
    "fullTitle": "Earths Elements - Earth's Elements - Chakra Sage Bundle",
    "price": "$2.77",
    "priceNum": 2.77,
    "sku": "EE-SAG-CHAK-0011",
    "barcodes": [
      "EE-SAG-CHAK-0011",
      "492284",
      "EESAGCHAK0011"
    ],
    "pitch": "Handcrafted botanical ritual blend and smudging tool made with organic herbs and natural crystals for purifying positive energetic vibrations.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492284/edit",
    "img": "https://images.momence.com/h/200431/product-image/16d0d15b-b262-4fb9-b3fd-7eda8186e8c1.png"
  },
  {
    "id": 492283,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Earths Elements",
    "name": "Earth's Elements - Cleansing Sage Bundle",
    "fullTitle": "Earths Elements - Earth's Elements - Cleansing Sage Bundle",
    "price": "$16.00",
    "priceNum": 16,
    "sku": "EE-SAG-CLN-0010",
    "barcodes": [
      "EE-SAG-CLN-0010",
      "492283",
      "EESAGCLN0010"
    ],
    "pitch": "Handcrafted botanical ritual blend and smudging tool made with organic herbs and natural crystals for purifying positive energetic vibrations.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492283/edit",
    "img": "https://images.momence.com/h/200431/product-image/c5678284-d731-4c7a-b1c1-9da65c5e8cb9.png"
  },
  {
    "id": 492282,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Earths Elements",
    "name": "Earth's Elements - Journal - Intention",
    "fullTitle": "Earths Elements - Earth's Elements - Journal - Intention",
    "price": "$29.99",
    "priceNum": 29.99,
    "sku": "EE-JOU-INT-0009",
    "barcodes": [
      "EE-JOU-INT-0009",
      "492282",
      "EEJOUINT0009"
    ],
    "pitch": "Handcrafted botanical ritual blend and smudging tool made with organic herbs and natural crystals for purifying positive energetic vibrations.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492282/edit",
    "img": "https://images.momence.com/h/200431/product-image/ed1d7d5a-97ed-4f9c-8973-96c2f157de96.png"
  },
  {
    "id": 492286,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Earths Elements",
    "name": "Earth's Elements - Sage Bundle - Pink & Beige Sinuata",
    "fullTitle": "Earths Elements - Earth's Elements - Sage Bundle - Pink & Beige Sinuata",
    "price": "$2.77",
    "priceNum": 2.77,
    "sku": "EE-SAG-SIN-0013",
    "barcodes": [
      "EE-SAG-SIN-0013",
      "492286",
      "EESAGSIN0013"
    ],
    "pitch": "Handcrafted botanical ritual blend and smudging tool made with organic herbs and natural crystals for purifying positive energetic vibrations.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492286/edit",
    "img": "https://images.momence.com/h/200431/product-image/3c4bd1e9-e57a-4969-84b0-55cdf991aa4f.png"
  },
  {
    "id": 492576,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "FernandPetal",
    "name": "Aurora Essential Oil Blend",
    "fullTitle": "FernandPetal - Aurora Essential Oil Blend",
    "price": "$36.00",
    "priceNum": 36,
    "sku": "FP-BLD-AUR-0011",
    "barcodes": [
      "FP-BLD-AUR-0011",
      "492576",
      "FPBLDAUR0011"
    ],
    "pitch": "100% pure, therapeutic-grade essential oil steam-distilled from ethically harvested botanicals. Designed for active ultrasonic diffusion or custom aromatherapy blends.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492576/edit",
    "img": "https://images.momence.com/h/200431/product-image/cf6ce283-8d52-4468-b041-c4936e2ad640.jpg"
  },
  {
    "id": 492566,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "FernandPetal",
    "name": "Balance Roll-On",
    "fullTitle": "FernandPetal - Balance Roll-On",
    "price": "$31.00",
    "priceNum": 31,
    "sku": "FP-ROL-BAL-0001",
    "barcodes": [
      "FP-ROL-BAL-0001",
      "492566",
      "FPROLBAL0001"
    ],
    "pitch": "Organic aromatherapy roll-on formulated with pure botanical essential oils and golden jojoba oil. Convenient pocket-sized wellness ritual for on-the-go grounding.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492566/edit",
    "img": "https://images.momence.com/h/200431/product-image/0f2f64e8-f7ee-4ce3-b525-15dbdabef97b.jpg"
  },
  {
    "id": 492571,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "FernandPetal",
    "name": "Bergamot Essential Oil",
    "fullTitle": "FernandPetal - Bergamot Essential Oil",
    "price": "$24.00",
    "priceNum": 24,
    "sku": "FP-OIL-BER-0006",
    "barcodes": [
      "FP-OIL-BER-0006",
      "492571",
      "FPOILBER0006"
    ],
    "pitch": "100% pure, therapeutic-grade essential oil steam-distilled from ethically harvested botanicals. Designed for active ultrasonic diffusion or custom aromatherapy blends.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492571/edit",
    "img": "https://images.momence.com/h/200431/product-image/425cf4fc-52ed-43aa-a865-ec2ef367bc66.jpg"
  },
  {
    "id": 492567,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "FernandPetal",
    "name": "Boost Roll-On",
    "fullTitle": "FernandPetal - Boost Roll-On",
    "price": "$31.00",
    "priceNum": 31,
    "sku": "FP-ROL-BOO-0002",
    "barcodes": [
      "FP-ROL-BOO-0002",
      "492567",
      "FPROLBOO0002"
    ],
    "pitch": "Organic aromatherapy roll-on formulated with pure botanical essential oils and golden jojoba oil. Convenient pocket-sized wellness ritual for on-the-go grounding.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492567/edit",
    "img": "https://images.momence.com/h/200431/product-image/e5cd7ec5-2a20-439f-9ab9-c4acbe297c7b.jpg"
  },
  {
    "id": 492577,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "FernandPetal",
    "name": "Breathe Essential Oil Blend",
    "fullTitle": "FernandPetal - Breathe Essential Oil Blend",
    "price": "$23.00",
    "priceNum": 23,
    "sku": "FP-BLD-BRE-0012",
    "barcodes": [
      "FP-BLD-BRE-0012",
      "492577",
      "FPBLDBRE0012"
    ],
    "pitch": "100% pure, therapeutic-grade essential oil steam-distilled from ethically harvested botanicals. Designed for active ultrasonic diffusion or custom aromatherapy blends.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492577/edit",
    "img": "https://images.momence.com/h/200431/product-image/b186d45b-0677-473d-80ab-5c70ef0a3f31.jpg"
  },
  {
    "id": 492568,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "FernandPetal",
    "name": "Breathe Roll-On",
    "fullTitle": "FernandPetal - Breathe Roll-On",
    "price": "$31.00",
    "priceNum": 31,
    "sku": "FP-ROL-BRE-0003",
    "barcodes": [
      "FP-ROL-BRE-0003",
      "492568",
      "FPROLBRE0003"
    ],
    "pitch": "Organic aromatherapy roll-on formulated with pure botanical essential oils and golden jojoba oil. Convenient pocket-sized wellness ritual for on-the-go grounding.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492568/edit",
    "img": "https://images.momence.com/h/200431/product-image/80711d4d-390d-4a02-a02e-2142658ff079.jpg"
  },
  {
    "id": 492572,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "FernandPetal",
    "name": "Cedarwood Essential Oil",
    "fullTitle": "FernandPetal - Cedarwood Essential Oil",
    "price": "$16.00",
    "priceNum": 16,
    "sku": "FP-OIL-CED-0007",
    "barcodes": [
      "FP-OIL-CED-0007",
      "492572",
      "FPOILCED0007"
    ],
    "pitch": "100% pure, therapeutic-grade essential oil steam-distilled from ethically harvested botanicals. Designed for active ultrasonic diffusion or custom aromatherapy blends.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492572/edit",
    "img": "https://images.momence.com/h/200431/product-image/227bf29e-ccd9-463e-aac3-7c191a8addc8.jpg"
  },
  {
    "id": 492578,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "FernandPetal",
    "name": "Coast Essential Oil Blend",
    "fullTitle": "FernandPetal - Coast Essential Oil Blend",
    "price": "$24.00",
    "priceNum": 24,
    "sku": "FP-BLD-CST-0013",
    "barcodes": [
      "FP-BLD-CST-0013",
      "492578",
      "FPBLDCST0013"
    ],
    "pitch": "100% pure, therapeutic-grade essential oil steam-distilled from ethically harvested botanicals. Designed for active ultrasonic diffusion or custom aromatherapy blends.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492578/edit",
    "img": "https://images.momence.com/h/200431/product-image/eebef879-8f22-4e12-bcbe-34f110036e06.jpg"
  },
  {
    "id": 492580,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "FernandPetal",
    "name": "Dawn Essential Oil Blend",
    "fullTitle": "FernandPetal - Dawn Essential Oil Blend",
    "price": "$28.00",
    "priceNum": 28,
    "sku": "FP-BLD-DAW-0015",
    "barcodes": [
      "FP-BLD-DAW-0015",
      "492580",
      "FPBLDDAW0015"
    ],
    "pitch": "100% pure, therapeutic-grade essential oil steam-distilled from ethically harvested botanicals. Designed for active ultrasonic diffusion or custom aromatherapy blends.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492580/edit",
    "img": "https://images.momence.com/h/200431/product-image/61f80563-be8e-4190-99e2-172446769392.jpg"
  },
  {
    "id": 492583,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "FernandPetal",
    "name": "Diffuser",
    "fullTitle": "FernandPetal - Diffuser",
    "price": "$99.99",
    "priceNum": 99.99,
    "sku": "FP-DFU-STD-0018",
    "barcodes": [
      "FP-DFU-STD-0018",
      "492583",
      "FPDFUSTD0018"
    ],
    "pitch": "100% pure, therapeutic-grade essential oil steam-distilled from ethically harvested botanicals. Designed for active ultrasonic diffusion or custom aromatherapy blends.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492583/edit",
    "img": "https://images.momence.com/h/200431/product-image/70ce0cef-1b24-480c-86cb-505bbc6bd587.jpg"
  },
  {
    "id": 492579,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "FernandPetal",
    "name": "Dream Essential Oil Blend",
    "fullTitle": "FernandPetal - Dream Essential Oil Blend",
    "price": "$23.00",
    "priceNum": 23,
    "sku": "FP-BLD-DRM-0014",
    "barcodes": [
      "FP-BLD-DRM-0014",
      "492579",
      "FPBLDDRM0014"
    ],
    "pitch": "100% pure, therapeutic-grade essential oil steam-distilled from ethically harvested botanicals. Designed for active ultrasonic diffusion or custom aromatherapy blends.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492579/edit",
    "img": "https://images.momence.com/h/200431/product-image/326ccf1b-9ceb-4823-a37d-fceb42c1fb7e.jpg"
  },
  {
    "id": 492569,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "FernandPetal",
    "name": "Dream Roll-On",
    "fullTitle": "FernandPetal - Dream Roll-On",
    "price": "$31.00",
    "priceNum": 31,
    "sku": "FP-ROL-DRE-0004",
    "barcodes": [
      "FP-ROL-DRE-0004",
      "492569",
      "FPROLDRE0004"
    ],
    "pitch": "Organic aromatherapy roll-on formulated with pure botanical essential oils and golden jojoba oil. Convenient pocket-sized wellness ritual for on-the-go grounding.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492569/edit",
    "img": "https://images.momence.com/h/200431/product-image/f8806cba-14c4-4f85-9716-26e1b5d0f914.jpg"
  },
  {
    "id": 492573,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "FernandPetal",
    "name": "Eucalyptus Essential Oil",
    "fullTitle": "FernandPetal - Eucalyptus Essential Oil",
    "price": "$16.00",
    "priceNum": 16,
    "sku": "FP-OIL-EUC-0008",
    "barcodes": [
      "FP-OIL-EUC-0008",
      "492573",
      "FPOILEUC0008"
    ],
    "pitch": "100% pure, therapeutic-grade essential oil steam-distilled from ethically harvested botanicals. Designed for active ultrasonic diffusion or custom aromatherapy blends.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492573/edit",
    "img": "https://images.momence.com/h/200431/product-image/52da163e-49fb-4aad-8df3-b02c375d7ffe.jpg"
  },
  {
    "id": 492584,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "FernandPetal",
    "name": "Flora Shower Spray",
    "fullTitle": "FernandPetal - Flora Shower Spray",
    "price": "$65.00",
    "priceNum": 65,
    "sku": "FP-SPR-FLR-0019",
    "barcodes": [
      "FP-SPR-FLR-0019",
      "492584",
      "FPSPRFLR0019"
    ],
    "pitch": "100% pure, therapeutic-grade essential oil steam-distilled from ethically harvested botanicals. Designed for active ultrasonic diffusion or custom aromatherapy blends.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492584/edit",
    "img": "https://images.momence.com/h/200431/product-image/ab15ff2f-daa5-41fa-b7ca-3e217f5ca797.jpg"
  },
  {
    "id": 492590,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "FernandPetal",
    "name": "Goddess Body Mist",
    "fullTitle": "FernandPetal - Goddess Body Mist",
    "price": "$24.99",
    "priceNum": 24.99,
    "sku": "FP-MST-GOD-0025",
    "barcodes": [
      "FP-MST-GOD-0025",
      "492590",
      "FPMSTGOD0025"
    ],
    "pitch": "100% pure, therapeutic-grade essential oil steam-distilled from ethically harvested botanicals. Designed for active ultrasonic diffusion or custom aromatherapy blends.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492590/edit",
    "img": "https://images.momence.com/h/200431/product-image/3e41f6e4-8ed8-4399-8c71-15f3b820da6c.jpg"
  },
  {
    "id": 492587,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "FernandPetal",
    "name": "Grove Bath Salts",
    "fullTitle": "FernandPetal - Grove Bath Salts",
    "price": "$29.99",
    "priceNum": 29.99,
    "sku": "FP-SLT-GRV-0022",
    "barcodes": [
      "FP-SLT-GRV-0022",
      "492587",
      "FPSLTGRV0022"
    ],
    "pitch": "100% pure, therapeutic-grade essential oil steam-distilled from ethically harvested botanicals. Designed for active ultrasonic diffusion or custom aromatherapy blends.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492587/edit",
    "img": "https://images.momence.com/h/200431/product-image/270b99a2-ef01-4b36-a38c-78d86fa308ae.jpg"
  },
  {
    "id": 492591,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "FernandPetal",
    "name": "Lavender Body Mist",
    "fullTitle": "FernandPetal - Lavender Body Mist",
    "price": "$24.99",
    "priceNum": 24.99,
    "sku": "FP-MST-LAV-0026",
    "barcodes": [
      "FP-MST-LAV-0026",
      "492591",
      "FPMSTLAV0026"
    ],
    "pitch": "100% pure, therapeutic-grade essential oil steam-distilled from ethically harvested botanicals. Designed for active ultrasonic diffusion or custom aromatherapy blends.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492591/edit",
    "img": "https://images.momence.com/h/200431/product-image/22595859-c781-472f-aafa-e3baab9c6402.jpg"
  },
  {
    "id": 492574,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "FernandPetal",
    "name": "Lavender Essential Oil",
    "fullTitle": "FernandPetal - Lavender Essential Oil",
    "price": "$23.00",
    "priceNum": 23,
    "sku": "FP-OIL-LAV-0009",
    "barcodes": [
      "FP-OIL-LAV-0009",
      "492574",
      "FPOILLAV0009"
    ],
    "pitch": "100% pure, therapeutic-grade essential oil steam-distilled from ethically harvested botanicals. Designed for active ultrasonic diffusion or custom aromatherapy blends.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492574/edit",
    "img": "https://images.momence.com/h/200431/product-image/3293cc58-b142-4ea1-8e3e-8ab1c14f0024.jpg"
  },
  {
    "id": 492575,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "FernandPetal",
    "name": "Lemongrass Essential Oil",
    "fullTitle": "FernandPetal - Lemongrass Essential Oil",
    "price": "$18.00",
    "priceNum": 18,
    "sku": "FP-OIL-LEM-0010",
    "barcodes": [
      "FP-OIL-LEM-0010",
      "492575",
      "FPOILLEM0010"
    ],
    "pitch": "100% pure, therapeutic-grade essential oil steam-distilled from ethically harvested botanicals. Designed for active ultrasonic diffusion or custom aromatherapy blends.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492575/edit",
    "img": "https://images.momence.com/h/200431/product-image/1da48e85-49e9-4d77-84f6-25dbab8c4317.jpg"
  },
  {
    "id": 492581,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "FernandPetal",
    "name": "Meadow Essential Oil Blend",
    "fullTitle": "FernandPetal - Meadow Essential Oil Blend",
    "price": "$33.00",
    "priceNum": 33,
    "sku": "FP-BLD-MEA-0016",
    "barcodes": [
      "FP-BLD-MEA-0016",
      "492581",
      "FPBLDMEA0016"
    ],
    "pitch": "100% pure, therapeutic-grade essential oil steam-distilled from ethically harvested botanicals. Designed for active ultrasonic diffusion or custom aromatherapy blends.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492581/edit",
    "img": "https://images.momence.com/h/200431/product-image/e393b309-b630-4735-9f58-b2184b404c2c.jpg"
  },
  {
    "id": 492588,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "FernandPetal",
    "name": "Renew Bath Salts",
    "fullTitle": "FernandPetal - Renew Bath Salts",
    "price": "$29.99",
    "priceNum": 29.99,
    "sku": "FP-SLT-REN-0023",
    "barcodes": [
      "FP-SLT-REN-0023",
      "492588",
      "FPSLTREN0023"
    ],
    "pitch": "100% pure, therapeutic-grade essential oil steam-distilled from ethically harvested botanicals. Designed for active ultrasonic diffusion or custom aromatherapy blends.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492588/edit",
    "img": "https://images.momence.com/h/200431/product-image/b73d7ad2-f107-4a46-81bb-3eac101bab32.jpg"
  },
  {
    "id": 492589,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "FernandPetal",
    "name": "Salt Body Mist",
    "fullTitle": "FernandPetal - Salt Body Mist",
    "price": "$24.99",
    "priceNum": 24.99,
    "sku": "FP-MST-SAL-0024",
    "barcodes": [
      "FP-MST-SAL-0024",
      "492589",
      "FPMSTSAL0024"
    ],
    "pitch": "100% pure, therapeutic-grade essential oil steam-distilled from ethically harvested botanicals. Designed for active ultrasonic diffusion or custom aromatherapy blends.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492589/edit",
    "img": "https://images.momence.com/h/200431/product-image/186c55fe-e7b1-48b3-9e42-2da90091816a.jpg"
  },
  {
    "id": 492582,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "FernandPetal",
    "name": "Soothe Essential Oil Blend",
    "fullTitle": "FernandPetal - Soothe Essential Oil Blend",
    "price": "$24.00",
    "priceNum": 24,
    "sku": "FP-BLD-SOO-0017",
    "barcodes": [
      "FP-BLD-SOO-0017",
      "492582",
      "FPBLDSOO0017"
    ],
    "pitch": "100% pure, therapeutic-grade essential oil steam-distilled from ethically harvested botanicals. Designed for active ultrasonic diffusion or custom aromatherapy blends.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492582/edit",
    "img": "https://images.momence.com/h/200431/product-image/bf7da630-9eea-4bad-8dd1-0b521834617e.jpg"
  },
  {
    "id": 492570,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "FernandPetal",
    "name": "Soothe Roll-On",
    "fullTitle": "FernandPetal - Soothe Roll-On",
    "price": "$31.00",
    "priceNum": 31,
    "sku": "FP-ROL-SOO-0005",
    "barcodes": [
      "FP-ROL-SOO-0005",
      "492570",
      "FPROLSOO0005"
    ],
    "pitch": "Organic aromatherapy roll-on formulated with pure botanical essential oils and golden jojoba oil. Convenient pocket-sized wellness ritual for on-the-go grounding.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492570/edit",
    "img": "https://images.momence.com/h/200431/product-image/d0f5394b-04c7-4aa0-b264-47e73a31ca6e.jpg"
  },
  {
    "id": 492585,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "FernandPetal",
    "name": "Summit Shower Spray",
    "fullTitle": "FernandPetal - Summit Shower Spray",
    "price": "$65.00",
    "priceNum": 65,
    "sku": "FP-SPR-SUM-0020",
    "barcodes": [
      "FP-SPR-SUM-0020",
      "492585",
      "FPSPRSUM0020"
    ],
    "pitch": "100% pure, therapeutic-grade essential oil steam-distilled from ethically harvested botanicals. Designed for active ultrasonic diffusion or custom aromatherapy blends.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492585/edit",
    "img": "https://images.momence.com/h/200431/product-image/d8643b87-3b62-413c-98d3-bf939fde2802.jpg"
  },
  {
    "id": 492586,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "FernandPetal",
    "name": "Woods Shower Spray",
    "fullTitle": "FernandPetal - Woods Shower Spray",
    "price": "$65.00",
    "priceNum": 65,
    "sku": "FP-SPR-WDS-0021",
    "barcodes": [
      "FP-SPR-WDS-0021",
      "492586",
      "FPSPRWDS0021"
    ],
    "pitch": "100% pure, therapeutic-grade essential oil steam-distilled from ethically harvested botanicals. Designed for active ultrasonic diffusion or custom aromatherapy blends.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492586/edit",
    "img": "https://images.momence.com/h/200431/product-image/f81ab753-a5cd-44fa-b856-f3e207aed7e0.jpg"
  },
  {
    "id": 492300,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Gentle Habits",
    "name": "Brass Wave Incense Holder",
    "fullTitle": "Gentle Habits - Brass Wave Incense Holder",
    "price": "$57.99",
    "priceNum": 57.99,
    "sku": "GH-HLD-BRS-0027",
    "barcodes": [
      "GH-HLD-BRS-0027",
      "492300",
      "GHHLDBRS0027"
    ],
    "pitch": "The Brass Wave incense holder combines modern design with a timeless material, perfect for enhancing any space with our This is Incense sticks. Crafted from high-quality brass, the holder features a smooth, wave-like form that gracefully cradles your favourite incense sticks, ensuring they burn evenly and safely. Ideal for creating a calming atmosphere, this incense holder is both a functional piece and a striking accent for your home. Designed in Australia for conscious daily rituals and mindful pauses. Designed in Australia for conscious daily rituals and mindful pauses.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492300/edit",
    "img": "https://images.momence.com/h/200431/product-image/87de4f7d-b87f-43a7-a1d9-cf6eec88e92c.png"
  },
  {
    "id": 492299,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Gentle Habits",
    "name": "Glass Marble Holder - Brown",
    "fullTitle": "Gentle Habits - Glass Marble Holder - Brown",
    "price": "$108.00",
    "priceNum": 108,
    "sku": "GH-HLD-MAR-0026",
    "barcodes": [
      "GH-HLD-MAR-0026",
      "492299",
      "GHHLDMAR0026"
    ],
    "pitch": "Embrace the tranquility of your own space with our Glass Marble Holder. As part of Gentle Habits' unique collection, this incense holder is designed to complement your daily rituals. Not only does it hold your incense, but it also adds a touch of elegance to your home decor. Like all Gentle Habits products, this holder prompts you to become present and grounded, transforming everyday moments into captivating experiences. Make your home a sanctuary for well-being and mental health with our Glass Marble Holder. Designed in Australia for conscious daily rituals and mindful pauses. Designed in Australia for conscious daily rituals and mindful pauses.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492299/edit",
    "img": "https://images.momence.com/h/200431/product-image/6d6fc451-acf0-4927-af2b-eea5e6251f0f.png"
  },
  {
    "id": 492309,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Gentle Habits",
    "name": "Glass Vessel Incense Holder - Amber",
    "fullTitle": "Gentle Habits - Glass Vessel Incense Holder - Amber",
    "price": "$50.00",
    "priceNum": 50,
    "sku": "GH-HLD-GLS-0036",
    "barcodes": [
      "GH-HLD-GLS-0036",
      "492309",
      "GHHLDGLS0036"
    ],
    "pitch": "These vessel glass holders are specially made to fit our incense sticks and have a join in the base to ensure incense doesn't get stuck within the vessel.. Designed in Australia for conscious daily rituals and mindful pauses. Designed in Australia for conscious daily rituals and mindful pauses.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492309/edit",
    "img": "https://images.momence.com/h/200431/product-image/fc16af6e-fe4d-450d-9d35-bdc3b1fab6cf.png"
  },
  {
    "id": 492302,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Gentle Habits",
    "name": "Positive Outcomes Journal - OLIVE",
    "fullTitle": "Gentle Habits - Positive Outcomes Journal - OLIVE",
    "price": "$39.99",
    "priceNum": 39.99,
    "sku": "GH-JOU-POS-OLV-0029",
    "barcodes": [
      "GH-JOU-POS-OLV-0029",
      "492302",
      "GHJOUPOSOLV0029"
    ],
    "pitch": "Australian ritual and sensory design piece created to inspire calm pauses, mindful moments, and grounding presence throughout the day. Designed in Australia for conscious daily rituals and mindful pauses.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492302/edit",
    "img": "https://images.momence.com/h/200431/product-image/ac105277-c9e2-4ecf-95bc-03bd530ee539.png"
  },
  {
    "id": 492303,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Gentle Habits",
    "name": "Positive Outcomes Journal - PEACH",
    "fullTitle": "Gentle Habits - Positive Outcomes Journal - PEACH",
    "price": "$39.99",
    "priceNum": 39.99,
    "sku": "GH-JOU-POS-PCH-0030",
    "barcodes": [
      "GH-JOU-POS-PCH-0030",
      "492303",
      "GHJOUPOSPCH0030"
    ],
    "pitch": "Australian ritual and sensory design piece created to inspire calm pauses, mindful moments, and grounding presence throughout the day. Designed in Australia for conscious daily rituals and mindful pauses.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492303/edit",
    "img": "https://images.momence.com/h/200431/product-image/21a3a57a-db29-459e-90d7-606e866ef529.png"
  },
  {
    "id": 492301,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Gentle Habits",
    "name": "Positive Outcomes Journal -original",
    "fullTitle": "Gentle Habits - Positive Outcomes Journal -original",
    "price": "$39.99",
    "priceNum": 39.99,
    "sku": "GH-JOU-POS-0028",
    "barcodes": [
      "GH-JOU-POS-0028",
      "492301",
      "GHJOUPOS0028"
    ],
    "pitch": "Australian ritual and sensory design piece created to inspire calm pauses, mindful moments, and grounding presence throughout the day. Designed in Australia for conscious daily rituals and mindful pauses.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492301/edit",
    "img": "https://images.momence.com/h/200431/product-image/79a9a20a-97c7-44ce-938a-d2ec39deaf7e.png"
  },
  {
    "id": 492307,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Gentle Habits",
    "name": "The Collector Ceramic Holder - Brown Speckle",
    "fullTitle": "Gentle Habits - The Collector Ceramic Holder - Brown Speckle",
    "price": "$52.00",
    "priceNum": 52,
    "sku": "GH-HLD-COL-0034",
    "barcodes": [
      "GH-HLD-COL-0034",
      "492307",
      "GHHLDCOL0034"
    ],
    "pitch": "Ceramic Collector Holder Elevate your rituals with our beautiful Ceramic Collector Holder the perfect holder for our This Is Incense sticks. Each holder is made from natural ceramic and finished with a soft matte glaze, offering a minimal yet grounding presence in any space. Features: Hand-crafted ceramic with natural variations in finish Designed to hold This Is Incense sticks Heat-safe and easy to clean Available in 3 variations of earthy tones inspired by the Australian landscape. Designed in Australia for conscious daily rituals and mindful pauses. Designed in Australia for conscious daily rituals and mindful pauses.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492307/edit",
    "img": "https://images.momence.com/h/200431/product-image/4719bdef-9f29-4e69-8b33-c81a233bf362.png"
  },
  {
    "id": 492308,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Gentle Habits",
    "name": "The Vessel Incense Holder - Cream",
    "fullTitle": "Gentle Habits - The Vessel Incense Holder - Cream",
    "price": "$89.99",
    "priceNum": 89.99,
    "sku": "GH-HLD-VES-0035",
    "barcodes": [
      "GH-HLD-VES-0035",
      "492308",
      "GHHLDVES0035"
    ],
    "pitch": "Inspired by calm, this rounded ceramic incense holder brings a meditative touch to your daily rituals with its smooth, circular form and gentle ridged surface. Finished in a soft matte white glaze, it pairs beautifully with any interior style, from modern minimal to earthy organic. The central opening holds standard incense sticks upright, allowing ash to catch neatly into its wide basin. Material: Hand-formed ceramic with matte white glaze Dimensions: 10 cm (W) x 4.5 cm (H) - our largest incense holder. Fits: Our This is Incense 2.1mm and new Second Wave 3mm incense sticks Care: Wipe clean between with a damp cloth A grounding addition to your spacedesigned to elevate the everyday. Designed in Australia for conscious daily rituals and mindful pauses. Designed in Australia for conscious daily rituals and mindful pauses.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492308/edit",
    "img": "https://images.momence.com/h/200431/product-image/3370caf2-464f-4c32-a5bd-f99548a5f0d8.png"
  },
  {
    "id": 492304,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Gentle Habits",
    "name": "This Is Incense - BONDI BEACH",
    "fullTitle": "Gentle Habits - This Is Incense - BONDI BEACH",
    "price": "$52.00",
    "priceNum": 52,
    "sku": "GH-INC-BON-0031",
    "barcodes": [
      "GH-INC-BON-0031",
      "492304",
      "GHINCBON0031"
    ],
    "pitch": "Bondi, originally \"Boondi\" is an Aboriginal word which has the same meaning as the word \"surf\". Noise made by sea waves breaking on the beach. As you might have guessed, this scent has a strong ocean influence. Our Bondi Beach incense is delicate with unexpected with top notes of Grapefruit, middle sweet notes of Cardamom and grounded with Cedarwood. This is Incense is made with Australian Blended Essential oils. Use these incense sticks to relax while we take you to the beaches of Bondi; you can smell the salt in the air. Designed in Australia for conscious daily rituals and mindful pauses. Designed in Australia for conscious daily rituals and mindful pauses.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492304/edit",
    "img": "https://images.momence.com/h/200431/product-image/7bd58f7c-50e8-4381-aeac-80d1c5fe160f.png"
  },
  {
    "id": 492310,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Gentle Habits",
    "name": "This Is Incense - BYRON BAY",
    "fullTitle": "Gentle Habits - This Is Incense - BYRON BAY",
    "price": "$50.00",
    "priceNum": 50,
    "sku": "GH-INC-BYR-0037",
    "barcodes": [
      "GH-INC-BYR-0037",
      "492310",
      "GHINCBYR0037"
    ],
    "pitch": "Sultry Summer Nights Looking for and endless summer holiday? Indulge your senses with our Byron Bay incense, a very delicate and sexy burner that evokes hints of earthy cedarwood combined with fresh citrus notes. The Byron Bay incense sticks also feature essential oils like White Cypress & Rosalina, native to the Byron area. This is our best selling box!. Designed in Australia for conscious daily rituals and mindful pauses. Designed in Australia for conscious daily rituals and mindful pauses.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492310/edit",
    "img": "https://images.momence.com/h/200431/product-image/612ec532-1808-4a54-879f-c0c69626faba.png"
  },
  {
    "id": 492306,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Gentle Habits",
    "name": "This Is Incense - IMMERSION",
    "fullTitle": "Gentle Habits - This Is Incense - IMMERSION",
    "price": "$52.00",
    "priceNum": 52,
    "sku": "GH-INC-IMM-0033",
    "barcodes": [
      "GH-INC-IMM-0033",
      "492306",
      "GHINCIMM0033"
    ],
    "pitch": "A crisp, citrus scent with a deepwoody smokiness. Each stick is a moment for total presence. We go on holidays to relax, we book retreats to escape, we unplug to plug in to recorded meditations, wellness books and podcasts. We block out our day to day to feel a sense of connection and to find quiet. But shouldnt it really be about finding stillness in our every day life? Finding quiet to be able to hear. Looking less to notice more. An ode to yourself, to be here, in the now. Wherever that is. Top notes of sweetness with Orange. Middle notes of Gurjun Balsam (tree from Indonesia) smokiness with a subtly sweet, lightly woody scent. Bottom notes Amber and Cedarwood. Listen to our Immersion playlist while you burn. Designed in Australia for conscious daily rituals and mindful pauses. Designed in Australia for conscious daily rituals and mindful pauses.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492306/edit",
    "img": "https://images.momence.com/h/200431/product-image/63dd704c-ac82-478d-8b87-b6b276fae271.png"
  },
  {
    "id": 492311,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Gentle Habits",
    "name": "This Is Incense - NOOSA",
    "fullTitle": "Gentle Habits - This Is Incense - NOOSA",
    "price": "$50.00",
    "priceNum": 50,
    "sku": "GH-INC-NOO-0038",
    "barcodes": [
      "GH-INC-NOO-0038",
      "492311",
      "GHINCNOO0038"
    ],
    "pitch": "All the Summer Feels. If you love Byron Bay, you will love Noosa! Delicate and woody with a hint of sweetness. This warming scent will take you to the beachside. This is Incense is made with Australian Blended Essential oils and are phthalate free. Designed in Australia for conscious daily rituals and mindful pauses. Designed in Australia for conscious daily rituals and mindful pauses.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492311/edit",
    "img": "https://images.momence.com/h/200431/product-image/f7a2bc8a-224f-4514-a132-86df1548b559.png"
  },
  {
    "id": 492312,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Gentle Habits",
    "name": "This Is Incense - TASMANIA",
    "fullTitle": "Gentle Habits - This Is Incense - TASMANIA",
    "price": "$50.00",
    "priceNum": 50,
    "sku": "GH-INC-TAS-0039",
    "barcodes": [
      "GH-INC-TAS-0039",
      "492312",
      "GHINCTAS0039"
    ],
    "pitch": "Dark and Stormy Sultry with a strong masculine tone of leather and Frankincense. This scent will take you to the roaring coast in Tasmania with a whisky in hand. If you are a fan of Bells Beach, then this is the scent for you. This is Incense is made with Australian Blended Essential oils, which will captivate you to grab an incense stick to burn the moment you open the box... let its sultry masculine aroma glide out. Designed in Australia for conscious daily rituals and mindful pauses. Designed in Australia for conscious daily rituals and mindful pauses.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492312/edit",
    "img": "https://images.momence.com/h/200431/product-image/60eb8fa4-554a-42a2-ab66-e71da824999a.png"
  },
  {
    "id": 492305,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Gentle Habits",
    "name": "This is Incense - MARGARET RIVER",
    "fullTitle": "Gentle Habits - This is Incense - MARGARET RIVER",
    "price": "$52.00",
    "priceNum": 52,
    "sku": "GH-INC-MRG-0032",
    "barcodes": [
      "GH-INC-MRG-0032",
      "492305",
      "GHINCMRG0032"
    ],
    "pitch": "Margies is the scent of the forest, the earth and a hint of sweet sea spray. Deep, fresh and smooth. Margaret River incense will remind you of that feeling of being free. Free in wide open spaces and the wind in your hair. Where the squeaky white sand dissects crystal blue water and rugged red rock in the south west of WA. Sandalwood oil is the main overnote, it collides beautifully with mandarin and fragonia oil making this an emotive and woody sensory experience. Perfect if you are looking to escape. This is Incense is made with Australian Blended Essential oils, which will entice you to burn a stick the moment you open the box. Designed in Australia for conscious daily rituals and mindful pauses. Designed in Australia for conscious daily rituals and mindful pauses.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492305/edit",
    "img": "https://images.momence.com/h/200431/product-image/e196b7d3-115e-41a4-9068-4d113656a69d.png"
  },
  {
    "id": 492478,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Homecoming",
    "name": "Balsam Fir Neroli Incense",
    "fullTitle": "Homecoming - Balsam Fir Neroli Incense",
    "price": "$34.99",
    "priceNum": 34.99,
    "sku": "HC-INC-BAL-0002",
    "barcodes": [
      "HC-INC-BAL-0002",
      "492478",
      "HCINCBAL0002"
    ],
    "pitch": "Minimalist home design essential crafted from solid metal with a brushed satin finish. Designed to hold candles, incense, or everyday sacred treasures.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492478/edit",
    "img": "https://images.momence.com/h/200431/product-image/e3caaa96-47c4-45c9-b24e-1a751a3b8cf0.jpg"
  },
  {
    "id": 492477,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Homecoming",
    "name": "Ginger Flower Saffron Incense",
    "fullTitle": "Homecoming - Ginger Flower Saffron Incense",
    "price": "$34.99",
    "priceNum": 34.99,
    "sku": "HC-INC-GIN-0001",
    "barcodes": [
      "HC-INC-GIN-0001",
      "492477",
      "HCINCGIN0001"
    ],
    "pitch": "Minimalist home design essential crafted from solid metal with a brushed satin finish. Designed to hold candles, incense, or everyday sacred treasures.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492477/edit",
    "img": "https://images.momence.com/h/200431/product-image/4ea6336a-945c-4743-9a04-1e54e30af2bc.jpg"
  },
  {
    "id": 492485,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Homecoming",
    "name": "Oakmoss + Sage Home Mist",
    "fullTitle": "Homecoming - Oakmoss + Sage Home Mist",
    "price": "$34.99",
    "priceNum": 34.99,
    "sku": "HC-MIS-OAK-0009",
    "barcodes": [
      "HC-MIS-OAK-0009",
      "492485",
      "HCMISOAK0009"
    ],
    "pitch": "All-natural botanical room and linen mist crafted with pure essential oils and witch hazel. Instantly refreshes any room or yoga space.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492485/edit",
    "img": "https://images.momence.com/h/200431/product-image/d2a0fc1f-cbc5-4ad5-a542-a88ae2fbfe07.jpg"
  },
  {
    "id": 492481,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Homecoming",
    "name": "Oud Patchouli Resin Incense",
    "fullTitle": "Homecoming - Oud Patchouli Resin Incense",
    "price": "$34.99",
    "priceNum": 34.99,
    "sku": "HC-INC-OUD-0005",
    "barcodes": [
      "HC-INC-OUD-0005",
      "492481",
      "HCINCOUD0005"
    ],
    "pitch": "Minimalist home design essential crafted from solid metal with a brushed satin finish. Designed to hold candles, incense, or everyday sacred treasures.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492481/edit",
    "img": "https://images.momence.com/h/200431/product-image/f9759553-1341-494e-8963-5d6a47e30299.jpg"
  },
  {
    "id": 492479,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Homecoming",
    "name": "Sandalwood Smoke Incense",
    "fullTitle": "Homecoming - Sandalwood Smoke Incense",
    "price": "$34.99",
    "priceNum": 34.99,
    "sku": "HC-INC-SAN-0003",
    "barcodes": [
      "HC-INC-SAN-0003",
      "492479",
      "HCINCSAN0003"
    ],
    "pitch": "Minimalist home design essential crafted from solid metal with a brushed satin finish. Designed to hold candles, incense, or everyday sacred treasures.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492479/edit",
    "img": "https://images.momence.com/h/200431/product-image/efebb682-7fac-4e46-b5ae-974e8f17ca72.jpg"
  },
  {
    "id": 492480,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Homecoming",
    "name": "Tobacco Wild Rose Incense",
    "fullTitle": "Homecoming - Tobacco Wild Rose Incense",
    "price": "$34.99",
    "priceNum": 34.99,
    "sku": "HC-INC-TOB-0004",
    "barcodes": [
      "HC-INC-TOB-0004",
      "492480",
      "HCINCTOB0004"
    ],
    "pitch": "Minimalist home design essential crafted from solid metal with a brushed satin finish. Designed to hold candles, incense, or everyday sacred treasures.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492480/edit",
    "img": "https://images.momence.com/h/200431/product-image/c5e1021a-59cb-4004-ba36-d0fb58500bce.jpg"
  },
  {
    "id": 492432,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Kiyo Home | No Tariffs",
    "name": "Kiyo Home - Black- Palo Santo and Sage Ceramic Chimney Burner",
    "fullTitle": "Kiyo Home | No Tariffs - Kiyo Home - Black- Palo Santo and Sage Ceramic Chimney Burner",
    "price": "$65.00",
    "priceNum": 65,
    "sku": "KH-BUR-BLA-0013",
    "barcodes": [
      "KH-BUR-BLA-0013",
      "492432",
      "KHBURBLA0013"
    ],
    "pitch": "Sleek contemporary home and bar accessory crafted to unite functional utility with sculptural minimalist aesthetic.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492432/edit",
    "img": "https://images.momence.com/h/200431/product-image/461ae48a-bdff-4266-8521-7e03c5f6f9b8.png"
  },
  {
    "id": 492431,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Kiyo Home | No Tariffs",
    "name": "Kiyo Home - White- Palo Santo and Sage Ceramic Chimney Burner",
    "fullTitle": "Kiyo Home | No Tariffs - Kiyo Home - White- Palo Santo and Sage Ceramic Chimney Burner",
    "price": "$65.00",
    "priceNum": 65,
    "sku": "KH-BUR-WHI-0012",
    "barcodes": [
      "KH-BUR-WHI-0012",
      "492431",
      "KHBURWHI0012"
    ],
    "pitch": "Sleek contemporary home and bar accessory crafted to unite functional utility with sculptural minimalist aesthetic.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492431/edit",
    "img": "https://images.momence.com/h/200431/product-image/a3c26689-25cc-4ebe-938e-8ed30d01ffb9.png"
  },
  {
    "id": 492422,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Kiyo Home | No Tariffs",
    "name": "Kiyo Home - Zen Brass Incense Frog",
    "fullTitle": "Kiyo Home | No Tariffs - Kiyo Home - Zen Brass Incense Frog",
    "price": "$31.99",
    "priceNum": 31.99,
    "sku": "KH-INC-FRO-0003",
    "barcodes": [
      "KH-INC-FRO-0003",
      "492422",
      "KHINCFRO0003"
    ],
    "pitch": "Sleek contemporary home and bar accessory crafted to unite functional utility with sculptural minimalist aesthetic.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492422/edit",
    "img": "https://images.momence.com/h/200431/product-image/72add897-182f-4a2e-b89f-404ad3bae2ee.png"
  },
  {
    "id": 492393,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Misc Goods Co",
    "name": "Misc. Goods Co. - Greyhaven Roll-On Cologne | Oil-Based | Ocean, Pine + Moss",
    "fullTitle": "Misc Goods Co - Misc. Goods Co. - Greyhaven Roll-On Cologne | Oil-Based | Ocean, Pine + Moss",
    "price": "$48.00",
    "priceNum": 48,
    "sku": "MG-ROL-GRE-0006",
    "barcodes": [
      "MG-ROL-GRE-0006",
      "492393",
      "MGROLGRE0006"
    ],
    "pitch": "Premium American-crafted apothecary essential made with all-natural botanicals, nourishing plant oils, and complex woodsy nature notes.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492393/edit",
    "img": "https://images.momence.com/h/200431/product-image/3fd5d162-bde5-4e1b-a970-fc06a2e8f521.png"
  },
  {
    "id": 492389,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Misc Goods Co",
    "name": "Misc. Goods Co. - Kings Market Roll-On Cologne | Oil-Based | Coconut & Fig",
    "fullTitle": "Misc Goods Co - Misc. Goods Co. - Kings Market Roll-On Cologne | Oil-Based | Coconut & Fig",
    "price": "$48.00",
    "priceNum": 48,
    "sku": "MG-ROL-KIN-0002",
    "barcodes": [
      "MG-ROL-KIN-0002",
      "492389",
      "MGROLKIN0002"
    ],
    "pitch": "Premium American-crafted apothecary essential made with all-natural botanicals, nourishing plant oils, and complex woodsy nature notes.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492389/edit",
    "img": "https://images.momence.com/h/200431/product-image/ed0e42ca-90db-4363-8aad-7434e63634de.png"
  },
  {
    "id": 492390,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Misc Goods Co",
    "name": "Misc. Goods Co. - Meadowland Roll-On Cologne | Oil-Based | Cedar + Patchouli",
    "fullTitle": "Misc Goods Co - Misc. Goods Co. - Meadowland Roll-On Cologne | Oil-Based | Cedar + Patchouli",
    "price": "$48.00",
    "priceNum": 48,
    "sku": "MG-ROL-MEA-0003",
    "barcodes": [
      "MG-ROL-MEA-0003",
      "492390",
      "MGROLMEA0003"
    ],
    "pitch": "Premium American-crafted apothecary essential made with all-natural botanicals, nourishing plant oils, and complex woodsy nature notes.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492390/edit",
    "img": "https://images.momence.com/h/200431/product-image/36d534c9-cd49-4331-85b6-253c8ecd9e1c.png"
  },
  {
    "id": 492388,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Misc Goods Co",
    "name": "Misc. Goods Co. - Nameless Earth Roll-On Cologne | Oil-Based | Mineral + Smoke",
    "fullTitle": "Misc Goods Co - Misc. Goods Co. - Nameless Earth Roll-On Cologne | Oil-Based | Mineral + Smoke",
    "price": "$48.00",
    "priceNum": 48,
    "sku": "MG-ROL-NAM-0001",
    "barcodes": [
      "MG-ROL-NAM-0001",
      "492388",
      "MGROLNAM0001"
    ],
    "pitch": "Premium American-crafted apothecary essential made with all-natural botanicals, nourishing plant oils, and complex woodsy nature notes.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492388/edit",
    "img": "https://images.momence.com/h/200431/product-image/8edc7e04-6009-426f-8b01-c75e67455b83.png"
  },
  {
    "id": 492391,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "Misc Goods Co",
    "name": "Misc. Goods Co. - Underhill Roll-On Cologne | Oil-Based | Tobacco, Cedar + Ale",
    "fullTitle": "Misc Goods Co - Misc. Goods Co. - Underhill Roll-On Cologne | Oil-Based | Tobacco, Cedar + Ale",
    "price": "$48.00",
    "priceNum": 48,
    "sku": "MG-ROL-UND-0004",
    "barcodes": [
      "MG-ROL-UND-0004",
      "492391",
      "MGROLUND0004"
    ],
    "pitch": "Premium American-crafted apothecary essential made with all-natural botanicals, nourishing plant oils, and complex woodsy nature notes.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492391/edit",
    "img": "https://images.momence.com/h/200431/product-image/f2117f28-8377-4d18-af93-a14cc6f5de70.png"
  },
  {
    "id": 492287,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "The 12th Moon",
    "name": "Cleanse and Manifest Kit - Bundle - 4 Pack - Sage Smudge",
    "fullTitle": "The 12th Moon - Cleanse and Manifest Kit - Bundle - 4 Pack - Sage Smudge",
    "price": "$24.99",
    "priceNum": 24.99,
    "sku": "TM-KIT-CLM-0014",
    "barcodes": [
      "TM-KIT-CLM-0014",
      "492287",
      "TMKITCLM0014"
    ],
    "pitch": "Intention-driven ritual smudge kit featuring sustainably harvested white sage, holy Palo Santo, and raw healing gemstones. Handcrafted with intention in Southern California.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492287/edit",
    "img": "https://images.momence.com/h/200431/product-image/00b21092-2271-4a06-91a0-da33ae62c39a.png"
  },
  {
    "id": 492288,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "The 12th Moon",
    "name": "Diy Smudge Kit",
    "fullTitle": "The 12th Moon - Diy Smudge Kit",
    "price": "$43.99",
    "priceNum": 43.99,
    "sku": "TM-KIT-DIY-0015",
    "barcodes": [
      "TM-KIT-DIY-0015",
      "492288",
      "TMKITDIY0015"
    ],
    "pitch": "Intention-driven ritual smudge kit featuring sustainably harvested white sage, holy Palo Santo, and raw healing gemstones. Handcrafted with intention in Southern California.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492288/edit",
    "img": "https://images.momence.com/h/200431/product-image/9a6c5253-c5cc-49ec-a9e8-922ec1b1b3a6.png"
  },
  {
    "id": 492289,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "The 12th Moon",
    "name": "Goddess Intention Kit",
    "fullTitle": "The 12th Moon - Goddess Intention Kit",
    "price": "$48.99",
    "priceNum": 48.99,
    "sku": "TM-KIT-GOD-0016",
    "barcodes": [
      "TM-KIT-GOD-0016",
      "492289",
      "TMKITGOD0016"
    ],
    "pitch": "Intention-driven ritual smudge kit featuring sustainably harvested white sage, holy Palo Santo, and raw healing gemstones. Handcrafted with intention in Southern California.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492289/edit",
    "img": "https://images.momence.com/h/200431/product-image/929d340a-916f-4a13-9085-b0d202bde92f.png"
  },
  {
    "id": 492292,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "The 12th Moon",
    "name": "Intentions Kit Dream + Manifest Kit - Protecting My Energy Kit",
    "fullTitle": "The 12th Moon - Intentions Kit Dream + Manifest Kit - Protecting My Energy Kit",
    "price": "$69.99",
    "priceNum": 69.99,
    "sku": "TM-KIT-DRM-0019",
    "barcodes": [
      "TM-KIT-DRM-0019",
      "492292",
      "TMKITDRM0019"
    ],
    "pitch": "Intentions Kit- Dream + Manifest. Handcrafted with intention in Southern California. Handcrafted with intention in Southern California.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492292/edit",
    "img": "https://images.momence.com/h/200431/product-image/7fa1a27a-fb43-44aa-aa97-7d149b695a66.png"
  },
  {
    "id": 492290,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "The 12th Moon",
    "name": "Mini Sage Bundle - Botanical Smoke Cleansing Bundle",
    "fullTitle": "The 12th Moon - Mini Sage Bundle - Botanical Smoke Cleansing Bundle",
    "price": "$17.00",
    "priceNum": 17,
    "sku": "TM-SAG-MINI-0017",
    "barcodes": [
      "TM-SAG-MINI-0017",
      "492290",
      "TMSAGMINI0017"
    ],
    "pitch": "Intention-driven ritual smudge kit featuring sustainably harvested white sage, holy Palo Santo, and raw healing gemstones. Handcrafted with intention in Southern California.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492290/edit",
    "img": "https://images.momence.com/h/200431/product-image/fe20df93-66bb-40c6-a981-d2778c64cafc.png"
  },
  {
    "id": 492291,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "The 12th Moon",
    "name": "Palo Santo & Lavender Bundle - Smoke Cleansing - Smudge",
    "fullTitle": "The 12th Moon - Palo Santo & Lavender Bundle - Smoke Cleansing - Smudge",
    "price": "$11.99",
    "priceNum": 11.99,
    "sku": "TM-SAG-PSL-0018",
    "barcodes": [
      "TM-SAG-PSL-0018",
      "492291",
      "TMSAGPSL0018"
    ],
    "pitch": "Intention-driven ritual smudge kit featuring sustainably harvested white sage, holy Palo Santo, and raw healing gemstones. Handcrafted with intention in Southern California.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492291/edit",
    "img": "https://images.momence.com/h/200431/product-image/8e3782e7-a922-4313-86a0-dd5706120a1a.png"
  },
  {
    "id": 492293,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "The 12th Moon",
    "name": "Thriving Kit + Personal growth + Balance- Protecting My Energy Kit",
    "fullTitle": "The 12th Moon - Thriving Kit + Personal growth + Balance- Protecting My Energy Kit",
    "price": "$69.99",
    "priceNum": 69.99,
    "sku": "TM-KIT-THR-0020",
    "barcodes": [
      "TM-KIT-THR-0020",
      "492293",
      "TMKITTHR0020"
    ],
    "pitch": "Thriving Kit + Personal growth + Balance. Handcrafted with intention in Southern California. Handcrafted with intention in Southern California.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492293/edit",
    "img": "https://images.momence.com/h/200431/product-image/da52ed2f-72d0-4bf5-abfd-5be3ea9eca7b.png"
  },
  {
    "id": 492294,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "The 12th Moon",
    "name": "Vibing Kit + Relieve Stress + Remove Negativity- Protecting My Energy Kit",
    "fullTitle": "The 12th Moon - Vibing Kit + Relieve Stress + Remove Negativity- Protecting My Energy Kit",
    "price": "$69.99",
    "priceNum": 69.99,
    "sku": "TM-KIT-VIB-0021",
    "barcodes": [
      "TM-KIT-VIB-0021",
      "492294",
      "TMKITVIB0021"
    ],
    "pitch": "Vibing Kit + Relieve Stress + Remove Negativity. Handcrafted with intention in Southern California. Handcrafted with intention in Southern California.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492294/edit",
    "img": "https://images.momence.com/h/200431/product-image/d529e3c9-d5e1-4a5d-9a46-91cfff6e1cda.png"
  },
  {
    "id": 499572,
    "department": "Aromatherapy, Incense & Sacred Smudging",
    "brand": "The Practice",
    "name": "Mini Sage Bundle 12th Moon",
    "fullTitle": "The Practice - Mini Sage Bundle 12th Moon",
    "price": "$14.99",
    "priceNum": 14.99,
    "sku": "",
    "barcodes": [
      "",
      "499572"
    ],
    "pitch": "Curated lifestyle and wellness essential selected exclusively for The Practice community.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/499572/edit",
    "img": ""
  },
  {
    "id": 492313,
    "department": "Cafe & Nourishment",
    "brand": "Gentle Habits",
    "name": "Incense Platter",
    "fullTitle": "Gentle Habits - Incense Platter",
    "price": "$79.99",
    "priceNum": 79.99,
    "sku": "GH-PLT-INC-0040",
    "barcodes": [
      "GH-PLT-INC-0040",
      "492313",
      "GHPLTINC0040"
    ],
    "pitch": "A place for the ritual, and everything that comes with it. Our Incense Platter is designed to hold the small, meaningful pieces of your daily unwind - from burning incense to keeping jewellery, crystals, or evening essentials close by. Thoughtfully divided into soft, organic compartments, it invites a slower pace into your space, Each piece is crafted with a subtle, unique hand made finish making every platter uniquely its own. The built-in incense holder keeps your ritual contained, while the segmented design brings both function and calm to your bedside, coffee table, or bathroom. You can also use it for a food platter. Use it to burn, to store, or simply to create a moment. Multi-use incense holder + organiser Built-in incense hole Use as a food platter Sectioned design for jewellery, crystals, or small objects Designed for slow, everyday rituals A simple object that turns daily habits into something more intentional. Designed in Australia for conscious daily rituals and mindful pauses. Designed in Australia for conscious daily rituals and mindful pauses.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492313/edit",
    "img": "https://images.momence.com/h/200431/product-image/d49928ec-43aa-43f5-ba42-0f6f184b4980.png"
  },
  {
    "id": 492488,
    "department": "Cafe & Nourishment",
    "brand": "Homecoming",
    "name": "Coconut Milk + Santal Home Mist",
    "fullTitle": "Homecoming - Coconut Milk + Santal Home Mist",
    "price": "$34.99",
    "priceNum": 34.99,
    "sku": "HC-MIS-COC-0012",
    "barcodes": [
      "HC-MIS-COC-0012",
      "492488",
      "HCMISCOC0012"
    ],
    "pitch": "All-natural botanical room and linen mist crafted with pure essential oils and witch hazel. Instantly refreshes any room or yoga space.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492488/edit",
    "img": "https://images.momence.com/h/200431/product-image/d16584c4-984c-4b77-8709-4e5ac2504e55.jpg"
  },
  {
    "id": 492542,
    "department": "Cafe & Nourishment",
    "brand": "Preston Grooming",
    "name": "Shower Steamer - Eucalyptus",
    "fullTitle": "Preston Grooming - Shower Steamer - Eucalyptus",
    "price": "$45.00",
    "priceNum": 45,
    "sku": "PG-CAN-GRE-0007",
    "barcodes": [
      "PG-CAN-GRE-0007",
      "492542",
      "PGCANGRE0007"
    ],
    "pitch": "High-performance clean men's grooming apothecary crafted with organic plant oils, antioxidant botanicals, and invigorating nature extracts.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492542/edit",
    "img": "https://images.momence.com/h/200431/product-image/23d5f120-8190-41d3-b368-259af847fa9a.jpg"
  },
  {
    "id": 492413,
    "department": "Cafe & Nourishment",
    "brand": "Sugarfina",
    "name": "Bubbly Bears - Celebration Bottle",
    "fullTitle": "Sugarfina - Bubbly Bears - Celebration Bottle",
    "price": "$32.56",
    "priceNum": 32.56,
    "sku": "SF-BEA-BUB-0004",
    "barcodes": [
      "SF-BEA-BUB-0004",
      "492413",
      "SFBEABUB0004"
    ],
    "pitch": "Luxury confection made in Germany infused with premium French sparkling champagne and artisan flavors. Non-alcoholic, refined, and delectable. Gourmet luxury candy made in Germany.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492413/edit",
    "img": "https://images.momence.com/h/200431/product-image/83c622c7-14ea-42ee-855d-9f2b767c9c05.png"
  },
  {
    "id": 492417,
    "department": "Cafe & Nourishment",
    "brand": "Sugarfina",
    "name": "Bubbly Bears- Small",
    "fullTitle": "Sugarfina - Bubbly Bears- Small",
    "price": "$14.58",
    "priceNum": 14.58,
    "sku": "SF-SMA-BUB-0008",
    "barcodes": [
      "SF-SMA-BUB-0008",
      "492417",
      "SFSMABUB0008"
    ],
    "pitch": "Luxury confection made in Germany infused with premium French sparkling champagne and artisan flavors. Non-alcoholic, refined, and delectable. Gourmet luxury candy made in Germany.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492417/edit",
    "img": "https://images.momence.com/h/200431/product-image/8f6bdf0b-9b8b-460d-ae61-9ae5e8d5d814.png"
  },
  {
    "id": 492412,
    "department": "Cafe & Nourishment",
    "brand": "Sugarfina",
    "name": "Champagne & Rosé - Candy Mix Bag (Sweet Escape)",
    "fullTitle": "Sugarfina - Champagne & Rosé - Candy Mix Bag (Sweet Escape)",
    "price": "$29.40",
    "priceNum": 29.4,
    "sku": "SF-MIX-CHA-0003",
    "barcodes": [
      "SF-MIX-CHA-0003",
      "492412",
      "SFMIXCHA0003"
    ],
    "pitch": "Luxury confection made in Germany infused with premium French sparkling champagne and artisan flavors. Non-alcoholic, refined, and delectable. Gourmet luxury candy made in Germany.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492412/edit",
    "img": "https://images.momence.com/h/200431/product-image/d6a18f7c-d54e-42bb-afcc-c82fdaed66ae.png"
  },
  {
    "id": 492416,
    "department": "Cafe & Nourishment",
    "brand": "Sugarfina",
    "name": "Champagne Bears- Small",
    "fullTitle": "Sugarfina - Champagne Bears- Small",
    "price": "$14.58",
    "priceNum": 14.58,
    "sku": "SF-SMA-BEA-0007",
    "barcodes": [
      "SF-SMA-BEA-0007",
      "492416",
      "SFSMABEA0007"
    ],
    "pitch": "Luxury confection made in Germany infused with premium French sparkling champagne and artisan flavors. Non-alcoholic, refined, and delectable. Gourmet luxury candy made in Germany.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492416/edit",
    "img": "https://images.momence.com/h/200431/product-image/3a4ef4e9-a6aa-4a65-9799-f447ded371b2.png"
  },
  {
    "id": 492414,
    "department": "Cafe & Nourishment",
    "brand": "Sugarfina",
    "name": "Champagne Bubbles - Small",
    "fullTitle": "Sugarfina - Champagne Bubbles - Small",
    "price": "$13.12",
    "priceNum": 13.12,
    "sku": "SF-SMA-CHA-0005",
    "barcodes": [
      "SF-SMA-CHA-0005",
      "492414",
      "SFSMACHA0005"
    ],
    "pitch": "Luxury confection made in Germany infused with premium French sparkling champagne and artisan flavors. Non-alcoholic, refined, and delectable. Gourmet luxury candy made in Germany.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492414/edit",
    "img": "https://images.momence.com/h/200431/product-image/8d9b29bc-5b61-4b08-8aad-18652fc7e29a.png"
  },
  {
    "id": 492419,
    "department": "Cafe & Nourishment",
    "brand": "Sugarfina",
    "name": "Sour Rainbow Belts - Small",
    "fullTitle": "Sugarfina - Sour Rainbow Belts - Small",
    "price": "$14.58",
    "priceNum": 14.58,
    "sku": "SF-SMA-SOU-0010",
    "barcodes": [
      "SF-SMA-SOU-0010",
      "492419",
      "SFSMASOU0010"
    ],
    "pitch": "Luxury confection made in Germany infused with premium French sparkling champagne and artisan flavors. Non-alcoholic, refined, and delectable. Gourmet luxury candy made in Germany.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492419/edit",
    "img": "https://images.momence.com/h/200431/product-image/a0932aff-7125-4011-b174-c569d860f6e7.png"
  },
  {
    "id": 492418,
    "department": "Cafe & Nourishment",
    "brand": "Sugarfina",
    "name": "Strawberry Champagne Bears - Small",
    "fullTitle": "Sugarfina - Strawberry Champagne Bears - Small",
    "price": "$14.58",
    "priceNum": 14.58,
    "sku": "SF-SMA-STR-0009",
    "barcodes": [
      "SF-SMA-STR-0009",
      "492418",
      "SFSMASTR0009"
    ],
    "pitch": "Luxury confection made in Germany infused with premium French sparkling champagne and artisan flavors. Non-alcoholic, refined, and delectable. Gourmet luxury candy made in Germany.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492418/edit",
    "img": "https://images.momence.com/h/200431/product-image/93a7933e-f35c-4e8b-9534-8b10b2c90418.png"
  },
  {
    "id": 492410,
    "department": "Cafe & Nourishment",
    "brand": "Sugarfina",
    "name": "Strawberry Champagne Bears Celebration Bottle",
    "fullTitle": "Sugarfina - Strawberry Champagne Bears Celebration Bottle",
    "price": "$32.99",
    "priceNum": 32.99,
    "sku": "SF-BEA-STR-0001",
    "barcodes": [
      "SF-BEA-STR-0001",
      "492410",
      "SFBEASTR0001"
    ],
    "pitch": "Luxury confection made in Germany infused with premium French sparkling champagne and artisan flavors. Non-alcoholic, refined, and delectable. Gourmet luxury candy made in Germany.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492410/edit",
    "img": "https://images.momence.com/h/200431/product-image/0f80f56a-88d4-4d6a-9c34-72dee5753d1c.png"
  },
  {
    "id": 492411,
    "department": "Cafe & Nourishment",
    "brand": "Sugarfina",
    "name": "Sugar Lips & Sour Strawberries - Candy Mix Bag",
    "fullTitle": "Sugarfina - Sugar Lips & Sour Strawberries - Candy Mix Bag",
    "price": "$28.14",
    "priceNum": 28.14,
    "sku": "SF-MIX-LIP-0002",
    "barcodes": [
      "SF-MIX-LIP-0002",
      "492411",
      "SFMIXLIP0002"
    ],
    "pitch": "Luxury confection made in Germany infused with premium French sparkling champagne and artisan flavors. Non-alcoholic, refined, and delectable. Gourmet luxury candy made in Germany.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492411/edit",
    "img": "https://images.momence.com/h/200431/product-image/5c3cb3a0-6390-4e47-86fc-10a593ab42e7.png"
  },
  {
    "id": 492415,
    "department": "Cafe & Nourishment",
    "brand": "Sugarfina",
    "name": "Sugar Lips- Small",
    "fullTitle": "Sugarfina - Sugar Lips- Small",
    "price": "$13.12",
    "priceNum": 13.12,
    "sku": "SF-SMA-LIP-0006",
    "barcodes": [
      "SF-SMA-LIP-0006",
      "492415",
      "SFSMALIP0006"
    ],
    "pitch": "Luxury confection made in Germany infused with premium French sparkling champagne and artisan flavors. Non-alcoholic, refined, and delectable. Gourmet luxury candy made in Germany.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492415/edit",
    "img": "https://images.momence.com/h/200431/product-image/04fddfe2-6a28-45f5-abc8-90baad76ed5e.png"
  },
  {
    "id": 513576,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Almond Milk Used -",
    "fullTitle": "The Practice Cafe - Almond Milk Used -",
    "price": "$0.85",
    "priceNum": 0.85,
    "sku": "",
    "barcodes": [
      "",
      "513576"
    ],
    "pitch": "Handcrafted organic wellness refreshment prepared fresh at The Practice Cafe bar.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/513576/edit",
    "img": ""
  },
  {
    "id": 513549,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Americano - Large",
    "fullTitle": "The Practice Cafe - Americano - Large",
    "price": "$6.50",
    "priceNum": 6.5,
    "sku": "",
    "barcodes": [
      "",
      "513549"
    ],
    "pitch": "Handcrafted organic wellness refreshment prepared fresh at The Practice Cafe bar.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/513549/edit",
    "img": "https://images.momence.com/h/200431/product-image/d1dd719a-52ec-476f-b11d-1324dfdbdfa3.png"
  },
  {
    "id": 545872,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Americano - Regular",
    "fullTitle": "The Practice Cafe - Americano - Regular",
    "price": "$5.50",
    "priceNum": 5.5,
    "sku": "",
    "barcodes": [
      "",
      "545872"
    ],
    "pitch": "Handcrafted organic wellness refreshment prepared fresh at The Practice Cafe bar.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/545872/edit",
    "img": "https://images.momence.com/h/200431/product-image/15b37fd6-50b6-4955-ba91-ec38aef79351.png"
  },
  {
    "id": 556966,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Black Tea Large",
    "fullTitle": "The Practice Cafe - Black Tea Large",
    "price": "$6.50",
    "priceNum": 6.5,
    "sku": "",
    "barcodes": [
      "",
      "556966"
    ],
    "pitch": "Single-origin organic loose-leaf tea steeped to perfection for mindful calm and antioxidant balance.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/556966/edit",
    "img": "https://images.momence.com/h/200431/product-image/8b6733ea-8a24-468e-9849-949664b42ac8.png"
  },
  {
    "id": 545875,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Black Tea Regular -",
    "fullTitle": "The Practice Cafe - Black Tea Regular -",
    "price": "$5.50",
    "priceNum": 5.5,
    "sku": "",
    "barcodes": [
      "",
      "545875"
    ],
    "pitch": "Single-origin organic loose-leaf tea steeped to perfection for mindful calm and antioxidant balance.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/545875/edit",
    "img": "https://images.momence.com/h/200431/product-image/f36d8d3b-2ce5-4867-800e-e31d325d8f10.png"
  },
  {
    "id": 538376,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Brown Rock Tea",
    "fullTitle": "The Practice Cafe - Brown Rock Tea",
    "price": "$3.50",
    "priceNum": 3.5,
    "sku": "",
    "barcodes": [
      "",
      "538376"
    ],
    "pitch": "Single-origin organic loose-leaf tea steeped to perfection for mindful calm and antioxidant balance.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/538376/edit",
    "img": ""
  },
  {
    "id": 513586,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Cane Syrup",
    "fullTitle": "The Practice Cafe - Cane Syrup",
    "price": "$0.75",
    "priceNum": 0.75,
    "sku": "",
    "barcodes": [
      "",
      "513586"
    ],
    "pitch": "Handcrafted organic wellness refreshment prepared fresh at The Practice Cafe bar.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/513586/edit",
    "img": ""
  },
  {
    "id": 548481,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Cappuccino - Large",
    "fullTitle": "The Practice Cafe - Cappuccino - Large",
    "price": "$7.75",
    "priceNum": 7.75,
    "sku": "",
    "barcodes": [
      "",
      "548481"
    ],
    "pitch": "Specialty organic espresso handcrafted with silky micro-foam and your choice of organic milk.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/548481/edit",
    "img": "https://images.momence.com/h/200431/product-image/b604ed55-a4ad-4df1-abfc-d1c535a43d88.png"
  },
  {
    "id": 555494,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Cappuccino - Regular",
    "fullTitle": "The Practice Cafe - Cappuccino - Regular",
    "price": "$6.75",
    "priceNum": 6.75,
    "sku": "",
    "barcodes": [
      "",
      "555494"
    ],
    "pitch": "Specialty organic espresso handcrafted with silky micro-foam and your choice of organic milk.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/555494/edit",
    "img": "https://images.momence.com/h/200431/product-image/d45eec00-7e3c-4a37-9b2c-c1a80db804b0.png"
  },
  {
    "id": 513583,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Caramel Syrup",
    "fullTitle": "The Practice Cafe - Caramel Syrup",
    "price": "$0.75",
    "priceNum": 0.75,
    "sku": "",
    "barcodes": [
      "",
      "513583"
    ],
    "pitch": "Handcrafted organic wellness refreshment prepared fresh at The Practice Cafe bar.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/513583/edit",
    "img": ""
  },
  {
    "id": 513574,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Ceremonial Cacao",
    "fullTitle": "The Practice Cafe - Ceremonial Cacao",
    "price": "$8.25",
    "priceNum": 8.25,
    "sku": "",
    "barcodes": [
      "",
      "513574"
    ],
    "pitch": "Handcrafted organic wellness refreshment prepared fresh at The Practice Cafe bar.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/513574/edit",
    "img": ""
  },
  {
    "id": 557039,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Chai Latte - Large",
    "fullTitle": "The Practice Cafe - Chai Latte - Large",
    "price": "$7.50",
    "priceNum": 7.5,
    "sku": "",
    "barcodes": [
      "",
      "557039"
    ],
    "pitch": "Specialty organic espresso handcrafted with silky micro-foam and your choice of organic milk.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/557039/edit",
    "img": "https://images.momence.com/h/200431/product-image/d71f88f6-08f7-4205-913f-40acf263a3cd.png"
  },
  {
    "id": 513572,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Chai Latte - Regular",
    "fullTitle": "The Practice Cafe - Chai Latte - Regular",
    "price": "$6.50",
    "priceNum": 6.5,
    "sku": "",
    "barcodes": [
      "",
      "513572"
    ],
    "pitch": "Specialty organic espresso handcrafted with silky micro-foam and your choice of organic milk.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/513572/edit",
    "img": "https://images.momence.com/h/200431/product-image/8c9bdaa4-b134-45db-884c-2f9a93f6cd0d.png"
  },
  {
    "id": 513563,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Chamomile Tea",
    "fullTitle": "The Practice Cafe - Chamomile Tea",
    "price": "$5.50",
    "priceNum": 5.5,
    "sku": "",
    "barcodes": [
      "",
      "513563"
    ],
    "pitch": "Single-origin organic loose-leaf tea steeped to perfection for mindful calm and antioxidant balance.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/513563/edit",
    "img": ""
  },
  {
    "id": 513579,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Chia Seeds",
    "fullTitle": "The Practice Cafe - Chia Seeds",
    "price": "$2.00",
    "priceNum": 2,
    "sku": "",
    "barcodes": [
      "",
      "513579"
    ],
    "pitch": "Handcrafted organic wellness refreshment prepared fresh at The Practice Cafe bar.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/513579/edit",
    "img": ""
  },
  {
    "id": 562443,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Classic Chocolate Cookie",
    "fullTitle": "The Practice Cafe - Classic Chocolate Cookie",
    "price": "$4.50",
    "priceNum": 4.5,
    "sku": "",
    "barcodes": [
      "",
      "562443"
    ],
    "pitch": "House-baked artisan cookie made daily with organic brown butter and premium Belgian chocolate.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/562443/edit",
    "img": "https://images.momence.com/h/200431/product-image/adbebecb-4f15-4ab9-8fb0-04de1977fd46.png"
  },
  {
    "id": 513575,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Coconut Milk",
    "fullTitle": "The Practice Cafe - Coconut Milk",
    "price": "$1.50",
    "priceNum": 1.5,
    "sku": "",
    "barcodes": [
      "",
      "513575"
    ],
    "pitch": "Handcrafted organic wellness refreshment prepared fresh at The Practice Cafe bar.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/513575/edit",
    "img": ""
  },
  {
    "id": 513581,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Collagen",
    "fullTitle": "The Practice Cafe - Collagen",
    "price": "$3.50",
    "priceNum": 3.5,
    "sku": "",
    "barcodes": [
      "",
      "513581"
    ],
    "pitch": "Handcrafted organic wellness refreshment prepared fresh at The Practice Cafe bar.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/513581/edit",
    "img": ""
  },
  {
    "id": 548479,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Cortado",
    "fullTitle": "The Practice Cafe - Cortado",
    "price": "$6.50",
    "priceNum": 6.5,
    "sku": "",
    "barcodes": [
      "",
      "548479"
    ],
    "pitch": "Specialty organic espresso handcrafted with silky micro-foam and your choice of organic milk.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/548479/edit",
    "img": "https://images.momence.com/h/200431/product-image/1eb08ce5-1f84-4e0a-a8ec-6aef9e72c159.png"
  },
  {
    "id": 545855,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Double Espresso",
    "fullTitle": "The Practice Cafe - Double Espresso",
    "price": "$5.75",
    "priceNum": 5.75,
    "sku": "",
    "barcodes": [
      "",
      "545855"
    ],
    "pitch": "Handcrafted organic wellness refreshment prepared fresh at The Practice Cafe bar.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/545855/edit",
    "img": "https://images.momence.com/h/200431/product-image/59adf7b0-6a04-4fe4-9e85-4ef9f6ea6f1b.png"
  },
  {
    "id": 513560,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Earl Grey Tea",
    "fullTitle": "The Practice Cafe - Earl Grey Tea",
    "price": "$5.50",
    "priceNum": 5.5,
    "sku": "",
    "barcodes": [
      "",
      "513560"
    ],
    "pitch": "Single-origin organic loose-leaf tea steeped to perfection for mindful calm and antioxidant balance.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/513560/edit",
    "img": ""
  },
  {
    "id": 513567,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "English Breakfast Tea",
    "fullTitle": "The Practice Cafe - English Breakfast Tea",
    "price": "$5.50",
    "priceNum": 5.5,
    "sku": "",
    "barcodes": [
      "",
      "513567"
    ],
    "pitch": "Single-origin organic loose-leaf tea steeped to perfection for mindful calm and antioxidant balance.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/513567/edit",
    "img": ""
  },
  {
    "id": 545854,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Espresso",
    "fullTitle": "The Practice Cafe - Espresso",
    "price": "$4.50",
    "priceNum": 4.5,
    "sku": "",
    "barcodes": [
      "",
      "545854"
    ],
    "pitch": "Handcrafted organic wellness refreshment prepared fresh at The Practice Cafe bar.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/545854/edit",
    "img": "https://images.momence.com/h/200431/product-image/e56b5487-b8e0-466c-a9a1-6c5bf1a7d4f4.png"
  },
  {
    "id": 548476,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Espresso Macchiato",
    "fullTitle": "The Practice Cafe - Espresso Macchiato",
    "price": "$4.75",
    "priceNum": 4.75,
    "sku": "",
    "barcodes": [
      "",
      "548476"
    ],
    "pitch": "Handcrafted organic wellness refreshment prepared fresh at The Practice Cafe bar.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/548476/edit",
    "img": "https://images.momence.com/h/200431/product-image/f0bc92a4-f2f8-45c6-9ff7-09acbf04d733.png"
  },
  {
    "id": 513546,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Flat White - Regular",
    "fullTitle": "The Practice Cafe - Flat White - Regular",
    "price": "$6.75",
    "priceNum": 6.75,
    "sku": "",
    "barcodes": [
      "",
      "513546"
    ],
    "pitch": "Handcrafted organic wellness refreshment prepared fresh at The Practice Cafe bar.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/513546/edit",
    "img": "https://images.momence.com/h/200431/product-image/0f3711f2-b005-4c1a-920e-6168c9b082f1.png"
  },
  {
    "id": 562444,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Fudgy Chocolate Brownie",
    "fullTitle": "The Practice Cafe - Fudgy Chocolate Brownie",
    "price": "$5.00",
    "priceNum": 5,
    "sku": "",
    "barcodes": [
      "",
      "562444"
    ],
    "pitch": "Handcrafted organic wellness refreshment prepared fresh at The Practice Cafe bar.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/562444/edit",
    "img": "https://images.momence.com/h/200431/product-image/0f475c46-af8c-45ca-9175-e0987b948b58.png"
  },
  {
    "id": 562440,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Gluten-Free Chocolate Cookie",
    "fullTitle": "The Practice Cafe - Gluten-Free Chocolate Cookie",
    "price": "$4.50",
    "priceNum": 4.5,
    "sku": "",
    "barcodes": [
      "",
      "562440"
    ],
    "pitch": "House-baked artisan cookie made daily with organic brown butter and premium Belgian chocolate.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/562440/edit",
    "img": "https://images.momence.com/h/200431/product-image/c6159564-d837-4452-8ddc-82cdd2645c7a.png"
  },
  {
    "id": 562441,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Gluten-Free Chocolate Cookie",
    "fullTitle": "The Practice Cafe - Gluten-Free Chocolate Cookie",
    "price": "$4.50",
    "priceNum": 4.5,
    "sku": "",
    "barcodes": [
      "",
      "562441"
    ],
    "pitch": "House-baked artisan cookie made daily with organic brown butter and premium Belgian chocolate.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/562441/edit",
    "img": "https://images.momence.com/h/200431/product-image/c6159564-d837-4452-8ddc-82cdd2645c7a.png"
  },
  {
    "id": 556933,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Green Tea Large",
    "fullTitle": "The Practice Cafe - Green Tea Large",
    "price": "$7.75",
    "priceNum": 7.75,
    "sku": "",
    "barcodes": [
      "",
      "556933"
    ],
    "pitch": "Single-origin organic loose-leaf tea steeped to perfection for mindful calm and antioxidant balance.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/556933/edit",
    "img": "https://images.momence.com/h/200431/product-image/83468e3a-aec7-44cf-b97d-a5a883384b89.png"
  },
  {
    "id": 545874,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Green Tea Regular",
    "fullTitle": "The Practice Cafe - Green Tea Regular",
    "price": "$6.75",
    "priceNum": 6.75,
    "sku": "",
    "barcodes": [
      "",
      "545874"
    ],
    "pitch": "Single-origin organic loose-leaf tea steeped to perfection for mindful calm and antioxidant balance.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/545874/edit",
    "img": "https://images.momence.com/h/200431/product-image/cb8197b7-f4f6-4153-be92-8fada49639ac.png"
  },
  {
    "id": 513584,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Hazelnut Syrup",
    "fullTitle": "The Practice Cafe - Hazelnut Syrup",
    "price": "$0.75",
    "priceNum": 0.75,
    "sku": "",
    "barcodes": [
      "",
      "513584"
    ],
    "pitch": "Handcrafted organic wellness refreshment prepared fresh at The Practice Cafe bar.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/513584/edit",
    "img": ""
  },
  {
    "id": 545876,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Herbal Infusion (Rooibos/Chamomile)",
    "fullTitle": "The Practice Cafe - Herbal Infusion (Rooibos/Chamomile)",
    "price": "$4.50",
    "priceNum": 4.5,
    "sku": "",
    "barcodes": [
      "",
      "545876"
    ],
    "pitch": "Handcrafted organic wellness refreshment prepared fresh at The Practice Cafe bar.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/545876/edit",
    "img": ""
  },
  {
    "id": 556999,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Herbal Tea - Large",
    "fullTitle": "The Practice Cafe - Herbal Tea - Large",
    "price": "$6.50",
    "priceNum": 6.5,
    "sku": "",
    "barcodes": [
      "",
      "556999"
    ],
    "pitch": "Single-origin organic loose-leaf tea steeped to perfection for mindful calm and antioxidant balance.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/556999/edit",
    "img": "https://images.momence.com/h/200431/product-image/b2d43d10-d462-4e76-89d8-f4aa7f4edb4f.png"
  },
  {
    "id": 545877,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Herbal Tea Regular",
    "fullTitle": "The Practice Cafe - Herbal Tea Regular",
    "price": "$5.50",
    "priceNum": 5.5,
    "sku": "",
    "barcodes": [
      "",
      "545877"
    ],
    "pitch": "Single-origin organic loose-leaf tea steeped to perfection for mindful calm and antioxidant balance.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/545877/edit",
    "img": "https://images.momence.com/h/200431/product-image/8725b9cf-2e24-4ff3-b3fa-8625f68211b9.png"
  },
  {
    "id": 513551,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Iced Americano",
    "fullTitle": "The Practice Cafe - Iced Americano",
    "price": "$5.75",
    "priceNum": 5.75,
    "sku": "",
    "barcodes": [
      "",
      "513551"
    ],
    "pitch": "Handcrafted organic wellness refreshment prepared fresh at The Practice Cafe bar.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/513551/edit",
    "img": ""
  },
  {
    "id": 513552,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Iced Latte",
    "fullTitle": "The Practice Cafe - Iced Latte",
    "price": "$6.75",
    "priceNum": 6.75,
    "sku": "",
    "barcodes": [
      "",
      "513552"
    ],
    "pitch": "Specialty organic espresso handcrafted with silky micro-foam and your choice of organic milk.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/513552/edit",
    "img": ""
  },
  {
    "id": 562450,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Kevin Cookie (Dark)",
    "fullTitle": "The Practice Cafe - Kevin Cookie (Dark)",
    "price": "$5.50",
    "priceNum": 5.5,
    "sku": "",
    "barcodes": [
      "",
      "562450"
    ],
    "pitch": "House-baked artisan cookie made daily with organic brown butter and premium Belgian chocolate.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/562450/edit",
    "img": "https://images.momence.com/h/200431/product-image/93783599-f3ba-4ffc-bdf3-f4d83f39ffbe.png"
  },
  {
    "id": 555495,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Latte - Large 16oz",
    "fullTitle": "The Practice Cafe - Latte - Large 16oz",
    "price": "$6.50",
    "priceNum": 6.5,
    "sku": "",
    "barcodes": [
      "",
      "555495"
    ],
    "pitch": "Specialty organic espresso handcrafted with silky micro-foam and your choice of organic milk.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/555495/edit",
    "img": "https://images.momence.com/h/200431/product-image/840013d8-1a56-46dd-8c90-73422b2d0505.png"
  },
  {
    "id": 545871,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Latte - Regular 12oz",
    "fullTitle": "The Practice Cafe - Latte - Regular 12oz",
    "price": "$5.50",
    "priceNum": 5.5,
    "sku": "",
    "barcodes": [
      "",
      "545871"
    ],
    "pitch": "Specialty organic espresso handcrafted with silky micro-foam and your choice of organic milk.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/545871/edit",
    "img": "https://images.momence.com/h/200431/product-image/41b46d72-bdf5-4b47-89d2-e8481823f338.png"
  },
  {
    "id": 513587,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Lavender Syrup",
    "fullTitle": "The Practice Cafe - Lavender Syrup",
    "price": "$0.75",
    "priceNum": 0.75,
    "sku": "",
    "barcodes": [
      "",
      "513587"
    ],
    "pitch": "Handcrafted organic wellness refreshment prepared fresh at The Practice Cafe bar.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/513587/edit",
    "img": ""
  },
  {
    "id": 513566,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Lavereine Tea",
    "fullTitle": "The Practice Cafe - Lavereine Tea",
    "price": "$5.50",
    "priceNum": 5.5,
    "sku": "",
    "barcodes": [
      "",
      "513566"
    ],
    "pitch": "Single-origin organic loose-leaf tea steeped to perfection for mindful calm and antioxidant balance.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/513566/edit",
    "img": ""
  },
  {
    "id": 562449,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Lemon Poppyseed Biscotti",
    "fullTitle": "The Practice Cafe - Lemon Poppyseed Biscotti",
    "price": "$3.50",
    "priceNum": 3.5,
    "sku": "",
    "barcodes": [
      "",
      "562449"
    ],
    "pitch": "Traditional twice-baked Italian biscotti infused with toasted nuts and citrus zest, perfect with espresso.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/562449/edit",
    "img": "https://images.momence.com/h/200431/product-image/317f81c5-0f16-4571-ba3c-e305968d59ca.png"
  },
  {
    "id": 513578,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "MCT Oil",
    "fullTitle": "The Practice Cafe - MCT Oil",
    "price": "$3.50",
    "priceNum": 3.5,
    "sku": "",
    "barcodes": [
      "",
      "513578"
    ],
    "pitch": "Handcrafted organic wellness refreshment prepared fresh at The Practice Cafe bar.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/513578/edit",
    "img": ""
  },
  {
    "id": 513569,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Matcha Latte - Iced",
    "fullTitle": "The Practice Cafe - Matcha Latte - Iced",
    "price": "$7.75",
    "priceNum": 7.75,
    "sku": "",
    "barcodes": [
      "",
      "513569"
    ],
    "pitch": "Specialty organic espresso handcrafted with silky micro-foam and your choice of organic milk.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/513569/edit",
    "img": ""
  },
  {
    "id": 557000,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Matcha Latte - Large",
    "fullTitle": "The Practice Cafe - Matcha Latte - Large",
    "price": "$7.50",
    "priceNum": 7.5,
    "sku": "",
    "barcodes": [
      "",
      "557000"
    ],
    "pitch": "Specialty organic espresso handcrafted with silky micro-foam and your choice of organic milk.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/557000/edit",
    "img": "https://images.momence.com/h/200431/product-image/5487a5e0-343a-482c-bd33-4dc313510325.png"
  },
  {
    "id": 513568,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Matcha Latte - Regular",
    "fullTitle": "The Practice Cafe - Matcha Latte - Regular",
    "price": "$6.50",
    "priceNum": 6.5,
    "sku": "",
    "barcodes": [
      "",
      "513568"
    ],
    "pitch": "Specialty organic espresso handcrafted with silky micro-foam and your choice of organic milk.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/513568/edit",
    "img": "https://images.momence.com/h/200431/product-image/5f77b925-2951-4a2a-a369-dfe5249cd59f.png"
  },
  {
    "id": 492392,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Misc. Goods Co. - Valley of Gold Roll-On Cologne | Oil-Based | Rose+Black Tea",
    "fullTitle": "The Practice Cafe - Misc. Goods Co. - Valley of Gold Roll-On Cologne | Oil-Based | Rose+Black Tea",
    "price": "$48.00",
    "priceNum": 48,
    "sku": "MG-ROL-GOL-0005",
    "barcodes": [
      "MG-ROL-GOL-0005",
      "492392",
      "MGROLGOL0005"
    ],
    "pitch": "Single-origin organic loose-leaf tea steeped to perfection for mindful calm and antioxidant balance.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492392/edit",
    "img": "https://images.momence.com/h/200431/product-image/288be970-e24f-4621-b985-17d219ae3671.png"
  },
  {
    "id": 513577,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Oat Milk",
    "fullTitle": "The Practice Cafe - Oat Milk",
    "price": "$0.85",
    "priceNum": 0.85,
    "sku": "",
    "barcodes": [
      "",
      "513577"
    ],
    "pitch": "Handcrafted organic wellness refreshment prepared fresh at The Practice Cafe bar.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/513577/edit",
    "img": ""
  },
  {
    "id": 513561,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Peach Rooibos Tea",
    "fullTitle": "The Practice Cafe - Peach Rooibos Tea",
    "price": "$5.50",
    "priceNum": 5.5,
    "sku": "",
    "barcodes": [
      "",
      "513561"
    ],
    "pitch": "Single-origin organic loose-leaf tea steeped to perfection for mindful calm and antioxidant balance.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/513561/edit",
    "img": ""
  },
  {
    "id": 562448,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Pistachio & Cranberry Biscotti",
    "fullTitle": "The Practice Cafe - Pistachio & Cranberry Biscotti",
    "price": "$3.50",
    "priceNum": 3.5,
    "sku": "",
    "barcodes": [
      "",
      "562448"
    ],
    "pitch": "Traditional twice-baked Italian biscotti infused with toasted nuts and citrus zest, perfect with espresso.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/562448/edit",
    "img": "https://images.momence.com/h/200431/product-image/b18e44d7-1470-428e-9331-ebed33f8a860.png"
  },
  {
    "id": 513580,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Protein Powder",
    "fullTitle": "The Practice Cafe - Protein Powder",
    "price": "$3.50",
    "priceNum": 3.5,
    "sku": "",
    "barcodes": [
      "",
      "513580"
    ],
    "pitch": "Handcrafted organic wellness refreshment prepared fresh at The Practice Cafe bar.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/513580/edit",
    "img": ""
  },
  {
    "id": 513541,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Ristretto",
    "fullTitle": "The Practice Cafe - Ristretto",
    "price": "$4.75",
    "priceNum": 4.75,
    "sku": "",
    "barcodes": [
      "",
      "513541"
    ],
    "pitch": "Handcrafted organic wellness refreshment prepared fresh at The Practice Cafe bar.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/513541/edit",
    "img": ""
  },
  {
    "id": 513582,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Sea Moss",
    "fullTitle": "The Practice Cafe - Sea Moss",
    "price": "$2.50",
    "priceNum": 2.5,
    "sku": "",
    "barcodes": [
      "",
      "513582"
    ],
    "pitch": "Handcrafted organic wellness refreshment prepared fresh at The Practice Cafe bar.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/513582/edit",
    "img": ""
  },
  {
    "id": 513564,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Sentinel Lemon Tea",
    "fullTitle": "The Practice Cafe - Sentinel Lemon Tea",
    "price": "$5.50",
    "priceNum": 5.5,
    "sku": "",
    "barcodes": [
      "",
      "513564"
    ],
    "pitch": "Single-origin organic loose-leaf tea steeped to perfection for mindful calm and antioxidant balance.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/513564/edit",
    "img": ""
  },
  {
    "id": 557042,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Smoothies - Berry Balance Large",
    "fullTitle": "The Practice Cafe - Smoothies - Berry Balance Large",
    "price": "$17.00",
    "priceNum": 17,
    "sku": "",
    "barcodes": [
      "",
      "557042"
    ],
    "pitch": "Nourishing superfood wellness smoothie blended with adaptogens, antioxidants, and house-made nut milk.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/557042/edit",
    "img": "https://images.momence.com/h/200431/product-image/1dbe586b-123f-48c0-ae65-edbf2c3bb6e8.png"
  },
  {
    "id": 545880,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Smoothies - Berry Balance Regular",
    "fullTitle": "The Practice Cafe - Smoothies - Berry Balance Regular",
    "price": "$15.00",
    "priceNum": 15,
    "sku": "",
    "barcodes": [
      "",
      "545880"
    ],
    "pitch": "Nourishing superfood wellness smoothie blended with adaptogens, antioxidants, and house-made nut milk.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/545880/edit",
    "img": "https://images.momence.com/h/200431/product-image/1dbe586b-123f-48c0-ae65-edbf2c3bb6e8.png"
  },
  {
    "id": 545878,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Smoothies - Grounding Greens - Regular",
    "fullTitle": "The Practice Cafe - Smoothies - Grounding Greens - Regular",
    "price": "$15.00",
    "priceNum": 15,
    "sku": "",
    "barcodes": [
      "",
      "545878"
    ],
    "pitch": "Nourishing superfood wellness smoothie blended with adaptogens, antioxidants, and house-made nut milk.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/545878/edit",
    "img": "https://images.momence.com/h/200431/product-image/5f42fe36-7c8c-473f-8cac-116353ce6ed7.png"
  },
  {
    "id": 557041,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Smoothies - Nutty Namaste Large",
    "fullTitle": "The Practice Cafe - Smoothies - Nutty Namaste Large",
    "price": "$17.00",
    "priceNum": 17,
    "sku": "",
    "barcodes": [
      "",
      "557041"
    ],
    "pitch": "Nourishing superfood wellness smoothie blended with adaptogens, antioxidants, and house-made nut milk.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/557041/edit",
    "img": "https://images.momence.com/h/200431/product-image/b393d0f6-dca5-41b8-ae8c-cb7118279cb3.png"
  },
  {
    "id": 545879,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Smoothies - Nutty Namaste Regular",
    "fullTitle": "The Practice Cafe - Smoothies - Nutty Namaste Regular",
    "price": "$15.00",
    "priceNum": 15,
    "sku": "",
    "barcodes": [
      "",
      "545879"
    ],
    "pitch": "Nourishing superfood wellness smoothie blended with adaptogens, antioxidants, and house-made nut milk.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/545879/edit",
    "img": "https://images.momence.com/h/200431/product-image/b393d0f6-dca5-41b8-ae8c-cb7118279cb3.png"
  },
  {
    "id": 557044,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Smoothies - Tropical Tantra Large",
    "fullTitle": "The Practice Cafe - Smoothies - Tropical Tantra Large",
    "price": "$17.00",
    "priceNum": 17,
    "sku": "",
    "barcodes": [
      "",
      "557044"
    ],
    "pitch": "Nourishing superfood wellness smoothie blended with adaptogens, antioxidants, and house-made nut milk.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/557044/edit",
    "img": "https://images.momence.com/h/200431/product-image/2a6826b9-a2b9-420b-b1f9-8adcebd03ffb.png"
  },
  {
    "id": 545881,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Smoothies - Tropical Tantra Regular",
    "fullTitle": "The Practice Cafe - Smoothies - Tropical Tantra Regular",
    "price": "$15.00",
    "priceNum": 15,
    "sku": "",
    "barcodes": [
      "",
      "545881"
    ],
    "pitch": "Nourishing superfood wellness smoothie blended with adaptogens, antioxidants, and house-made nut milk.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/545881/edit",
    "img": "https://images.momence.com/h/200431/product-image/2a6826b9-a2b9-420b-b1f9-8adcebd03ffb.png"
  },
  {
    "id": 556832,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Specialty Latte - Regular",
    "fullTitle": "The Practice Cafe - Specialty Latte - Regular",
    "price": "$7.75",
    "priceNum": 7.75,
    "sku": "",
    "barcodes": [
      "",
      "556832"
    ],
    "pitch": "Specialty organic espresso handcrafted with silky micro-foam and your choice of organic milk.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/556832/edit",
    "img": "https://images.momence.com/h/200431/product-image/8d99d813-3171-417b-90c7-a6629fdfe3dc.png"
  },
  {
    "id": 562446,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Sweet & Salty Cookie",
    "fullTitle": "The Practice Cafe - Sweet & Salty Cookie",
    "price": "$4.50",
    "priceNum": 4.5,
    "sku": "",
    "barcodes": [
      "",
      "562446"
    ],
    "pitch": "House-baked artisan cookie made daily with organic brown butter and premium Belgian chocolate.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/562446/edit",
    "img": "https://images.momence.com/h/200431/product-image/5005e979-634e-4e17-8fb5-1f13370c7a0a.png"
  },
  {
    "id": 556866,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Syrup Added -",
    "fullTitle": "The Practice Cafe - Syrup Added -",
    "price": "$0.85",
    "priceNum": 0.85,
    "sku": "",
    "barcodes": [
      "",
      "556866"
    ],
    "pitch": "Handcrafted organic wellness refreshment prepared fresh at The Practice Cafe bar.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/556866/edit",
    "img": ""
  },
  {
    "id": 513562,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Touareg Tea",
    "fullTitle": "The Practice Cafe - Touareg Tea",
    "price": "$5.50",
    "priceNum": 5.5,
    "sku": "",
    "barcodes": [
      "",
      "513562"
    ],
    "pitch": "Single-origin organic loose-leaf tea steeped to perfection for mindful calm and antioxidant balance.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/513562/edit",
    "img": ""
  },
  {
    "id": 513585,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Vanilla Syrup",
    "fullTitle": "The Practice Cafe - Vanilla Syrup",
    "price": "$0.75",
    "priceNum": 0.75,
    "sku": "",
    "barcodes": [
      "",
      "513585"
    ],
    "pitch": "Handcrafted organic wellness refreshment prepared fresh at The Practice Cafe bar.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/513585/edit",
    "img": ""
  },
  {
    "id": 513559,
    "department": "Cafe & Nourishment",
    "brand": "The Practice Cafe",
    "name": "Yellow Pop Green Tea",
    "fullTitle": "The Practice Cafe - Yellow Pop Green Tea",
    "price": "$5.50",
    "priceNum": 5.5,
    "sku": "",
    "barcodes": [
      "",
      "513559"
    ],
    "pitch": "Single-origin organic loose-leaf tea steeped to perfection for mindful calm and antioxidant balance.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/513559/edit",
    "img": ""
  },
  {
    "id": 492714,
    "department": "Clean Apothecary, Bath & Grooming",
    "brand": "BeautyInUs",
    "name": "Allure Body Oil",
    "fullTitle": "BeautyInUs - Allure Body Oil",
    "price": "$99.99",
    "priceNum": 99.99,
    "sku": "BI-BOD-ALL-0003",
    "barcodes": [
      "BI-BOD-ALL-0003",
      "492714",
      "BIBODALL0003"
    ],
    "pitch": "Decadent organic body oil infused with cold-pressed botanical botanicals, sweet almond, and nourishing vitamins. Leaves skin silky, radiant, and deeply hydrated.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492714/edit",
    "img": "https://images.momence.com/h/200431/product-image/cf8981a2-9b83-4b79-889e-da11c6c14227.jpg"
  },
  {
    "id": 492713,
    "department": "Clean Apothecary, Bath & Grooming",
    "brand": "BeautyInUs",
    "name": "Blossom Body Oil",
    "fullTitle": "BeautyInUs - Blossom Body Oil",
    "price": "$99.99",
    "priceNum": 99.99,
    "sku": "BI-BOD-BLO-0002",
    "barcodes": [
      "BI-BOD-BLO-0002",
      "492713",
      "BIBODBLO0002"
    ],
    "pitch": "Decadent organic body oil infused with cold-pressed botanical botanicals, sweet almond, and nourishing vitamins. Leaves skin silky, radiant, and deeply hydrated.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492713/edit",
    "img": "https://images.momence.com/h/200431/product-image/a559e6ac-dc95-482e-94e5-e3330a35e33d.jpg"
  },
  {
    "id": 492716,
    "department": "Clean Apothecary, Bath & Grooming",
    "brand": "BeautyInUs",
    "name": "Chrysalis Body Oil",
    "fullTitle": "BeautyInUs - Chrysalis Body Oil",
    "price": "$99.99",
    "priceNum": 99.99,
    "sku": "BI-BOD-CHR-0005",
    "barcodes": [
      "BI-BOD-CHR-0005",
      "492716",
      "BIBODCHR0005"
    ],
    "pitch": "Decadent organic body oil infused with cold-pressed botanical botanicals, sweet almond, and nourishing vitamins. Leaves skin silky, radiant, and deeply hydrated.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492716/edit",
    "img": "https://images.momence.com/h/200431/product-image/11cef9e9-3130-4f67-b1cc-fb22458910fd.jpg"
  },
  {
    "id": 492712,
    "department": "Clean Apothecary, Bath & Grooming",
    "brand": "BeautyInUs",
    "name": "Cocoon Body Oil",
    "fullTitle": "BeautyInUs - Cocoon Body Oil",
    "price": "$99.99",
    "priceNum": 99.99,
    "sku": "BI-BOD-COC-0001",
    "barcodes": [
      "BI-BOD-COC-0001",
      "492712",
      "BIBODCOC0001"
    ],
    "pitch": "Decadent organic body oil infused with cold-pressed botanical botanicals, sweet almond, and nourishing vitamins. Leaves skin silky, radiant, and deeply hydrated.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492712/edit",
    "img": "https://images.momence.com/h/200431/product-image/793b7f02-36b1-41dd-aaa0-d441bea1badd.jpg"
  },
  {
    "id": 492721,
    "department": "Clean Apothecary, Bath & Grooming",
    "brand": "BeautyInUs",
    "name": "Lunar Blossom Perfume Oil",
    "fullTitle": "BeautyInUs - Lunar Blossom Perfume Oil",
    "price": "$49.99",
    "priceNum": 49.99,
    "sku": "BI-ROL-LUN-0010",
    "barcodes": [
      "BI-ROL-LUN-0010",
      "492721",
      "BIROLLUN0010"
    ],
    "pitch": "Decadent organic body oil infused with cold-pressed botanical botanicals, sweet almond, and nourishing vitamins. Leaves skin silky, radiant, and deeply hydrated.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492721/edit",
    "img": "https://images.momence.com/h/200431/product-image/4471bcd2-74ee-4b4f-9c77-02605b10b474.jpg"
  },
  {
    "id": 492722,
    "department": "Clean Apothecary, Bath & Grooming",
    "brand": "BeautyInUs",
    "name": "RELEASE Dualphase Resurfacing Cleanser",
    "fullTitle": "BeautyInUs - RELEASE Dualphase Resurfacing Cleanser",
    "price": "$89.99",
    "priceNum": 89.99,
    "sku": "BI-SKN-REL-0011",
    "barcodes": [
      "BI-SKN-REL-0011",
      "492722",
      "BISKNREL0011"
    ],
    "pitch": "Decadent organic body oil infused with cold-pressed botanical botanicals, sweet almond, and nourishing vitamins. Leaves skin silky, radiant, and deeply hydrated.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492722/edit",
    "img": "https://images.momence.com/h/200431/product-image/1de3f747-f850-4fb5-b267-6ace9263e014.jpg"
  },
  {
    "id": 492723,
    "department": "Clean Apothecary, Bath & Grooming",
    "brand": "BeautyInUs",
    "name": "REPLENISH Plumping and Radiance Serum",
    "fullTitle": "BeautyInUs - REPLENISH Plumping and Radiance Serum",
    "price": "$149.99",
    "priceNum": 149.99,
    "sku": "BI-SKN-REP-0012",
    "barcodes": [
      "BI-SKN-REP-0012",
      "492723",
      "BISKNREP0012"
    ],
    "pitch": "Decadent organic body oil infused with cold-pressed botanical botanicals, sweet almond, and nourishing vitamins. Leaves skin silky, radiant, and deeply hydrated.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492723/edit",
    "img": "https://images.momence.com/h/200431/product-image/b20b8728-a042-43df-b01a-53bd07608df0.jpg"
  },
  {
    "id": 492725,
    "department": "Clean Apothecary, Bath & Grooming",
    "brand": "BeautyInUs",
    "name": "RETREAT Intensive Care and Recovery Face Oil",
    "fullTitle": "BeautyInUs - RETREAT Intensive Care and Recovery Face Oil",
    "price": "$155.00",
    "priceNum": 155,
    "sku": "BI-SKN-RET-0014",
    "barcodes": [
      "BI-SKN-RET-0014",
      "492725",
      "BISKNRET0014"
    ],
    "pitch": "Decadent organic body oil infused with cold-pressed botanical botanicals, sweet almond, and nourishing vitamins. Leaves skin silky, radiant, and deeply hydrated.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492725/edit",
    "img": "https://images.momence.com/h/200431/product-image/fcb115c9-f85f-4472-870a-e5a596d32a89.jpg"
  },
  {
    "id": 492724,
    "department": "Clean Apothecary, Bath & Grooming",
    "brand": "BeautyInUs",
    "name": "SHIELD Broad-Action Antioxidant Face Oil",
    "fullTitle": "BeautyInUs - SHIELD Broad-Action Antioxidant Face Oil",
    "price": "$155.00",
    "priceNum": 155,
    "sku": "BI-SKN-SHD-0013",
    "barcodes": [
      "BI-SKN-SHD-0013",
      "492724",
      "BISKNSHD0013"
    ],
    "pitch": "Decadent organic body oil infused with cold-pressed botanical botanicals, sweet almond, and nourishing vitamins. Leaves skin silky, radiant, and deeply hydrated.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492724/edit",
    "img": "https://images.momence.com/h/200431/product-image/cad0f392-834c-41bd-a23b-9aaf563c10d3.jpg"
  },
  {
    "id": 492720,
    "department": "Clean Apothecary, Bath & Grooming",
    "brand": "BeautyInUs",
    "name": "Sacred Feminine Perfume Oil",
    "fullTitle": "BeautyInUs - Sacred Feminine Perfume Oil",
    "price": "$49.99",
    "priceNum": 49.99,
    "sku": "BI-ROL-SAC-0009",
    "barcodes": [
      "BI-ROL-SAC-0009",
      "492720",
      "BIROLSAC0009"
    ],
    "pitch": "Decadent organic body oil infused with cold-pressed botanical botanicals, sweet almond, and nourishing vitamins. Leaves skin silky, radiant, and deeply hydrated.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492720/edit",
    "img": "https://images.momence.com/h/200431/product-image/8ecd1c68-b1a1-458c-b9f1-f6839a8d79a6.jpg"
  },
  {
    "id": 492726,
    "department": "Clean Apothecary, Bath & Grooming",
    "brand": "BeautyInUs",
    "name": "The Circadian Cycle Collection",
    "fullTitle": "BeautyInUs - The Circadian Cycle Collection",
    "price": "$499.00",
    "priceNum": 499,
    "sku": "BI-SET-CIR-0015",
    "barcodes": [
      "BI-SET-CIR-0015",
      "492726",
      "BISETCIR0015"
    ],
    "pitch": "Decadent organic body oil infused with cold-pressed botanical botanicals, sweet almond, and nourishing vitamins. Leaves skin silky, radiant, and deeply hydrated.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492726/edit",
    "img": "https://images.momence.com/h/200431/product-image/a1a6cc4e-3bc4-4927-88a7-046410e8385d.jpg"
  },
  {
    "id": 492715,
    "department": "Clean Apothecary, Bath & Grooming",
    "brand": "BeautyInUs",
    "name": "Unwind Body Oil",
    "fullTitle": "BeautyInUs - Unwind Body Oil",
    "price": "$99.99",
    "priceNum": 99.99,
    "sku": "BI-BOD-UNW-0004",
    "barcodes": [
      "BI-BOD-UNW-0004",
      "492715",
      "BIBODUNW0004"
    ],
    "pitch": "Decadent organic body oil infused with cold-pressed botanical botanicals, sweet almond, and nourishing vitamins. Leaves skin silky, radiant, and deeply hydrated.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492715/edit",
    "img": "https://images.momence.com/h/200431/product-image/9a844067-62d4-4517-9c50-6a89881f3df0.jpg"
  },
  {
    "id": 492271,
    "department": "Clean Apothecary, Bath & Grooming",
    "brand": "Jaxon Lane",
    "name": "Bro Mask Duo",
    "fullTitle": "Jaxon Lane - Bro Mask Duo",
    "price": "$56.99",
    "priceNum": 56.99,
    "sku": "JL-SKN-DUO-0003",
    "barcodes": [
      "JL-SKN-DUO-0003",
      "492271",
      "JLSKNDUO0003"
    ],
    "pitch": "Clinical-grade California skincare powered by Korean dermatological science, packed with collagen, peptides, and botanical nutrients for radiant skin. Award-winning California skincare powered by Korean technology.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492271/edit",
    "img": "https://images.momence.com/h/200431/product-image/8817b6b5-7854-4523-b400-3ab4fe6be285.png"
  },
  {
    "id": 492272,
    "department": "Clean Apothecary, Bath & Grooming",
    "brand": "Jaxon Lane",
    "name": "Bro Mask Facial Set- Ready, Set, Glow Gift Box By Jaxon Lane",
    "fullTitle": "Jaxon Lane - Bro Mask Facial Set- Ready, Set, Glow Gift Box By Jaxon Lane",
    "price": "$145.00",
    "priceNum": 145,
    "sku": "JL-SKN-GFT-0004",
    "barcodes": [
      "JL-SKN-GFT-0004",
      "492272",
      "JLSKNGFT0004"
    ],
    "pitch": "Clinical-grade California skincare powered by Korean dermatological science, packed with collagen, peptides, and botanical nutrients for radiant skin. Award-winning California skincare powered by Korean technology.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492272/edit",
    "img": "https://images.momence.com/h/200431/product-image/d0c9d5e3-8867-40ac-98f0-86bcdc4f1a2d.png"
  },
  {
    "id": 492273,
    "department": "Clean Apothecary, Bath & Grooming",
    "brand": "Jaxon Lane",
    "name": "Bro Mask Half Mask Beard Friendly Sheet Mask (Single)",
    "fullTitle": "Jaxon Lane - Bro Mask Half Mask Beard Friendly Sheet Mask (Single)",
    "price": "$14.99",
    "priceNum": 14.99,
    "sku": "JL-SKN-HALF-0005",
    "barcodes": [
      "JL-SKN-HALF-0005",
      "492273",
      "JLSKNHALF0005"
    ],
    "pitch": "Clinical-grade California skincare powered by Korean dermatological science, packed with collagen, peptides, and botanical nutrients for radiant skin. Award-winning California skincare powered by Korean technology.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492273/edit",
    "img": "https://images.momence.com/h/200431/product-image/27ad0d8c-b4e4-472e-af68-dd08eb5c8676.png"
  },
  {
    "id": 492269,
    "department": "Clean Apothecary, Bath & Grooming",
    "brand": "Jaxon Lane",
    "name": "Bro Mask Hydrogel Cooling Eye Gels (Single) Men's Skin Care",
    "fullTitle": "Jaxon Lane - Bro Mask Hydrogel Cooling Eye Gels (Single) Men's Skin Care",
    "price": "$14.99",
    "priceNum": 14.99,
    "sku": "JL-SKN-EYE-0001",
    "barcodes": [
      "JL-SKN-EYE-0001",
      "492269",
      "JLSKNEYE0001"
    ],
    "pitch": "Clinical-grade California skincare powered by Korean dermatological science, packed with collagen, peptides, and botanical nutrients for radiant skin. Award-winning California skincare powered by Korean technology.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492269/edit",
    "img": "https://images.momence.com/h/200431/product-image/3c60e23c-205f-40fb-ae91-457b428ec972.png"
  },
  {
    "id": 492270,
    "department": "Clean Apothecary, Bath & Grooming",
    "brand": "Jaxon Lane",
    "name": "Bro Mask Hydrogel Face Mask Sheet Mask For Men (Single)",
    "fullTitle": "Jaxon Lane - Bro Mask Hydrogel Face Mask Sheet Mask For Men (Single)",
    "price": "$19.00",
    "priceNum": 19,
    "sku": "JL-SKN-FAC-0002",
    "barcodes": [
      "JL-SKN-FAC-0002",
      "492270",
      "JLSKNFAC0002"
    ],
    "pitch": "Clinical-grade California skincare powered by Korean dermatological science, packed with collagen, peptides, and botanical nutrients for radiant skin. Award-winning California skincare powered by Korean technology.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492270/edit",
    "img": "https://images.momence.com/h/200431/product-image/d51c5071-82a5-4f94-a10e-5ee42aaeb7ce.png"
  },
  {
    "id": 492396,
    "department": "Clean Apothecary, Bath & Grooming",
    "brand": "Misc Goods Co",
    "name": "Misc. Goods Co. - Greyhaven Natural Deodorant Ocean, Pine & Moss | Aluminum-Free, 2.65oz",
    "fullTitle": "Misc Goods Co - Misc. Goods Co. - Greyhaven Natural Deodorant Ocean, Pine & Moss | Aluminum-Free, 2.65oz",
    "price": "$28.99",
    "priceNum": 28.99,
    "sku": "MG-DEA-GRE-0009",
    "barcodes": [
      "MG-DEA-GRE-0009",
      "492396",
      "MGDEAGRE0009"
    ],
    "pitch": "Premium American-crafted apothecary essential made with all-natural botanicals, nourishing plant oils, and complex woodsy nature notes.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492396/edit",
    "img": "https://images.momence.com/h/200431/product-image/031b1e1a-8951-413b-8f44-64c9bd9f4cdb.png"
  },
  {
    "id": 492394,
    "department": "Clean Apothecary, Bath & Grooming",
    "brand": "Misc Goods Co",
    "name": "Misc. Goods Co. - Meadowland Natural Deodorant Grass, Cedar & Patchouli | Aluminum-Free, 2.65oz",
    "fullTitle": "Misc Goods Co - Misc. Goods Co. - Meadowland Natural Deodorant Grass, Cedar & Patchouli | Aluminum-Free, 2.65oz",
    "price": "$28.99",
    "priceNum": 28.99,
    "sku": "MG-DEA-MEA-0007",
    "barcodes": [
      "MG-DEA-MEA-0007",
      "492394",
      "MGDEAMEA0007"
    ],
    "pitch": "Premium American-crafted apothecary essential made with all-natural botanicals, nourishing plant oils, and complex woodsy nature notes.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492394/edit",
    "img": "https://images.momence.com/h/200431/product-image/98bb4613-6f07-4a31-9204-3104bfc3c702.png"
  },
  {
    "id": 492395,
    "department": "Clean Apothecary, Bath & Grooming",
    "brand": "Misc Goods Co",
    "name": "Misc. Goods Co. - Underhill Natural Deodorant Tobacco, Cedar & Ale | Aluminum-Free, 2.65oz",
    "fullTitle": "Misc Goods Co - Misc. Goods Co. - Underhill Natural Deodorant Tobacco, Cedar & Ale | Aluminum-Free, 2.65oz",
    "price": "$28.99",
    "priceNum": 28.99,
    "sku": "MG-DEA-UND-0008",
    "barcodes": [
      "MG-DEA-UND-0008",
      "492395",
      "MGDEAUND0008"
    ],
    "pitch": "Premium American-crafted apothecary essential made with all-natural botanicals, nourishing plant oils, and complex woodsy nature notes.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492395/edit",
    "img": "https://images.momence.com/h/200431/product-image/97e7bad8-3b61-4449-834d-3dd1d56a6cda.png"
  },
  {
    "id": 492538,
    "department": "Clean Apothecary, Bath & Grooming",
    "brand": "Preston Grooming",
    "name": "Argan Oil Infused Beard Oil",
    "fullTitle": "Preston Grooming - Argan Oil Infused Beard Oil",
    "price": "$24.99",
    "priceNum": 24.99,
    "sku": "PG-CAN-LUM-0003",
    "barcodes": [
      "PG-CAN-LUM-0003",
      "492538",
      "PGCANLUM0003"
    ],
    "pitch": "High-performance clean men's grooming apothecary crafted with organic plant oils, antioxidant botanicals, and invigorating nature extracts.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492538/edit",
    "img": "https://images.momence.com/h/200431/product-image/18f459b7-a963-41b4-a4c6-4cc6fe132bfc.jpg"
  },
  {
    "id": 492536,
    "department": "Clean Apothecary, Bath & Grooming",
    "brand": "Preston Grooming",
    "name": "Cooling Shave Cream",
    "fullTitle": "Preston Grooming - Cooling Shave Cream",
    "price": "$19.99",
    "priceNum": 19.99,
    "sku": "PG-CAN-ART-0001",
    "barcodes": [
      "PG-CAN-ART-0001",
      "492536",
      "PGCANART0001"
    ],
    "pitch": "High-performance clean men's grooming apothecary crafted with organic plant oils, antioxidant botanicals, and invigorating nature extracts.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492536/edit",
    "img": "https://images.momence.com/h/200431/product-image/ef4d1512-d288-4275-9421-b56093b49b7a.jpg"
  },
  {
    "id": 492540,
    "department": "Clean Apothecary, Bath & Grooming",
    "brand": "Preston Grooming",
    "name": "Cream Pomade",
    "fullTitle": "Preston Grooming - Cream Pomade",
    "price": "$34.99",
    "priceNum": 34.99,
    "sku": "PG-CAN-SOL-0005",
    "barcodes": [
      "PG-CAN-SOL-0005",
      "492540",
      "PGCANSOL0005"
    ],
    "pitch": "High-performance clean men's grooming apothecary crafted with organic plant oils, antioxidant botanicals, and invigorating nature extracts.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492540/edit",
    "img": "https://images.momence.com/h/200431/product-image/0d1cfa7c-4bbb-444b-badf-a8fd9e023fbd.jpg"
  },
  {
    "id": 492539,
    "department": "Clean Apothecary, Bath & Grooming",
    "brand": "Preston Grooming",
    "name": "Exfoliating Face Wash",
    "fullTitle": "Preston Grooming - Exfoliating Face Wash",
    "price": "$29.99",
    "priceNum": 29.99,
    "sku": "PG-CAN-PRO-0004",
    "barcodes": [
      "PG-CAN-PRO-0004",
      "492539",
      "PGCANPRO0004"
    ],
    "pitch": "High-performance clean men's grooming apothecary crafted with organic plant oils, antioxidant botanicals, and invigorating nature extracts.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492539/edit",
    "img": "https://images.momence.com/h/200431/product-image/65d0c1fc-68e9-438b-9619-03cda5d4c5d7.jpg"
  },
  {
    "id": 492537,
    "department": "Clean Apothecary, Bath & Grooming",
    "brand": "Preston Grooming",
    "name": "Shea Butter Infused Beard Balm",
    "fullTitle": "Preston Grooming - Shea Butter Infused Beard Balm",
    "price": "$24.99",
    "priceNum": 24.99,
    "sku": "PG-CAN-EXP-0002",
    "barcodes": [
      "PG-CAN-EXP-0002",
      "492537",
      "PGCANEXP0002"
    ],
    "pitch": "High-performance clean men's grooming apothecary crafted with organic plant oils, antioxidant botanicals, and invigorating nature extracts.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492537/edit",
    "img": "https://images.momence.com/h/200431/product-image/d4fb9d7c-3ca4-4a5b-aa62-c5c2330d5d07.jpg"
  },
  {
    "id": 492541,
    "department": "Clean Apothecary, Bath & Grooming",
    "brand": "Preston Grooming",
    "name": "Translucent Sunscreen Face Stick - SPF 50",
    "fullTitle": "Preston Grooming - Translucent Sunscreen Face Stick - SPF 50",
    "price": "$42.00",
    "priceNum": 42,
    "sku": "PG-CAN-BEE-0006",
    "barcodes": [
      "PG-CAN-BEE-0006",
      "492541",
      "PGCANBEE0006"
    ],
    "pitch": "High-performance clean men's grooming apothecary crafted with organic plant oils, antioxidant botanicals, and invigorating nature extracts.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492541/edit",
    "img": "https://images.momence.com/h/200431/product-image/3294585c-f623-47bd-8772-bcb35ee0b2b6.jpg"
  },
  {
    "id": 482162,
    "department": "Clean Apothecary, Bath & Grooming",
    "brand": "TEST SUPPLIER",
    "name": "Sample C-Prod 1",
    "fullTitle": "TEST SUPPLIER - Sample C-Prod 1",
    "price": "$3.00",
    "priceNum": 3,
    "sku": "",
    "barcodes": [
      "",
      "482162"
    ],
    "pitch": "Curated lifestyle and wellness essential selected exclusively for The Practice community.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/482162/edit",
    "img": ""
  },
  {
    "id": 495234,
    "department": "Clean Apothecary, Bath & Grooming",
    "brand": "Telford",
    "name": "Body Wash",
    "fullTitle": "Telford - Body Wash",
    "price": "$48.00",
    "priceNum": 48,
    "sku": "",
    "barcodes": [
      "",
      "495234"
    ],
    "pitch": "Clean, plant-derived body and hair care essential formulated with gentle botanical cleansers, soothing aloe, and nourishing essential oils for daily wellness.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/495234/edit",
    "img": "https://images.momence.com/h/200431/product-image/04cf5aa8-0895-4a49-9471-fcb702a709e3.jpg"
  },
  {
    "id": 504392,
    "department": "Clean Apothecary, Bath & Grooming",
    "brand": "Telford",
    "name": "Conditioner",
    "fullTitle": "Telford - Conditioner",
    "price": "$52.00",
    "priceNum": 52,
    "sku": "",
    "barcodes": [
      "",
      "504392"
    ],
    "pitch": "Clean, plant-derived body and hair care essential formulated with gentle botanical cleansers, soothing aloe, and nourishing essential oils for daily wellness.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504392/edit",
    "img": "https://images.momence.com/h/200431/product-image/32bcba03-16f4-4564-a73e-51829aa5b367.jpg"
  },
  {
    "id": 492727,
    "department": "Clean Apothecary, Bath & Grooming",
    "brand": "Telford",
    "name": "Hand Wash",
    "fullTitle": "Telford - Hand Wash",
    "price": "$46.00",
    "priceNum": 46,
    "sku": "TB-HAN-WAS-0001",
    "barcodes": [
      "TB-HAN-WAS-0001",
      "492727",
      "TBHANWAS0001"
    ],
    "pitch": "Clean, plant-derived body and hair care essential formulated with gentle botanical cleansers, soothing aloe, and nourishing essential oils for daily wellness.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492727/edit",
    "img": "https://images.momence.com/h/200431/product-image/de08f9fd-f636-436f-9e67-be2d434f4c0a.jpg"
  },
  {
    "id": 492728,
    "department": "Clean Apothecary, Bath & Grooming",
    "brand": "Telford",
    "name": "Lotion",
    "fullTitle": "Telford - Lotion",
    "price": "$52.00",
    "priceNum": 52,
    "sku": "TB-LOT-CRM-0002",
    "barcodes": [
      "TB-LOT-CRM-0002",
      "492728",
      "TBLOTCRM0002"
    ],
    "pitch": "Clean, plant-derived body and hair care essential formulated with gentle botanical cleansers, soothing aloe, and nourishing essential oils for daily wellness.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492728/edit",
    "img": "https://images.momence.com/h/200431/product-image/ecdc5cfc-18f6-4668-9f8a-8d32ec3e9080.jpg"
  },
  {
    "id": 492266,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Cape Diablo",
    "name": "Men's Black Labradorite Beaded Bracelet",
    "fullTitle": "Cape Diablo - Men's Black Labradorite Beaded Bracelet",
    "price": "$70.00",
    "priceNum": 70,
    "sku": "CD-BRC-LAB-0015",
    "barcodes": [
      "CD-BRC-LAB-0015",
      "492266",
      "CDBRCLAB0015"
    ],
    "pitch": "Handcrafted with rare, mystical Black Labradorite beads featuring iridescent flashes of inner spectral light, symbolizing transformation and psychic shielding. Accented with an intricate antique silver Tibetan filigree focal bead. Strung on high-tensile elastic stretch cord (fits wrists 7.5–8 inches).",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492266/edit",
    "img": "https://images.momence.com/h/200431/product-image/1928dcf5-0da4-425d-9523-2c10b05f9243.png"
  },
  {
    "id": 492262,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Cape Diablo",
    "name": "Men's Black Lava Stone Beaded Bracelet",
    "fullTitle": "Cape Diablo - Men's Black Lava Stone Beaded Bracelet",
    "price": "$63.00",
    "priceNum": 63,
    "sku": "CD-BRC-LAV-0011",
    "barcodes": [
      "CD-BRC-LAV-0011",
      "492262",
      "CDBRCLAV0011"
    ],
    "pitch": "Crafted from raw, porous natural Black Lava Stone formed from volcanic molten rock, symbolizing rebirth and unwavering strength. Accented with an intricate antique silver Tibetan filigree focal bead. Can also be used as a natural essential oil diffuser bracelet. Strung on high-tensile elastic stretch cord (fits wrists 7.5–8 inches).",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492262/edit",
    "img": "https://images.momence.com/h/200431/product-image/3dbd8b3c-2da9-4e69-83fd-b3d09291aef4.png"
  },
  {
    "id": 492267,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Cape Diablo",
    "name": "Men's Bronzite Tibetan Beaded Bracelet",
    "fullTitle": "Cape Diablo - Men's Bronzite Tibetan Beaded Bracelet",
    "price": "$63.00",
    "priceNum": 63,
    "sku": "CD-BRC-BRO-0016",
    "barcodes": [
      "CD-BRC-BRO-0016",
      "492267",
      "CDBRCBRO0016"
    ],
    "pitch": "Bold, grounded, and meticulously handcrafted with genuine Bronzite and Tibetan stone beads celebrated for protective grounding and decisiveness. Accented with an intricately carved antique silver filigree focal bead symbolizing strength and harmony. Strung on high-tensile elastic stretch cord for durable everyday wear (fits wrists 7.5–8 inches).",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492267/edit",
    "img": "https://images.momence.com/h/200431/product-image/94da5efb-179d-4977-a4ab-ad762fd9d6fd.png"
  },
  {
    "id": 492265,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Cape Diablo",
    "name": "Men's Grey Jasper Tibetan Bracelet",
    "fullTitle": "Cape Diablo - Men's Grey Jasper Tibetan Bracelet",
    "price": "$45.00",
    "priceNum": 45,
    "sku": "CD-BRC-GJT-0014",
    "barcodes": [
      "CD-BRC-GJT-0014",
      "492265",
      "CDBRCGJT0014"
    ],
    "pitch": "Handcrafted bohemian wrap bracelet woven with natural healing gemstones, genuine leather, and engraved clasp.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492265/edit",
    "img": "https://images.momence.com/h/200431/product-image/a3c57249-33e7-4b5d-ae33-8165de6f9f75.png"
  },
  {
    "id": 492268,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Cape Diablo",
    "name": "Men's Hematite Beaded Bracelet",
    "fullTitle": "Cape Diablo - Men's Hematite Beaded Bracelet",
    "price": "$63.00",
    "priceNum": 63,
    "sku": "CD-BRC-HEM-0017",
    "barcodes": [
      "CD-BRC-HEM-0017",
      "492268",
      "CDBRCHEM0017"
    ],
    "pitch": "Meticulously handcrafted with metallic-lustre natural Hematite beads known for powerful grounding, mental clarity, and shielding negative energy. Accented with an intricate antique silver Tibetan filigree focal bead. Strung on high-tensile elastic stretch cord for durable, comfortable everyday wear (fits wrists 7.5–8 inches).",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492268/edit",
    "img": "https://images.momence.com/h/200431/product-image/49e6e991-0281-464a-9040-ae84e03642fe.png"
  },
  {
    "id": 492263,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Cape Diablo",
    "name": "Men's Jasper & Tiger Eye Beaded Bracelet",
    "fullTitle": "Cape Diablo - Men's Jasper & Tiger Eye Beaded Bracelet",
    "price": "$63.00",
    "priceNum": 63,
    "sku": "CD-BRC-JTE-0012",
    "barcodes": [
      "CD-BRC-JTE-0012",
      "492263",
      "CDBRCJTE0012"
    ],
    "pitch": "Handcrafted with rich earthy Jasper and chatoyant golden-brown Tiger Eye beads, uniting physical endurance with mental focus and courage. Accented with an intricate antique silver Tibetan filigree focal bead. Strung on high-tensile elastic stretch cord for durable, comfortable everyday wear (fits wrists 7.5–8 inches).",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492263/edit",
    "img": "https://images.momence.com/h/200431/product-image/01e888cb-1b4d-4331-bfbe-0445b23d744b.png"
  },
  {
    "id": 492264,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Cape Diablo",
    "name": "Men's Tiger Eye Tibetan Beaded Bracelet",
    "fullTitle": "Cape Diablo - Men's Tiger Eye Tibetan Beaded Bracelet",
    "price": "$63.00",
    "priceNum": 63,
    "sku": "CD-BRC-TET-0013",
    "barcodes": [
      "CD-BRC-TET-0013",
      "492264",
      "CDBRCTET0013"
    ],
    "pitch": "Handcrafted with golden chatoyant Tiger Eye beads renowned as ancient stones of confidence, protection, and focused willpower. Accented with an intricately carved antique silver Tibetan filigree focal bead. Strung on high-tensile elastic stretch cord for durable everyday wear (fits wrists 7.5–8 inches).",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492264/edit",
    "img": "https://images.momence.com/h/200431/product-image/16c1f776-99a4-4bee-aadf-93b35daef7cc.png"
  },
  {
    "id": 492257,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Cape Diablo",
    "name": "Mini Amazonite Beaded Bracelet",
    "fullTitle": "Cape Diablo - Mini Amazonite Beaded Bracelet",
    "price": "$35.00",
    "priceNum": 35,
    "sku": "CD-BRC-AMZ-0006",
    "barcodes": [
      "CD-BRC-AMZ-0006",
      "492257",
      "CDBRCAMZ0006"
    ],
    "pitch": "Handcrafted with genuine semi-precious faceted Amazonite beads known for soothing emotional balance, truth, and harmony. Accented with 14k gold-plated brass spacer details and finished with an engraved signature Cape Diablo metal bar. Features a durable elastic stretch cord for an effortless, comfortable fit (approx. 6.5–7 inches). Perfect for mindful daily layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492257/edit",
    "img": "https://images.momence.com/h/200431/product-image/7881afff-e4dd-4f0d-a2ef-c94373975f06.png"
  },
  {
    "id": 492260,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Cape Diablo",
    "name": "Mini Black Jade Beaded Bracelet",
    "fullTitle": "Cape Diablo - Mini Black Jade Beaded Bracelet",
    "price": "$35.00",
    "priceNum": 35,
    "sku": "CD-BRC-BLK-0009",
    "barcodes": [
      "CD-BRC-BLK-0009",
      "492260",
      "CDBRCBLK0009"
    ],
    "pitch": "Handcrafted with genuine semi-precious faceted Black Jade beads radiating grounding energy, inner strength, and protection. Accented with 14k gold-plated brass spacer details and finished with an engraved signature Cape Diablo metal bar. Features a durable elastic stretch cord for an effortless, comfortable fit (approx. 6.5–7 inches). A sleek, timeless everyday staple.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492260/edit",
    "img": "https://images.momence.com/h/200431/product-image/d4e5bee3-8706-4007-bfde-6605c4030d6c.png"
  },
  {
    "id": 492261,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Cape Diablo",
    "name": "Mini Blue Jade Beaded Bracelet",
    "fullTitle": "Cape Diablo - Mini Blue Jade Beaded Bracelet",
    "price": "$35.00",
    "priceNum": 35,
    "sku": "CD-BRC-BLU-0010",
    "barcodes": [
      "CD-BRC-BLU-0010",
      "492261",
      "CDBRCBLU0010"
    ],
    "pitch": "Handcrafted with genuine semi-precious faceted Blue Jade beads inspiring tranquility, serenity, and peaceful self-expression. Accented with 14k gold-plated brass spacer details and finished with an engraved signature Cape Diablo metal bar. Features a durable elastic stretch cord for an effortless, comfortable fit (approx. 6.5–7 inches). Ideal for stacking.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492261/edit",
    "img": "https://images.momence.com/h/200431/product-image/27df38fe-181e-4ea8-84d9-f95b26e05242.png"
  },
  {
    "id": 523772,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Cape Diablo",
    "name": "Mini Coral Jade Beaded Bracelet",
    "fullTitle": "Cape Diablo - Mini Coral Jade Beaded Bracelet",
    "price": "$35.00",
    "priceNum": 35,
    "sku": "BMiniCoral",
    "barcodes": [
      "BMiniCoral",
      "523772"
    ],
    "pitch": "Handcrafted with genuine semi-precious faceted Coral Jade beads bringing vibrant joy, creativity, and passionate life energy. Accented with 14k gold-plated brass spacer details and finished with an engraved signature Cape Diablo metal bar. Features a durable elastic stretch cord for an effortless, comfortable fit (approx. 6.5–7 inches).",
    "momenceUrl": "https://momence.com/dashboard/200431/products/523772/edit",
    "img": "https://images.momence.com/h/200431/product-image/eb8fc1f8-3297-40de-b015-0bf9a71a677f.jpeg"
  },
  {
    "id": 523777,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Cape Diablo",
    "name": "Mini Green Jade Beaded Bracelet",
    "fullTitle": "Cape Diablo - Mini Green Jade Beaded Bracelet",
    "price": "$35.00",
    "priceNum": 35,
    "sku": "BMiniGreen",
    "barcodes": [
      "BMiniGreen",
      "523777"
    ],
    "pitch": "Handcrafted with genuine semi-precious faceted Green Jade beads celebrated for abundance, good fortune, and heart-centered calm. Accented with 14k gold-plated brass spacer details and finished with an engraved signature Cape Diablo metal bar. Features a durable elastic stretch cord for an effortless, comfortable fit (approx. 6.5–7 inches).",
    "momenceUrl": "https://momence.com/dashboard/200431/products/523777/edit",
    "img": "https://images.momence.com/h/200431/product-image/bb84adf1-2ccc-4b1d-80d0-a4d0f2a42e83.jpeg"
  },
  {
    "id": 492258,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Cape Diablo",
    "name": "Mini Grey Jade Beaded Bracelet",
    "fullTitle": "Cape Diablo - Mini Grey Jade Beaded Bracelet",
    "price": "$35.00",
    "priceNum": 35,
    "sku": "CD-BRC-GRY-0007",
    "barcodes": [
      "CD-BRC-GRY-0007",
      "492258",
      "CDBRCGRY0007"
    ],
    "pitch": "Handcrafted with genuine semi-precious faceted Grey Jade beads providing stabilizing grounding, neutrality, and clear focus. Accented with 14k gold-plated brass spacer details and finished with an engraved signature Cape Diablo metal bar. Features a durable elastic stretch cord for an effortless, comfortable fit (approx. 6.5–7 inches).",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492258/edit",
    "img": "https://images.momence.com/h/200431/product-image/cdb178c3-6420-42ab-8c86-ad0c94f7591d.png"
  },
  {
    "id": 523788,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Cape Diablo",
    "name": "Mini Pastel Gemstone Beaded Bracelet",
    "fullTitle": "Cape Diablo - Mini Pastel Gemstone Beaded Bracelet",
    "price": "$35.00",
    "priceNum": 35,
    "sku": "",
    "barcodes": [
      "",
      "523788"
    ],
    "pitch": "Handcrafted with a curated medley of genuine soft pastel semi-precious gemstones celebrating gentle optimism, balance, and mindful gratitude. Accented with 14k gold-plated brass spacer details and finished with an engraved signature Cape Diablo metal bar. Features a durable elastic stretch cord for an effortless, comfortable fit (approx. 6.5–7 inches).",
    "momenceUrl": "https://momence.com/dashboard/200431/products/523788/edit",
    "img": "https://images.momence.com/h/200431/product-image/97e1cbcb-1db5-48dd-8058-ac0e11fadc6a.jpeg"
  },
  {
    "id": 492253,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Cape Diablo",
    "name": "Mini Pink Jade Beaded Bracelet",
    "fullTitle": "Cape Diablo - Mini Pink Jade Beaded Bracelet",
    "price": "$35.00",
    "priceNum": 35,
    "sku": "CD-BRC-PNK-0002",
    "barcodes": [
      "CD-BRC-PNK-0002",
      "492253",
      "CDBRCPNK0002"
    ],
    "pitch": "Handcrafted with genuine semi-precious faceted Pink Jade beads embodying unconditional love, gentle healing, and heart chakra alignment. Accented with 14k gold-plated brass spacer details and finished with an engraved signature Cape Diablo metal bar. Features a durable elastic stretch cord for an effortless, comfortable fit (approx. 6.5–7 inches).",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492253/edit",
    "img": "https://images.momence.com/h/200431/product-image/e471abd1-8612-4988-a191-1e5f302513d0.png"
  },
  {
    "id": 492255,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Cape Diablo",
    "name": "Mini Purple Jade Beaded Bracelet",
    "fullTitle": "Cape Diablo - Mini Purple Jade Beaded Bracelet",
    "price": "$35.00",
    "priceNum": 35,
    "sku": "CD-BRC-PUR-0004",
    "barcodes": [
      "CD-BRC-PUR-0004",
      "492255",
      "CDBRCPUR0004"
    ],
    "pitch": "Handcrafted with genuine semi-precious faceted Purple Jade beads encouraging spiritual insight, intuition, and serene inner peace. Accented with 14k gold-plated brass spacer details and finished with an engraved signature Cape Diablo metal bar. Features a durable elastic stretch cord for an effortless, comfortable fit (approx. 6.5–7 inches).",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492255/edit",
    "img": "https://images.momence.com/h/200431/product-image/d405057f-0c90-4140-99fe-95ea79ec0b12.png"
  },
  {
    "id": 492256,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Cape Diablo",
    "name": "Mini Rainbow Gemstone Beaded Bracelet",
    "fullTitle": "Cape Diablo - Mini Rainbow Gemstone Beaded Bracelet",
    "price": "$35.00",
    "priceNum": 35,
    "sku": "CD-BRC-RBW-0005",
    "barcodes": [
      "CD-BRC-RBW-0005",
      "492256",
      "CDBRCRBW0005"
    ],
    "pitch": "Handcrafted with a spectrum of multi-colored genuine semi-precious gemstone beads representing full chakra alignment and radiant vitality. Accented with 14k gold-plated brass spacer details and finished with an engraved signature Cape Diablo metal bar. Features a durable elastic stretch cord for an effortless, comfortable fit (approx. 6.5–7 inches).",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492256/edit",
    "img": "https://images.momence.com/h/200431/product-image/8b4a4779-a3b3-4a6d-9103-9144244c9fe5.png"
  },
  {
    "id": 492254,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Cape Diablo",
    "name": "Mini Sunset Jade Beaded Bracelet",
    "fullTitle": "Cape Diablo - Mini Sunset Jade Beaded Bracelet",
    "price": "$35.00",
    "priceNum": 35,
    "sku": "CD-BRC-SUN-0003",
    "barcodes": [
      "CD-BRC-SUN-0003",
      "492254",
      "CDBRCSUN0003"
    ],
    "pitch": "Handcrafted with genuine semi-precious warm sunset-toned faceted Jade beads evoking confidence, warmth, and solar plexus motivation. Accented with 14k gold-plated brass spacer details and finished with an engraved signature Cape Diablo metal bar. Features a durable elastic stretch cord for an effortless, comfortable fit (approx. 6.5–7 inches).",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492254/edit",
    "img": "https://images.momence.com/h/200431/product-image/6fd73a8f-8049-4501-a93f-8cecba9c6e36.png"
  },
  {
    "id": 492252,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Cape Diablo",
    "name": "Mini Turquoise Beaded Bracelet",
    "fullTitle": "Cape Diablo - Mini Turquoise Beaded Bracelet",
    "price": "$35.00",
    "priceNum": 35,
    "sku": "CD-BRC-TUR-0001",
    "barcodes": [
      "CD-BRC-TUR-0001",
      "492252",
      "CDBRCTUR0001"
    ],
    "pitch": "Handcrafted with genuine natural Turquoise gemstone beads known worldwide as ancient amulets of wisdom, protection, and positive flow. Accented with 14k gold-plated brass spacer details and finished with an engraved signature Cape Diablo metal bar. Features a durable elastic stretch cord for an effortless, comfortable fit (approx. 6.5–7 inches).",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492252/edit",
    "img": "https://images.momence.com/h/200431/product-image/e9da599a-929b-440f-b272-849af5e08fd1.png"
  },
  {
    "id": 492259,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Cape Diablo",
    "name": "Mini White Jade Beaded Bracelet",
    "fullTitle": "Cape Diablo - Mini White Jade Beaded Bracelet",
    "price": "$35.00",
    "priceNum": 35,
    "sku": "CD-BRC-WHT-0008",
    "barcodes": [
      "CD-BRC-WHT-0008",
      "492259",
      "CDBRCWHT0008"
    ],
    "pitch": "Handcrafted with pure, glowing semi-precious White Jade beads channeling clarity, peaceful stillness, and purification. Accented with 14k gold-plated brass spacer details and finished with an engraved signature Cape Diablo metal bar. Features a durable elastic stretch cord for an effortless, comfortable fit (approx. 6.5–7 inches).",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492259/edit",
    "img": "https://images.momence.com/h/200431/product-image/840bbf78-9300-4278-b66c-61dec103179c.png"
  },
  {
    "id": 492354,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Cedar and Myrrh",
    "name": "Amethyst Crystal Divination Pendulum",
    "fullTitle": "Cedar and Myrrh - Amethyst Crystal Divination Pendulum",
    "price": "$60.00",
    "priceNum": 60,
    "sku": "CM-HLD-FBR-0023",
    "barcodes": [
      "CM-HLD-FBR-0023",
      "492354",
      "CMHLDFBR0023"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492354/edit",
    "img": "https://images.momence.com/h/200431/product-image/13f9c260-768d-4c67-89bc-d91e5c312c1a.png"
  },
  {
    "id": 492338,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Cedar and Myrrh",
    "name": "Aventurine Crystal Divination Pendulum",
    "fullTitle": "Cedar and Myrrh - Aventurine Crystal Divination Pendulum",
    "price": "$58.89",
    "priceNum": 58.89,
    "sku": "CM-PEN-AVE-0007",
    "barcodes": [
      "CM-PEN-AVE-0007",
      "492338",
      "CMPENAVE0007"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492338/edit",
    "img": "https://images.momence.com/h/200431/product-image/391a938b-959b-4acb-8e9f-1fb3d615867c.png"
  },
  {
    "id": 492332,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Cedar and Myrrh",
    "name": "Citrine Crystal Divination Pendulum",
    "fullTitle": "Cedar and Myrrh - Citrine Crystal Divination Pendulum",
    "price": "$75.00",
    "priceNum": 75,
    "sku": "CM-PEN-CIT-0001",
    "barcodes": [
      "CM-PEN-CIT-0001",
      "492332",
      "CMPENCIT0001"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492332/edit",
    "img": "https://images.momence.com/h/200431/product-image/b4fcc387-b506-4ec8-b20f-a8aab7b944ac.png"
  },
  {
    "id": 492349,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Cedar and Myrrh",
    "name": "Le Jardin Aromatherapy Room Spray- Blooming & Nurturing",
    "fullTitle": "Cedar and Myrrh - Le Jardin Aromatherapy Room Spray- Blooming & Nurturing",
    "price": "$47.00",
    "priceNum": 47,
    "sku": "CM-HLD-WDR-0018",
    "barcodes": [
      "CM-HLD-WDR-0018",
      "492349",
      "CMHLDWDR0018"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492349/edit",
    "img": "https://images.momence.com/h/200431/product-image/983cf26d-8efe-4565-b734-a8c15bccf711.png"
  },
  {
    "id": 492337,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Cedar and Myrrh",
    "name": "Natural Obsidian Crystal Divination Pendulum",
    "fullTitle": "Cedar and Myrrh - Natural Obsidian Crystal Divination Pendulum",
    "price": "$58.89",
    "priceNum": 58.89,
    "sku": "CM-PEN-OBS-0006",
    "barcodes": [
      "CM-PEN-OBS-0006",
      "492337",
      "CMPENOBS0006"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492337/edit",
    "img": "https://images.momence.com/h/200431/product-image/ebf8368b-b552-41de-8fb9-2c9ba7448370.png"
  },
  {
    "id": 492340,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Cedar and Myrrh",
    "name": "Natural Smoky Quartz Crystal Divination Pendulum",
    "fullTitle": "Cedar and Myrrh - Natural Smoky Quartz Crystal Divination Pendulum",
    "price": "$60.00",
    "priceNum": 60,
    "sku": "CM-PEN-SMQ-0009",
    "barcodes": [
      "CM-PEN-SMQ-0009",
      "492340",
      "CMPENSMQ0009"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492340/edit",
    "img": "https://images.momence.com/h/200431/product-image/9fdc7332-8501-4f81-bf7f-6f9cac4e56ec.png"
  },
  {
    "id": 492343,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Cedar and Myrrh",
    "name": "Pendulum Divination Board Bag",
    "fullTitle": "Cedar and Myrrh - Pendulum Divination Board Bag",
    "price": "$31.00",
    "priceNum": 31,
    "sku": "CM-RMS-FRA-0012",
    "barcodes": [
      "CM-RMS-FRA-0012",
      "492343",
      "CMRMSFRA0012"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492343/edit",
    "img": "https://images.momence.com/h/200431/product-image/b4aa6e15-3b4c-4dcd-811d-858682a632c1.png"
  },
  {
    "id": 492339,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Cedar and Myrrh",
    "name": "Rose Quartz Crystal Divination Pendulum",
    "fullTitle": "Cedar and Myrrh - Rose Quartz Crystal Divination Pendulum",
    "price": "$58.89",
    "priceNum": 58.89,
    "sku": "CM-PEN-RSQ-0008",
    "barcodes": [
      "CM-PEN-RSQ-0008",
      "492339",
      "CMPENRSQ0008"
    ],
    "pitch": "Non-toxic reed diffuser crafted with natural rattan reeds and pure therapeutic essential oils in an apothecary amber glass bottle for continuous botanical aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492339/edit",
    "img": "https://images.momence.com/h/200431/product-image/e7f9eaf2-aa35-4932-8faa-849aa369b098.png"
  },
  {
    "id": 492233,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Curated Basics",
    "name": "Braided Leather Bracelet",
    "fullTitle": "Curated Basics - Braided Leather Bracelet",
    "price": "$85.00",
    "priceNum": 85,
    "sku": "CB-BRC-0001",
    "barcodes": [
      "CB-BRC-0001",
      "492233",
      "CBBRC0001"
    ],
    "pitch": "men's braided leather bracelet. Designed by Curated Basics for sleek, modern everyday sophistication. Designed by Curated Basics for sleek, modern everyday sophistication.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492233/edit",
    "img": "https://images.momence.com/h/200431/product-image/edff5d9d-d732-4aa3-be13-f93baa5f892c.png"
  },
  {
    "id": 492234,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Curated Basics",
    "name": "Brass Square Striped Ring-11",
    "fullTitle": "Curated Basics - Brass Square Striped Ring-11",
    "price": "$75.00",
    "priceNum": 75,
    "sku": "CB-RNG-BSS11-0001",
    "barcodes": [
      "CB-RNG-BSS11-0001",
      "492234",
      "CBRNGBSS110001"
    ],
    "pitch": "Contemporary men's accessory featuring refined architectural lines and premium materials. Built for effortless daily style and subtle luxury. Designed by Curated Basics for sleek, modern everyday sophistication.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492234/edit",
    "img": "https://images.momence.com/h/200431/product-image/38251216-385d-47c4-a51e-b391267f11dc.png"
  },
  {
    "id": 492235,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Curated Basics",
    "name": "Brass Square Striped Ring-8",
    "fullTitle": "Curated Basics - Brass Square Striped Ring-8",
    "price": "$75.00",
    "priceNum": 75,
    "sku": "CB-RNG-BSS08-0002",
    "barcodes": [
      "CB-RNG-BSS08-0002",
      "492235",
      "CBRNGBSS080002"
    ],
    "pitch": "Contemporary men's accessory featuring refined architectural lines and premium materials. Built for effortless daily style and subtle luxury.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492235/edit",
    "img": "https://images.momence.com/h/200431/product-image/60379b4a-5c6e-4092-8687-e4d7432a4886.png"
  },
  {
    "id": 492236,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Curated Basics",
    "name": "Brass Square Striped Ring-9",
    "fullTitle": "Curated Basics - Brass Square Striped Ring-9",
    "price": "$75.00",
    "priceNum": 75,
    "sku": "CB-RNG-BSS09-0003",
    "barcodes": [
      "CB-RNG-BSS09-0003",
      "492236",
      "CBRNGBSS090003"
    ],
    "pitch": "Contemporary men's accessory featuring refined architectural lines and premium materials. Built for effortless daily style and subtle luxury. Designed by Curated Basics for sleek, modern everyday sophistication.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492236/edit",
    "img": "https://images.momence.com/h/200431/product-image/609267de-0268-4c68-9617-396f250642ba.png"
  },
  {
    "id": 492237,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Curated Basics",
    "name": "Classic Leather Cardholder-Black",
    "fullTitle": "Curated Basics - Classic Leather Cardholder-Black",
    "price": "$62.99",
    "priceNum": 62.99,
    "sku": "CB-CRD-BLK-0001",
    "barcodes": [
      "CB-CRD-BLK-0001",
      "492237",
      "CBCRDBLK0001"
    ],
    "pitch": "Contemporary men's accessory featuring refined architectural lines and premium materials. Built for effortless daily style and subtle luxury. Designed by Curated Basics for sleek, modern everyday sophistication.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492237/edit",
    "img": "https://images.momence.com/h/200431/product-image/8ad973c5-3ae7-4db3-9707-190d75d3d9f4.png"
  },
  {
    "id": 492238,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Curated Basics",
    "name": "Classic Leather Cardholder-Brown",
    "fullTitle": "Curated Basics - Classic Leather Cardholder-Brown",
    "price": "$62.99",
    "priceNum": 62.99,
    "sku": "CB-CRD-BRN-0002",
    "barcodes": [
      "CB-CRD-BRN-0002",
      "492238",
      "CBCRDBRN0002"
    ],
    "pitch": "Contemporary men's accessory featuring refined architectural lines and premium materials. Built for effortless daily style and subtle luxury. Designed by Curated Basics for sleek, modern everyday sophistication.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492238/edit",
    "img": "https://images.momence.com/h/200431/product-image/6d3cf64b-8c1f-49ee-a7de-6021b6d032ed.png"
  },
  {
    "id": 492239,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Curated Basics",
    "name": "Classic Leather Cardholder-Navy",
    "fullTitle": "Curated Basics - Classic Leather Cardholder-Navy",
    "price": "$62.99",
    "priceNum": 62.99,
    "sku": "CB-CRD-NVY-0003",
    "barcodes": [
      "CB-CRD-NVY-0003",
      "492239",
      "CBCRDNVY0003"
    ],
    "pitch": "Contemporary men's accessory featuring refined architectural lines and premium materials. Built for effortless daily style and subtle luxury. Designed by Curated Basics for sleek, modern everyday sophistication.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492239/edit",
    "img": "https://images.momence.com/h/200431/product-image/28e1e12f-2ce0-4369-b81d-205d8f429bc3.png"
  },
  {
    "id": 492240,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Curated Basics",
    "name": "Duck Embroidery Hat- Brown",
    "fullTitle": "Curated Basics - Duck Embroidery Hat- Brown",
    "price": "$64.00",
    "priceNum": 64,
    "sku": "CB-HAT-BRN-0001",
    "barcodes": [
      "CB-HAT-BRN-0001",
      "492240",
      "CBHATBRN0001"
    ],
    "pitch": "Contemporary men's accessory featuring refined architectural lines and premium materials. Built for effortless daily style and subtle luxury. Designed by Curated Basics for sleek, modern everyday sophistication.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492240/edit",
    "img": "https://images.momence.com/h/200431/product-image/c5864ee9-e135-4297-9082-12abb42913c2.png"
  },
  {
    "id": 492241,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Curated Basics",
    "name": "Duck Embroidery Hat-Navy",
    "fullTitle": "Curated Basics - Duck Embroidery Hat-Navy",
    "price": "$64.00",
    "priceNum": 64,
    "sku": "CB-HAT-NVY-0002",
    "barcodes": [
      "CB-HAT-NVY-0002",
      "492241",
      "CBHATNVY0002"
    ],
    "pitch": "Contemporary men's accessory featuring refined architectural lines and premium materials. Built for effortless daily style and subtle luxury. Designed by Curated Basics for sleek, modern everyday sophistication.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492241/edit",
    "img": "https://images.momence.com/h/200431/product-image/f6002f5d-c8b3-44d8-bb63-9f5de501be3b.png"
  },
  {
    "id": 492242,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Curated Basics",
    "name": "Kerosene Jade Lighter",
    "fullTitle": "Curated Basics - Kerosene Jade Lighter",
    "price": "$120.00",
    "priceNum": 120,
    "sku": "CB-LTR-JADE-0001",
    "barcodes": [
      "CB-LTR-JADE-0001",
      "492242",
      "CBLTRJADE0001"
    ],
    "pitch": "Kerosene Jade Lighter 100% solid brass, brushed finish 2 1/8\" x 2\". Designed by Curated Basics for sleek, modern everyday sophistication. Designed by Curated Basics for sleek, modern everyday sophistication.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492242/edit",
    "img": "https://images.momence.com/h/200431/product-image/20dde8df-b9a4-464b-89f5-0df5db191ee3.png"
  },
  {
    "id": 492243,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Curated Basics",
    "name": "Large Kerosene Brass Fluted Lighter",
    "fullTitle": "Curated Basics - Large Kerosene Brass Fluted Lighter",
    "price": "$135.00",
    "priceNum": 135,
    "sku": "CB-LTR-FLT-0002",
    "barcodes": [
      "CB-LTR-FLT-0002",
      "492243",
      "CBLTRFLT0002"
    ],
    "pitch": "Large Kerosene Brass Fluted Lighter * 100% solid brass, brushed finish * 2 1/4\" x 1 3/4\". Designed by Curated Basics for sleek, modern everyday sophistication. Designed by Curated Basics for sleek, modern everyday sophistication.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492243/edit",
    "img": "https://images.momence.com/h/200431/product-image/4956148e-38dc-4000-8bd5-bd7ebeab8e8d.png"
  },
  {
    "id": 492245,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Curated Basics",
    "name": "Onyx Inlay Octagon Ring-10",
    "fullTitle": "Curated Basics - Onyx Inlay Octagon Ring-10",
    "price": "$59.99",
    "priceNum": 59.99,
    "sku": "CB-RNG-ONY10-0005",
    "barcodes": [
      "CB-RNG-ONY10-0005",
      "492245",
      "CBRNGONY100005"
    ],
    "pitch": "Contemporary men's accessory featuring refined architectural lines and premium materials. Built for effortless daily style and subtle luxury. Designed by Curated Basics for sleek, modern everyday sophistication.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492245/edit",
    "img": "https://images.momence.com/h/200431/product-image/ba1db561-edde-400a-8cdd-4e6d21067559.png"
  },
  {
    "id": 492244,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Curated Basics",
    "name": "Onyx Inlay Octagon Ring-11",
    "fullTitle": "Curated Basics - Onyx Inlay Octagon Ring-11",
    "price": "$59.99",
    "priceNum": 59.99,
    "sku": "CB-RNG-ONY11-0004",
    "barcodes": [
      "CB-RNG-ONY11-0004",
      "492244",
      "CBRNGONY110004"
    ],
    "pitch": "Contemporary men's accessory featuring refined architectural lines and premium materials. Built for effortless daily style and subtle luxury. Designed by Curated Basics for sleek, modern everyday sophistication.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492244/edit",
    "img": "https://images.momence.com/h/200431/product-image/5483e31c-866f-47e5-ab84-9a4e4407416f.png"
  },
  {
    "id": 492247,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Curated Basics",
    "name": "Onyx Inlay Octagon Ring-8",
    "fullTitle": "Curated Basics - Onyx Inlay Octagon Ring-8",
    "price": "$59.99",
    "priceNum": 59.99,
    "sku": "CB-RNG-ONY08-0007",
    "barcodes": [
      "CB-RNG-ONY08-0007",
      "492247",
      "CBRNGONY080007"
    ],
    "pitch": "Contemporary men's accessory featuring refined architectural lines and premium materials. Built for effortless daily style and subtle luxury. Designed by Curated Basics for sleek, modern everyday sophistication.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492247/edit",
    "img": "https://images.momence.com/h/200431/product-image/775b60f6-d523-46b7-bcd5-ebb133a5015c.png"
  },
  {
    "id": 492246,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Curated Basics",
    "name": "Onyx Inlay Octagon Ring-9",
    "fullTitle": "Curated Basics - Onyx Inlay Octagon Ring-9",
    "price": "$59.99",
    "priceNum": 59.99,
    "sku": "CB-RNG-ONY09-0006",
    "barcodes": [
      "CB-RNG-ONY09-0006",
      "492246",
      "CBRNGONY090006"
    ],
    "pitch": "Contemporary men's accessory featuring refined architectural lines and premium materials. Built for effortless daily style and subtle luxury. Designed by Curated Basics for sleek, modern everyday sophistication.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492246/edit",
    "img": "https://images.momence.com/h/200431/product-image/af8962c3-64a9-43b5-9716-c7cb70e2b994.png"
  },
  {
    "id": 492248,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Curated Basics",
    "name": "Reversible Tiger Eyes // Onyx Men Ring- 10",
    "fullTitle": "Curated Basics - Reversible Tiger Eyes // Onyx Men Ring- 10",
    "price": "$67.99",
    "priceNum": 67.99,
    "sku": "CB-RNG-TEO10-0008",
    "barcodes": [
      "CB-RNG-TEO10-0008",
      "492248",
      "CBRNGTEO100008"
    ],
    "pitch": "Contemporary men's accessory featuring refined architectural lines and premium materials. Built for effortless daily style and subtle luxury. Designed by Curated Basics for sleek, modern everyday sophistication.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492248/edit",
    "img": "https://images.momence.com/h/200431/product-image/3873d2b5-ae6e-4320-a7bd-d9a782584542.png"
  },
  {
    "id": 492250,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Curated Basics",
    "name": "Reversible Tiger Eyes // Onyx Men Ring-8",
    "fullTitle": "Curated Basics - Reversible Tiger Eyes // Onyx Men Ring-8",
    "price": "$67.99",
    "priceNum": 67.99,
    "sku": "CB-RNG-TEO08-0010",
    "barcodes": [
      "CB-RNG-TEO08-0010",
      "492250",
      "CBRNGTEO080010"
    ],
    "pitch": "Contemporary men's accessory featuring refined architectural lines and premium materials. Built for effortless daily style and subtle luxury. Designed by Curated Basics for sleek, modern everyday sophistication.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492250/edit",
    "img": "https://images.momence.com/h/200431/product-image/7863ca3e-d1c2-4e2e-858b-fc36e7aaedb9.png"
  },
  {
    "id": 492249,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Curated Basics",
    "name": "Reversible Tiger Eyes // Onyx Men Ring-9",
    "fullTitle": "Curated Basics - Reversible Tiger Eyes // Onyx Men Ring-9",
    "price": "$67.99",
    "priceNum": 67.99,
    "sku": "CB-RNG-TEO09-0009",
    "barcodes": [
      "CB-RNG-TEO09-0009",
      "492249",
      "CBRNGTEO090009"
    ],
    "pitch": "Contemporary men's accessory featuring refined architectural lines and premium materials. Built for effortless daily style and subtle luxury. Designed by Curated Basics for sleek, modern everyday sophistication.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492249/edit",
    "img": "https://images.momence.com/h/200431/product-image/52815918-3f9f-4459-99c7-c95a7fd02ee2.png"
  },
  {
    "id": 492251,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Curated Basics",
    "name": "Tiger Eyes with 3 Cubic Steel Bracelet",
    "fullTitle": "Curated Basics - Tiger Eyes with 3 Cubic Steel Bracelet",
    "price": "$56.00",
    "priceNum": 56,
    "sku": "CB-BRC-TIG-0002",
    "barcodes": [
      "CB-BRC-TIG-0002",
      "492251",
      "CBBRCTIG0002"
    ],
    "pitch": "Contemporary men's accessory featuring refined architectural lines and premium materials. Built for effortless daily style and subtle luxury. Designed by Curated Basics for sleek, modern everyday sophistication.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492251/edit",
    "img": "https://images.momence.com/h/200431/product-image/42c2ca99-e103-459a-b7e1-472d5c203cc9.png"
  },
  {
    "id": 492664,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "111 Angel Number Necklace (Yellow Gold)",
    "fullTitle": "House of Moda - 111 Angel Number Necklace (Yellow Gold)",
    "price": "$143.00",
    "priceNum": 143,
    "sku": "HM-NCK-111-YG-0025",
    "barcodes": [
      "HM-NCK-111-YG-0025",
      "492664",
      "HMNCK111YG0025"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492664/edit",
    "img": "https://images.momence.com/h/200431/product-image/c141fc30-c863-460f-be31-b8bc47e6b3b0.png"
  },
  {
    "id": 492655,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "15\" Fantasy Chain (Rhodium / Silver)",
    "fullTitle": "House of Moda - 15\" Fantasy Chain (Rhodium / Silver)",
    "price": "$230.00",
    "priceNum": 230,
    "sku": "HM-CHN-FAN-RH-0016",
    "barcodes": [
      "HM-CHN-FAN-RH-0016",
      "492655",
      "HMCHNFANRH0016"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 925 sterling silver / rhodium and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492655/edit",
    "img": "https://images.momence.com/h/200431/product-image/4f74f7e4-4a3e-48ed-bb9b-ee0e99ed3d97.png"
  },
  {
    "id": 492654,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "15\" Fantasy Chain (Yellow Gold)",
    "fullTitle": "House of Moda - 15\" Fantasy Chain (Yellow Gold)",
    "price": "$230.00",
    "priceNum": 230,
    "sku": "HM-CHN-FAN-YG-0015",
    "barcodes": [
      "HM-CHN-FAN-YG-0015",
      "492654",
      "HMCHNFANYG0015"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492654/edit",
    "img": "https://images.momence.com/h/200431/product-image/2a015922-1be3-411e-9e29-dac6fe5bfcca.png"
  },
  {
    "id": 492694,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "16\" Eterna Twist Chain (Yellow Gold)",
    "fullTitle": "House of Moda - 16\" Eterna Twist Chain (Yellow Gold)",
    "price": "$149.00",
    "priceNum": 149,
    "sku": "HM-CHN-16T-0055",
    "barcodes": [
      "HM-CHN-16T-0055",
      "492694",
      "HMCHN16T0055"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492694/edit",
    "img": "https://images.momence.com/h/200431/product-image/316c992f-1e5d-4def-8826-95a2106ce0e8.png"
  },
  {
    "id": 492691,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "16\" Long Link Chain (Yellow Gold)",
    "fullTitle": "House of Moda - 16\" Long Link Chain (Yellow Gold)",
    "price": "$199.00",
    "priceNum": 199,
    "sku": "HM-SPC-HAL-LIL-0052",
    "barcodes": [
      "HM-SPC-HAL-LIL-0052",
      "492691",
      "HMSPCHALLIL0052"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492691/edit",
    "img": "https://images.momence.com/h/200431/product-image/3e556586-89a4-49cc-a0e0-3d2cf3aaeb42.png"
  },
  {
    "id": 492693,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "16\" Tiny Link Chain (Yellow Gold)",
    "fullTitle": "House of Moda - 16\" Tiny Link Chain (Yellow Gold)",
    "price": "$136.00",
    "priceNum": 136,
    "sku": "HM-CHN-20L-0054",
    "barcodes": [
      "HM-CHN-20L-0054",
      "492693",
      "HMCHN20L0054"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492693/edit",
    "img": "https://images.momence.com/h/200431/product-image/01dc5d6a-be64-4985-8707-204dd372143e.png"
  },
  {
    "id": 492695,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "18\" Eterna Twist Chain (Yellow Gold)",
    "fullTitle": "House of Moda - 18\" Eterna Twist Chain (Yellow Gold)",
    "price": "$161.00",
    "priceNum": 161,
    "sku": "HM-CHN-16TWT-0056",
    "barcodes": [
      "HM-CHN-16TWT-0056",
      "492695",
      "HMCHN16TWT0056"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492695/edit",
    "img": "https://images.momence.com/h/200431/product-image/c4d0123f-f5ff-4c08-9c2f-9429286b36ce.png"
  },
  {
    "id": 492692,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "20\" Long Link Chain (Yellow Gold)",
    "fullTitle": "House of Moda - 20\" Long Link Chain (Yellow Gold)",
    "price": "$236.00",
    "priceNum": 236,
    "sku": "HM-CHN-16L-0053",
    "barcodes": [
      "HM-CHN-16L-0053",
      "492692",
      "HMCHN16L0053"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492692/edit",
    "img": "https://images.momence.com/h/200431/product-image/e64c177b-57f5-488c-9b1b-7b8cd81f3124.png"
  },
  {
    "id": 492665,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "222 Angel Number Necklace (Yellow Gold)",
    "fullTitle": "House of Moda - 222 Angel Number Necklace (Yellow Gold)",
    "price": "$143.00",
    "priceNum": 143,
    "sku": "HM-NCK-222-YG-0026",
    "barcodes": [
      "HM-NCK-222-YG-0026",
      "492665",
      "HMNCK222YG0026"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492665/edit",
    "img": "https://images.momence.com/h/200431/product-image/f0407a06-fd71-4c1f-8a59-fd36adfe5c67.png"
  },
  {
    "id": 492666,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "333 Angel Number Necklace (Yellow Gold)",
    "fullTitle": "House of Moda - 333 Angel Number Necklace (Yellow Gold)",
    "price": "$143.00",
    "priceNum": 143,
    "sku": "HM-NCK-333-YG-0027",
    "barcodes": [
      "HM-NCK-333-YG-0027",
      "492666",
      "HMNCK333YG0027"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492666/edit",
    "img": "https://images.momence.com/h/200431/product-image/18ffe35e-3661-4e24-b57e-044762129f61.png"
  },
  {
    "id": 492667,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "444 Angel Number Necklace (Yellow Gold)",
    "fullTitle": "House of Moda - 444 Angel Number Necklace (Yellow Gold)",
    "price": "$143.00",
    "priceNum": 143,
    "sku": "HM-NCK-444-YG-0028",
    "barcodes": [
      "HM-NCK-444-YG-0028",
      "492667",
      "HMNCK444YG0028"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492667/edit",
    "img": "https://images.momence.com/h/200431/product-image/e1c4c104-1b43-43bf-b317-9cf347693309.png"
  },
  {
    "id": 492668,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "555 Angel Number Necklace (Yellow Gold)",
    "fullTitle": "House of Moda - 555 Angel Number Necklace (Yellow Gold)",
    "price": "$143.00",
    "priceNum": 143,
    "sku": "HM-NCK-555-YG-0029",
    "barcodes": [
      "HM-NCK-555-YG-0029",
      "492668",
      "HMNCK555YG0029"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492668/edit",
    "img": "https://images.momence.com/h/200431/product-image/995ef2f4-e5ff-42d0-a758-5c2f308e331d.png"
  },
  {
    "id": 492709,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "6 Ring",
    "fullTitle": "House of Moda - 6 Ring",
    "price": "$90.00",
    "priceNum": 90,
    "sku": "HM-RNG-WIL-6-0071",
    "barcodes": [
      "HM-RNG-WIL-6-0071",
      "492709",
      "HMRNGWIL60071"
    ],
    "pitch": "Waterproof, 18K PVD Gold Plated Stainless Steel. Gorgeous Jewel tones, Fun Statement Piece. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492709/edit",
    "img": "https://images.momence.com/h/200431/product-image/b3bfc19f-e113-49d9-a9d2-6397cc0005e2.png"
  },
  {
    "id": 492702,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Aurelia 6 Ring",
    "fullTitle": "House of Moda - Aurelia 6 Ring",
    "price": "$90.00",
    "priceNum": 90,
    "sku": "HM-RNG-AUR-6-0064",
    "barcodes": [
      "HM-RNG-AUR-6-0064",
      "492702",
      "HMRNGAUR60064"
    ],
    "pitch": "18K PVD Gold Plated Stainless Steel. Waterproof. Square Cut Crystal Centrepiece. Sleek, contemporary, classic. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492702/edit",
    "img": "https://images.momence.com/h/200431/product-image/1835637f-dcf2-4c6d-bb90-3663bb410b0d.png"
  },
  {
    "id": 492703,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Aurelia 7 Ring",
    "fullTitle": "House of Moda - Aurelia 7 Ring",
    "price": "$90.00",
    "priceNum": 90,
    "sku": "HM-RNG-AUR-7-0065",
    "barcodes": [
      "HM-RNG-AUR-7-0065",
      "492703",
      "HMRNGAUR70065"
    ],
    "pitch": "18K PVD Gold Plated Stainless Steel. Waterproof. Square Cut Crystal Centrepiece. Sleek, contemporary, classic. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492703/edit",
    "img": "https://images.momence.com/h/200431/product-image/39bdc701-87a0-4d95-ac6c-ac37d5029c7d.png"
  },
  {
    "id": 492704,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Aurelia 8 Ring",
    "fullTitle": "House of Moda - Aurelia 8 Ring",
    "price": "$90.00",
    "priceNum": 90,
    "sku": "HM-RNG-AUR-8-0066",
    "barcodes": [
      "HM-RNG-AUR-8-0066",
      "492704",
      "HMRNGAUR80066"
    ],
    "pitch": "18K PVD Gold Plated Stainless Steel. Waterproof. Square Cut Crystal Centrepiece. Sleek, contemporary, classic. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492704/edit",
    "img": "https://images.momence.com/h/200431/product-image/ef249a67-5266-4db3-a750-29b483425bb6.png"
  },
  {
    "id": 492672,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Azure Moon Charm- Clear/Navy YG",
    "fullTitle": "House of Moda - Azure Moon Charm- Clear/Navy YG",
    "price": "$99.00",
    "priceNum": 99,
    "sku": "HM-CHM-AZM-YG-0033",
    "barcodes": [
      "HM-CHM-AZM-YG-0033",
      "492672",
      "HMCHMAZMYG0033"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492672/edit",
    "img": "https://images.momence.com/h/200431/product-image/00c7ed3d-f637-4398-9d1c-e736219463db.png"
  },
  {
    "id": 492705,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Baguette 7 Ring",
    "fullTitle": "House of Moda - Baguette 7 Ring",
    "price": "$80.00",
    "priceNum": 80,
    "sku": "HM-RNG-BAG-7-0067",
    "barcodes": [
      "HM-RNG-BAG-7-0067",
      "492705",
      "HMRNGBAG70067"
    ],
    "pitch": "18K PVD Gold Plated Stainless Steel. Waterproof. Perfect centrepiece for your ring vibe. Sculptural and striking. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492705/edit",
    "img": "https://images.momence.com/h/200431/product-image/68b2f7c5-a39f-4da6-aa47-a3df3bba6b1e.png"
  },
  {
    "id": 492706,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Baguette 8 Ring",
    "fullTitle": "House of Moda - Baguette 8 Ring",
    "price": "$80.00",
    "priceNum": 80,
    "sku": "HM-RNG-BAG-8-0068",
    "barcodes": [
      "HM-RNG-BAG-8-0068",
      "492706",
      "HMRNGBAG80068"
    ],
    "pitch": "18K PVD Gold Plated Stainless Steel. Waterproof. Perfect centrepiece for your ring vibe. Sculptural and striking. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492706/edit",
    "img": "https://images.momence.com/h/200431/product-image/78e62f15-f101-4521-8145-fb861ea2445e.png"
  },
  {
    "id": 492687,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Baguette Spacer Charm (Yellow Gold)",
    "fullTitle": "House of Moda - Baguette Spacer Charm (Yellow Gold)",
    "price": "$25.00",
    "priceNum": 25,
    "sku": "HM-SPC-BAG-0048",
    "barcodes": [
      "HM-SPC-BAG-0048",
      "492687",
      "HMSPCBAG0048"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492687/edit",
    "img": "https://images.momence.com/h/200431/product-image/d4d88825-717d-4b35-8c58-03a100232491.png"
  },
  {
    "id": 492676,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Big Sun Charm-Champagne (Yellow Gold)",
    "fullTitle": "House of Moda - Big Sun Charm-Champagne (Yellow Gold)",
    "price": "$186.00",
    "priceNum": 186,
    "sku": "HM-CHM-SUN-CHM-0037",
    "barcodes": [
      "HM-CHM-SUN-CHM-0037",
      "492676",
      "HMCHMSUNCHM0037"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492676/edit",
    "img": "https://images.momence.com/h/200431/product-image/19a16866-7bc1-4346-a48a-caea52c3f860.png"
  },
  {
    "id": 492675,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Big Sun Charm-Navy (Yellow Gold)",
    "fullTitle": "House of Moda - Big Sun Charm-Navy (Yellow Gold)",
    "price": "$166.00",
    "priceNum": 166,
    "sku": "HM-CHM-SUN-NVY-0036",
    "barcodes": [
      "HM-CHM-SUN-NVY-0036",
      "492675",
      "HMCHMSUNNVY0036"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492675/edit",
    "img": "https://images.momence.com/h/200431/product-image/d1b20432-1fe0-4436-bfa5-595a2b98cb53.png"
  },
  {
    "id": 492699,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Bold Eternity 6 Ring",
    "fullTitle": "House of Moda - Bold Eternity 6 Ring",
    "price": "$124.00",
    "priceNum": 124,
    "sku": "HM-RNG-BLD-6-0061",
    "barcodes": [
      "HM-RNG-BLD-6-0061",
      "492699",
      "HMRNGBLD60061"
    ],
    "pitch": "Waterproof, 18K PVD Gold Plated Stainless Steel. 3.5 mm cubic zirconia Stones. Eternity band symbolizes “Forever”. Great for stacking with other rings. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492699/edit",
    "img": "https://images.momence.com/h/200431/product-image/3e79e220-98d9-44f3-a26d-6086da83680b.png"
  },
  {
    "id": 492700,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Bold Eternity 7 Ring",
    "fullTitle": "House of Moda - Bold Eternity 7 Ring",
    "price": "$124.00",
    "priceNum": 124,
    "sku": "HM-RNG-BLD-7-0062",
    "barcodes": [
      "HM-RNG-BLD-7-0062",
      "492700",
      "HMRNGBLD70062"
    ],
    "pitch": "Waterproof, 18K PVD Gold Plated Stainless Steel. 3.5 mm cubic zirconia Stones. Eternity band symbolizes “Forever”. Great for stacking with other rings. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492700/edit",
    "img": "https://images.momence.com/h/200431/product-image/c6278c34-d118-43d8-a01a-84005665dffd.png"
  },
  {
    "id": 492701,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Bold Eternity 8 Ring",
    "fullTitle": "House of Moda - Bold Eternity 8 Ring",
    "price": "$124.00",
    "priceNum": 124,
    "sku": "HM-RNG-BLD-8-0063",
    "barcodes": [
      "HM-RNG-BLD-8-0063",
      "492701",
      "HMRNGBLD80063"
    ],
    "pitch": "Waterproof, 18K PVD Gold Plated Stainless Steel. 3.5 mm cubic zirconia Stones. Eternity band symbolizes “Forever”. Great for stacking with other rings. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492701/edit",
    "img": "https://images.momence.com/h/200431/product-image/9b2895f7-b487-459f-9584-af62dd789224.png"
  },
  {
    "id": 492657,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Caroline 7 Ring",
    "fullTitle": "House of Moda - Caroline 7 Ring",
    "price": "$177.00",
    "priceNum": 177,
    "sku": "HM-RNG-CAR-YG-0018",
    "barcodes": [
      "HM-RNG-CAR-YG-0018",
      "492657",
      "HMRNGCARYG0018"
    ],
    "pitch": "925 Sterling Silver, 18K Gold Vermeil. Square & teardrop shaped ring, embellished with baguette & round style crystals. Unique & modern look. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492657/edit",
    "img": "https://images.momence.com/h/200431/product-image/57e24269-d810-4f1b-9da4-82556f17d504.png"
  },
  {
    "id": 492670,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Chiara Chain Bracelet-Clear RH",
    "fullTitle": "House of Moda - Chiara Chain Bracelet-Clear RH",
    "price": "$254.00",
    "priceNum": 254,
    "sku": "HM-BRC-CHI-RH-0031",
    "barcodes": [
      "HM-BRC-CHI-RH-0031",
      "492670",
      "HMBRCCHIRH0031"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 925 sterling silver / rhodium and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492670/edit",
    "img": "https://images.momence.com/h/200431/product-image/87095a5a-20c1-4abd-a74c-8c035305e423.png"
  },
  {
    "id": 492669,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Chiara Chain Bracelet-Clear YG",
    "fullTitle": "House of Moda - Chiara Chain Bracelet-Clear YG",
    "price": "$254.00",
    "priceNum": 254,
    "sku": "HM-BRC-CHI-YG-0030",
    "barcodes": [
      "HM-BRC-CHI-YG-0030",
      "492669",
      "HMBRCCHIYG0030"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492669/edit",
    "img": "https://images.momence.com/h/200431/product-image/926db85c-0c5b-482c-9244-788c2bf3aedd.png"
  },
  {
    "id": 492685,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Chubby Pave Spacer Charm-Clear (Yellow Gold)",
    "fullTitle": "House of Moda - Chubby Pave Spacer Charm-Clear (Yellow Gold)",
    "price": "$40.00",
    "priceNum": 40,
    "sku": "HM-SPC-PNK-0046",
    "barcodes": [
      "HM-SPC-PNK-0046",
      "492685",
      "HMSPCPNK0046"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492685/edit",
    "img": "https://images.momence.com/h/200431/product-image/ec610412-8255-466b-9227-7fbf8b1852d5.png"
  },
  {
    "id": 492686,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Chubby Pave Spacer Charm-Pink (Yellow Gold)",
    "fullTitle": "House of Moda - Chubby Pave Spacer Charm-Pink (Yellow Gold)",
    "price": "$40.00",
    "priceNum": 40,
    "sku": "HM-SPC-BAG-0047",
    "barcodes": [
      "HM-SPC-BAG-0047",
      "492686",
      "HMSPCBAG0047"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492686/edit",
    "img": "https://images.momence.com/h/200431/product-image/f1a1abcb-518f-4e68-b152-2b3040c2573e.png"
  },
  {
    "id": 492651,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Coastal Nazar Bracelet",
    "fullTitle": "House of Moda - Coastal Nazar Bracelet",
    "price": "$250.00",
    "priceNum": 250,
    "sku": "HM-BRC-NZR-YG-0012",
    "barcodes": [
      "HM-BRC-NZR-YG-0012",
      "492651",
      "HMBRCNZRYG0012"
    ],
    "pitch": "Handcrafted, 925 Sterling Silver, 18K Gold Vermeil. Cubic Zirconia crystals. 6.5” with 2” extender for adjustable fit. Wear it solo as a protective amulet, or layer it to build your own curated ‘spiritual stack.’ Nazar Amulet, is an eye-shaped talisman designed to protect against the curse of the evil eye. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492651/edit",
    "img": "https://images.momence.com/h/200431/product-image/92112887-e233-4792-bcba-aa4fd864b4d8.png"
  },
  {
    "id": 492653,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Duo Nazar Bracelet (Rhodium / Silver)",
    "fullTitle": "House of Moda - Duo Nazar Bracelet (Rhodium / Silver)",
    "price": "$250.00",
    "priceNum": 250,
    "sku": "HM-BRC-DNZ-RH-0014",
    "barcodes": [
      "HM-BRC-DNZ-RH-0014",
      "492653",
      "HMBRCDNZRH0014"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 925 sterling silver / rhodium and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492653/edit",
    "img": "https://images.momence.com/h/200431/product-image/21bf65af-8b1d-47ef-bdfc-4534f57a81e4.png"
  },
  {
    "id": 492652,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Duo Nazar Gold Bracelet",
    "fullTitle": "House of Moda - Duo Nazar Gold Bracelet",
    "price": "$250.00",
    "priceNum": 250,
    "sku": "HM-BRC-DNZ-YG-0013",
    "barcodes": [
      "HM-BRC-DNZ-YG-0013",
      "492652",
      "HMBRCDNZYG0013"
    ],
    "pitch": "Handcrafted, 925 Sterling Silver, 18K Gold Vermeil. Cubic Zirconia crystals. 6.5” with 2” extender for adjustable fit. Wear it solo as a protective amulet, or layer it to build your own curated ‘spiritual stack.’ Nazar Amulet, is an eye-shaped talisman designed to protect against the curse of the evil eye. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492652/edit",
    "img": "https://images.momence.com/h/200431/product-image/a707c030-4d40-44db-93f4-b7dac479314f.png"
  },
  {
    "id": 560764,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Duo Nazar Silver Bracelet",
    "fullTitle": "House of Moda - Duo Nazar Silver Bracelet",
    "price": "$250.00",
    "priceNum": 250,
    "sku": "HM-BRC-DNZ-YG-0013sil",
    "barcodes": [
      "HM-BRC-DNZ-YG-0013sil",
      "560764",
      "HMBRCDNZYG0013sil"
    ],
    "pitch": "Handcrafted, 925 Sterling Silver, 18K Gold Vermeil. Cubic Zirconia crystals. 6.5” with 2” extender for adjustable fit. Wear it solo as a protective amulet, or layer it to build your own curated ‘spiritual stack.’ Nazar Amulet, is an eye-shaped talisman designed to protect against the curse of the evil eye. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/560764/edit",
    "img": "https://images.momence.com/h/200431/product-image/c03799cd-33a0-42a2-b68f-cc03b48a5611.png"
  },
  {
    "id": 492684,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Eternity Spacer Charm-Clear (Yellow Gold)",
    "fullTitle": "House of Moda - Eternity Spacer Charm-Clear (Yellow Gold)",
    "price": "$28.00",
    "priceNum": 28,
    "sku": "HM-SPC-CLR-0045",
    "barcodes": [
      "HM-SPC-CLR-0045",
      "492684",
      "HMSPCCLR0045"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492684/edit",
    "img": "https://images.momence.com/h/200431/product-image/3dcfc690-480a-436e-9c1c-e27fd1fd50ca.png"
  },
  {
    "id": 492683,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Eternity Spacer Charm-Navy (Yellow Gold)",
    "fullTitle": "House of Moda - Eternity Spacer Charm-Navy (Yellow Gold)",
    "price": "$28.00",
    "priceNum": 28,
    "sku": "HM-SPC-NAV-0044",
    "barcodes": [
      "HM-SPC-NAV-0044",
      "492683",
      "HMSPCNAV0044"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492683/edit",
    "img": "https://images.momence.com/h/200431/product-image/99c83b38-907f-4e2a-af0c-27b660075a60.png"
  },
  {
    "id": 492671,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Ferris Wheel Charm- Light Pink YG",
    "fullTitle": "House of Moda - Ferris Wheel Charm- Light Pink YG",
    "price": "$154.00",
    "priceNum": 154,
    "sku": "HM-CHM-FRW-YG-0032",
    "barcodes": [
      "HM-CHM-FRW-YG-0032",
      "492671",
      "HMCHMFRWYG0032"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492671/edit",
    "img": "https://images.momence.com/h/200431/product-image/4cbeadd0-41ad-4072-a28a-05470dcf2052.png"
  },
  {
    "id": 492674,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Goz Charm (Yellow Gold)",
    "fullTitle": "House of Moda - Goz Charm (Yellow Gold)",
    "price": "$110.00",
    "priceNum": 110,
    "sku": "HM-CHM-GOZ-YG-0035",
    "barcodes": [
      "HM-CHM-GOZ-YG-0035",
      "492674",
      "HMCHMGOZYG0035"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492674/edit",
    "img": "https://images.momence.com/h/200431/product-image/8510d28b-dc98-4232-a622-97822e7c66a9.png"
  },
  {
    "id": 492689,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Halo Spacer Charm-Clear (Yellow Gold)",
    "fullTitle": "House of Moda - Halo Spacer Charm-Clear (Yellow Gold)",
    "price": "$43.00",
    "priceNum": 43,
    "sku": "HM-SPC-SOL-0050",
    "barcodes": [
      "HM-SPC-SOL-0050",
      "492689",
      "HMSPCSOL0050"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492689/edit",
    "img": "https://images.momence.com/h/200431/product-image/f6b1b9ff-acc3-4afe-be06-2f2bff9d7a59.png"
  },
  {
    "id": 492690,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Halo Spacer Charm-Lilac (Yellow Gold)",
    "fullTitle": "House of Moda - Halo Spacer Charm-Lilac (Yellow Gold)",
    "price": "$43.00",
    "priceNum": 43,
    "sku": "HM-SPC-HAL-CLR-0051",
    "barcodes": [
      "HM-SPC-HAL-CLR-0051",
      "492690",
      "HMSPCHALCLR0051"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492690/edit",
    "img": "https://images.momence.com/h/200431/product-image/a753b572-8d4e-4f3c-8e8a-6541963fabf6.jpeg"
  },
  {
    "id": 492696,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Hero Diamond Bracelet-Clear (Yellow Gold)",
    "fullTitle": "House of Moda - Hero Diamond Bracelet-Clear (Yellow Gold)",
    "price": "$78.00",
    "priceNum": 78,
    "sku": "HM-BRC-HER-0058",
    "barcodes": [
      "HM-BRC-HER-0058",
      "492696",
      "HMBRCHER0058"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492696/edit",
    "img": "https://images.momence.com/h/200431/product-image/24a6259c-9e16-4200-976c-2b130ff97f52.png"
  },
  {
    "id": 492673,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Inner Compass Charm- Clear",
    "fullTitle": "House of Moda - Inner Compass Charm- Clear",
    "price": "$121.00",
    "priceNum": 121,
    "sku": "HM-CHM-ICO-YG-0034",
    "barcodes": [
      "HM-CHM-ICO-YG-0034",
      "492673",
      "HMCHMICOYG0034"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 925 sterling silver / rhodium and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492673/edit",
    "img": "https://images.momence.com/h/200431/product-image/a75f7cb4-6921-47fc-ac1f-1906576bdbeb.png"
  },
  {
    "id": 492658,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Jennifer Earrings",
    "fullTitle": "House of Moda - Jennifer Earrings",
    "price": "$188.00",
    "priceNum": 188,
    "sku": "HM-HOP-JEN-YG-0019",
    "barcodes": [
      "HM-HOP-JEN-YG-0019",
      "492658",
      "HMHOPJENYG0019"
    ],
    "pitch": "Hand cut, handcrafted, & hollow. Lightweight so it's not a heavy hoop! 925 Sterling Silver, 18K Gold plated. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492658/edit",
    "img": "https://images.momence.com/h/200431/product-image/23ccecec-acea-4e86-9eee-e3874e455a91.png"
  },
  {
    "id": 492647,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Jumbo Dougie Earrings",
    "fullTitle": "House of Moda - Jumbo Dougie Earrings",
    "price": "$100.00",
    "priceNum": 100,
    "sku": "HM-HUG-DOU-RH-0008",
    "barcodes": [
      "HM-HUG-DOU-RH-0008",
      "492647",
      "HMHUGDOURH0008"
    ],
    "pitch": "925 silver stamped. Beveled Edge for a modern twist. Lead and Nickel free posts. Great for second, third hole hoops. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492647/edit",
    "img": "https://images.momence.com/h/200431/product-image/8f559349-a921-4f08-aaa8-3a6f5f23e3f7.png"
  },
  {
    "id": 492642,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Justin Gold Earrings",
    "fullTitle": "House of Moda - Justin Gold Earrings",
    "price": "$110.00",
    "priceNum": 110,
    "sku": "HM-HOP-JUS-YG-0003",
    "barcodes": [
      "HM-HOP-JUS-YG-0003",
      "492642",
      "HMHOPJUSYG0003"
    ],
    "pitch": "18 K gold Plated. 0.5\" diameter. Hollow & Lightweight. Perfect Everyday piece. Great Layering Earring for anyone that has a double piercing. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492642/edit",
    "img": "https://images.momence.com/h/200431/product-image/c0c8233c-dfa4-4e0d-9e33-0eb967ff0f7e.jpeg"
  },
  {
    "id": 492643,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Justin Silver Earrings",
    "fullTitle": "House of Moda - Justin Silver Earrings",
    "price": "$110.00",
    "priceNum": 110,
    "sku": "HM-HOP-JUS-RH-0004",
    "barcodes": [
      "HM-HOP-JUS-RH-0004",
      "492643",
      "HMHOPJUSRH0004"
    ],
    "pitch": "925 Sterling Silver. 0.5\" diameter. Hollow & Lightweight. Perfect Everyday piece. Great Layering Earring for anyone that has a double piercing. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492643/edit",
    "img": "https://images.momence.com/h/200431/product-image/e37853d2-264e-4e80-a0ba-b336b15d031a.jpeg"
  },
  {
    "id": 492678,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Little Eye Charm-Clear/Navy (Yellow Gold)",
    "fullTitle": "House of Moda - Little Eye Charm-Clear/Navy (Yellow Gold)",
    "price": "$86.00",
    "priceNum": 86,
    "sku": "HM-CHM-EYE-CLR-0039",
    "barcodes": [
      "HM-CHM-EYE-CLR-0039",
      "492678",
      "HMCHMEYECLR0039"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492678/edit",
    "img": "https://images.momence.com/h/200431/product-image/58bc9c4e-92c7-433b-a3c5-6462df720f23.png"
  },
  {
    "id": 492650,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Long Link Bracelet (Rhodium / Silver)",
    "fullTitle": "House of Moda - Long Link Bracelet (Rhodium / Silver)",
    "price": "$109.99",
    "priceNum": 109.99,
    "sku": "HM-CHN-LNK-RH-0011",
    "barcodes": [
      "HM-CHN-LNK-RH-0011",
      "492650",
      "HMCHNLNKRH0011"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 925 sterling silver / rhodium and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492650/edit",
    "img": "https://images.momence.com/h/200431/product-image/44239ec4-4092-44ff-9424-e73071f1bac6.png"
  },
  {
    "id": 492649,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Long Link Bracelet (Yellow Gold)",
    "fullTitle": "House of Moda - Long Link Bracelet (Yellow Gold)",
    "price": "$109.99",
    "priceNum": 109.99,
    "sku": "HM-CHN-LNK-YG-0010",
    "barcodes": [
      "HM-CHN-LNK-YG-0010",
      "492649",
      "HMCHNLNKYG0010"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492649/edit",
    "img": "https://images.momence.com/h/200431/product-image/fe114982-9ae8-4ae1-9ad0-153cf4331c81.png"
  },
  {
    "id": 492646,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Micro Dougie Earrings",
    "fullTitle": "House of Moda - Micro Dougie Earrings",
    "price": "$85.00",
    "priceNum": 85,
    "sku": "HM-HUG-DUG-RH-0007",
    "barcodes": [
      "HM-HUG-DUG-RH-0007",
      "492646",
      "HMHUGDUGRH0007"
    ],
    "pitch": "925 Silver stamped. Same as plain micro but with beveled edge. Lead and Nickel free posts. For sensitive skin. Click closure. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492646/edit",
    "img": "https://images.momence.com/h/200431/product-image/5fee466f-fb8f-42ea-a472-b627c4a781f5.png"
  },
  {
    "id": 492656,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Micro Earrings",
    "fullTitle": "House of Moda - Micro Earrings",
    "price": "$100.00",
    "priceNum": 100,
    "sku": "HM-HUG-MIC-YG-0017",
    "barcodes": [
      "HM-HUG-MIC-YG-0017",
      "492656",
      "HMHUGMICYG0017"
    ],
    "pitch": "18k gold vermeil, Nickel free posts for sensitive skin, encrusted with crystals (unknown on site), click closure, perfect for gifting. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492656/edit",
    "img": "https://images.momence.com/h/200431/product-image/db13e11e-56a2-4f65-8c44-53f4e6b4bb04.png"
  },
  {
    "id": 492698,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Micro Eternity 8 Ring",
    "fullTitle": "House of Moda - Micro Eternity 8 Ring",
    "price": "$100.00",
    "priceNum": 100,
    "sku": "HM-RNG-MET-8-0060",
    "barcodes": [
      "HM-RNG-MET-8-0060",
      "492698",
      "HMRNGMET80060"
    ],
    "pitch": "1mm CZ stones. 18K Gold PVD Stainless steel. Waterproof. Elegance & wearability. Thin and stackable. Eternity symbolizes \"forever\". Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492698/edit",
    "img": "https://images.momence.com/h/200431/product-image/b779a869-3c93-4999-a99c-fd6e61bed327.png"
  },
  {
    "id": 492679,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Mini Eye Charm-Clear (Yellow Gold)",
    "fullTitle": "House of Moda - Mini Eye Charm-Clear (Yellow Gold)",
    "price": "$86.00",
    "priceNum": 86,
    "sku": "HM-CHM-MIN-CLR-0040",
    "barcodes": [
      "HM-CHM-MIN-CLR-0040",
      "492679",
      "HMCHMMINCLR0040"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492679/edit",
    "img": "https://images.momence.com/h/200431/product-image/b8d0a1ad-686e-49bb-aa67-f22de2c12ec5.png"
  },
  {
    "id": 492682,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Mini Moon Charm-Clear (Yellow Gold)",
    "fullTitle": "House of Moda - Mini Moon Charm-Clear (Yellow Gold)",
    "price": "$86.00",
    "priceNum": 86,
    "sku": "HM-CHM-MOON-CLR-0043",
    "barcodes": [
      "HM-CHM-MOON-CLR-0043",
      "492682",
      "HMCHMMOONCLR0043"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492682/edit",
    "img": "https://images.momence.com/h/200431/product-image/bd2f3161-14e9-4b00-b12f-ca4840958c45.png"
  },
  {
    "id": 492648,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Mini Swarovski Bracelet- Clear YG",
    "fullTitle": "House of Moda - Mini Swarovski Bracelet- Clear YG",
    "price": "$109.99",
    "priceNum": 109.99,
    "sku": "HM-BRC-SWR-0009",
    "barcodes": [
      "HM-BRC-SWR-0009",
      "492648",
      "HMBRCSWR0009"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492648/edit",
    "img": "https://images.momence.com/h/200431/product-image/c2c1c348-64fe-42f2-882a-787c2c15cc70.png"
  },
  {
    "id": 492708,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Olivia 8 Ring",
    "fullTitle": "House of Moda - Olivia 8 Ring",
    "price": "$90.00",
    "priceNum": 90,
    "sku": "HM-RNG-OLV-8-0070",
    "barcodes": [
      "HM-RNG-OLV-8-0070",
      "492708",
      "HMRNGOLV80070"
    ],
    "pitch": "18K PVD Gold Plated Stainless Steel. Waterproof. Modern Take on Vintage style. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492708/edit",
    "img": "https://images.momence.com/h/200431/product-image/ef231c4d-8223-495d-ac8d-1cc4f251089b.png"
  },
  {
    "id": 492645,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Plain micro Silver Earrings",
    "fullTitle": "House of Moda - Plain micro Silver Earrings",
    "price": "$85.00",
    "priceNum": 85,
    "sku": "HM-HUG-PMC-RH-0006",
    "barcodes": [
      "HM-HUG-PMC-RH-0006",
      "492645",
      "HMHUGPMCRH0006"
    ],
    "pitch": "925 Silver Stamped. Lead and Nickel free posts. For sensitive skin. Click closure ensures no one to ever lose one. Simple & Sweet. Kismet Charms can be added on as a customization. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492645/edit",
    "img": "https://images.momence.com/h/200431/product-image/2aca0d7d-4376-4f8b-8c2c-ff0e9dc0756b.png"
  },
  {
    "id": 492644,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Plain micro gold Earrings",
    "fullTitle": "House of Moda - Plain micro gold Earrings",
    "price": "$85.00",
    "priceNum": 85,
    "sku": "HM-HUG-PMC-YG-0005",
    "barcodes": [
      "HM-HUG-PMC-YG-0005",
      "492644",
      "HMHUGPMCYG0005"
    ],
    "pitch": "18K Gold Vermeil, Lead and Nickel free posts. For sensitive skin. Click closure ensures no one to ever lose one. Simple & Sweet. Kismet Charms can be added on as a customization. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492644/edit",
    "img": "https://images.momence.com/h/200431/product-image/1ed86ddd-d69c-4c48-acf8-bd7aa3f493c2.png"
  },
  {
    "id": 492640,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Prism Gold Earrings",
    "fullTitle": "House of Moda - Prism Gold Earrings",
    "price": "$200.00",
    "priceNum": 200,
    "sku": "HM-HOP-PRM-YG-0001",
    "barcodes": [
      "HM-HOP-PRM-YG-0001",
      "492640",
      "HMHOPPRMYG0001"
    ],
    "pitch": "18 k gold plated. Versatile for day to night looks. Geometric design. The designers fave earring. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492640/edit",
    "img": "https://images.momence.com/h/200431/product-image/9e5171b5-17a0-46ed-b44a-cb8dfbb99176.png"
  },
  {
    "id": 492641,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Prism Silver Earrings",
    "fullTitle": "House of Moda - Prism Silver Earrings",
    "price": "$200.00",
    "priceNum": 200,
    "sku": "HM-HOP-PRM-RH-0002",
    "barcodes": [
      "HM-HOP-PRM-RH-0002",
      "492641",
      "HMHOPPRMRH0002"
    ],
    "pitch": "925 Silver. Versatile for day to night looks. Geometric design. Secure click closure. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492641/edit",
    "img": "https://images.momence.com/h/200431/product-image/60005ace-f975-4ebe-83d5-41e3a01e77d0.png"
  },
  {
    "id": 492681,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Racket Charm (Yellow Gold)",
    "fullTitle": "House of Moda - Racket Charm (Yellow Gold)",
    "price": "$99.00",
    "priceNum": 99,
    "sku": "HM-CHM-RAC-0042",
    "barcodes": [
      "HM-CHM-RAC-0042",
      "492681",
      "HMCHMRAC0042"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492681/edit",
    "img": "https://images.momence.com/h/200431/product-image/3eb22d3c-d12b-47b0-bb8c-f200a46cf076.png"
  },
  {
    "id": 492680,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Set in Clover Charm-Clear (Yellow Gold)",
    "fullTitle": "House of Moda - Set in Clover Charm-Clear (Yellow Gold)",
    "price": "$111.00",
    "priceNum": 111,
    "sku": "HM-CHM-CLO-CLR-0041",
    "barcodes": [
      "HM-CHM-CLO-CLR-0041",
      "492680",
      "HMCHMCLOCLR0041"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492680/edit",
    "img": "https://images.momence.com/h/200431/product-image/3d372e28-e9e6-43ec-b089-bdf808a459e3.png"
  },
  {
    "id": 492663,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Signature Tennis Bracelet- Clear (Rhodium / Silver)",
    "fullTitle": "House of Moda - Signature Tennis Bracelet- Clear (Rhodium / Silver)",
    "price": "$221.00",
    "priceNum": 221,
    "sku": "HM-BRC-TEN-RH-0024",
    "barcodes": [
      "HM-BRC-TEN-RH-0024",
      "492663",
      "HMBRCTENRH0024"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 925 sterling silver / rhodium and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492663/edit",
    "img": "https://images.momence.com/h/200431/product-image/5c96bed1-cac6-4276-bf61-98c9ffbd8876.png"
  },
  {
    "id": 492662,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Signature Tennis Bracelet- Clear (Yellow Gold)",
    "fullTitle": "House of Moda - Signature Tennis Bracelet- Clear (Yellow Gold)",
    "price": "$225.00",
    "priceNum": 225,
    "sku": "HM-BRC-TEN-YG-0023",
    "barcodes": [
      "HM-BRC-TEN-YG-0023",
      "492662",
      "HMBRCTENYG0023"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492662/edit",
    "img": "https://images.momence.com/h/200431/product-image/a6e37c12-6e7e-4838-b871-adc1a2034784.png"
  },
  {
    "id": 492688,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Solid Spacer Charm (Yellow Gold)",
    "fullTitle": "House of Moda - Solid Spacer Charm (Yellow Gold)",
    "price": "$20.00",
    "priceNum": 20,
    "sku": "HM-SPC-SOL-0049",
    "barcodes": [
      "HM-SPC-SOL-0049",
      "492688",
      "HMSPCSOL0049"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492688/edit",
    "img": "https://images.momence.com/h/200431/product-image/beb8312f-eb5d-4196-954a-a323157e74cd.png"
  },
  {
    "id": 492659,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Spiked Gold Earrings",
    "fullTitle": "House of Moda - Spiked Gold Earrings",
    "price": "$166.00",
    "priceNum": 166,
    "sku": "HM-HUG-SPI-YG-0020",
    "barcodes": [
      "HM-HUG-SPI-YG-0020",
      "492659",
      "HMHUGSPIYG0020"
    ],
    "pitch": "18K Gold Vermeil, Lead and Nickel free posts. For sensitive skin. Fun & Bold. Click Closure (nice and secure!). Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492659/edit",
    "img": "https://images.momence.com/h/200431/product-image/01c056a3-47b2-4be3-bcf7-3931b4087e89.png"
  },
  {
    "id": 492660,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Spiked Silver Earrings",
    "fullTitle": "House of Moda - Spiked Silver Earrings",
    "price": "$166.00",
    "priceNum": 166,
    "sku": "HM-HUG-SPI-RH-0021",
    "barcodes": [
      "HM-HUG-SPI-RH-0021",
      "492660",
      "HMHUGSPIRH0021"
    ],
    "pitch": "925 Silver (Stamped), Lead and Nickel free posts. For sensitive skin. Fun & Bold. Click Closure (nice and secure!). Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492660/edit",
    "img": "https://images.momence.com/h/200431/product-image/9d1b263f-164a-4cd4-b249-7b7b415d200b.png"
  },
  {
    "id": 492677,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Sunny Eye Charm-Clear/Navy (Yellow Gold)",
    "fullTitle": "House of Moda - Sunny Eye Charm-Clear/Navy (Yellow Gold)",
    "price": "$124.00",
    "priceNum": 124,
    "sku": "HM-CHM-EYE-NVY-0038",
    "barcodes": [
      "HM-CHM-EYE-NVY-0038",
      "492677",
      "HMCHMEYENVY0038"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492677/edit",
    "img": "https://images.momence.com/h/200431/product-image/5dd715b8-0111-4de6-a7fe-a1802d81738c.png"
  },
  {
    "id": 492661,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Thick Link Chain Bracelet (Yellow Gold)",
    "fullTitle": "House of Moda - Thick Link Chain Bracelet (Yellow Gold)",
    "price": "$177.00",
    "priceNum": 177,
    "sku": "HM-BRC-THK-YG-0022",
    "barcodes": [
      "HM-BRC-THK-YG-0022",
      "492661",
      "HMBRCTHKYG0022"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492661/edit",
    "img": "https://images.momence.com/h/200431/product-image/413e7d7d-8fda-4773-9035-60d6186ac65e.png"
  },
  {
    "id": 492710,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "Willow 7 Ring",
    "fullTitle": "House of Moda - Willow 7 Ring",
    "price": "$90.00",
    "priceNum": 90,
    "sku": "HM-RNG-WIL-7-0072",
    "barcodes": [
      "HM-RNG-WIL-7-0072",
      "492710",
      "HMRNGWIL70072"
    ],
    "pitch": "Waterproof, 18K PVD Gold Plated Stainless Steel. Gorgeous Jewel tones, Fun Statement Piece. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492710/edit",
    "img": "https://images.momence.com/h/200431/product-image/3ae6f711-6c1a-4923-81aa-f2d515af8979.png"
  },
  {
    "id": 492697,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "size 7 Micro Eternity Ring-Clear (Rhodium / Silver)",
    "fullTitle": "House of Moda - size 7 Micro Eternity Ring-Clear (Rhodium / Silver)",
    "price": "$99.99",
    "priceNum": 99.99,
    "sku": "HM-RNG-MET-7-0059",
    "barcodes": [
      "HM-RNG-MET-7-0059",
      "492697",
      "HMRNGMET70059"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 925 sterling silver / rhodium and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492697/edit",
    "img": "https://images.momence.com/h/200431/product-image/32565aaa-6619-4b8a-80c1-de5670f6b544.png"
  },
  {
    "id": 492707,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "size 7 Olivia Ring-Clear (Yellow Gold)",
    "fullTitle": "House of Moda - size 7 Olivia Ring-Clear (Yellow Gold)",
    "price": "$89.99",
    "priceNum": 89.99,
    "sku": "HM-RNG-OLV-7-0069",
    "barcodes": [
      "HM-RNG-OLV-7-0069",
      "492707",
      "HMRNGOLV70069"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492707/edit",
    "img": "https://images.momence.com/h/200431/product-image/97969a2a-4b53-4fdb-91b6-d817ceda6c97.png"
  },
  {
    "id": 492711,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "House of Moda",
    "name": "size 8 Willow Ring-Multi (Yellow Gold)",
    "fullTitle": "House of Moda - size 8 Willow Ring-Multi (Yellow Gold)",
    "price": "$89.99",
    "priceNum": 89.99,
    "sku": "HM-RNG-WIL-8-0073",
    "barcodes": [
      "HM-RNG-WIL-8-0073",
      "492711",
      "HMRNGWIL80073"
    ],
    "pitch": "Artisan handcrafted jewelry piece featuring premium 14k gold vermeil and brilliant crystal embellishments. Designed for effortless everyday luxury and elevated personal styling. Handcrafted by Canadian artisan House of Moda for elegant daily wear and versatile layering.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492711/edit",
    "img": "https://images.momence.com/h/200431/product-image/8dbc4c34-c30d-4c7d-868c-c91ed9ffa0df.png"
  },
  {
    "id": 492500,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "I Love Books and Bows",
    "name": "Blind Date With an Adult Coloring Book",
    "fullTitle": "I Love Books and Bows - Blind Date With an Adult Coloring Book",
    "price": "$34.99",
    "priceNum": 34.99,
    "sku": "IL-BOO-COL-0001",
    "barcodes": [
      "IL-BOO-COL-0001",
      "492500",
      "ILBOOCOL0001"
    ],
    "pitch": "Delightful mystery package wrapped in vintage butcher kraft paper, secured with jute twine and a wax seal, stamped with intriguing thematic clues.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492500/edit",
    "img": "https://images.momence.com/h/200431/product-image/44e0540d-78f5-4341-afed-0b5735b9a736.jpg"
  },
  {
    "id": 492638,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Amelia (Gold)",
    "fullTitle": "Pig & Hen - Amelia (Gold)",
    "price": "$82.00",
    "priceNum": 82,
    "sku": "PH-AML-GLD-0041",
    "barcodes": [
      "PH-AML-GLD-0041",
      "492638",
      "PHAMLGLD0041"
    ],
    "pitch": "Stainless Steel. Inspired by adventure and independence Represents strength, persistence, and breaking barriers. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492638/edit",
    "img": "https://images.momence.com/h/200431/product-image/78df9aa4-4e36-4234-8061-9580dbc3d75e.png"
  },
  {
    "id": 492639,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Amelia (Silver)",
    "fullTitle": "Pig & Hen - Amelia (Silver)",
    "price": "$82.00",
    "priceNum": 82,
    "sku": "PH-AML-SLV-0042",
    "barcodes": [
      "PH-AML-SLV-0042",
      "492639",
      "PHAMLSLV0042"
    ],
    "pitch": "Stainless Steel. Inspired by adventure and independence Represents strength, persistence, and breaking barriers. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492639/edit",
    "img": "https://images.momence.com/h/200431/product-image/4eb860fb-13a1-46ce-ab8b-1eefe1222a51.png"
  },
  {
    "id": 539093,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Boxchain Chain Necklace (Black, 55cm)",
    "fullTitle": "Pig & Hen - Boxchain Chain Necklace (Black, 55cm)",
    "price": "$130.00",
    "priceNum": 130,
    "sku": "BoChaNeBla55",
    "barcodes": [
      "BoChaNeBla55",
      "539093"
    ],
    "pitch": "Stainless Steel. Timeless + Elegant. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/539093/edit",
    "img": "https://images.momence.com/h/200431/product-image/85182f49-9689-4a68-ab09-4ad343c239e4.png"
  },
  {
    "id": 539095,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Boxchain Chain Necklace (Gold, 55cm)",
    "fullTitle": "Pig & Hen - Boxchain Chain Necklace (Gold, 55cm)",
    "price": "$130.00",
    "priceNum": 130,
    "sku": "BoChaNeGo55",
    "barcodes": [
      "BoChaNeGo55",
      "539095"
    ],
    "pitch": "Stainless Steel. Timeless + Elegant. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/539095/edit",
    "img": "https://images.momence.com/h/200431/product-image/50015442-5aa3-4849-b431-812279791794.png"
  },
  {
    "id": 539094,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Boxchain Chain Necklace (Silver, 55cm)",
    "fullTitle": "Pig & Hen - Boxchain Chain Necklace (Silver, 55cm)",
    "price": "$130.00",
    "priceNum": 130,
    "sku": "BoChaNeSi55",
    "barcodes": [
      "BoChaNeSi55",
      "539094"
    ],
    "pitch": "Stainless Steel. Timeless + Elegant. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/539094/edit",
    "img": "https://images.momence.com/h/200431/product-image/1202d62c-89e5-42c0-93b5-c7ec08ce6124.png"
  },
  {
    "id": 492600,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Catena Foxtail (Army & Vintage, M)",
    "fullTitle": "Pig & Hen - Catena Foxtail (Army & Vintage, M)",
    "price": "$179.00",
    "priceNum": 179,
    "sku": "CaFoArmy|ViL",
    "barcodes": [
      "CaFoArmy|ViL",
      "492600",
      "CaFoArmyViL"
    ],
    "pitch": "Slate Gray | Bronze, M 18cm) Crafted from premium stainless steel with our signature nautical rope woven into the foxtail pattern, it perfectly balances strength, style and craftsmanship. Waterproof and wear resistant, made to accompany for years to come. Color: Black | Black Rope width: 5 mm Rope type: Chain Shackle color: Black Shackle size: 8 mm Shackle type: T- shackle Material type: 316L Stainless Steel vintage | Marine rope About Pig & Hen Pig & Hen is a Dutch brand that stands for adventure, style and craftsmanship. Every piece of jewelry is handcrafted and rooted in Amsterdam, where our designs and stories come to life. Our name and inspiration date back to the 17th century, when Dutch sailors tattooed a pig and a hen on their bodies as a symbol of protection and good fortune. Today, we carry that tradition forward through our jewelry, where the same symbol of strength and protection is subtly embedded in every design. Our collections combine authentic heritage with contemporary design and durable materials such as marine rope, stainless steel, gemstones and precious metals of the highest quality. Built to last, our jewelry is waterproof, wear-resistant and made to accompany you for years to come. For over twelve years, people around the world have discovered Pig & Hen and share our passion for quality, authenticity and timeless design. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492600/edit",
    "img": "https://images.momence.com/h/200431/product-image/c192e662-8220-4d5c-a220-b4504e9ec822.png"
  },
  {
    "id": 539024,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Catena Foxtail (Army & Vintage, M/L)",
    "fullTitle": "Pig & Hen - Catena Foxtail (Army & Vintage, M/L)",
    "price": "$179.00",
    "priceNum": 179,
    "sku": "CaFoArmy|ViM/L",
    "barcodes": [
      "CaFoArmy|ViM/L",
      "539024",
      "CaFoArmyViML"
    ],
    "pitch": "Slate Gray | Bronze, M 18cm) Crafted from premium stainless steel with our signature nautical rope woven into the foxtail pattern, it perfectly balances strength, style and craftsmanship. Waterproof and wear resistant, made to accompany for years to come. Color: Black | Black Rope width: 5 mm Rope type: Chain Shackle color: Black Shackle size: 8 mm Shackle type: T- shackle Material type: 316L Stainless Steel vintage | Marine rope About Pig & Hen Pig & Hen is a Dutch brand that stands for adventure, style and craftsmanship. Every piece of jewelry is handcrafted and rooted in Amsterdam, where our designs and stories come to life. Our name and inspiration date back to the 17th century, when Dutch sailors tattooed a pig and a hen on their bodies as a symbol of protection and good fortune. Today, we carry that tradition forward through our jewelry, where the same symbol of strength and protection is subtly embedded in every design. Our collections combine authentic heritage with contemporary design and durable materials such as marine rope, stainless steel, gemstones and precious metals of the highest quality. Built to last, our jewelry is waterproof, wear-resistant and made to accompany you for years to come. For over twelve years, people around the world have discovered Pig & Hen and share our passion for quality, authenticity and timeless design. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/539024/edit",
    "img": "https://images.momence.com/h/200431/product-image/bba48464-85d0-4fcb-a21a-7dd04a6b90eb.jpg"
  },
  {
    "id": 492599,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Catena Foxtail (Black & Black, L)",
    "fullTitle": "Pig & Hen - Catena Foxtail (Black & Black, L)",
    "price": "$179.00",
    "priceNum": 179,
    "sku": "CaFoBla|BlaL",
    "barcodes": [
      "CaFoBla|BlaL",
      "492599",
      "CaFoBlaBlaL"
    ],
    "pitch": "Crafted from premium stainless steel with our signature nautical rope woven into the foxtail pattern, it perfectly balances strength, style and craftsmanship. Waterproof and wear resistant, made to accompany for years to come. Color: Black | Black Rope width: 5 mm Rope type: Chain Shackle color: Black Shackle size: 8 mm Shackle type: T- shackle Material type: 316L Stainless Steel Black PVD | Marine rope About Pig & Hen Pig & Hen is a Dutch brand that stands for adventure, style and craftsmanship. Every piece of jewelry is handcrafted and rooted in Amsterdam, where our designs and stories come to life. Our name and inspiration date back to the 17th century, when Dutch sailors tattooed a pig and a hen on their bodies as a symbol of protection and good fortune. Today, we carry that tradition forward through our jewelry, where the same symbol of strength and protection is subtly embedded in every design. Our collections combine authentic heritage with contemporary design and durable materials such as marine rope, stainless steel, gemstones and precious metals of the highest quality. Built to last, our jewelry is waterproof, wear-resistant and made to accompany you for years to come. For over twelve years, people around the world have discovered Pig & Hen and share our passion for quality, authenticity and timeless design. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492599/edit",
    "img": "https://images.momence.com/h/200431/product-image/7b6af529-f0c1-421e-a511-735b4b9796ae.png"
  },
  {
    "id": 539031,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Catena Foxtail (Black & Black, M)",
    "fullTitle": "Pig & Hen - Catena Foxtail (Black & Black, M)",
    "price": "$179.00",
    "priceNum": 179,
    "sku": "CaFoBla|BlaM",
    "barcodes": [
      "CaFoBla|BlaM",
      "539031",
      "CaFoBlaBlaM"
    ],
    "pitch": "Crafted from premium stainless steel with our signature nautical rope woven into the foxtail pattern, it perfectly balances strength, style and craftsmanship. Waterproof and wear resistant, made to accompany for years to come. Color: Black | Black Rope width: 5 mm Rope type: Chain Shackle color: Black Shackle size: 8 mm Shackle type: T- shackle Material type: 316L Stainless Steel Black PVD | Marine rope About Pig & Hen Pig & Hen is a Dutch brand that stands for adventure, style and craftsmanship. Every piece of jewelry is handcrafted and rooted in Amsterdam, where our designs and stories come to life. Our name and inspiration date back to the 17th century, when Dutch sailors tattooed a pig and a hen on their bodies as a symbol of protection and good fortune. Today, we carry that tradition forward through our jewelry, where the same symbol of strength and protection is subtly embedded in every design. Our collections combine authentic heritage with contemporary design and durable materials such as marine rope, stainless steel, gemstones and precious metals of the highest quality. Built to last, our jewelry is waterproof, wear-resistant and made to accompany you for years to come. For over twelve years, people around the world have discovered Pig & Hen and share our passion for quality, authenticity and timeless design. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/539031/edit",
    "img": "https://images.momence.com/h/200431/product-image/8de731f9-ddc3-4e41-b8c8-c2a36e96495f.png"
  },
  {
    "id": 539030,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Catena Foxtail (Black & Black, M/L)",
    "fullTitle": "Pig & Hen - Catena Foxtail (Black & Black, M/L)",
    "price": "$179.00",
    "priceNum": 179,
    "sku": "CaFoBla|BlaM/L",
    "barcodes": [
      "CaFoBla|BlaM/L",
      "539030",
      "CaFoBlaBlaML"
    ],
    "pitch": "Crafted from premium stainless steel with our signature nautical rope woven into the foxtail pattern, it perfectly balances strength, style and craftsmanship. Waterproof and wear resistant, made to accompany for years to come. Color: Black | Black Rope width: 5 mm Rope type: Chain Shackle color: Black Shackle size: 8 mm Shackle type: T- shackle Material type: 316L Stainless Steel Black PVD | Marine rope About Pig & Hen Pig & Hen is a Dutch brand that stands for adventure, style and craftsmanship. Every piece of jewelry is handcrafted and rooted in Amsterdam, where our designs and stories come to life. Our name and inspiration date back to the 17th century, when Dutch sailors tattooed a pig and a hen on their bodies as a symbol of protection and good fortune. Today, we carry that tradition forward through our jewelry, where the same symbol of strength and protection is subtly embedded in every design. Our collections combine authentic heritage with contemporary design and durable materials such as marine rope, stainless steel, gemstones and precious metals of the highest quality. Built to last, our jewelry is waterproof, wear-resistant and made to accompany you for years to come. For over twelve years, people around the world have discovered Pig & Hen and share our passion for quality, authenticity and timeless design. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/539030/edit",
    "img": "https://images.momence.com/h/200431/product-image/8e77c38f-955e-4339-a1fb-8cb5ae209031.png"
  },
  {
    "id": 492598,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Catena Foxtail (Navy & Silver, L)",
    "fullTitle": "Pig & Hen - Catena Foxtail (Navy & Silver, L)",
    "price": "$179.00",
    "priceNum": 179,
    "sku": "CaFoNa|SiL",
    "barcodes": [
      "CaFoNa|SiL",
      "492598",
      "CaFoNaSiL"
    ],
    "pitch": "Crafted from premium stainless steel with our signature nautical rope woven into the foxtail pattern, it perfectly balances strength, style and craftsmanship. Waterproof and wear resistant, made to accompany for years to come. Color: Black | Black Rope width: 5 mm Rope type: Chain Shackle color: silver Shackle size: 8 mm Shackle type: T- shackle Material type: 316L Stainless Steel vintage | Marine rope About Pig & Hen Pig & Hen is a Dutch brand that stands for adventure, style and craftsmanship. Every piece of jewelry is handcrafted and rooted in Amsterdam, where our designs and stories come to life. Our name and inspiration date back to the 17th century, when Dutch sailors tattooed a pig and a hen on their bodies as a symbol of protection and good fortune. Today, we carry that tradition forward through our jewelry, where the same symbol of strength and protection is subtly embedded in every design. Our collections combine authentic heritage with contemporary design and durable materials such as marine rope, stainless steel, gemstones and precious metals of the highest quality. Built to last, our jewelry is waterproof, wear-resistant and made to accompany you for years to come. For over twelve years, people around the world have discovered Pig & Hen and share our passion for quality, authenticity and timeless design. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492598/edit",
    "img": "https://images.momence.com/h/200431/product-image/2d0f77ac-c727-406b-8771-15de54e5a458.png"
  },
  {
    "id": 550212,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Catena Foxtail (Navy & Silver, M)",
    "fullTitle": "Pig & Hen - Catena Foxtail (Navy & Silver, M)",
    "price": "$179.00",
    "priceNum": 179,
    "sku": "PiHeCaFo(Navy|SiM)",
    "barcodes": [
      "PiHeCaFo(Navy|SiM)",
      "550212",
      "PiHeCaFoNavySiM"
    ],
    "pitch": "Crafted from premium stainless steel with our signature nautical rope woven into the foxtail pattern, it perfectly balances strength, style and craftsmanship. Waterproof and wear resistant, made to accompany for years to come. Color: Black | Black Rope width: 5 mm Rope type: Chain Shackle color: silver Shackle size: 8 mm Shackle type: T- shackle Material type: 316L Stainless Steel vintage | Marine rope About Pig & Hen Pig & Hen is a Dutch brand that stands for adventure, style and craftsmanship. Every piece of jewelry is handcrafted and rooted in Amsterdam, where our designs and stories come to life. Our name and inspiration date back to the 17th century, when Dutch sailors tattooed a pig and a hen on their bodies as a symbol of protection and good fortune. Today, we carry that tradition forward through our jewelry, where the same symbol of strength and protection is subtly embedded in every design. Our collections combine authentic heritage with contemporary design and durable materials such as marine rope, stainless steel, gemstones and precious metals of the highest quality. Built to last, our jewelry is waterproof, wear-resistant and made to accompany you for years to come. For over twelve years, people around the world have discovered Pig & Hen and share our passion for quality, authenticity and timeless design. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/550212/edit",
    "img": "https://images.momence.com/h/200431/product-image/220a8937-3c37-46f7-a4d9-c23aadbcfacd.png"
  },
  {
    "id": 539029,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Catena Foxtail (Navy & Silver, M/L)",
    "fullTitle": "Pig & Hen - Catena Foxtail (Navy & Silver, M/L)",
    "price": "$179.00",
    "priceNum": 179,
    "sku": "CaFoNa|SiM/L",
    "barcodes": [
      "CaFoNa|SiM/L",
      "539029",
      "CaFoNaSiML"
    ],
    "pitch": "Crafted from premium stainless steel with our signature nautical rope woven into the foxtail pattern, it perfectly balances strength, style and craftsmanship. Waterproof and wear resistant, made to accompany for years to come. Color: Black | Black Rope width: 5 mm Rope type: Chain Shackle color: silver Shackle size: 8 mm Shackle type: T- shackle Material type: 316L Stainless Steel vintage | Marine rope About Pig & Hen Pig & Hen is a Dutch brand that stands for adventure, style and craftsmanship. Every piece of jewelry is handcrafted and rooted in Amsterdam, where our designs and stories come to life. Our name and inspiration date back to the 17th century, when Dutch sailors tattooed a pig and a hen on their bodies as a symbol of protection and good fortune. Today, we carry that tradition forward through our jewelry, where the same symbol of strength and protection is subtly embedded in every design. Our collections combine authentic heritage with contemporary design and durable materials such as marine rope, stainless steel, gemstones and precious metals of the highest quality. Built to last, our jewelry is waterproof, wear-resistant and made to accompany you for years to come. For over twelve years, people around the world have discovered Pig & Hen and share our passion for quality, authenticity and timeless design. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/539029/edit",
    "img": "https://images.momence.com/h/200431/product-image/83d3333b-f996-4e1c-80cb-d6487b8f8571.png"
  },
  {
    "id": 492601,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Catena Foxtail (Slate Gray & Bronze, L)",
    "fullTitle": "Pig & Hen - Catena Foxtail (Slate Gray & Bronze, L)",
    "price": "$179.00",
    "priceNum": 179,
    "sku": "CaFoSlaGra|BroL",
    "barcodes": [
      "CaFoSlaGra|BroL",
      "492601",
      "CaFoSlaGraBroL"
    ],
    "pitch": "Slate Gray | Bronze, M 18cm) Crafted from premium stainless steel with our signature nautical rope woven into the foxtail pattern, it perfectly balances strength, style and craftsmanship. Waterproof and wear resistant, made to accompany for years to come. Color: Black | Black Rope width: 5 mm Rope type: Chain Shackle color: Black Shackle size: 8 mm Shackle type: T- shackle Material type: 316L Stainless Steel Bronze | Marine rope About Pig & Hen Pig & Hen is a Dutch brand that stands for adventure, style and craftsmanship. Every piece of jewelry is handcrafted and rooted in Amsterdam, where our designs and stories come to life. Our name and inspiration date back to the 17th century, when Dutch sailors tattooed a pig and a hen on their bodies as a symbol of protection and good fortune. Today, we carry that tradition forward through our jewelry, where the same symbol of strength and protection is subtly embedded in every design. Our collections combine authentic heritage with contemporary design and durable materials such as marine rope, stainless steel, gemstones and precious metals of the highest quality. Built to last, our jewelry is waterproof, wear-resistant and made to accompany you for years to come. For over twelve years, people around the world have discovered Pig & Hen and share our passion for quality, authenticity and timeless design. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492601/edit",
    "img": "https://images.momence.com/h/200431/product-image/d62569ad-ec0f-4898-9549-a3816edf0016.png"
  },
  {
    "id": 539028,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Catena Foxtail (Slate Gray & Bronze, M)",
    "fullTitle": "Pig & Hen - Catena Foxtail (Slate Gray & Bronze, M)",
    "price": "$179.00",
    "priceNum": 179,
    "sku": "CaFoSlaGra|BroM",
    "barcodes": [
      "CaFoSlaGra|BroM",
      "539028",
      "CaFoSlaGraBroM"
    ],
    "pitch": "Crafted from premium stainless steel with our signature nautical rope woven into the foxtail pattern, it perfectly balances strength, style and craftsmanship. Waterproof and wear resistant, made to accompany for years to come. Color: Black | Black Rope width: 5 mm Rope type: Chain Shackle color: Black Shackle size: 8 mm Shackle type: T- shackle Material type: 316L Stainless Steel Bronze | Marine rope About Pig & Hen Pig & Hen is a Dutch brand that stands for adventure, style and craftsmanship. Every piece of jewelry is handcrafted and rooted in Amsterdam, where our designs and stories come to life. Our name and inspiration date back to the 17th century, when Dutch sailors tattooed a pig and a hen on their bodies as a symbol of protection and good fortune. Today, we carry that tradition forward through our jewelry, where the same symbol of strength and protection is subtly embedded in every design. Our collections combine authentic heritage with contemporary design and durable materials such as marine rope, stainless steel, gemstones and precious metals of the highest quality. Built to last, our jewelry is waterproof, wear-resistant and made to accompany you for years to come. For over twelve years, people around the world have discovered Pig & Hen and share our passion for quality, authenticity and timeless design. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/539028/edit",
    "img": "https://images.momence.com/h/200431/product-image/c1057ca9-43e5-4ae1-b647-1b09e259e04f.png"
  },
  {
    "id": 539027,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Catena Foxtail (Slate Gray & Bronze, M/L)",
    "fullTitle": "Pig & Hen - Catena Foxtail (Slate Gray & Bronze, M/L)",
    "price": "$179.00",
    "priceNum": 179,
    "sku": "CaFoSlaGra|BroM/L",
    "barcodes": [
      "CaFoSlaGra|BroM/L",
      "539027",
      "CaFoSlaGraBroML"
    ],
    "pitch": "Slate Gray | Bronze, M 18cm) Crafted from premium stainless steel with our signature nautical rope woven into the foxtail pattern, it perfectly balances strength, style and craftsmanship. Waterproof and wear resistant, made to accompany for years to come. Color: Black | Black Rope width: 5 mm Rope type: Chain Shackle color: Black Shackle size: 8 mm Shackle type: T- shackle Material type: 316L Stainless Steel Bronze | Marine rope About Pig & Hen Pig & Hen is a Dutch brand that stands for adventure, style and craftsmanship. Every piece of jewelry is handcrafted and rooted in Amsterdam, where our designs and stories come to life. Our name and inspiration date back to the 17th century, when Dutch sailors tattooed a pig and a hen on their bodies as a symbol of protection and good fortune. Today, we carry that tradition forward through our jewelry, where the same symbol of strength and protection is subtly embedded in every design. Our collections combine authentic heritage with contemporary design and durable materials such as marine rope, stainless steel, gemstones and precious metals of the highest quality. Built to last, our jewelry is waterproof, wear-resistant and made to accompany you for years to come. For over twelve years, people around the world have discovered Pig & Hen and share our passion for quality, authenticity and timeless design. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/539027/edit",
    "img": "https://images.momence.com/h/200431/product-image/c2eae65c-268a-4dcc-a8d2-6a678a31987d.png"
  },
  {
    "id": 539046,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Catena Venetian 7mm (Black Gold L)",
    "fullTitle": "Pig & Hen - Catena Venetian 7mm (Black Gold L)",
    "price": "$240.00",
    "priceNum": 240,
    "sku": "CaVe7BlaGoL",
    "barcodes": [
      "CaVe7BlaGoL",
      "539046"
    ],
    "pitch": "Stainless Steel with woven marine rope. double box chain design. Bold, polished, nautical. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/539046/edit",
    "img": "https://images.momence.com/h/200431/product-image/26bf42a0-3443-402d-8ca3-afd98313d061.png"
  },
  {
    "id": 539043,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Catena Venetian 7mm (Black Gold M)",
    "fullTitle": "Pig & Hen - Catena Venetian 7mm (Black Gold M)",
    "price": "$240.00",
    "priceNum": 240,
    "sku": "CaVe7BlaGoM",
    "barcodes": [
      "CaVe7BlaGoM",
      "539043"
    ],
    "pitch": "Stainless Steel with woven marine rope. double box chain design. Bold, polished, nautical. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/539043/edit",
    "img": "https://images.momence.com/h/200431/product-image/550d7d65-9dc0-4b06-8bd5-b94fbe8508a4.png"
  },
  {
    "id": 539044,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Catena Venetian 7mm (Black Gold M/L)",
    "fullTitle": "Pig & Hen - Catena Venetian 7mm (Black Gold M/L)",
    "price": "$240.00",
    "priceNum": 240,
    "sku": "CaVe7BlaGoM/L",
    "barcodes": [
      "CaVe7BlaGoM/L",
      "539044",
      "CaVe7BlaGoML"
    ],
    "pitch": "Stainless Steel with woven marine rope. double box chain design. Bold, polished, nautical. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/539044/edit",
    "img": "https://images.momence.com/h/200431/product-image/9e292fc2-1df6-4688-8e6c-9603530b73c0.png"
  },
  {
    "id": 539041,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Catena Venetian 7mm (Black Gold S)",
    "fullTitle": "Pig & Hen - Catena Venetian 7mm (Black Gold S)",
    "price": "$240.00",
    "priceNum": 240,
    "sku": "CaVe7BlaGoS",
    "barcodes": [
      "CaVe7BlaGoS",
      "539041"
    ],
    "pitch": "Stainless Steel with woven marine rope. double box chain design. Bold, polished, nautical. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/539041/edit",
    "img": "https://images.momence.com/h/200431/product-image/265158f9-2b28-4ceb-bb08-ab96854103b1.png"
  },
  {
    "id": 539042,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Catena Venetian 7mm (Black Gold S/M)",
    "fullTitle": "Pig & Hen - Catena Venetian 7mm (Black Gold S/M)",
    "price": "$240.00",
    "priceNum": 240,
    "sku": "CaVe7BlaGoS/M",
    "barcodes": [
      "CaVe7BlaGoS/M",
      "539042",
      "CaVe7BlaGoSM"
    ],
    "pitch": "Stainless Steel with woven marine rope. double box chain design. Bold, polished, nautical. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/539042/edit",
    "img": "https://images.momence.com/h/200431/product-image/714f5301-78a7-4c31-8820-60d4904ddb20.png"
  },
  {
    "id": 539082,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Catena Venetian 7mm (Ivory Gold S)",
    "fullTitle": "Pig & Hen - Catena Venetian 7mm (Ivory Gold S)",
    "price": "$240.00",
    "priceNum": 240,
    "sku": "CaVe7IvoGoS",
    "barcodes": [
      "CaVe7IvoGoS",
      "539082"
    ],
    "pitch": "Stainless Steel with woven marine rope. double box chain design. Bold, polished, nautical. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/539082/edit",
    "img": "https://images.momence.com/h/200431/product-image/56a56726-5317-48b5-932f-b6815b729ee1.png"
  },
  {
    "id": 539083,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Catena Venetian 7mm (Ivory Gold S/M)",
    "fullTitle": "Pig & Hen - Catena Venetian 7mm (Ivory Gold S/M)",
    "price": "$240.00",
    "priceNum": 240,
    "sku": "CaVe7IvoGoS/M",
    "barcodes": [
      "CaVe7IvoGoS/M",
      "539083",
      "CaVe7IvoGoSM"
    ],
    "pitch": "Stainless Steel with woven marine rope. double box chain design. Bold, polished, nautical. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/539083/edit",
    "img": "https://images.momence.com/h/200431/product-image/c1e9c59c-a98e-4256-8a75-1364af668962.png"
  },
  {
    "id": 539085,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Catena Venetian 7mm (Lilac Purple S)",
    "fullTitle": "Pig & Hen - Catena Venetian 7mm (Lilac Purple S)",
    "price": "$240.00",
    "priceNum": 240,
    "sku": "CaVe7LiPuS",
    "barcodes": [
      "CaVe7LiPuS",
      "539085"
    ],
    "pitch": "Stainless Steel with woven marine rope. double box chain design. Bold, polished, nautical. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/539085/edit",
    "img": "https://images.momence.com/h/200431/product-image/304a5071-ee6c-4275-9f13-f506f82959fd.png"
  },
  {
    "id": 539034,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Catena Venetian 7mm (Navy & Silver, L)",
    "fullTitle": "Pig & Hen - Catena Venetian 7mm (Navy & Silver, L)",
    "price": "$240.00",
    "priceNum": 240,
    "sku": "CaVe7Na|SiL",
    "barcodes": [
      "CaVe7Na|SiL",
      "539034",
      "CaVe7NaSiL"
    ],
    "pitch": "Stainless Steel with woven marine rope. double box chain design. Bold, polished, nautical. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/539034/edit",
    "img": "https://images.momence.com/h/200431/product-image/d1d29bd7-b4f0-453f-92d9-795b744d27bf.png"
  },
  {
    "id": 492602,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Catena Venetian 7mm (Navy & Silver, M 18cm)",
    "fullTitle": "Pig & Hen - Catena Venetian 7mm (Navy & Silver, M 18cm)",
    "price": "$240.00",
    "priceNum": 240,
    "sku": "PH-CHA-VEN-NVY-0005",
    "barcodes": [
      "PH-CHA-VEN-NVY-0005",
      "492602",
      "PHCHAVENNVY0005"
    ],
    "pitch": "Stainless Steel with woven marine rope. double box chain design. Bold, polished, nautical. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492602/edit",
    "img": "https://images.momence.com/h/200431/product-image/ded81f00-8f28-4dcc-9923-204b7f29e0f5.png"
  },
  {
    "id": 539033,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Catena Venetian 7mm (Navy & Silver, M/L)",
    "fullTitle": "Pig & Hen - Catena Venetian 7mm (Navy & Silver, M/L)",
    "price": "$240.00",
    "priceNum": 240,
    "sku": "CaVe7Na|SiM/L",
    "barcodes": [
      "CaVe7Na|SiM/L",
      "539033",
      "CaVe7NaSiML"
    ],
    "pitch": "Stainless Steel with woven marine rope. double box chain design. Bold, polished, nautical. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/539033/edit",
    "img": "https://images.momence.com/h/200431/product-image/adeea072-e534-41ab-b9d7-aa9805908c7b.png"
  },
  {
    "id": 539081,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Catena Venetian 7mm (Slate Grey / Bronze L)",
    "fullTitle": "Pig & Hen - Catena Venetian 7mm (Slate Grey / Bronze L)",
    "price": "$240.00",
    "priceNum": 240,
    "sku": "CaVe7SlaGre/BroL",
    "barcodes": [
      "CaVe7SlaGre/BroL",
      "539081",
      "CaVe7SlaGreBroL"
    ],
    "pitch": "Slate Grey / Bronze | L Stainless Steel with woven marine rope. double box chain design. Bold, polished, nautical. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/539081/edit",
    "img": "https://images.momence.com/h/200431/product-image/b5fda892-e71f-4673-8ec7-3aa93bce7820.png"
  },
  {
    "id": 539080,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Catena Venetian 7mm (Slate Grey / Bronze M)",
    "fullTitle": "Pig & Hen - Catena Venetian 7mm (Slate Grey / Bronze M)",
    "price": "$240.00",
    "priceNum": 240,
    "sku": "CaVe7SlaGre/BroM",
    "barcodes": [
      "CaVe7SlaGre/BroM",
      "539080",
      "CaVe7SlaGreBroM"
    ],
    "pitch": "Slate Grey / Bronze | M. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/539080/edit",
    "img": "https://images.momence.com/h/200431/product-image/fb971622-35cd-4a90-ab63-4ffbb6a3227c.png"
  },
  {
    "id": 539079,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Catena Venetian 7mm (Slate Grey / Bronze M/L)",
    "fullTitle": "Pig & Hen - Catena Venetian 7mm (Slate Grey / Bronze M/L)",
    "price": "$240.00",
    "priceNum": 240,
    "sku": "CaVe7SlaGre/BroM/L",
    "barcodes": [
      "CaVe7SlaGre/BroM/L",
      "539079",
      "CaVe7SlaGreBroML"
    ],
    "pitch": "Slate Grey / Bronze | M/L Stainless Steel with woven marine rope. double box chain design. Bold, polished, nautical. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/539079/edit",
    "img": "https://images.momence.com/h/200431/product-image/d457fe2f-8d38-41fb-975b-88498194c3e0.png"
  },
  {
    "id": 492622,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Compass Rose Necklace (Bronze)",
    "fullTitle": "Pig & Hen - Compass Rose Necklace (Bronze)",
    "price": "$130.00",
    "priceNum": 130,
    "sku": "PH-CMP-RSE-BNZ-0025",
    "barcodes": [
      "PH-CMP-RSE-BNZ-0025",
      "492622",
      "PHCMPRSEBNZ0025"
    ],
    "pitch": "Stainless Steel Compass Rose Necklace symbol of direction and adventure. Crafted from high-quality stainless steel. it is built to last—resistant to wear and tarnishing. The pendant features the classic compass rose, representing exploration and determination. On the back, you’ll find the Pig & Hen logo, a subtle tribute to our roots. Rugged, stylish, and versatile. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492622/edit",
    "img": "https://images.momence.com/h/200431/product-image/7447ff62-9878-4ba7-a330-e374cae1e371.png"
  },
  {
    "id": 492623,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Compass Rose Necklace (Vintage)",
    "fullTitle": "Pig & Hen - Compass Rose Necklace (Vintage)",
    "price": "$130.00",
    "priceNum": 130,
    "sku": "PH-CMP-RSE-VIN-0026",
    "barcodes": [
      "PH-CMP-RSE-VIN-0026",
      "492623",
      "PHCMPRSEVIN0026"
    ],
    "pitch": "Stainless Steel Compass Rose Necklace symbol of direction and adventure. Crafted from high-quality stainless steel. it is built to last—resistant to wear and tarnishing. The pendant features the classic compass rose, representing exploration and determination. On the back, you’ll find the Pig & Hen logo, a subtle tribute to our roots. Rugged, stylish, and versatile. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492623/edit",
    "img": "https://images.momence.com/h/200431/product-image/f51e0d17-c2c8-4a5a-a9d9-f74376ee20b5.png"
  },
  {
    "id": 492620,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Curb Chain Necklace (Black, 55cm)",
    "fullTitle": "Pig & Hen - Curb Chain Necklace (Black, 55cm)",
    "price": "$80.00",
    "priceNum": 80,
    "sku": "PH-CRB-CHN-BLK-0023",
    "barcodes": [
      "PH-CRB-CHN-BLK-0023",
      "492620",
      "PHCRBCHNBLK0023"
    ],
    "pitch": "Material type: 316L Stainless Steel Black PVD. a classic piece. Great for layering. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492620/edit",
    "img": "https://images.momence.com/h/200431/product-image/19cd1fe5-f62b-4609-ae59-f18998bb5e1c.png"
  },
  {
    "id": 492621,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Curb Chain Necklace (Gold, 55cm)",
    "fullTitle": "Pig & Hen - Curb Chain Necklace (Gold, 55cm)",
    "price": "$80.00",
    "priceNum": 80,
    "sku": "PH-CRB-CHN-GLD-0024",
    "barcodes": [
      "PH-CRB-CHN-GLD-0024",
      "492621",
      "PHCRBCHNGLD0024"
    ],
    "pitch": "316L Stainless Steel Black PVD. a classic piece. Great for layering. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492621/edit",
    "img": "https://images.momence.com/h/200431/product-image/315b4f7c-4e38-48fa-80ff-f8d58e868f72.png"
  },
  {
    "id": 539092,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Curb Chain Necklace (Silver, 55cm)",
    "fullTitle": "Pig & Hen - Curb Chain Necklace (Silver, 55cm)",
    "price": "$80.00",
    "priceNum": 80,
    "sku": "CuChaNeSi55",
    "barcodes": [
      "CuChaNeSi55",
      "539092"
    ],
    "pitch": "316L Stainless Steel Black PVD. a classic piece. Great for layering. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/539092/edit",
    "img": "https://images.momence.com/h/200431/product-image/9374ed6e-5d26-43cd-895d-152f0e24610a.png"
  },
  {
    "id": 492637,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Elizabeth (Gold)",
    "fullTitle": "Pig & Hen - Elizabeth (Gold)",
    "price": "$185.00",
    "priceNum": 185,
    "sku": "PH-ELZ-GLD-0040",
    "barcodes": [
      "PH-ELZ-GLD-0040",
      "492637",
      "PHELZGLD0040"
    ],
    "pitch": "Stainless Steel w/ gold pvd. Bold yet refined. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492637/edit",
    "img": "https://images.momence.com/h/200431/product-image/7409252f-4c18-483d-b77e-ec9d71d896fe.png"
  },
  {
    "id": 492624,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Eva (Bi-Color)",
    "fullTitle": "Pig & Hen - Eva (Bi-Color)",
    "price": "$130.00",
    "priceNum": 130,
    "sku": "PH-EVA-BCL-0027",
    "barcodes": [
      "PH-EVA-BCL-0027",
      "492624",
      "PHEVABCL0027"
    ],
    "pitch": "nautical inspired, timeless yet versatile. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492624/edit",
    "img": "https://images.momence.com/h/200431/product-image/6d310ecc-f654-408b-83ed-76d58e01aa36.png"
  },
  {
    "id": 492626,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Julie (Gold)",
    "fullTitle": "Pig & Hen - Julie (Gold)",
    "price": "$130.00",
    "priceNum": 130,
    "sku": "PH-JUL-GLD-0029",
    "barcodes": [
      "PH-JUL-GLD-0029",
      "492626",
      "PHJULGLD0029"
    ],
    "pitch": "Stainless Steel with pvd coating. Lightweight and comfortable. Easy to layer. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492626/edit",
    "img": "https://images.momence.com/h/200431/product-image/6709c52b-5973-44fb-a582-ad071b79b2e2.png"
  },
  {
    "id": 492625,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Julie (Silver)",
    "fullTitle": "Pig & Hen - Julie (Silver)",
    "price": "$130.00",
    "priceNum": 130,
    "sku": "PH-JUL-SLV-0028",
    "barcodes": [
      "PH-JUL-SLV-0028",
      "492625",
      "PHJULSLV0028"
    ],
    "pitch": "Stainless Steel with pvd coating. Lightweight and comfortable. Easy to layer. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492625/edit",
    "img": "https://images.momence.com/h/200431/product-image/932bc365-9cf0-40fc-8830-0529b2d88f8d.png"
  },
  {
    "id": 492627,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Lewis (Ivory & Gold, S 16-17cm)",
    "fullTitle": "Pig & Hen - Lewis (Ivory & Gold, S 16-17cm)",
    "price": "$130.00",
    "priceNum": 130,
    "sku": "PH-LWS-IVR-GLD-0030",
    "barcodes": [
      "PH-LWS-IVR-GLD-0030",
      "492627",
      "PHLWSIVRGLD0030"
    ],
    "pitch": "Stainless steel hardware + Marine rope. minimalist easy everyday piece. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492627/edit",
    "img": "https://images.momence.com/h/200431/product-image/3fd37ecd-8899-47aa-be5b-05c1e158ceda.png"
  },
  {
    "id": 539091,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Lewis (Lilac & Purple, S)",
    "fullTitle": "Pig & Hen - Lewis (Lilac & Purple, S)",
    "price": "$130.00",
    "priceNum": 130,
    "sku": "LeLi|PuS)",
    "barcodes": [
      "LeLi|PuS)",
      "539091",
      "LeLiPuS"
    ],
    "pitch": "Stainless steel hardware + Marine rope. minimalist easy everyday piece. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/539091/edit",
    "img": "https://images.momence.com/h/200431/product-image/eefa5209-49bc-4074-a04f-3b3d7f64d1b7.png"
  },
  {
    "id": 492628,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Lewis (Royal Blue & Gold, S 16-17cm)",
    "fullTitle": "Pig & Hen - Lewis (Royal Blue & Gold, S 16-17cm)",
    "price": "$130.00",
    "priceNum": 130,
    "sku": "PH-LWS-RBL-GLD-0031",
    "barcodes": [
      "PH-LWS-RBL-GLD-0031",
      "492628",
      "PHLWSRBLGLD0031"
    ],
    "pitch": "Stainless steel hardware + Marine rope. minimalist easy everyday piece. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492628/edit",
    "img": "https://images.momence.com/h/200431/product-image/51b33675-bb25-4c25-8b97-f6ca46c306bf.png"
  },
  {
    "id": 492604,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Little Lewis DBL (Army & Vintage, L)",
    "fullTitle": "Pig & Hen - Little Lewis DBL (Army & Vintage, L)",
    "price": "$130.00",
    "priceNum": 130,
    "sku": "PH-BRC-LW1-ARM-0007",
    "barcodes": [
      "PH-BRC-LW1-ARM-0007",
      "492604",
      "PHBRCLW1ARM0007"
    ],
    "pitch": "Little Lewis DBL features two stylish stainless-steel sliders that keep the authentic maritime rope perfectly in place, ensuring a comfortable and adjustable fit. Available in several colors, it is understated and masculine, looking just as good with a tee as it does slipped under a white shirt cuff. Story behind the name: A true craftsman. We call him Little because he appreciates the little things in life and because we always want him to work a little faster. Every single craft is a masterpiece, Lewis has a razor sharp eye for detail. If only he had an eye for the time as well. stainless steel/marine rope. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492604/edit",
    "img": "https://images.momence.com/h/200431/product-image/023b8278-af99-45d9-8f69-bd4371bdba5e.png"
  },
  {
    "id": 539038,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Little Lewis DBL (Army & Vintage, M)",
    "fullTitle": "Pig & Hen - Little Lewis DBL (Army & Vintage, M)",
    "price": "$130.00",
    "priceNum": 130,
    "sku": "LiLeDBLArmy|ViM",
    "barcodes": [
      "LiLeDBLArmy|ViM",
      "539038",
      "LiLeDBLArmyViM"
    ],
    "pitch": "Little Lewis DBL features two stylish stainless-steel sliders that keep the authentic maritime rope perfectly in place, ensuring a comfortable and adjustable fit. Available in several colors, it is understated and masculine, looking just as good with a tee as it does slipped under a white shirt cuff. Story behind the name: A true craftsman. We call him Little because he appreciates the little things in life and because we always want him to work a little faster. Every single craft is a masterpiece, Lewis has a razor sharp eye for detail. If only he had an eye for the time as well. stainless steel/marine rope. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/539038/edit",
    "img": "https://images.momence.com/h/200431/product-image/ebcc08de-3118-4ecf-b2a2-3ab7aad9bf45.png"
  },
  {
    "id": 539039,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Little Lewis DBL (Black & Black, L)",
    "fullTitle": "Pig & Hen - Little Lewis DBL (Black & Black, L)",
    "price": "$130.00",
    "priceNum": 130,
    "sku": "LiLeDBLBla|BlaL",
    "barcodes": [
      "LiLeDBLBla|BlaL",
      "539039",
      "LiLeDBLBlaBlaL"
    ],
    "pitch": "Slate Grey Bronze L Little Lewis DBL features two stylish stainless-steel sliders that keep the authentic maritime rope perfectly in place, ensuring a comfortable and adjustable fit. Available in several colors, it is understated and masculine, looking just as good with a tee as it does slipped under a white shirt cuff. Story behind the name: A true craftsman. We call him Little because he appreciates the little things in life and because we always want him to work a little faster. Every single craft is a masterpiece, Lewis has a razor sharp eye for detail. If only he had an eye for the time as well. stainless steel/marine rope. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/539039/edit",
    "img": "https://images.momence.com/h/200431/product-image/5c8ad14c-8d68-4601-9336-da92b3b92c73.png"
  },
  {
    "id": 492603,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Little Lewis DBL (Black & Black, M 18-19cm)",
    "fullTitle": "Pig & Hen - Little Lewis DBL (Black & Black, M 18-19cm)",
    "price": "$130.00",
    "priceNum": 130,
    "sku": "PH-BRC-LW1-BLK-0006",
    "barcodes": [
      "PH-BRC-LW1-BLK-0006",
      "492603",
      "PHBRCLW1BLK0006"
    ],
    "pitch": "Slate Grey Bronze L Little Lewis DBL features two stylish stainless-steel sliders that keep the authentic maritime rope perfectly in place, ensuring a comfortable and adjustable fit. Available in several colors, it is understated and masculine, looking just as good with a tee as it does slipped under a white shirt cuff. Story behind the name: A true craftsman. We call him Little because he appreciates the little things in life and because we always want him to work a little faster. Every single craft is a masterpiece, Lewis has a razor sharp eye for detail. If only he had an eye for the time as well. stainless steel/marine rope. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492603/edit",
    "img": "https://images.momence.com/h/200431/product-image/8bb152d4-6b60-46e0-be8c-e7a445a66358.png"
  },
  {
    "id": 539090,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Little Lewis DBL (Navy & Silver, L)",
    "fullTitle": "Pig & Hen - Little Lewis DBL (Navy & Silver, L)",
    "price": "$130.00",
    "priceNum": 130,
    "sku": "LiLeDBLNa|SiL)",
    "barcodes": [
      "LiLeDBLNa|SiL)",
      "539090",
      "LiLeDBLNaSiL"
    ],
    "pitch": "Navy Silver L Slate Grey Bronze L Little Lewis DBL features two stylish stainless-steel sliders that keep the authentic maritime rope perfectly in place, ensuring a comfortable and adjustable fit. Available in several colors, it is understated and masculine, looking just as good with a tee as it does slipped under a white shirt cuff. Story behind the name: A true craftsman. We call him Little because he appreciates the little things in life and because we always want him to work a little faster. Every single craft is a masterpiece, Lewis has a razor sharp eye for detail. If only he had an eye for the time as well. stainless steel/marine rope. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/539090/edit",
    "img": "https://images.momence.com/h/200431/product-image/6a3608d4-4473-40e8-8140-8deefc8681de.png"
  },
  {
    "id": 539089,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Little Lewis DBL (Navy & Silver, M)",
    "fullTitle": "Pig & Hen - Little Lewis DBL (Navy & Silver, M)",
    "price": "$130.00",
    "priceNum": 130,
    "sku": "LiLeDBLNa|SiM)",
    "barcodes": [
      "LiLeDBLNa|SiM)",
      "539089",
      "LiLeDBLNaSiM"
    ],
    "pitch": "Authentic handcrafted nautical bracelet designed in Amsterdam from genuine marine-grade ship rope and corrosion-resistant stainless steel. Waterproof, ruggedly refined, and built to endure a lifetime of adventure. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/539089/edit",
    "img": "https://images.momence.com/h/200431/product-image/f0e1b6e5-a397-4c6f-9395-6eefddc77389.png"
  },
  {
    "id": 539087,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Little Lewis DBL (Slate Grey & Bronze, L)",
    "fullTitle": "Pig & Hen - Little Lewis DBL (Slate Grey & Bronze, L)",
    "price": "$130.00",
    "priceNum": 130,
    "sku": "LiLeDBLSlaGre|BroL)",
    "barcodes": [
      "LiLeDBLSlaGre|BroL)",
      "539087",
      "LiLeDBLSlaGreBroL"
    ],
    "pitch": "Slate Grey Bronze L Little Lewis DBL features two stylish stainless-steel sliders that keep the authentic maritime rope perfectly in place, ensuring a comfortable and adjustable fit. Available in several colors, it is understated and masculine, looking just as good with a tee as it does slipped under a white shirt cuff. Story behind the name: A true craftsman. We call him Little because he appreciates the little things in life and because we always want him to work a little faster. Every single craft is a masterpiece, Lewis has a razor sharp eye for detail. If only he had an eye for the time as well. stainless steel/marine rope. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/539087/edit",
    "img": "https://images.momence.com/h/200431/product-image/a5ac0680-0330-427a-ac7a-dce8ce7298db.png"
  },
  {
    "id": 539088,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Little Lewis DBL (Slate Grey & Bronze, M)",
    "fullTitle": "Pig & Hen - Little Lewis DBL (Slate Grey & Bronze, M)",
    "price": "$130.00",
    "priceNum": 130,
    "sku": "LiLeDBLSlaGre|BroM)",
    "barcodes": [
      "LiLeDBLSlaGre|BroM)",
      "539088",
      "LiLeDBLSlaGreBroM"
    ],
    "pitch": "Slate Grey Bronze M Slate Grey Bronze L Little Lewis DBL features two stylish stainless-steel sliders that keep the authentic maritime rope perfectly in place, ensuring a comfortable and adjustable fit. Available in several colors, it is understated and masculine, looking just as good with a tee as it does slipped under a white shirt cuff. Story behind the name: A true craftsman. We call him Little because he appreciates the little things in life and because we always want him to work a little faster. Every single craft is a masterpiece, Lewis has a razor sharp eye for detail. If only he had an eye for the time as well. stainless steel/marine rope. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/539088/edit",
    "img": "https://images.momence.com/h/200431/product-image/91ae703e-ef18-4f7f-b131-356b4702f309.png"
  },
  {
    "id": 492629,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Maya Lou (Ivory & Gold, S 16cm)",
    "fullTitle": "Pig & Hen - Maya Lou (Ivory & Gold, S 16cm)",
    "price": "$185.00",
    "priceNum": 185,
    "sku": "PH-MYL-IVR-S16-0032",
    "barcodes": [
      "PH-MYL-IVR-S16-0032",
      "492629",
      "PHMYLIVRS160032"
    ],
    "pitch": "stainless steel with pvd coating. Sleek and understated with it's namesake representing having a strong voice and being true to yourself. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492629/edit",
    "img": "https://images.momence.com/h/200431/product-image/4a1ea6ef-6a2a-4da6-ad1e-c57f515d9627.png"
  },
  {
    "id": 492630,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Maya Lou (Ivory & Gold, S/M 17cm)",
    "fullTitle": "Pig & Hen - Maya Lou (Ivory & Gold, S/M 17cm)",
    "price": "$185.00",
    "priceNum": 185,
    "sku": "PH-MYL-IVR-S17-0033",
    "barcodes": [
      "PH-MYL-IVR-S17-0033",
      "492630",
      "PHMYLIVRS170033"
    ],
    "pitch": "stainless steel with pvd coating. Sleek and understated with it's namesake representing having a strong voice and being true to yourself. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492630/edit",
    "img": "https://images.momence.com/h/200431/product-image/a1be32a1-c2cd-43d3-a343-0fa003a0a084.png"
  },
  {
    "id": 492631,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Maya Lou (Lilac Purple & Silver, S 16cm)",
    "fullTitle": "Pig & Hen - Maya Lou (Lilac Purple & Silver, S 16cm)",
    "price": "$185.00",
    "priceNum": 185,
    "sku": "PH-MYL-LIL-S16-0034",
    "barcodes": [
      "PH-MYL-LIL-S16-0034",
      "492631",
      "PHMYLLILS160034"
    ],
    "pitch": "stainless steel. Sleek and understated with it's namesake representing having a strong voice and being true to yourself. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492631/edit",
    "img": "https://images.momence.com/h/200431/product-image/8ad02ae4-cd70-41a0-9e7e-f1a06c69ec6c.png"
  },
  {
    "id": 492632,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Maya Lou (Lilac Purple & Silver, S/M 17cm)",
    "fullTitle": "Pig & Hen - Maya Lou (Lilac Purple & Silver, S/M 17cm)",
    "price": "$185.00",
    "priceNum": 185,
    "sku": "PH-MYL-LIL-S17-0035",
    "barcodes": [
      "PH-MYL-LIL-S17-0035",
      "492632",
      "PHMYLLILS170035"
    ],
    "pitch": "stainless steel. Sleek and understated with it's namesake representing having a strong voice and being true to yourself. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492632/edit",
    "img": "https://images.momence.com/h/200431/product-image/7d1f9443-b638-4e82-8434-6989410ccc63.png"
  },
  {
    "id": 492633,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Maya Lou (Royal Blue & Gold, S 16cm)",
    "fullTitle": "Pig & Hen - Maya Lou (Royal Blue & Gold, S 16cm)",
    "price": "$185.00",
    "priceNum": 185,
    "sku": "PH-MYL-RBL-S16-0036",
    "barcodes": [
      "PH-MYL-RBL-S16-0036",
      "492633",
      "PHMYLRBLS160036"
    ],
    "pitch": "stainless steel with pvd coating. Sleek and understated with it's namesake representing having a strong voice and being true to yourself. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492633/edit",
    "img": "https://images.momence.com/h/200431/product-image/f607807c-0eb4-4163-a083-6ce2b7b93853.png"
  },
  {
    "id": 492634,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Maya Lou (Royal Blue & Gold, S/M 17cm)",
    "fullTitle": "Pig & Hen - Maya Lou (Royal Blue & Gold, S/M 17cm)",
    "price": "$185.00",
    "priceNum": 185,
    "sku": "PH-MYL-RBL-S17-0037",
    "barcodes": [
      "PH-MYL-RBL-S17-0037",
      "492634",
      "PHMYLRBLS170037"
    ],
    "pitch": "stainless steel with pvd coating. Sleek and understated with it's namesake representing having a strong voice and being true to yourself. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492634/edit",
    "img": "https://images.momence.com/h/200431/product-image/2bd5ea90-699f-435b-86e8-7bce336f159d.png"
  },
  {
    "id": 492635,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Maya Lou 6mm (Black & Gold, S 16cm)",
    "fullTitle": "Pig & Hen - Maya Lou 6mm (Black & Gold, S 16cm)",
    "price": "$185.00",
    "priceNum": 185,
    "sku": "PH-MYL-BLK-S16-0038",
    "barcodes": [
      "PH-MYL-BLK-S16-0038",
      "492635",
      "PHMYLBLKS160038"
    ],
    "pitch": "stainless steel with pvd coating. Sleek and understated with it's namesake representing having a strong voice and being true to yourself. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492635/edit",
    "img": "https://images.momence.com/h/200431/product-image/9b72e409-fa0e-4645-8b30-aa64a1545406.png"
  },
  {
    "id": 492636,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Maya Lou 6mm (Black & Gold, S/M 17cm)",
    "fullTitle": "Pig & Hen - Maya Lou 6mm (Black & Gold, S/M 17cm)",
    "price": "$185.00",
    "priceNum": 185,
    "sku": "PH-MYL-BLK-S17-0039",
    "barcodes": [
      "PH-MYL-BLK-S17-0039",
      "492636",
      "PHMYLBLKS170039"
    ],
    "pitch": "stainless steel with pvd coating. Sleek and understated with it's namesake representing having a strong voice and being true to yourself. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492636/edit",
    "img": "https://images.momence.com/h/200431/product-image/87d4470b-092f-4242-9d8a-1d3b4e115a96.png"
  },
  {
    "id": 492608,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Navarch 6mm (Army & Vintage, M 18cm)",
    "fullTitle": "Pig & Hen - Navarch 6mm (Army & Vintage, M 18cm)",
    "price": "$179.00",
    "priceNum": 179,
    "sku": "PH-NAV-ARM-VIN-0011",
    "barcodes": [
      "PH-NAV-ARM-VIN-0011",
      "492608",
      "PHNAVARMVIN0011"
    ],
    "pitch": "Created for the born leaders, the Navarch 6mm Cuff features a textured nautical rope insert that gives a modern edge to a timeless design. Its name comes from the ancient Greek word 'Navarchos', meaning 'leader of the fleet', symbolizing strength, confidence and authority. stainless steel vintage. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492608/edit",
    "img": "https://images.momence.com/h/200431/product-image/e702f359-0c9d-4397-8da2-88e56fc63ddf.png"
  },
  {
    "id": 539023,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Navarch 6mm (Army & Vintage, M/L)",
    "fullTitle": "Pig & Hen - Navarch 6mm (Army & Vintage, M/L)",
    "price": "$179.00",
    "priceNum": 179,
    "sku": "Na6Army|ViM/L",
    "barcodes": [
      "Na6Army|ViM/L",
      "539023",
      "Na6ArmyViML"
    ],
    "pitch": "Created for the born leaders, the Navarch 6mm Cuff features a textured nautical rope insert that gives a modern edge to a timeless design. Its name comes from the ancient Greek word 'Navarchos', meaning 'leader of the fleet', symbolizing strength, confidence and authority. stainless steel vintage. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/539023/edit",
    "img": "https://images.momence.com/h/200431/product-image/6d6ab195-9df9-4a83-9928-a446314c73b6.png"
  },
  {
    "id": 492605,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Navarch 6mm (Black & Black, M 18cm)",
    "fullTitle": "Pig & Hen - Navarch 6mm (Black & Black, M 18cm)",
    "price": "$179.00",
    "priceNum": 179,
    "sku": "PH-NAV-BLK-BLK-0008",
    "barcodes": [
      "PH-NAV-BLK-BLK-0008",
      "492605",
      "PHNAVBLKBLK0008"
    ],
    "pitch": "Created for the born leaders, the Navarch 6mm Cuff features a textured nautical rope insert that gives a modern edge to a timeless design. Its name comes from the ancient Greek word 'Navarchos', meaning 'leader of the fleet', symbolizing strength, confidence and authority. stainless steel black pvd. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492605/edit",
    "img": "https://images.momence.com/h/200431/product-image/0d57679f-bc1d-4e4d-8c3a-032b16dd7991.png"
  },
  {
    "id": 539017,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Navarch 6mm (Black & Black, M/L)",
    "fullTitle": "Pig & Hen - Navarch 6mm (Black & Black, M/L)",
    "price": "$179.00",
    "priceNum": 179,
    "sku": "N6-NOS-290000-ML",
    "barcodes": [
      "N6-NOS-290000-ML",
      "539017",
      "N6NOS290000ML"
    ],
    "pitch": "Created for the born leaders, the Navarch 6mm Cuff features a textured nautical rope insert that gives a modern edge to a timeless design. Its name comes from the ancient Greek word 'Navarchos', meaning 'leader of the fleet', symbolizing strength, confidence and authority. stainless steel black pvd. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/539017/edit",
    "img": "https://images.momence.com/h/200431/product-image/323f0b51-eb95-4729-b3cf-30c79d5e4138.png"
  },
  {
    "id": 492607,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Navarch 6mm (Black & Gold, M 18cm)",
    "fullTitle": "Pig & Hen - Navarch 6mm (Black & Gold, M 18cm)",
    "price": "$179.00",
    "priceNum": 179,
    "sku": "PH-NAV-BLK-GLD-0010",
    "barcodes": [
      "PH-NAV-BLK-GLD-0010",
      "492607",
      "PHNAVBLKGLD0010"
    ],
    "pitch": "Created for the born leaders, the Navarch 6mm Cuff features a textured nautical rope insert that gives a modern edge to a timeless design. Its name comes from the ancient Greek word 'Navarchos', meaning 'leader of the fleet', symbolizing strength, confidence and authority. stainless steel Gold. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492607/edit",
    "img": "https://images.momence.com/h/200431/product-image/ba423ce2-fc69-4d02-869f-a977af47d577.png"
  },
  {
    "id": 539022,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Navarch 6mm (Black & Gold, M/L)",
    "fullTitle": "Pig & Hen - Navarch 6mm (Black & Gold, M/L)",
    "price": "$179.00",
    "priceNum": 179,
    "sku": "Na6Bla|GoM18",
    "barcodes": [
      "Na6Bla|GoM18",
      "539022",
      "Na6BlaGoM18"
    ],
    "pitch": "Created for the born leaders, the Navarch 6mm Cuff features a textured nautical rope insert that gives a modern edge to a timeless design. Its name comes from the ancient Greek word 'Navarchos', meaning 'leader of the fleet', symbolizing strength, confidence and authority. stainless steel Gold. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/539022/edit",
    "img": "https://images.momence.com/h/200431/product-image/0101e0ba-f9c0-4599-9220-943820e5c0e7.png"
  },
  {
    "id": 492606,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Navarch 6mm (Navy & Silver, M 18cm)",
    "fullTitle": "Pig & Hen - Navarch 6mm (Navy & Silver, M 18cm)",
    "price": "$179.00",
    "priceNum": 179,
    "sku": "PH-NAV-NVY-SLV-0009",
    "barcodes": [
      "PH-NAV-NVY-SLV-0009",
      "492606",
      "PHNAVNVYSLV0009"
    ],
    "pitch": "Created for the born leaders, the Navarch 6mm Cuff features a textured nautical rope insert that gives a modern edge to a timeless design. Its name comes from the ancient Greek word 'Navarchos', meaning 'leader of the fleet', symbolizing strength, confidence and authority. stainless steel. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492606/edit",
    "img": "https://images.momence.com/h/200431/product-image/cd5cccad-762c-4bf5-a30d-6009c3977780.png"
  },
  {
    "id": 539021,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Navarch 6mm (Navy & Silver, M/L)",
    "fullTitle": "Pig & Hen - Navarch 6mm (Navy & Silver, M/L)",
    "price": "$179.00",
    "priceNum": 179,
    "sku": "Na6Na|SiM/L",
    "barcodes": [
      "Na6Na|SiM/L",
      "539021",
      "Na6NaSiML"
    ],
    "pitch": "Created for the born leaders, the Navarch 6mm Cuff features a textured nautical rope insert that gives a modern edge to a timeless design. Its name comes from the ancient Greek word 'Navarchos', meaning 'leader of the fleet', symbolizing strength, confidence and authority. stainless steel. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/539021/edit",
    "img": "https://images.momence.com/h/200431/product-image/44ba3180-ce87-4e7b-b5af-0c6ceece411e.png"
  },
  {
    "id": 492609,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Navarch 6mm (Slate Gray & Bronze, M 18cm)",
    "fullTitle": "Pig & Hen - Navarch 6mm (Slate Gray & Bronze, M 18cm)",
    "price": "$179.00",
    "priceNum": 179,
    "sku": "PH-NAV-SLG-BNZ-0012",
    "barcodes": [
      "PH-NAV-SLG-BNZ-0012",
      "492609",
      "PHNAVSLGBNZ0012"
    ],
    "pitch": "Created for the born leaders, the Navarch 6mm Cuff features a textured nautical rope insert that gives a modern edge to a timeless design. Its name comes from the ancient Greek word 'Navarchos', meaning 'leader of the fleet', symbolizing strength, confidence and authority. stainless steel bronze. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492609/edit",
    "img": "https://images.momence.com/h/200431/product-image/4e794a0a-f8ea-43cd-86d6-85672ee2a3d3.png"
  },
  {
    "id": 539019,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Navarch 6mm (Slate Gray & Bronze, M/L)",
    "fullTitle": "Pig & Hen - Navarch 6mm (Slate Gray & Bronze, M/L)",
    "price": "$179.00",
    "priceNum": 179,
    "sku": "Na6SlaGra|BroM/L",
    "barcodes": [
      "Na6SlaGra|BroM/L",
      "539019",
      "Na6SlaGraBroML"
    ],
    "pitch": "Created for the born leaders, the Navarch 6mm Cuff features a textured nautical rope insert that gives a modern edge to a timeless design. Its name comes from the ancient Greek word 'Navarchos', meaning 'leader of the fleet', symbolizing strength, confidence and authority. stainless steel bronze. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/539019/edit",
    "img": "https://images.momence.com/h/200431/product-image/a877d1da-3fd1-4db5-aed6-d370d002d995.png"
  },
  {
    "id": 492616,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Navarch 6mm Ring (Army & Vintage, 63/20mm)",
    "fullTitle": "Pig & Hen - Navarch 6mm Ring (Army & Vintage, 63/20mm)",
    "price": "$130.00",
    "priceNum": 130,
    "sku": "PH-NAV-RNG-ARM-63-0019",
    "barcodes": [
      "PH-NAV-RNG-ARM-63-0019",
      "492616",
      "PHNAVRNGARM630019"
    ],
    "pitch": "Stainless Steel/Marine rope -- means leader of ships in greek. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492616/edit",
    "img": "https://images.momence.com/h/200431/product-image/e7034f63-f585-4b5c-9743-a58f3e7c6c6b.png"
  },
  {
    "id": 492617,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Navarch 6mm Ring (Army & Vintage, 66/21mm)",
    "fullTitle": "Pig & Hen - Navarch 6mm Ring (Army & Vintage, 66/21mm)",
    "price": "$130.00",
    "priceNum": 130,
    "sku": "PH-NAV-RNG-ARM-66-0020",
    "barcodes": [
      "PH-NAV-RNG-ARM-66-0020",
      "492617",
      "PHNAVRNGARM660020"
    ],
    "pitch": "( Stainless Steel/Marine rope -- means leader of ships in greek. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492617/edit",
    "img": "https://images.momence.com/h/200431/product-image/e571a098-896e-4eb0-b59d-924ed1c4e6f7.png"
  },
  {
    "id": 492618,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Navarch 6mm Ring (Army & Vintage, 69/22mm)",
    "fullTitle": "Pig & Hen - Navarch 6mm Ring (Army & Vintage, 69/22mm)",
    "price": "$130.00",
    "priceNum": 130,
    "sku": "PH-NAV-RNG-ARM-69-0021",
    "barcodes": [
      "PH-NAV-RNG-ARM-69-0021",
      "492618",
      "PHNAVRNGARM690021"
    ],
    "pitch": "Stainless Steel/Marine rope -- means leader of ships in greek. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492618/edit",
    "img": "https://images.momence.com/h/200431/product-image/0eed07af-57d7-46e2-b1c3-e3b8c7eae192.png"
  },
  {
    "id": 492613,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Navarch 6mm Ring (Black & Black, 63/20mm)",
    "fullTitle": "Pig & Hen - Navarch 6mm Ring (Black & Black, 63/20mm)",
    "price": "$130.00",
    "priceNum": 130,
    "sku": "PH-NAV-RNG-BLK-63-0016",
    "barcodes": [
      "PH-NAV-RNG-BLK-63-0016",
      "492613",
      "PHNAVRNGBLK630016"
    ],
    "pitch": "Stainless Steel/Marine rope -- means leader of ships in greek. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492613/edit",
    "img": "https://images.momence.com/h/200431/product-image/8f980305-0397-4ec2-8aaf-9b671d7613c6.png"
  },
  {
    "id": 492614,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Navarch 6mm Ring (Black & Black, 66/21mm)",
    "fullTitle": "Pig & Hen - Navarch 6mm Ring (Black & Black, 66/21mm)",
    "price": "$130.00",
    "priceNum": 130,
    "sku": "PH-NAV-RNG-BLK-66-0017",
    "barcodes": [
      "PH-NAV-RNG-BLK-66-0017",
      "492614",
      "PHNAVRNGBLK660017"
    ],
    "pitch": "Stainless Steel/Marine rope -- means leader of ships in greek. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492614/edit",
    "img": "https://images.momence.com/h/200431/product-image/92caa16c-096d-445e-ae14-c001c9e7ae7a.png"
  },
  {
    "id": 492615,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Navarch 6mm Ring (Black & Black, 69/22mm)",
    "fullTitle": "Pig & Hen - Navarch 6mm Ring (Black & Black, 69/22mm)",
    "price": "$130.00",
    "priceNum": 130,
    "sku": "PH-NAV-RNG-BLK-69-0018",
    "barcodes": [
      "PH-NAV-RNG-BLK-69-0018",
      "492615",
      "PHNAVRNGBLK690018"
    ],
    "pitch": "Stainless Steel/Marine rope -- means leader of ships in greek. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492615/edit",
    "img": "https://images.momence.com/h/200431/product-image/99c420a8-2692-410f-a4b2-fb15e783ce57.png"
  },
  {
    "id": 492610,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Navarch 6mm Ring (Navy & Silver, 63/20mm)",
    "fullTitle": "Pig & Hen - Navarch 6mm Ring (Navy & Silver, 63/20mm)",
    "price": "$130.00",
    "priceNum": 130,
    "sku": "PH-NAV-RNG-NVY-0013",
    "barcodes": [
      "PH-NAV-RNG-NVY-0013",
      "492610",
      "PHNAVRNGNVY0013"
    ],
    "pitch": "Stainless Steel/Marine rope -- means leader of ships in greek. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492610/edit",
    "img": "https://images.momence.com/h/200431/product-image/774d085f-2b9f-44a2-9e79-b8ac7e8ba552.png"
  },
  {
    "id": 492611,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Navarch 6mm Ring (Navy & Silver, 66/21mm)",
    "fullTitle": "Pig & Hen - Navarch 6mm Ring (Navy & Silver, 66/21mm)",
    "price": "$130.00",
    "priceNum": 130,
    "sku": "PH-NAV-RNG-NVY-66-0014",
    "barcodes": [
      "PH-NAV-RNG-NVY-66-0014",
      "492611",
      "PHNAVRNGNVY660014"
    ],
    "pitch": "Stainless Steel/Marine rope -- means leader of ships in greek. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492611/edit",
    "img": "https://images.momence.com/h/200431/product-image/4b77b522-5c09-4f25-a719-fd861fd48add.png"
  },
  {
    "id": 492612,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Navarch 6mm Ring (Navy & Silver, 69/22mm)",
    "fullTitle": "Pig & Hen - Navarch 6mm Ring (Navy & Silver, 69/22mm)",
    "price": "$130.00",
    "priceNum": 130,
    "sku": "PH-NAV-RNG-NVY-69-0015",
    "barcodes": [
      "PH-NAV-RNG-NVY-69-0015",
      "492612",
      "PHNAVRNGNVY690015"
    ],
    "pitch": "Stainless Steel/Marine rope -- means leader of ships in greek. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492612/edit",
    "img": "https://images.momence.com/h/200431/product-image/0958581f-97cb-47a2-9907-e08617e415f4.png"
  },
  {
    "id": 539099,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Navarch 6mm Ring (Slate Grey & Bronze, 66/21mm)",
    "fullTitle": "Pig & Hen - Navarch 6mm Ring (Slate Grey & Bronze, 66/21mm)",
    "price": "$130.00",
    "priceNum": 130,
    "sku": "Na6RiSlaGre|Bro66",
    "barcodes": [
      "Na6RiSlaGre|Bro66",
      "539099",
      "Na6RiSlaGreBro66"
    ],
    "pitch": "Stainless Steel/Marine rope -- means leader of ships in greek. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/539099/edit",
    "img": "https://images.momence.com/h/200431/product-image/a61a4c26-3b6e-46d1-b068-9a96d2229d6e.png"
  },
  {
    "id": 539097,
    "department": "Fine Jewelry & Modern Adornments",
    "brand": "Pig & Hen",
    "name": "Navarch 6mm Ring (Slate Grey & Bronze, 69/22mm)",
    "fullTitle": "Pig & Hen - Navarch 6mm Ring (Slate Grey & Bronze, 69/22mm)",
    "price": "$130.00",
    "priceNum": 130,
    "sku": "Na6RiSlaGre|Bro69",
    "barcodes": [
      "Na6RiSlaGre|Bro69",
      "539097",
      "Na6RiSlaGreBro69"
    ],
    "pitch": "Stainless Steel/Marine rope -- means leader of ships in greek. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience. Handcrafted in Amsterdam with authentic nautical circular rope and marine-grade stainless steel for lifetime waterproof resilience.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/539097/edit",
    "img": "https://images.momence.com/h/200431/product-image/a86accc9-394d-4b01-943a-97dcd26df522.png"
  },
  {
    "id": 492515,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Avadir and Co",
    "name": "Brown / 5-Slot Watch Box",
    "fullTitle": "Avadir and Co - Brown / 5-Slot Watch Box",
    "price": "$89.99",
    "priceNum": 89.99,
    "sku": "AC-BOX-WAT-0005",
    "barcodes": [
      "AC-BOX-WAT-0005",
      "492515",
      "ACBOXWAT0005"
    ],
    "pitch": "Handcrafted luxury vegan leather lifestyle accessory designed with durable water-resistant lining, brass hardware, and timeless minimalist silhouette.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492515/edit",
    "img": "https://images.momence.com/h/200431/product-image/16d7e9e1-4bd3-4d10-b07c-b2ce4ac1e66f.jpg"
  },
  {
    "id": 492512,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Avadir and Co",
    "name": "Chocolate / M-Vegan Leather Dopp Kit | Toiletry Bag for Men",
    "fullTitle": "Avadir and Co - Chocolate / M-Vegan Leather Dopp Kit | Toiletry Bag for Men",
    "price": "$49.99",
    "priceNum": 49.99,
    "sku": "AC-DOP-CHO-0002",
    "barcodes": [
      "AC-DOP-CHO-0002",
      "492512",
      "ACDOPCHO0002"
    ],
    "pitch": "Handcrafted luxury vegan leather lifestyle accessory designed with durable water-resistant lining, brass hardware, and timeless minimalist silhouette.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492512/edit",
    "img": "https://images.momence.com/h/200431/product-image/43112676-aa9e-47e9-8170-f96c24453580.jpg"
  },
  {
    "id": 492511,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Avadir and Co",
    "name": "Chocolate / S- Vegan Leather Dopp Kit | Toiletry Bag for Men",
    "fullTitle": "Avadir and Co - Chocolate / S- Vegan Leather Dopp Kit | Toiletry Bag for Men",
    "price": "$44.99",
    "priceNum": 44.99,
    "sku": "AC-DOP-CHO-0001",
    "barcodes": [
      "AC-DOP-CHO-0001",
      "492511",
      "ACDOPCHO0001"
    ],
    "pitch": "Handcrafted luxury vegan leather lifestyle accessory designed with durable water-resistant lining, brass hardware, and timeless minimalist silhouette.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492511/edit",
    "img": "https://images.momence.com/h/200431/product-image/ac14e48a-d0e0-4008-858c-51a7fac7e421.jpg"
  },
  {
    "id": 492514,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Avadir and Co",
    "name": "Silver Referee Whistle",
    "fullTitle": "Avadir and Co - Silver Referee Whistle",
    "price": "$11.99",
    "priceNum": 11.99,
    "sku": "AC-ACC-WHI-0004",
    "barcodes": [
      "AC-ACC-WHI-0004",
      "492514",
      "ACACCWHI0004"
    ],
    "pitch": "Handcrafted luxury vegan leather lifestyle accessory designed with durable water-resistant lining, brass hardware, and timeless minimalist silhouette.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492514/edit",
    "img": "https://images.momence.com/h/200431/product-image/1b86ef4a-41ed-4fd3-91f8-b8695787223e.jpg"
  },
  {
    "id": 492320,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Creative women",
    "name": "HEBRON HANDBLOWN HAMMERED GLASS VASES",
    "fullTitle": "Creative women - HEBRON HANDBLOWN HAMMERED GLASS VASES",
    "price": "$146.00",
    "priceNum": 146,
    "sku": "CW-VAS-HEB-BLU-0047",
    "barcodes": [
      "CW-VAS-HEB-BLU-0047",
      "492320",
      "CWVASHEBBLU0047"
    ],
    "pitch": "Handblown from recycled glass. Each vase is ethically crafted in India using time-honored glass blowing techniques passed through generations. Each is made from 100% recycled glass. 10 x 10 x 12 inches. Due to the artisanal nature of this product, slight variations in size and color will occur. Fair-trade artisan home good supporting global women makers.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492320/edit",
    "img": "https://images.momence.com/h/200431/product-image/fc2e6c1a-f1e6-4347-b53c-ba0d4aef8e35.png"
  },
  {
    "id": 492329,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Creative women",
    "name": "HEBRON HANDBLOWN HAMMERED GLASS VASES",
    "fullTitle": "Creative women - HEBRON HANDBLOWN HAMMERED GLASS VASES",
    "price": "$146.00",
    "priceNum": 146,
    "sku": "CW-HLD-BRN-0056",
    "barcodes": [
      "CW-HLD-BRN-0056",
      "492329",
      "CWHLDBRN0056"
    ],
    "pitch": "Handblown from recycled glass. Each vase is ethically crafted in India using time-honored glass blowing techniques passed through generations. Each is made from 100% recycled glass. 10 x 10 x 12 inches. Due to the artisanal nature of this product, slight variations in size and color will occur. Fair-trade artisan home good supporting global women makers.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492329/edit",
    "img": "https://images.momence.com/h/200431/product-image/f4a47c17-525b-49b6-96d2-e87b761e81c7.png"
  },
  {
    "id": 492328,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Creative women",
    "name": "HEBRON HANDBLOWN HAMMERED GLASS VASES",
    "fullTitle": "Creative women - HEBRON HANDBLOWN HAMMERED GLASS VASES",
    "price": "$146.00",
    "priceNum": 146,
    "sku": "CW-VAS-HEB-CLR-0055",
    "barcodes": [
      "CW-VAS-HEB-CLR-0055",
      "492328",
      "CWVASHEBCLR0055"
    ],
    "pitch": "Handblown from recycled glass. Each vase is ethically crafted in India using time-honored glass blowing techniques passed through generations. Each is made from 100% recycled glass. 10 x 10 x 12 inches. Due to the artisanal nature of this product, slight variations in size and color will occur. Fair-trade artisan home good supporting global women makers.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492328/edit",
    "img": "https://images.momence.com/h/200431/product-image/4cf72f61-4c19-4d5d-ac1e-09a18b2cc7f9.png"
  },
  {
    "id": 492319,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Creative women",
    "name": "HEBRON HANDBLOWN HAMMERED GLASS VASES",
    "fullTitle": "Creative women - HEBRON HANDBLOWN HAMMERED GLASS VASES",
    "price": "$146.00",
    "priceNum": 146,
    "sku": "CW-VAS-HEB-BGY-0046",
    "barcodes": [
      "CW-VAS-HEB-BGY-0046",
      "492319",
      "CWVASHEBBGY0046"
    ],
    "pitch": "Handblown from recycled glass. Each vase is ethically crafted in India using time-honored glass blowing techniques passed through generations. Each is made from 100% recycled glass. 10 x 10 x 12 inches. Due to the artisanal nature of this product, slight variations in size and color will occur. Fair-trade artisan home good supporting global women makers.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492319/edit",
    "img": "https://images.momence.com/h/200431/product-image/2a6a78e6-0fb5-48a0-84a0-d3a4ff1daccb.png"
  },
  {
    "id": 492315,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Creative women",
    "name": "HEBRON HANDBLOWN HAMMERED GLASS VASES",
    "fullTitle": "Creative women - HEBRON HANDBLOWN HAMMERED GLASS VASES",
    "price": "$146.00",
    "priceNum": 146,
    "sku": "CW-VAS-HEB-BLU-0042",
    "barcodes": [
      "CW-VAS-HEB-BLU-0042",
      "492315",
      "CWVASHEBBLU0042"
    ],
    "pitch": "100% Recycled Glass. Handblown from recycled glass. Each vase is ethically crafted in India using time-honored glass blowing techniques passed through generations. Each is made from 100% recycled glass. 10 x 10 x 12 inches. Due to the artisanal nature of this product, slight variations in size and color will occur. Fair-trade artisan home good supporting global women makers.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492315/edit",
    "img": "https://images.momence.com/h/200431/product-image/b41d1f4f-62b0-42e1-96c8-65be63d2fdc4.png"
  },
  {
    "id": 492318,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Creative women",
    "name": "Haley Handblown Hammered Glass Bud Vase",
    "fullTitle": "Creative women - Haley Handblown Hammered Glass Bud Vase",
    "price": "$39.99",
    "priceNum": 39.99,
    "sku": "CW-VAS-BUD-MAR-0045",
    "barcodes": [
      "CW-VAS-BUD-MAR-0045",
      "492318",
      "CWVASBUDMAR0045"
    ],
    "pitch": "Artisan-crafted home essential ethically handmade by global women artisans using sustainable, high-quality materials and traditional craft techniques.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492318/edit",
    "img": "https://images.momence.com/h/200431/product-image/9846c6be-c02f-4b34-b152-853741a90a9b.png"
  },
  {
    "id": 492324,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Creative women",
    "name": "Handblown Glass Carafe Amber",
    "fullTitle": "Creative women - Handblown Glass Carafe Amber",
    "price": "$65.00",
    "priceNum": 65,
    "sku": "CW-CAR-AMB-0051",
    "barcodes": [
      "CW-CAR-AMB-0051",
      "492324",
      "CWCARAMB0051"
    ],
    "pitch": "Handblown from recycled glass then meticulously hammered by hand for a truly unique finish. Set includes a carafe and lid that doubles as a small drinking glass. Ethically made by a woman-owned company, this recycled glass collection aims to support people and the planet. Our carafes are made from colored glass (not sprayed) to ensure the color will last a lifetime. Please note that these items are 100% handmade and slight size variations and imperfections may occur. • Dishwasher safe • 3.5 x 3.5 x 10 inches • Ethically crafted in India. Fair-trade artisan home good supporting global women makers.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492324/edit",
    "img": "https://images.momence.com/h/200431/product-image/76453717-efac-4aa5-b619-67e5aea619e3.png"
  },
  {
    "id": 492326,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Creative women",
    "name": "Handblown Glass Carafe Blush",
    "fullTitle": "Creative women - Handblown Glass Carafe Blush",
    "price": "$65.00",
    "priceNum": 65,
    "sku": "CW-CAR-BLU-0053",
    "barcodes": [
      "CW-CAR-BLU-0053",
      "492326",
      "CWCARBLU0053"
    ],
    "pitch": "Handblown from recycled glass then meticulously hammered by hand for a truly unique finish. Set includes a carafe and lid that doubles as a small drinking glass. Ethically made by a woman-owned company, this recycled glass collection aims to support people and the planet. Our carafes are made from colored glass (not sprayed) to ensure the color will last a lifetime. Please note that these items are 100% handmade and slight size variations and imperfections may occur. • Dishwasher safe • 3.5 x 3.5 x 10 inches • Ethically crafted in India. Fair-trade artisan home good supporting global women makers.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492326/edit",
    "img": "https://images.momence.com/h/200431/product-image/76e00008-c9d6-4052-a7dc-3bc05d8f39d7.png"
  },
  {
    "id": 492325,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Creative women",
    "name": "Handblown Glass Carafe clear",
    "fullTitle": "Creative women - Handblown Glass Carafe clear",
    "price": "$65.00",
    "priceNum": 65,
    "sku": "CW-CAR-CLR-0052",
    "barcodes": [
      "CW-CAR-CLR-0052",
      "492325",
      "CWCARCLR0052"
    ],
    "pitch": "Handblown from recycled glass then meticulously hammered by hand for a truly unique finish. Set includes a carafe and lid that doubles as a small drinking glass. Ethically made by a woman-owned company, this recycled glass collection aims to support people and the planet. Our carafes are made from colored glass (not sprayed) to ensure the color will last a lifetime. Please note that these items are 100% handmade and slight size variations and imperfections may occur. • Dishwasher safe • 3.5 x 3.5 x 10 inches • Ethically crafted in India • Ships in drop-tested packaging. Fair-trade artisan home good supporting global women makers.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492325/edit",
    "img": "https://images.momence.com/h/200431/product-image/7d6dfb32-efd3-484a-901b-b07871054f5c.png"
  },
  {
    "id": 492323,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Creative women",
    "name": "Handblown Hammered Coupe Cocktail Glass Pair",
    "fullTitle": "Creative women - Handblown Hammered Coupe Cocktail Glass Pair",
    "price": "$75.00",
    "priceNum": 75,
    "sku": "CW-GLS-COP-AMB-0050",
    "barcodes": [
      "CW-GLS-COP-AMB-0050",
      "492323",
      "CWGLSCOPAMB0050"
    ],
    "pitch": "Artisan-crafted home essential ethically handmade by global women artisans using sustainable, high-quality materials and traditional craft techniques.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492323/edit",
    "img": "https://images.momence.com/h/200431/product-image/cb22cacf-ad89-4d38-b9b2-c2e616c53670.png"
  },
  {
    "id": 492331,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Creative women",
    "name": "Handblown Hammered Coupe Cocktail Glass Pair",
    "fullTitle": "Creative women - Handblown Hammered Coupe Cocktail Glass Pair",
    "price": "$75.00",
    "priceNum": 75,
    "sku": "CW-GLS-TUM-BLU-0058",
    "barcodes": [
      "CW-GLS-TUM-BLU-0058",
      "492331",
      "CWGLSTUMBLU0058"
    ],
    "pitch": "Artisan-crafted home essential ethically handmade by global women artisans using sustainable, high-quality materials and traditional craft techniques.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492331/edit",
    "img": "https://images.momence.com/h/200431/product-image/92d77b96-0f42-4f33-acf3-06ec40868c4c.png"
  },
  {
    "id": 492330,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Creative women",
    "name": "Handblown Hammered Coupe Cocktail Glass Pair",
    "fullTitle": "Creative women - Handblown Hammered Coupe Cocktail Glass Pair",
    "price": "$75.00",
    "priceNum": 75,
    "sku": "CW-GLS-TUM-SMK-0057",
    "barcodes": [
      "CW-GLS-TUM-SMK-0057",
      "492330",
      "CWGLSTUMSMK0057"
    ],
    "pitch": "Artisan-crafted home essential ethically handmade by global women artisans using sustainable, high-quality materials and traditional craft techniques.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492330/edit",
    "img": "https://images.momence.com/h/200431/product-image/0888ea33-2f54-46a9-a2b3-486a944f5e1e.png"
  },
  {
    "id": 492321,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Creative women",
    "name": "Handblown Hammered Glass Water Tumbler | Pair of 2",
    "fullTitle": "Creative women - Handblown Hammered Glass Water Tumbler | Pair of 2",
    "price": "$55.99",
    "priceNum": 55.99,
    "sku": "CW-GLS-TUM-SMK-0048",
    "barcodes": [
      "CW-GLS-TUM-SMK-0048",
      "492321",
      "CWGLSTUMSMK0048"
    ],
    "pitch": "Artisan-crafted home essential ethically handmade by global women artisans using sustainable, high-quality materials and traditional craft techniques.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492321/edit",
    "img": "https://images.momence.com/h/200431/product-image/1cec090f-8940-4d3a-8cd0-3dc2c1d46446.png"
  },
  {
    "id": 492322,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Creative women",
    "name": "Handblown Hammered Glass Water Tumbler | Pair of 2",
    "fullTitle": "Creative women - Handblown Hammered Glass Water Tumbler | Pair of 2",
    "price": "$55.99",
    "priceNum": 55.99,
    "sku": "CW-GLS-TUM-BLU-0049",
    "barcodes": [
      "CW-GLS-TUM-BLU-0049",
      "492322",
      "CWGLSTUMBLU0049"
    ],
    "pitch": "Artisan-crafted home essential ethically handmade by global women artisans using sustainable, high-quality materials and traditional craft techniques.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492322/edit",
    "img": "https://images.momence.com/h/200431/product-image/b3532ef3-7012-4867-9eb3-18a45c4f214a.png"
  },
  {
    "id": 492316,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Creative women",
    "name": "Handblown Hammered Glass Water Tumbler | Pair of 2",
    "fullTitle": "Creative women - Handblown Hammered Glass Water Tumbler | Pair of 2",
    "price": "$55.99",
    "priceNum": 55.99,
    "sku": "CW-GLS-TUM-AMB-0043",
    "barcodes": [
      "CW-GLS-TUM-AMB-0043",
      "492316",
      "CWGLSTUMAMB0043"
    ],
    "pitch": "Artisan-crafted home essential ethically handmade by global women artisans using sustainable, high-quality materials and traditional craft techniques.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492316/edit",
    "img": "https://images.momence.com/h/200431/product-image/a06fd01c-3155-4f7f-a9af-0d90b09c3842.png"
  },
  {
    "id": 492317,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Creative women",
    "name": "Handblown Hammered Glasses | Set of 4",
    "fullTitle": "Creative women - Handblown Hammered Glasses | Set of 4",
    "price": "$76.00",
    "priceNum": 76,
    "sku": "CW-GLS-BLU-0044",
    "barcodes": [
      "CW-GLS-BLU-0044",
      "492317",
      "CWGLSBLU0044"
    ],
    "pitch": "Artisan-crafted home essential ethically handmade by global women artisans using sustainable, high-quality materials and traditional craft techniques.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492317/edit",
    "img": "https://images.momence.com/h/200431/product-image/36baf255-05b6-4c6d-85fe-f866c834e135.png"
  },
  {
    "id": 492503,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Fancy Concrete",
    "name": "Black Fusion Marble Daso - Textured Concrete Bowl",
    "fullTitle": "Fancy Concrete - Black Fusion Marble Daso - Textured Concrete Bowl",
    "price": "$54.99",
    "priceNum": 54.99,
    "sku": "FC-BOW-BLA-0001",
    "barcodes": [
      "FC-BOW-BLA-0001",
      "492503",
      "FCBOWBLA0001"
    ],
    "pitch": "Architectural decorative bowl hand-cast from high-density artisanal concrete with bespoke marbled veining. A sculptural modern accent for studio tables or altars.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492503/edit",
    "img": "https://images.momence.com/h/200431/product-image/fc0e19a3-d99f-45a4-af84-1ea9deacfdab.jpg"
  },
  {
    "id": 492506,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Fancy Concrete",
    "name": "Black Fusion Marble Temis - Fluted Bow",
    "fullTitle": "Fancy Concrete - Black Fusion Marble Temis - Fluted Bow",
    "price": "$89.99",
    "priceNum": 89.99,
    "sku": "FC-BOW-BLA-0004",
    "barcodes": [
      "FC-BOW-BLA-0004",
      "492506",
      "FCBOWBLA0004"
    ],
    "pitch": "Architectural decorative bowl hand-cast from high-density artisanal concrete with bespoke marbled veining. A sculptural modern accent for studio tables or altars.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492506/edit",
    "img": "https://images.momence.com/h/200431/product-image/4ef8fab9-f1e5-430b-a9aa-19ccfd4c0178.jpg"
  },
  {
    "id": 504348,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Fancy Concrete",
    "name": "Bowl (Small)",
    "fullTitle": "Fancy Concrete - Bowl (Small)",
    "price": "$45.00",
    "priceNum": 45,
    "sku": "",
    "barcodes": [
      "",
      "504348"
    ],
    "pitch": "Architectural decorative bowl hand-cast from high-density artisanal concrete with bespoke marbled veining. A sculptural modern accent for studio tables or altars.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504348/edit",
    "img": "https://images.momence.com/h/200431/product-image/bb67772a-0f3d-4a7d-bd34-85c60ced9435.jpg"
  },
  {
    "id": 492507,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Fancy Concrete",
    "name": "Khaki Fusion Marble Temis - Fluted Bow",
    "fullTitle": "Fancy Concrete - Khaki Fusion Marble Temis - Fluted Bow",
    "price": "$89.99",
    "priceNum": 89.99,
    "sku": "FC-BOW-KHA-0005",
    "barcodes": [
      "FC-BOW-KHA-0005",
      "492507",
      "FCBOWKHA0005"
    ],
    "pitch": "Architectural decorative bowl hand-cast from high-density artisanal concrete with bespoke marbled veining. A sculptural modern accent for studio tables or altars.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492507/edit",
    "img": "https://images.momence.com/h/200431/product-image/d1c05140-13d3-4a3e-be57-d62b35e7b286.jpg"
  },
  {
    "id": 492504,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Fancy Concrete",
    "name": "Off White Daso - Textured Concrete Bowl",
    "fullTitle": "Fancy Concrete - Off White Daso - Textured Concrete Bowl",
    "price": "$54.99",
    "priceNum": 54.99,
    "sku": "FC-BOW-OFF-0002",
    "barcodes": [
      "FC-BOW-OFF-0002",
      "492504",
      "FCBOWOFF0002"
    ],
    "pitch": "Architectural decorative bowl hand-cast from high-density artisanal concrete with bespoke marbled veining. A sculptural modern accent for studio tables or altars.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492504/edit",
    "img": "https://images.momence.com/h/200431/product-image/1d3d9e61-6e62-47a3-b576-07f615407eed.jpg"
  },
  {
    "id": 492505,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Fancy Concrete",
    "name": "Peach Fusion Marble Daso - Textured Concrete Bowl",
    "fullTitle": "Fancy Concrete - Peach Fusion Marble Daso - Textured Concrete Bowl",
    "price": "$54.99",
    "priceNum": 54.99,
    "sku": "FC-BOW-PEA-0003",
    "barcodes": [
      "FC-BOW-PEA-0003",
      "492505",
      "FCBOWPEA0003"
    ],
    "pitch": "Architectural decorative bowl hand-cast from high-density artisanal concrete with bespoke marbled veining. A sculptural modern accent for studio tables or altars.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492505/edit",
    "img": "https://images.momence.com/h/200431/product-image/21c1ce8e-c1a3-4031-9104-a3935045e4cd.jpg"
  },
  {
    "id": 492508,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Fancy Concrete",
    "name": "Tan Fusion Marble Temis - Fluted Bow",
    "fullTitle": "Fancy Concrete - Tan Fusion Marble Temis - Fluted Bow",
    "price": "$89.99",
    "priceNum": 89.99,
    "sku": "FC-BOW-TAN-0006",
    "barcodes": [
      "FC-BOW-TAN-0006",
      "492508",
      "FCBOWTAN0006"
    ],
    "pitch": "Architectural decorative bowl hand-cast from high-density artisanal concrete with bespoke marbled veining. A sculptural modern accent for studio tables or altars.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492508/edit",
    "img": "https://images.momence.com/h/200431/product-image/11ed5919-cf34-45a6-ad88-74aed95598f8.jpg"
  },
  {
    "id": 492455,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Handker Bandanas",
    "name": "34\" Dandy Wild Rag Bandana",
    "fullTitle": "Handker Bandanas - 34\" Dandy Wild Rag Bandana",
    "price": "$34.99",
    "priceNum": 34.99,
    "sku": "HB-BAN-DAN-0011",
    "barcodes": [
      "HB-BAN-DAN-0011",
      "492455",
      "HBBANDAN0011"
    ],
    "pitch": "Curated lifestyle and wellness essential selected exclusively for The Practice community.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492455/edit",
    "img": "https://images.momence.com/h/200431/product-image/d6cfb18e-959f-4bc0-a7a4-8ec97b626360.png"
  },
  {
    "id": 492451,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Handker Bandanas",
    "name": "Handker - No. 012 Eliza Bandana",
    "fullTitle": "Handker Bandanas - Handker - No. 012 Eliza Bandana",
    "price": "$34.99",
    "priceNum": 34.99,
    "sku": "HB-ORA-ELI-0007",
    "barcodes": [
      "HB-ORA-ELI-0007",
      "492451",
      "HBORAELI0007"
    ],
    "pitch": "Bespoke screen-printed bandana woven from 100% soft natural cotton featuring custom hand-drawn illustrations. Beautiful as neckwear, hair accent, or wall art.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492451/edit",
    "img": "https://images.momence.com/h/200431/product-image/861cce07-e862-4b5e-bbcb-f2b9b00332b6.png"
  },
  {
    "id": 492452,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Handker Bandanas",
    "name": "Handker - No. 056 Betty Bandana",
    "fullTitle": "Handker Bandanas - Handker - No. 056 Betty Bandana",
    "price": "$34.99",
    "priceNum": 34.99,
    "sku": "HB-ORA-BET-0008",
    "barcodes": [
      "HB-ORA-BET-0008",
      "492452",
      "HBORABET0008"
    ],
    "pitch": "Bespoke screen-printed bandana woven from 100% soft natural cotton featuring custom hand-drawn illustrations. Beautiful as neckwear, hair accent, or wall art.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492452/edit",
    "img": "https://images.momence.com/h/200431/product-image/ae2951c5-7a02-43d7-a75e-adb3ca32f1c9.png"
  },
  {
    "id": 492445,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Handker Bandanas",
    "name": "Handker - No. 068 Desert",
    "fullTitle": "Handker Bandanas - Handker - No. 068 Desert",
    "price": "$34.99",
    "priceNum": 34.99,
    "sku": "HB-ORA-DES-0001",
    "barcodes": [
      "HB-ORA-DES-0001",
      "492445",
      "HBORADES0001"
    ],
    "pitch": "Bespoke screen-printed bandana woven from 100% soft natural cotton featuring custom hand-drawn illustrations. Beautiful as neckwear, hair accent, or wall art.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492445/edit",
    "img": "https://images.momence.com/h/200431/product-image/691929fe-b8fd-4c72-b5e3-2e8822ca2c46.png"
  },
  {
    "id": 492446,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Handker Bandanas",
    "name": "Handker - No. 081 Martha Bandana",
    "fullTitle": "Handker Bandanas - Handker - No. 081 Martha Bandana",
    "price": "$34.99",
    "priceNum": 34.99,
    "sku": "HB-ORA-MAR-0002",
    "barcodes": [
      "HB-ORA-MAR-0002",
      "492446",
      "HBORAMAR0002"
    ],
    "pitch": "Bespoke screen-printed bandana woven from 100% soft natural cotton featuring custom hand-drawn illustrations. Beautiful as neckwear, hair accent, or wall art.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492446/edit",
    "img": "https://images.momence.com/h/200431/product-image/7efb0da5-2ae6-486c-bb82-d5696a81472f.png"
  },
  {
    "id": 492453,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Handker Bandanas",
    "name": "Handker - No. 103 Dandy Bandana",
    "fullTitle": "Handker Bandanas - Handker - No. 103 Dandy Bandana",
    "price": "$34.99",
    "priceNum": 34.99,
    "sku": "HB-ORA-DAN-0009",
    "barcodes": [
      "HB-ORA-DAN-0009",
      "492453",
      "HBORADAN0009"
    ],
    "pitch": "Bespoke screen-printed bandana woven from 100% soft natural cotton featuring custom hand-drawn illustrations. Beautiful as neckwear, hair accent, or wall art.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492453/edit",
    "img": "https://images.momence.com/h/200431/product-image/ec69c899-2504-447b-a788-4b5bec8069d8.png"
  },
  {
    "id": 492447,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Handker Bandanas",
    "name": "Handker - No. 111 Winnie Bandana",
    "fullTitle": "Handker Bandanas - Handker - No. 111 Winnie Bandana",
    "price": "$34.99",
    "priceNum": 34.99,
    "sku": "HB-ORA-WIN-0003",
    "barcodes": [
      "HB-ORA-WIN-0003",
      "492447",
      "HBORAWIN0003"
    ],
    "pitch": "Bespoke screen-printed bandana woven from 100% soft natural cotton featuring custom hand-drawn illustrations. Beautiful as neckwear, hair accent, or wall art.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492447/edit",
    "img": "https://images.momence.com/h/200431/product-image/3a77cc9f-4da0-463f-8565-0e5d11c51667.png"
  },
  {
    "id": 492448,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Handker Bandanas",
    "name": "Handker - No. 133 Ingrid Bandana",
    "fullTitle": "Handker Bandanas - Handker - No. 133 Ingrid Bandana",
    "price": "$34.99",
    "priceNum": 34.99,
    "sku": "HB-ORA-ING-0004",
    "barcodes": [
      "HB-ORA-ING-0004",
      "492448",
      "HBORAING0004"
    ],
    "pitch": "Bespoke screen-printed bandana woven from 100% soft natural cotton featuring custom hand-drawn illustrations. Beautiful as neckwear, hair accent, or wall art.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492448/edit",
    "img": "https://images.momence.com/h/200431/product-image/60afd6c7-0975-4301-9b94-06f95aba1f38.png"
  },
  {
    "id": 492454,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Handker Bandanas",
    "name": "Handker - No. 134 Violet Bandana",
    "fullTitle": "Handker Bandanas - Handker - No. 134 Violet Bandana",
    "price": "$34.99",
    "priceNum": 34.99,
    "sku": "HB-ORA-VIO-0010",
    "barcodes": [
      "HB-ORA-VIO-0010",
      "492454",
      "HBORAVIO0010"
    ],
    "pitch": "Bespoke screen-printed bandana woven from 100% soft natural cotton featuring custom hand-drawn illustrations. Beautiful as neckwear, hair accent, or wall art.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492454/edit",
    "img": "https://images.momence.com/h/200431/product-image/57bb6ab1-0956-4b2a-9099-798dc68b2c39.png"
  },
  {
    "id": 492449,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Handker Bandanas",
    "name": "Handker - No. 500 Sylvia Bandana",
    "fullTitle": "Handker Bandanas - Handker - No. 500 Sylvia Bandana",
    "price": "$34.99",
    "priceNum": 34.99,
    "sku": "HB-ORA-SYL-0005",
    "barcodes": [
      "HB-ORA-SYL-0005",
      "492449",
      "HBORASYL0005"
    ],
    "pitch": "Bespoke screen-printed bandana woven from 100% soft natural cotton featuring custom hand-drawn illustrations. Beautiful as neckwear, hair accent, or wall art.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492449/edit",
    "img": "https://images.momence.com/h/200431/product-image/9f06408e-46b8-494f-8f48-7a3dcffb9e98.png"
  },
  {
    "id": 492450,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Handker Bandanas",
    "name": "Handker - No. 501 Carly Bandana",
    "fullTitle": "Handker Bandanas - Handker - No. 501 Carly Bandana",
    "price": "$34.99",
    "priceNum": 34.99,
    "sku": "HB-ORA-CAR-0006",
    "barcodes": [
      "HB-ORA-CAR-0006",
      "492450",
      "HBORACAR0006"
    ],
    "pitch": "Bespoke screen-printed bandana woven from 100% soft natural cotton featuring custom hand-drawn illustrations. Beautiful as neckwear, hair accent, or wall art.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492450/edit",
    "img": "https://images.momence.com/h/200431/product-image/f6052eb9-2bdc-4de7-a459-b7b15a4754e0.png"
  },
  {
    "id": 498734,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Jaypore",
    "name": "Golden Flower Spoon",
    "fullTitle": "Jaypore - Golden Flower Spoon",
    "price": "$12.99",
    "priceNum": 12.99,
    "sku": "",
    "barcodes": [
      "",
      "498734"
    ],
    "pitch": "Handcrafted solid brass decorative floral spoon inspired by traditional Indian metal arts. Perfect for mindful tea service and elegant entertaining.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/498734/edit",
    "img": "https://images.momence.com/h/200431/product-image/fdd9fa2f-f999-4dda-b68c-a0750dbc3f42.jpg"
  },
  {
    "id": 492424,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Kiyo Home | No Tariffs",
    "name": "Brass Lizard",
    "fullTitle": "Kiyo Home | No Tariffs - Brass Lizard",
    "price": "$70.00",
    "priceNum": 70,
    "sku": "KH-DEC-LIZ-0005",
    "barcodes": [
      "KH-DEC-LIZ-0005",
      "492424",
      "KHDECLIZ0005"
    ],
    "pitch": "Curated lifestyle and wellness essential selected exclusively for The Practice community.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492424/edit",
    "img": "https://images.momence.com/h/200431/product-image/c2664445-76ba-48e1-b0f3-34be58302049.png"
  },
  {
    "id": 492423,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Kiyo Home | No Tariffs",
    "name": "Brass Octopus Sculpture",
    "fullTitle": "Kiyo Home | No Tariffs - Brass Octopus Sculpture",
    "price": "$33.99",
    "priceNum": 33.99,
    "sku": "KH-DEC-OCT-0004",
    "barcodes": [
      "KH-DEC-OCT-0004",
      "492423",
      "KHDECOCT0004"
    ],
    "pitch": "Curated lifestyle and wellness essential selected exclusively for The Practice community.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492423/edit",
    "img": "https://images.momence.com/h/200431/product-image/b2f21586-4499-4809-a13b-49f339e9f780.png"
  },
  {
    "id": 492434,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Kiyo Home | No Tariffs",
    "name": "Kiyo Home - Cellular Rotating Whiskey Glass with Wood Coaster",
    "fullTitle": "Kiyo Home | No Tariffs - Kiyo Home - Cellular Rotating Whiskey Glass with Wood Coaster",
    "price": "$56.00",
    "priceNum": 56,
    "sku": "KH-GLS-WHI-0015",
    "barcodes": [
      "KH-GLS-WHI-0015",
      "492434",
      "KHGLSWHI0015"
    ],
    "pitch": "Sleek contemporary home and bar accessory crafted to unite functional utility with sculptural minimalist aesthetic.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492434/edit",
    "img": "https://images.momence.com/h/200431/product-image/b8a2cc28-d190-498d-a29e-b0183dcd04c8.png"
  },
  {
    "id": 492425,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Kiyo Home | No Tariffs",
    "name": "Kiyo Home - Gold Ginkgo Leaf Tray",
    "fullTitle": "Kiyo Home | No Tariffs - Kiyo Home - Gold Ginkgo Leaf Tray",
    "price": "$100.00",
    "priceNum": 100,
    "sku": "KH-TRAY-GIN-0006",
    "barcodes": [
      "KH-TRAY-GIN-0006",
      "492425",
      "KHTRAYGIN0006"
    ],
    "pitch": "Sleek contemporary home and bar accessory crafted to unite functional utility with sculptural minimalist aesthetic.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492425/edit",
    "img": "https://images.momence.com/h/200431/product-image/7edb7189-84e7-4306-ba53-65ebac72b0e8.png"
  },
  {
    "id": 492421,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Kiyo Home | No Tariffs",
    "name": "Kiyo Home - Large- White Rippled Ceramic Vase",
    "fullTitle": "Kiyo Home | No Tariffs - Kiyo Home - Large- White Rippled Ceramic Vase",
    "price": "$109.99",
    "priceNum": 109.99,
    "sku": "KH-VAS-RIP-0002",
    "barcodes": [
      "KH-VAS-RIP-0002",
      "492421",
      "KHVASRIP0002"
    ],
    "pitch": "Sleek contemporary home and bar accessory crafted to unite functional utility with sculptural minimalist aesthetic.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492421/edit",
    "img": "https://images.momence.com/h/200431/product-image/00581f96-1d29-4630-ae88-74feceb5646c.png"
  },
  {
    "id": 492428,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Kiyo Home | No Tariffs",
    "name": "Kiyo Home - Matte Ceramic Vase",
    "fullTitle": "Kiyo Home | No Tariffs - Kiyo Home - Matte Ceramic Vase",
    "price": "$276.00",
    "priceNum": 276,
    "sku": "KH-VAS-SEN-0009",
    "barcodes": [
      "KH-VAS-SEN-0009",
      "492428",
      "KHVASSEN0009"
    ],
    "pitch": "Sleek contemporary home and bar accessory crafted to unite functional utility with sculptural minimalist aesthetic.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492428/edit",
    "img": "https://images.momence.com/h/200431/product-image/7dfcb434-a360-4c70-a3e2-0540ec9d7ef4.png"
  },
  {
    "id": 492427,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Kiyo Home | No Tariffs",
    "name": "Kiyo Home - Matte Ceramic Vase",
    "fullTitle": "Kiyo Home | No Tariffs - Kiyo Home - Matte Ceramic Vase",
    "price": "$276.00",
    "priceNum": 276,
    "sku": "KH-VAS-HER-0008",
    "barcodes": [
      "KH-VAS-HER-0008",
      "492427",
      "KHVASHER0008"
    ],
    "pitch": "Sleek contemporary home and bar accessory crafted to unite functional utility with sculptural minimalist aesthetic.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492427/edit",
    "img": "https://images.momence.com/h/200431/product-image/f599777f-2629-434d-b536-94d59a75026b.png"
  },
  {
    "id": 492420,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Kiyo Home | No Tariffs",
    "name": "Kiyo Home - Small-White Rippled Ceramic Vase",
    "fullTitle": "Kiyo Home | No Tariffs - Kiyo Home - Small-White Rippled Ceramic Vase",
    "price": "$82.99",
    "priceNum": 82.99,
    "sku": "KH-VAS-RIP-0001",
    "barcodes": [
      "KH-VAS-RIP-0001",
      "492420",
      "KHVASRIP0001"
    ],
    "pitch": "Sleek contemporary home and bar accessory crafted to unite functional utility with sculptural minimalist aesthetic.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492420/edit",
    "img": "https://images.momence.com/h/200431/product-image/5da88d0e-99f4-4abf-ae26-9db53aeb111e.png"
  },
  {
    "id": 492426,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Kiyo Home | No Tariffs",
    "name": "Kiyo Home - Whispers- Matte Ceramic Vase",
    "fullTitle": "Kiyo Home | No Tariffs - Kiyo Home - Whispers- Matte Ceramic Vase",
    "price": "$276.00",
    "priceNum": 276,
    "sku": "KH-VAS-MAT-0007",
    "barcodes": [
      "KH-VAS-MAT-0007",
      "492426",
      "KHVASMAT0007"
    ],
    "pitch": "Sleek contemporary home and bar accessory crafted to unite functional utility with sculptural minimalist aesthetic.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492426/edit",
    "img": "https://images.momence.com/h/200431/product-image/3cd6adb0-235b-4c33-84a1-561c1a6c3c13.png"
  },
  {
    "id": 492433,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Kiyo Home | No Tariffs",
    "name": "The Gneiss Guy - Rose Quartz tower",
    "fullTitle": "Kiyo Home | No Tariffs - The Gneiss Guy - Rose Quartz tower",
    "price": "$140.00",
    "priceNum": 140,
    "sku": "KH-BAR-COC-0014",
    "barcodes": [
      "KH-BAR-COC-0014",
      "492433",
      "KHBARCOC0014"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Master healer crystal that amplifies intention, cleanses the energetic field, and directs focused vitality. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492433/edit",
    "img": "https://images.momence.com/h/200431/product-image/7e496ef5-af43-42e1-91e9-ac0ebc1b56be.png"
  },
  {
    "id": 492593,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Lola Blankets",
    "name": "Antique Ivory (The Original Lola)",
    "fullTitle": "Lola Blankets - Antique Ivory (The Original Lola)",
    "price": "$499.00",
    "priceNum": 499,
    "sku": "LOLA_ANTQIVR",
    "barcodes": [
      "LOLA_ANTQIVR",
      "492593",
      "LOLAANTQIVR"
    ],
    "pitch": "Experience cloud-like luxury with The Original Lola Blanket in Antique Ivory. Crafted with double-sided, ultra-plush faux fur featuring Lola's signature 4-way therapeutic stretch and elastic ribbed banding that hugs your body. 100% vegan, cruelty-free, zero-shed, and OEKO-TEX Standard 100 certified for safe, non-toxic comfort. Machine washable, stain-resistant, and hand-dyed for timeless elegance.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492593/edit",
    "img": "https://images.momence.com/h/200431/product-image/afc3ee94-dfbc-4ea8-8bc1-22698293f2f8.jpg"
  },
  {
    "id": 492592,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Lola Blankets",
    "name": "Blush Pink (The Original Lola)",
    "fullTitle": "Lola Blankets - Blush Pink (The Original Lola)",
    "price": "$499.00",
    "priceNum": 499,
    "sku": "LOLA_BLSHPNK",
    "barcodes": [
      "LOLA_BLSHPNK",
      "492592",
      "LOLABLSHPNK"
    ],
    "pitch": "Experience cloud-like luxury with The Original Lola Blanket in Blush Pink. Crafted with double-sided, ultra-plush faux fur featuring Lola's signature 4-way therapeutic stretch and elastic ribbed banding that hugs your body. 100% vegan, cruelty-free, zero-shed, and OEKO-TEX Standard 100 certified for safe, non-toxic comfort. Machine washable, stain-resistant, and hand-dyed for timeless elegance.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492592/edit",
    "img": "https://images.momence.com/h/200431/product-image/88d97a3b-5938-46be-965b-047d71373c91.jpg"
  },
  {
    "id": 557189,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Lola Blankets",
    "name": "Bondi Beige (The Original Lola)",
    "fullTitle": "Lola Blankets - Bondi Beige (The Original Lola)",
    "price": "$499.00",
    "priceNum": 499,
    "sku": "LOLA_BNDIBGE",
    "barcodes": [
      "LOLA_BNDIBGE",
      "557189",
      "LOLABNDIBGE"
    ],
    "pitch": "Experience cloud-like luxury with The Original Lola Blanket in Bondi Beige. Crafted with double-sided, ultra-plush faux fur featuring Lola's signature 4-way therapeutic stretch and elastic ribbed banding that hugs your body. 100% vegan, cruelty-free, zero-shed, and OEKO-TEX Standard 100 certified for safe, non-toxic comfort. Machine washable, stain-resistant, and hand-dyed for timeless elegance.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/557189/edit",
    "img": "https://images.momence.com/h/200431/product-image/71d4daab-18f4-454d-ba2b-ca05c718c873.jpg"
  },
  {
    "id": 492594,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Lola Blankets",
    "name": "Charcoal Grey (The Original Lola)",
    "fullTitle": "Lola Blankets - Charcoal Grey (The Original Lola)",
    "price": "$499.00",
    "priceNum": 499,
    "sku": "LOLA_CHRCGRY",
    "barcodes": [
      "LOLA_CHRCGRY",
      "492594",
      "LOLACHRCGRY"
    ],
    "pitch": "Experience cloud-like luxury with The Original Lola Blanket in Charcoal Grey. Crafted with double-sided, ultra-plush faux fur featuring Lola's signature 4-way therapeutic stretch and elastic ribbed banding that hugs your body. 100% vegan, cruelty-free, zero-shed, and OEKO-TEX Standard 100 certified for safe, non-toxic comfort. Machine washable, stain-resistant, and hand-dyed for timeless elegance.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492594/edit",
    "img": "https://images.momence.com/h/200431/product-image/66936296-b807-4e43-aa4d-0b42470048b4.jpg"
  },
  {
    "id": 492596,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Lola Blankets",
    "name": "Creamy Cloud (The Original Lola)",
    "fullTitle": "Lola Blankets - Creamy Cloud (The Original Lola)",
    "price": "$499.00",
    "priceNum": 499,
    "sku": "LOLA_CRMCLD",
    "barcodes": [
      "LOLA_CRMCLD",
      "492596",
      "LOLACRMCLD"
    ],
    "pitch": "Experience cloud-like luxury with The Original Lola Blanket in Creamy Cloud. Crafted with double-sided, ultra-plush faux fur featuring Lola's signature 4-way therapeutic stretch and elastic ribbed banding that hugs your body. 100% vegan, cruelty-free, zero-shed, and OEKO-TEX Standard 100 certified for safe, non-toxic comfort. Machine washable, stain-resistant, and hand-dyed for timeless elegance.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492596/edit",
    "img": "https://images.momence.com/h/200431/product-image/a1909e4f-100b-4959-950f-b277617bd4bd.jpg"
  },
  {
    "id": 492595,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Lola Blankets",
    "name": "Desert Dune (The Original Lola)",
    "fullTitle": "Lola Blankets - Desert Dune (The Original Lola)",
    "price": "$499.00",
    "priceNum": 499,
    "sku": "LOLA_DSRTDNE",
    "barcodes": [
      "LOLA_DSRTDNE",
      "492595",
      "LOLADSRTDNE"
    ],
    "pitch": "Experience cloud-like luxury with The Original Lola Blanket in Desert Dune. Crafted with double-sided, ultra-plush faux fur featuring Lola's signature 4-way therapeutic stretch and elastic ribbed banding that hugs your body. 100% vegan, cruelty-free, zero-shed, and OEKO-TEX Standard 100 certified for safe, non-toxic comfort. Machine washable, stain-resistant, and hand-dyed for timeless elegance.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492595/edit",
    "img": "https://images.momence.com/h/200431/product-image/bd127438-758e-46af-87b2-3c931c9d203f.jpg"
  },
  {
    "id": 557191,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Lola Blankets",
    "name": "Huckleberry Harvest (The Original Lola)",
    "fullTitle": "Lola Blankets - Huckleberry Harvest (The Original Lola)",
    "price": "$499.00",
    "priceNum": 499,
    "sku": "LOLA_HCKLHRV",
    "barcodes": [
      "LOLA_HCKLHRV",
      "557191",
      "LOLAHCKLHRV"
    ],
    "pitch": "Experience cloud-like luxury with The Original Lola Blanket in Huckleberry Harvest. Crafted with double-sided, ultra-plush faux fur featuring Lola's signature 4-way therapeutic stretch and elastic ribbed banding that hugs your body. 100% vegan, cruelty-free, zero-shed, and OEKO-TEX Standard 100 certified for safe, non-toxic comfort. Machine washable, stain-resistant, and hand-dyed for timeless elegance.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/557191/edit",
    "img": "https://images.momence.com/h/200431/product-image/6a3cb96d-7aa3-4fca-93fa-edeccc79704b.jpeg"
  },
  {
    "id": 557190,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Lola Blankets",
    "name": "Malibu Blue (The Original Lola)",
    "fullTitle": "Lola Blankets - Malibu Blue (The Original Lola)",
    "price": "$499.00",
    "priceNum": 499,
    "sku": "LOLA_MLBUBLU",
    "barcodes": [
      "LOLA_MLBUBLU",
      "557190",
      "LOLAMLBUBLU"
    ],
    "pitch": "Experience cloud-like luxury with The Original Lola Blanket in Malibu Blue. Crafted with double-sided, ultra-plush faux fur featuring Lola's signature 4-way therapeutic stretch and elastic ribbed banding that hugs your body. 100% vegan, cruelty-free, zero-shed, and OEKO-TEX Standard 100 certified for safe, non-toxic comfort. Machine washable, stain-resistant, and hand-dyed for timeless elegance.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/557190/edit",
    "img": "https://images.momence.com/h/200431/product-image/046e827a-1282-4110-b2fb-010e53fb29a4.jpg"
  },
  {
    "id": 557188,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Lola Blankets",
    "name": "Moon Beam (The Original Lola)",
    "fullTitle": "Lola Blankets - Moon Beam (The Original Lola)",
    "price": "$499.00",
    "priceNum": 499,
    "sku": "LOLA_MNBEAM",
    "barcodes": [
      "LOLA_MNBEAM",
      "557188",
      "LOLAMNBEAM"
    ],
    "pitch": "Experience cloud-like luxury with The Original Lola Blanket in Moon Beam. Crafted with double-sided, ultra-plush faux fur featuring Lola's signature 4-way therapeutic stretch and elastic ribbed banding that hugs your body. 100% vegan, cruelty-free, zero-shed, and OEKO-TEX Standard 100 certified for safe, non-toxic comfort. Machine washable, stain-resistant, and hand-dyed for timeless elegance.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/557188/edit",
    "img": "https://images.momence.com/h/200431/product-image/8c1c84d2-6696-4359-abe9-f94132f49deb.jpg"
  },
  {
    "id": 492597,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Lola Blankets",
    "name": "Slate Blue (The Original Lola)",
    "fullTitle": "Lola Blankets - Slate Blue (The Original Lola)",
    "price": "$499.00",
    "priceNum": 499,
    "sku": "LOLA_SLTEBLU",
    "barcodes": [
      "LOLA_SLTEBLU",
      "492597",
      "LOLASLTEBLU"
    ],
    "pitch": "Experience cloud-like luxury with The Original Lola Blanket in Slate Blue. Crafted with double-sided, ultra-plush faux fur featuring Lola's signature 4-way therapeutic stretch and elastic ribbed banding that hugs your body. 100% vegan, cruelty-free, zero-shed, and OEKO-TEX Standard 100 certified for safe, non-toxic comfort. Machine washable, stain-resistant, and hand-dyed for timeless elegance.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492597/edit",
    "img": "https://images.momence.com/h/200431/product-image/34fa7ed3-b1a7-4b21-ac4d-eb586dfcc523.jpg"
  },
  {
    "id": 557187,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Lola Blankets",
    "name": "Toasted Almond (The Original Lola)",
    "fullTitle": "Lola Blankets - Toasted Almond (The Original Lola)",
    "price": "$499.00",
    "priceNum": 499,
    "sku": "LOLA_TSTDALM",
    "barcodes": [
      "LOLA_TSTDALM",
      "557187",
      "LOLATSTDALM"
    ],
    "pitch": "Experience cloud-like luxury with The Original Lola Blanket in Toasted Almond. Crafted with double-sided, ultra-plush faux fur featuring Lola's signature 4-way therapeutic stretch and elastic ribbed banding that hugs your body. 100% vegan, cruelty-free, zero-shed, and OEKO-TEX Standard 100 certified for safe, non-toxic comfort. Machine washable, stain-resistant, and hand-dyed for timeless elegance.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/557187/edit",
    "img": "https://images.momence.com/h/200431/product-image/229a7869-4aff-4d9e-a2f8-49bf2c0f773b.jpg"
  },
  {
    "id": 492230,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Minful matters",
    "name": "Mindful Matters - The 28-Day Meditation Kit",
    "fullTitle": "Minful matters - Mindful Matters - The 28-Day Meditation Kit",
    "price": "$69.99",
    "priceNum": 69.99,
    "sku": "MM-MED-0001",
    "barcodes": [
      "MM-MED-0001",
      "492230",
      "MMMED0001"
    ],
    "pitch": "Sensory meditation candle system designed to anchor a consistent daily mindfulness practice through soothing flame and calming aromatics.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492230/edit",
    "img": "https://images.momence.com/h/200431/product-image/5f7b6bd1-552e-4f3c-8fdb-36ff6521119e.png"
  },
  {
    "id": 492444,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Mio Queena",
    "name": "1pcs Brass Dice",
    "fullTitle": "Mio Queena - 1pcs Brass Dice",
    "price": "$4.81",
    "priceNum": 4.81,
    "sku": "MQ-DEC-DIC-0007",
    "barcodes": [
      "MQ-DEC-DIC-0007",
      "492444",
      "MQDECDIC0007"
    ],
    "pitch": "Heavyweight solid brass miniature tabletop ornament hand-cast with vintage character, heirloom durability, and grounding tactile charm. Solid brass casting with antique patina.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492444/edit",
    "img": "https://images.momence.com/h/200431/product-image/19e3adcf-9191-44b4-8037-cbe6b8f5e2da.png"
  },
  {
    "id": 492443,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Mio Queena",
    "name": "Brass Buddha statue Crafts Desktop Ornaments Decoration",
    "fullTitle": "Mio Queena - Brass Buddha statue Crafts Desktop Ornaments Decoration",
    "price": "$19.80",
    "priceNum": 19.8,
    "sku": "MQ-DEC-BUD-0006",
    "barcodes": [
      "MQ-DEC-BUD-0006",
      "492443",
      "MQDECBUD0006"
    ],
    "pitch": "Heavyweight solid brass miniature tabletop ornament hand-cast with vintage character, heirloom durability, and grounding tactile charm.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492443/edit",
    "img": "https://images.momence.com/h/200431/product-image/d5b33037-95f2-4040-bba1-2d71d6e6da75.png"
  },
  {
    "id": 492440,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Mio Queena",
    "name": "Brass Heart Bulldog Crafts Decoration Desktop Ornaments",
    "fullTitle": "Mio Queena - Brass Heart Bulldog Crafts Decoration Desktop Ornaments",
    "price": "$18.00",
    "priceNum": 18,
    "sku": "MQ-DEC-HEA-0003",
    "barcodes": [
      "MQ-DEC-HEA-0003",
      "492440",
      "MQDECHEA0003"
    ],
    "pitch": "Heavyweight solid brass miniature tabletop ornament hand-cast with vintage character, heirloom durability, and grounding tactile charm. Solid brass casting with antique patina.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492440/edit",
    "img": "https://images.momence.com/h/200431/product-image/7c2eaa4b-7c65-4839-9821-3ec84bb6bc44.png"
  },
  {
    "id": 492439,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Mio Queena",
    "name": "Brass Peacock Crafts Decoration Desktop Ornaments",
    "fullTitle": "Mio Queena - Brass Peacock Crafts Decoration Desktop Ornaments",
    "price": "$12.51",
    "priceNum": 12.51,
    "sku": "MQ-DEC-PEA-0002",
    "barcodes": [
      "MQ-DEC-PEA-0002",
      "492439",
      "MQDECPEA0002"
    ],
    "pitch": "Heavyweight solid brass miniature tabletop ornament hand-cast with vintage character, heirloom durability, and grounding tactile charm. Solid brass casting with antique patina.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492439/edit",
    "img": "https://images.momence.com/h/200431/product-image/8b1b217b-8132-4a8f-9438-b0d9493346a4.png"
  },
  {
    "id": 492438,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Mio Queena",
    "name": "Brass Toad Crafts Decoration Desktop Ornaments",
    "fullTitle": "Mio Queena - Brass Toad Crafts Decoration Desktop Ornaments",
    "price": "$29.52",
    "priceNum": 29.52,
    "sku": "MQ-DEC-TOA-0001",
    "barcodes": [
      "MQ-DEC-TOA-0001",
      "492438",
      "MQDECTOA0001"
    ],
    "pitch": "Heavyweight solid brass miniature tabletop ornament hand-cast with vintage character, heirloom durability, and grounding tactile charm. Solid brass casting with antique patina.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492438/edit",
    "img": "https://images.momence.com/h/200431/product-image/43d4add7-6721-44f3-a905-97df3f95bce5.png"
  },
  {
    "id": 492442,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Mio Queena",
    "name": "Portable Brass Handle Foldable Stainless Steel Knife",
    "fullTitle": "Mio Queena - Portable Brass Handle Foldable Stainless Steel Knife",
    "price": "$15.82",
    "priceNum": 15.82,
    "sku": "MQ-KNI-POR-0005",
    "barcodes": [
      "MQ-KNI-POR-0005",
      "492442",
      "MQKNIPOR0005"
    ],
    "pitch": "Heavyweight solid brass miniature tabletop ornament hand-cast with vintage character, heirloom durability, and grounding tactile charm. Solid brass casting with antique patina.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492442/edit",
    "img": "https://images.momence.com/h/200431/product-image/aaa526c1-0bd4-4791-bf9a-3ffbca3e74a3.png"
  },
  {
    "id": 492441,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Mio Queena",
    "name": "The Kungfu Frog in Meditation Brass Crafts Desktop Ornaments",
    "fullTitle": "Mio Queena - The Kungfu Frog in Meditation Brass Crafts Desktop Ornaments",
    "price": "$31.57",
    "priceNum": 31.57,
    "sku": "MQ-DEC-FRO-0004",
    "barcodes": [
      "MQ-DEC-FRO-0004",
      "492441",
      "MQDECFRO0004"
    ],
    "pitch": "Heavyweight solid brass miniature tabletop ornament hand-cast with vintage character, heirloom durability, and grounding tactile charm. Solid brass casting with antique patina.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492441/edit",
    "img": "https://images.momence.com/h/200431/product-image/7846d842-e2f1-4055-85bd-2203cfac0516.png"
  },
  {
    "id": 492403,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Paper Mirchi",
    "name": "Large Ditsy Floral Blush- Organic Cotton Toiletry Bag",
    "fullTitle": "Paper Mirchi - Large Ditsy Floral Blush- Organic Cotton Toiletry Bag",
    "price": "$60.99",
    "priceNum": 60.99,
    "sku": "PM-BAG-DIS-0007",
    "barcodes": [
      "PM-BAG-DIS-0007",
      "492403",
      "PMBAGDIS0007"
    ],
    "pitch": "Artisan stationery hand-crafted using 100% tree-free recycled cotton rag paper and traditional Indian woodblock printing techniques. Eco-friendly 100% recycled cotton rag paper.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492403/edit",
    "img": "https://images.momence.com/h/200431/product-image/8f8798d8-7388-402b-b92f-7f896ccdbac9.png"
  },
  {
    "id": 492402,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Paper Mirchi",
    "name": "Large Trellis Indigo- Organic Cotton Toiletry Bag",
    "fullTitle": "Paper Mirchi - Large Trellis Indigo- Organic Cotton Toiletry Bag",
    "price": "$60.99",
    "priceNum": 60.99,
    "sku": "PM-BAG-TRE-0006",
    "barcodes": [
      "PM-BAG-TRE-0006",
      "492402",
      "PMBAGTRE0006"
    ],
    "pitch": "Artisan stationery hand-crafted using 100% tree-free recycled cotton rag paper and traditional Indian woodblock printing techniques.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492402/edit",
    "img": "https://images.momence.com/h/200431/product-image/0513267e-6289-48b5-af2d-1708cc2862c5.png"
  },
  {
    "id": 492398,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Paper Mirchi",
    "name": "Medium Ditsy Floral Blush- Organic Cotton Toiletry Bag",
    "fullTitle": "Paper Mirchi - Medium Ditsy Floral Blush- Organic Cotton Toiletry Bag",
    "price": "$51.99",
    "priceNum": 51.99,
    "sku": "PM-BAG-DIS-0002",
    "barcodes": [
      "PM-BAG-DIS-0002",
      "492398",
      "PMBAGDIS0002"
    ],
    "pitch": "Artisan stationery hand-crafted using 100% tree-free recycled cotton rag paper and traditional Indian woodblock printing techniques. Eco-friendly 100% recycled cotton rag paper.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492398/edit",
    "img": "https://images.momence.com/h/200431/product-image/6ce86ec5-2eec-4284-8719-51fc1aea7229.png"
  },
  {
    "id": 492397,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Paper Mirchi",
    "name": "Small Trellis Indigo- Organic Cotton Toiletry Bag",
    "fullTitle": "Paper Mirchi - Small Trellis Indigo- Organic Cotton Toiletry Bag",
    "price": "$39.99",
    "priceNum": 39.99,
    "sku": "PM-BAG-TRE-0001",
    "barcodes": [
      "PM-BAG-TRE-0001",
      "492397",
      "PMBAGTRE0001"
    ],
    "pitch": "Artisan stationery hand-crafted using 100% tree-free recycled cotton rag paper and traditional Indian woodblock printing techniques. Eco-friendly 100% recycled cotton rag paper.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492397/edit",
    "img": "https://images.momence.com/h/200431/product-image/5f0ecb86-d77d-457d-9c97-002e823cbfae.png"
  },
  {
    "id": 492465,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "Something Different",
    "name": "Black Astrology Wheel Trinket Dish",
    "fullTitle": "Something Different - Black Astrology Wheel Trinket Dish",
    "price": "$16.99",
    "priceNum": 16.99,
    "sku": "SD-ORA-BLA-0010",
    "barcodes": [
      "SD-ORA-BLA-0010",
      "492465",
      "SDORABLA0010"
    ],
    "pitch": "Ceramic astrological trinket dish adorned with celestial metallic gold foil accents. Perfect for holding everyday crystals, sacred jewelry, or burning herbs.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492465/edit",
    "img": "https://images.momence.com/h/200431/product-image/ba968098-720e-4a2b-aee7-8c0513aae845.jpg"
  },
  {
    "id": 396628,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "TEST SUPPLIER",
    "name": "Yoga Matt",
    "fullTitle": "TEST SUPPLIER - Yoga Matt",
    "price": "$5.00",
    "priceNum": 5,
    "sku": "123",
    "barcodes": [
      "123",
      "396628"
    ],
    "pitch": "Curated lifestyle and wellness essential selected exclusively for The Practice community.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/396628/edit",
    "img": ""
  },
  {
    "id": 509137,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "The Practice",
    "name": "Brown rock large",
    "fullTitle": "The Practice - Brown rock large",
    "price": "$5.50",
    "priceNum": 5.5,
    "sku": "",
    "barcodes": [
      "",
      "509137"
    ],
    "pitch": "Curated lifestyle and wellness essential selected exclusively for The Practice community.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/509137/edit",
    "img": ""
  },
  {
    "id": 509136,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "The Practice",
    "name": "Brown rock medium",
    "fullTitle": "The Practice - Brown rock medium",
    "price": "$6.75",
    "priceNum": 6.75,
    "sku": "",
    "barcodes": [
      "",
      "509136"
    ],
    "pitch": "cappuccino/latte/flat white/iced latte",
    "momenceUrl": "https://momence.com/dashboard/200431/products/509136/edit",
    "img": ""
  },
  {
    "id": 509135,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "The Practice",
    "name": "Brown rock small",
    "fullTitle": "The Practice - Brown rock small",
    "price": "$5.75",
    "priceNum": 5.75,
    "sku": "",
    "barcodes": [
      "",
      "509135"
    ],
    "pitch": "americano/iced americano/espresso macchiato",
    "momenceUrl": "https://momence.com/dashboard/200431/products/509135/edit",
    "img": ""
  },
  {
    "id": 509134,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "The Practice",
    "name": "Brown rock xs",
    "fullTitle": "The Practice - Brown rock xs",
    "price": "$4.75",
    "priceNum": 4.75,
    "sku": "",
    "barcodes": [
      "",
      "509134"
    ],
    "pitch": "Curated lifestyle and wellness essential selected exclusively for The Practice community.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/509134/edit",
    "img": ""
  },
  {
    "id": 499574,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "The Practice",
    "name": "DIY Smoke Cleansing Kit",
    "fullTitle": "The Practice - DIY Smoke Cleansing Kit",
    "price": "$36.50",
    "priceNum": 36.5,
    "sku": "",
    "barcodes": [
      "",
      "499574"
    ],
    "pitch": "Curated lifestyle and wellness essential selected exclusively for The Practice community.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/499574/edit",
    "img": ""
  },
  {
    "id": 504349,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "The Practice",
    "name": "Fancy Concrete Bowl (Large)",
    "fullTitle": "The Practice - Fancy Concrete Bowl (Large)",
    "price": "$95.00",
    "priceNum": 95,
    "sku": "",
    "barcodes": [
      "",
      "504349"
    ],
    "pitch": "Premium wellness essential curated for The Practice community.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504349/edit",
    "img": "https://images.momence.com/h/200431/product-image/849b19e8-1c39-43dd-bcbc-76ca632823e6.jpg"
  },
  {
    "id": 509139,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "The Practice",
    "name": "Light brown rock medium",
    "fullTitle": "The Practice - Light brown rock medium",
    "price": "$8.25",
    "priceNum": 8.25,
    "sku": "",
    "barcodes": [
      "",
      "509139"
    ],
    "pitch": "cappuccino/latte/flat white/\niced latte WITH oat/almond milk",
    "momenceUrl": "https://momence.com/dashboard/200431/products/509139/edit",
    "img": ""
  },
  {
    "id": 509138,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "The Practice",
    "name": "Light brown rock small",
    "fullTitle": "The Practice - Light brown rock small",
    "price": "$7.25",
    "priceNum": 7.25,
    "sku": "",
    "barcodes": [
      "",
      "509138"
    ],
    "pitch": "Light brown rock small- americano/iced americano/espresso macchiato WITH oat/almond milk",
    "momenceUrl": "https://momence.com/dashboard/200431/products/509138/edit",
    "img": ""
  },
  {
    "id": 499575,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "The Practice",
    "name": "Palo Santo and Lavender Bundle",
    "fullTitle": "The Practice - Palo Santo and Lavender Bundle",
    "price": "$8.50",
    "priceNum": 8.5,
    "sku": "",
    "barcodes": [
      "",
      "499575"
    ],
    "pitch": "Curated lifestyle and wellness essential selected exclusively for The Practice community.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/499575/edit",
    "img": ""
  },
  {
    "id": 558613,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "The Practice",
    "name": "Red Rock",
    "fullTitle": "The Practice - Red Rock",
    "price": "$16.00",
    "priceNum": 16,
    "sku": "",
    "barcodes": [
      "",
      "558613"
    ],
    "pitch": "Curated lifestyle and wellness essential selected exclusively for The Practice community.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/558613/edit",
    "img": ""
  },
  {
    "id": 517204,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "The Practice",
    "name": "Single Palo Santo Stick",
    "fullTitle": "The Practice - Single Palo Santo Stick",
    "price": "$6.00",
    "priceNum": 6,
    "sku": "",
    "barcodes": [
      "",
      "517204"
    ],
    "pitch": "Curated lifestyle and wellness essential selected exclusively for The Practice community.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/517204/edit",
    "img": ""
  },
  {
    "id": 558617,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "The Practice",
    "name": "Sparkling Rock",
    "fullTitle": "The Practice - Sparkling Rock",
    "price": "$14.00",
    "priceNum": 14,
    "sku": "",
    "barcodes": [
      "",
      "558617"
    ],
    "pitch": "Curated lifestyle and wellness essential selected exclusively for The Practice community.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/558617/edit",
    "img": ""
  },
  {
    "id": 493198,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "The Practice",
    "name": "The Whisper",
    "fullTitle": "The Practice - The Whisper",
    "price": "$26.99",
    "priceNum": 26.99,
    "sku": "",
    "barcodes": [
      "",
      "493198"
    ],
    "pitch": "Curated lifestyle and wellness essential selected exclusively for The Practice community.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/493198/edit",
    "img": ""
  },
  {
    "id": 558615,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "The Practice",
    "name": "White Rock",
    "fullTitle": "The Practice - White Rock",
    "price": "$16.00",
    "priceNum": 16,
    "sku": "",
    "barcodes": [
      "",
      "558615"
    ],
    "pitch": "Curated lifestyle and wellness essential selected exclusively for The Practice community.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/558615/edit",
    "img": ""
  },
  {
    "id": 545884,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "The Practice Cafe",
    "name": "Smoothie Add on -Vegan Protein",
    "fullTitle": "The Practice Cafe - Smoothie Add on -Vegan Protein",
    "price": "$3.50",
    "priceNum": 3.5,
    "sku": "",
    "barcodes": [
      "",
      "545884"
    ],
    "pitch": "Nourishing superfood wellness smoothie blended with adaptogens, antioxidants, and house-made nut milk.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/545884/edit",
    "img": ""
  },
  {
    "id": 545887,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "The Practice Cafe",
    "name": "Smoothie add on - Collagen",
    "fullTitle": "The Practice Cafe - Smoothie add on - Collagen",
    "price": "$3.50",
    "priceNum": 3.5,
    "sku": "",
    "barcodes": [
      "",
      "545887"
    ],
    "pitch": "Nourishing superfood wellness smoothie blended with adaptogens, antioxidants, and house-made nut milk.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/545887/edit",
    "img": ""
  },
  {
    "id": 545886,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "The Practice Cafe",
    "name": "Smoothie add on - MCT oil",
    "fullTitle": "The Practice Cafe - Smoothie add on - MCT oil",
    "price": "$3.50",
    "priceNum": 3.5,
    "sku": "",
    "barcodes": [
      "",
      "545886"
    ],
    "pitch": "Nourishing superfood wellness smoothie blended with adaptogens, antioxidants, and house-made nut milk.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/545886/edit",
    "img": ""
  },
  {
    "id": 557040,
    "department": "Home Decor, Barware & Artisan Textiles",
    "brand": "The Practice Cafe",
    "name": "Smoothies - Grounding Greens - Large",
    "fullTitle": "The Practice Cafe - Smoothies - Grounding Greens - Large",
    "price": "$17.00",
    "priceNum": 17,
    "sku": "",
    "barcodes": [
      "",
      "557040"
    ],
    "pitch": "Nourishing superfood wellness smoothie blended with adaptogens, antioxidants, and house-made nut milk.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/557040/edit",
    "img": "https://images.momence.com/h/200431/product-image/5f42fe36-7c8c-473f-8cac-116353ce6ed7.png"
  },
  {
    "id": 492532,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Bradley Mountain",
    "name": "Cannabis & Amber Resin Candle",
    "fullTitle": "Bradley Mountain - Cannabis & Amber Resin Candle",
    "price": "$42.00",
    "priceNum": 42,
    "sku": "BM-CAN-CAN-0009",
    "barcodes": [
      "BM-CAN-CAN-0009",
      "492532",
      "BMCANCAN0009"
    ],
    "pitch": "Hand-poured all-natural soy wax candle crafted in San Diego, CA. Features a clean lead-free cotton wick and rich, woody aroma notes inspired by wilderness adventures.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492532/edit",
    "img": "https://images.momence.com/h/200431/product-image/990ea71f-3728-419b-937e-53bdb2f9153f.jpg"
  },
  {
    "id": 492525,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Bradley Mountain",
    "name": "Driftwood & Tobacco Candle",
    "fullTitle": "Bradley Mountain - Driftwood & Tobacco Candle",
    "price": "$42.00",
    "priceNum": 42,
    "sku": "BM-CAN-DRI-0002",
    "barcodes": [
      "BM-CAN-DRI-0002",
      "492525",
      "BMCANDRI0002"
    ],
    "pitch": "Hand-poured all-natural soy wax candle crafted in San Diego, CA. Features a clean lead-free cotton wick and rich, woody aroma notes inspired by wilderness adventures.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492525/edit",
    "img": "https://images.momence.com/h/200431/product-image/a5ba6915-be96-4e58-9cd9-277a0c690e2c.jpg"
  },
  {
    "id": 492526,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Bradley Mountain",
    "name": "Fraser Fir & Redwood- Mustache & Beard Oil",
    "fullTitle": "Bradley Mountain - Fraser Fir & Redwood- Mustache & Beard Oil",
    "price": "$28.99",
    "priceNum": 28.99,
    "sku": "BM-OIL-FRA-0003",
    "barcodes": [
      "BM-OIL-FRA-0003",
      "492526",
      "BMOILFRA0003"
    ],
    "pitch": "Handcrafted rugged grooming oil formulated with organic argan and jojoba oils to soften facial hair, soothe skin, and impart a rich outdoors aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492526/edit",
    "img": "https://images.momence.com/h/200431/product-image/be91cea5-3458-424e-844e-4de9ee8243c4.jpg"
  },
  {
    "id": 492533,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Bradley Mountain",
    "name": "Leather & Smoke Candle",
    "fullTitle": "Bradley Mountain - Leather & Smoke Candle",
    "price": "$42.00",
    "priceNum": 42,
    "sku": "BM-CAN-LEA-0010",
    "barcodes": [
      "BM-CAN-LEA-0010",
      "492533",
      "BMCANLEA0010"
    ],
    "pitch": "Hand-poured all-natural soy wax candle crafted in San Diego, CA. Features a clean lead-free cotton wick and rich, woody aroma notes inspired by wilderness adventures.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492533/edit",
    "img": "https://images.momence.com/h/200431/product-image/87059ba4-d48e-469c-b68d-2cffd98f799e.jpg"
  },
  {
    "id": 492535,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Bradley Mountain",
    "name": "Neroli & Juniper Candle",
    "fullTitle": "Bradley Mountain - Neroli & Juniper Candle",
    "price": "$42.00",
    "priceNum": 42,
    "sku": "BM-CAN-NER-0012",
    "barcodes": [
      "BM-CAN-NER-0012",
      "492535",
      "BMCANNER0012"
    ],
    "pitch": "Hand-poured all-natural soy wax candle crafted in San Diego, CA. Features a clean lead-free cotton wick and rich, woody aroma notes inspired by wilderness adventures.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492535/edit",
    "img": "https://images.momence.com/h/200431/product-image/b690822e-0cb1-4be9-a705-735b52063331.jpg"
  },
  {
    "id": 492531,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Bradley Mountain",
    "name": "Oakmoss & Amber Room Spray",
    "fullTitle": "Bradley Mountain - Oakmoss & Amber Room Spray",
    "price": "$34.99",
    "priceNum": 34.99,
    "sku": "BM-SPR-OAK-0008",
    "barcodes": [
      "BM-SPR-OAK-0008",
      "492531",
      "BMSPROAK0008"
    ],
    "pitch": "Hand-poured all-natural soy wax candle crafted in San Diego, CA. Features a clean lead-free cotton wick and rich, woody aroma notes inspired by wilderness adventures.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492531/edit",
    "img": "https://images.momence.com/h/200431/product-image/fb1f70f5-b45e-4b3b-b3a7-f4ff7b58d8f4.jpg"
  },
  {
    "id": 492528,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Bradley Mountain",
    "name": "Palo Santo & Cedarwood- Mustache & Beard Oil",
    "fullTitle": "Bradley Mountain - Palo Santo & Cedarwood- Mustache & Beard Oil",
    "price": "$34.99",
    "priceNum": 34.99,
    "sku": "BM-OIL-PAL-0005",
    "barcodes": [
      "BM-OIL-PAL-0005",
      "492528",
      "BMOILPAL0005"
    ],
    "pitch": "Handcrafted rugged grooming oil formulated with organic argan and jojoba oils to soften facial hair, soothe skin, and impart a rich outdoors aroma.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492528/edit",
    "img": "https://images.momence.com/h/200431/product-image/f2357706-7011-4270-a7b1-bd3dcb3049ab.jpg"
  },
  {
    "id": 492534,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Bradley Mountain",
    "name": "Palo Santo & Ginger Candle",
    "fullTitle": "Bradley Mountain - Palo Santo & Ginger Candle",
    "price": "$42.00",
    "priceNum": 42,
    "sku": "BM-CAN-PAL-0011",
    "barcodes": [
      "BM-CAN-PAL-0011",
      "492534",
      "BMCANPAL0011"
    ],
    "pitch": "Hand-poured all-natural soy wax candle crafted in San Diego, CA. Features a clean lead-free cotton wick and rich, woody aroma notes inspired by wilderness adventures.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492534/edit",
    "img": "https://images.momence.com/h/200431/product-image/e02182ab-397d-44ed-a607-bbf3e999495e.jpg"
  },
  {
    "id": 492524,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Bradley Mountain",
    "name": "Wild Fig & Citrus Candle",
    "fullTitle": "Bradley Mountain - Wild Fig & Citrus Candle",
    "price": "$42.00",
    "priceNum": 42,
    "sku": "BM-CAN-WIL-0001",
    "barcodes": [
      "BM-CAN-WIL-0001",
      "492524",
      "BMCANWIL0001"
    ],
    "pitch": "Hand-poured all-natural soy wax candle crafted in San Diego, CA. Features a clean lead-free cotton wick and rich, woody aroma notes inspired by wilderness adventures.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492524/edit",
    "img": ""
  },
  {
    "id": 492327,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Creative women",
    "name": "Dante Hand-Forged Iron Candle Stands | Set of 3",
    "fullTitle": "Creative women - Dante Hand-Forged Iron Candle Stands | Set of 3",
    "price": "$140.00",
    "priceNum": 140,
    "sku": "CW-CND-DNT-0054",
    "barcodes": [
      "CW-CND-DNT-0054",
      "492327",
      "CWCNDDNT0054"
    ],
    "pitch": "Artisan-crafted home essential ethically handmade by global women artisans using sustainable, high-quality materials and traditional craft techniques.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492327/edit",
    "img": "https://images.momence.com/h/200431/product-image/923b6c44-6f01-4e0b-bfe7-3573bb1c7901.png"
  },
  {
    "id": 492314,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Creative women",
    "name": "Phoenix Hand-Forged Iron Candle Stands - Set of 2",
    "fullTitle": "Creative women - Phoenix Hand-Forged Iron Candle Stands - Set of 2",
    "price": "$99.99",
    "priceNum": 99.99,
    "sku": "CW-CND-PHO-0041",
    "barcodes": [
      "CW-CND-PHO-0041",
      "492314",
      "CWCNDPHO0041"
    ],
    "pitch": "Artisan-crafted home essential ethically handmade by global women artisans using sustainable, high-quality materials and traditional craft techniques.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492314/edit",
    "img": "https://images.momence.com/h/200431/product-image/8c926b1e-f1ca-4c22-be58-c46149c03692.png"
  },
  {
    "id": 509736,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Culti Milano",
    "name": "1000ml Mediterranea Diffuser",
    "fullTitle": "Culti Milano - 1000ml Mediterranea Diffuser",
    "price": "$300.00",
    "priceNum": 300,
    "sku": "",
    "barcodes": [
      "",
      "509736"
    ],
    "pitch": "Mediterranea by CULTI MILANO in a grand 1000ml Stile glass bottle. An invigorating woody-citrus fragrance inspired by the sun-drenched Apulian countryside. A sparkling blend of bitter orange, lemon, and neroli with a spicy ginger kick, grounded by rich cedarwood and lentisk. Ideal for large living spaces.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/509736/edit",
    "img": "https://images.momence.com/h/200431/product-image/282cc7e4-7c43-4c88-a009-827beac5bef9.png"
  },
  {
    "id": 509732,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Culti Milano",
    "name": "1000ml Supreme Amber Diffuser",
    "fullTitle": "Culti Milano - 1000ml Supreme Amber Diffuser",
    "price": "$182.00",
    "priceNum": 182,
    "sku": "",
    "barcodes": [
      "",
      "509732"
    ],
    "pitch": "Supreme Amber by CULTI MILANO in a grand 1000ml Stile glass bottle. An oriental and woody fragrance capturing the soft, radiant sunset of late September. Blends warm incense and earthy patchouli with the comforting sweetness of black vanilla, brightened by fresh chinotto and rock rose. Ideal for large living spaces.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/509732/edit",
    "img": "https://images.momence.com/h/200431/product-image/61446d49-1ffa-468a-ba99-4d5ffac0b544.jpg"
  },
  {
    "id": 509729,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Culti Milano",
    "name": "500ml Lamborghini Cars Diffuser",
    "fullTitle": "Culti Milano - 500ml Lamborghini Cars Diffuser",
    "price": "$225.00",
    "priceNum": 225,
    "sku": "",
    "barcodes": [
      "",
      "509729"
    ],
    "pitch": "The exclusive collaboration between CULTI MILANO and Automobili Lamborghini. A bold and refined fragrance featuring opening notes of citrusy bergamot, a warm heart of cypriol and woody clearwood, grounded by a balsamic finish of Siam benzoin. Recommended for spaces 20-40 sqm.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/509729/edit",
    "img": "https://images.momence.com/h/200431/product-image/8c803248-d911-4d25-88eb-4ead05bb60c5.png"
  },
  {
    "id": 509738,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Culti Milano",
    "name": "500ml Lamborghini Grigio Vulcano Diffuser",
    "fullTitle": "Culti Milano - 500ml Lamborghini Grigio Vulcano Diffuser",
    "price": "$225.00",
    "priceNum": 225,
    "sku": "",
    "barcodes": [
      "",
      "509738"
    ],
    "pitch": "The exclusive CULTI MILANO for Automobili Lamborghini diffuser in iconic Grigio Vulcano finish. A refined and intense fragrance featuring fresh bergamot, sensual cypriol, and Clearwood®, with an enveloping base of Siam benzoin and Helvetolide®. Embodies pure Italian performance and design.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/509738/edit",
    "img": "https://images.momence.com/h/200431/product-image/dbcf03f8-8b12-4198-8107-60e6edc8168a.jpg"
  },
  {
    "id": 509735,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Culti Milano",
    "name": "500ml Mediterranea Diffuser",
    "fullTitle": "Culti Milano - 500ml Mediterranea Diffuser",
    "price": "$225.00",
    "priceNum": 225,
    "sku": "",
    "barcodes": [
      "",
      "509735"
    ],
    "pitch": "Mediterranea by CULTI MILANO is an invigorating woody-citrus fragrance inspired by the sun-drenched Apulian countryside. A sparkling blend of bitter orange, lemon, and neroli with a spicy ginger kick, grounded by rich cedarwood and lentisk. Includes natural rattan reeds. Recommended for spaces 20-40 sqm.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/509735/edit",
    "img": "https://images.momence.com/h/200431/product-image/ee89c90e-9234-4d10-8d19-36d1e28878e5.jpg"
  },
  {
    "id": 509730,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Culti Milano",
    "name": "500ml Supreme Amber Diffuser",
    "fullTitle": "Culti Milano - 500ml Supreme Amber Diffuser",
    "price": "$256.00",
    "priceNum": 256,
    "sku": "",
    "barcodes": [
      "",
      "509730"
    ],
    "pitch": "Supreme Amber by CULTI MILANO is an oriental and woody fragrance capturing the soft, radiant sunset of late September. Blends warm incense and earthy patchouli with the comforting sweetness of black vanilla, brightened by fresh chinotto and rock rose. Includes natural rattan reeds. Recommended for spaces 20-40 sqm.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/509730/edit",
    "img": "https://images.momence.com/h/200431/product-image/6c68ae3c-1809-4043-8037-023f9726ad8b.png"
  },
  {
    "id": 509741,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Culti Milano",
    "name": "Car Diffuser Mareminerale - Taupe",
    "fullTitle": "Culti Milano - Car Diffuser Mareminerale - Taupe",
    "price": "$320.00",
    "priceNum": 320,
    "sku": "",
    "barcodes": [
      "",
      "509741"
    ],
    "pitch": "Luxury car fragrance diffuser by CULTI MILANO encased in handcrafted taupe leather. Clips effortlessly onto your vehicle's air vent to release Mareminerale—an invigorating marine scent combining crisp sea accords, fresh sap, and mineral musk. Refillable design.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/509741/edit",
    "img": "https://images.momence.com/h/200431/product-image/40221c99-309d-4d11-8241-225637457453.jpg"
  },
  {
    "id": 509740,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Culti Milano",
    "name": "Car Diffuser Mediterranea - Black Leather",
    "fullTitle": "Culti Milano - Car Diffuser Mediterranea - Black Leather",
    "price": "$320.00",
    "priceNum": 320,
    "sku": "",
    "barcodes": [
      "",
      "509740"
    ],
    "pitch": "Luxury car fragrance diffuser by CULTI MILANO encased in fine black leather. Clips effortlessly onto your vehicle's air vent to diffuse the crisp Mediterranea fragrance—a refreshing blend of bitter orange, lemon, neroli, and cedarwood. Refillable design.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/509740/edit",
    "img": "https://images.momence.com/h/200431/product-image/2cc00244-a1c0-4a6f-bb12-a2aaa6a449fb.png"
  },
  {
    "id": 492510,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Fancy Concrete",
    "name": "Moroccan Cashmere-Mini Moon Candle",
    "fullTitle": "Fancy Concrete - Moroccan Cashmere-Mini Moon Candle",
    "price": "$42.99",
    "priceNum": 42.99,
    "sku": "FC-CAN-MIN-0008",
    "barcodes": [
      "FC-CAN-MIN-0008",
      "492510",
      "FCCANMIN0008"
    ],
    "pitch": "Architectural decorative bowl hand-cast from high-density artisanal concrete with bespoke marbled veining. A sculptural modern accent for studio tables or altars.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492510/edit",
    "img": "https://images.momence.com/h/200431/product-image/538070ea-7e33-4739-b587-cb11a2dd4e5f.jpg"
  },
  {
    "id": 492509,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Fancy Concrete",
    "name": "White, Moroccan Cashmere- Half Moon Candle",
    "fullTitle": "Fancy Concrete - White, Moroccan Cashmere- Half Moon Candle",
    "price": "$175.00",
    "priceNum": 175,
    "sku": "FC-CAN-HAL-0007",
    "barcodes": [
      "FC-CAN-HAL-0007",
      "492509",
      "FCCANHAL0007"
    ],
    "pitch": "Architectural decorative bowl hand-cast from high-density artisanal concrete with bespoke marbled veining. A sculptural modern accent for studio tables or altars.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492509/edit",
    "img": "https://images.momence.com/h/200431/product-image/53012f91-d676-484c-9f02-00a0a40b043a.jpg"
  },
  {
    "id": 492543,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Field Kit",
    "name": "The Artist - Absinthe + Vanilla - 8oz Glass Candle",
    "fullTitle": "Field Kit - The Artist - Absinthe + Vanilla - 8oz Glass Candle",
    "price": "$44.99",
    "priceNum": 44.99,
    "sku": "FK-CAN-ART-0001",
    "barcodes": [
      "FK-CAN-ART-0001",
      "492543",
      "FKCANART0001"
    ],
    "pitch": "Small-batch artisanal soy wax candle hand-poured in Calgary, Canada. Formulated with fine botanical fragrance oils and cotton wick for a clean, comforting burn.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492543/edit",
    "img": "https://images.momence.com/h/200431/product-image/6bc09c9b-ddc8-4c90-9525-6ed7cb03a6a2.jpg"
  },
  {
    "id": 492548,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Field Kit",
    "name": "The Beekeeper - Honey + Clover - 8oz Glass Candle",
    "fullTitle": "Field Kit - The Beekeeper - Honey + Clover - 8oz Glass Candle",
    "price": "$44.99",
    "priceNum": 44.99,
    "sku": "FK-CAN-HNY-0006",
    "barcodes": [
      "FK-CAN-HNY-0006",
      "492548",
      "FKCANHNY0006"
    ],
    "pitch": "Small-batch artisanal soy wax candle hand-poured in Calgary, Canada. Formulated with fine botanical fragrance oils and cotton wick for a clean, comforting burn.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492548/edit",
    "img": "https://images.momence.com/h/200431/product-image/4aef7804-bf3b-4024-8314-c7fad87681e0.jpg"
  },
  {
    "id": 492544,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Field Kit",
    "name": "The Explorer - Bergamot + Ginger - 8oz Glass Candle",
    "fullTitle": "Field Kit - The Explorer - Bergamot + Ginger - 8oz Glass Candle",
    "price": "$44.99",
    "priceNum": 44.99,
    "sku": "FK-CAN-GIN-0002",
    "barcodes": [
      "FK-CAN-GIN-0002",
      "492544",
      "FKCANGIN0002"
    ],
    "pitch": "Small-batch artisanal soy wax candle hand-poured in Calgary, Canada. Formulated with fine botanical fragrance oils and cotton wick for a clean, comforting burn.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492544/edit",
    "img": "https://images.momence.com/h/200431/product-image/99599097-29ac-4d02-8b68-1c5fe878c516.jpg"
  },
  {
    "id": 492549,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Field Kit",
    "name": "The Greenhouse - Tomato Leaf - 8oz Glass Candle",
    "fullTitle": "Field Kit - The Greenhouse - Tomato Leaf - 8oz Glass Candle",
    "price": "$44.99",
    "priceNum": 44.99,
    "sku": "FK-CAN-TOM-0007",
    "barcodes": [
      "FK-CAN-TOM-0007",
      "492549",
      "FKCANTOM0007"
    ],
    "pitch": "Small-batch artisanal soy wax candle hand-poured in Calgary, Canada. Formulated with fine botanical fragrance oils and cotton wick for a clean, comforting burn.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492549/edit",
    "img": "https://images.momence.com/h/200431/product-image/0e266fcf-b02b-47fd-bdf5-cd96f0568c97.jpg"
  },
  {
    "id": 492545,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Field Kit",
    "name": "The Lumberjack - Birch + Smoke - 8oz Glass Candle",
    "fullTitle": "Field Kit - The Lumberjack - Birch + Smoke - 8oz Glass Candle",
    "price": "$44.99",
    "priceNum": 44.99,
    "sku": "FK-CAN-SMK-0003",
    "barcodes": [
      "FK-CAN-SMK-0003",
      "492545",
      "FKCANSMK0003"
    ],
    "pitch": "Small-batch artisanal soy wax candle hand-poured in Calgary, Canada. Formulated with fine botanical fragrance oils and cotton wick for a clean, comforting burn.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492545/edit",
    "img": "https://images.momence.com/h/200431/product-image/43c8837c-82d2-431d-8568-33e4bba77174.jpg"
  },
  {
    "id": 492546,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Field Kit",
    "name": "The Professor - Earl Grey + Apple - 8oz Glass Candle",
    "fullTitle": "Field Kit - The Professor - Earl Grey + Apple - 8oz Glass Candle",
    "price": "$44.99",
    "priceNum": 44.99,
    "sku": "FK-CAN-EGR-0004",
    "barcodes": [
      "FK-CAN-EGR-0004",
      "492546",
      "FKCANEGR0004"
    ],
    "pitch": "Small-batch artisanal soy wax candle hand-poured in Calgary, Canada. Formulated with fine botanical fragrance oils and cotton wick for a clean, comforting burn.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492546/edit",
    "img": "https://images.momence.com/h/200431/product-image/3e6dcb9b-24ab-422d-86d1-385585a84ff5.jpg"
  },
  {
    "id": 492547,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Field Kit",
    "name": "The Solarium - Fig + Basil - 8oz Glass Candle",
    "fullTitle": "Field Kit - The Solarium - Fig + Basil - 8oz Glass Candle",
    "price": "$44.99",
    "priceNum": 44.99,
    "sku": "FK-CAN-FIG-0005",
    "barcodes": [
      "FK-CAN-FIG-0005",
      "492547",
      "FKCANFIG0005"
    ],
    "pitch": "Small-batch artisanal soy wax candle hand-poured in Calgary, Canada. Formulated with fine botanical fragrance oils and cotton wick for a clean, comforting burn.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492547/edit",
    "img": "https://images.momence.com/h/200431/product-image/b5fd04a0-50e6-4810-a530-094cc6cd1138.jpg"
  },
  {
    "id": 492484,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Homecoming",
    "name": "Amber + Bitter Orange Home Mist",
    "fullTitle": "Homecoming - Amber + Bitter Orange Home Mist",
    "price": "$34.99",
    "priceNum": 34.99,
    "sku": "HC-MIS-AMB-0008",
    "barcodes": [
      "HC-MIS-AMB-0008",
      "492484",
      "HCMISAMB0008"
    ],
    "pitch": "All-natural botanical room and linen mist crafted with pure essential oils and witch hazel. Instantly refreshes any room or yoga space.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492484/edit",
    "img": "https://images.momence.com/h/200431/product-image/0de9eb17-feb0-4c79-afad-d318559e67b4.jpg"
  },
  {
    "id": 492493,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Homecoming",
    "name": "Balsam Fir Neroli Soy Wax Candle",
    "fullTitle": "Homecoming - Balsam Fir Neroli Soy Wax Candle",
    "price": "$64.99",
    "priceNum": 64.99,
    "sku": "HC-CAN-BAL-0017",
    "barcodes": [
      "HC-CAN-BAL-0017",
      "492493",
      "HCCANBAL0017"
    ],
    "pitch": "Minimalist home design essential crafted from solid metal with a brushed satin finish. Designed to hold candles, incense, or everyday sacred treasures.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492493/edit",
    "img": "https://images.momence.com/h/200431/product-image/0245ebe6-ba0e-47e5-b80a-384bb1326adb.jpg"
  },
  {
    "id": 492497,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Homecoming",
    "name": "Candle Snuffer",
    "fullTitle": "Homecoming - Candle Snuffer",
    "price": "$29.99",
    "priceNum": 29.99,
    "sku": "HC-ACC-SNU-0021",
    "barcodes": [
      "HC-ACC-SNU-0021",
      "492497",
      "HCACCSNU0021"
    ],
    "pitch": "Minimalist home design essential crafted from solid metal with a brushed satin finish. Designed to hold candles, incense, or everyday sacred treasures.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492497/edit",
    "img": "https://images.momence.com/h/200431/product-image/900f517e-8c02-4f66-83a2-cc8b702f00e9.jpg"
  },
  {
    "id": 492486,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Homecoming",
    "name": "Cedarwood + Pine Home Mist",
    "fullTitle": "Homecoming - Cedarwood + Pine Home Mist",
    "price": "$34.99",
    "priceNum": 34.99,
    "sku": "HC-MIS-CEA-0010",
    "barcodes": [
      "HC-MIS-CEA-0010",
      "492486",
      "HCMISCEA0010"
    ],
    "pitch": "All-natural botanical room and linen mist crafted with pure essential oils and witch hazel. Instantly refreshes any room or yoga space.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492486/edit",
    "img": "https://images.momence.com/h/200431/product-image/33285e94-0fb3-437d-ae50-fd4aa0fdd1e0.jpg"
  },
  {
    "id": 492492,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Homecoming",
    "name": "Ginger Flower Saffron Soy Wax Candle",
    "fullTitle": "Homecoming - Ginger Flower Saffron Soy Wax Candle",
    "price": "$64.99",
    "priceNum": 64.99,
    "sku": "HC-CAN-GIN-0016",
    "barcodes": [
      "HC-CAN-GIN-0016",
      "492492",
      "HCCANGIN0016"
    ],
    "pitch": "Minimalist home design essential crafted from solid metal with a brushed satin finish. Designed to hold candles, incense, or everyday sacred treasures.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492492/edit",
    "img": "https://images.momence.com/h/200431/product-image/d94100e6-4146-4929-90ed-b94e26dde104.jpg"
  },
  {
    "id": 492489,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Homecoming",
    "name": "Lavender + Sandalwood Home Mist",
    "fullTitle": "Homecoming - Lavender + Sandalwood Home Mist",
    "price": "$34.99",
    "priceNum": 34.99,
    "sku": "HC-MIS-LAV-0013",
    "barcodes": [
      "HC-MIS-LAV-0013",
      "492489",
      "HCMISLAV0013"
    ],
    "pitch": "All-natural botanical room and linen mist crafted with pure essential oils and witch hazel. Instantly refreshes any room or yoga space.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492489/edit",
    "img": "https://images.momence.com/h/200431/product-image/1da8f217-1c96-4eaa-a254-bb20bfafb2d6.jpg"
  },
  {
    "id": 492490,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Homecoming",
    "name": "Lemon Rind + Honey Home Mist",
    "fullTitle": "Homecoming - Lemon Rind + Honey Home Mist",
    "price": "$34.99",
    "priceNum": 34.99,
    "sku": "HC-MIS-LEM-0014",
    "barcodes": [
      "HC-MIS-LEM-0014",
      "492490",
      "HCMISLEM0014"
    ],
    "pitch": "All-natural botanical room and linen mist crafted with pure essential oils and witch hazel. Instantly refreshes any room or yoga space.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492490/edit",
    "img": "https://images.momence.com/h/200431/product-image/565fdfc9-351f-40ce-b632-9ca5e4b57d7f.jpg"
  },
  {
    "id": 492498,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Homecoming",
    "name": "Minimalist Brass Tray",
    "fullTitle": "Homecoming - Minimalist Brass Tray",
    "price": "$34.99",
    "priceNum": 34.99,
    "sku": "HC-ACC-MAT-0022",
    "barcodes": [
      "HC-ACC-MAT-0022",
      "492498",
      "HCACCMAT0022"
    ],
    "pitch": "Minimalist home design essential crafted from solid metal with a brushed satin finish. Designed to hold candles, incense, or everyday sacred treasures.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492498/edit",
    "img": "https://images.momence.com/h/200431/product-image/358713b5-e196-4379-a685-debad410ffb9.jpg"
  },
  {
    "id": 492483,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Homecoming",
    "name": "Moment Candle Stick Holder",
    "fullTitle": "Homecoming - Moment Candle Stick Holder",
    "price": "$29.99",
    "priceNum": 29.99,
    "sku": "HC-ACC-MOM-0007",
    "barcodes": [
      "HC-ACC-MOM-0007",
      "492483",
      "HCACCMOM0007"
    ],
    "pitch": "Minimalist home design essential crafted from solid metal with a brushed satin finish. Designed to hold candles, incense, or everyday sacred treasures.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492483/edit",
    "img": "https://images.momence.com/h/200431/product-image/d3a1b024-88e6-40da-98ce-6acf4d84022a.jpg"
  },
  {
    "id": 492496,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Homecoming",
    "name": "Oud Patchouli Resin Soy Wax Candle",
    "fullTitle": "Homecoming - Oud Patchouli Resin Soy Wax Candle",
    "price": "$64.99",
    "priceNum": 64.99,
    "sku": "HC-CAN-OUD-0020",
    "barcodes": [
      "HC-CAN-OUD-0020",
      "492496",
      "HCCANOUD0020"
    ],
    "pitch": "Minimalist home design essential crafted from solid metal with a brushed satin finish. Designed to hold candles, incense, or everyday sacred treasures.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492496/edit",
    "img": "https://images.momence.com/h/200431/product-image/0c640ccd-40d6-4567-93ab-383cf9076e67.jpg"
  },
  {
    "id": 492487,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Homecoming",
    "name": "Peppermint + Eucalyptus Home Mist",
    "fullTitle": "Homecoming - Peppermint + Eucalyptus Home Mist",
    "price": "$34.99",
    "priceNum": 34.99,
    "sku": "HC-MIS-PEP-0011",
    "barcodes": [
      "HC-MIS-PEP-0011",
      "492487",
      "HCMISPEP0011"
    ],
    "pitch": "All-natural botanical room and linen mist crafted with pure essential oils and witch hazel. Instantly refreshes any room or yoga space.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492487/edit",
    "img": "https://images.momence.com/h/200431/product-image/5a4cb90b-1b0a-4c21-8ca1-ae4e3a5ebf0d.jpg"
  },
  {
    "id": 492495,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Homecoming",
    "name": "Sandalwood Smoke Soy Wax Candle",
    "fullTitle": "Homecoming - Sandalwood Smoke Soy Wax Candle",
    "price": "$64.99",
    "priceNum": 64.99,
    "sku": "HC-CAN-SAN-0019",
    "barcodes": [
      "HC-CAN-SAN-0019",
      "492495",
      "HCCANSAN0019"
    ],
    "pitch": "Minimalist home design essential crafted from solid metal with a brushed satin finish. Designed to hold candles, incense, or everyday sacred treasures.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492495/edit",
    "img": "https://images.momence.com/h/200431/product-image/cdc550d6-6fb5-4d95-8250-0611a4ff7d50.jpg"
  },
  {
    "id": 492491,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Homecoming",
    "name": "Sea Salt Citron Soy Wax Candle",
    "fullTitle": "Homecoming - Sea Salt Citron Soy Wax Candle",
    "price": "$64.99",
    "priceNum": 64.99,
    "sku": "HC-CAN-SEA-0015",
    "barcodes": [
      "HC-CAN-SEA-0015",
      "492491",
      "HCCANSEA0015"
    ],
    "pitch": "Minimalist home design essential crafted from solid metal with a brushed satin finish. Designed to hold candles, incense, or everyday sacred treasures.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492491/edit",
    "img": "https://images.momence.com/h/200431/product-image/3e7fbea2-c11c-4f31-ad8a-6f99a202f9dc.jpg"
  },
  {
    "id": 492499,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Homecoming",
    "name": "Strike Matchstick Holder",
    "fullTitle": "Homecoming - Strike Matchstick Holder",
    "price": "$45.99",
    "priceNum": 45.99,
    "sku": "HC-ACC-STR-0023",
    "barcodes": [
      "HC-ACC-STR-0023",
      "492499",
      "HCACCSTR0023"
    ],
    "pitch": "Minimalist home design essential crafted from solid metal with a brushed satin finish. Designed to hold candles, incense, or everyday sacred treasures.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492499/edit",
    "img": "https://images.momence.com/h/200431/product-image/a7f75312-ac53-46be-9849-51f964772dc1.jpg"
  },
  {
    "id": 492494,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Homecoming",
    "name": "Tobacco Wild Rose Soy Wax Candle",
    "fullTitle": "Homecoming - Tobacco Wild Rose Soy Wax Candle",
    "price": "$64.99",
    "priceNum": 64.99,
    "sku": "HC-CAN-TOB-0018",
    "barcodes": [
      "HC-CAN-TOB-0018",
      "492494",
      "HCCANTOB0018"
    ],
    "pitch": "Minimalist home design essential crafted from solid metal with a brushed satin finish. Designed to hold candles, incense, or everyday sacred treasures.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492494/edit",
    "img": "https://images.momence.com/h/200431/product-image/ebcd1c5e-a0e6-4032-9c02-3bf99f8a62f7.jpg"
  },
  {
    "id": 492482,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Homecoming",
    "name": "Wick Trimmer",
    "fullTitle": "Homecoming - Wick Trimmer",
    "price": "$29.99",
    "priceNum": 29.99,
    "sku": "HC-ACC-WIC-0006",
    "barcodes": [
      "HC-ACC-WIC-0006",
      "492482",
      "HCACCWIC0006"
    ],
    "pitch": "Minimalist home design essential crafted from solid metal with a brushed satin finish. Designed to hold candles, incense, or everyday sacred treasures.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492482/edit",
    "img": "https://images.momence.com/h/200431/product-image/45519067-9cf0-4f3e-abea-144df8038f28.jpg"
  },
  {
    "id": 492561,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Keepsake Candle",
    "name": "Black Apothecary Safety Matches",
    "fullTitle": "Keepsake Candle - Black Apothecary Safety Matches",
    "price": "$34.99",
    "priceNum": 34.99,
    "sku": "KC-MAT-APP-BLK-0003",
    "barcodes": [
      "KC-MAT-APP-BLK-0003",
      "492561",
      "KCMATAPPBLK0003"
    ],
    "pitch": "Apothecary glass safety match bottle fitted with a natural cork stopper and integrated strike pad. Elegant companion for mindful candle rituals.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492561/edit",
    "img": "https://images.momence.com/h/200431/product-image/22fc818e-28ed-4b9c-86ce-d7c390013797.jpg"
  },
  {
    "id": 492559,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Keepsake Candle",
    "name": "Black Mini Safety Matches",
    "fullTitle": "Keepsake Candle - Black Mini Safety Matches",
    "price": "$9.99",
    "priceNum": 9.99,
    "sku": "KC-MAT-MIN-BLK-0001",
    "barcodes": [
      "KC-MAT-MIN-BLK-0001",
      "492559",
      "KCMATMINBLK0001"
    ],
    "pitch": "Apothecary glass safety match bottle fitted with a natural cork stopper and integrated strike pad. Elegant companion for mindful candle rituals.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492559/edit",
    "img": "https://images.momence.com/h/200431/product-image/d3b6d4d6-2c5e-4b16-ba52-479d05f6f618.jpg"
  },
  {
    "id": 492565,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Keepsake Candle",
    "name": "Electric USB Candle Lighter",
    "fullTitle": "Keepsake Candle - Electric USB Candle Lighter",
    "price": "$34.99",
    "priceNum": 34.99,
    "sku": "KC-LIG-USB-0007",
    "barcodes": [
      "KC-LIG-USB-0007",
      "492565",
      "KCLIGUSB0007"
    ],
    "pitch": "Rechargeable electric USB arc candle lighter. Flameless, windproof, eco-friendly, and engineered for effortless candle lighting.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492565/edit",
    "img": "https://images.momence.com/h/200431/product-image/78fb40ab-6ee4-4ce8-936a-d781b31fe9e1.jpg"
  },
  {
    "id": 492563,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Keepsake Candle",
    "name": "Midnight Apothecary Safety Matches",
    "fullTitle": "Keepsake Candle - Midnight Apothecary Safety Matches",
    "price": "$34.99",
    "priceNum": 34.99,
    "sku": "KC-MAT-APP-MID-0005",
    "barcodes": [
      "KC-MAT-APP-MID-0005",
      "492563",
      "KCMATAPPMID0005"
    ],
    "pitch": "Apothecary glass safety match bottle fitted with a natural cork stopper and integrated strike pad. Elegant companion for mindful candle rituals.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492563/edit",
    "img": "https://images.momence.com/h/200431/product-image/cd45f842-736d-4e52-9a13-fc606f6ce466.jpg"
  },
  {
    "id": 492560,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Keepsake Candle",
    "name": "Midnight Mini Safety Matches",
    "fullTitle": "Keepsake Candle - Midnight Mini Safety Matches",
    "price": "$9.99",
    "priceNum": 9.99,
    "sku": "KC-MAT-MIN-MID-0002",
    "barcodes": [
      "KC-MAT-MIN-MID-0002",
      "492560",
      "KCMATMINMID0002"
    ],
    "pitch": "Apothecary glass safety match bottle fitted with a natural cork stopper and integrated strike pad. Elegant companion for mindful candle rituals.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492560/edit",
    "img": "https://images.momence.com/h/200431/product-image/98959244-d9ed-4870-b33e-aa870b81691a.jpg"
  },
  {
    "id": 492562,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Keepsake Candle",
    "name": "White Apothecary Safety Matches",
    "fullTitle": "Keepsake Candle - White Apothecary Safety Matches",
    "price": "$34.99",
    "priceNum": 34.99,
    "sku": "KC-MAT-APP-WHT-0004",
    "barcodes": [
      "KC-MAT-APP-WHT-0004",
      "492562",
      "KCMATAPPWHT0004"
    ],
    "pitch": "Apothecary glass safety match bottle fitted with a natural cork stopper and integrated strike pad. Elegant companion for mindful candle rituals.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492562/edit",
    "img": "https://images.momence.com/h/200431/product-image/87bfeac3-39c6-4915-a541-09ca1e93ce6f.jpg"
  },
  {
    "id": 492564,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Keepsake Candle",
    "name": "White Mini Safety Matches",
    "fullTitle": "Keepsake Candle - White Mini Safety Matches",
    "price": "$9.99",
    "priceNum": 9.99,
    "sku": "KC-MAT-MIN-WHT-0006",
    "barcodes": [
      "KC-MAT-MIN-WHT-0006",
      "492564",
      "KCMATMINWHT0006"
    ],
    "pitch": "Apothecary glass safety match bottle fitted with a natural cork stopper and integrated strike pad. Elegant companion for mindful candle rituals.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492564/edit",
    "img": "https://images.momence.com/h/200431/product-image/7b36d47b-c9dd-4d67-8ff9-fa54d0b63582.jpg"
  },
  {
    "id": 492430,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Kiyo Home | No Tariffs",
    "name": "Kiyo Home - Large-Travertine Pillar Candleholders",
    "fullTitle": "Kiyo Home | No Tariffs - Kiyo Home - Large-Travertine Pillar Candleholders",
    "price": "$268.76",
    "priceNum": 268.76,
    "sku": "KH-CAN-TRA-0011",
    "barcodes": [
      "KH-CAN-TRA-0011",
      "492430",
      "KHCANTRA0011"
    ],
    "pitch": "Sleek contemporary home and bar accessory crafted to unite functional utility with sculptural minimalist aesthetic.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492430/edit",
    "img": "https://images.momence.com/h/200431/product-image/a125a1aa-6c68-4a24-9187-50af22a8f4b0.png"
  },
  {
    "id": 492429,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Kiyo Home | No Tariffs",
    "name": "Kiyo Home - Medium-Travertine Pillar Candleholders",
    "fullTitle": "Kiyo Home | No Tariffs - Kiyo Home - Medium-Travertine Pillar Candleholders",
    "price": "$205.36",
    "priceNum": 205.36,
    "sku": "KH-CAN-TRA-0010",
    "barcodes": [
      "KH-CAN-TRA-0010",
      "492429",
      "KHCANTRA0010"
    ],
    "pitch": "Sleek contemporary home and bar accessory crafted to unite functional utility with sculptural minimalist aesthetic.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492429/edit",
    "img": "https://images.momence.com/h/200431/product-image/3716d4fb-b7cd-4aee-9ba0-94559670bf55.png"
  },
  {
    "id": 492231,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Minful matters",
    "name": "Mindful Matters - The Meditation Candle Refill (28 Pack)",
    "fullTitle": "Minful matters - Mindful Matters - The Meditation Candle Refill (28 Pack)",
    "price": "$39.99",
    "priceNum": 39.99,
    "sku": "MM-CND-0001",
    "barcodes": [
      "MM-CND-0001",
      "492231",
      "MMCND0001"
    ],
    "pitch": "Candle refill pack of 28 candles for meditation kit.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492231/edit",
    "img": "https://images.momence.com/h/200431/product-image/08f379fc-cb10-47a5-b12f-1030ab029d71.png"
  },
  {
    "id": 492232,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "Minful matters",
    "name": "Mindful Matters - The Meditation Candle Set",
    "fullTitle": "Minful matters - Mindful Matters - The Meditation Candle Set",
    "price": "$34.99",
    "priceNum": 34.99,
    "sku": "MM-CND-SET-0002",
    "barcodes": [
      "MM-CND-SET-0002",
      "492232",
      "MMCNDSET0002"
    ],
    "pitch": "Small meditation candle set.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492232/edit",
    "img": "https://images.momence.com/h/200431/product-image/f7da96a5-9896-43b8-8ccd-641569d0e63c.png"
  },
  {
    "id": 480110,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "TEST SUPPLIER",
    "name": "Candle",
    "fullTitle": "TEST SUPPLIER - Candle",
    "price": "$5.00",
    "priceNum": 5,
    "sku": "456",
    "barcodes": [
      "456",
      "480110"
    ],
    "pitch": "Curated lifestyle and wellness essential selected exclusively for The Practice community.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/480110/edit",
    "img": ""
  },
  {
    "id": 495984,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "The Practice",
    "name": "Candle Holders",
    "fullTitle": "The Practice - Candle Holders",
    "price": "$24.00",
    "priceNum": 24,
    "sku": "",
    "barcodes": [
      "",
      "495984"
    ],
    "pitch": "Curated lifestyle and wellness essential selected exclusively for The Practice community.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/495984/edit",
    "img": "https://images.momence.com/h/200431/product-image/113ef8a6-1270-4f9b-8624-a831dc2e94f6.jpg"
  },
  {
    "id": 504350,
    "department": "Luxury Candles & Home Fragrance",
    "brand": "The Practice",
    "name": "White, Moroccan Cashmere- Half Moon Candle | Small Candle",
    "fullTitle": "The Practice - White, Moroccan Cashmere- Half Moon Candle | Small Candle",
    "price": "$42.99",
    "priceNum": 42.99,
    "sku": "",
    "barcodes": [
      "",
      "504350"
    ],
    "pitch": "Curated lifestyle and wellness essential selected exclusively for The Practice community.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504350/edit",
    "img": ""
  },
  {
    "id": 492513,
    "department": "Mindful Living, Journals & Games",
    "brand": "Avadir and Co",
    "name": "Laserable Leatherette Journal",
    "fullTitle": "Avadir and Co - Laserable Leatherette Journal",
    "price": "$24.99",
    "priceNum": 24.99,
    "sku": "AC-JOU-LEA-0003",
    "barcodes": [
      "AC-JOU-LEA-0003",
      "492513",
      "ACJOULEA0003"
    ],
    "pitch": "Handcrafted luxury vegan leather lifestyle accessory designed with durable water-resistant lining, brass hardware, and timeless minimalist silhouette.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492513/edit",
    "img": "https://images.momence.com/h/200431/product-image/2d4f8752-8d25-4374-9e70-fb7bf3c0a648.jpg"
  },
  {
    "id": 492437,
    "department": "Mindful Living, Journals & Games",
    "brand": "Earth Moon Magick",
    "name": "Elemental Empath Oracle Deck & Guidebook",
    "fullTitle": "Earth Moon Magick - Elemental Empath Oracle Deck & Guidebook",
    "price": "$64.99",
    "priceNum": 64.99,
    "sku": "EM-ORA-ELE-0003",
    "barcodes": [
      "EM-ORA-ELE-0003",
      "492437",
      "EMORAELE0003"
    ],
    "pitch": "Intuitively channeled oracle deck with luminous celestial artwork and deep wisdom for shadow work, heart opening, and spiritual growth.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492437/edit",
    "img": "https://images.momence.com/h/200431/product-image/77d47fc6-917c-4999-8717-ebd5dc353bcd.png"
  },
  {
    "id": 492435,
    "department": "Mindful Living, Journals & Games",
    "brand": "Earth Moon Magick",
    "name": "The Priestess Oracle | 52 Cards & Guidebook",
    "fullTitle": "Earth Moon Magick - The Priestess Oracle | 52 Cards & Guidebook",
    "price": "$75.00",
    "priceNum": 75,
    "sku": "EM-ORA-PRI-0001",
    "barcodes": [
      "EM-ORA-PRI-0001",
      "492435",
      "EMORAPRI0001"
    ],
    "pitch": "Intuitively channeled oracle deck with luminous celestial artwork and deep wisdom for shadow work, heart opening, and spiritual growth.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492435/edit",
    "img": "https://images.momence.com/h/200431/product-image/343e20e8-8e00-45c7-9711-e65b6e8a4957.png"
  },
  {
    "id": 492436,
    "department": "Mindful Living, Journals & Games",
    "brand": "Earth Moon Magick",
    "name": "Trust, an Oracle | Deck & Guidebook",
    "fullTitle": "Earth Moon Magick - Trust, an Oracle | Deck & Guidebook",
    "price": "$62.00",
    "priceNum": 62,
    "sku": "EM-ORA-TRU-0002",
    "barcodes": [
      "EM-ORA-TRU-0002",
      "492436",
      "EMORATRU0002"
    ],
    "pitch": "Intuitively channeled oracle deck with luminous celestial artwork and deep wisdom for shadow work, heart opening, and spiritual growth.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492436/edit",
    "img": "https://images.momence.com/h/200431/product-image/b5a7f6b0-d867-4383-ad02-39025133837f.png"
  },
  {
    "id": 492516,
    "department": "Mindful Living, Journals & Games",
    "brand": "Homebound Tarot",
    "name": "Abundance- Manifestation Kit",
    "fullTitle": "Homebound Tarot - Abundance- Manifestation Kit",
    "price": "$44.99",
    "priceNum": 44.99,
    "sku": "HT-KIT-ABN-0001",
    "barcodes": [
      "HT-KIT-ABN-0001",
      "492516",
      "HTKITABN0001"
    ],
    "pitch": "Curated manifestation kit featuring high-vibrational raw crystals, California white sage smudge wand, and step-by-step ritual intention guide.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492516/edit",
    "img": "https://images.momence.com/h/200431/product-image/d8979a18-7953-4b23-a02a-15ce96722220.jpg"
  },
  {
    "id": 492517,
    "department": "Mindful Living, Journals & Games",
    "brand": "Homebound Tarot",
    "name": "New Beginnings- Manifestation Kit",
    "fullTitle": "Homebound Tarot - New Beginnings- Manifestation Kit",
    "price": "$44.99",
    "priceNum": 44.99,
    "sku": "HT-KIT-NEW-0002",
    "barcodes": [
      "HT-KIT-NEW-0002",
      "492517",
      "HTKITNEW0002"
    ],
    "pitch": "Curated manifestation kit featuring high-vibrational raw crystals, California white sage smudge wand, and step-by-step ritual intention guide.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492517/edit",
    "img": "https://images.momence.com/h/200431/product-image/198fec4e-626d-47f3-9181-20785e0ecf19.jpg"
  },
  {
    "id": 492518,
    "department": "Mindful Living, Journals & Games",
    "brand": "Homebound Tarot",
    "name": "Self Discovery- Manifestation Kit",
    "fullTitle": "Homebound Tarot - Self Discovery- Manifestation Kit",
    "price": "$44.99",
    "priceNum": 44.99,
    "sku": "HT-KIT-SEL-0003",
    "barcodes": [
      "HT-KIT-SEL-0003",
      "492518",
      "HTKITSEL0003"
    ],
    "pitch": "Curated manifestation kit featuring high-vibrational raw crystals, California white sage smudge wand, and step-by-step ritual intention guide.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492518/edit",
    "img": "https://images.momence.com/h/200431/product-image/e28e2835-55a4-4f3f-bfbb-6db7b1cb502c.jpg"
  },
  {
    "id": 492519,
    "department": "Mindful Living, Journals & Games",
    "brand": "Homebound Tarot",
    "name": "Tarot Reading to-go",
    "fullTitle": "Homebound Tarot - Tarot Reading to-go",
    "price": "$12.99",
    "priceNum": 12.99,
    "sku": "HT-TAR-REA-0004",
    "barcodes": [
      "HT-TAR-REA-0004",
      "492519",
      "HTTARREA0004"
    ],
    "pitch": "Curated manifestation kit featuring high-vibrational raw crystals, California white sage smudge wand, and step-by-step ritual intention guide.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492519/edit",
    "img": "https://images.momence.com/h/200431/product-image/f63d5f82-1a40-49ad-9257-504da7eb7873.jpg"
  },
  {
    "id": 492502,
    "department": "Mindful Living, Journals & Games",
    "brand": "I Love Books and Bows",
    "name": "Blind Date With a Book- BESTSELLERS",
    "fullTitle": "I Love Books and Bows - Blind Date With a Book- BESTSELLERS",
    "price": "$29.99",
    "priceNum": 29.99,
    "sku": "IL-BOO-BES-0003",
    "barcodes": [
      "IL-BOO-BES-0003",
      "492502",
      "ILBOOBES0003"
    ],
    "pitch": "Delightful mystery package wrapped in vintage butcher kraft paper, secured with jute twine and a wax seal, stamped with intriguing thematic clues.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492502/edit",
    "img": "https://images.momence.com/h/200431/product-image/bb0b2792-adcc-498e-b766-834d2fe7acc6.jpg"
  },
  {
    "id": 492501,
    "department": "Mindful Living, Journals & Games",
    "brand": "I Love Books and Bows",
    "name": "Blind Date with a Puzzle",
    "fullTitle": "I Love Books and Bows - Blind Date with a Puzzle",
    "price": "$39.99",
    "priceNum": 39.99,
    "sku": "IL-BOO-PUZ-0002",
    "barcodes": [
      "IL-BOO-PUZ-0002",
      "492501",
      "ILBOOPUZ0002"
    ],
    "pitch": "Delightful mystery package wrapped in vintage butcher kraft paper, secured with jute twine and a wax seal, stamped with intriguing thematic clues.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492501/edit",
    "img": "https://images.momence.com/h/200431/product-image/587b0fb1-a376-4f4d-9a7a-4d68c8773bc8.jpg"
  },
  {
    "id": 492406,
    "department": "Mindful Living, Journals & Games",
    "brand": "MarbleCultures",
    "name": "Italian Marble Tic Tac Toe Set (Black and White)",
    "fullTitle": "MarbleCultures - Italian Marble Tic Tac Toe Set (Black and White)",
    "price": "$290.00",
    "priceNum": 290,
    "sku": "MC-TTT-ITA-0003",
    "barcodes": [
      "MC-TTT-ITA-0003",
      "492406",
      "MCTTTITA0003"
    ],
    "pitch": "Heirloom luxury coffee table game hand-carved from solid Italian marble and supple leather. An exquisite, tactile statement piece for connection. Luxury games carved from genuine solid marble.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492406/edit",
    "img": "https://images.momence.com/h/200431/product-image/48405df7-0f98-49a3-a341-0a436d81fa5c.png"
  },
  {
    "id": 507725,
    "department": "Mindful Living, Journals & Games",
    "brand": "MarbleCultures",
    "name": "Leather Backgammon Set - Black",
    "fullTitle": "MarbleCultures - Leather Backgammon Set - Black",
    "price": "$220.00",
    "priceNum": 220,
    "sku": "",
    "barcodes": [
      "",
      "507725"
    ],
    "pitch": "Heirloom luxury coffee table game hand-carved from solid Italian marble and supple leather. An exquisite, tactile statement piece for connection. Luxury games carved from genuine solid marble.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/507725/edit",
    "img": "https://images.momence.com/h/200431/product-image/c74ce74b-12a8-4319-8cd4-f24015b1e35b.webp"
  },
  {
    "id": 492405,
    "department": "Mindful Living, Journals & Games",
    "brand": "MarbleCultures",
    "name": "Leather Backgammon Set - Green and White",
    "fullTitle": "MarbleCultures - Leather Backgammon Set - Green and White",
    "price": "$220.00",
    "priceNum": 220,
    "sku": "MC-BAC-LEA-0002",
    "barcodes": [
      "MC-BAC-LEA-0002",
      "492405",
      "MCBACLEA0002"
    ],
    "pitch": "Heirloom luxury coffee table game hand-carved from solid Italian marble and supple leather. An exquisite, tactile statement piece for connection. Luxury games carved from genuine solid marble.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492405/edit",
    "img": "https://images.momence.com/h/200431/product-image/fa63b711-4066-4903-b972-b4c527f67788.png"
  },
  {
    "id": 492404,
    "department": "Mindful Living, Journals & Games",
    "brand": "MarbleCultures",
    "name": "Marble Checkers Set with Storage Case - White and Onyx",
    "fullTitle": "MarbleCultures - Marble Checkers Set with Storage Case - White and Onyx",
    "price": "$250.00",
    "priceNum": 250,
    "sku": "MC-CHE-MAR-0001",
    "barcodes": [
      "MC-CHE-MAR-0001",
      "492404",
      "MCCHEMAR0001"
    ],
    "pitch": "Heirloom luxury coffee table game hand-carved from solid Italian marble and supple leather. An exquisite, tactile statement piece for connection. Luxury games carved from genuine solid marble.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492404/edit",
    "img": "https://images.momence.com/h/200431/product-image/c75d70c1-10de-4bd2-9b06-ea9a90507295.png"
  },
  {
    "id": 492408,
    "department": "Mindful Living, Journals & Games",
    "brand": "MarbleCultures",
    "name": "Marble Chess Set with Storage Case - Green Onyx and Black",
    "fullTitle": "MarbleCultures - Marble Chess Set with Storage Case - Green Onyx and Black",
    "price": "$325.00",
    "priceNum": 325,
    "sku": "MC-CHS-GRN-0005",
    "barcodes": [
      "MC-CHS-GRN-0005",
      "492408",
      "MCCHSGRN0005"
    ],
    "pitch": "Heirloom luxury coffee table game hand-carved from solid Italian marble and supple leather. An exquisite, tactile statement piece for connection.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492408/edit",
    "img": "https://images.momence.com/h/200431/product-image/cec97625-d4c5-48cc-bafe-b7f1b127bef8.png"
  },
  {
    "id": 492407,
    "department": "Mindful Living, Journals & Games",
    "brand": "MarbleCultures",
    "name": "Marble Chess Set with Storage Case - Oceanic and White",
    "fullTitle": "MarbleCultures - Marble Chess Set with Storage Case - Oceanic and White",
    "price": "$325.00",
    "priceNum": 325,
    "sku": "MC-CHS-MAR-0004",
    "barcodes": [
      "MC-CHS-MAR-0004",
      "492407",
      "MCCHSMAR0004"
    ],
    "pitch": "Heirloom luxury coffee table game hand-carved from solid Italian marble and supple leather. An exquisite, tactile statement piece for connection. Luxury games carved from genuine solid marble.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492407/edit",
    "img": "https://images.momence.com/h/200431/product-image/aba338ba-05de-465b-b514-aa1b3514f21f.png"
  },
  {
    "id": 492409,
    "department": "Mindful Living, Journals & Games",
    "brand": "MarbleCultures",
    "name": "White Quartz Decorative Jewelry & Storage Box",
    "fullTitle": "MarbleCultures - White Quartz Decorative Jewelry & Storage Box",
    "price": "$225.00",
    "priceNum": 225,
    "sku": "MC-JEW-BOX-0006",
    "barcodes": [
      "MC-JEW-BOX-0006",
      "492409",
      "MCJEWBOX0006"
    ],
    "pitch": "Heirloom luxury coffee table game hand-carved from solid Italian marble and supple leather. An exquisite, tactile statement piece for connection. Luxury games carved from genuine solid marble.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492409/edit",
    "img": "https://images.momence.com/h/200431/product-image/654b1422-3dc6-4595-ba66-b704dd05285c.png"
  },
  {
    "id": 492400,
    "department": "Mindful Living, Journals & Games",
    "brand": "Paper Mirchi",
    "name": "Marigold Glitz Blush- Block Printed Ruled Notebook (A5)",
    "fullTitle": "Paper Mirchi - Marigold Glitz Blush- Block Printed Ruled Notebook (A5)",
    "price": "$52.99",
    "priceNum": 52.99,
    "sku": "PM-NOT-MAR-0004",
    "barcodes": [
      "PM-NOT-MAR-0004",
      "492400",
      "PMNOTMAR0004"
    ],
    "pitch": "Artisan stationery hand-crafted using 100% tree-free recycled cotton rag paper and traditional Indian woodblock printing techniques. Eco-friendly 100% recycled cotton rag paper.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492400/edit",
    "img": "https://images.momence.com/h/200431/product-image/69f2e839-a4be-46f1-afff-ebedc2bad828.png"
  },
  {
    "id": 492401,
    "department": "Mindful Living, Journals & Games",
    "brand": "Paper Mirchi",
    "name": "Mini Scallops Lavender- Hand Marbled Blank Notebook (A5)",
    "fullTitle": "Paper Mirchi - Mini Scallops Lavender- Hand Marbled Blank Notebook (A5)",
    "price": "$52.99",
    "priceNum": 52.99,
    "sku": "PM-NOT-SCA-0005",
    "barcodes": [
      "PM-NOT-SCA-0005",
      "492401",
      "PMNOTSCA0005"
    ],
    "pitch": "Artisan stationery hand-crafted using 100% tree-free recycled cotton rag paper and traditional Indian woodblock printing techniques. Eco-friendly 100% recycled cotton rag paper.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492401/edit",
    "img": "https://images.momence.com/h/200431/product-image/4f93fd55-150a-4794-9d6b-91aa872709a1.png"
  },
  {
    "id": 492399,
    "department": "Mindful Living, Journals & Games",
    "brand": "Paper Mirchi",
    "name": "Trellis Indigo- Block Printed Ruled Notebook (A5)",
    "fullTitle": "Paper Mirchi - Trellis Indigo- Block Printed Ruled Notebook (A5)",
    "price": "$52.99",
    "priceNum": 52.99,
    "sku": "PM-NOT-TRE-0003",
    "barcodes": [
      "PM-NOT-TRE-0003",
      "492399",
      "PMNOTTRE0003"
    ],
    "pitch": "Artisan stationery hand-crafted using 100% tree-free recycled cotton rag paper and traditional Indian woodblock printing techniques. Eco-friendly 100% recycled cotton rag paper.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492399/edit",
    "img": "https://images.momence.com/h/200431/product-image/48b05f59-2d1f-4546-b842-46524f925df7.png"
  },
  {
    "id": 492383,
    "department": "Mindful Living, Journals & Games",
    "brand": "Raincoast Distribution Group",
    "name": "Raincoast - Avalon Visions Oracle",
    "fullTitle": "Raincoast Distribution Group - Raincoast - Avalon Visions Oracle",
    "price": "$49.99",
    "priceNum": 49.99,
    "sku": "RC-AVA-VIS-0004",
    "barcodes": [
      "RC-AVA-VIS-0004",
      "492383",
      "RCAVAVIS0004"
    ],
    "pitch": "Curated publication or intuitive oracle deck designed to nurture reflection, mindful awareness, and creative personal discovery.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492383/edit",
    "img": "https://images.momence.com/h/200431/product-image/1f1d4c36-d567-4177-8715-077165b19395.png"
  },
  {
    "id": 492382,
    "department": "Mindful Living, Journals & Games",
    "brand": "Raincoast Distribution Group",
    "name": "Raincoast - Divine Masculine Healing Oracle",
    "fullTitle": "Raincoast Distribution Group - Raincoast - Divine Masculine Healing Oracle",
    "price": "$49.99",
    "priceNum": 49.99,
    "sku": "RC-ORA-DIV-0003",
    "barcodes": [
      "RC-ORA-DIV-0003",
      "492382",
      "RCORADIV0003"
    ],
    "pitch": "Curated publication or intuitive oracle deck designed to nurture reflection, mindful awareness, and creative personal discovery.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492382/edit",
    "img": "https://images.momence.com/h/200431/product-image/f0915ddc-a2c1-49ca-b0bd-729b66688e6f.png"
  },
  {
    "id": 492380,
    "department": "Mindful Living, Journals & Games",
    "brand": "Raincoast Distribution Group",
    "name": "Raincoast - Emergency Dad Jokes",
    "fullTitle": "Raincoast Distribution Group - Raincoast - Emergency Dad Jokes",
    "price": "$22.99",
    "priceNum": 22.99,
    "sku": "RC-JOK-DAD-0001",
    "barcodes": [
      "RC-JOK-DAD-0001",
      "492380",
      "RCJOKDAD0001"
    ],
    "pitch": "Curated publication or intuitive oracle deck designed to nurture reflection, mindful awareness, and creative personal discovery.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492380/edit",
    "img": "https://images.momence.com/h/200431/product-image/2d96ab8e-6f9a-44ec-a6d0-c9d3e8d96cb6.png"
  },
  {
    "id": 492387,
    "department": "Mindful Living, Journals & Games",
    "brand": "Raincoast Distribution Group",
    "name": "Raincoast - Manifestation Journal for Beginners",
    "fullTitle": "Raincoast Distribution Group - Raincoast - Manifestation Journal for Beginners",
    "price": "$20.99",
    "priceNum": 20.99,
    "sku": "RC-MAN-JRN-0008",
    "barcodes": [
      "RC-MAN-JRN-0008",
      "492387",
      "RCMANJRN0008"
    ],
    "pitch": "Curated publication or intuitive oracle deck designed to nurture reflection, mindful awareness, and creative personal discovery.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492387/edit",
    "img": "https://images.momence.com/h/200431/product-image/e963743a-3375-49f4-b832-f6f25f98f7d4.png"
  },
  {
    "id": 492385,
    "department": "Mindful Living, Journals & Games",
    "brand": "Raincoast Distribution Group",
    "name": "Raincoast - Manifesting Rituals",
    "fullTitle": "Raincoast Distribution Group - Raincoast - Manifesting Rituals",
    "price": "$34.99",
    "priceNum": 34.99,
    "sku": "RC-MAN-RIT-0006",
    "barcodes": [
      "RC-MAN-RIT-0006",
      "492385",
      "RCMANRIT0006"
    ],
    "pitch": "Curated publication or intuitive oracle deck designed to nurture reflection, mindful awareness, and creative personal discovery.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492385/edit",
    "img": "https://images.momence.com/h/200431/product-image/be9bd1b6-a142-47d9-8eda-94fa9220a96d.png"
  },
  {
    "id": 492381,
    "department": "Mindful Living, Journals & Games",
    "brand": "Raincoast Distribution Group",
    "name": "Raincoast - The Living Untethered Card Deck",
    "fullTitle": "Raincoast Distribution Group - Raincoast - The Living Untethered Card Deck",
    "price": "$34.99",
    "priceNum": 34.99,
    "sku": "RC-ORC-LIV-0002",
    "barcodes": [
      "RC-ORC-LIV-0002",
      "492381",
      "RCORCLIV0002"
    ],
    "pitch": "Curated publication or intuitive oracle deck designed to nurture reflection, mindful awareness, and creative personal discovery.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492381/edit",
    "img": "https://images.momence.com/h/200431/product-image/ff24de3a-9af5-4a66-85a5-8b236dfa4343.png"
  },
  {
    "id": 492384,
    "department": "Mindful Living, Journals & Games",
    "brand": "Raincoast Distribution Group",
    "name": "Raincoast - The Untethered Soul",
    "fullTitle": "Raincoast Distribution Group - Raincoast - The Untethered Soul",
    "price": "$32.99",
    "priceNum": 32.99,
    "sku": "RC-UNT-SOU-0005",
    "barcodes": [
      "RC-UNT-SOU-0005",
      "492384",
      "RCUNTSOU0005"
    ],
    "pitch": "Curated publication or intuitive oracle deck designed to nurture reflection, mindful awareness, and creative personal discovery.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492384/edit",
    "img": "https://images.momence.com/h/200431/product-image/4243fbd8-f1e4-45b8-9c9e-429d192900ca.png"
  },
  {
    "id": 492386,
    "department": "Mindful Living, Journals & Games",
    "brand": "Raincoast Distribution Group",
    "name": "Raincoast - Wisdom Within Mini Card Deck",
    "fullTitle": "Raincoast Distribution Group - Raincoast - Wisdom Within Mini Card Deck",
    "price": "$35.99",
    "priceNum": 35.99,
    "sku": "RC-WIS-MIN-0007",
    "barcodes": [
      "RC-WIS-MIN-0007",
      "492386",
      "RCWISMIN0007"
    ],
    "pitch": "Curated publication or intuitive oracle deck designed to nurture reflection, mindful awareness, and creative personal discovery.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492386/edit",
    "img": "https://images.momence.com/h/200431/product-image/7ec353ab-44a9-4ff1-91d3-774ea0c696bd.png"
  },
  {
    "id": 492298,
    "department": "Mindful Living, Journals & Games",
    "brand": "Real Fun Wow!",
    "name": "First Time Human' Diner Mug",
    "fullTitle": "Real Fun Wow! - First Time Human' Diner Mug",
    "price": "$30.00",
    "priceNum": 30,
    "sku": "RFW-MUG-FTH-0025",
    "barcodes": [
      "RFW-MUG-FTH-0025",
      "492298",
      "RFWMUGFTH0025"
    ],
    "pitch": "Mindful lifestyle item illustrated by Ojai, California artist Danni Schenkler, blending mid-century artwork with humorous, grounding self-reflection. Designed by California illustrator Danni Schenkler.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492298/edit",
    "img": "https://images.momence.com/h/200431/product-image/3c065e0e-7513-4d76-9caf-6f94febef460.png"
  },
  {
    "id": 492297,
    "department": "Mindful Living, Journals & Games",
    "brand": "Real Fun Wow!",
    "name": "The Sol Deck",
    "fullTitle": "Real Fun Wow! - The Sol Deck",
    "price": "$24.00",
    "priceNum": 24,
    "sku": "RFW-DEC-SOL-0024",
    "barcodes": [
      "RFW-DEC-SOL-0024",
      "492297",
      "RFWDECSOL0024"
    ],
    "pitch": "Mindful lifestyle item illustrated by Ojai, California artist Danni Schenkler, blending mid-century artwork with humorous, grounding self-reflection. Designed by California illustrator Danni Schenkler.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492297/edit",
    "img": "https://images.momence.com/h/200431/product-image/2bc73aa1-41fa-40f8-bd24-dfe7ad79f4a3.png"
  },
  {
    "id": 492295,
    "department": "Mindful Living, Journals & Games",
    "brand": "Real Fun Wow!",
    "name": "no Idea' Linen Bound Journal",
    "fullTitle": "Real Fun Wow! - no Idea' Linen Bound Journal",
    "price": "$26.00",
    "priceNum": 26,
    "sku": "RFW-JOU-NOIDEA-0022",
    "barcodes": [
      "RFW-JOU-NOIDEA-0022",
      "492295",
      "RFWJOUNOIDEA0022"
    ],
    "pitch": "Mindful lifestyle item illustrated by Ojai, California artist Danni Schenkler, blending mid-century artwork with humorous, grounding self-reflection. Designed by California illustrator Danni Schenkler.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492295/edit",
    "img": "https://images.momence.com/h/200431/product-image/e2a53d2f-8140-4aa1-89ec-024c8598335b.png"
  },
  {
    "id": 492296,
    "department": "Mindful Living, Journals & Games",
    "brand": "Real Fun Wow!",
    "name": "today I Choose Peace' Linen Bound Journal",
    "fullTitle": "Real Fun Wow! - today I Choose Peace' Linen Bound Journal",
    "price": "$26.00",
    "priceNum": 26,
    "sku": "RFW-JOU-PEACE-0023",
    "barcodes": [
      "RFW-JOU-PEACE-0023",
      "492296",
      "RFWJOUPEACE0023"
    ],
    "pitch": "Mindful lifestyle item illustrated by Ojai, California artist Danni Schenkler, blending mid-century artwork with humorous, grounding self-reflection. Designed by California illustrator Danni Schenkler.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492296/edit",
    "img": "https://images.momence.com/h/200431/product-image/e655d0b2-10ba-4785-aaed-bf745e7e78d4.png"
  },
  {
    "id": 492466,
    "department": "Mindful Living, Journals & Games",
    "brand": "Something Different",
    "name": "Angel Number Affirmation Cards with Wooden Stand",
    "fullTitle": "Something Different - Angel Number Affirmation Cards with Wooden Stand",
    "price": "$22.99",
    "priceNum": 22.99,
    "sku": "SD-ORA-ANG-0011",
    "barcodes": [
      "SD-ORA-ANG-0011",
      "492466",
      "SDORAANG0011"
    ],
    "pitch": "Inspirational affirmation card deck accompanied by a carved natural wood display stand. Offers daily empowering messages for mindful living.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492466/edit",
    "img": "https://images.momence.com/h/200431/product-image/b4bd9c79-b068-4f13-970c-6e2fd7e508e4.jpg"
  },
  {
    "id": 492460,
    "department": "Mindful Living, Journals & Games",
    "brand": "Something Different",
    "name": "Ethereal Affirmation Cards with Wooden Stand",
    "fullTitle": "Something Different - Ethereal Affirmation Cards with Wooden Stand",
    "price": "$22.99",
    "priceNum": 22.99,
    "sku": "SD-ORA-ETH-0005",
    "barcodes": [
      "SD-ORA-ETH-0005",
      "492460",
      "SDORAETH0005"
    ],
    "pitch": "Inspirational affirmation card deck accompanied by a carved natural wood display stand. Offers daily empowering messages for mindful living.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492460/edit",
    "img": "https://images.momence.com/h/200431/product-image/40040ebf-a9cd-4c11-91f7-aed133d5ac2a.jpg"
  },
  {
    "id": 492464,
    "department": "Mindful Living, Journals & Games",
    "brand": "Something Different",
    "name": "Mindful Living Inspiration Cards",
    "fullTitle": "Something Different - Mindful Living Inspiration Cards",
    "price": "$54.99",
    "priceNum": 54.99,
    "sku": "SD-ORA-MIN-0009",
    "barcodes": [
      "SD-ORA-MIN-0009",
      "492464",
      "SDORAMIN0009"
    ],
    "pitch": "Inspirational affirmation card deck accompanied by a carved natural wood display stand. Offers daily empowering messages for mindful living.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492464/edit",
    "img": "https://images.momence.com/h/200431/product-image/bc1a1f2f-ebad-468b-b03d-3eefb769b123.jpg"
  },
  {
    "id": 492459,
    "department": "Mindful Living, Journals & Games",
    "brand": "Something Different",
    "name": "Mindful Moments Affirmation Cards with Wooden Stand",
    "fullTitle": "Something Different - Mindful Moments Affirmation Cards with Wooden Stand",
    "price": "$18.99",
    "priceNum": 18.99,
    "sku": "SD-ORA-MIN-0004",
    "barcodes": [
      "SD-ORA-MIN-0004",
      "492459",
      "SDORAMIN0004"
    ],
    "pitch": "Inspirational affirmation card deck accompanied by a carved natural wood display stand. Offers daily empowering messages for mindful living.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492459/edit",
    "img": "https://images.momence.com/h/200431/product-image/53485181-0251-4321-9e04-3d42a5a15fa2.jpg"
  },
  {
    "id": 492456,
    "department": "Mindful Living, Journals & Games",
    "brand": "Something Different",
    "name": "Moonology Manifestation Oracle Cards",
    "fullTitle": "Something Different - Moonology Manifestation Oracle Cards",
    "price": "$45.99",
    "priceNum": 45.99,
    "sku": "SD-ORA-MOO-0001",
    "barcodes": [
      "SD-ORA-MOO-0001",
      "492456",
      "SDORAMOO0001"
    ],
    "pitch": "Inspirational affirmation card deck accompanied by a carved natural wood display stand. Offers daily empowering messages for mindful living.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492456/edit",
    "img": "https://images.momence.com/h/200431/product-image/7dbd98d5-e6ce-4107-8a84-5f54e3286463.jpg"
  },
  {
    "id": 492457,
    "department": "Mindful Living, Journals & Games",
    "brand": "Something Different",
    "name": "Moonology Oracle Cards",
    "fullTitle": "Something Different - Moonology Oracle Cards",
    "price": "$45.99",
    "priceNum": 45.99,
    "sku": "SD-ORA-MOO-0002",
    "barcodes": [
      "SD-ORA-MOO-0002",
      "492457",
      "SDORAMOO0002"
    ],
    "pitch": "Inspirational affirmation card deck accompanied by a carved natural wood display stand. Offers daily empowering messages for mindful living.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492457/edit",
    "img": "https://images.momence.com/h/200431/product-image/c1649611-34d8-4f11-9c3a-d24e26fdd640.jpg"
  },
  {
    "id": 492462,
    "department": "Mindful Living, Journals & Games",
    "brand": "Something Different",
    "name": "Pure Magic Oracle Cards",
    "fullTitle": "Something Different - Pure Magic Oracle Cards",
    "price": "$39.99",
    "priceNum": 39.99,
    "sku": "SD-ORA-PUR-0007",
    "barcodes": [
      "SD-ORA-PUR-0007",
      "492462",
      "SDORAPUR0007"
    ],
    "pitch": "Inspirational affirmation card deck accompanied by a carved natural wood display stand. Offers daily empowering messages for mindful living.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492462/edit",
    "img": "https://images.momence.com/h/200431/product-image/c1d45400-9dda-4d31-9b6c-210a644c29dd.jpg"
  },
  {
    "id": 492468,
    "department": "Mindful Living, Journals & Games",
    "brand": "Something Different",
    "name": "Soul's Journey Oracle Cards",
    "fullTitle": "Something Different - Soul's Journey Oracle Cards",
    "price": "$49.99",
    "priceNum": 49.99,
    "sku": "SD-ORA-SOU-0013",
    "barcodes": [
      "SD-ORA-SOU-0013",
      "492468",
      "SDORASOU0013"
    ],
    "pitch": "Inspirational affirmation card deck accompanied by a carved natural wood display stand. Offers daily empowering messages for mindful living.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492468/edit",
    "img": "https://images.momence.com/h/200431/product-image/7a20b46f-8a22-4139-9e3a-f5b331f70a2d.jpg"
  },
  {
    "id": 492461,
    "department": "Mindful Living, Journals & Games",
    "brand": "Something Different",
    "name": "The Divine Feminine Oracle Cards",
    "fullTitle": "Something Different - The Divine Feminine Oracle Cards",
    "price": "$45.99",
    "priceNum": 45.99,
    "sku": "SD-ORA-DIV-0006",
    "barcodes": [
      "SD-ORA-DIV-0006",
      "492461",
      "SDORADIV0006"
    ],
    "pitch": "Inspirational affirmation card deck accompanied by a carved natural wood display stand. Offers daily empowering messages for mindful living.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492461/edit",
    "img": "https://images.momence.com/h/200431/product-image/e6ebaeef-6ba6-4804-9eb5-dd9a5daff978.jpg"
  },
  {
    "id": 492458,
    "department": "Mindful Living, Journals & Games",
    "brand": "Something Different",
    "name": "The Soul's Journey Lesson Cards",
    "fullTitle": "Something Different - The Soul's Journey Lesson Cards",
    "price": "$39.99",
    "priceNum": 39.99,
    "sku": "SD-ORA-SOU-0003",
    "barcodes": [
      "SD-ORA-SOU-0003",
      "492458",
      "SDORASOU0003"
    ],
    "pitch": "Inspirational affirmation card deck accompanied by a carved natural wood display stand. Offers daily empowering messages for mindful living.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492458/edit",
    "img": "https://images.momence.com/h/200431/product-image/807b0cd3-8f73-4ec6-b24d-50580b46d87b.jpg"
  },
  {
    "id": 492463,
    "department": "Mindful Living, Journals & Games",
    "brand": "Something Different",
    "name": "The Spirit Animal Oracle Cards",
    "fullTitle": "Something Different - The Spirit Animal Oracle Cards",
    "price": "$59.99",
    "priceNum": 59.99,
    "sku": "SD-ORA-SPI-0008",
    "barcodes": [
      "SD-ORA-SPI-0008",
      "492463",
      "SDORASPI0008"
    ],
    "pitch": "Inspirational affirmation card deck accompanied by a carved natural wood display stand. Offers daily empowering messages for mindful living.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492463/edit",
    "img": "https://images.momence.com/h/200431/product-image/0806cde1-219b-4738-86c4-03342b2d7dba.jpg"
  },
  {
    "id": 492467,
    "department": "Mindful Living, Journals & Games",
    "brand": "Something Different",
    "name": "The Universe Has Your Back Oracle Cards",
    "fullTitle": "Something Different - The Universe Has Your Back Oracle Cards",
    "price": "$49.99",
    "priceNum": 49.99,
    "sku": "SD-ORA-UNI-0012",
    "barcodes": [
      "SD-ORA-UNI-0012",
      "492467",
      "SDORAUNI0012"
    ],
    "pitch": "Inspirational affirmation card deck accompanied by a carved natural wood display stand. Offers daily empowering messages for mindful living.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492467/edit",
    "img": "https://images.momence.com/h/200431/product-image/3718f6e3-0c50-4184-b1ef-335be54efa09.jpg"
  },
  {
    "id": 498737,
    "department": "Mindful Living, Journals & Games",
    "brand": "The Practice",
    "name": "Journal",
    "fullTitle": "The Practice - Journal",
    "price": "$24.99",
    "priceNum": 24.99,
    "sku": "",
    "barcodes": [
      "",
      "498737"
    ],
    "pitch": "Curated lifestyle and wellness essential selected exclusively for The Practice community.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/498737/edit",
    "img": "https://images.momence.com/h/200431/product-image/c81d6a58-f83e-4a59-bbe9-fb63565346df.jpg"
  },
  {
    "id": 493178,
    "department": "Mindful Living, Journals & Games",
    "brand": "The Practice",
    "name": "The Whisper - Limited Edition",
    "fullTitle": "The Practice - The Whisper - Limited Edition",
    "price": "$39.54",
    "priceNum": 39.54,
    "sku": "",
    "barcodes": [
      "",
      "493178"
    ],
    "pitch": "Curated lifestyle and wellness essential selected exclusively for The Practice community.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/493178/edit",
    "img": ""
  },
  {
    "id": 492475,
    "department": "Mindful Living, Journals & Games",
    "brand": "Thought Catalog",
    "name": "101 Essays That Will Change The Way You Think",
    "fullTitle": "Thought Catalog - 101 Essays That Will Change The Way You Think",
    "price": "$39.99",
    "priceNum": 39.99,
    "sku": "TC-BOK-101-0007",
    "barcodes": [
      "TC-BOK-101-0007",
      "492475",
      "TCBOK1010007"
    ],
    "pitch": "A celebrated philosophical anthology by Brianna Wiest exploring cognitive biases, emotional regulation, daily routine, and personal purpose over fleeting passion. Each essay provides illuminating perspectives designed to expand self-awareness and reshape how you view life, relationships, and success.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492475/edit",
    "img": "https://images.momence.com/h/200431/product-image/4604c7b7-645c-4c98-b70e-3d7f6494ea59.webp"
  },
  {
    "id": 492476,
    "department": "Mindful Living, Journals & Games",
    "brand": "Thought Catalog",
    "name": "Dream Journal",
    "fullTitle": "Thought Catalog - Dream Journal",
    "price": "$29.99",
    "priceNum": 29.99,
    "sku": "TC-JOU-DRE-0008",
    "barcodes": [
      "TC-JOU-DRE-0008",
      "492476",
      "TCJOUDRE0008"
    ],
    "pitch": "An exquisite cloth-bound dream journal featuring gold foil accents and whimsical artwork by Danica Gim. Designed to rest conveniently on your nightstand, this guided keepsake offers intuitive prompts to record, interpret, and reflect upon your subconscious dreams and nocturnal insights.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492476/edit",
    "img": "https://images.momence.com/h/200431/product-image/b3d7fef2-8a4f-4c8b-9ca2-3af8d8555ac9.jpg"
  },
  {
    "id": 492473,
    "department": "Mindful Living, Journals & Games",
    "brand": "Thought Catalog",
    "name": "I Am The Hero Of My Own Life",
    "fullTitle": "Thought Catalog - I Am The Hero Of My Own Life",
    "price": "$24.99",
    "priceNum": 24.99,
    "sku": "TC-JOU-HER-0005",
    "barcodes": [
      "TC-JOU-HER-0005",
      "492473",
      "TCJOUHER0005"
    ],
    "pitch": "A transformative guided journal by bestselling author Brianna Wiest. Filled with thought-provoking prompts, exercises, and inspiring passages, this journal helps you identify self-limiting beliefs, align your daily habits with your values, and step into the role of the creator and hero of your life.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492473/edit",
    "img": "https://images.momence.com/h/200431/product-image/a87a5cf2-732e-4481-aa39-45fe1939f8f1.jpg"
  },
  {
    "id": 492471,
    "department": "Mindful Living, Journals & Games",
    "brand": "Thought Catalog",
    "name": "The Becoming Journal",
    "fullTitle": "Thought Catalog - The Becoming Journal",
    "price": "$44.99",
    "priceNum": 44.99,
    "sku": "TC-JOU-BEC-0003",
    "barcodes": [
      "TC-JOU-BEC-0003",
      "492471",
      "TCJOUBEC0003"
    ],
    "pitch": "A companion guided journal designed by Bianca Sparacino to navigate seasons of personal transformation and self-discovery. Features daily reflection practices, gratitude prompts, and thoughtful weekly exercises to help you process emotion, cultivate vulnerability, and align with your highest self.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492471/edit",
    "img": "https://images.momence.com/h/200431/product-image/fd6050e6-5b09-4f77-954b-71fa2176e7a2.jpg"
  },
  {
    "id": 492470,
    "department": "Mindful Living, Journals & Games",
    "brand": "Thought Catalog",
    "name": "The Life That's Waiting",
    "fullTitle": "Thought Catalog - The Life That's Waiting",
    "price": "$29.99",
    "priceNum": 29.99,
    "sku": "TC-BOK-LIF-0002",
    "barcodes": [
      "TC-BOK-LIF-0002",
      "492470",
      "TCBOKLIF0002"
    ],
    "pitch": "An empowering literary guide to stepping beyond past hurt and self-doubt. Author Bianca Sparacino inspires readers to stop merely trying to keep life together and instead embrace the vibrant, fulfilling reality waiting on the other side of fear. Beautifully written for anyone navigating life transitions and seeking personal purpose.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492470/edit",
    "img": "https://images.momence.com/h/200431/product-image/f73d0b3e-0d23-4857-8144-439cd7851527.jpg"
  },
  {
    "id": 492474,
    "department": "Mindful Living, Journals & Games",
    "brand": "Thought Catalog",
    "name": "The Mountain Is You",
    "fullTitle": "Thought Catalog - The Mountain Is You",
    "price": "$39.99",
    "priceNum": 39.99,
    "sku": "TC-BOK-MOU-0006",
    "barcodes": [
      "TC-BOK-MOU-0006",
      "492474",
      "TCBOKMOU0006"
    ],
    "pitch": "The global bestselling guide to transforming self-sabotage into self-mastery by Brianna Wiest. Using the mountain as a metaphor for internal resistance, this book explains why we self-sabotage, how to understand our emotional triggers, and how to build the emotional intelligence necessary to reach our full potential.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492474/edit",
    "img": "https://images.momence.com/h/200431/product-image/da112cd3-e48c-4eff-a34f-621d1036055e.jpg"
  },
  {
    "id": 492469,
    "department": "Mindful Living, Journals & Games",
    "brand": "Thought Catalog",
    "name": "The Strength In Our Scars",
    "fullTitle": "Thought Catalog - The Strength In Our Scars",
    "price": "$29.99",
    "priceNum": 29.99,
    "sku": "TC-BOK-STR-0001",
    "barcodes": [
      "TC-BOK-STR-0001",
      "492469",
      "TCBOKSTR0001"
    ],
    "pitch": "A poignant collection of poetry, prose, and compassionate encouragement by Bianca Sparacino. Dedicated to those on a healing journey, this book addresses themes of self-love, moving forward, and finding inner resilience through life's trials. A gentle reminder that even our deepest struggles can become the foundation of our greatest strength.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492469/edit",
    "img": "https://images.momence.com/h/200431/product-image/6af3af71-a070-4422-9755-b70f5371aaa0.jpg"
  },
  {
    "id": 492472,
    "department": "Mindful Living, Journals & Games",
    "brand": "Thought Catalog",
    "name": "Your Heart Will Heal",
    "fullTitle": "Thought Catalog - Your Heart Will Heal",
    "price": "$29.99",
    "priceNum": 29.99,
    "sku": "TC-JOU-HEA-0004",
    "barcodes": [
      "TC-JOU-HEA-0004",
      "492472",
      "TCJOUHEA0004"
    ],
    "pitch": "Subtitled \"A Gentle Guided Journal for Getting Over Anyone,\" this compassionate workbook by Chrissy Stockton offers a safe space to process heartbreak. Providing structured prompts to navigate grief, denial, and healing at your own pace, it helps you release emotional weight and rediscover peace within yourself.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492472/edit",
    "img": "https://images.momence.com/h/200431/product-image/43e71284-53e8-4d7d-a3ba-ca9190d9b736.jpg"
  },
  {
    "id": 492556,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "Ariana Ost",
    "name": "Aura Quartz Sunburst Crystal Grid",
    "fullTitle": "Ariana Ost - Aura Quartz Sunburst Crystal Grid",
    "price": "$270.00",
    "priceNum": 270,
    "sku": "AO-KIT-GRD-AUR-0007",
    "barcodes": [
      "AO-KIT-GRD-AUR-0007",
      "492556",
      "AOKITGRDAUR0007"
    ],
    "pitch": "Artisan sacred home and wellness piece handcrafted in New York featuring genuine raw healing crystals and hammered brass metalwork to elevate spatial harmony.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492556/edit",
    "img": "https://images.momence.com/h/200431/product-image/dfa20f73-c009-4de6-9073-c2129f5ee6a5.jpg"
  },
  {
    "id": 492553,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "Ariana Ost",
    "name": "Balancing Chakra Game",
    "fullTitle": "Ariana Ost - Balancing Chakra Game",
    "price": "$79.99",
    "priceNum": 79.99,
    "sku": "AO-KIT-GAM-CHA-0004",
    "barcodes": [
      "AO-KIT-GAM-CHA-0004",
      "492553",
      "AOKITGAMCHA0004"
    ],
    "pitch": "Artisan sacred home and wellness piece handcrafted in New York featuring genuine raw healing crystals and hammered brass metalwork to elevate spatial harmony.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492553/edit",
    "img": "https://images.momence.com/h/200431/product-image/5176914a-4960-497a-9aa5-db477474e8d9.jpg"
  },
  {
    "id": 492557,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "Ariana Ost",
    "name": "Beach Vibes Healing Crystal Grid- Sunburst Wall Decor",
    "fullTitle": "Ariana Ost - Beach Vibes Healing Crystal Grid- Sunburst Wall Decor",
    "price": "$270.00",
    "priceNum": 270,
    "sku": "AO-KIT-GRD-BCH-0008",
    "barcodes": [
      "AO-KIT-GRD-BCH-0008",
      "492557",
      "AOKITGRDBCH0008"
    ],
    "pitch": "Artisan sacred home and wellness piece handcrafted in New York featuring genuine raw healing crystals and hammered brass metalwork to elevate spatial harmony.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492557/edit",
    "img": "https://images.momence.com/h/200431/product-image/1edd4683-08e4-463a-94de-6f6b5dd247cd.jpg"
  },
  {
    "id": 492558,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "Ariana Ost",
    "name": "Carnelian Sound Healing Kit- Tuning Fork & Crystal Dish",
    "fullTitle": "Ariana Ost - Carnelian Sound Healing Kit- Tuning Fork & Crystal Dish",
    "price": "$225.99",
    "priceNum": 225.99,
    "sku": "AO-KIT-SND-CAR-0009",
    "barcodes": [
      "AO-KIT-SND-CAR-0009",
      "492558",
      "AOKITSNDCAR0009"
    ],
    "pitch": "Artisan sacred home and wellness piece handcrafted in New York featuring genuine raw healing crystals and hammered brass metalwork to elevate spatial harmony.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492558/edit",
    "img": "https://images.momence.com/h/200431/product-image/b3a74267-6e29-4bf1-9efd-098ec6de30b8.jpg"
  },
  {
    "id": 492552,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "Ariana Ost",
    "name": "Mega Sunburst Crystal Grid- Selenite for Peace",
    "fullTitle": "Ariana Ost - Mega Sunburst Crystal Grid- Selenite for Peace",
    "price": "$450.00",
    "priceNum": 450,
    "sku": "AO-KIT-GRD-SEL-0003",
    "barcodes": [
      "AO-KIT-GRD-SEL-0003",
      "492552",
      "AOKITGRDSEL0003"
    ],
    "pitch": "Artisan sacred home and wellness piece handcrafted in New York featuring genuine raw healing crystals and hammered brass metalwork to elevate spatial harmony.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492552/edit",
    "img": "https://images.momence.com/h/200431/product-image/e3db174c-8177-4180-9351-0d91e6ca2e61.jpg"
  },
  {
    "id": 492554,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "Ariana Ost",
    "name": "Om Tuning Fork with Cap and Herkimer Diamond Sound Healing",
    "fullTitle": "Ariana Ost - Om Tuning Fork with Cap and Herkimer Diamond Sound Healing",
    "price": "$199.00",
    "priceNum": 199,
    "sku": "AO-KIT-TUN-OM-0005",
    "barcodes": [
      "AO-KIT-TUN-OM-0005",
      "492554",
      "AOKITTUNOM0005"
    ],
    "pitch": "Artisan sacred home and wellness piece handcrafted in New York featuring genuine raw healing crystals and hammered brass metalwork to elevate spatial harmony.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492554/edit",
    "img": "https://images.momence.com/h/200431/product-image/925fcfa9-8ff1-4262-be49-657a2f1157bd.jpg"
  },
  {
    "id": 492550,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "Ariana Ost",
    "name": "Sound Healing Crystal Kit - Tuning Fork & Third Eye Crystal",
    "fullTitle": "Ariana Ost - Sound Healing Crystal Kit - Tuning Fork & Third Eye Crystal",
    "price": "$225.00",
    "priceNum": 225,
    "sku": "AO-GRD-BEA-0001",
    "barcodes": [
      "AO-GRD-BEA-0001",
      "492550",
      "AOGRDBEA0001"
    ],
    "pitch": "Artisan sacred home and wellness piece handcrafted in New York featuring genuine raw healing crystals and hammered brass metalwork to elevate spatial harmony.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492550/edit",
    "img": "https://images.momence.com/h/200431/product-image/26d634ba-3a8a-4631-a8ec-cd09cf55bf13.jpg"
  },
  {
    "id": 492555,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "Ariana Ost",
    "name": "Sound Healing Set- Earth Tuning Fork & Clear Quartz Grid",
    "fullTitle": "Ariana Ost - Sound Healing Set- Earth Tuning Fork & Clear Quartz Grid",
    "price": "$225.00",
    "priceNum": 225,
    "sku": "AO-KIT-SND-EAR-0006",
    "barcodes": [
      "AO-KIT-SND-EAR-0006",
      "492555",
      "AOKITSNDEAR0006"
    ],
    "pitch": "Artisan sacred home and wellness piece handcrafted in New York featuring genuine raw healing crystals and hammered brass metalwork to elevate spatial harmony.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492555/edit",
    "img": "https://images.momence.com/h/200431/product-image/9912c023-a87d-46a5-a0b0-3b80f270d1bf.jpg"
  },
  {
    "id": 492551,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "Ariana Ost",
    "name": "Triple Quartz Sunburst Grid- Clear, Rose & Smoky Quartz",
    "fullTitle": "Ariana Ost - Triple Quartz Sunburst Grid- Clear, Rose & Smoky Quartz",
    "price": "$299.00",
    "priceNum": 299,
    "sku": "AO-KIT-CAR-0002",
    "barcodes": [
      "AO-KIT-CAR-0002",
      "492551",
      "AOKITCAR0002"
    ],
    "pitch": "Artisan sacred home and wellness piece handcrafted in New York featuring genuine raw healing crystals and hammered brass metalwork to elevate spatial harmony.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492551/edit",
    "img": "https://images.momence.com/h/200431/product-image/73a96f00-74be-4625-a3d8-32396d247098.jpg"
  },
  {
    "id": 492274,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "Earths Elements",
    "name": "Earth's Elements - Crystal Roll-On - Abundance",
    "fullTitle": "Earths Elements - Earth's Elements - Crystal Roll-On - Abundance",
    "price": "$31.99",
    "priceNum": 31.99,
    "sku": "EE-ROL-ABN-0001",
    "barcodes": [
      "EE-ROL-ABN-0001",
      "492274",
      "EEROLABN0001"
    ],
    "pitch": "Handcrafted botanical ritual blend and smudging tool made with organic herbs and natural crystals for purifying positive energetic vibrations.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492274/edit",
    "img": "https://images.momence.com/h/200431/product-image/4fb463fb-be18-4e9b-87e5-8ca563b73372.png"
  },
  {
    "id": 492275,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "Earths Elements",
    "name": "Earth's Elements - Crystal Roll-On - Focus",
    "fullTitle": "Earths Elements - Earth's Elements - Crystal Roll-On - Focus",
    "price": "$31.99",
    "priceNum": 31.99,
    "sku": "EE-ROL-FOC-0002",
    "barcodes": [
      "EE-ROL-FOC-0002",
      "492275",
      "EEROLFOC0002"
    ],
    "pitch": "Handcrafted botanical ritual blend and smudging tool made with organic herbs and natural crystals for purifying positive energetic vibrations.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492275/edit",
    "img": "https://images.momence.com/h/200431/product-image/628a0e72-4d79-44ea-8dad-becb1b1637ca.png"
  },
  {
    "id": 492276,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "Earths Elements",
    "name": "Earth's Elements - Crystal Roll-On - Intuition",
    "fullTitle": "Earths Elements - Earth's Elements - Crystal Roll-On - Intuition",
    "price": "$31.99",
    "priceNum": 31.99,
    "sku": "EE-ROL-INT-0003",
    "barcodes": [
      "EE-ROL-INT-0003",
      "492276",
      "EEROLINT0003"
    ],
    "pitch": "Handcrafted botanical ritual blend and smudging tool made with organic herbs and natural crystals for purifying positive energetic vibrations.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492276/edit",
    "img": "https://images.momence.com/h/200431/product-image/2ff10849-686d-432b-9e8f-3d20c020625d.png"
  },
  {
    "id": 492277,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "Earths Elements",
    "name": "Earth's Elements - Crystal Roll-On - Love",
    "fullTitle": "Earths Elements - Earth's Elements - Crystal Roll-On - Love",
    "price": "$31.99",
    "priceNum": 31.99,
    "sku": "EE-ROL-LOV-0004",
    "barcodes": [
      "EE-ROL-LOV-0004",
      "492277",
      "EEROLLOV0004"
    ],
    "pitch": "Handcrafted botanical ritual blend and smudging tool made with organic herbs and natural crystals for purifying positive energetic vibrations.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492277/edit",
    "img": "https://images.momence.com/h/200431/product-image/2c846677-02fd-4b49-96ff-4441a0297627.png"
  },
  {
    "id": 492278,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "Earths Elements",
    "name": "Earth's Elements - Crystal Roll-On - Luck",
    "fullTitle": "Earths Elements - Earth's Elements - Crystal Roll-On - Luck",
    "price": "$31.99",
    "priceNum": 31.99,
    "sku": "EE-ROL-LCK-0005",
    "barcodes": [
      "EE-ROL-LCK-0005",
      "492278",
      "EEROLLCK0005"
    ],
    "pitch": "Handcrafted botanical ritual blend and smudging tool made with organic herbs and natural crystals for purifying positive energetic vibrations.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492278/edit",
    "img": "https://images.momence.com/h/200431/product-image/ca3a30b6-3564-41fb-b4e0-503edff78c7b.png"
  },
  {
    "id": 492279,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "Earths Elements",
    "name": "Earth's Elements - Crystal Roll-On - Manifest",
    "fullTitle": "Earths Elements - Earth's Elements - Crystal Roll-On - Manifest",
    "price": "$31.99",
    "priceNum": 31.99,
    "sku": "EE-ROL-MAN-0006",
    "barcodes": [
      "EE-ROL-MAN-0006",
      "492279",
      "EEROLMAN0006"
    ],
    "pitch": "Handcrafted botanical ritual blend and smudging tool made with organic herbs and natural crystals for purifying positive energetic vibrations.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492279/edit",
    "img": "https://images.momence.com/h/200431/product-image/f0a92928-b7a9-4a9d-97f0-bf172870319c.png"
  },
  {
    "id": 492280,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "Earths Elements",
    "name": "Earth's Elements - Crystal Roll-On - Protection",
    "fullTitle": "Earths Elements - Earth's Elements - Crystal Roll-On - Protection",
    "price": "$31.99",
    "priceNum": 31.99,
    "sku": "EE-ROL-PRO-0007",
    "barcodes": [
      "EE-ROL-PRO-0007",
      "492280",
      "EEROLPRO0007"
    ],
    "pitch": "Handcrafted botanical ritual blend and smudging tool made with organic herbs and natural crystals for purifying positive energetic vibrations.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492280/edit",
    "img": "https://images.momence.com/h/200431/product-image/8bbdc160-57bb-4c01-994d-bd92a3fd4257.png"
  },
  {
    "id": 492281,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "Earths Elements",
    "name": "Earth's Elements - Crystal Roll-On - Spirit",
    "fullTitle": "Earths Elements - Earth's Elements - Crystal Roll-On - Spirit",
    "price": "$31.99",
    "priceNum": 31.99,
    "sku": "EE-ROL-SPI-0008",
    "barcodes": [
      "EE-ROL-SPI-0008",
      "492281",
      "EEROLSPI0008"
    ],
    "pitch": "Handcrafted botanical ritual blend and smudging tool made with organic herbs and natural crystals for purifying positive energetic vibrations.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492281/edit",
    "img": "https://images.momence.com/h/200431/product-image/5abefc04-640b-474d-9fb5-3c7f314ee120.png"
  },
  {
    "id": 492285,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "Earths Elements",
    "name": "Earth's Elements - Sage Bundle - Amethyst Crystal",
    "fullTitle": "Earths Elements - Earth's Elements - Sage Bundle - Amethyst Crystal",
    "price": "$18.99",
    "priceNum": 18.99,
    "sku": "EE-SAG-AMY-0012",
    "barcodes": [
      "EE-SAG-AMY-0012",
      "492285",
      "EESAGAMY0012"
    ],
    "pitch": "Handcrafted botanical ritual blend and smudging tool made with organic herbs and natural crystals for purifying positive energetic vibrations.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/492285/edit",
    "img": "https://images.momence.com/h/200431/product-image/de6c3389-c6b7-4d46-8b8b-a8827ca55633.png"
  },
  {
    "id": 504265,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Amethyst",
    "fullTitle": "The Gneiss Guy - Amethyst",
    "price": "$250.00",
    "priceNum": 250,
    "sku": "",
    "barcodes": [
      "",
      "504265"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Renowned for deep spiritual calm, soothing stress relief, intuitive clarity, and Crown Chakra harmony. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504265/edit",
    "img": "https://images.momence.com/h/200431/product-image/75e29340-7e46-4df0-90ea-3414153bf755.png"
  },
  {
    "id": 504266,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Amethyst",
    "fullTitle": "The Gneiss Guy - Amethyst",
    "price": "$175.00",
    "priceNum": 175,
    "sku": "",
    "barcodes": [
      "",
      "504266"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Renowned for deep spiritual calm, soothing stress relief, intuitive clarity, and Crown Chakra harmony. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504266/edit",
    "img": "https://images.momence.com/h/200431/product-image/7731bd47-806b-4886-b027-8463d009a129.png"
  },
  {
    "id": 504268,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Amethyst ((Small)) flat cluster",
    "fullTitle": "The Gneiss Guy - Amethyst ((Small)) flat cluster",
    "price": "$75.00",
    "priceNum": 75,
    "sku": "",
    "barcodes": [
      "",
      "504268"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Renowned for deep spiritual calm, soothing stress relief, intuitive clarity, and Crown Chakra harmony. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504268/edit",
    "img": "https://images.momence.com/h/200431/product-image/6978dc5e-9f08-4b15-b0f3-e23f952eb77d.png"
  },
  {
    "id": 504279,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Amethyst (Extra (Small)) flat cluster",
    "fullTitle": "The Gneiss Guy - Amethyst (Extra (Small)) flat cluster",
    "price": "$18.00",
    "priceNum": 18,
    "sku": "",
    "barcodes": [
      "",
      "504279"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Renowned for deep spiritual calm, soothing stress relief, intuitive clarity, and Crown Chakra harmony. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504279/edit",
    "img": "https://images.momence.com/h/200431/product-image/dc9a2d8b-d5f6-4fa1-b1a1-9e28aac0e43d.png"
  },
  {
    "id": 504184,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Amethyst (Shangaan)",
    "fullTitle": "The Gneiss Guy - Amethyst (Shangaan)",
    "price": "$35.00",
    "priceNum": 35,
    "sku": "",
    "barcodes": [
      "",
      "504184"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Renowned for deep spiritual calm, soothing stress relief, intuitive clarity, and Crown Chakra harmony. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504184/edit",
    "img": "https://images.momence.com/h/200431/product-image/e95ea131-5dcc-4160-9934-881242efe044.png"
  },
  {
    "id": 504185,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Amethyst Chevron - ((Medium))",
    "fullTitle": "The Gneiss Guy - Amethyst Chevron - ((Medium))",
    "price": "$8.00",
    "priceNum": 8,
    "sku": "",
    "barcodes": [
      "",
      "504185"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Renowned for deep spiritual calm, soothing stress relief, intuitive clarity, and Crown Chakra harmony. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504185/edit",
    "img": "https://images.momence.com/h/200431/product-image/8d1d3b08-a09c-462c-92ce-89aac0232df1.png"
  },
  {
    "id": 504278,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Amethyst Crystal Chunk (XL)",
    "fullTitle": "The Gneiss Guy - Amethyst Crystal Chunk (XL)",
    "price": "$95.00",
    "priceNum": 95,
    "sku": "",
    "barcodes": [
      "",
      "504278"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Renowned for deep spiritual calm, soothing stress relief, intuitive clarity, and Crown Chakra harmony. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504278/edit",
    "img": "https://images.momence.com/h/200431/product-image/fd65d329-0a07-48b5-9057-47954c0ba295.png"
  },
  {
    "id": 504277,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Amethyst Crystal Chunk (XXL)",
    "fullTitle": "The Gneiss Guy - Amethyst Crystal Chunk (XXL)",
    "price": "$125.00",
    "priceNum": 125,
    "sku": "",
    "barcodes": [
      "",
      "504277"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Renowned for deep spiritual calm, soothing stress relief, intuitive clarity, and Crown Chakra harmony. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504277/edit",
    "img": "https://images.momence.com/h/200431/product-image/56e025ed-0cb7-4ecf-8792-46fe58ff2e58.png"
  },
  {
    "id": 504270,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Amethyst Large circle",
    "fullTitle": "The Gneiss Guy - Amethyst Large circle",
    "price": "$625.00",
    "priceNum": 625,
    "sku": "",
    "barcodes": [
      "",
      "504270"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Renowned for deep spiritual calm, soothing stress relief, intuitive clarity, and Crown Chakra harmony. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504270/edit",
    "img": "https://images.momence.com/h/200431/product-image/916bbff0-b3b7-484f-9a21-adebfca6edda.png"
  },
  {
    "id": 504276,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Amethyst Polished (Bigger)",
    "fullTitle": "The Gneiss Guy - Amethyst Polished (Bigger)",
    "price": "$160.00",
    "priceNum": 160,
    "sku": "",
    "barcodes": [
      "",
      "504276"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Renowned for deep spiritual calm, soothing stress relief, intuitive clarity, and Crown Chakra harmony. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504276/edit",
    "img": "https://images.momence.com/h/200431/product-image/9852c6cc-43b0-403c-ad75-d968c77c9fe1.png"
  },
  {
    "id": 504274,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Amethyst Polished (Smaller)",
    "fullTitle": "The Gneiss Guy - Amethyst Polished (Smaller)",
    "price": "$140.00",
    "priceNum": 140,
    "sku": "",
    "barcodes": [
      "",
      "504274"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Renowned for deep spiritual calm, soothing stress relief, intuitive clarity, and Crown Chakra harmony. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504274/edit",
    "img": "https://images.momence.com/h/200431/product-image/53b52106-d32f-4a33-b521-f9ce664fcd04.png"
  },
  {
    "id": 504273,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Amethyst chevron ((Small))",
    "fullTitle": "The Gneiss Guy - Amethyst chevron ((Small))",
    "price": "$5.00",
    "priceNum": 5,
    "sku": "",
    "barcodes": [
      "",
      "504273"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Renowned for deep spiritual calm, soothing stress relief, intuitive clarity, and Crown Chakra harmony. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504273/edit",
    "img": "https://images.momence.com/h/200431/product-image/2fd80a73-9031-4dd3-97b7-a4ad19a3de99.png"
  },
  {
    "id": 504272,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Amethyst chevron (Large)",
    "fullTitle": "The Gneiss Guy - Amethyst chevron (Large)",
    "price": "$12.00",
    "priceNum": 12,
    "sku": "",
    "barcodes": [
      "",
      "504272"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Renowned for deep spiritual calm, soothing stress relief, intuitive clarity, and Crown Chakra harmony. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504272/edit",
    "img": "https://images.momence.com/h/200431/product-image/cb242073-a214-4b80-b85f-8df5fba6a367.png"
  },
  {
    "id": 504269,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Amethyst large flat cluster",
    "fullTitle": "The Gneiss Guy - Amethyst large flat cluster",
    "price": "$285.00",
    "priceNum": 285,
    "sku": "",
    "barcodes": [
      "",
      "504269"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Renowned for deep spiritual calm, soothing stress relief, intuitive clarity, and Crown Chakra harmony. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504269/edit",
    "img": "https://images.momence.com/h/200431/product-image/2eaaf8e1-c198-443c-84c0-88a49bbd47e3.png"
  },
  {
    "id": 504280,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Amethyst laser large",
    "fullTitle": "The Gneiss Guy - Amethyst laser large",
    "price": "$310.00",
    "priceNum": 310,
    "sku": "",
    "barcodes": [
      "",
      "504280"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Renowned for deep spiritual calm, soothing stress relief, intuitive clarity, and Crown Chakra harmony. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504280/edit",
    "img": "https://images.momence.com/h/200431/product-image/062bb864-eece-4e87-803c-4198f4d2420b.png"
  },
  {
    "id": 504282,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Apophyllite",
    "fullTitle": "The Gneiss Guy - Apophyllite",
    "price": "$50.00",
    "priceNum": 50,
    "sku": "",
    "barcodes": [
      "",
      "504282"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. High-vibrational light bringer that clears mental fog, elevates meditation, and connects with higher consciousness. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504282/edit",
    "img": "https://images.momence.com/h/200431/product-image/447e1750-276d-4b14-bb58-e8b4fe5dce63.png"
  },
  {
    "id": 504281,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Apophyllite Large",
    "fullTitle": "The Gneiss Guy - Apophyllite Large",
    "price": "$225.00",
    "priceNum": 225,
    "sku": "",
    "barcodes": [
      "",
      "504281"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. High-vibrational light bringer that clears mental fog, elevates meditation, and connects with higher consciousness. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504281/edit",
    "img": "https://images.momence.com/h/200431/product-image/a2c7052b-3ec4-429e-9aec-aaa0dc9d83e3.png"
  },
  {
    "id": 504283,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Apophyllite/stilbite",
    "fullTitle": "The Gneiss Guy - Apophyllite/stilbite",
    "price": "$925.00",
    "priceNum": 925,
    "sku": "",
    "barcodes": [
      "",
      "504283"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. High-vibrational light bringer that clears mental fog, elevates meditation, and connects with higher consciousness. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504283/edit",
    "img": "https://images.momence.com/h/200431/product-image/2d11fcf1-51e2-497e-b5a5-0cd58a61c370.png"
  },
  {
    "id": 504284,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Aragonite",
    "fullTitle": "The Gneiss Guy - Aragonite",
    "price": "$35.00",
    "priceNum": 35,
    "sku": "",
    "barcodes": [
      "",
      "504284"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Potent Earth-grounding mineral that anchors erratic emotional energy and encourages physical balance. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504284/edit",
    "img": "https://images.momence.com/h/200431/product-image/78d247f6-e9d9-4051-a587-75c269641ab1.png"
  },
  {
    "id": 504285,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Banded Agate",
    "fullTitle": "The Gneiss Guy - Banded Agate",
    "price": "$6.00",
    "priceNum": 6,
    "sku": "",
    "barcodes": [
      "",
      "504285"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Harmonizing stone that grounds yin and yang energies, fostering emotional strength and inner security. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504285/edit",
    "img": "https://images.momence.com/h/200431/product-image/13132958-2c9c-4c21-b15b-649e9ab32057.png"
  },
  {
    "id": 504286,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Bermejillo Selenite",
    "fullTitle": "The Gneiss Guy - Bermejillo Selenite",
    "price": "$175.00",
    "priceNum": 175,
    "sku": "",
    "barcodes": [
      "",
      "504286"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Essential cleansing stone that purifies surrounding crystals, dissolves stagnant energy, and promotes peace. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504286/edit",
    "img": "https://images.momence.com/h/200431/product-image/0ddf6d88-ac4d-4e61-87d6-27be73f11e95.png"
  },
  {
    "id": 504287,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Blue Calcite",
    "fullTitle": "The Gneiss Guy - Blue Calcite",
    "price": "$18.00",
    "priceNum": 18,
    "sku": "",
    "barcodes": [
      "",
      "504287"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Gentle emotional healer that soothes anxious thoughts, clears the throat chakra, and invites peaceful communication. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504287/edit",
    "img": "https://images.momence.com/h/200431/product-image/c4366f72-b1a2-49b8-a2ea-505bc9b3b9c0.png"
  },
  {
    "id": 504288,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Brown Zebra Jasper",
    "fullTitle": "The Gneiss Guy - Brown Zebra Jasper",
    "price": "$8.00",
    "priceNum": 8,
    "sku": "",
    "barcodes": [
      "",
      "504288"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Supreme nurturer stone providing grounding stability, endurance, and comfort during transitional times. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504288/edit",
    "img": "https://images.momence.com/h/200431/product-image/a295446b-3432-4ce9-80c2-391a5b2343b1.png"
  },
  {
    "id": 504289,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Carnelian",
    "fullTitle": "The Gneiss Guy - Carnelian",
    "price": "$6.00",
    "priceNum": 6,
    "sku": "",
    "barcodes": [
      "",
      "504289"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Vitalizing Sacral Chakra crystal that sparks creative passion, self-confidence, and bold motivation. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504289/edit",
    "img": "https://images.momence.com/h/200431/product-image/7d4a78cb-27c4-48f0-b573-7cf1846c0231.png"
  },
  {
    "id": 504294,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Celestite ((Medium))",
    "fullTitle": "The Gneiss Guy - Celestite ((Medium))",
    "price": "$65.00",
    "priceNum": 65,
    "sku": "",
    "barcodes": [
      "",
      "504294"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Serene celestial crystal associated with angelic harmony, divine guidance, and restful restorative sleep. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504294/edit",
    "img": "https://images.momence.com/h/200431/product-image/ef7e14e8-2e08-4008-b6cc-303c1dbaba21.png"
  },
  {
    "id": 504290,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Celestite ((Small))",
    "fullTitle": "The Gneiss Guy - Celestite ((Small))",
    "price": "$55.00",
    "priceNum": 55,
    "sku": "",
    "barcodes": [
      "",
      "504290"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Serene celestial crystal associated with angelic harmony, divine guidance, and restful restorative sleep. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504290/edit",
    "img": "https://images.momence.com/h/200431/product-image/4bd13d65-17a3-4801-a357-8a46d03a56d9.png"
  },
  {
    "id": 504297,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Celestite Large",
    "fullTitle": "The Gneiss Guy - Celestite Large",
    "price": "$680.00",
    "priceNum": 680,
    "sku": "",
    "barcodes": [
      "",
      "504297"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Serene celestial crystal associated with angelic harmony, divine guidance, and restful restorative sleep. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504297/edit",
    "img": "https://images.momence.com/h/200431/product-image/303b1d3d-52d7-4a61-8d63-debda035007a.png"
  },
  {
    "id": 504299,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Clear Quartz Tower lg",
    "fullTitle": "The Gneiss Guy - Clear Quartz Tower lg",
    "price": "$75.00",
    "priceNum": 75,
    "sku": "",
    "barcodes": [
      "",
      "504299"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Master healer crystal that amplifies intention, cleanses the energetic field, and directs focused vitality. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504299/edit",
    "img": "https://images.momence.com/h/200431/product-image/615fe66f-0bf7-47c2-a04f-a434e30f5024.png"
  },
  {
    "id": 504301,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Clear Quartz Tower mini",
    "fullTitle": "The Gneiss Guy - Clear Quartz Tower mini",
    "price": "$25.00",
    "priceNum": 25,
    "sku": "",
    "barcodes": [
      "",
      "504301"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Master healer crystal that amplifies intention, cleanses the energetic field, and directs focused vitality. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504301/edit",
    "img": "https://images.momence.com/h/200431/product-image/c45a193d-1b97-44b3-942b-7a4f677ccd43.png"
  },
  {
    "id": 504379,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Crystals Rose Quartz polished stone (sm)",
    "fullTitle": "The Gneiss Guy - Crystals Rose Quartz polished stone (sm)",
    "price": "$16.00",
    "priceNum": 16,
    "sku": "",
    "barcodes": [
      "",
      "504379"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Master healer crystal that amplifies intention, cleanses the energetic field, and directs focused vitality. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504379/edit",
    "img": "https://images.momence.com/h/200431/product-image/1f110e81-54a0-4733-9100-6335fecd5830.png"
  },
  {
    "id": 504302,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Double Terminated Quartz",
    "fullTitle": "The Gneiss Guy - Double Terminated Quartz",
    "price": "$7.00",
    "priceNum": 7,
    "sku": "",
    "barcodes": [
      "",
      "504302"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Master healer crystal that amplifies intention, cleanses the energetic field, and directs focused vitality. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504302/edit",
    "img": "https://images.momence.com/h/200431/product-image/01715850-2576-4bcc-9d3a-42e3ae66c38e.png"
  },
  {
    "id": 504305,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Fancy Jasper",
    "fullTitle": "The Gneiss Guy - Fancy Jasper",
    "price": "$6.00",
    "priceNum": 6,
    "sku": "",
    "barcodes": [
      "",
      "504305"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Supreme nurturer stone providing grounding stability, endurance, and comfort during transitional times. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504305/edit",
    "img": "https://images.momence.com/h/200431/product-image/cdff2d63-9114-4f43-846c-90c2baa2c45d.png"
  },
  {
    "id": 504307,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Flower Agate Sphere ((Small))",
    "fullTitle": "The Gneiss Guy - Flower Agate Sphere ((Small))",
    "price": "$45.00",
    "priceNum": 45,
    "sku": "",
    "barcodes": [
      "",
      "504307"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Harmonizing stone that grounds yin and yang energies, fostering emotional strength and inner security. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504307/edit",
    "img": "https://images.momence.com/h/200431/product-image/e921c758-f5c2-4787-8a8b-baff83c15a8d.png"
  },
  {
    "id": 504308,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Flower Agate Sphere Big",
    "fullTitle": "The Gneiss Guy - Flower Agate Sphere Big",
    "price": "$55.00",
    "priceNum": 55,
    "sku": "",
    "barcodes": [
      "",
      "504308"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Harmonizing stone that grounds yin and yang energies, fostering emotional strength and inner security. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504308/edit",
    "img": "https://images.momence.com/h/200431/product-image/4f3fd62b-2acc-4006-baba-a8fe2af6e7b4.png"
  },
  {
    "id": 504306,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Flower Agate round",
    "fullTitle": "The Gneiss Guy - Flower Agate round",
    "price": "$25.00",
    "priceNum": 25,
    "sku": "",
    "barcodes": [
      "",
      "504306"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Harmonizing stone that grounds yin and yang energies, fostering emotional strength and inner security. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504306/edit",
    "img": "https://images.momence.com/h/200431/product-image/f57b92e3-73c2-4f39-8fb4-f541160861c6.png"
  },
  {
    "id": 504312,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Fossil Squid - Orthoceras ((Small))",
    "fullTitle": "The Gneiss Guy - Fossil Squid - Orthoceras ((Small))",
    "price": "$85.00",
    "priceNum": 85,
    "sku": "",
    "barcodes": [
      "",
      "504312"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Ancient prehistoric fossil promoting grounding wisdom, longevity, and a deep reverence for geological time. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504312/edit",
    "img": "https://images.momence.com/h/200431/product-image/9e311259-0631-4289-a5b2-f6c8ebb9ee1d.png"
  },
  {
    "id": 504309,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Fossil Squid - Orthoceras (Large)",
    "fullTitle": "The Gneiss Guy - Fossil Squid - Orthoceras (Large)",
    "price": "$225.00",
    "priceNum": 225,
    "sku": "",
    "barcodes": [
      "",
      "504309"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Ancient prehistoric fossil promoting grounding wisdom, longevity, and a deep reverence for geological time. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504309/edit",
    "img": "https://images.momence.com/h/200431/product-image/d95a6b01-4237-498a-bb97-68014f81f781.png"
  },
  {
    "id": 504314,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Geode Quartz Large",
    "fullTitle": "The Gneiss Guy - Geode Quartz Large",
    "price": "$175.00",
    "priceNum": 175,
    "sku": "",
    "barcodes": [
      "",
      "504314"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Master healer crystal that amplifies intention, cleanses the energetic field, and directs focused vitality. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504314/edit",
    "img": "https://images.momence.com/h/200431/product-image/6a74f391-77c2-462e-92c2-afc88f5f5268.png"
  },
  {
    "id": 504316,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Green Fluorite - ((Medium))",
    "fullTitle": "The Gneiss Guy - Green Fluorite - ((Medium))",
    "price": "$225.00",
    "priceNum": 225,
    "sku": "",
    "barcodes": [
      "",
      "504316"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Authentic natural earth mineral specimen radiating natural grounding frequency and holistic energetic balance. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504316/edit",
    "img": "https://images.momence.com/h/200431/product-image/b8bda5e3-7f05-498e-8ee2-9114338f85f4.png"
  },
  {
    "id": 504315,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Green Fluorite round",
    "fullTitle": "The Gneiss Guy - Green Fluorite round",
    "price": "$18.00",
    "priceNum": 18,
    "sku": "",
    "barcodes": [
      "",
      "504315"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Authentic natural earth mineral specimen radiating natural grounding frequency and holistic energetic balance. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504315/edit",
    "img": "https://images.momence.com/h/200431/product-image/860a5f62-7034-4fda-978e-bc980ff88d11.png"
  },
  {
    "id": 504319,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Green Jasper",
    "fullTitle": "The Gneiss Guy - Green Jasper",
    "price": "$4.50",
    "priceNum": 4.5,
    "sku": "",
    "barcodes": [
      "",
      "504319"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Supreme nurturer stone providing grounding stability, endurance, and comfort during transitional times. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504319/edit",
    "img": "https://images.momence.com/h/200431/product-image/15d76db0-6312-4b6c-abf6-ba6d7b4c1c21.png"
  },
  {
    "id": 504320,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Green Tourmaline in Quartz",
    "fullTitle": "The Gneiss Guy - Green Tourmaline in Quartz",
    "price": "$270.00",
    "priceNum": 270,
    "sku": "",
    "barcodes": [
      "",
      "504320"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Master healer crystal that amplifies intention, cleanses the energetic field, and directs focused vitality. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504320/edit",
    "img": "https://images.momence.com/h/200431/product-image/647e6928-f5a0-43e4-a9fa-97cf5fcf6863.png"
  },
  {
    "id": 504321,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Halite - \"Salt\"",
    "fullTitle": "The Gneiss Guy - Halite - \"Salt\"",
    "price": "$350.00",
    "priceNum": 350,
    "sku": "",
    "barcodes": [
      "",
      "504321"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Authentic natural earth mineral specimen radiating natural grounding frequency and holistic energetic balance. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504321/edit",
    "img": "https://images.momence.com/h/200431/product-image/3e1245e7-7288-4449-888f-5b9fbcb0c023.png"
  },
  {
    "id": 504325,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Heulandite, Apophyllite, Calcito",
    "fullTitle": "The Gneiss Guy - Heulandite, Apophyllite, Calcito",
    "price": "$225.00",
    "priceNum": 225,
    "sku": "",
    "barcodes": [
      "",
      "504325"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. High-vibrational light bringer that clears mental fog, elevates meditation, and connects with higher consciousness. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504325/edit",
    "img": "https://images.momence.com/h/200431/product-image/4c604e05-3546-41ba-85b4-113da0557d9f.png"
  },
  {
    "id": 504326,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Kambaba Jasper",
    "fullTitle": "The Gneiss Guy - Kambaba Jasper",
    "price": "$18.00",
    "priceNum": 18,
    "sku": "",
    "barcodes": [
      "",
      "504326"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Supreme nurturer stone providing grounding stability, endurance, and comfort during transitional times. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504326/edit",
    "img": "https://images.momence.com/h/200431/product-image/85fd9f6d-47cf-4551-aa1e-7e7e2570ca6d.png"
  },
  {
    "id": 504333,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Kyanite Large",
    "fullTitle": "The Gneiss Guy - Kyanite Large",
    "price": "$12.00",
    "priceNum": 12,
    "sku": "",
    "barcodes": [
      "",
      "504333"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Authentic natural earth mineral specimen radiating natural grounding frequency and holistic energetic balance. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504333/edit",
    "img": "https://images.momence.com/h/200431/product-image/87c3b4ff-dd05-4d9b-be5d-b0cc7ee0eb85.png"
  },
  {
    "id": 504329,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Labradorite",
    "fullTitle": "The Gneiss Guy - Labradorite",
    "price": "$495.00",
    "priceNum": 495,
    "sku": "",
    "barcodes": [
      "",
      "504329"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Authentic natural earth mineral specimen radiating natural grounding frequency and holistic energetic balance. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504329/edit",
    "img": "https://images.momence.com/h/200431/product-image/2c6c8f54-4b54-45ed-af15-9729471c8301.png"
  },
  {
    "id": 504330,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Labradorite Ball",
    "fullTitle": "The Gneiss Guy - Labradorite Ball",
    "price": "$150.00",
    "priceNum": 150,
    "sku": "",
    "barcodes": [
      "",
      "504330"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Authentic natural earth mineral specimen radiating natural grounding frequency and holistic energetic balance. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504330/edit",
    "img": "https://images.momence.com/h/200431/product-image/a816f9ad-8f36-43a0-8ee3-e32bd2abb633.png"
  },
  {
    "id": 504331,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Labradorite Ball",
    "fullTitle": "The Gneiss Guy - Labradorite Ball",
    "price": "$95.00",
    "priceNum": 95,
    "sku": "",
    "barcodes": [
      "",
      "504331"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Authentic natural earth mineral specimen radiating natural grounding frequency and holistic energetic balance. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504331/edit",
    "img": "https://images.momence.com/h/200431/product-image/27070738-03ae-4f93-ba5d-777cc5d37f76.png"
  },
  {
    "id": 504332,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Labradorite Large",
    "fullTitle": "The Gneiss Guy - Labradorite Large",
    "price": "$850.00",
    "priceNum": 850,
    "sku": "",
    "barcodes": [
      "",
      "504332"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Authentic natural earth mineral specimen radiating natural grounding frequency and holistic energetic balance. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504332/edit",
    "img": "https://images.momence.com/h/200431/product-image/e4c33dcc-ac69-4207-8838-2f3cf6284cb5.png"
  },
  {
    "id": 504336,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Phantom Quartz",
    "fullTitle": "The Gneiss Guy - Phantom Quartz",
    "price": "$40.00",
    "priceNum": 40,
    "sku": "",
    "barcodes": [
      "",
      "504336"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Master healer crystal that amplifies intention, cleanses the energetic field, and directs focused vitality. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504336/edit",
    "img": "https://images.momence.com/h/200431/product-image/8e1edb68-5071-4759-8f2f-37f9ee3d4292.png"
  },
  {
    "id": 504271,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Pink Amethyst",
    "fullTitle": "The Gneiss Guy - Pink Amethyst",
    "price": "$75.00",
    "priceNum": 75,
    "sku": "",
    "barcodes": [
      "",
      "504271"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Renowned for deep spiritual calm, soothing stress relief, intuitive clarity, and Crown Chakra harmony. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504271/edit",
    "img": "https://images.momence.com/h/200431/product-image/8431ad22-977c-45b0-bb05-7a5b1b06aba5.png"
  },
  {
    "id": 504337,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Pink Tourmaline ((Small))",
    "fullTitle": "The Gneiss Guy - Pink Tourmaline ((Small))",
    "price": "$40.00",
    "priceNum": 40,
    "sku": "",
    "barcodes": [
      "",
      "504337"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Premier energetic shield for psychic protection, absorbing negative electromagnetic frequencies and grounding the Root Chakra. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504337/edit",
    "img": "https://images.momence.com/h/200431/product-image/eb8d6e74-8668-4a87-9780-6255986c1161.png"
  },
  {
    "id": 505558,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Pink tourmaline Large",
    "fullTitle": "The Gneiss Guy - Pink tourmaline Large",
    "price": "$22.00",
    "priceNum": 22,
    "sku": "",
    "barcodes": [
      "",
      "505558"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Premier energetic shield for psychic protection, absorbing negative electromagnetic frequencies and grounding the Root Chakra. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/505558/edit",
    "img": "https://images.momence.com/h/200431/product-image/d605ce79-7aa9-4a29-8dcd-50fe1c2fc6a6.png"
  },
  {
    "id": 505555,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Pink tourmaline Large",
    "fullTitle": "The Gneiss Guy - Pink tourmaline Large",
    "price": "$18.00",
    "priceNum": 18,
    "sku": "",
    "barcodes": [
      "",
      "505555"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Premier energetic shield for psychic protection, absorbing negative electromagnetic frequencies and grounding the Root Chakra. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/505555/edit",
    "img": "https://images.momence.com/h/200431/product-image/b7036ea8-6874-4b19-a505-da23eefe552f.png"
  },
  {
    "id": 504335,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Quartz - large",
    "fullTitle": "The Gneiss Guy - Quartz - large",
    "price": "$870.00",
    "priceNum": 870,
    "sku": "",
    "barcodes": [
      "",
      "504335"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Master healer crystal that amplifies intention, cleanses the energetic field, and directs focused vitality. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504335/edit",
    "img": "https://images.momence.com/h/200431/product-image/8f54f4a7-811b-4d02-b197-5eb640d2e17e.png"
  },
  {
    "id": 504338,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Quartz AA Quality Large",
    "fullTitle": "The Gneiss Guy - Quartz AA Quality Large",
    "price": "$320.00",
    "priceNum": 320,
    "sku": "",
    "barcodes": [
      "",
      "504338"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Master healer crystal that amplifies intention, cleanses the energetic field, and directs focused vitality. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504338/edit",
    "img": "https://images.momence.com/h/200431/product-image/92993252-5ce3-48f0-ba2e-23f9f3232011.png"
  },
  {
    "id": 504341,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Rhodonite",
    "fullTitle": "The Gneiss Guy - Rhodonite",
    "price": "$18.00",
    "priceNum": 18,
    "sku": "",
    "barcodes": [
      "",
      "504341"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Authentic natural earth mineral specimen radiating natural grounding frequency and holistic energetic balance. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504341/edit",
    "img": "https://images.momence.com/h/200431/product-image/00a37ffc-82c7-4fdb-9a7f-e05432b59297.png"
  },
  {
    "id": 504373,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Rose Quartz (((Small)) chunks)",
    "fullTitle": "The Gneiss Guy - Rose Quartz (((Small)) chunks)",
    "price": "$15.00",
    "priceNum": 15,
    "sku": "",
    "barcodes": [
      "",
      "504373"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Master healer crystal that amplifies intention, cleanses the energetic field, and directs focused vitality. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504373/edit",
    "img": "https://images.momence.com/h/200431/product-image/0334dbaa-5435-438e-9d1e-570484c65bd9.png"
  },
  {
    "id": 504374,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Rose Quartz ((Extra (Small)) chunks)",
    "fullTitle": "The Gneiss Guy - Rose Quartz ((Extra (Small)) chunks)",
    "price": "$8.00",
    "priceNum": 8,
    "sku": "",
    "barcodes": [
      "",
      "504374"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Master healer crystal that amplifies intention, cleanses the energetic field, and directs focused vitality. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504374/edit",
    "img": "https://images.momence.com/h/200431/product-image/daf9c32f-f2a0-4694-a6ae-2f64e721f10b.png"
  },
  {
    "id": 504372,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Rose Quartz (Biggest chunk on tray)",
    "fullTitle": "The Gneiss Guy - Rose Quartz (Biggest chunk on tray)",
    "price": "$25.00",
    "priceNum": 25,
    "sku": "",
    "barcodes": [
      "",
      "504372"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Master healer crystal that amplifies intention, cleanses the energetic field, and directs focused vitality. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504372/edit",
    "img": "https://images.momence.com/h/200431/product-image/2eebd3a6-7366-4f85-b228-92f6afc65d08.png"
  },
  {
    "id": 504371,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Rose Quartz (Biggest chunk on tray)",
    "fullTitle": "The Gneiss Guy - Rose Quartz (Biggest chunk on tray)",
    "price": "$35.00",
    "priceNum": 35,
    "sku": "",
    "barcodes": [
      "",
      "504371"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Master healer crystal that amplifies intention, cleanses the energetic field, and directs focused vitality. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504371/edit",
    "img": "https://images.momence.com/h/200431/product-image/07738fef-06d3-4316-afa5-e46e60baa009.png"
  },
  {
    "id": 504375,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Rose Quartz flat",
    "fullTitle": "The Gneiss Guy - Rose Quartz flat",
    "price": "$65.00",
    "priceNum": 65,
    "sku": "",
    "barcodes": [
      "",
      "504375"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Master healer crystal that amplifies intention, cleanses the energetic field, and directs focused vitality. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504375/edit",
    "img": "https://images.momence.com/h/200431/product-image/52fb7da4-e147-4283-8caa-9f4be19af063.png"
  },
  {
    "id": 504376,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Rose Quartz polished stone (lg)",
    "fullTitle": "The Gneiss Guy - Rose Quartz polished stone (lg)",
    "price": "$25.00",
    "priceNum": 25,
    "sku": "",
    "barcodes": [
      "",
      "504376"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Master healer crystal that amplifies intention, cleanses the energetic field, and directs focused vitality. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504376/edit",
    "img": "https://images.momence.com/h/200431/product-image/3defac09-1a99-48b1-95fc-a1c1ec2fdb22.png"
  },
  {
    "id": 504381,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Rose Quartz tower",
    "fullTitle": "The Gneiss Guy - Rose Quartz tower",
    "price": "$18.00",
    "priceNum": 18,
    "sku": "",
    "barcodes": [
      "",
      "504381"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Master healer crystal that amplifies intention, cleanses the energetic field, and directs focused vitality. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504381/edit",
    "img": "https://images.momence.com/h/200431/product-image/28f0136c-e31f-4f42-8caf-12d4e4d43f9d.png"
  },
  {
    "id": 504382,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Sandstone ((Medium))",
    "fullTitle": "The Gneiss Guy - Sandstone ((Medium))",
    "price": "$45.00",
    "priceNum": 45,
    "sku": "",
    "barcodes": [
      "",
      "504382"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Authentic natural earth mineral specimen radiating natural grounding frequency and holistic energetic balance. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504382/edit",
    "img": "https://images.momence.com/h/200431/product-image/a35301bf-8586-47a2-9a92-d9c56b99933b.png"
  },
  {
    "id": 505576,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Sandstone ((Small))",
    "fullTitle": "The Gneiss Guy - Sandstone ((Small))",
    "price": "$40.00",
    "priceNum": 40,
    "sku": "",
    "barcodes": [
      "",
      "505576"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Authentic natural earth mineral specimen radiating natural grounding frequency and holistic energetic balance. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/505576/edit",
    "img": "https://images.momence.com/h/200431/product-image/3bb80d46-80cb-4b6d-a642-c451e2fe904a.png"
  },
  {
    "id": 504383,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Sandstone Large",
    "fullTitle": "The Gneiss Guy - Sandstone Large",
    "price": "$150.00",
    "priceNum": 150,
    "sku": "",
    "barcodes": [
      "",
      "504383"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Authentic natural earth mineral specimen radiating natural grounding frequency and holistic energetic balance. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504383/edit",
    "img": "https://images.momence.com/h/200431/product-image/5d3fad8c-08c1-49af-9cda-56d4837d73ba.png"
  },
  {
    "id": 504384,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "Sodalite",
    "fullTitle": "The Gneiss Guy - Sodalite",
    "price": "$6.00",
    "priceNum": 6,
    "sku": "",
    "barcodes": [
      "",
      "504384"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Authentic natural earth mineral specimen radiating natural grounding frequency and holistic energetic balance. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504384/edit",
    "img": "https://images.momence.com/h/200431/product-image/fe608e5d-3ef0-462f-954d-3742880c6eea.png"
  },
  {
    "id": 504317,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "green Fluorite large",
    "fullTitle": "The Gneiss Guy - green Fluorite large",
    "price": "$450.00",
    "priceNum": 450,
    "sku": "",
    "barcodes": [
      "",
      "504317"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Authentic natural earth mineral specimen radiating natural grounding frequency and holistic energetic balance. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504317/edit",
    "img": "https://images.momence.com/h/200431/product-image/a14f085f-266a-43d5-842e-3b473e9fb1bf.png"
  },
  {
    "id": 504340,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Gneiss Guy",
    "name": "rainbow Fluorite Large",
    "fullTitle": "The Gneiss Guy - rainbow Fluorite Large",
    "price": "$750.00",
    "priceNum": 750,
    "sku": "",
    "barcodes": [
      "",
      "504340"
    ],
    "pitch": "Ethically sourced natural mineral specimen from Ontario's renowned gemologist mineralogists. Authentic natural earth mineral specimen radiating natural grounding frequency and holistic energetic balance. Perfect for sacred studio altars, meditation rituals, or mindful home decor.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504340/edit",
    "img": "https://images.momence.com/h/200431/product-image/af72912a-d1cb-47bc-9db7-25509bf609fb.png"
  },
  {
    "id": 504186,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Practice",
    "name": "Crystal Agate",
    "fullTitle": "The Practice - Crystal Agate",
    "price": "$8.00",
    "priceNum": 8,
    "sku": "",
    "barcodes": [
      "",
      "504186"
    ],
    "pitch": "Botswana\n\nAgate is believed to promote balance, emotional stability, and inner strength while featuring beautiful natural bands.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/504186/edit",
    "img": "https://images.momence.com/h/200431/product-image/59817a81-88a1-42a7-9889-6590ee774b74.png"
  },
  {
    "id": 505569,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Practice",
    "name": "Crystal Celenite Log",
    "fullTitle": "The Practice - Crystal Celenite Log",
    "price": "$65.00",
    "priceNum": 65,
    "sku": "",
    "barcodes": [
      "",
      "505569"
    ],
    "pitch": "Curated lifestyle and wellness essential selected exclusively for The Practice community.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/505569/edit",
    "img": "https://images.momence.com/h/200431/product-image/b3a3bf09-2e26-4445-922f-8225c4ab0971.png"
  },
  {
    "id": 505572,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Practice",
    "name": "Crystal Selenite Bowl (shaped)",
    "fullTitle": "The Practice - Crystal Selenite Bowl (shaped)",
    "price": "$14.50",
    "priceNum": 14.5,
    "sku": "",
    "barcodes": [
      "",
      "505572"
    ],
    "pitch": "Curated lifestyle and wellness essential selected exclusively for The Practice community.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/505572/edit",
    "img": "https://images.momence.com/h/200431/product-image/e64fa39b-77e9-4d7d-9a78-afe093da7bb0.png"
  },
  {
    "id": 505560,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Practice",
    "name": "Crystal Tigers Iron",
    "fullTitle": "The Practice - Crystal Tigers Iron",
    "price": "$6.00",
    "priceNum": 6,
    "sku": "",
    "barcodes": [
      "",
      "505560"
    ],
    "pitch": "Curated lifestyle and wellness essential selected exclusively for The Practice community.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/505560/edit",
    "img": "https://images.momence.com/h/200431/product-image/fdb03591-d4b4-4a9f-bb85-53155cb46448.png"
  },
  {
    "id": 505562,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Practice",
    "name": "Crystal Tigers eye",
    "fullTitle": "The Practice - Crystal Tigers eye",
    "price": "$6.00",
    "priceNum": 6,
    "sku": "",
    "barcodes": [
      "",
      "505562"
    ],
    "pitch": "Curated lifestyle and wellness essential selected exclusively for The Practice community.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/505562/edit",
    "img": "https://images.momence.com/h/200431/product-image/a0cbffa1-0372-4710-9d16-668e65f9fbb8.png"
  },
  {
    "id": 498836,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Practice",
    "name": "Crystal Witch’s finger",
    "fullTitle": "The Practice - Crystal Witch’s finger",
    "price": "$62.50",
    "priceNum": 62.5,
    "sku": "",
    "barcodes": [
      "",
      "498836"
    ],
    "pitch": "Curated lifestyle and wellness essential selected exclusively for The Practice community.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/498836/edit",
    "img": "https://images.momence.com/h/200431/product-image/f675bda5-c352-4b1c-a3a1-fcd8106a5a83.png"
  },
  {
    "id": 527616,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Practice",
    "name": "Crystal clear quartz mini",
    "fullTitle": "The Practice - Crystal clear quartz mini",
    "price": "$7.00",
    "priceNum": 7,
    "sku": "",
    "barcodes": [
      "",
      "527616"
    ],
    "pitch": "Curated lifestyle and wellness essential selected exclusively for The Practice community.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/527616/edit",
    "img": ""
  },
  {
    "id": 505566,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Practice",
    "name": "Crystal silver jasper",
    "fullTitle": "The Practice - Crystal silver jasper",
    "price": "$6.00",
    "priceNum": 6,
    "sku": "",
    "barcodes": [
      "",
      "505566"
    ],
    "pitch": "Curated lifestyle and wellness essential selected exclusively for The Practice community.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/505566/edit",
    "img": "https://images.momence.com/h/200431/product-image/35319fc7-325b-4845-a0de-2dc57c67a218.png"
  },
  {
    "id": 505574,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Practice",
    "name": "Selenite Bowl (Oval)",
    "fullTitle": "The Practice - Selenite Bowl (Oval)",
    "price": "$14.50",
    "priceNum": 14.5,
    "sku": "",
    "barcodes": [
      "",
      "505574"
    ],
    "pitch": "Curated lifestyle and wellness essential selected exclusively for The Practice community.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/505574/edit",
    "img": "https://images.momence.com/h/200431/product-image/a7e2ac52-a813-4aaf-9746-1a223a043de0.png"
  },
  {
    "id": 505564,
    "department": "Sacred Minerals, Crystals & Fossils",
    "brand": "The Practice",
    "name": "crystal smokey quartz AA quality",
    "fullTitle": "The Practice - crystal smokey quartz AA quality",
    "price": "$45.00",
    "priceNum": 45,
    "sku": "",
    "barcodes": [
      "",
      "505564"
    ],
    "pitch": "Curated lifestyle and wellness essential selected exclusively for The Practice community.",
    "momenceUrl": "https://momence.com/dashboard/200431/products/505564/edit",
    "img": "https://images.momence.com/h/200431/product-image/a349e5bf-187c-48c4-b345-3a017807b758.png"
  }
];
