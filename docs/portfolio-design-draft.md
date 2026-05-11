# PORTFOLIO DESIGN DRAFT
## Gania Rafidah Huwaida — Apple Developer Academy Indonesia 2025
### File Export: GaniaRafidahHuwaida_Portfolio_Academy.pdf

---

## DESIGN SYSTEM

### Color Palette
| Token | Hex | Usage |
|---|---|---|
| Primary | `#A380A4` | Accent utama, button primary, highlight, section label |
| Primary Dark | `#7D617E` | Tertiary — hover state, border accent, left-border metadata |
| Primary Light | `#C9AEC9` | Subtle accent, tag background tint, decorative element |
| Primary Muted | `#E8DDE8` | Background card ringan, tag pill background |
| Background Primary | `#FCFAFC` | Slide background utama (Secondary palette) |
| Background Card | `#F3EEF3` | Card, panel, box background |
| Neutral Dark | `#2D2D2D` | Text primary, heading (Neutral palette) |
| Neutral Mid | `#5A5A5A` | Text body, subheading |
| Neutral Light | `#9E9E9E` | Text muted, caption, placeholder |
| Border Subtle | `#DDD4DD` | Card border, divider |
| Success | `#65BD8A` | Edible, positive state (Shroomify) |
| Danger | `#D33336` | Poisonous, alert state (Shroomify) |
| White | `#FFFFFF` | Button label inverted, overlay text |

### Typography
| Role | Font | Size | Weight |
|---|---|---|---|
| Display / Hook | Manrope | 48–56pt | Bold (700) |
| Heading Slide | Manrope | 32–40pt | SemiBold (600) |
| Subheading | Manrope | 20–24pt | Medium (500) |
| Body | Inter | 15–17pt | Regular (400) |
| Caption / Label | Inter | 12–13pt | Regular (400) |
| Metadata / Code | JetBrains Mono | 12–13pt | Regular (400) |
| Skill Tag | Inter | 11–12pt | Medium (500) |
| Section Label | Inter | 10–11pt | SemiBold (600), uppercase, letter-spacing 0.12em |

### Spacing System
| Token | Value |
|---|---|
| Slide Margin | 64px semua sisi |
| Section Gap | 40px |
| Component Gap | 24px |
| Card Padding | 24px |
| Tag Padding | 6px 14px |

### Component Styles
- **Card:** Background `#F3EEF3`, border `1px solid #DDD4DD`, border-radius `12px`, padding `24px`
- **Tag / Pill:** Background `#E8DDE8`, border `1px solid #C9AEC9`, border-radius `999px`, text `#7D617E`, font Inter 11pt Medium
- **Button Primary:** Background `#A380A4`, text `#FFFFFF`, border-radius `8px`
- **Button Outlined:** Background transparent, border `1px solid #A380A4`, text `#A380A4`, border-radius `8px`
- **Accent Line:** `2px` underline atau left-border warna `#A380A4`
- **Metadata Box:** Background `#F3EEF3`, border-left `3px solid #7D617E`, font JetBrains Mono
- **Section Label:** Text `#A380A4`, font Inter 11pt SemiBold, uppercase, letter-spacing `0.12em`
- **Divider:** `1px solid #DDD4DD`

### Slide Dimensions
- **Format:** A4 Landscape atau 1920x1080px (16:9)
- **Rekomendasi Figma:** Frame 1920x1080px per slide

---

## SLIDE 01 — COVER

**Layout:** Full-page light background. Centered vertically dan horizontally.

**Visual Notes:**
- Background: `#FCFAFC` solid
- Accent element: thin horizontal line `2px #A380A4` di atas nama, width 80px
- Optional: abstract waveform atau subtle floral/organic pattern dengan warna `#E8DDE8` opacity sangat rendah (8–10%) sebagai background decoration — tetap clean

**Content Structure:**
```
[thin accent line — #A380A4, width 80px]

GANIA RAFIDAH HUWAIDA
[Display, 56pt, Bold, Manrope, #2D2D2D]

Computer Engineering  ·  Universitas Brawijaya  ·  GPA 3.65
[Subheading, 18pt, Regular, Inter, #9E9E9E]

[gap 48px]

I build systems that talk to hardware,
learn from data, and make sense to people.
[Body Italic, 20pt, Inter, #5A5A5A]

[gap 64px]

Apple Developer Academy Indonesia  ·  Portfolio 2025
[Caption, 13pt, Inter, #9E9E9E]
```

---

## SLIDE 02 — ABOUT ME

**Layout:** Dua kolom. Kiri 35% untuk foto dan kontak. Kanan 65% untuk paragraf dan skill tags.

**Visual Notes:**
- Foto: circular crop, border `2px solid #A380A4`
- Skill tags: pill style, background `#E8DDE8`, border `1px solid #C9AEC9`, text `#7D617E`
- Kolom kiri dan kanan dipisahkan subtle vertical divider `1px #DDD4DD`

**Kolom Kiri:**
```
[Profile Photo — circular, 160px diameter]

GANIA RAFIDAH HUWAIDA
[14pt, SemiBold, #FFFFFF]

Computer Engineering
Universitas Brawijaya
[12pt, Regular, #8B949E]

[gap 24px]

[ikon] gania.rafida12@gmail.com
[ikon] 088901660277
[ikon] github.com/gnieerfd
[ikon] clips.id/portofolio-gania
[12pt, Regular, #8B949E]
```

**Kolom Kanan:**

*Section Label:* `ABOUT ME`

**EN:**
> I am a Computer Engineering student at Universitas Brawijaya (GPA 3.65) who finds genuine excitement at the intersection of software and the physical world, whether it is a charging station transmitting live power data, or a microphone capturing someone's voice and turning it into meaningful action.
>
> Over the past two years, I have built real, functional systems during internships at BRIN and Telkom Indonesia — tools that researchers and operators actively rely on, not just academic exercises. Beyond engineering, I have led operational teams of up to 70 people, served as a liaison officer for international delegations, and managed content strategies across multiple organizations. I am drawn to problems that span multiple disciplines, because the most interesting solutions rarely live within a single field.
>
> I am applying to Apple Developer Academy because I want to learn how to make these systems not only work reliably, but feel right for the people who use them.

