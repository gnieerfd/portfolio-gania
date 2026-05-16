const projects = [
  {
    id: "enerlytics",
    number: "01 - Featured",
    title: "Enerlytics",
    type: "Individual Internship Project - BRIN",
    badge: "Energy AI",
    summary: "A Flask dashboard for EV charging data. It shows live power metrics, flags unusual values, and compares forecasting models, including my DeepBoost ensemble.",
    tags: ["Python", "Flask", "OCPP 1.6", "XGBoost", "LSTM", "MySQL"],
    images: [
      { src: "assets/images/projects/enerlytics-dashboard.jpeg", alt: "Enerlytics forecasting dashboard with EV charging charts.", caption: "Forecast dashboard for EV charging sessions." },
      { src: "assets/images/projects/enerlytics-login.jpeg", alt: "Enerlytics login screen.", caption: "Login page for the dashboard." }
    ],
    meta: {
      Type: "Individual internship project",
      Org: "BRIN (Badan Riset dan Inovasi Nasional)",
      Role: "Built end-to-end",
      Stack: "Python, Flask, scikit-learn, XGBoost, LSTM, MySQL, Chart.js"
    },
    sections: [
      { title: "My Part", body: "Built the Flask dashboard end-to-end: login-protected pages, CSV/XLSX upload, database loading, KPI cards, daily energy tables, four Chart.js charts, and threshold-based anomaly alerts for voltage, current, and power spikes." },
      { title: "Why It Mattered", body: "Researchers and operators could inspect charging behavior from a browser instead of querying raw MySQL tables. Forecasting also moved capacity planning from intuition to model-backed numbers." },
      { title: "Tools", body: "Python, Flask, Pandas, NumPy, MySQL, Chart.js, OCPP 1.6 WebSocket handling, scikit-learn, XGBoost, CatBoost, LSTM, ARIMA, SVR, ANN, GBDT, and a DeepBoost stacking ensemble." },
      { title: "What I Learned", body: "Energy AI is not only model selection. The useful part is the whole pipeline: messy OCPP data, careful preprocessing, readable metrics, alert language, and a UI that non-ML users can trust." }
    ]
  },
  {
    id: "chargesim",
    number: "02",
    title: "ChargeSim",
    type: "Individual Internship Project - BRIN",
    badge: "IoT - Simulation",
    summary: "A desktop simulator for EV charging research. It runs charger sessions, talks over OCPP 1.6, replays real EV power curves, and tests smart charging logic.",
    tags: ["OCPP 1.6", "PySide6", "asyncio", "DQN / RL", "matplotlib"],
    images: [
      { src: "assets/images/projects/chargesim-client.jpeg", alt: "ChargeSim simulator UI with charging sessions and power graph.", caption: "Charge point simulator screen." },
      { src: "assets/images/projects/chargesim-server.jpeg", alt: "ChargeSim server UI showing smart charging management.", caption: "Central system monitoring screen." }
    ],
    repo: {
      label: "smart-charging-simulator",
      url: "https://github.com/gnieerfd/smart-charging-simulator"
    },
    meta: {
      Type: "Individual internship project",
      Org: "BRIN (Badan Riset dan Inovasi Nasional)",
      Role: "Built end-to-end",
      Stack: "Python, PySide6, OCPP 1.6, asyncio, matplotlib, stable-baselines3, MySQL",
      LOC: "4,000+ lines"
    },
    sections: [
      { title: "My Part", body: "Built both sides of an OCPP 1.6 simulator: charge point clients and a central system server. The app simulates up to 15 sessions, queue tokens, remote start, live power charts, transaction logs, and smart charging limits." },
      { title: "Why It Mattered", body: "The simulator gave the research team a software-only testbed before touching real chargers. It made protocol behavior, load sharing, queue logic, and charger status visible in one repeatable environment." },
      { title: "Tools", body: "Python, PySide6, asyncio, AsyncioPySide6, websockets, ocpp-py, matplotlib, pandas, NumPy, MySQL, stable-baselines3 DQN, gymnasium, and HIOKI measurement data from BMW iX, IONIQ 6, NETA 01, and Toyota bZ4X." },
      { title: "What I Learned", body: "Building the client and server together made OCPP feel concrete. The hardest lesson was concurrency: keeping a Qt GUI responsive while WebSocket traffic, graph redraws, and charging logic run continuously." }
    ]
  },
  {
    id: "jarvis-s2s",
    number: "03",
    title: "Jarvis S2S",
    type: "Individual Internship Project - Telkom Indonesia BigBox",
    badge: "Edge AI - DSP",
    summary: "A local speech-to-speech assistant that can run on a normal CPU. It uses VAD, Faster-Whisper, an LLM response step, and text-to-speech output.",
    tags: ["Faster-Whisper", "FastAPI", "FFmpeg DSP", "gTTS", "Docker"],
    images: [
      { src: "assets/images/projects/jarvis-web.jpeg", alt: "Jarvis S2S web interface showing speech processing result.", caption: "Web interface for upload and transcription tests." },
      { src: "assets/images/projects/jarvis-mobile.jpeg", alt: "Jarvis S2S mobile interface showing speech assistant workflow.", caption: "Mobile layout for the speech assistant flow.", tall: true }
    ],
    repo: {
      label: "Local_Speech-to-Speech_AI-Assistant",
      url: "https://github.com/gnieerfd/Local_Speech-to-Speech_AI-Assistant"
    },
    meta: {
      Type: "Individual internship project",
      Org: "Telkom Indonesia BigBox",
      Role: "Built end-to-end",
      Stack: "Python, Faster-Whisper, FastAPI, gTTS, PyAudio, FFmpeg, Docker"
    },
    sections: [
      { title: "My Part", body: "Built a local speech-to-speech pipeline with microphone capture, custom energy-based VAD, Faster-Whisper ASR, LLM response handling, TTS output, and a FastAPI mode for audio upload experiments." },
      { title: "Why It Mattered", body: "The prototype showed how a privacy-first assistant can run on a normal CPU and compare RAW versus CLEAN audio so the effect of noise reduction on transcription quality is visible." },
      { title: "Tools", body: "Python, PyAudio, NumPy, Faster-Whisper with int8 CPU inference, FFmpeg afftdn noise reduction, FastAPI, Uvicorn, gTTS, Base64 audio responses, Docker, and an 8-message sliding conversation memory." },
      { title: "What I Learned", body: "Edge AI is a design problem as much as a model problem. Every choice, from 16kHz mono audio to VAD thresholds and quantization, changed privacy, latency, accuracy, and hardware limits." }
    ]
  },
  {
    id: "shroomify",
    number: "04",
    title: "Shroomify",
    type: "Computer Vision Course Project - ML Engineer",
    badge: "ML - CV",
    summary: "An offline mushroom classifier that predicts edible or poisonous from camera/gallery input. My focus was the ML pipeline: dataset cleanup, transfer learning, fine-tuning, and model export for mobile inference.",
    tags: ["MobileNetV4", "Transfer Learning", "TorchScript", "TensorFlow/Keras", "PyTorch Mobile"],
    images: [
      { src: "assets/images/projects/shroomify-home.png", alt: "Shroomify Android application showing mushroom classification screen.", caption: "Home screen for mushroom scanning.", tall: true },
      { src: "assets/images/projects/shroomify-camera.png", alt: "Shroomify camera interface on Android.", caption: "Live camera classification screen.", tall: true },
      { src: "assets/images/projects/shroomify-result.png", alt: "Shroomify result screen for mushroom classification.", caption: "Classification result screen.", tall: true }
    ],
    meta: {
      Type: "Group Project - Kelompok 13",
      Role: "ML Engineer",
      Stack: "Python, TensorFlow/Keras, MobileNetV4, TorchScript, PyTorch Mobile, Kaggle fungi dataset",
      Duration: "October - December 2025"
    },
    sections: [
      { title: "My Part", body: "Owned the ML workflow: consolidated scattered edible and poisonous fungi classes into a clean binary dataset, added augmentation, trained MobileNetV4, fine-tuned deeper layers, and exported the model for offline inference." },
      { title: "Why It Mattered", body: "The model made the app useful without internet, which matters in the field where mushrooms are usually found. The green/red prediction pattern kept the result quick to read in a safety-sensitive context." },
      { title: "Tools", body: "Kaggle Edible and Poisonous Fungi dataset, Python, TensorFlow/Keras, ImageDataGenerator augmentation, MobileNetV4, Adam, EarlyStopping, ReduceLROnPlateau, TorchScript .ptl export, and PyTorch Mobile runtime." },
      { title: "What I Learned", body: "I got better at making ML decisions under deployment constraints: when to freeze layers, when to fine-tune, how to avoid overfitting, and why model format can matter as much as model accuracy." }
    ]
  },
  {
    id: "waras",
    number: "05",
    title: "WARAS",
    type: "Business Plan Competition - Finalist PRISMA 2025",
    badge: "Cyber Safety",
    summary: "An AI-based plug-and-play micro-gateway concept for reducing online gambling access on shared networks. It combines DNS/SNI filtering, Random Forest classification, hardware planning, and a full business model.",
    tags: ["Random Forest", "DNS/SNI", "Orange Pi", "Business Model", "Financial Analysis"],
    images: [
      { src: "assets/images/projects/waras-title.jpeg", alt: "WARAS Business Plan Competition finalist title slide.", caption: "WARAS finalist title slide." },
      { src: "assets/images/projects/waras-financial-analysis.jpeg", alt: "WARAS financial analysis slide with business metrics.", caption: "Financial analysis and business feasibility." },
      { src: "assets/images/projects/waras-marketing-strategy.jpeg", alt: "WARAS marketing strategy slide for target market and channels.", caption: "Marketing strategy and target segment." }
    ],
    links: [
      {
        label: "Financial Analysis",
        title: "clips.id/FinancialAnalysisWARAS",
        url: "https://clips.id/FinancialAnalysisWARAS",
        icon: "icon-chart"
      },
      {
        label: "Canva Deck",
        title: "canva.link/t0hs4zbps7vw05r",
        url: "https://canva.link/t0hs4zbps7vw05r",
        icon: "icon-link"
      }
    ],
    meta: {
      Type: "Business Plan Competition",
      Event: "PRISMA 2025 - UIN Sunan Ampel Surabaya",
      Team: "Tim GIN Universitas Brawijaya",
      Result: "Finalist",
      Role: "Product, business, and technical planning"
    },
    sections: [
      { title: "My Part", body: "Helped shape WARAS from a social problem into a product plan: an Orange Pi-based micro-gateway that sits between router and users, extracts DNS/SNI signals, classifies risky domains with Random Forest, and redirects gambling access to a block page." },
      { title: "Why It Mattered", body: "WARAS targets kos owners, schools, and families who need safer shared internet without installing apps on every device. The idea protects many users from one network point while keeping the approach less invasive than reading full HTTPS traffic." },
      { title: "Tools", body: "Business Model Canvas, proposal writing, financial modelling, cost structure, revenue projection, PRISMA competition documents, Orange Pi Zero 3 planning, custom Linux firmware concept, Random Forest, DNS request filtering, SNI-based detection, and Canva pitch materials." },
      { title: "Business Impact", body: "The plan mapped hardware sales at Rp300.000 per unit, premium subscription at Rp20.000 per month, three-year revenue projection of Rp255.000.000, BEP at 101 units, ROI 70.98%, IRR 108.75%, and payback period around 0.34 years." },
      { title: "What I Learned", body: "WARAS trained me to connect technical feasibility, market urgency, privacy, hardware cost, and storytelling. It was not just an AI idea; it had to survive questions about users, partners, pricing, distribution, and why the product should exist." }
    ]
  }
];

