# ProManage ERP Dashboard

A manufacturing ERP-style dashboard for managers, project coordinators, and teams. This app includes inventory, projects, resources, reports, tasks, and a simple backend API for data serving.

---

## For Non-Developers

### What this app does
- Shows a modern dashboard with KPI cards and navigation
- Includes pages for inventory, projects, resources, reports, and tasks
- Supports team roles, project workflows, and task status tracking
- Uses a lightweight Node.js backend to serve data and static files

### Quick start
1. Open a terminal in this project folder.
2. Run:
   ```bash
   npm install
   npm start
   ```
3. Open your browser to:
   ```text
   http://localhost:3000
   ```

That is all you need to view and use the dashboard locally.

---

## For Developers

### Project structure
- `package.json` — app metadata, dependencies, and start script
- `server.js` — Express server configuration and static file hosting
- `backend/data.js` — dashboard data model and API response data
- `src/` — front-end pages and scripts
  - `index.html` — main dashboard landing page
  - `inventory.html` — inventory management page
  - `projects.html` — project management page
  - `resources.html` — resource allocation page
  - `reports.html` — analytics page
  - `tasks.html` — task board page
  - `login.html` — login screen (UI placeholder)
- `src/css/` — styles and responsive layout
- `src/js/` — client-side JavaScript for page behavior and local state
- `src/data/` — sample/mock data used by the front-end when localStorage is empty

### Run the app
```bash
npm install
npm start
```

Then visit:
```text
http://localhost:3000
```

### Development notes
- `server.js` serves the static app and exposes API endpoints from `backend/data.js`
- `src/data/mockData.js` contains sample dashboard and team data
- The front-end uses vanilla JavaScript and local storage for state persistence
- The repository is currently tracked on branch `dev`

### Recommended workflow
1. Create a feature branch from `dev`
2. Make UI or data updates in `src/` or `backend/`
3. Test locally with `npm start`
4. Commit with a descriptive message
5. Push to GitHub

### Example commands
```bash
git checkout -b feature/my-update
npm start
# make your changes
git add .
git commit -m "Add improved project navigation and dashboard cards"
git push origin feature/my-update
```

---

## Notes
- If you want to add new pages, put them under `src/` and add navigation links in the header/sidebar
- If you need to update data, edit `backend/data.js` and/or `src/data/mockData.js`
- The app is meant to be easy to run locally and easy to extend with new dashboard sections
