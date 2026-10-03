# The Practice — TechOps Daily Execution Blueprint & Action Plan
**Date:** Tuesday, September 29, 2026  
**Location:** 360 Davenport Rd, Yorkville, Toronto, ON M4V 1K6  
**Lead:** Jackson McMurdo (TechOps & Floor Lead)  
**Stakeholders:** Kim (Accounting / Operations), Sarah (Executive / Studio Leadership), Noah (Cafe & Floor Lead)

---

## 📋 Daily Operational Execution Checklist

| # | Domain | Priority | Task Summary | Primary System / Tool | Status |
|:---:|:---|:---:|:---|:---|:---:|
| **1** | **Apple Business** | **P0** | Complete legal entity verification & domain federation | Apple Business Manager | `Ready for Review` |
| **2** | **Apple Configurator** | **P1** | Configure, supervise & enroll the 4 core floor iPads | Apple Configurator 2 / MDM | `Configurations Ready` |
| **3** | **Scheduling APIs** | **P1** | Validate Momence & Jane App feeds + PHIPA data safeguards | `sync_daily_schedule.py` | `Verified & Live` |
| **4** | **Password Management** | **P1** | Deploy role-based password vaults (Sarah, Noah, Staff) | 1Password / Bitwarden RBAC | `Architecture Spec'd` |
| **5** | **Studio AV Integration** | **P2** | Configure VSSL multi-zone audio & Lutron lighting scenes | VSSL App / HomeKit / iPad | `Profiles Defined` |
| **6** | **Supplies** | **P2** | Order yoga mat cleaner & basement floor cleaning agents | Amazon.ca Business (Amex) | `Reorder Specs Ready` |
| **7** | **POS & Momence Sync** | **P2** | Ensure seamless retail & cafe checkout links to Momence | `ThePracticeRetailTool` | `Synced & Tested` |
| **8** | **Catalog Management** | **P3** | Audit retail catalog prices & verify 8 Cafe baked goods | Momence Catalog (Host 200431) | `Verified (731 Items)` |
| **9** | **Compliance Research** | **P1** | Research Ontario PHIPA & PIPEDA rules for custom app | Legal / Privacy Architecture | `Complete Assessment` |

---

## 1. 🍎 Apple Business Manager: Business Verification & Setup

### Action Steps:
1. **D-U-N-S Number & Entity Confirmation**:
   - Confirm legal registration name: **The Practice Toronto Inc.** (or operating entity for 360 Davenport Rd).
   - Ensure D-U-N-S record at Dun & Bradstreet matches the physical address: `360 Davenport Rd, Toronto, ON M4V 1K6`.
2. **Authority Verification Callback**:
   - Provide Apple Verification with the primary contact: Sarah (Executive) or Kim (Operations).
   - Apple will place a phone call or send an email verification to validate Jackson McMurdo as the designated Apple Business Manager Administrator.
3. **Domain Verification**:
   - In Apple Business Manager, navigate to **Settings > Accounts > Domains**.
   - Add domains: `thepracticetoronto.com` and `thepractice.ca`.
   - Add the generated DNS TXT record (`apple-domain-verification=...`) into Google Workspace / DNS host records.
4. **Managed Apple IDs & Google Workspace Federation**:
   - Enable Google Workspace SAML/SCIM sync so staff sign into iPads and services using their `@thepracticetoronto.com` credentials.
5. **MDM Server Pairing**:
   - Link ABM to the studio MDM solution (Jamf Now / Mosyle / SimpleMDM) using the server token for zero-touch configuration.

---

## 2. 📱 Apple Configurator: 4-iPad Fleet Deployment

### Hardware Registry Reference (from `iPad_Fleet_Hardware_List.md`):