const organizations = [
  {
    id: "jakarta-fair",
    group: "Leadership & Event",
    title: "Jakarta Fair 2023",
    role: "Team Leader - Operations",
    period: "Jun - Jul 2023",
    summary: "Led around 70 operational staff during Jakarta Fair shifts, including attendance, schedules, and on-ground coordination.",
    images: [
      { src: "assets/images/organizations/jakarta-fair.jpeg", alt: "Jakarta Fair 2023 operations team activity.", caption: "Operations team during Jakarta Fair 2023." }
    ],
    tags: ["70 staff", "30 days", "Operations", "Leadership"],
    sections: [
      { title: "My Part", body: "Led roughly 70 operational staff across daily Jakarta Fair shifts, handling attendance, shift allocation, on-ground coordination, and quick escalation when field conditions changed." },
      { title: "Why It Mattered", body: "The team had clearer daily coordination during a national-scale event with long shifts and high visitor traffic, helping operations stay organized instead of becoming purely reactive." },
      { title: "How I Worked", body: "Used shift lists, attendance checks, short briefings, direct field communication, and fast handoff between staff groups so people knew where to go and what needed attention." },
      { title: "What I Learned", body: "Leadership is mostly clarity under pressure: simple instructions, calm follow-up, and decisions that keep tired people moving in the same direction." }
    ]
  },
  {
    id: "global-liaison",
    group: "Leadership & Event",
    title: "Global Liaison Officer",
    role: "Singapore Polytechnic & Vietnam Delegation",
    period: "November 2024",
    summary: "Supported campus visits for Singapore Polytechnic and Vietnam delegations, from communication to tour flow.",
    images: [
      { src: "assets/images/organizations/global-liaison-singapore.jpg", alt: "Global Liaison Officer with Singapore Polytechnic delegation.", caption: "Campus visit with Singapore Polytechnic.", tall: true },
      { src: "assets/images/organizations/global-liaison-vietnam.jpg", alt: "Global Liaison Officer with Vietnam delegation.", caption: "Campus visit with Vietnam delegation.", tall: true }
    ],
    tags: ["International delegation", "Communication", "Campus tour", "Coordination"],
    sections: [
      { title: "My Part", body: "Supported Singapore Polytechnic and Vietnam delegation visits, including communication flow, guest guidance, campus tours, academic visit movement, and keeping the schedule understandable for visitors." },
      { title: "Why It Mattered", body: "Delegates could move through the visit with clearer context about the campus, facilities, and agenda. The role helped reduce friction across language, culture, and schedule differences." },
      { title: "How I Worked", body: "Used briefing notes, itinerary tracking, direct coordination with committees, route planning, and simple verbal explanations that kept guests oriented without overloading them." },
      { title: "What I Learned", body: "This role trained me to translate context, not just words. I became more aware of how much hospitality depends on timing, clarity, and reading the room." }
    ]
  },
  {
    id: "dev-girls",
    group: "Leadership & Event",
    title: "Dev Girls",
    role: "Event Staff",
    period: "Mar - Dec 2024",
    summary: "Helped organize Dev Girls events with partners, including Skilvul, and served as PIC for Exclusive Mentoring.",
    images: [
      { src: "assets/images/organizations/devgirls.jpeg", alt: "Dev Girls event session.", caption: "Dev Girls event session." }
    ],
    tags: ["Event", "PIC", "Skilvul", "UI/UX"],
    sections: [
      { title: "My Part", body: "Helped organize Dev Girls programs from March to December 2024, including UI/UX workshops, mentoring sessions, partner coordination with Skilvul, and PIC work for Exclusive Mentoring." },
      { title: "Why It Mattered", body: "Participants got more structured mentoring and event flow, while speakers and partners had clearer preparation needs before the session started." },
      { title: "How I Worked", body: "Handled run-down planning, participant reminders, speaker coordination, mentoring flow checks, and post-event notes so the next activity had fewer repeated issues." },
      { title: "What I Learned", body: "I learned to plan around real attendee behavior. A good event is not only the idea; it is reminders, pacing, backup plans, and knowing what people came to get." }
    ]
  },
  {
    id: "karsacita",
    group: "Leadership & Event",
    title: "KarsaCita",
    role: "Event Specialist Staff",
    period: "Mar - May 2023",
    summary: "Managed online sessions with 50+ participants on average.",
    images: [
      { src: "assets/images/organizations/karsacita.jpg", alt: "KarsaCita event session.", caption: "KarsaCita online event session." },
      { src: "assets/images/organizations/karsacita-certificate.png", alt: "KarsaCita certificate.", caption: "KarsaCita certificate." }
    ],
    tags: ["Online event", "50+ participants", "Talkshow", "Podcast"],
    sections: [
      { title: "My Part", body: "Managed online KarsaCita sessions with 50+ participants on average, including talkshows, Katalk sessions, mental health podcast programs, participant communication, and internal coordination." },
      { title: "Why It Mattered", body: "The sessions ran with clearer joining instructions and smoother communication, helping participants follow the program without confusion before or during the event." },
      { title: "How I Worked", body: "Prepared online run-downs, participant messages, speaker/session needs, attendance checks, and coordination notes between event staff." },
      { title: "What I Learned", body: "KarsaCita taught me that online events succeed before they go live. Clear pre-event messages and internal alignment can prevent most visible problems." }
    ]
  },
  {
    id: "bem-filkom",
    group: "Leadership & Administration",
    title: "BEM FILKOM UB 2024",
    role: "Core Team & Administrative Staff",
    period: "2024",
    summary: "Supported BEM FILKOM UB through Leader of Tomorrow core-team work, PUMK accountability, event records, and administrative coordination.",
    images: [
      { src: "assets/images/organizations/best-staff-bem.jpeg", alt: "Best Staff recognition for BEM FILKOM UB.", caption: "Best Staff recognition." },
      { src: "assets/images/organizations/best-staff-bem2.jpeg", alt: "BEM FILKOM UB recognition detail.", caption: "BEM FILKOM UB recognition." }
    ],
    tags: ["Best Staff", "Core Team", "PUMK", "LPJ", "Administration"],
    sections: [
      { title: "My Part", body: "Served in BEM FILKOM UB 2024 with direct involvement in Leader of Tomorrow 6.0 as Core Team and handled administrative responsibility as Pengguna Anggaran for Leader of Tomorrow Chapter 2." },
      { title: "Why It Mattered", body: "Helped keep student programs accountable beyond the event day: attendance, funding documents, spending records, LPJ flow, and formal files had to be complete enough for faculty-level review." },
      { title: "How I Worked", body: "Worked with official memos, presensi files, PUMK accountability sheets, LPJ documents, transfer archives, Google Sheets or Excel-style tables, PDF exports, and WhatsApp coordination with responsible committees." },
      { title: "For Students", body: "The administrative work supported programs such as Leader of Tomorrow, Career Visit, PKKMB, MSIB Talkshow, HOLOGY, CodeExploit, Raion activities, RECON, ROBIN, RODI, donor blood programs, and entrepreneurship events." },
      { title: "What I Learned", body: "BEM made me more precise with responsibility. I learned that good leadership also means clean files, correct names, traceable money flow, clear deadlines, and trust that can be audited." }
    ]
  },
  {
    id: "sf-group",
    group: "Content & Media",
    title: "SF Group Services Enterprise",
    role: "Social Media Admin Intern",
    period: "May - Jul 2025",
    summary: "Handled 1,000+ audience interactions and helped produce 150+ posts, articles, and captions for JetDigital.Pro.",
    images: [],
    tags: ["1,000+ interactions", "150+ content pieces", "LinkedIn", "Twitter"],
    sections: [
      { title: "My Part", body: "Handled 1,000+ audience interactions across Twitter and LinkedIn and helped produce 150+ posts, articles, and brand captions for JetDigital.Pro content and rebranding work." },
      { title: "Why It Mattered", body: "Audience responses became more consistent, and the content pipeline supported a steadier public presence during the brand communication period." },
      { title: "How I Worked", body: "Tracked interactions, drafted captions and articles, handled LinkedIn/Twitter content, checked tone consistency, and coordinated with the content team." },
      { title: "What I Learned", body: "This role sharpened my sense of tone. In public-facing content, small inconsistencies can make a brand feel less careful than it is." }
    ]
  },
  {
    id: "magnet-aroma",
    group: "Content & Media",
    title: "PT Magnet Aroma Internasional",
    role: "Content Planner Intern",
    period: "Mar - Jun 2025",
    summary: "Developed 50+ content ideas and campaign concepts, including polling, quizzes, and storytelling formats.",
    images: [
      { src: "assets/images/organizations/instagram-pheromagnetic.jpg", alt: "Instagram content preview for PT Magnet Aroma Internasional.", caption: "Instagram content preview for PT Magnet Aroma Internasional.", tall: true }
    ],
    tags: ["50+ strategies", "Campaign", "Content planning", "Team lead"],
    sections: [
      { title: "My Part", body: "Developed 50+ content ideas and campaign concepts for PT Magnet Aroma Internasional, including polling, quiz, storytelling, and product education formats." },
      { title: "Why It Mattered", body: "The content team had more campaign options to choose from and a clearer planning base for turning product messages into audience-friendly posts." },
      { title: "How I Worked", body: "Used content calendars, idea banks, campaign mapping, format selection, social media observation, and planning discussions with the team." },
      { title: "What I Learned", body: "I learned that the same message can land very differently depending on format, timing, and how directly it answers what the audience is already wondering." }
    ]
  },
  {
    id: "turbomaxx",
    group: "Content & Media",
    title: "Turbomaxx",
    role: "Copywriter Intern",
    period: "May - Jun 2025",
    summary: "Produced 15+ Instagram and TikTok campaign briefs and became PIC for several campaign posts.",
    images: [
      { src: "assets/images/organizations/instagram-turbomax.jpg", alt: "Instagram campaign preview for Turbomaxx.", caption: "Instagram campaign preview for Turbomaxx.", tall: true }
    ],
    tags: ["15+ briefs", "Copywriting", "Instagram", "TikTok"],
    sections: [
      { title: "My Part", body: "Produced 15+ Instagram and TikTok campaign briefs for Turbomaxx and served as PIC for several campaign posts from planning through publication." },
      { title: "Why It Mattered", body: "The briefs gave the creative team clearer direction on hooks, message angle, and platform format, making campaign execution easier to coordinate." },
      { title: "How I Worked", body: "Wrote campaign briefs, short-form copy, hook options, platform-specific captions, and coordinated with the social media workflow." },
      { title: "What I Learned", body: "Copywriting trained me to cut extra words. If the point is not visible quickly, the audience will scroll before the campaign gets a chance." }
    ]
  },
  {
    id: "raja-brawijaya",
    group: "Content & Media",
    title: "Raja Brawijaya 2025",
    role: "Internal IT Staff",
    period: "Jul - Sep 2025",
    summary: "Processed and checked 800+ participant records for attendance and event reporting.",
    images: [
      { src: "assets/images/organizations/raja-brawijaya-qr.jpg", alt: "QR attendance design for Raja Brawijaya participant attendance.", caption: "QR attendance design." },
      { src: "assets/images/organizations/raja-brawijaya-pit.jpeg", alt: "Raja Brawijaya 2025 PIT session.", caption: "PIT session at Raja Brawijaya 2025." },
      { src: "assets/images/organizations/raja-brawijaya-venue.jpeg", alt: "Raja Brawijaya 2025 venue session.", caption: "Raja Brawijaya 2025 venue session." }
    ],
    tags: ["800+ records", "Attendance", "Validation", "Reporting"],
    sections: [
      { title: "My Part", body: "Worked as Internal IT staff for Raja Brawijaya 2025, processing and checking 800+ participant records for attendance, QR usage, validation, and reporting needs." },
      { title: "Why It Mattered", body: "Cleaner participant data helped the event team reduce friction during attendance checks and reporting, especially when many participants had to be processed quickly." },
      { title: "How I Worked", body: "Handled spreadsheet validation, QR attendance preparation, missing-data checks, participant record cleanup, and coordination with the event operations flow." },
      { title: "What I Learned", body: "This role made data hygiene feel very concrete. One small record error can slow down real people at a real event gate." }
    ]
  }
];

