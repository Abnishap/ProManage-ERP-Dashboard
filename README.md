# ERP-Style Dashboard App

A frontend-only dashboard app for managers and project coordinators, organized with a clean folder structure.

## Files
- `package.json` — project dependencies and start script
- `server.js` — Express backend and static file server
- `backend/data.js` — backend dashboard data model
- `src/index.html` — dashboard layout and structure
- `src/css/styles.css` — CSS module imports for the dashboard theme
- `src/css/base.css` — basic global styles and design tokens
- `src/css/layout.css` — layout and responsive grid styles
- `src/css/components.css` — sidebar, cards, tables, and UI components
- `src/css/theme.css` — color accents, buttons, and chart styling
- `src/js/main.js` — app entry point and event wiring
- `src/js/state.js` — app state and section labels
- `src/js/api.js` — frontend API client for backend data
- `src/js/helpers.js` — shared utility functions
- `src/js/render.js` — page rendering logic and section dispatch
- `src/js/sections/overview.js` — overview panel markup
- `src/js/sections/projects.js` — project table markup
- `src/js/sections/tasks.js` — task board markup
- `src/js/sections/team.js` — team roster markup
- `src/js/sections/reports.js` — reports panel markup

## Usage
1. Run `npm install` in the workspace root.
2. Start the backend with `npm start`.
3. Open `http://localhost:3000` in a browser.

The frontend fetches dashboard content from the backend API, making the app backend-capable while still rendering in the browser.
