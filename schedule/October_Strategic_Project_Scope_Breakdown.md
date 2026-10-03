# The Practice • October Strategic Project Scope Breakdown
**Document Version**: 2.0 &middot; **Executive Release**: October 3, 2026  
**Prepared For**: Sara Jackson (CEO), Kim Noble (COO), Lisa Kovacs (Marketing & Events)  
**Author**: Jackson McMurdo (Technology & Retail Operations Lead) &middot; `jackson@thepracticetoronto.com`  
**Location**: 360 Davenport Rd, Yorkville, Toronto ON  

---

## 1. Executive Summary & Operational Alignment

As The Practice enters a high-growth hiring phase across our retail, cafe, and studio operations, our primary focus for October 2026 is **bulletproofing daily studio systems** so onboarding new team members is seamless, secure, and error-proof. 

To ensure maximum operational stability, zero studio downtime, and thorough testing across our hardware and web infrastructure, this roadmap is structured around **dedicated engineering hours per deliverable** rather than arbitrary calendar deadlines. Because milestone delivery tracks directly with scheduled shift allocations, this document establishes a transparent operational framework:

1. **Sprint 1 (Confirmed Pre-Vacation Shifts &middot; 14.0 Total Hours)**:
   * **Tuesday, October 6 (9:00 AM – 5:00 PM &middot; 8.0 hrs)**
   * **Wednesday, October 7 (11:00 AM – 5:00 PM &middot; 6.0 hrs)**
   * *Objective*: 100% completion and physical floor verification for **1Password Centralization** (Sara's priority) and the **iPad Retail Floor Tool / Momence Catalog Sync** (bulletproofing newly hired retail staff).
2. **Production Soak & Vacation Blackout (October 10 – October 18 &middot; Zero Hours Assigned)**:
   * Scheduled vacation blackout period. 
   * The newly deployed retail tool and 1Password vaults will run live on the floor, allowing the team to use the systems in production and surface any real-world edge cases.
3. **Sprint 2 (Post-Vacation Deliverables &middot; Starting October 19 Onward)**:
   * Jackson is **100% available** with no other shifts or commitments currently scheduled for the remainder of October and throughout November.
   * Deliverables (Unified Schedule, Member Portal, 4-Part Video Series, AI SEO) are mapped against estimated engineering blocks, with delivery dates depending directly on scheduled weekly shift allocations.

---

## 2. Master Scope Breakdown Matrix

```
OCTOBER 2026 STRATEGIC INITIATIVES AT A GLANCE
├── SPRINT 1: Assigned Shift Work (Pre-Vacation) ➔ 14.0 Total Hours
│   ├── 1.1: 1Password Centralization & Shared 2FA/TOTP Migration (Sara & All Staff) ➔ 5.5 hrs
│   └── 2.1: iPad Retail Floor Tool & Momence 731-SKU Image/Data Sync (Retail Floor) ➔ 8.5 hrs
├── PRODUCTION SOAK PERIOD: Scheduled Vacation Blackout ➔ Oct 10 – Oct 18 (Zero Hours Assigned)
│   └── Production floor soak on the 4 studio iPads & 1Password vaults across daily studio operations
└── SPRINT 2: Post-Vacation Phase (Oct 19 Onwards through November) ➔ Full Shift Availability
    ├── PILLAR 1: Operations Bulletproofing & Scheduling
    │   ├── 1.2: Unified Daily Schedule Aggregator (Momence + Jane App Clinical Sync) ➔ 16 – 22 hrs
    │   └── 1.3: End-of-Day (EOD) Priority Lists & Digital Shift Turnover Tool ➔ 8 – 12 hrs
    ├── PILLAR 3: Content Production & Post-Shoot Media
    │   ├── 3.1: 4-Part Flagship Video Series Editorial Assembly & Color Grade ➔ 18 – 24 hrs
    │   └── 3.2: Long-Term Content Repurposing Blueprint & Asset Bank for Lisa ➔ 6 – 8 hrs
    ├── PILLAR 4: Digital Presence, Web Integrations & Membership Portal
    │   ├── 4.1: Technical Infrastructure Audit & Momence/Jane App Web Embeds ➔ 10 – 14 hrs
    │   ├── 4.2: Gated Member Sign-In Portal (Google Auth / Flagship Deliverable) ➔ 24 – 32 hrs
    │   └── 4.3: Website Integration Requirements Checklist for Lisa Kovacs ➔ Complete
    └── PILLAR 5: AI Infrastructure & Search Visibility
        ├── 5.1: High-Impact AI SEO, Schema Architecture & Local GEO Engine ➔ 12 – 16 hrs
        ├── 5.2: Autonomous Studio Email AI Agent (`hello@` / `ops@`) ➔ 8 – 12 hrs
        └── 5.3: Google AI Ultra Infrastructure Pipeline Integration ➔ Active
```

---

## 3. Detailed Deliverables & Hourly Engineering Scopes

### Pillar 1: Operations Bulletproofing & Access Control (Top Priority)

#### Project 1.1: 1Password Centralization & Shared 2FA/TOTP Integration
* **Executive Owner**: Sara Jackson (CEO) &middot; **Technical Lead**: Jackson McMurdo
* **Strategic Intent**: Eliminate recurring login roadblocks, stop fragmented SMS/authenticator prompts across personal phones (e.g. Canva lockout incidents), and give Sara a single master executive account to easily search and access all studio tools without disruption.
* **Detailed Scope**:
  * Set up structured 1Password architecture with three distinct vault tiers:
    1. *Sara Executive Master Vault*: Complete searchability across all company logins, domain accounts, banking/billing, and staff credential records.
    2. *Studio Operations Shared Vault*: Shared credentials for floor staff (Momence floor terminals, Spotify audio zones, 7shifts, iPad fleet logins).
    3. *Marketing & Media Vault*: Canva, social channels, Meta Business Suite, email marketing platforms.
  * Migrate shared Two-Factor Authentication (2FA) directly into 1Password's integrated one-time password (TOTP) generator so any authorized team member gets 2FA codes directly inside 1Password without pinging personal phones.
* **Deliverables**:
  1. Live 1Password Team deployment with 3 permissioned vaults.
  2. Single master executive dashboard for Sara with 100% credential searchability.
  3. All critical shared tools (Momence, Jane App, Canva, Google Workspace, Shopify/POS, Meta) configured with internal 2FA tokens.
* **Estimated Engineering Time**: **5.5 hours**
* **Scheduled Allocation**: Split across **Tuesday, Oct 6 (3.5 hrs)** and **Wednesday, Oct 7 (2.0 hrs)**. Complete and live before vacation.

---

#### Project 1.2: Unified Daily Schedule Aggregator (Momence + Jane App)
* **Executive Owner**: Kim Noble (COO) &middot; **Technical Lead**: Jackson McMurdo
* **Strategic Intent**: Provide Kim and the studio reception floor with a single, synchronized daily view combining Momence movement/sound classes, Jane App clinical practitioner appointments, and private studio bookings.
* **Detailed Scope**:
  * Engineer a daily synchronization pipeline extracting real-time booking rosters across Momence and Jane App.
  * Formulate compliance safeguards for Ontario health privacy (PHIPA/PIPEDA) by sanitizing clinical therapy patient names to initials on public floor displays while retaining full operational detail for front-desk staff.
  * Automate daily morning schedule distribution via digital floor displays and operational printouts.
* **Deliverables**:
  1. Automated daily unified schedule feed running via scheduled background service.
  2. Front-of-house clean daily view (Momence classes + Jane clinical appointments).
  3. Privacy-sanitized clinical display protocol.
* **Dependencies & Access Needed**: Elevated Admin API access to Momence; Admin access to Jane App; confirmation on front-desk display hardware.
* **Estimated Engineering Time**: **16 – 22 hours** (Requires thorough API and privacy verification).
* **Scheduled Allocation**: Sprint 2 (Post-Vacation, Oct 19 onward &middot; 2–3 dedicated shift blocks).

---

#### Project 1.3: End-of-Day (EOD) Priority Lists & Daily Operational Task Handoff
* **Executive Owner**: Kim Noble (COO) &middot; **Technical Lead**: Jackson McMurdo
* **Strategic Intent**: Standardize shift turnovers so opening and closing retail/studio staff follow a structured digital checklist, preventing operational drift and inventory errors.
* **Detailed Scope**:
  * Build a digital EOD closing form / workflow accessible from floor iPads.
  * Integrate opening/closing compliance sweeps (float reconciliation, terminal power-down, VSSL audio reset, Lutron lighting shutdown, cafe temperature logs).
  * Automatically email daily closing summaries to Kim and Sara upon shift sign-off.
* **Deliverables**:
  1. Digital EOD Checklist & Shift Turnover tool deployed on retail iPads.
  2. Automated daily executive closing summary digest delivered to Kim & Sara.
* **Dependencies & Access Needed**: Kim’s standard closing operational checklist.
* **Estimated Engineering Time**: **8 – 12 hours**
* **Scheduled Allocation**: Sprint 2 (Post-Vacation, Oct 19 onward &middot; 1–2 shift blocks).

---

### Pillar 2: Retail Intelligence & Floor Systems

#### Project 2.1: iPad Retail Floor Tool Final Polish & Momence Catalog Sync
* **Executive Owner**: Sara Jackson (CEO) &middot; **Technical Lead**: Jackson McMurdo
* **Strategic Intent**: Complete the near-finished iPad retail application so newly onboarded retail team members have an intuitive visual sales guide that prevents transaction errors, clarifies barcodeless artisan items, and boosts product storytelling.
* **Detailed Scope**:
  * Audit all 731 catalog SKUs in Momence to resolve the 188 missing `imageLink` records using authentic vendor CDN assets (`product_id_to_real_image_url.json`).
  * Reconcile local PWA dataset (719 SKUs in `products.js`) to achieve 1:1 match with Momence (731 SKUs).
  * Run on-device MobileNet v2 neural embedding extraction across all 731 items to compile updated `product_embeddings.js`.
  * Bump service worker cache in `sw.js` to `v1.1.0` and deploy to GitHub Pages.
  * Conduct physical floor testing on all 4 studio iPads at 360 Davenport Rd with on-duty retail staff.
* **Deliverables**:
  1. Fully synchronized, floor-ready Retail Identifier tool active on all 4 studio iPads.
  2. 100% clean image catalog and accurate product descriptions across all 8 studio departments.
  3. Laminated 1-page retail staff quick-reference operating sheet placed at the cash desk.
* **Estimated Engineering Time**: **8.5 hours**
* **Scheduled Allocation**: Split across **Tuesday, Oct 6 (4.5 hrs)** and **Wednesday, Oct 7 (4.0 hrs)**. Fully tested and operational before vacation.

---

### Pillar 3: Content Production & Post-Shoot Media

#### Project 3.1: 4-Part Flagship Video Series Editorial & Color Grade
* **Executive Owner**: Lisa Kovacs (Marketing & Events) &middot; **Technical Lead**: Jackson McMurdo
* **Strategic Intent**: Transform the extensive raw footage captured during our recent production shoot into 4 cinematic, brand-defining short films for digital marketing and member onboarding.
* **Detailed Scope**:
  * Edit 4 flagship films:
    1. *Post 1: Signature Practice* (The Architecture of Movement & Sound)
    2. *Post 2: Why This Practice Now* (Modern Yorkville Wellness Philosophy)
    3. *Post 3: Why We Practise Together* (Community, Sangha & Resonance)
    4. *Post 4: The Practice Begins When You Leave* (Integration & Daily Life)
  * Precision voiceover placement, cinematic color grading, sound design/audio mixing, and export in 9:16 vertical (Reels/TikTok) and 16:9 cinematic formats.
* **Deliverables**:
  1. 4 master-graded flagship videos with subtitles and burned-in audio masters.
  2. Full editorial timeline archives.
* **Dependencies & Access Needed**: Raw camera footage, voiceover audio master files (already locally indexed).
* **Estimated Engineering Time**: **18 – 24 hours**
* **Scheduled Allocation**: Sprint 2 (Post-Vacation, Oct 19 onward &middot; 3 dedicated shift blocks).

---

#### Project 3.2: Long-Term Video Content Repurposing Blueprint for Lisa
* **Executive Owner**: Lisa Kovacs (Marketing & Events) &middot; **Technical Lead**: Jackson McMurdo
* **Strategic Intent**: Maximize ROI from our video shoot by mapping unused B-roll, alternate camera angles, and supplementary audio takes into an ongoing 8-week content calendar.
* **Deliverables**:
  1. Editorial Repurposing Guidebook for Lisa detailing 16 short-form micro-clips.
  2. Curated B-roll asset library organized by studio zone (Practice Room, Cafe, Retail Boutique, Treatment Suites).
* **Estimated Engineering Time**: **6 – 8 hours**
* **Scheduled Allocation**: Sprint 2 (Post-Vacation, Oct 19 onward &middot; 1 dedicated shift block).

---

### Pillar 4: Digital Presence, Web Integrations & Membership Portal

#### Project 4.1: Technical Infrastructure Audit & Momence/Jane Web Embeds
* **Executive Owner**: Lisa Kovacs & Sara Jackson &middot; **Technical Lead**: Jackson McMurdo
* **Strategic Intent**: Audit `thepracticetoronto.com` hosting architecture and embed native scheduling widgets to eliminate booking friction for guests.
* **Detailed Scope**:
  * Audit existing hosting environment, domain registrar, and DNS infrastructure.
  * Integrate clean, mobile-responsive Momence class & workshop booking schedule widgets.
  * Assess Jane App clinical appointment booking architecture (evaluating direct booking modal vs. secure outward deep links).
* **Deliverables**:
  1. Live Momence schedule widget seamlessly styled to match The Practice typography and branding.
  2. Technical audit report identifying site speed and mobile booking optimizations.
* **Dependencies & Access Needed**: Lisa delivering DNS/Hosting credentials ([Website_Integrations_Checklist_Lisa.md](file:///Users/jacksonmcmurdo/Desktop/The%20Practice/Executive%20&%20Team/Website_Integrations_Checklist_Lisa.md)).
* **Estimated Engineering Time**: **10 – 14 hours**
* **Scheduled Allocation**: Sprint 2 (Post-Vacation, Oct 19 onward &middot; 1–2 shift blocks).

---

#### Project 4.2: Gated Member Sign-In Portal (Sara's October Priority)
* **Executive Owner**: Sara Jackson (CEO) &middot; **Technical Lead**: Jackson McMurdo
* **Strategic Intent**: Build a dedicated, premium member portal on `thepracticetoronto.com` where studio members can log in via Google authentication to access gated workshops, class audio archives, and member perks.
* **Detailed Scope**:
  * Implement Google OAuth / federated member authentication.
  * Build gated member dashboard navigation and private resource library.
  * Restrict access based on active Momence membership status or invitation passkeys.
* **Deliverables**:
  1. Production member portal on `thepracticetoronto.com/members`.
  2. One-click Google sign-in integration.
  3. Gated resource repository for audio meditations, workshop notes, and exclusive studio announcements.
* **Dependencies & Access Needed**: Website CMS/hosting administrative access; Google Cloud OAuth project configuration; Momence member API webhook keys.
* **Estimated Engineering Time**: **24 – 32 hours**
* **Scheduled Allocation**: Sprint 2 (Post-Vacation, Oct 19 onward &middot; 3–4 dedicated shift blocks).

---

### Pillar 5: AI Infrastructure & Search Visibility

#### Project 5.1: High-Impact AI SEO & Generative Engine Optimization (GEO)
* **Executive Owner**: Sara Jackson & Lisa Kovacs &middot; **Technical Lead**: Jackson McMurdo
* **Strategic Intent**: Optimize The Practice’s digital footprint so emerging AI search engines (Perplexity, ChatGPT Search, Google Gemini, Apple Intelligence) recognize 360 Davenport Rd as Yorkville’s premier wellness destination.
* **Detailed Scope**:
  * Embed comprehensive JSON-LD structured schema across `thepracticetoronto.com` (`HealthAndBeautyBusiness`, `DaySpa`, `LocalBusiness`, `CafeOrCoffeeShop`, `MedicalBusiness`).
  * Optimize high-intent local search keywords across 5 Core Semantic Clusters (Contrast Therapy, Sound Healing, Movement, Artisan Boutique, Sanctuary Cafe).
  * Build an AI-ready entity profile mapping studio services, practitioner bios, and cafe offerings.
  * Deep audit and synchronization of Google Business Profile and Apple Business Connect.
* **Deliverables**:
  1. Complete structured schema injection across all primary web pages.
  2. High-impact keyword and search intent optimization roadmap.
  3. Google Business Profile sync and local citation audit.
* **Dependencies & Access Needed**: Website CMS access (Lisa).
* **Estimated Engineering Time**: **12 – 16 hours**
* **Scheduled Allocation**: Sprint 2 (Post-Vacation, Oct 19 onward &middot; 2 dedicated shift blocks).

---

#### Project 5.2: Autonomous Studio Email AI Agent (`hello@` / `ops@`)
* **Executive Owner**: Kim Noble & Sara Jackson &middot; **Technical Lead**: Jackson McMurdo
* **Strategic Intent**: Expand the proven autonomous triage system deployed today for `hr@thepracticetoronto.com` to general studio inboxes (`hello@` / `ops@`) to route guest inquiries and draft automated responses.
* **Deliverables**:
  1. Automated 10-tier triage classification for `hello@` and `ops@`.
  2. Automated draft responses for common inquiries (class cancellations, private bookings, cafe menu).
* **Estimated Engineering Time**: **8 – 12 hours**
* **Scheduled Allocation**: Sprint 2 (Post-Vacation, Oct 19 onward &middot; 1–2 shift blocks).

---

#### Project 5.3: Google AI Ultra Infrastructure Integration
* **Technical Lead**: Jackson McMurdo
* **Scope**: Leverage Jackson’s active Google AI Ultra environment to drive code generation, audio transcription, image processing, and data transformations for The Practice at zero additional procurement cost.
* **Deliverables**: Active internal AI pipeline powering catalog processing and scheduling daemons.
* **Estimated Engineering Time**: Integrated directly into daily tasks at zero procurement cost.

---

## 4. Master Engineering Hours & Shift Allocation Matrix

| Phase / Project Initiative | Stakeholders | Core Deliverables | Estimated Engineering Hours | Assigned Shift Window |
| :--- | :--- | :--- | :---: | :--- |
| **1.1: 1Password Centralization** | Sara & All Staff | Vault setup, credential searchability, 2FA/TOTP tokens | **5.5 hrs** | **Tuesday, Oct 6 (3.5h) & Wed, Oct 7 (2.0h)** |
| **2.1: iPad Retail Floor Tool** | Sara & Retail Team | Momence 188-image patch, 731-SKU sync, 4 iPads floor-ready | **8.5 hrs** | **Tuesday, Oct 6 (4.5h) & Wed, Oct 7 (4.0h)** |
| **Sprint 1 Subtotal (Pre-Vacation)** | | *Immediate Floor Operations Bulletproofed* | **14.0 hrs** | **Confirmed Shifts: Oct 6 & Oct 7 (100% Allocated)** |
| **Production Soak / Vacation Blackout** | Whole Studio | *Staff live usage on iPads; zero engineering hours* | **0.0 hrs** | **October 10 – October 18 (Vacation Blackout)** |
| **1.3: EOD Shift Turnover Checklist** | Kim & Floor Staff | Digital iPad closing form & automated email summaries | **8 – 12 hrs** | **Sprint 2: Oct 19 onward** *(Post-vacation shifts)* |
| **1.2: Unified Daily Schedule Sync** | Kim & Reception | Momence + Jane App sync with PHIPA privacy masking | **16 – 22 hrs** | **Sprint 2: Oct 19 onward** *(Post-vacation shifts)* |
| **4.1: Website Audit & Widgets** | Lisa & Sara | Momence schedule embed, Jane booking assessment | **10 – 14 hrs** | **Sprint 2: Oct 19 onward** *(Post-vacation shifts)* |
| **4.2: Gated Member Sign-In Portal** | Sara & Members | Google Auth login, member resource library, Momence tie-in | **24 – 32 hrs** | **Sprint 2: Oct 19 onward** *(Post-vacation shifts)* |
| **3.1: 4-Part Flagship Video Series** | Lisa & Marketing | Assembly, color grade, audio mix across 4 films | **18 – 24 hrs** | **Sprint 2: Oct 19 onward** *(Post-vacation shifts)* |
| **3.2: Video Content Repurposing Plan** | Lisa & Marketing | 8-week content calendar & 16 micro-clips for Lisa | **6 – 8 hrs** | **Sprint 2: Oct 19 onward** *(Post-vacation shifts)* |
| **5.1: High-Impact AI SEO & Schema** | Sara & Lisa | Deep JSON-LD injection, 5 content hubs, GBP & Apple Maps | **12 – 16 hrs** | **Sprint 2: Oct 19 onward** *(Post-vacation shifts)* |
| **5.2: Studio Email AI Agent (`hello@`)** | Kim & Operations | Autonomous 10-tier triage and draft generator for `hello@` | **8 – 12 hrs** | **Sprint 2: Oct 19 onward** *(Post-vacation shifts)* |
| **Sprint 2 Subtotal (Post-Vacation)** | | *Digital Experience, Media & AI Systems* | **102 – 140 hrs** | **Starting Oct 19 onward (Open Availability)** |
| **Total October Engineering Scope** | | **All 10 Core Strategic Initiatives** | **116 – 154 hrs** | **Pre-Vacation: 14h &middot; Post-Vacation: 102–140h** |

---

## 5. The Shift Allocation Dependency Framework (Clarification for Leadership)

To align executive expectations with engineering reality, leadership should note that **calendar completion dates depend directly on scheduled hourly shift allocations**:

1. **Why Technical Rigor Requires Dedicated Engineering Blocks**:
   * Deploying live retail systems (MobileNet v2 neural embeddings, offline service workers, Momence POS database sync) and web infrastructure (Google OAuth portals, multi-entity JSON-LD schema, PHIPA clinical masking) requires uninterrupted engineering time.
   * Rushing deployment without thorough on-floor hardware testing risks transaction failures, inventory mismatches, or search engine indexing penalties.
2. **Post-Vacation Scheduling Scenarios (October 19 Onward)**:
   * **Scenario A (High-Velocity / Accelerated Delivery &middot; ~25–30 hrs/week scheduled)**:
     * If leadership authorizes 25–30 hours/week starting October 19, the Member Portal, Unified Daily Schedule, 4-Part Video Series, and AI SEO will all be completed and verified **by October 31 / first week of November**.
   * **Scenario B (Standard Paced Delivery &middot; ~15–20 hrs/week scheduled)**:
     * If scheduled at 15–20 hours/week, core operational essentials (Unified Schedule, Web Embeds, Member Portal) deliver by October 31, with media repurposing and the email AI agent delivering **in mid-November**.
   * **Scenario C (Conservative Pacing &middot; ~8–12 hrs/week scheduled)**:
     * Deliverables will be deployed sequentially milestone-by-milestone across November.
3. **Budgetary Predictability**:
   * Every initiative is bound by a strict hourly estimate. Leadership maintains complete discretion over delivery velocity based on the weekly shift allocations granted.