const sectionLinks = document.querySelectorAll("[data-section]");
const sections = document.querySelectorAll("#site-shell section");
const navTabs = document.querySelector("[data-nav-tabs]");
const navLinks = document.querySelector("[data-nav-links]");
const navTabLinks = navLinks ? Array.from(navLinks.querySelectorAll("a[data-section]")) : [];
const navHoverBg = document.querySelector("[data-nav-hover-bg]");
const navActiveLine = document.querySelector("[data-nav-active-line]");
const navHoverLine = document.querySelector("[data-nav-hover-line]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navToggleUse = navToggle?.querySelector("use");
const projectList = document.querySelector("[data-project-list]");
const projectPrev = document.querySelector("[data-project-prev]");
const projectNext = document.querySelector("[data-project-next]");
const projectDots = document.querySelector("[data-project-dots]");
const organizationList = document.querySelector("[data-organization-list]");
const organizationPrev = document.querySelector("[data-organization-prev]");
const organizationNext = document.querySelector("[data-organization-next]");
const organizationDots = document.querySelector("[data-organization-dots]");
const siteShell = document.getElementById("site-shell");
const detailView = document.getElementById("detail-view");
const themeToggle = document.querySelector("[data-theme-toggle]");
const THEME_STORAGE_KEY = "portfolio-theme";

let themeAudioContext = null;
let themeAudioBuffer = null;
let lastThemeSound = 0;

function getStoredTheme() {
  try {
    const theme = localStorage.getItem(THEME_STORAGE_KEY);
    return theme === "dark" || theme === "light" ? theme : null;
  } catch {
    return null;
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    /* storage can be unavailable in private browsing */
  }
}

function getThemeAudioContext() {
  const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextConstructor) return null;
  if (!themeAudioContext) {
    themeAudioContext = new AudioContextConstructor();
  }
  if (themeAudioContext.state === "suspended") {
    themeAudioContext.resume();
  }
  return themeAudioContext;
}