| # | Unit | Serial Number | Current Name | Proposed Standard Name | Target Location | Assigned Role & Kiosk App |
|:---:|:---|:---:|:---|:---|:---|:---|
| **1** | Retail iPad | `MMVQDCG72X` | Retail iPad | **Retail iPad** | Retail Counter | The Practice Retail Web App + Momence Moments Web POS |
| **2** | Yoga Studio iPad | `J4HQQKGQJP` | iPad | **Yoga Studio iPad** | Studio A / B | Daily Schedule Web App + VSSL Audio + Lutron Lighting |
| **3** | Event Space iPad | `D374YLW542` | iPad 1 | **Event Space iPad** | Event Space | Daily Schedule + Workshop Check-in + Spatial Sound |
| **4** | Cafe iPad | `GYX50DPXWN` | iPad 2 | **Cafe iPad** | Cafe Register | Cafe Quick-Sale POS + Daily Timetable Display |

### Configurator 2 Execution Checklist:
1. **Connect via USB-C** to Mac running Apple Configurator 2.
2. **Supervise Devices**: Mark as Supervised to allow autonomous app lock and remote profile management.
3. **Apply Hostname Rename Payload**:
   - Rename `iPad` ➔ `Yoga Studio iPad`
   - Rename `iPad 1` ➔ `Event Space iPad`
   - Rename `iPad 2` ➔ `Cafe iPad`
   - Retain `Retail iPad`
4. **Deploy Asset Tag & Lock Screen Footnote**:
   - Apply `fleet_lockscreen_footnote_payload.plist`:
     * Text: *"Property of The Practice • 360 Davenport Rd, Yorkville • If found, contact ops@thepracticetoronto.com"*
5. **Install Web Clips & Kiosk Shortcuts**:
   - Retail iPad: Web Clip for Retail Identifier (`/ThePracticeRetailTool/index.html`) & Momence Register.
   - Studio & Event iPads: Web Clip for Daily Schedule (`/daily_schedule.html`).
   - Cafe iPad: Web Clip for Momence Cafe Quick-Sale (`https://momence.com/dashboard/200431/point-of-sale?customer=Jackson%40ThePracticetoronto.com`).
6. **Guided Access Setup**:
   - Set uniform 6-digit studio master passcode for Guided Access / Single App Mode.

---

## 3. 🔄 Scheduling App APIs: Jane App & Momence Integration

### Current Integration Architecture (`sync_daily_schedule.py`):
The Practice operational dashboard ingests three distinct streams into a unified chronological schedule:
1. **Momence API (Host ID `200431`)**: Group yoga classes, heated flow sessions, sound baths, and private vibration bed appointments.
2. **Jane App (Clinical Suites 1–3)**: Private iCal webcal subscription feed (`JANE_ICAL_FEED_URL`) covering psychiatry, somatic psychotherapy, and acupuncture.
3. **Homebase API**: Front desk, barista, and studio concierge shifts.

### Data Use & Compliance Safeguards:
- **No Personal Health Information (PHI) Exposure**:
  * In `sync_daily_schedule.py`, Jane App appointments are scrubbed to display **only client initials** (e.g., `Client S.T.`, `Client H.B.`).
  * Medical diagnoses, patient chart notes, treatment history, and OHIP billing numbers are **strictly excluded**.
  * The dashboard only displays room occupancy and countdown timers (e.g., *"Clinical Suite 1: Dr. Aris Thorne — 60 MIN"*).
- **Internal Dashboard Privacy**:
  * The schedule app must remain hosted locally or behind authenticated studio access.
  * No external web crawlers, search engines, or public links allowed without staff authentication.
- **Automated Morning Refresh**:
  * Configured via macOS LaunchAgent (`~/Library/LaunchAgents/com.thepractice.dailyschedule.plist`) to execute daily at **06:00 AM** (or upon laptop wake) so opening staff arriving at 06:30 AM have fresh data.

---

## 4. 🔐 Password Management: Master Password Bank & RBAC Matrix

Implement a centralized password manager (1Password for Teams or Bitwarden Organization) with three isolated vaults:

### 1. `[Executive & Admin Vault]` — Sarah (Full Admin Access)
- **Permissions**: Full Read/Write/Manage
- **Credentials Stored**:
  * Banking, Stripe payouts, and merchant processing.
  * Apple Business Manager Admin credentials.
  * Google Workspace Super Admin console.
  * Momence Host Owner Account (`200431`).
  * Jane App Clinic Owner Account.
  * CRA / My Business Account tax portal.
  * AWS / GCP / Cloud infrastructure and API master keys.

### 2. `[Cafe & Supply Operations Vault]` — Noah (Cafe Lead)
- **Permissions**: Read/Write for Purchasing & Cafe Systems; No access to clinical or banking vaults.
- **Credentials Stored**:
  * Costco Business Delivery / Membership login.
  * Amazon Business (purchasing sub-account).
  * Food & beverage wholesale vendor portals (dairy/plant milks, coffee beans, ceremonial cacao).
  * Momence Cafe POS register account.
  * Local pastry and baked goods ordering portals.

### 3. `[Studio Floor & Concierge Vault]` — Front Desk & Instructors
- **Permissions**: Read-only for operational tools.
- **Credentials Stored**:
  * Momence Class Check-In staff login.
  * Spotify for Business / Apple Music studio account.
  * VSSL Audio App floor access code.
  * Studio Staff Wi-Fi WPA3 password.
  * Guided Access uniform 6-digit iPad passcodes.

---

## 5. 🔊 Studio AV Integration: Sound & Lighting Presets

### Audio System (VSSL Multi-Zone Controller):
Calibrate volume caps and zone assignments across the 4 key studio zones:

| Zone | Area | Default Max Volume | Ambience Profile | Connection Type |
|:---:|:---|:---:|:---|:---|
| **Zone 1** | Studio A (Sun / Heated) | **80%** | Flow, Power Yoga, Sound Bath (High dynamic range) | AirPlay 2 / VSSL Native |
| **Zone 2** | Studio B (Moon / Sanctuary) | **55%** | Restorative, Yin, Meditation, Somatics | AirPlay 2 / VSSL Native |
| **Zone 3** | Cafe & Reception Lounge | **45%** | Mindful Acoustic, Organic Downtempo, Lo-Fi Chill | VSSL Continuous Stream |
| **Zone 4** | Corridors & Quiet Nook | **35%** | Subtle Ambient Drone, Water/Nature soundscapes | Background Loop |

### Lighting System Presets (Lutron Caséta / RA3 or Philips Hue):
Configure 4 uniform scenes accessible directly from the Yoga Studio and Event Space iPads:

1. **`Morning Flow / Daylight`**: 4000K Neutral White @ 65% (Energizing, crisp).
2. **`Sunset Flow / Terracotta`**: 2700K Warm Amber @ 45% (Soft, calming, warming).
3. **`Sound Bath / Zen Sanctuary`**: 2000K Deep Candlelight @ 10–15% (Low sensory immersion).
4. **`Studio Turnover & Clean`**: 5000K Clean White @ 100% (High visibility for floor resets).

---

## 6. 📦 Supplies: Amazon Supplies Reorder Specifications

Based on historical studio orders (`Amazon Receipts` order `702-1817397-6084232` and related records):

### 1. Studio Yoga Mat Cleaner:
- **Recommended Option A (Studio Standard)**: **Begley's 100% Natural Yoga Mat Cleaner and Deodorizer Spray (8 oz or bulk refill)**. Plant-based, gentle on polyurethane and natural rubber mats, zero slick residue.
- **Recommended Option B (Aromatherapy Blend)**: **MOX Yoga Mat Cleaner Spray (Rosemary & Lemon Essential Oils)**. Natural sweat and odor protection with fresh botanical scent.
- **Accessories**: 24-pack of grey/black microfiber cleaning cloths (lint-free).
- **Target Quantity**: 4x spray bottles for floor stations + 1-gallon bulk refill container.

