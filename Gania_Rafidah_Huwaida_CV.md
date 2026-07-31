# Gania Rafidah Huwaida

Computer Engineering student at Universitas Brawijaya with a 3.65/4.00 GPA. During a six-month research internship at BRIN, I delivered applied AI, EV charging, and industrial IoT systems across OCPP, Modbus TCP, MQTT, forecasting, and real-time dashboards. My strongest work sits close to real-world systems: chargers sending telemetry, smart meters producing field data, microphones turning speech into action, and mobile cameras running models offline.

**Email:** gania.rafida12@gmail.com  
**WhatsApp:** 088901660277  
**GitHub:** github.com/gnieerfd  
**LinkedIn:** linkedin.com/in/ganiarafida  
**Portfolio:** portofolio-gania.vercel.app

## Work Experience

### Data & Automation Intern - PT Telkom Indonesia BigBox
**Dec 2025 - Jan 2026**

- Built a local speech-to-speech assistant with Python, FastAPI, Faster-Whisper, PyAudio, FFmpeg, VAD, and gTTS, covering microphone capture, ASR, response handling, and text-to-speech output.
- Designed the prototype to run on a normal CPU with int8 inference and RAW vs CLEAN audio comparison, then set up a small n8n, Docker, and Google Sheets API workflow for knowledge retrieval experiments.

### Machine Learning Research Intern - BRIN, Badan Riset dan Inovasi Nasional
**Feb 2026 - Jul 2026 (6 months)**

- Joined BRIN's E-Mobility research group for a six-month placement, delivering three connected prototypes for EV charging analytics, protocol testing, and laboratory energy monitoring.
- Built **Enerlytics**, a Flask platform that unifies OCPP, Modbus, MQTT, file, and API data through 20+ REST endpoints and a 12+ table SQLAlchemy schema, with seven forecasting models and explicit evaluation metrics.
- Built **ChargeSim**, an OCPP 1.6-J CSMS and simulator suite with up to 15 charge-point slots, queue management, remote operations, dynamic power sharing, MySQL/CSV transaction records, and Raspberry Pi support; validated basic physical-charger connectivity through WebSocket, StatusNotification, and Heartbeat.
- Built **EMS Modbus**, a real-time pipeline for nine energy parameters from three smart meters, including register validation, multi-strategy decoding, MySQL logging, MQTT publishing, and a secured Streamlit dashboard.

### Social Media Admin Intern - SF Group Services Enterprise / JetDigital.Pro
**May 2025 - Jul 2025**

- Handled **1,000+ audience interactions** across Twitter/X and LinkedIn while keeping daily brand responses consistent.
- Helped produce **150+ content pieces**, including posts, articles, captions, and rebranding material for JetDigital.Pro.

### Content Planner Intern - PT Magnet Aroma Internasional
**Mar 2025 - Jun 2025**

- Developed **50+ content ideas and campaign concepts** across polling, quiz, storytelling, and product education formats.
- Turned product messages into clearer social media angles through content calendars, idea banks, campaign mapping, audience hooks, and planning sessions.

### Copywriter Intern - Turbomaxx
**May 2025 - Jun 2025**

- Produced **15+ Instagram and TikTok campaign briefs**, including hooks, short-form copy, caption directions, and platform-specific campaign angles.
- Served as PIC for several campaign posts from planning to publication, helping the creative workflow move with clearer direction.

### Team Leader, Operations - Jakarta Fair 2023
**Jun 2023 - Jul 2023**

- Led around **70 operational staff** during a **30-day national-scale event**, handling daily shifts, attendance checks, shift allocation, and on-ground coordination.
- Kept field operations organized during long shifts and high visitor traffic through short briefings, direct handoffs, and clear escalation.

## Education

### Universitas Brawijaya - Computer Engineering
**GPA: 3.65 / 4.00**

- Focus areas: applied AI, IoT systems, data processing, signal processing, mobile development, backend development, and human-facing technical tools.
- Built coursework and independent projects across EV charging data, OCPP simulation, local speech AI, Android computer vision, and AI-based cyber safety planning.

## Organisational Experience

### Core Team & Administrative Staff - BEM FILKOM UB 2024
**2024**

- Served as Core Team for **Leader of Tomorrow 6.0** and handled administrative responsibility as **Pengguna Anggaran** for Leader of Tomorrow Chapter 2.
- Supported student-program accountability through attendance records, PUMK documents, LPJ flow, funding files, spending records, transfer archives, and faculty-level reporting for programs including Leader of Tomorrow, Career Visit, PKKMB, MSIB Talkshow, HOLOGY, CodeExploit, Raion activities, RECON, ROBIN, RODI, donor blood programs, and entrepreneurship events.

### Internal IT Staff - Raja Brawijaya 2025
**Jul 2025 - Sep 2025**

- Processed and checked **800+ participant records** for attendance, QR usage, validation, and event reporting.
- Reduced attendance friction by cleaning participant data, preparing QR attendance material, checking missing records, and coordinating with event operations.

### Global Liaison Officer - Singapore Polytechnic & Vietnam Delegation
**Nov 2024**

- Supported campus visits for Singapore Polytechnic and Vietnam delegations through guest guidance, communication flow, campus tours, and schedule movement.
- Helped visitors move through the agenda with clearer context about campus facilities, academic activities, and timing.