function getThemeAudioBuffer(audioContext) {
  if (themeAudioBuffer && themeAudioBuffer.sampleRate === audioContext.sampleRate) {
    return themeAudioBuffer;
  }

  const rate = audioContext.sampleRate;
  const length = Math.floor(rate * 0.006);
  const buffer = audioContext.createBuffer(1, length, rate);
  const channel = buffer.getChannelData(0);

  for (let i = 0; i < length; i += 1) {
    const t = i / length;
    const sine = Math.sin(2 * Math.PI * 3400 * t);
    const noise = Math.random() * 2 - 1;
    channel[i] = (sine * 0.6 + noise * 0.4) * (1 - t) ** 3;
  }

  themeAudioBuffer = buffer;
  return buffer;
}

function playThemeTick() {
  const now = performance.now();
  if (now - lastThemeSound < 80) return;
  lastThemeSound = now;

  try {
    const audioContext = getThemeAudioContext();
    if (!audioContext) return;

    const source = audioContext.createBufferSource();
    const gain = audioContext.createGain();
    source.buffer = getThemeAudioBuffer(audioContext);
    gain.gain.value = 0.08;
    source.connect(gain);
    gain.connect(audioContext.destination);
    source.start();
  } catch {
    /* the visual theme toggle still works without audio */
  }
}