**ID:**
> Saya adalah mahasiswa Teknik Komputer Universitas Brawijaya (IPK 3.65) yang menemukan ketertarikan mendalam di persimpangan antara perangkat lunak dan dunia fisik, baik itu stasiun pengisian yang mengirimkan data daya secara langsung maupun mikrofon yang menangkap suara dan mengubahnya menjadi tindakan yang bermakna.
>
> Selama dua tahun terakhir, saya membangun sistem yang nyata dan fungsional selama magang di BRIN dan Telkom Indonesia, bukan sekadar latihan akademis, melainkan alat yang benar-benar digunakan oleh peneliti dan operator. Di luar rekayasa teknis, saya pernah memimpin tim operasional hingga 70 orang, menjadi liaison officer untuk delegasi internasional, dan mengelola strategi konten di berbagai organisasi. Saya tertarik pada masalah yang melintasi berbagai disiplin ilmu, karena solusi paling menarik jarang ditemukan dalam satu bidang saja.
>
> Saya mendaftar ke Apple Developer Academy karena ingin belajar bagaimana membuat sistem yang tidak hanya bekerja dengan andal, tetapi juga terasa tepat bagi orang-orang yang menggunakannya.

**Skill Tags (tampilkan sebagai pill row):**
```
Python   Machine Learning   Android (Kotlin)   IoT / OCPP
DSP   Flask   Signal Processing   SQL   ETL Pipeline   Docker
```

---

## SLIDE 03 — ACHIEVEMENTS AND CERTIFICATIONS

**Layout:** Dua bagian vertikal. Atas: Achievements (60% tinggi slide). Bawah: Certifications (40% tinggi slide). Dibagi dengan thin divider `1px #30363D`.

**Visual Notes:**
- Achievement cards: grid 3 kolom (row 1: 3 cards, row 2: 2 cards centered)
- Certification cards: grid 2 kolom
- Ikon medali menggunakan emoji atau custom icon dengan accent color

*Section Label:* `ACHIEVEMENTS & CERTIFICATIONS`

---

**ACHIEVEMENTS**

*Intro paragraph (EN):*
> My academic and competitive journey has been shaped by a few milestones I am particularly proud of. I earned a Gold Medal in Computer Science at the Advanced Science Olympiad 2021 and a Bronze Medal in Mathematics at the National Education Day Competition 2021, both reflecting an early drive toward analytical and computational problem-solving. More recently, I reached the finalist stage of the PRISMA UINSA 2025 Business Plan Competition, an experience that pushed me to think beyond engineering and consider the real-world viability of ideas. I was also recognized as Best Internship Staff by the Ministry of Finance division of BEM Universitas Brawijaya with a score of 90.14, and as Best Administration Staff at BEM FILKOM UB 2023.

*Intro paragraph (ID):*
> Perjalanan akademis dan kompetitif saya dibentuk oleh beberapa pencapaian yang saya banggakan. Saya meraih Medali Emas bidang Komputer di Advanced Science Olympiad 2021 dan Medali Perunggu bidang Matematika di National Education Day Competition 2021, keduanya mencerminkan dorongan awal menuju pemecahan masalah analitis dan komputasional. Baru-baru ini, saya mencapai tahap finalis di Business Plan Competition PRISMA UINSA 2025, sebuah pengalaman yang mendorong saya berpikir melampaui rekayasa teknis. Saya juga diakui sebagai Staf Magang Terbaik oleh divisi Kementerian Keuangan BEM Universitas Brawijaya dengan skor 90.14, serta Staf Administrasi Terbaik BEM FILKOM UB 2023.

**Achievement Cards:**
```
┌─────────────────────────┐  ┌─────────────────────────┐  ┌─────────────────────────┐
│ 🥇                      │  │ 🥉                      │  │ 🏆                      │
│ Gold Medal              │  │ Bronze Medal            │  │ Finalist                │
│ Computer Science        │  │ Mathematics             │  │ Business Plan           │
│                         │  │                         │  │ Competition             │
│ Advanced Science        │  │ National Education Day  │  │ PRISMA UINSA 2025       │
│ Olympiad 2021           │  │ Competition 2021        │  │                         │
└─────────────────────────┘  └─────────────────────────┘  └─────────────────────────┘

        ┌─────────────────────────┐  ┌─────────────────────────┐
        │ ⭐                      │  │ ⭐                      │
        │ Best Internship Staff  │  │ Best Administration     │
        │ Score: 90.14           │  │ Staff                   │
        │                        │  │                         │
        │ BEM Universitas        │  │ BEM FILKOM UB 2023      │
        │ Brawijaya              │  │                         │
        └─────────────────────────┘  └─────────────────────────┘
```

---

**CERTIFICATIONS**

*Intro paragraph (EN):*
> I have completed two Microsoft Azure Fundamentals courses in AI for Beginners through KOMDIGI in 2025, strengthening my foundational understanding of cloud-based AI services and how they connect to the applied machine learning work I do in my projects.

*Intro paragraph (ID):*
> Saya telah menyelesaikan dua kursus Microsoft Azure Fundamentals dalam AI for Beginners melalui KOMDIGI pada tahun 2025, memperkuat pemahaman dasar saya tentang layanan AI berbasis cloud dan bagaimana hal tersebut terhubung dengan pekerjaan machine learning terapan dalam proyek-proyek saya.

**Certification Cards:**
```
┌──────────────────────────────────────┐  ┌──────────────────────────────────────┐
│ ☁️  Microsoft Azure Fundamentals     │  │ ☁️  Microsoft Azure Fundamentals     │
│     AI Beginner — Course 1           │  │     AI Beginner — Course 2           │
│     KOMDIGI  ·  2025                 │  │     KOMDIGI  ·  2025                 │
└──────────────────────────────────────┘  └──────────────────────────────────────┘
```

