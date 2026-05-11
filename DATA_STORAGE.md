# ProManage ERP - Data Storage Documentation

## Overview
All data in the ProManage ERP system is stored in the **Browser's LocalStorage** - this is client-side, in-browser storage that persists between page refreshes.

---

## Data Storage Location

### Primary Storage
- **Browser LocalStorage** (`window.localStorage`)
- Located in: `C:\Users\{YourUsername}\AppData\Local\Microsoft\Edge\User Data\Default\Local Storage\` (for Edge)
- Or similar path for Chrome, Firefox, etc.
- **Key Point**: Data is saved on YOUR computer, not on a server

### Initial/Mock Data
- **File**: `src/data/mockData.js`
- Contains default sample data for all modules
- Loaded into localStorage on first page load

---

## What Data is Stored?

### 1. **Inventory**
- **Key**: `inventory`
- **Contents**: All inventory items (Steel Pipes, Bearings, Rubber Sheets, etc.)
- **Location**: localStorage → inventory object array
- **24 Product Categories**:
  - Bridge Bearings, Specialized Bearings
  - HDPE Pipes, Bridge Components
  - Rubber Sheets, Industrial Hoses
  - Seals & Gaskets, Automobile Components
  - Furniture Rubber, Prestressing Systems

### 2. **Projects**
- **Key**: `projects`
- **Contents**: All project information
- **Includes**: Name, status, budget, progress, assigned team members
- **Status Values**: Planning → In Progress → Review → Completed
- **Editable Via**: Projects page → Kanban board drag-and-drop

### 3. **Tasks**
- **Key**: `tasks`
- **Contents**: Individual tasks assigned to team members
- **Includes**: Title, project, assigned person, due date, priority, status
- **Editable Via**: Tasks page → Add/Edit/Delete modal

### 4. **Team & Resources**
- **Team Key**: `team`
- **Contents**: Team member profiles (Abnisha, Anki, Aadrika, Taniya)
- **Includes**: Name, role, avatar URL, availability status, skills
- **Meetings Key**: `meetings`
- **Contents**: Scheduled meetings and events
- **Editable Via**: Resources page → Schedule Meeting button

### 5. **Authentication**
- **Keys**: `isLoggedIn`, `userRole`, `username`, `rememberMe`
- **Contents**: Login session information
- **Managed By**: auth.js
- **Cleared On**: Logout button click

---

## Data Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                     mockData.js (Default)                   │
│        Contains all initial/sample data for the system       │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ↓ (First load only)
         ┌───────────────────────────┐
         │   Browser LocalStorage    │
         │  (Persistent data store)  │
         └───────────────────────────┘
                     ↑
         ┌───────────┼───────────┐
         │           │           │
         ↓           ↓           ↓
    ┌────────┐  ┌────────┐  ┌────────┐
    │ Create │  │ Update │  │ Delete │
    │  Data  │  │  Data  │  │  Data  │
    └────────┘  └────────┘  └────────┘
         │           │           │
         └───────────┼───────────┘
                     │
         ┌───────────┼───────────┐
         │           │           │
         ↓           ↓           ↓
    Inventory    Projects     Tasks
    Resources    Reports     Team
```

---

## How Data Persists

### On Page Load:
1. JavaScript checks if data exists in localStorage
2. If NOT found → Loads from `mockData.js` → Stores in localStorage
3. If FOUND → Uses existing localStorage data

### On Data Modification:
1. User creates/edits/deletes data through the UI
2. JavaScript updates localStorage immediately
3. Page reflects changes in real-time
4. Data persists after page refresh or browser close

### Example Flow (Adding Inventory Item):
```
User clicks "Add Item" 
    ↓
Modal form opens
    ↓
User fills: Name, Category, Stock, Location
    ↓
Click "Save Item"
    ↓
JavaScript saves to localStorage["inventory"]
    ↓
Page refreshed → Data still there ✓
```

---

## Key JavaScript Files & Functions

### Data Initialization
| File | Function | Purpose |
|------|----------|---------|
| `js/inventory.js` | `getInventoryData()` | Loads/returns inventory from localStorage |
| `js/projects.js` | `getProjectsData()` | Loads/returns projects from localStorage |
| `js/tasks.js` | `getTasksData()` | Loads/returns tasks from localStorage |
| `js/resources.js` | `getTeamData()` | Loads/returns team from localStorage |

### Data Update Patterns
```javascript
// Get data
const inventory = localStorage.getItem('inventory');
const parsed = JSON.parse(inventory);

// Modify
parsed.push(newItem);

// Save back
localStorage.setItem('inventory', JSON.stringify(parsed));
```

---

## LocalStorage Key Reference

| Key | Type | Example Size |
|-----|------|--------------|
| `inventory` | JSON Array | ~5-10 KB |
| `projects` | JSON Array | ~3-5 KB |
| `tasks` | JSON Array | ~2-4 KB |
| `team` | JSON Array | ~2-3 KB |
| `meetings` | JSON Array | ~1-2 KB |
| `isLoggedIn` | Boolean | 4 bytes |
| `userRole` | String | ~20 bytes |
| `darkMode` | String | ~8 bytes |

**Total Storage Used**: ~15-30 KB (well under localStorage limit of 5-10 MB)

---

## Important Notes

⚠️ **Browser LocalStorage Characteristics:**
- ✅ Persists across page refreshes and browser restarts
- ✅ One storage per domain/browser
- ❌ Does NOT sync across different browsers
- ❌ Does NOT sync across different computers
- ❌ Clears if browser cache is cleared (unless exceptions set)
- ❌ Limited to ~5-10 MB per domain

---

## Data Backup & Recovery

### Exporting Data:
```javascript
// In browser console
JSON.stringify(localStorage)
```

### Clearing All Data:
```javascript
// In browser console
localStorage.clear()
```

### Restoring from mockData:
- Simply clear localStorage and refresh the page
- mockData will reload automatically

---

## Future Enhancements (For Production)

For a production system, consider:
1. **Backend Database** - Replace localStorage with server-side database
2. **API Integration** - Create REST APIs for CRUD operations
3. **Cloud Storage** - Use Firebase, AWS, or similar
4. **Real-time Sync** - Sync data across devices
5. **Data Encryption** - Secure sensitive information

---

## Troubleshooting

**Q: Data not appearing after adding?**
- A: Check browser console for errors. Ensure localStorage is enabled.

**Q: Lost all data?**
- A: Browser cache was cleared. Data lost. Refresh page to load mockData defaults.

**Q: Can't find data I added?**
- A: Check the correct localStorage key. Use browser DevTools → Application → LocalStorage.

---

**Last Updated**: May 2026
**System**: ProManage ERP Dashboard v1.0