function applyTheme(theme, options = {}) {
  const isDark = theme === "dark";
  document.documentElement.classList.toggle("dark", isDark);
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;

  themeToggle?.setAttribute("aria-pressed", String(isDark));
  themeToggle?.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");

  if (options.persist) saveTheme(theme);
  if (options.sound) playThemeTick();
}

const initialTheme = getStoredTheme() || (document.documentElement.classList.contains("dark") ? "dark" : "light");
applyTheme(initialTheme);

themeToggle?.addEventListener("click", () => {
  const nextTheme = document.documentElement.classList.contains("dark") ? "light" : "dark";
  applyTheme(nextTheme, { persist: true, sound: true });
});

const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
const handleSystemThemeChange = (event) => {
  if (!getStoredTheme()) {
    applyTheme(event.matches ? "dark" : "light");
  }
};

if (systemTheme.addEventListener) {
  systemTheme.addEventListener("change", handleSystemThemeChange);
} else if (systemTheme.addListener) {
  systemTheme.addListener(handleSystemThemeChange);
}

function canAnimateNavTabs() {
  return navTabs && window.matchMedia("(min-width: 861px)").matches;
}

function placeNavTabElement(element, link, type = "line") {
  if (!element || !link || !navTabs || !canAnimateNavTabs()) return;

  const navRect = navTabs.getBoundingClientRect();
  const linkRect = link.getBoundingClientRect();
  const x = linkRect.left - navRect.left;
  const y = type === "bg"
    ? linkRect.top - navRect.top
    : linkRect.bottom - navRect.top - 2;

  element.style.width = `${linkRect.width}px`;
  element.style.height = type === "bg" ? `${linkRect.height}px` : "2px";
  element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
}

