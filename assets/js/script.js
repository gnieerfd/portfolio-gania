const missingEvidence = [
  "KarsaCita - belum ada foto bukti event di folder.",
  "SF Group Services Enterprise / JetDigital.Pro - belum ada screenshot atau foto bukti di folder.",
  "Achievement dan certification - belum ada scan sertifikat atau bukti penghargaan di folder.",
  "Logo institusi BRIN, Telkom Indonesia, Universitas Brawijaya, Microsoft Azure - belum ada file logo terpisah di folder."
];

const projects = [
  {
    id: "enerlytics",
    number: "01 - Featured",
    title: "Enerlytics",
    type: "Work Assignment - Individual - BRIN",
    badge: "Energy AI",
    summary: "A Flask dashboard for EV charging data. It shows live power metrics, flags unusual values, and compares forecasting models, including my DeepBoost ensemble.",
    tags: ["Python", "Flask", "OCPP 1.6", "XGBoost", "LSTM", "MySQL"],
    images: [
      { src: "assets/images/projects/enerlytics-dashboard.jpeg", alt: "Enerlytics forecasting dashboard with charts and forecasting output.", caption: "Forecasting dashboard evidence from the folder." },
      { src: "assets/images/projects/enerlytics-login.jpeg", alt: "Enerlytics login screen.", caption: "Login screen evidence for the forecasting web." }
    ],
    meta: {
      Type: "Work Assignment - Individual",
      Org: "BRIN (Badan Riset dan Inovasi Nasional)",
      Role: "Sole Developer, end-to-end",
      Stack: "Python, Flask, scikit-learn, XGBoost, LSTM, MySQL, Chart.js"
    },
    sections: [
      { title: "Why I Built It", body: "During my BRIN internship, EV charging data was already coming in: current, voltage, power, and energy consumption. The harder part was turning that stream into something a researcher could check quickly without opening the database." },
      { title: "What I Built", body: "Enerlytics has KPI cards, four charts, threshold alerts, and a forecasting page. I added eight model options, including DeepBoost, an ensemble that combines CatBoost, XGBoost, and LSTM predictions with a Linear Regression meta-learner." },
      { title: "Result", body: "The dashboard made the charging data easier to inspect from a browser. It also gave the team a starting point for comparing forecast output before planning charging capacity." },
      { title: "Note", body: "The main lesson was less glamorous than the model name: forecasting work depends on clean data flow, clear charts, and knowing when a model is failing quietly." }
    ]
  },
  {
    id: "chargesim",
    number: "02",
    title: "ChargeSim",
    type: "Work Assignment - Individual - BRIN",
    badge: "IoT - Simulation",
    summary: "A desktop simulator for EV charging research. It runs charger sessions, talks over OCPP 1.6, replays real EV power curves, and tests smart charging logic.",
    tags: ["OCPP 1.6", "PySide6", "asyncio", "DQN / RL", "matplotlib"],
    images: [
      { src: "assets/images/projects/chargesim-client.jpeg", alt: "ChargeSim simulator UI with charging sessions and power graph.", caption: "ChargeSim client simulator evidence." },
      { src: "assets/images/projects/chargesim-server.jpeg", alt: "ChargeSim server UI showing smart charging management.", caption: "ChargeSim central server evidence." }
    ],
    repo: {
      label: "smart-charging-simulator",
      url: "https://github.com/gnieerfd/smart-charging-simulator"
    },
    meta: {
      Type: "Work Assignment - Individual",
      Org: "BRIN (Badan Riset dan Inovasi Nasional)",
      Role: "Sole Developer",
      Stack: "Python, PySide6, OCPP 1.6, asyncio, matplotlib, stable-baselines3, MySQL",
      LOC: "4,000+ lines"
    },
    sections: [
      { title: "Why I Built It", body: "Testing charger behavior on physical hardware is slow and expensive. BRIN needed a repeatable way to test OCPP messages, charging queues, and power allocation before moving to real chargers." },
      { title: "What I Built", body: "ChargeSim can simulate up to 15 charging sessions with live power graphs and queue management. It replays power curves from BMW iX, Hyundai IONIQ 6, NETA 01, and Toyota bZ4X measurements." },
      { title: "Hard Part", body: "The tricky part was keeping the PySide6 interface responsive while asyncio handled WebSocket traffic. I used AsyncioPySide6 so the UI could keep updating while OCPP messages moved in the background." },
      { title: "Note", body: "Implementing both the charger side and central system side made the protocol much easier to understand. The queue design also came from watching how people actually use charging stations." }
    ]
  },
  {
    id: "jarvis-s2s",
    number: "03",
    title: "Jarvis S2S",
    type: "Work Assignment - Individual - Telkom Indonesia BigBox",
    badge: "Edge AI - DSP",
    summary: "A local speech-to-speech assistant that can run on a normal CPU. It uses VAD, Faster-Whisper, an LLM response step, and text-to-speech output.",
    tags: ["Faster-Whisper", "FastAPI", "FFmpeg DSP", "gTTS", "Docker"],
    images: [
      { src: "assets/images/projects/jarvis-web.jpeg", alt: "Jarvis S2S web interface showing speech processing result.", caption: "Jarvis web interface evidence." },
      { src: "assets/images/projects/jarvis-mobile.jpeg", alt: "Jarvis S2S mobile interface showing speech assistant workflow.", caption: "Jarvis mobile view evidence.", tall: true }
    ],
    repo: {
      label: "Local_Speech-to-Speech_AI-Assistant",
      url: "https://github.com/gnieerfd/Local_Speech-to-Speech_AI-Assistant"
    },
    meta: {
      Type: "Work Assignment - Individual",
      Org: "Telkom Indonesia BigBox",
      Role: "Sole Developer",
      Stack: "Python, Faster-Whisper, FastAPI, gTTS, PyAudio, FFmpeg, Docker"
    },
    sections: [
      { title: "Why I Built It", body: "Some voice assistant demos depend too much on cloud APIs. I wanted to see how far I could push a local pipeline where audio stays on the machine as much as possible." },
      { title: "What I Built", body: "The system detects speech, transcribes it with Faster-Whisper int8, sends the text to an LLM step, and returns spoken output. The FastAPI page compares raw and cleaned audio so the ASR difference is easy to see." },
      { title: "Design Choices", body: "I used mono 16kHz audio, FFmpeg noise reduction, and a short conversation memory window. Those choices kept the pipeline simpler and lighter for CPU-only testing." },
      { title: "Note", body: "This project reminded me that edge AI is mostly trade-offs: latency, accuracy, privacy, and hardware limits all pull in different directions." }
    ]
  },
  {
    id: "shroomify",
    number: "04",
    title: "Shroomify",
    type: "Group Project (Kelompok 13) - Computer Vision Course - My Role: ML Engineer + Android Dev",
    badge: "Android - CV",
    summary: "An offline Android app that classifies mushrooms as edible or poisonous from the camera. I worked on the model pipeline and the Android integration.",
    tags: ["MobileNetV4", "Kotlin", "CameraX", "PyTorch Mobile", "TensorFlow"],
    images: [
      { src: "assets/images/projects/shroomify-home.png", alt: "Shroomify Android application showing mushroom classification screen.", caption: "Shroomify Android evidence.", tall: true },
      { src: "assets/images/projects/shroomify-camera.png", alt: "Shroomify camera interface on Android.", caption: "Live camera classification screen.", tall: true },
      { src: "assets/images/projects/shroomify-result.png", alt: "Shroomify result screen for mushroom classification.", caption: "Classification result screen.", tall: true }
    ],
    meta: {
      Type: "Group Project - Kelompok 13",
      Role: "ML Engineer + Android Developer",
      Stack: "Python, TensorFlow/Keras, PyTorch Mobile, Android, Kotlin, CameraX",
      Duration: "October - December 2025"
    },
    sections: [
      { title: "Why We Built It", body: "The idea was simple: make a mushroom classifier that still works without internet. That mattered because the app was aimed at quick checks in the field, not a polished lab demo." },
      { title: "My Part", body: "I handled the model pipeline and Android app work. MobileNetV4 was fine-tuned for edible versus poisonous classification, exported to TorchScript, and connected to CameraX for on-device inference." },
      { title: "Technical Notes", body: "Training used transfer learning in two phases: freeze the backbone first, then unfreeze deeper layers with a smaller learning rate. Moving to TorchScript made the Android deployment cleaner with PyTorch Mobile." },
      { title: "Note", body: "The UI lesson was basic but important: use clear green and red results. In a safety-related app, extra decoration can get in the way." }
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
      { src: "assets/images/organizations/jakarta-fair.jpeg", alt: "Jakarta Fair 2023 operations team activity.", caption: "Jakarta Fair 2023 activity evidence." }
    ],
    tags: ["70 staff", "30 days", "Operations", "Leadership"],
    sections: [
      { title: "What I Did", body: "Coordinated attendance, shift allocation, and day-to-day operations for a large event team." },
      { title: "Takeaway", body: "This role taught me how much clear communication matters when people are tired, shifts are long, and decisions need to be quick." }
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
      { src: "assets/images/organizations/global-liaison-singapore.jpg", alt: "Global Liaison Officer activity with Singapore Polytechnic delegation.", caption: "Singapore Polytechnic delegation evidence.", tall: true },
      { src: "assets/images/organizations/global-liaison-vietnam.jpg", alt: "Global Liaison Officer activity with Vietnam delegation.", caption: "Vietnam delegation evidence.", tall: true }
    ],
    tags: ["International delegation", "Communication", "Campus tour", "Coordination"],
    sections: [
      { title: "What I Did", body: "Helped with communication, campus tour flow, and academic visit coordination for international guests." },
      { title: "Takeaway", body: "I learned to explain context clearly and keep people oriented when language, culture, and schedules all meet at once." }
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
      { src: "assets/images/organizations/devgirls.jpeg", alt: "Dev Girls event activity.", caption: "Dev Girls event evidence." }
    ],
    tags: ["Event", "PIC", "Skilvul", "UI/UX"],
    sections: [
      { title: "What I Did", body: "Worked on mentoring sessions, UI/UX workshops, and faculty-level competition activities." },
      { title: "Takeaway", body: "I got better at planning around real participants: reminders, run-downs, speaker needs, and what attendees actually came for." }
    ]
  },
  {
    id: "karsacita",
    group: "Leadership & Event",
    title: "KarsaCita",
    role: "Event Specialist Staff",
    period: "Mar - May 2023",
    summary: "Managed online sessions with 50+ participants on average.",
    images: [],
    tags: ["Online event", "50+ participants", "Talkshow", "Podcast"],
    sections: [
      { title: "What I Did", body: "Handled talkshows, Katalk sessions, and mental health podcast programs, including participant communication and internal coordination." },
      { title: "Takeaway", body: "A live session usually succeeds or fails before it starts. Clear pre-event messages helped more than I expected." }
    ],
    missing: "Belum ada foto bukti KarsaCita di folder."
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
      { title: "What I Did", body: "Managed audience interactions across Twitter and LinkedIn while drafting posts, articles, and brand captions." },
      { title: "Takeaway", body: "Content work taught me that tone, timing, and response quality build up slowly. Small inconsistencies are easy to notice." }
    ],
    missing: "Belum ada screenshot atau foto bukti SF Group / JetDigital.Pro di folder."
  },
  {
    id: "magnet-aroma",
    group: "Content & Media",
    title: "PT Magnet Aroma Internasional",
    role: "Content Planner Intern",
    period: "Mar - Jun 2025",
    summary: "Developed 50+ content ideas and campaign concepts, including polling, quizzes, and storytelling formats.",
    images: [
      { src: "assets/images/organizations/instagram-pheromagnetic.jpg", alt: "Instagram content evidence for PT Magnet Aroma Internasional.", caption: "Instagram content evidence found in the folder.", tall: true }
    ],
    tags: ["50+ strategies", "Campaign", "Content planning", "Team lead"],
    sections: [
      { title: "What I Did", body: "Planned content formats such as polling, quizzes, and storytelling posts while helping organize the planning workflow." },
      { title: "Takeaway", body: "The same idea can work or fail depending on format and timing. That became very obvious in this role." }
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
      { src: "assets/images/organizations/instagram-turbomax.jpg", alt: "Instagram content evidence for Turbomaxx campaign.", caption: "Turbomaxx Instagram campaign evidence.", tall: true }
    ],
    tags: ["15+ briefs", "Copywriting", "Instagram", "TikTok"],
    sections: [
      { title: "What I Did", body: "Wrote campaign briefs and helped manage social media campaigns from planning to publication." },
      { title: "Takeaway", body: "Copywriting trained me to cut extra words. If the point is unclear, the audience will scroll past it." }
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
      { src: "assets/images/organizations/raja-brawijaya-qr.jpg", alt: "QR attendance design for Raja Brawijaya participant attendance.", caption: "QR attendance design evidence." }
    ],
    tags: ["800+ records", "Attendance", "Validation", "Reporting"],
    sections: [
      { title: "What I Did", body: "Cleaned and validated participant records used for attendance tracking and operational reporting." },
      { title: "Takeaway", body: "This role made data hygiene feel very concrete. A small record error can slow people down during a real event." }
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
const missingList = document.querySelector("[data-missing-list]");
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

function renderMissingEvidence() {
  missingList.innerHTML = missingEvidence.map((item) => `<li>${item}</li>`).join("");
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
      <section class="note-panel">
        <h3>Bukti visual</h3>
        <p>Foto atau screenshot berikut diambil dari file yang tersedia di folder portfolio.</p>
      </section>
      ${renderMedia(item.images)}
    </aside>
  `;
}

function renderProjectActions(item) {
  if (!item.repo) return "";

  return `
    <div class="detail-actions">
      <a class="detail-action-link" href="${item.repo.url}" target="_blank" rel="noopener">
        ${icon("icon-code")}
        <span>GitHub Repo</span>
        <strong>${item.repo.label}</strong>
      </a>
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
renderMissingEvidence();
setupProjectCarousel();
setupOrganizationCarousel();
setupTypewriter();
setupNavTabs();
route();

window.addEventListener("hashchange", route);