---

## SLIDE 04–06 — PROJECT 1: ENERLYTICS
*(Tiga slide)*

---

### SLIDE 04A — ENERLYTICS: HOOK

**Layout:** Full-width centered statement. Context paragraph di bawah. Visual di kanan atau background element subtle.

**Visual Notes:**
- Headline besar mendominasi 40% tinggi slide
- Bisa pakai ilustrasi sederhana: ikon charging station → database → tanda tanya dengan warna accent
- Atau screenshot dashboard sebagai background dengan overlay dark gradient

*Section Label:* `PROJECT 01 — ENERLYTICS`

**Headline (EN):**
```
Thousands of charging points.
Gigabytes of data.
Zero forecasting.
[Display, 48pt, Bold, #FFFFFF]
```

**Headline (ID):**
```
Ribuan titik pengisian.
Gigabyte data.
Nol prediksi.
[Display, 48pt, Bold, #FFFFFF]
```

**Context Paragraph (EN):**
> During my internship at BRIN, I discovered that Indonesia's EV charging infrastructure was generating enormous volumes of real-time energy data — current, voltage, power, and consumption — yet no system existed to answer the most fundamental question: how much energy will we need next month? The data was there. The insight was not. So I built Enerlytics.

**Context Paragraph (ID):**
> Saat menjalani magang di BRIN, saya menemukan bahwa infrastruktur pengisian kendaraan listrik Indonesia menghasilkan data energi real-time dalam jumlah besar seperti arus, tegangan, daya, dan konsumsi, namun tidak ada sistem yang mampu menjawab pertanyaan paling mendasar: berapa energi yang akan kita butuhkan bulan depan? Datanya ada. Wawasannya tidak. Maka saya membangun Enerlytics.

**One-liner badge (tampilkan sebagai highlight box):**

EN: `Work Assignment — Individual Contribution — BRIN (Badan Riset dan Inovasi Nasional)`

ID: `Tugas Kerja — Kontribusi Individual — BRIN (Badan Riset dan Inovasi Nasional)`

---

### SLIDE 04B — ENERLYTICS: WHAT IT DOES

**Layout:** Kiri teks (60%), kanan screenshot dashboard atau mockup 3-card (40%).

**Visual Notes:**
- Jika ada screenshot dashboard: tampilkan sebagai framed mockup dengan border `#30363D` dan slight drop shadow
- Jika tidak ada: buat 3 card vertikal dengan ikon untuk Monitor, Forecast, Smart Charging

*Section Label:* `PROJECT 01 — ENERLYTICS`

**One-liner (EN):**
> Enerlytics is a web-based energy intelligence dashboard that monitors real-time EV charging data and forecasts future energy consumption using eight machine learning models, built to support BRIN's national EV research program.

**One-liner (ID):**
> Enerlytics adalah dasbor kecerdasan energi berbasis web yang memantau data pengisian kendaraan listrik secara real-time dan memprediksi konsumsi energi masa depan menggunakan delapan model machine learning, dibangun untuk mendukung program riset EV nasional BRIN.

**Highlights Label:** `WHAT IT DOES`

**Highlights (EN):**
> The system delivers three core capabilities. For live monitoring, it provides real-time KPI cards, four interactive charts covering energy, power, voltage, and current, along with automatic anomaly alerts triggered by threshold logic. For forecasting, it offers eight machine learning models including DeepBoost, a custom ensemble model I designed that stacks CatBoost, XGBoost, and LSTM, then combines their predictions using a Linear Regression meta-learner for higher accuracy than any single model alone. For smart charging, it runs an integrated OCPP 1.6 Central System that automatically reduces charging load the moment grid overload is detected, requiring no manual intervention whatsoever.

**Highlights (ID):**
> Sistem ini menghadirkan tiga kemampuan utama. Untuk pemantauan langsung, sistem menyediakan kartu KPI real-time, empat grafik interaktif yang mencakup energi, daya, tegangan, dan arus, serta peringatan anomali otomatis yang dipicu oleh logika ambang batas. Untuk peramalan, tersedia delapan model machine learning termasuk DeepBoost, sebuah model ensemble kustom yang saya rancang dengan menggabungkan CatBoost, XGBoost, dan LSTM, lalu menyatukan prediksinya menggunakan Linear Regression sebagai meta-learner untuk akurasi yang lebih tinggi dari model mana pun secara individual. Untuk pengisian cerdas, sistem menjalankan OCPP 1.6 Central System terintegrasi yang secara otomatis mengurangi beban pengisian begitu overload jaringan terdeteksi, tanpa memerlukan intervensi manual sama sekali.

---

### SLIDE 04C — ENERLYTICS: IMPACT AND LEARNING

**Layout:** Dua bagian vertikal. Atas: Impact. Bawah: What I Learned. Metadata box di sudut kanan bawah.

*Section Label:* `PROJECT 01 — ENERLYTICS`

**Impact Label:** `IMPACT`

**Impact (EN):**
> Before Enerlytics, operators had no choice but to query the database manually to understand what was happening on the grid. After its deployment, the same information is available through a browser in seconds. Automatic alert systems now identify overload conditions before incidents occur, and capacity planning has shifted from intuition-based guesswork to decisions grounded in actual data.

**Impact (ID):**
> Sebelum Enerlytics, operator tidak memiliki pilihan selain melakukan query database secara manual untuk memahami kondisi jaringan. Setelah sistem ini diterapkan, informasi yang sama tersedia melalui browser dalam hitungan detik. Sistem peringatan otomatis kini mengidentifikasi kondisi overload sebelum insiden terjadi, dan perencanaan kapasitas telah beralih dari tebakan berbasis intuisi menjadi keputusan yang berlandaskan data nyata.

**What I Learned Label:** `WHAT I LEARNED`

**What I Learned (EN):**
> Building DeepBoost taught me that designing an ensemble model is as much about understanding each model's failure modes as it is about combining their strengths. Integrating the OCPP layer reinforced something more fundamental: the most impactful software often lives precisely at the boundary between the digital and the physical, and that boundary demands both engineering rigor and a clear understanding of the human problem being solved.