function getActiveNavTab() {
  return navTabLinks.find((link) => link.classList.contains("active")) || navTabLinks[0];
}

function updateActiveNavIndicator() {
  if (!canAnimateNavTabs()) {
    navTabs?.classList.remove("ready", "is-hovering");
    return;
  }

  const activeLink = getActiveNavTab();
  if (!activeLink) return;

  placeNavTabElement(navActiveLine, activeLink);
  navTabs.classList.add("ready");
}

function showNavHover(link) {
  if (!canAnimateNavTabs()) return;
  placeNavTabElement(navHoverBg, link, "bg");
  placeNavTabElement(navHoverLine, link);
  navTabs.classList.add("is-hovering");
}

function hideNavHover() {
  navTabs?.classList.remove("is-hovering");
}

function setupNavTabs() {
  if (!navTabs || !navTabLinks.length) return;

  navTabLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => showNavHover(link));
    link.addEventListener("focus", () => showNavHover(link));
    link.addEventListener("blur", () => {
      if (!navTabs.contains(document.activeElement)) hideNavHover();
    });
  });

  navTabs.addEventListener("mouseleave", hideNavHover);
  window.addEventListener("resize", () => {
    window.requestAnimationFrame(updateActiveNavIndicator);
  });
  window.addEventListener("load", updateActiveNavIndicator);
  updateActiveNavIndicator();
}

function icon(name) {
  return `<svg aria-hidden="true"><use href="#${name}"></use></svg>`;
}

function renderTags(tags, className) {
  return tags.map((tag) => `<span class="${className}">${tag}</span>`).join("");
}

function getCarouselStops(list, cards) {
  const maxScrollLeft = Math.max(0, list.scrollWidth - list.clientWidth);
  if (!cards.length || maxScrollLeft <= 1) return [0];

  const stops = [];
  cards.forEach((card) => {
    const position = Math.min(card.offsetLeft, maxScrollLeft);
    if (!stops.some((stop) => Math.abs(stop - position) <= 2)) {
      stops.push(position);
    }
  });

  if (!stops.length || stops[0] > 1) {
    stops.unshift(0);
  }

  const lastIndex = stops.length - 1;
  if (Math.abs(stops[lastIndex] - maxScrollLeft) > 2) {
    stops.push(maxScrollLeft);
  } else {
    stops[lastIndex] = maxScrollLeft;
  }

  return stops;
}

function getActiveCarouselStop(list, stops) {
  if (!stops.length) return 0;

  const maxScrollLeft = Math.max(0, list.scrollWidth - list.clientWidth);
  if (Math.abs(list.scrollLeft - maxScrollLeft) <= 2) {
    return stops.length - 1;
  }

  const distances = stops.map((stop) => Math.abs(stop - list.scrollLeft));
  return distances.indexOf(Math.min(...distances));
}

function syncCarouselDots(container, stops, name, attr) {
  const shouldHide = stops.length <= 1;
  container.hidden = shouldHide;
  if (shouldHide) {
    container.innerHTML = "";
    return;
  }

  if (container.querySelectorAll(".gallery-dot").length === stops.length) return;

  container.innerHTML = stops.map((_, index) => `
    <button
      class="gallery-dot"
      type="button"
      aria-label="Go to ${name} slide ${index + 1}"
      ${attr}="${index}"
    ></button>
  `).join("");
}

function renderProjectList() {
  projectList.innerHTML = projects.map((project) => `
    <a class="project-card" href="#project-${project.id}" aria-label="Open ${project.title} detail page">
      <div class="project-thumb">
        <img src="${project.images[0].src}" alt="${project.images[0].alt}" loading="lazy">
      </div>
      <div class="project-content">
        <div class="project-num">${project.number}</div>
        <div class="project-name">${project.title}</div>
        <div class="project-type">${project.type}</div>
        <div class="project-desc">${project.summary}</div>
        <div class="project-meta">${renderTags(project.tags, "project-tag")}</div>
      </div>
      <div class="project-right">
        <div class="project-badge">${project.badge}</div>
      </div>
    </a>
  `).join("");
}

