# Campus Explorer — Modern University Discovery Platform

A modern, responsive, and student-centric **Campus Explorer** full-stack web application built with an **Express.js REST Backend API**, **React 19**, **Vite 8**, **Bootstrap 5**, and **Vanilla CSS**. Designed as a portfolio-ready project for a **Google Developer Groups (GDG)** showcase.

---

## 🚀 Quick Start: Running Full-Stack

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Both Backend and Frontend Concurrently
```bash
npm run dev:all
```
- **Backend API**: Running at `http://localhost:5000/api`
- **Frontend App**: Running at `http://localhost:5173/` (or port assigned by Vite)

Alternatively, you can run them in separate terminals:
```bash
# Terminal 1: Backend REST API server
npm run server

# Terminal 2: Vite React Frontend
npm run dev
```

---

## 📡 Backend REST API (`server/`)

The backend server is powered by Express and provides RESTful endpoints serving all platform data:

| Endpoint | Method | Description |
|---|---|---|
| `/api/health` | `GET` | Health check, uptime, and database metrics |
| `/api/all` | `GET` | Consolidated payload of all sections (nav, hero, clubs, events, toolkit, footer) |
| `/api/nav` | `GET` | Navigation links (`NAV_LINKS`) |
| `/api/hero` | `GET` | Hero micro-statistics (`HERO_STATS`) and interactive orbit nodes (`ORBIT_NODES`) |
| `/api/clubs` | `GET` | Student communities (`CLUBS`) with filter and search queries |
| `/api/clubs/:id/join` | `POST` | Toggle club membership state |
| `/api/events` | `GET` | Upcoming events (`EVENTS`) and category filters (`EVENT_FILTERS`) |
| `/api/events/:id/rsvp` | `POST` | Toggle event RSVP state and update real-time attendee seats |
| `/api/toolkit` | `GET` | Interests & Tracks student toolkits (`TOOLKIT`) |
| `/api/footer` | `GET` | Footer links and navigation columns (`FOOTER_COLUMNS`) |
| `/api/facilities` | `GET` | Campus academic and athletic facilities |
| `/api/search?q=...` | `GET` | Unified real-time search across clubs, events, toolkit, and facilities |

---

## 🌟 Sections & Dataset Integration

### 1. Navigation Header (`Header.jsx`)
- Consumes `NAV_LINKS` from the backend (`Home`, `Clubs & Communities`, `Events`, `Interests & Tracks`).
- Features a live **"Backend API Live"** pulse pill indicator indicating active server synchronization.

### 2. Hero Section (`Hero.jsx`)
- **Micro-Metrics (`HERO_STATS`)**: Displays `80+ Active Chapters & Labs`, `100% Curated Peer Guilds`, and `Open Decentralized Access`.
- **Interactive Orbit Nodes (`ORBIT_NODES`)**: Floating interactive badges for `GDG on Campus`, `VELOSE Racing`, `IEEE VIT Branch`, and `MLSc VIT` with Material Symbols icons.

### 3. Student Clubs & Communities (`ClubsSection.jsx`)
- Populated from backend `CLUBS`:
  - **GDG on Campus VIT** (Google Developer Groups · Est. 2018)
  - **IEEE Student Branch** (IEEE Region 10 · Chapter 64121)
  - **AWS Cloud Club** (AWS Academic Partner Community)
  - **VELOSE Racing** (Formula Student Electric Division)
  - **MLSc (ML Chapter)** (Machine Learning Student Chapter)
  - **The Robotics Forum (TRF)** (Interdisciplinary Robotics Lab)
- Interactive **Join Club** toggle button syncing with `POST /api/clubs/:id/join`.
- **Learn More** modal displaying faculty leads, meeting times, locations, and topic tracks.

### 4. Upcoming Campus Events (`EventsSection.jsx`)
- Populated from backend `EVENTS` and `EVENT_FILTERS`:
  - **Full-Stack Web3 & Microservices Intensive** (Workshops)
  - **VIT HackVerse 2025: National Flagship Sprint** (Hackathons)
  - **Applied GenAI & Agentic Workflows with Llama 3** (Technical)
  - **Autonomous Navigation with ROS 2 & Solid LiDAR** (Workshops)
- Live RSVP button with real-time seat decrementing syncing with `POST /api/events/:id/rsvp`.

### 5. Interests & Tracks Toolkit (`ToolkitSection.jsx`)
- Populated from backend `TOOLKIT`:
  - **First-Year Roadmap** (*"Read Strategy Guide"*)
  - **Project Matchmaker** (*"Find Teammates"*)
  - **Campus Room Finder** (*"Open Spatial Map"*)
  - **Campus Open Source** (*"View GitHub Guild"*)

### 6. Explore Campus Facilities (`CampusSection.jsx`)
- Interactive cards for academic buildings, 24/7 central library, aquatic pavilion, cafeterias, and innovation labs.

### 7. Instant Search Directory (`SearchSection.jsx`)
- Unified search bar querying all backend data (clubs, events, tracks, facilities) with category filters and popular chips.

### 8. Footer (`Footer.jsx`)
- Populated from backend `FOOTER_COLUMNS`:
  - **Product & Discover**
  - **Campus Communities**
  - **Resources**