**What I Learned (ID):**
> Membangun DeepBoost mengajarkan saya bahwa merancang model ensemble sama pentingnya dengan memahami titik kegagalan masing-masing model seperti halnya menggabungkan kekuatannya. Mengintegrasikan lapisan OCPP memperkuat sesuatu yang lebih mendasar: perangkat lunak yang paling berdampak sering kali hidup tepat di batas antara digital dan fisik, dan batas itu menuntut ketegasan teknis sekaligus pemahaman yang jelas tentang masalah manusia yang sedang diselesaikan.

**Metadata Box (monospace font, border-left accent):**
```
Type    Work Assignment — Individual
Org     BRIN (Badan Riset dan Inovasi Nasional)
Role    Sole Developer, end-to-end
Stack   Python · Flask · scikit-learn · XGBoost · LSTM · MySQL · Chart.js
```

---

## SLIDE 05–06 — PROJECT 2: CHARGESIM
*(Dua slide)*

---

### SLIDE 05A — CHARGESIM: HOOK AND FEATURES

**Layout:** Atas: hook statement. Tengah: one-liner. Bawah: highlights paragraph. Visual di sisi kanan (diagram CP ke CSMS atau screenshot GUI).

**Visual Notes:**
- Diagram sederhana dua kotak: `[Charge Point Client]` ↔ WebSocket ↔ `[Central System Server]`
- Atau screenshot GUI dengan animated power graph

*Section Label:* `PROJECT 02 — CHARGESIM`

**Headline (EN):**
```
You cannot test a charging network
by plugging in real cars every time.
[Display, 40pt, Bold, #FFFFFF]
```

**Headline (ID):**
```
Anda tidak dapat menguji jaringan pengisian
dengan mencolokkan kendaraan nyata setiap saat.
[Display, 40pt, Bold, #FFFFFF]
```

**Context Paragraph (EN):**
> Before deploying EV management systems to physical hardware, BRIN needed a safe and repeatable environment to validate protocol logic, test power-sharing algorithms, and simulate real charging behavior — without involving a single physical charger. I built ChargeSim: a full-stack EV charging simulator that implements both sides of the OCPP 1.6 protocol, replays real measurement data from four actual EV models, and runs a reinforcement learning agent for intelligent power allocation — entirely in software.

**Context Paragraph (ID):**
> Sebelum menerapkan sistem manajemen EV ke perangkat keras fisik, BRIN membutuhkan lingkungan yang aman dan dapat diulang untuk memvalidasi logika protokol, menguji algoritma pembagian daya, dan mensimulasikan perilaku pengisian nyata, tanpa melibatkan satu pun charger fisik. Saya membangun ChargeSim: simulator pengisian EV full-stack yang mengimplementasikan kedua sisi protokol OCPP 1.6, memutar ulang data pengukuran nyata dari empat model EV aktual, dan menjalankan reinforcement learning agent untuk alokasi daya yang cerdas, semuanya dalam perangkat lunak.

**One-liner (EN):**
> ChargeSim simulates up to 15 concurrent EV charging sessions with live animated power graphs, AI-driven smart power sharing, queue management, and a complete OCPP 1.6 message pipeline — an individual project at BRIN spanning over 4,000 lines of Python.

**One-liner (ID):**
> ChargeSim mensimulasikan hingga 15 sesi pengisian EV secara bersamaan dengan grafik daya animasi langsung, pembagian daya cerdas berbasis AI, manajemen antrean, dan pipeline pesan OCPP 1.6 yang lengkap — sebuah proyek individual di BRIN dengan lebih dari 4.000 baris Python.

**Highlights Label:** `WHAT IT DOES`

**Highlights (EN):**
> ChargeSim is built around four key capabilities. First, it replays actual power curves from real vehicles including the BMW iX, Hyundai IONIQ 6, NETA 01, and Toyota bZ4X, sourced from HIOKI power analyzer measurements, ensuring research results reflect real-world charging behavior rather than synthetic data. Second, it incorporates a Deep Q-Network reinforcement learning agent that learns optimal power allocation across multiple simultaneous sessions. Third, its queue management system with delayed-start logic mirrors how actual charging stations in Indonesia operate, a design choice informed by direct observation rather than assumption. Fourth, a single-line power diagram provides a live visual overview of load balance across the entire facility.

**Highlights (ID):**
> ChargeSim dibangun di atas empat kemampuan utama. Pertama, sistem memutar ulang kurva daya aktual dari kendaraan nyata termasuk BMW iX, Hyundai IONIQ 6, NETA 01, dan Toyota bZ4X, bersumber dari pengukuran power analyzer HIOKI, sehingga hasil penelitian mencerminkan perilaku pengisian dunia nyata. Kedua, sistem mengintegrasikan Deep Q-Network reinforcement learning agent yang mempelajari alokasi daya optimal di berbagai sesi bersamaan. Ketiga, sistem manajemen antrean dengan logika delayed-start mencerminkan cara stasiun pengisian nyata di Indonesia beroperasi, sebuah keputusan desain yang lahir dari observasi langsung. Keempat, diagram daya single-line menyajikan gambaran visual langsung tentang keseimbangan beban di seluruh fasilitas.

---

### SLIDE 05B — CHARGESIM: ENGINEERING STORY AND LEARNING

**Layout:** Atas: Engineering Story (dengan code snippet sebagai visual accent). Bawah: Impact dan Learning. Metadata box di sudut kanan bawah.

*Section Label:* `PROJECT 02 — CHARGESIM`

**Engineering Story Label:** `ENGINEERING CHALLENGE`

**Engineering Story (EN):**
> The most demanding technical challenge was not the OCPP protocol itself, but making Qt's GUI event loop and Python's asyncio run simultaneously without freezing the interface. These are two fundamentally incompatible threading models operating within one application. The solution was AsyncioPySide6, a bridge that dispatches every WebSocket operation to a background thread while keeping the user interface responsive at 60 frames per second.

