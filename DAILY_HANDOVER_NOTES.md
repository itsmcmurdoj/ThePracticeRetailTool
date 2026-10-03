# The Practice • Daily Handover & Shift Operations Log

**Location**: 360 Davenport Rd, Yorkville, Toronto, ON M4V 1K6  
**Operational Lead**: Jackson McMurdo (Technology & Retail Operations Lead)  
**Stakeholders**: Sara Jackson (CEO / Studio Leadership), Kim Noble (COO / Accounting & Ops), Lisa Kovacs (Marketing & Events), Noah (Cafe Manager)  
**Live Production Host**: [https://the-practice-retail-tool-2e79e9.gitlab.io/](https://the-practice-retail-tool-2e79e9.gitlab.io/)  
**GitLab Organization**: [The Practice (`thepracticetoronto`)](https://gitlab.com/thepracticetoronto)

---

## 📌 Handover Protocol & Usage Guidelines

1. **Shift Cadence**: This living log is updated at the conclusion of every scheduled work shift (End of Day / EOD) by Jackson McMurdo.
2. **Accountability**: Documents completed work, blockers cleared, pending requirements, and exact task assignments for the upcoming shift window.
3. **Hourly Pacing**: Milestone progress is measured against contracted hourly allocations (reflecting minimum-wage shift budgeting) to maintain realistic delivery expectations.

---

## 📅 Shift Entry: Saturday, October 3, 2026 (Systems Architecture & Cloud Migration)

* **Shift Window**: 1:00 PM – 4:30 PM (Systems Engineering & GitLab Provisioning Window)
* **Lead In Charge**: Jackson McMurdo
* **Primary Focus**: Company GitLab setup, enterprise security activation, iPad floor suite hosting, and Apple Configurator fleet prep.

---

### 1. Key Accomplishments & Deliverables Completed

#### A. Company GitLab Organization & Ultimate Tier Activation
* **Company Namespace**: Successfully configured [`The Practice` (`thepracticetoronto`)](https://gitlab.com/thepracticetoronto) on GitLab (Group ID: `143861485`).
* **GitLab Ultimate Trial**: Confirmed active enterprise trial running through **November 2, 2026**.
* **Authentication Infrastructure**:
  * Generated dedicated Ed25519 SSH keypair (`~/.ssh/id_ed25519_thepractice`) and bound it to `gitlab.com` in `~/.ssh/config`.
  * Authenticated `glab` CLI v1.120.0 to the company account (`jackson85` / `jackson@thepracticetoronto.com`).
  * Configured local Antigravity IDE MCP server connection for direct GitLab API management.

#### B. Repository Architecture & Floor Tool Hosting
* **Repositories Established**:
  1. [`the-practice-retail-tool`](https://gitlab.com/thepracticetoronto/the-practice-retail-tool) (Project ID: `87201631`): Hosts the full studio iPad floor suite via automated GitLab Pages CI/CD.
  2. [`the-practice-daily-schedule`](https://gitlab.com/thepracticetoronto/the-practice-daily-schedule) (Project ID: `87202224`): Dedicated backend repository for automated calendar sync scripts and background daemons.
* **Floor Suite Consolidation**:
  * Uploaded complete artisan brand assets (Optima typeface font family, official vector wordmarks, gold/bronze crests).
  * Uploaded 731 precomputed MobileNet v2 1,280-dimensional feature embeddings (`product_embeddings.js` / `.json`) and full catalog dataset (`products.js`).
  * Integrated **Cafe Web Ordering Widget** (`cafe/index.html`), drink modifier selectors, and double-sided baked goods display cards (`cafe/display_labels.html`).
  * Integrated **Internal Team Directory** (`team/index.html`) with leadership, cafe, marketing, and tech ops rosters.
  * Integrated **Operations Checklists** (`operations/`): City of Toronto DineSafe inspection checklist, pest inspection records, TechOps sweeps, and weekly operations dashboard.
  * Added unified cross-navigation header across all web tools for instant 1-tap switching on the iPads.
* **Automated CI/CD & DevSecOps Verification**:
  * Configured [`.gitlab-ci.yml`](file:///Users/jacksonmcmurdo/Desktop/The%20Practice/ThePracticeRetailTool/.gitlab-ci.yml) with native GitLab Ultimate **Secret Detection** and **Semgrep SAST** scanning.
  * Pipeline [#2909679527](https://gitlab.com/thepracticetoronto/the-practice-retail-tool/-/pipelines/2909679527) passed: **0 vulnerabilities, 0 secrets leaked**.
  * GitLab Pages deployment verified live and returning HTTP/2 200 across all endpoints.

#### C. Apple Configurator & iPad Fleet Preparation
* **Company Approval Complete**: Official executive approval cleared to proceed with hardware supervision and MDM deployment across the 4 studio floor iPads.
* **Configuration Profile Hardened**:
  * Updated [`the_practice_webclip.mobileconfig`](file:///Users/jacksonmcmurdo/Desktop/The%20Practice/ThePracticeRetailTool/ipad-fleet/web_clip/the_practice_webclip.mobileconfig) payload target URL from placeholder to the live production endpoint (`https://the-practice-retail-tool-2e79e9.gitlab.io/`).
  * Verified full-screen kiosk display mode (`FullScreen: true`, `IgnoreManifestScope: true`) without Safari browser chrome or navigation controls.
* **Kiosk Launchpad Upgraded**:
  * Updated [`kiosk_launcher/index.html`](file:///Users/jacksonmcmurdo/Desktop/The%20Practice/ThePracticeRetailTool/ipad-fleet/kiosk_launcher/index.html) to link directly to the live retail and schedule suites, with working app launch scheme protocols (`momence://`, `spotify://`, `googlehome://`), Zen Mode dark theme, and ambient artwork screensaver.
* **Target Hardware Inventory Checked**:
  * Unit 1 (Retail Showroom): Serial `MMVQDCG72X`
  * Unit 2 (Yoga Studio): Serial `J4HQQKGQJP`
  * Unit 3 (Event Space): Serial `D374YLW542`
  * Unit 4 (Cafe Counter): Serial `GYX50DPXWN`

#### D. GitLab Ultimate Sprint & Roadmap Setup
* **Milestone**: Created [`October 2026 Operational Sprint`](https://gitlab.com/groups/thepracticetoronto/-/milestones/1) (Oct 1 – Oct 31, 2026).
* **Strategic Epics**: Created 4 Group Epics tracking key deliverables:
  * `&1`: *iPad Fleet Deployment & Studio Kiosk Architecture*
  * `&2`: *October Master Schedule & Shift Engineering Roadmap*
  * `&3`: *Momence POS & Visual Retail Catalog Harmonization*
  * `&4`: *Member Portal Architecture & AI Search Optimization (GEO)*
* **Shift-Weighted Issues**: Logged and linked 7 operational issues with exact hourly weights matching confirmed shift allocations (8h for Shift 1; 6h for Shift 2).

#### E. End-of-Shift Workspace Cleanup & Structural Harmonization
* **Municipal & Compliance Document Organization**:
  * Relocated loose root regulatory PDFs into [`Operations & Compliance/Municipal & Regulatory/`](file:///Users/jacksonmcmurdo/Desktop/The%20Practice/Operations%20&%20Compliance/Municipal%20&%20Regulatory/) with standardized naming:
    * `City_of_Toronto_Food_Establishment_Licence_B50-5661992.pdf` (City of Toronto Take-Out / Food Establishment Licence, exp. Aug 28, 2027)
    * `Province_of_Ontario_Business_Name_Registration_1001719998.pdf` (Ontario Business Names Act Registration Certificate)
    * `Waste_Management_Commercial_Service_Invoice_1150033.pdf` (WM Commercial waste and recycling service invoice)
  * Centralized `TechOps_Weekly_Operations_Dashboard.html` and `.pdf` inside `Operations & Compliance/`.
  * Added `operations` symlink in project root to ensure local navigation from `daily_schedule.html` resolves reliably.
* **Executive & Team Strategy Consolidation**:
  * Relocated loose action plans into [`Executive & Team/Action Plans & Roadmaps/`](file:///Users/jacksonmcmurdo/Desktop/The%20Practice/Executive%20&%20Team/Action%20Plans%20&%20Roadmaps/):
    * `The_Practice_Action_Plan_Sept30_2026.html` / `.pdf`
    * `The_Practice_October_2026_Action_Plan.html` / `.pdf`
  * Preserved Jackson's raw scratch notes into `Executive & Team/Work_Notes_Sep29_Oct03_2026.rtf`.
* **Asset & Folder Hygiene**:
  * Isolated raw numerical camera uploads in `Cafe Baked Goods/raw_scratch_assets/` without deleting original assets.
  * Created `Hiring & Recruiting/README.md` to document candidate pools and applicant scraping tools.
  * Hardened `google_workspace/.gitignore` (`token_hr.json`, `*.log`) and archived duplicate alternate-spelling documentation into `google_workspace/archive/`.
  * Moved browser cache `.temp_chrome_profile` into `.cache/chrome_automation_profile` and purged empty Google Drive download/upload temp directories.
  * Verified 100% byte parity between `iPad Fleet/iPad_Fleet_Deployments` and `ThePracticeRetailTool/ipad-fleet`.

---

### 2. Current Blockers & Access Dependencies

| # | Dependency / Access Item | Owner | Impact / Requirement | Status |
|:---:|:---|:---|:---|:---:|
| **1** | **Jane App API / Admin Credentials** | Sara Jackson / Kim Noble | Required to extract clinical appointment feed and configure PHIPA-sanitized schedule integration. | `Pending Credentials` |
| **2** | **Momence POS Developer / Elevated Access** | Sara Jackson | Required to audit broken catalog images in bulk and resolve API sync mismatches. | `Pending Permission` |
| **3** | **Physical iPad Access on Floor** | Studio Operations | Required for USB-C tethering to Mac workstation for Apple Configurator supervision on Tuesday morning. | `Ready for Tuesday Shift` |

---

### 3. Action Plan for Upcoming Shifts

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                               OCTOBER MASTER TIMELINE                                  │
├────────────────────┬────────────────────┬───────────────────────┬──────────────────────┤
│ TUE, OCT 6 (9a–5p) │ WED, OCT 7 (11a–5p)│ OCT 10 – OCT 18       │ MON, OCT 19 ONWARD   │
│ Shift 1 (8 Hours)  │ Shift 2 (6 Hours)  │ VACATION BLACKOUT     │ Post-Vacation Sprint │
│ iPad Supervision & │ 1Password Setup &  │ (Zero Work Allocated) │ Member Portal & AI   │
│ Momence Catalog    │ Jane Schedule API  │                       │ SEO Rollout          │
└────────────────────┴────────────────────┴───────────────────────┴──────────────────────┘
```

#### Shift 1: Tuesday, October 6, 2026 (9:00 AM – 5:00 PM | 8 Hours Allocated)
* **Goal**: Supervise all 4 iPads via Apple Configurator, deploy WebClip profiles, audit Momence retail images, and verify cafe counter workflow.
* **Hourly Breakdown**:
  * **09:00 – 12:00 (3.0h | Issue [#1](https://gitlab.com/thepracticetoronto/the-practice-retail-tool/-/work_items/1))**:
    * Connect the 4 iPads sequentially via USB-C to Mac running Apple Configurator 2.
    * Supervise devices, standardize hostnames (`Retail iPad`, `Yoga Studio iPad`, `Event Space iPad`, `Cafe iPad`).
    * Push [`the_practice_webclip.mobileconfig`](file:///Users/jacksonmcmurdo/Desktop/The%20Practice/ThePracticeRetailTool/ipad-fleet/web_clip/the_practice_webclip.mobileconfig) and apply lockscreen asset tags.
    * Verify full-screen Safari PWA launch and offline service worker caching on all units.
  * **12:00 – 13:00 (1.0h | Issue [#3](https://gitlab.com/thepracticetoronto/the-practice-retail-tool/-/work_items/3))**:
    * Test Cafe iPad with Noah: verify Cafe Web Ordering Widget, baked goods display labels, and DineSafe daily refrigeration temperature logging.
  * **13:00 – 16:00 (3.0h | Issue [#2](https://gitlab.com/thepracticetoronto/the-practice-retail-tool/-/work_items/2))**:
    * Audit missing/broken product photography across Momence Host `200431`.
    * Cross-reference catalog with `momence_live_catalog_current.json` and upload missing artisan assets.
    * Verify in-store pickup policy tags (`IN-STORE PICKUP ONLY`) for fragile mineralogy and home goods.
  * **16:00 – 17:00 (1.0h)**:
    * Floor testing and live staff walkthrough of the visual scanner with retail staff.
    * Log End-of-Day Handover Notes entry for Shift 1.

#### Shift 2: Wednesday, October 7, 2026 (11:00 AM – 5:00 PM | 6 Hours Allocated)
* **Goal**: Resolve Sara Jackson's credential bottlenecks via 1Password Teams, connect Jane App clinical schedule API, and freeze operations before vacation.
* **Hourly Breakdown**:
  * **11:00 – 14:00 (3.0h | Issue [#4](https://gitlab.com/thepracticetoronto/the-practice-retail-tool/-/work_items/4))**:
    * Provision 1Password Teams vault for The Practice.
    * Centralize and vault credentials for Sara, Kim, and floor staff: Momence POS, Jane App, Google Workspace, Lutron lighting, VSSL multi-zone audio, Stripe, Nelko printer.
    * Eliminate password lockouts and establish role-based access delegation.
  * **14:00 – 16:30 (2.5h | Issue [#5](https://gitlab.com/thepracticetoronto/the-practice-retail-tool/-/work_items/5))**:
    * Configure Jane App API key or authenticated ICS schedule token into [`sync_daily_schedule.py`](file:///Users/jacksonmcmurdo/Desktop/The%20Practice/integrations/sync_daily_schedule.py).
    * Test 3-way daily schedule synchronization (Momence + Jane App + Event Space).
    * Verify PHIPA / PIPEDA patient privacy masking (names sanitized to first name + last initial).
  * **16:30 – 17:00 (0.5h)**:
    * Pre-vacation operational sign-off with Kim and Sara.
    * Verify background daemons (`com.thepractice.dailyschedule.plist`) are running cleanly.
    * Log End-of-Day Handover Notes entry for Shift 2.

#### Vacation Blackout: Saturday, October 10 – Sunday, October 18, 2026
* **Zero Work Allocated**: Scheduled vacation window. Studio systems operate autonomously via background launchd daemons and GitLab Pages CDN.

#### Post-Vacation Sprint: Monday, October 19 onward
* **Deliverables**: Member Portal sign-in architecture with Google OAuth, website embeds with Lisa Kovacs, and Generative Engine Optimization (GEO/AI SEO) rollouts.

---

*Handover notes logged by Jackson McMurdo. Operational status: Systems green, repositories secure, fleet ready for Tuesday floor deployment.*
