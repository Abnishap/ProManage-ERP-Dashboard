import { renderOverview } from './sections/overview.js';
import { renderProjects } from './sections/projects.js';
import { renderTasks } from './sections/tasks.js';
import { renderTeam } from './sections/team.js';
import { renderReports } from './sections/reports.js';
import { renderInventory } from './sections/inventory.js';

const summaryCards = document.getElementById('summaryCards');
const sectionContent = document.getElementById('sectionContent');

export function renderSummaryCards(role, dashboardData) {
  summaryCards.innerHTML = '';
  dashboardData.summary.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'summary-card';
    card.innerHTML = `
      <span>${item.label}</span>
      <strong>${item.value}</strong>
    `;
    summaryCards.appendChild(card);
  });
}

export function renderSection(role, section, dashboardData) {
  const currentData = dashboardData;
  switch (section) {
    case 'overview':
      sectionContent.innerHTML = renderOverview(currentData.overview);
      break;
    case 'projects':
      sectionContent.innerHTML = renderProjects(currentData.projects);
      break;
    case 'tasks':
      sectionContent.innerHTML = renderTasks(currentData.tasks);
      break;
    case 'team':
      sectionContent.innerHTML = renderTeam(currentData.team);
      break;
    case 'reports':
      sectionContent.innerHTML = renderReports(currentData.reports);
      break;
    case 'inventory':
      sectionContent.innerHTML = renderInventory(currentData.inventory);
      break;
    default:
      sectionContent.innerHTML = renderOverview(currentData.overview);
      break;
  }
}