**Engineering Story (ID):**
> Tantangan teknis paling berat bukan pada protokol OCPP itu sendiri, melainkan membuat event loop GUI Qt dan asyncio Python berjalan secara bersamaan tanpa membekukan antarmuka. Keduanya adalah dua model threading yang secara fundamental tidak kompatibel dalam satu aplikasi. Solusinya adalah AsyncioPySide6, sebuah jembatan yang mendispatch setiap operasi WebSocket ke background thread sambil menjaga antarmuka pengguna tetap responsif pada 60 frame per detik.

**What I Learned Label:** `WHAT I LEARNED`

**What I Learned (EN):**
> Implementing both sides of an industrial protocol from scratch is the most effective way to truly understand how it works. More meaningfully, designing the queue system after observing how real charging stations in Indonesia actually operate reminded me that the best engineering decisions are rarely made at a desk. They come from watching how people genuinely interact with systems in the field.

**What I Learned (ID):**
> Mengimplementasikan kedua sisi protokol industri dari awal adalah cara paling efektif untuk benar-benar memahami cara kerjanya. Lebih dari itu, merancang sistem antrean setelah mengamati cara stasiun pengisian nyata di Indonesia beroperasi mengingatkan saya bahwa keputusan engineering terbaik jarang dibuat di belakang meja. Keputusan itu lahir dari mengamati bagaimana orang benar-benar berinteraksi dengan sistem di lapangan.

**Metadata Box:**
```
Type    Work Assignment — Individual
Org     BRIN (Badan Riset dan Inovasi Nasional)
Role    Sole Developer
Stack   Python · PySide6 · OCPP 1.6 · asyncio · matplotlib · stable-baselines3 · MySQL
LOC     4,000+ lines
```

---

## SLIDE 07 — PROJECT 3: JARVIS S2S
*(Satu slide, bisa dipecah dua jika diperlukan)*

---

### SLIDE 07A — JARVIS S2S: HOOK

**Layout:** Kiri: hook statement dan context. Kanan: pipeline diagram visual.

**Visual Notes:**
- Pipeline diagram horizontal: `Mic → VAD → ASR → LLM → TTS → Speaker`
- Setiap node: kotak rounded dengan label dan ikon kecil
- Waveform decoration sebagai background accent tipis

*Section Label:* `PROJECT 03 — JARVIS S2S`

**Headline (EN):**
```
Every word you say to a voice assistant
is sent to someone else's server.
[Display, 36pt, Bold, #FFFFFF]
```

**Headline (ID):**
```
Setiap kata yang Anda ucapkan kepada asisten suara
dikirimkan ke server milik pihak lain.
[Display, 36pt, Bold, #FFFFFF]
```

**Context Paragraph (EN):**
> In environments where privacy is non-negotiable — research facilities, healthcare institutions, and government agencies — that is a fundamental limitation. Jarvis S2S is a fully local Speech-to-Speech AI assistant: voice goes in, a spoken response comes out, and nothing ever leaves the machine. It was built during my internship at Telkom Indonesia BigBox and runs entirely on a standard consumer CPU.

**Context Paragraph (ID):**
> Di lingkungan yang membutuhkan privasi tinggi seperti fasilitas riset, institusi kesehatan, dan lembaga pemerintahan, hal tersebut menjadi keterbatasan yang fundamental. Jarvis S2S adalah asisten AI Speech-to-Speech yang sepenuhnya berjalan secara lokal: suara masuk, respons dalam bentuk suara keluar, dan tidak ada data yang meninggalkan perangkat. Sistem ini dibangun selama magang di Telkom Indonesia BigBox dan berjalan sepenuhnya pada CPU konsumen standar.

**One-liner (EN):**
> Jarvis S2S is a modular, privacy-first voice assistant pipeline spanning VAD, Faster-Whisper ASR, LLM integration, and gTTS that runs entirely on a local CPU, with a FastAPI interface that quantitatively demonstrates how noise reduction improves speech recognition accuracy.

**One-liner (ID):**
> Jarvis S2S adalah pipeline asisten suara modular yang mengutamakan privasi, mencakup VAD, Faster-Whisper ASR, integrasi LLM, dan gTTS yang berjalan sepenuhnya pada CPU lokal, dilengkapi antarmuka FastAPI yang membuktikan secara kuantitatif bagaimana noise reduction meningkatkan akurasi pengenalan suara.

**Highlights Label:** `WHAT IT DOES`

**Highlights (EN):**
> The system is built around four deliberate design choices. A custom energy-based Voice Activity Detection module acts as a gatekeeper, filtering silence and ambient noise before audio reaches the ASR engine and preventing unnecessary computation. Faster-Whisper with int8 quantization delivers three to four times faster inference than the original Whisper implementation while using approximately half the RAM, making local AI genuinely viable on modest hardware. A FastAPI endpoint exposes a RAW versus CLEAN audio comparison mode, where the same voice input is processed with and without FFmpeg noise reduction, providing a quantitative demonstration of how signal quality directly affects transcription accuracy. Finally, a sliding window conversation memory of eight messages ensures the LLM responds with context awareness across multiple turns without overflowing its context window.

**Highlights (ID):**
> Sistem ini dibangun di atas empat keputusan desain yang disengaja. Modul Voice Activity Detection berbasis energi kustom berfungsi sebagai penjaga gerbang, menyaring keheningan dan kebisingan sekitar sebelum audio mencapai mesin ASR sehingga mencegah komputasi yang tidak perlu. Faster-Whisper dengan kuantisasi int8 menghasilkan inferensi tiga hingga empat kali lebih cepat dari implementasi Whisper orisinal sambil menggunakan sekitar setengah RAM, menjadikan AI lokal benar-benar layak pada perangkat keras sederhana. Sebuah endpoint FastAPI menghadirkan mode perbandingan audio RAW versus CLEAN, di mana input suara yang sama diproses dengan dan tanpa noise reduction FFmpeg, memberikan demonstrasi kuantitatif tentang bagaimana kualitas sinyal secara langsung memengaruhi akurasi transkripsi. Terakhir, memori percakapan sliding window sebesar delapan pesan memastikan LLM merespons dengan kesadaran konteks di berbagai giliran tanpa melebihi batas konteksnya.