function getProjectCards() {
  return Array.from(projectList.querySelectorAll(".project-card"));
}

function getActiveProjectIndex() {
  return getActiveCarouselStop(projectList, getCarouselStops(projectList, getProjectCards()));
}

function updateProjectCarousel() {
  const stops = getCarouselStops(projectList, getProjectCards());
  const activeIndex = getActiveCarouselStop(projectList, stops);
  syncCarouselDots(projectDots, stops, "project", "data-project-dot");

  projectPrev.disabled = activeIndex <= 0;
  projectNext.disabled = activeIndex >= stops.length - 1;

  projectDots.querySelectorAll(".gallery-dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === activeIndex);
    dot.setAttribute("aria-current", index === activeIndex ? "true" : "false");
  });
}

function scrollToProject(index) {
  const stops = getCarouselStops(projectList, getProjectCards());
  const target = stops[Math.max(0, Math.min(stops.length - 1, index))];
  projectList.scrollTo({ left: target || 0, behavior: "smooth" });
}

function setupProjectCarousel() {
  projectPrev.addEventListener("click", () => {
    scrollToProject(Math.max(0, getActiveProjectIndex() - 1));
  });

  projectNext.addEventListener("click", () => {
    scrollToProject(getActiveProjectIndex() + 1);
  });

  projectDots.addEventListener("click", (event) => {
    const dot = event.target.closest("[data-project-dot]");
    if (!dot) return;
    scrollToProject(Number(dot.dataset.projectDot));
  });

  projectList.addEventListener("scroll", () => {
    window.requestAnimationFrame(updateProjectCarousel);
  });

  window.addEventListener("resize", updateProjectCarousel);
  updateProjectCarousel();
}

function renderOrganizationList() {
  organizationList.innerHTML = organizations.map((org) => {
    const hasMedia = org.images.length > 0;
    const media = hasMedia
      ? `<div class="org-thumb"><img src="${org.images[0].src}" alt="${org.images[0].alt}" loading="lazy"></div>`
      : "";
    const action = hasMedia
      ? `
        <div class="project-right">
          <div class="project-badge">${org.group}</div>
        </div>
      `
      : "";

    return `
      <a class="org-card ${hasMedia ? "" : "no-media"}" href="#organization-${org.id}" aria-label="Open ${org.title} detail page">
        ${media}
        <div class="org-content">
          <div class="org-card-period">${org.period}</div>
          <div class="org-card-role">${org.title}</div>
          <div class="org-card-org">${org.role}</div>
          <p class="org-card-desc">${org.summary}</p>
          <div class="org-card-tags">${renderTags(org.tags, "org-tag")}</div>
        </div>
        ${action}
      </a>
    `;
  }).join("");
}

function getOrganizationCards() {
  return Array.from(organizationList.querySelectorAll(".org-card"));
}

function getActiveOrganizationIndex() {
  return getActiveCarouselStop(organizationList, getCarouselStops(organizationList, getOrganizationCards()));
}

function updateOrganizationCarousel() {
  const stops = getCarouselStops(organizationList, getOrganizationCards());
  const activeIndex = getActiveCarouselStop(organizationList, stops);
  syncCarouselDots(organizationDots, stops, "organization", "data-organization-dot");

  organizationPrev.disabled = activeIndex <= 0;
  organizationNext.disabled = activeIndex >= stops.length - 1;

  organizationDots.querySelectorAll(".gallery-dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === activeIndex);
    dot.setAttribute("aria-current", index === activeIndex ? "true" : "false");
  });
}

function scrollToOrganization(index) {
  const stops = getCarouselStops(organizationList, getOrganizationCards());
  const target = stops[Math.max(0, Math.min(stops.length - 1, index))];
  organizationList.scrollTo({ left: target || 0, behavior: "smooth" });
}

function setupOrganizationCarousel() {
  organizationPrev.addEventListener("click", () => {
    scrollToOrganization(Math.max(0, getActiveOrganizationIndex() - 1));
  });

  organizationNext.addEventListener("click", () => {
    scrollToOrganization(getActiveOrganizationIndex() + 1);
  });

  organizationDots.addEventListener("click", (event) => {
    const dot = event.target.closest("[data-organization-dot]");
    if (!dot) return;
    scrollToOrganization(Number(dot.dataset.organizationDot));
  });

  organizationList.addEventListener("scroll", () => {
    window.requestAnimationFrame(updateOrganizationCarousel);
  });

  window.addEventListener("resize", updateOrganizationCarousel);
  updateOrganizationCarousel();
}

function setupTypewriter() {
  const target = document.querySelector("[data-typewriter]");
  if (!target) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const words = target.dataset.typewriterWords.split(",").map((word) => word.trim()).filter(Boolean);
  if (prefersReducedMotion || words.length < 2) {
    target.textContent = words[0] || target.textContent;
    return;
  }

  let wordIndex = 0;
  let charIndex = words[0].length;
  let deleting = false;

  const tick = () => {
    const word = words[wordIndex];

    if (deleting) {
      charIndex -= 1;
      target.textContent = word.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    } else {
      charIndex += 1;
      target.textContent = word.slice(0, charIndex);
      if (charIndex === word.length) {
        window.setTimeout(() => {
          deleting = true;
        }, 1100);
      }
    }

    const delay = deleting ? 42 : 70;
    window.setTimeout(tick, delay);
  };

  window.setTimeout(() => {
    deleting = true;
    tick();
  }, 1300);
}