### Event Staff - Dev Girls
**Mar 2024 - Dec 2024**

- Helped organize Dev Girls programs, including UI/UX workshops, mentoring sessions, partner coordination with Skilvul, and PIC work for Exclusive Mentoring.
- Supported event flow for participants, speakers, and partners through run-down planning, reminders, mentoring checks, and post-event notes.

### Event Specialist Staff - KarsaCita
**Mar 2023 - May 2023**

- Managed online sessions with **50+ participants on average**, including talkshows, Katalk sessions, mental health podcast programs, and participant communication.
- Helped sessions run with clearer joining instructions, speaker preparation, attendance checks, and internal staff coordination.

## Selected Projects

### Enerlytics - Multi-Source Energy Analytics & Forecasting

- Built a Flask platform that brings together OCPP charger data, Modbus meters, MQTT telemetry, uploads, and API input in one authenticated monitoring and forecasting workflow.
- Implemented LSTM, ARIMA, GBDT, XGBoost, SVR, ANN, and DeepBoost with ordered weekly evaluation, comprehensive error metrics, and safeguards against implausible future predictions.

### ChargeSim - OCPP Smart Charging Simulator

- Built an OCPP 1.6-J CSMS and simulator suite with up to **15 charge-point slots**, queue management, remote start/stop flows, live power views, smart power sharing, MySQL storage, CSV export, and Raspberry Pi support.
- Validated basic connectivity with a BRIN physical charger through WebSocket, StatusNotification, and Heartbeat; full physical transaction and charging-profile validation is documented as follow-up work. Repository: github.com/gnieerfd/smart-charging-simulator.

### EMS Modbus - Real-Time Energy Monitoring

- Built a Modbus TCP acquisition pipeline for nine energy parameters across three smart meters, with raw-register validation, endianness and scaling handling, bounded buffering, MySQL time-series logging, and MQTT publishing.
- Built a secured Streamlit dashboard with bcrypt password hashing, role-aware access, CAPTCHA, real-time tables, and trend charts.

### Jarvis S2S - Local Speech-to-Speech AI Assistant

- Built a local voice assistant pipeline with VAD, Faster-Whisper ASR, LLM response handling, TTS output, and FastAPI upload mode.
- Used int8 CPU inference and FFmpeg noise reduction for privacy-friendly speech AI on modest hardware; repository: github.com/gnieerfd/Local_Speech-to-Speech_AI-Assistant.

### Shroomify - Offline Mushroom Classifier

- Owned the ML workflow for an Android mushroom classifier: dataset cleanup, augmentation, MobileNetV4 training, fine-tuning, and model export.
- Focused on binary edible/poisonous classification for offline mobile inference using TorchScript and PyTorch Mobile.

### WARAS - AI-Based Cyber Safety Business Plan

- Helped develop WARAS, an AI-based plug-and-play micro-gateway concept using DNS/SNI filtering, Random Forest classification, selective redirection, Orange Pi Zero 3 hardware, and custom Linux firmware concepts.
- Built the business case with Rp300,000 hardware pricing, Rp20,000 monthly subscription, **Rp255,000,000 projected 3-year revenue**, **101-unit BEP**, **70.98% ROI**, **108.75% IRR**, **0.34-year payback**, and reached **Finalist** at PRISMA 2025.

## Skills

### Backend & Data Engineering

- Python, Flask, FastAPI, MySQL, SQLAlchemy, SQL, Docker, REST API, ETL, data ingestion, CSV/XLSX processing, dashboard data flow.

### Machine Learning & AI

- scikit-learn, XGBoost, CatBoost, LSTM, TensorFlow/Keras, PyTorch, MobileNetV4, transfer learning, model fine-tuning, model export, forecasting, classification.

### Speech, Audio & DSP

- Faster-Whisper, PyAudio, VAD, ASR, FFmpeg noise reduction, 16kHz mono audio processing, int8 CPU inference, gTTS.

### IoT, EV & Protocols

- OCPP 1.6-J, WebSocket communication, Modbus TCP, MQTT, pymodbus, Paho MQTT, asyncio, PySide6, Streamlit, Raspberry Pi, smart charging simulation, real-time telemetry, bcrypt authentication.

### Mobile & Frontend

- Android deployment context, Kotlin, CameraX, PyTorch Mobile, TorchScript, HTML, CSS, JavaScript, Chart.js.

### Content & Operations

- Campaign briefs, social media copywriting, content calendars, audience interaction handling, event operations, participant data validation, administrative reporting.

## Achievements

- **Finalist - WARAS Business Plan Competition**, PRISMA 2025, UIN Sunan Ampel Surabaya.
- **Best Staff - November**, BEM FILKOM UB 2024.
- **Best Administration Staff**, BEM FILKOM UB 2023.
- **Gold Medal - Computer Science**, Advanced Science Olympiad 2021.
- **Bronze Medal - Mathematics**, National Education Day Competition 2021.
- **Microsoft Azure AI Fundamentals**, KOMDIGI 2025, Course 1 & 2.

## Others

- Led or coordinated teams in field, online, and student organisation settings, including **70+ staff** at Jakarta Fair and **800+ participant records** at Raja Brawijaya 2025.
- Open to internships, research work, and focused collaborations in machine learning engineering, backend/data engineering, AI systems, IoT/EV tools, and product-minded technical roles.