**What I Learned Label:** `WHAT I LEARNED`

**What I Learned (EN):**
> This project clarified something important: running AI at the edge is fundamentally a design problem, not merely a performance problem. Every architectural decision, from the 16kHz sample rate grounded in Nyquist theory to int8 quantization, mono audio, and peak-energy VAD, was a deliberate trade-off between accuracy and resource usage. Working under real hardware constraints forced a level of intentionality that unconstrained development rarely demands.

**What I Learned (ID):**
> Proyek ini memperjelas sesuatu yang penting: menjalankan AI di edge pada dasarnya adalah masalah desain, bukan sekadar masalah performa. Setiap keputusan arsitektur, mulai dari sample rate 16kHz yang berlandaskan teori Nyquist hingga kuantisasi int8, audio mono, dan VAD berbasis peak energy, merupakan trade-off yang disengaja antara akurasi dan penggunaan sumber daya. Bekerja di bawah keterbatasan hardware nyata memaksa tingkat kesengajaan yang jarang dituntut oleh pengembangan tanpa batasan.

**Metadata Box:**
```
Type    Work Assignment — Individual
Org     Telkom Indonesia BigBox
Role    Sole Developer
Stack   Python · Faster-Whisper · FastAPI · gTTS · PyAudio · FFmpeg · Docker
```

---

## SLIDE 08 — PROJECT 4: SHROOMIFY
*(Dua slide)*

---

### SLIDE 08A — SHROOMIFY: HOOK

**Layout:** Kiri: hook statement dan context. Kanan: screenshot aplikasi dengan label hasil (green Edible / red Poisonous di atas foto jamur).

**Visual Notes:**
- Screenshot app di kanan adalah visual terkuat — beri frame mockup Android
- Green label `#65BD8A` dan red label `#D33336` harus terlihat jelas
- Ini slide paling visual dari seluruh portofolio — manfaatkan

*Section Label:* `PROJECT 04 — SHROOMIFY`

**Group Project Notice Box (tampilkan sebagai info banner):**

EN: `GROUP PROJECT — Kelompok 13, Computer Vision Course Semester 5. My contributions: entire ML pipeline + full Android application.`

ID: `PROYEK KELOMPOK — Kelompok 13, Mata Kuliah Computer Vision Semester 5. Kontribusi saya: seluruh ML pipeline + aplikasi Android lengkap.`

**Headline (EN):**
```
Can a smartphone camera
save your life?
[Display, 48pt, Bold, #FFFFFF]
```

**Headline (ID):**
```
Bisakah kamera smartphone
menyelamatkan nyawa Anda?
[Display, 48pt, Bold, #FFFFFF]
```

**Context Paragraph (EN):**
> Every year, people are poisoned by mushrooms they believed were safe to eat. In rural Indonesia, where foragers encounter wild fungi far from any expert, the cost of being wrong can be fatal. Shroomify classifies any mushroom as edible or poisonous in real time, directly through the device camera, with no internet connection required.

**Context Paragraph (ID):**
> Setiap tahun, orang-orang keracunan jamur yang mereka yakini aman untuk dimakan. Di pedesaan Indonesia, di mana para pencari jamur menjumpai fungi liar jauh dari ahli mana pun, biaya kesalahan bisa sangat fatal. Shroomify mengklasifikasikan jamur apa pun sebagai dapat dimakan atau beracun secara real time, langsung melalui kamera perangkat, tanpa memerlukan koneksi internet sama sekali.

---

### SLIDE 08B — SHROOMIFY: TECHNICAL AND LEARNING

**Layout:** Dua kolom. Kiri: My Role dan Technical highlights. Kanan: What I Learned dan metadata.

*Section Label:* `PROJECT 04 — SHROOMIFY`

**My Role Label:** `MY ROLE`

**One-liner (EN):**
> MobileNetV4, Google's 2024 state-of-the-art efficient architecture, was fine-tuned for binary mushroom toxicity classification, exported as a TorchScript bundle, and deployed on Android with CameraX for frame-by-frame live inference — fully offline.

**One-liner (ID):**
> MobileNetV4, arsitektur efisien mutakhir Google tahun 2024, di-fine-tune untuk klasifikasi toksisitas jamur secara biner, diekspor sebagai TorchScript bundle, dan di-deploy di Android dengan CameraX untuk inferensi langsung per frame, sepenuhnya secara offline.

**Highlights Label:** `WHAT IT DOES`

**Highlights (EN):**
> The machine learning pipeline followed a two-phase transfer learning strategy. In the first phase, the MobileNetV4 backbone was frozen and only the custom classification head was trained, allowing the model to adapt to the mushroom domain without losing its pre-trained feature extraction capabilities. In the second phase, layers beyond index 100 were unfrozen for fine-tuning at a lower learning rate, with early stopping and learning rate reduction on plateau to prevent overfitting. The trained model was then converted from Keras to TorchScript format for deployment, a deliberate pivot that resulted in cleaner Android integration through the PyTorch Mobile library.

**Highlights (ID):**
> Pipeline machine learning mengikuti strategi two-phase transfer learning. Pada fase pertama, backbone MobileNetV4 dibekukan dan hanya classification head kustom yang dilatih, memungkinkan model beradaptasi dengan domain jamur tanpa kehilangan kemampuan ekstraksi fitur yang telah dipelajari sebelumnya. Pada fase kedua, lapisan di luar indeks 100 dibebaskan untuk fine-tuning pada learning rate yang lebih rendah, dengan early stopping dan pengurangan learning rate saat plateau untuk mencegah overfitting. Model yang telah dilatih kemudian dikonversi dari format Keras ke TorchScript untuk deployment, sebuah keputusan yang menghasilkan integrasi Android yang lebih bersih melalui library PyTorch Mobile.