function closeMobileNav() {
  navLinks?.classList.remove("open");
  navToggle?.setAttribute("aria-expanded", "false");
  navToggleUse?.setAttribute("href", "#icon-menu");
}

function showSection(id, updateHash = true) {
  const target = document.getElementById(id) || document.getElementById("home");

  siteShell.hidden = false;
  detailView.hidden = true;
  sections.forEach((section) => section.classList.remove("active"));
  target.classList.add("active");

  sectionLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.section === target.id);
  });
  window.requestAnimationFrame(updateActiveNavIndicator);

  document.title = "Gania Rafidah Huwaida - Portfolio";
  closeMobileNav();
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (target.id === "projects") {
    window.requestAnimationFrame(updateProjectCarousel);
  }

  if (target.id === "organization") {
    window.requestAnimationFrame(updateOrganizationCarousel);
  }

  if (updateHash && window.location.hash !== `#${target.id}`) {
    history.pushState(null, "", `#${target.id}`);
  }
}

function renderMeta(meta) {
  return `
    <aside class="detail-meta" aria-label="Metadata">
      <dl>
        ${Object.entries(meta).map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join("")}
      </dl>
    </aside>
  `;
}

function renderMedia(images) {
  if (!images.length) {
    return "";
  }

  return `
    <div class="media-gallery">
      ${images.map((image) => `
        <article class="media-frame ${image.tall ? "tall" : ""}">
          <figure>
            <picture>
              <img src="${image.src}" alt="${image.alt}" loading="lazy">
            </picture>
            <figcaption>${image.caption}</figcaption>
          </figure>
        </article>
      `).join("")}
    </div>
  `;
}

function renderDetailAside(item) {
  if (!item.images.length) return "";

  return `
    <aside class="detail-aside">
      ${renderMedia(item.images)}
    </aside>
  `;
}

function renderProjectActions(item) {
  const links = [];

  if (item.repo) {
    links.push({
      label: "GitHub Repo",
      title: item.repo.label,
      url: item.repo.url,
      icon: "icon-code"
    });
  }

  if (item.links) {
    links.push(...item.links);
  }

  if (!links.length) return "";

  return `
    <div class="detail-actions">
      ${links.map((link) => `
        <a class="detail-action-link" href="${link.url}" target="_blank" rel="noopener">
          ${icon(link.icon || "icon-link")}
          <span>${link.label}</span>
          <strong>${link.title}</strong>
        </a>
      `).join("")}
    </div>
  `;
}

function renderDetail(kind, item) {
  const isProject = kind === "project";
  const backId = isProject ? "projects" : "organization";
  const meta = item.meta || {
    Period: item.period,
    Role: item.role,
    Group: item.group
  };

  detailView.innerHTML = `
    <div class="detail-inner">
      <a class="back-link" href="#${backId}" data-back-section="${backId}">${icon("icon-arrow-left")} Back to ${isProject ? "projects" : "organization"}</a>
      <div class="detail-hero-grid">
        <div>
          <div class="detail-kicker">${isProject ? item.number : item.group}</div>
          <h1 class="detail-title">${item.title}</h1>
          <p class="detail-summary">${isProject ? item.type : `${item.role} - ${item.period}`}</p>
          <p class="detail-summary">${item.summary}</p>
          <div class="detail-tags">${renderTags(item.tags, "detail-tag")}</div>
          ${isProject ? renderProjectActions(item) : ""}
        </div>
        ${renderMeta(meta)}
      </div>
      <div class="detail-layout ${item.images.length ? "" : "detail-layout-full"}">
        <div class="detail-main">
          ${item.sections.map((section) => `
            <article class="detail-card">
              <h2>${section.title}</h2>
              <p>${section.body}</p>
            </article>
          `).join("")}
        </div>
        ${renderDetailAside(item)}
      </div>
    </div>
  `;

  siteShell.hidden = true;
  detailView.hidden = false;
  document.title = `${item.title} - Gania Rafidah Huwaida`;
  sectionLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.section === backId);
  });
  window.requestAnimationFrame(updateActiveNavIndicator);
  closeMobileNav();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function route() {
  const hash = window.location.hash.replace("#", "") || "home";
  const projectId = hash.startsWith("project-") ? hash.replace("project-", "") : "";
  const organizationId = hash.startsWith("organization-") ? hash.replace("organization-", "") : "";

  if (projectId) {
    const project = projects.find((item) => item.id === projectId);
    if (project) {
      renderDetail("project", project);
      return;
    }
  }

  if (organizationId) {
    const organization = organizations.find((item) => item.id === organizationId);
    if (organization) {
      renderDetail("organization", organization);
      return;
    }
  }

  showSection(hash, false);
}

sectionLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showSection(link.dataset.section);
  });
});

navToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggleUse?.setAttribute("href", isOpen ? "#icon-close" : "#icon-menu");
});

detailView.addEventListener("click", (event) => {
  const backLink = event.target.closest("[data-back-section]");
  if (!backLink) return;
  event.preventDefault();
  showSection(backLink.dataset.backSection);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMobileNav();
});

renderProjectList();
renderOrganizationList();
setupProjectCarousel();
setupOrganizationCarousel();
setupTypewriter();
setupNavTabs();
route();
window.addEventListener("hashchange", route);