### 2. Basement & Studio Floor Mopping Agent:
- **Primary Mopping System**: **Swiffer Sweeper Wet Mopping Heavy Duty Cloth Refills** (Multi-surface floor cleaning pads for daily quick mop between classes).
- **Deep Clean Mopping Solution**: **Bona Commercial Grade Hardwood Cleaner Concentrate** (for upstairs studio hardwood) + **Lysol Professional / Pine-Sol Multi-Surface Cleaner Concentrate** (for basement concrete/tile cleaning).
- **Target Quantity**: 2x cases of Swiffer Heavy Duty Wet Pads + 1x 1-Gallon commercial floor concentrate.

### Accounting & Tax Compliance Protocol:
- Charge to Amex (`...3004` / `...1008`).
- Immediately download CRA-compliant **Tax Invoice** (showing vendor GST/HST registration number, e.g. `85730 5932 RT0001`).
- Save PDF to `/Users/jacksonmcmurdo/Desktop/The Practice/Amazon Receipts/` and log in `00_Master_Amazon_Receipts_Schedule.csv` for Kim.

---

## 7. 💳 Point of Sale & Momence: Seamless Retail & Cafe Sync

### Verified Checkout Schemes in `ThePracticeRetailTool`:
1. **Quick-Sale URL Structure**:
   ```url
   https://momence.com/dashboard/200431/point-of-sale?customer=Jackson%40ThePracticetoronto.com&name=Jackson+McMurdo
   ```
2. **Direct Product Pre-loading**:
   - The retail app dynamically generates direct Momence cart links appending product IDs:
   ```url
   https://momence.com/dashboard/200431/products/{product_id}/edit
   ```
3. **App Launcher Fallbacks (`app.js`)**:
   - Tapping checkout on the iPad opens the **Momence Moments Web App** directly via Safari deep linking.
   - If Moments is unavailable, seamless fallback routes to the responsive web dashboard without losing cart context.
4. **Barcode Scanner Operation**:
   - Bluetooth handheld barcode scanner paired in HID keyboard mode.
   - Instant search triggers on ISBN/EAN/SKU barcode scan against the local 731-product catalog with zero server latency.

---

## 8. 🏷️ Catalog Management: Product & Price Verification

### Verified Cafe Baked Goods Menu (Momence Host ID: `200431`):

| Momence ID | Product Name | Current Verified Price | Tax Status | Description & Allergens |
|:---:|:---|:---:|:---:|:---|
| **562443** | **Cafe - Classic Chocolate Cookie** | **$4.50** | HST 13% | Dark chocolate chunks, butter, eggs, flour, rich fudgy center. |
| **562444** | **Cafe - Fudgy Chocolate Brownie** | **$5.00** | HST 13% | Dense premium cocoa, butter, crackly top. |
| **562440** | **Cafe - Gluten-Free Chocolate Cookie** | **$4.50** | HST 13% | 1-to-1 GF flour blend, dark chocolate chunks. |
| **562450** | **Cafe - Quinoa Breakfast Cookie** | **$5.50** | HST 13% | Quinoa flakes, almond flour, mixed seeds, oats, date paste, tahini, dark chocolate. |
| **567988** | **Cafe - Oat Breakfast Cookie** | **$5.50** | HST 13% | GF oats, almond flour, hemp, chia, pumpkin, sunflower seeds, almonds, flax seeds, dark chocolate, date paste, tahini. |
| **562449** | **Cafe - Lemon Poppyseed Biscotti** | **$3.50** | HST 13% | Crisp citrus biscotti, poppyseeds, lemon glaze. |
| **562448** | **Cafe - Pistachio & Cranberry Biscotti** | **$3.50** | HST 13% | Roasted pistachios, sweet cranberries, white chocolate drizzle. |
| **562446** | **Cafe - Sweet & Salty Cookie** | **$4.50** | HST 13% | Pretzels, chocolate chips, toffee bits, caramel sauce. |