**What I Learned Label:** `WHAT I LEARNED`

**What I Learned (EN):**
> The most significant decision in this project was not the model architecture, but a user experience choice: displaying results as color-coded labels, green for edible and red for poisonous, with no additional text required. In a potentially dangerous situation, cognitive load is a safety concern. That single design decision taught me more about user-centered thinking than any formal instruction. It reinforced that technical correctness and human clarity are equally important, and that sometimes the most meaningful engineering contribution is knowing what to leave out.

**What I Learned (ID):**
> Keputusan paling signifikan dalam proyek ini bukan pada arsitektur modelnya, melainkan pada pilihan pengalaman pengguna: menampilkan hasil sebagai label berkode warna, hijau untuk dapat dimakan dan merah untuk beracun, tanpa teks tambahan yang diperlukan. Dalam situasi yang berpotensi berbahaya, beban kognitif adalah perhatian keselamatan yang nyata. Satu keputusan desain tersebut mengajarkan saya lebih banyak tentang pemikiran yang berpusat pada pengguna daripada instruksi formal mana pun. Hal itu memperkuat keyakinan bahwa ketepatan teknis dan kejelasan bagi manusia sama pentingnya, dan bahwa terkadang kontribusi engineering yang paling bermakna adalah mengetahui apa yang harus ditinggalkan.

**Metadata Box:**
```
Type      Group Project — Kelompok 13, Computer Vision Course
Role      ML Engineer + Android Developer
Stack     Python · TensorFlow/Keras · PyTorch Mobile · Android · Kotlin · CameraX
Duration  October – December 2025
```

---

## SLIDE 09 — ORGANIZATIONAL EXPERIENCE

**Layout:** Intro paragraph di atas. Dua kolom di bawah: kiri Leadership and Event, kanan Content and Media. Cards per pengalaman.

**Visual Notes:**
- Dua kolom dengan subtle divider vertikal di tengah
- Setiap card: compact, border kiri accent color, tahun sebagai label kecil di atas
- Leadership: accent `#00D4FF`. Content: accent `#39FF14`

*Section Label:* `ORGANIZATIONAL EXPERIENCE`

**Intro Paragraph (EN):**
> My work does not stop at a code editor. Across the past two years, I have taken on roles that sit far outside a typical engineering profile — leading large operational teams, representing my university to international delegations, organizing multi-stakeholder events, and producing digital content at scale. These experiences have directly shaped how I think about communication, coordination, and the human side of any system I build.

**Intro Paragraph (ID):**
> Pekerjaan saya tidak berhenti di depan code editor. Selama dua tahun terakhir, saya mengambil peran yang jauh di luar profil rekayasa tipikal — memimpin tim operasional berskala besar, mewakili universitas kepada delegasi internasional, menyelenggarakan event dengan banyak pemangku kepentingan, dan memproduksi konten digital dalam jumlah besar. Pengalaman-pengalaman ini secara langsung membentuk cara saya berpikir tentang komunikasi, koordinasi, dan sisi kemanusiaan dari setiap sistem yang saya bangun.

---

**Kolom Kiri — LEADERSHIP AND EVENT**

**Content (EN):**
> As Team Leader at Jakarta Fair 2023, I led and coordinated approximately 70 operational staff across daily 10-hour shifts during a 30-day national-scale event, managing attendance, shift allocation, and on-ground coordination. In November 2024, I served as Global Liaison Officer for delegations from Singapore Polytechnic and Vietnam, handling cross-language communication and guiding academic visits and campus facility tours. As Event Staff at Dev Girls from March to December 2024, I helped organize four major events in collaboration with external partners including Skilvul, and served as the primary person-in-charge for the Exclusive Mentoring program. Earlier, as Event Specialist Staff at KarsaCita from March to May 2023, I managed online events with an average of 50 or more participants per session, coordinating participant communication and internal team logistics.

**Content (ID):**
> Sebagai Team Leader di Jakarta Fair 2023, saya memimpin dan mengoordinasikan sekitar 70 staf operasional dalam shift harian 10 jam selama 30 hari event berskala nasional, mengelola kehadiran, pembagian shift, dan koordinasi lapangan. Pada November 2024, saya menjabat sebagai Global Liaison Officer untuk delegasi dari Singapore Polytechnic dan Vietnam, menangani komunikasi lintas bahasa dan mendampingi kunjungan akademik serta tur fasilitas kampus. Sebagai Event Staff di Dev Girls dari Maret hingga Desember 2024, saya membantu menyelenggarakan empat event besar bersama mitra eksternal termasuk Skilvul, dan menjadi penanggung jawab utama program Exclusive Mentoring. Sebelumnya, sebagai Event Specialist Staff di KarsaCita dari Maret hingga Mei 2023, saya mengelola event daring dengan rata-rata lebih dari 50 peserta per sesi, mengatur komunikasi peserta dan logistik tim internal.

**Experience Cards Kiri:**
```
2023
Jakarta Fair
Team Leader — 70 staff, 30 days, national scale

Nov 2024
Singapore Polytechnic & Vietnam
Global Liaison Officer — international delegation

Mar–Dec 2024
Dev Girls
Event Staff — 4 major events, PIC Exclusive Mentoring x Skilvul

Mar–May 2023
KarsaCita
Event Specialist — online events, 50+ participants/session
```

---

**Kolom Kanan — CONTENT AND MEDIA**

**Content (EN):**
> From May to July 2025, I worked as a Social Media Admin Intern at SF Group Services Enterprise, managing over 1,000 audience interactions across Twitter and LinkedIn while producing more than 150 posts, articles, and brand captions in support of the JetDigital.Pro rebranding initiative. From March to June 2025, I served as Content Planner Intern at PT Magnet Aroma Internasional, developing over 50 content strategies and campaign concepts including interactive formats such as polling, quizzes, and storytelling, while also leading the content planning team. At Turbomaxx from May to June 2025, I worked as a Copywriter Intern producing more than 15 Instagram and TikTok campaign briefs and serving as the person-in-charge for several social media campaigns from production through to publication.

