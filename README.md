# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## 1. What Was Done

| Step | Result |
|---|---|
| Clone repo to Desktop | Done |
| npm install (frontend) | Success — 0 vulnerabilities |
| npm install (server) | Success — 0 vulnerabilities |
| npm run build (Vite production) | Success — 34 modules, 246 kB JS / 77 kB gzip |
| npm run lint (oxlint) | Passed — 3 minor warnings (unused catch params) |
| Backend run | Live on http://localhost:5000 |
| Frontend run | Live on http://localhost:5173 |

## 2. Verification Results

### Frontend render (real Chromium, zero JS errors)
- Home page renders fully: navbar, hero ("Your Journey Begins Here"), trip-type selector (Beach / Mountain / City / Adventure), destinations section
- React Router works — /about route renders correctly

### Backend endpoints
| Test | Result |
|---|---|
| GET / | 200 — "TravelAgency Backend is Running!" |
| POST /api/auth/register (missing fields) | 400 — validation works without DB |
| POST /api/auth/login (missing fields) | 400 — validation works without DB |
| POST /api/bookings (missing fields) | 400 — validation works without DB |
| CORS preflight (5173 → 5000) | 204 — Access-Control-Allow-Origin: *, all methods allowed |
| Frontend ↔️ Backend integration | URLs match routes exactly |

### Database
- PostgreSQL is *not installed* on this machine, so DB-backed operations (actual login/register/booking inserts) return "Server error" — expected and skipped by request.
