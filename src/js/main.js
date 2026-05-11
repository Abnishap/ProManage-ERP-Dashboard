import { state, sectionTitleMap } from './state.js';
import { formatDate } from './helpers.js';
import { renderSummaryCards, renderSection } from './render.js';
import { fetchDashboardData } from './api.js';

const pageTitle = document.getElementById('pageTitle');
const pageSubtitle = document.getElementById('pageSubtitle');
const todayDate = document.getElementById('todayDate');
const navButtons = [...document.querySelectorAll('.nav-link')];

let dashboardData = null;

function setActiveNav() {
  navButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.section === state.section);
  });
}

async function updatePage() {
  pageTitle.textContent = sectionTitleMap[state.section];
  pageSubtitle.textContent = 'Coordinator dashboard with production schedules, tasks, and team coordination.';

  dashboardData = await fetchDashboardData(state.role);
  renderSummaryCards(state.role, dashboardData);
  renderSection(state.role, state.section, dashboardData);

  // Add event listeners for dynamic elements
  addEventListeners();
}

function addEventListeners() {
  const addTaskBtn = document.getElementById('addTaskBtn');
  const addTaskForm = document.getElementById('addTaskForm');
  const taskForm = document.getElementById('taskForm');
  const cancelTaskBtn = document.getElementById('cancelTaskBtn');

  if (addTaskBtn) {
    addTaskBtn.addEventListener('click', () => {
      addTaskForm.style.display = 'block';
    });
  }

  if (cancelTaskBtn) {
    cancelTaskBtn.addEventListener('click', () => {
      addTaskForm.style.display = 'none';
      taskForm.reset();
    });
  }

  if (taskForm) {
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // For now, just hide the form (in a real app, save to backend)
      addTaskForm.style.display = 'none';
      taskForm.reset();
      alert('Task added successfully!');
    });
  }

  const addInventoryBtn = document.getElementById('addInventoryBtn');
  const addInventoryForm = document.getElementById('addInventoryForm');
  const inventoryForm = document.getElementById('inventoryForm');
  const cancelInventoryBtn = document.getElementById('cancelInventoryBtn');
  const logInventoryBtn = document.getElementById('logInventoryBtn');

  if (addInventoryBtn) {
    addInventoryBtn.addEventListener('click', () => {
      addInventoryForm.style.display = 'block';
    });
  }

  if (cancelInventoryBtn) {
    cancelInventoryBtn.addEventListener('click', () => {
      addInventoryForm.style.display = 'none';
      inventoryForm.reset();
    });
  }

  if (inventoryForm) {
    inventoryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      addInventoryForm.style.display = 'none';
      inventoryForm.reset();
      alert('Inventory item added successfully!');
    });
  }

  if (logInventoryBtn) {
    logInventoryBtn.addEventListener('click', () => {
      alert('Log inventory movement feature coming soon!');
    });
  }
}

navButtons.forEach((button) => {
  button.addEventListener('click', async () => {
    state.section = button.dataset.section;
    setActiveNav();
    await updatePage();
  });
});

async function init() {
  todayDate.textContent = formatDate(new Date());
  setActiveNav();
  await updatePage();
}

init();