**Content (ID):**
> Dari Mei hingga Juli 2025, saya bekerja sebagai Social Media Admin Intern di SF Group Services Enterprise, mengelola lebih dari 1.000 interaksi audiens di Twitter dan LinkedIn sambil memproduksi lebih dari 150 posting, artikel, dan caption brand dalam mendukung inisiatif rebranding JetDigital.Pro. Dari Maret hingga Juni 2025, saya menjabat sebagai Content Planner Intern di PT Magnet Aroma Internasional, mengembangkan lebih dari 50 strategi konten dan konsep campaign termasuk format interaktif seperti polling, kuis, dan storytelling, sekaligus memimpin tim content planner. Di Turbomaxx dari Mei hingga Juni 2025, saya bekerja sebagai Copywriter Intern memproduksi lebih dari 15 brief campaign Instagram dan TikTok serta menjadi penanggung jawab beberapa campaign media sosial dari tahap produksi hingga publikasi.

**Experience Cards Kanan:**
```
May–Jul 2025
SF Group Services Enterprise
Social Media Admin Intern — 1,000+ interactions, 150+ content pieces

Mar–Jun 2025
PT Magnet Aroma Internasional
Content Planner Intern — 50+ campaign strategies, led content team

May–Jun 2025
Turbomaxx
Copywriter Intern — 15+ campaign briefs, Instagram & TikTok
```

---

## SLIDE 10 — CLOSING

**Layout:** Full-page dark background. Centered vertically dan horizontally. Konsisten dengan cover.

**Visual Notes:**
- Sama dengan slide cover: dark background, thin accent line, minimal
- Bisa tambahkan subtle call-to-action underline pada kontak

*Content:*

**EN:**
```
Four projects. Two national research organizations.
One consistent thread.
[Display, 36pt, Bold, #FFFFFF]

[gap 24px]

I build systems that live at the boundary between
technical complexity and human usability,
and I am genuinely just getting started.
[Body Italic, 18pt, #FFFFFF, opacity 85%]

[gap 40px]

I am applying to Apple Developer Academy because I believe
the next step in my growth is learning to make the human side
of my work as strong as the technical side.
[Body, 15pt, #8B949E]

[gap 48px]

GANIA RAFIDAH HUWAIDA
[14pt, SemiBold, #FFFFFF]

gania.rafida12@gmail.com  ·  088901660277
github.com/gnieerfd  ·  clips.id/portofolio-gania
[12pt, Regular, #8B949E]
```

**ID:**
```
Empat proyek. Dua lembaga riset nasional.
Satu benang merah.
[Display, 36pt, Bold, #FFFFFF]

[gap 24px]

Saya membangun sistem yang hidup di batas antara
kompleksitas teknis dan kemudahan penggunaan bagi manusia,
dan saya sungguh baru saja memulai.
[Body Italic, 18pt, #FFFFFF, opacity 85%]

[gap 40px]

Saya mendaftar ke Apple Developer Academy karena percaya
bahwa langkah selanjutnya dalam pertumbuhan saya adalah belajar
membuat sisi kemanusiaan dari pekerjaan saya sekuat sisi teknisnya.
[Body, 15pt, #8B949E]

[gap 48px]

GANIA RAFIDAH HUWAIDA
[14pt, SemiBold, #FFFFFF]

gania.rafida12@gmail.com  ·  088901660277
github.com/gnieerfd  ·  clips.id/portofolio-gania
[12pt, Regular, #8B949E]
```

---

## ASSETS CHECKLIST UNTUK FIGMA

### Screenshot yang perlu disiapkan
```
[ ] Dashboard Enerlytics — dark theme, chart aktif, KPI cards terisi
[ ] ChargeSim GUI — animated power graph + tampilan multi-CP
[ ] Shroomify app — green "Edible" label overlay di atas foto jamur
[ ] Shroomify app — red "Poisonous" label overlay di atas foto jamur
[ ] Jarvis S2S — opsional, terminal output atau FastAPI /docs
```

### Logo dan ikon tools (semua open license)
```
Tech Stack:
[ ] Python          [ ] Flask           [ ] scikit-learn
[ ] XGBoost         [ ] TensorFlow      [ ] PyTorch
[ ] Android         [ ] Kotlin          [ ] FastAPI
[ ] MySQL           [ ] Docker          [ ] FFmpeg

Institusi:
[ ] BRIN logo       [ ] Telkom Indonesia logo
[ ] Universitas Brawijaya logo
[ ] Microsoft Azure logo (untuk sertifikasi)
```

### Ikon UI (gunakan Heroicons, Lucide, atau Phosphor Icons)
```
[ ] Email icon      [ ] Phone icon      [ ] GitHub icon
[ ] Link icon       [ ] Medal icon      [ ] Star icon
[ ] Certificate icon [ ] Chevron / Arrow
```

---

## SLIDE SEQUENCE SUMMARY

| No | Slide | Keterangan |
|---|---|---|
| 01 | Cover | Nama, tagline, institusi |
| 02 | About Me | Foto, bio, skill tags, kontak |
| 03 | Achievements and Certifications | 5 achievement cards, 2 cert cards |
| 04A | Enerlytics — Hook | Headline masalah, context |
| 04B | Enerlytics — What It Does | One-liner, highlights |
| 04C | Enerlytics — Impact and Learning | Impact, learning, metadata |
| 05A | ChargeSim — Hook and Features | Headline, context, highlights |
| 05B | ChargeSim — Engineering and Learning | Engineering story, learning, metadata |
| 06 | Jarvis S2S | Hook, pipeline diagram, highlights, learning |
| 07A | Shroomify — Hook | Headline, context, screenshot app |
| 07B | Shroomify — Technical and Learning | Role, highlights, learning, metadata |
| 08 | Organizational Experience | Intro, leadership cards, content cards |
| 09 | Closing | Statement, kontak |

**Total slides: 13 slides**
*(Bisa dikompres jadi 10–11 jika beberapa proyek digabung dalam satu slide)*