### Retail Product Catalog:
- **Total Catalog Products**: 731 items active in Momence.
- **12 Key Retail Brands** tracked in `staff_master_catalog.csv`:
  * *Cedar & Myrrh* (Incense, oils, smudging)
  * *Culti Milano* (Luxury Italian diffusers & room sprays)
  * *Lola Blankets* (Weighted & plush blankets)
  * *Thought Catalog* (Mindfulness books, journals)
  * *Ariana Ost* (Crystal grids, wellness decor)
  * *Gneiss Guy* (Natural raw crystals & minerals)
  * *House of Moda* (Fine jewelry & accessories)
  * *Pig & Hen* (Artisan rope bracelets)
  * *Preston Grooming* (Men's skincare & grooming)
  * *Fernand Petal* (Botanical body oils & rollers)
  * *Field Kit* (Artisanal candles & scents)
  * *Homebound* (Yorkville lifestyle & home goods)

---

## 9. ⚖️ Compliance Research: Ontario PHIPA & Privacy Framework

### Legislative Overview:
1. **PHIPA (Personal Health Information Protection Act, 2004 — Ontario)**:
   - Governs the collection, use, and disclosure of Personal Health Information (PHI) by **Health Information Custodians (HICs)**.
   - At The Practice, clinical practitioners (Dr. Aris Thorne, Dr. Maya Lin, Julian Vance) act as HICs.
2. **PIPEDA (Personal Information Protection and Electronic Documents Act)**:
   - Federal privacy law governing commercial activities (e.g., Momence yoga bookings, cafe purchases, retail sales).

### Key Compliance Requirements for Custom Practice Software:

| Requirement | Rule & Standard | Implementation at The Practice |
|:---|:---|:---|
| **Custodial Boundary ("The Air Gap")** | HIC clinical data must not intermingle with commercial retail data. | Jane App maintains all clinical records, therapy notes, and OHIP data. The custom schedule app connects via read-only calendar feed and stores zero clinical history. |
| **Principle of "Minimum Necessary"** (PHIPA § 30(1)) | Only collect or display the minimum info needed for the task. | Floor iPads display only: Room Number, Practitioner Name, Appointment Duration, and Initial (e.g. `Client S.T.`). Diagnoses and clinical notes are never fetched or displayed. |
| **Information Management Service Provider (IMSP)** (PHIPA § 10(4)) | Software providers managing PHI must provide technical safeguards. | Custom scripts use TLS 1.3 encryption, read-only API scopes, and run transiently without caching patient data on public endpoints. |
| **Data Residency** | Health records must be stored within Canada. | Jane App natively hosts in Canadian data centers (AWS Montreal `ca-central-1`). Internal backups and databases must reside within GCP `northamerica-northeast1` (Montreal) or `northamerica-northeast2` (Toronto). |
| **Role-Based Access Control (RBAC)** | Restrict access based on operational necessity. | Floor staff cannot access Jane App medical charts. Front desk only sees arrival cues to escort clients to clinical suites. |
| **Physical iPad Safeguards** | Prevent unauthorized viewing by walk-in clients. | Clinical suite iPads and schedule displays are positioned behind the concierge desk or locked in Guided Access to prevent unauthorized browsing. |

---

## 🏁 Summary of Today's Immediate Next Actions:
1. **09:15 AM**: Meet with Kim & Sarah to complete Apple Business callback verification & confirm 1Password vault distribution.
2. **10:00 AM**: Renaming & supervising the 4 iPads via Apple Configurator 2 using `fleet_lockscreen_footnote_payload.plist`.
3. **11:30 AM**: Finalize Jane App iCal feed connection in `integrations/.env` with verified de-identification initials.
4. **01:15 PM**: Lock iPads into Guided Access with the Momence POS, Retail Identifier, and Daily Schedule web clips.
5. **02:30 PM**: Submit Amazon order for Begley's yoga mat cleaner + Swiffer heavy duty pads on business Amex and save tax invoice.
6. **03:45 PM**: Review end-of-day multi-platform schedule sync with Sarah and Kim.
