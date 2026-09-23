# The Practice • Visual Retail Identifier & Staff Guidebook

A progressive web app (PWA) engineered specifically for **The Practice** studio iPads and staff mobile devices. Designed for barcodeless and artisan retail items (rough crystals, handcrafted jewelry, smudging bundles, ceramics, blind date books), this tool lets staff snap a live photo of any product in the retail space and instantly performs an on-device reverse visual search against all 731 products in The Practice's catalog.

---

## 🌟 Key Features

1. **Instant Visual Reverse Image Search (Barcodeless Identification)**:
   - Point the camera at any item, frame it in the gold viewfinder, and tap the large **SNAP PRODUCT** button (or upload a photo).
   - Powered by **MobileNet v2 Deep Neural Network** running entirely inside the iPad browser via TensorFlow.js (accelerated by WebGL and Apple Neural Engine).
   - Extracts a 1,280-dimensional visual feature embedding vector and calculates real-time cosine similarity across 678 authentic supplier photos in under 5 milliseconds with zero cloud latency.
   - Synthesizes harmonic audio chimes and haptic feedback on successful matches.

2. **Side-by-Side Visual Verification**:
   - Shows the staff member's live snapped photo right alongside the catalog reference photo with a visual match percentage (e.g. `94% MATCH`).
   - If products look similar (e.g. different crystal varieties or candle scents), an **Alternative Matches** carousel provides runner-up candidates so staff can tap to switch instantly.

3. **The Staff Selling Pitch HUD**:
   - High-resolution authentic product photography (no AI-generated imagery).
   - Brand name, standardized product title, and category badge.
   - Retail price (CAD) and SKU with 1-click clipboard copy.
   - Craftsmanship notes, materials, and talking points to help staff explain products to guests with confidence.
   - **Direct Momence Integration**: One-tap button opening `https://momence.com/dashboard/200431/products/{id}/edit` directly in Momence.

4. **Complete 731-Product Catalog & Instant Search**:
   - Search by product name, brand, SKU, or Momence ID.
   - 8 Filterable Studio Departments:
     - *Fine Jewelry & Modern Adornments* (171 items)
     - *Sacred Minerals, Crystals & Fossils* (72 items)
     - *Aromatherapy, Incense & Sacred Smudging* (61 items)
     - *Luxury Candles & Home Fragrance* (109 items)
     - *Mindful Living, Journals & Games* (31 items)
     - *Clean Apothecary, Bath & Grooming* (69 items)
     - *Home Decor, Barware & Artisan Textiles* (211 items)
     - *Cafe & Nourishment* (7 items)

5. **100% Offline Capability (PWA)**:
   - Service worker caches application shell, styles, scripts, catalog, and precomputed embeddings.
   - Fully operational on the retail floor even if studio Wi-Fi is intermittent.

---

## 📱 How to Install on Studio iPads (The ".app" Native Experience)

To install this on studio iPads so it runs fullscreen as a standalone app (without browser address bars):

1. On the iPad, open **Safari** and go to:  
   `https://itsmcmurdoj.github.io/ThePracticeRetailTool/`
2. Tap the **Share** button (the square with an arrow pointing upward) in Safari.
3. Scroll down and tap **Add to Home Screen**.
4. Tap **Add** in the top-right corner.
5. Tap the new **The Practice** app icon on your iPad home screen!  
   *It opens in fullscreen app mode with camera permissions ready to go.*

---

## 🛠 Tech Stack

- **Computer Vision**: TensorFlow.js + MobileNet v2 Feature Extractor (1280-dim normalized embeddings).
- **Frontend**: Vanilla JavaScript (ES6+), Semantic HTML5, Glassmorphic CSS with HSL gold & obsidian design tokens.
- **Audio/Haptics**: Web Audio API dual-tone oscillator synthesis + `navigator.vibrate`.
- **Data Engine**: Precomputed L2-normalized vector database (`product_embeddings.js`, 4.6 MB) + 731-item catalog (`products.js`).
- **Hosting & CI/CD**: GitHub Pages via automated GitHub Actions.
