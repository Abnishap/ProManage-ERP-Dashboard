// Project Management Logic
document.addEventListener('DOMContentLoaded', function() {
  // Initialize projects from mockData if not already set
  if (!localStorage.getItem('projects')) {
    if (typeof mockData !== 'undefined' && mockData.projects) {
      localStorage.setItem('projects', JSON.stringify(mockData.projects));
    }
  }
  
  loadKanbanBoard();
  setupProjectEventListeners();
});

const PROJECTS_PER_PAGE = 2;
let currentProjectIndex = 0;

function loadKanbanBoard() {
  const projects = getProjectsData();
  const visibleCount = getVisibleProjectCount();
  const sliceStart = Math.min(currentProjectIndex, Math.max(0, projects.length - visibleCount));
  const sliceEnd = sliceStart + visibleCount;
  const currentProjects = projects.slice(sliceStart, sliceEnd);
  const cardContainer = document.getElementById('projectCardsContainer');

  if (!cardContainer) return;

  cardContainer.innerHTML = '';

  if (projects.length === 0) {
    cardContainer.innerHTML = '<div class="empty-state card p-4 text-center">No projects available.</div>';
    return;
  }

  currentProjects.forEach(project => {
    const card = createProjectCard(project);
    cardContainer.appendChild(card);
  });

  currentProjectIndex = sliceStart;
  updateProjectCounter(projects.length, visibleCount);
  updateNavigationButtons(projects.length, visibleCount);
}

function createProjectCard(project) {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.dataset.id = project.id;

  const budgetUsed = project.budget ? ((project.spent || 0) / project.budget) * 100 : 0;

  card.innerHTML = `
    <div class="project-card-header d-flex flex-column flex-md-row justify-content-between gap-3 align-items-start align-items-md-center">
      <div>
        <h5 class="mb-1">${project.name}</h5>
        <p class="text-muted mb-0">${project.description}</p>
      </div>
      <span class="badge bg-${getPriorityColor(project.priority)} text-uppercase px-3 py-2">${project.priority}</span>
    </div>
    <div class="project-card-body mt-4">
      <div class="d-flex flex-column flex-sm-row justify-content-between gap-4 mb-3">
        <div>
          <small class="text-muted">Status</small>
          <div class="fw-semibold">${project.status}</div>
        </div>
        <div>
          <small class="text-muted">Due date</small>
          <div class="fw-semibold">${project.dueDate}</div>
        </div>
        <div>
          <small class="text-muted">Budget</small>
          <div class="fw-semibold">$${project.budget ? project.budget.toLocaleString() : '0'}</div>
        </div>
      </div>
      <div class="mb-3">
        <div class="d-flex justify-content-between mb-2">
          <span class="text-muted">Progress</span>
          <span class="fw-semibold">${project.progress}%</span>
        </div>
        <div class="progress" style="height: 11px; border-radius: 8px; overflow: hidden;">
          <div class="progress-bar bg-${getPriorityColor(project.priority)}" role="progressbar" style="width: ${project.progress}%" aria-valuenow="${project.progress}" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
      <div class="d-flex flex-column flex-sm-row justify-content-between gap-4 text-muted small">
        <div>Spend used: ${budgetUsed.toFixed(0)}%</div>
        <div>${project.notes ? project.notes : ''}</div>
      </div>
    </div>
  `;

  return card;
}

function setupProjectEventListeners() {
  const addProjectBtn = document.getElementById('addProjectBtn');
  if (addProjectBtn) {
    addProjectBtn.addEventListener('click', function() {
      const projectName = prompt('Enter project name:');
      if (projectName) {
        addNewProject(projectName);
      }
    });
  }

  const prevBtn = document.getElementById('prevProject');
  const nextBtn = document.getElementById('nextProject');

  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      const visibleCount = getVisibleProjectCount();
      currentProjectIndex = Math.max(0, currentProjectIndex - visibleCount);
      loadKanbanBoard();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      const projects = getProjectsData();
      const visibleCount = getVisibleProjectCount();
      const maxIndex = Math.max(0, projects.length - visibleCount);
      currentProjectIndex = Math.min(maxIndex, currentProjectIndex + visibleCount);
      loadKanbanBoard();
    });
  }

  window.addEventListener('resize', function() {
    loadKanbanBoard();
  });
}

function updateProjectCounter(total, visibleCount) {
  const counter = document.getElementById('projectCounter');
  if (!counter) return;

  const start = Math.min(currentProjectIndex + 1, total);
  const end = Math.min(currentProjectIndex + visibleCount, total);
  counter.textContent = `${start}-${end} of ${total}`;
}

function updateNavigationButtons(total, visibleCount) {
  const prevBtn = document.getElementById('prevProject');
  const nextBtn = document.getElementById('nextProject');
  if (!prevBtn || !nextBtn) return;

  prevBtn.disabled = currentProjectIndex <= 0;
  nextBtn.disabled = currentProjectIndex + visibleCount >= total;
}

function getVisibleProjectCount() {
  return window.innerWidth < 768 ? 1 : PROJECTS_PER_PAGE;
}

function getProjectsData() {
  const stored = localStorage.getItem('projects');
  if (stored) {
    return JSON.parse(stored);
  }

  // Default projects
  return [
    {
      id: 1,
      name: 'Assembly Line Upgrade',
      description: 'Modernize production line with automated systems',
      status: 'In Progress',
      priority: 'High',
      dueDate: '2026-05-15',
      progress: 65
    },
    {
      id: 2,
      name: 'Quality Control System',
      description: 'Implement automated quality checking',
      status: 'Planning',
      priority: 'Medium',
      dueDate: '2026-06-01',
      progress: 20
    },
    {
      id: 3,
      name: 'Safety Protocol Update',
      description: 'Update workplace safety procedures',
      status: 'Review',
      priority: 'High',
      dueDate: '2026-05-20',
      progress: 90
    },
    {
      id: 4,
      name: 'Inventory Optimization',
      description: 'Streamline inventory management process',
      status: 'Completed',
      priority: 'Low',
      dueDate: '2026-04-30',
      progress: 100
    }
  ];
}

function getPriorityColor(priority) {
  const colors = {
    'Low': 'secondary',
    'Medium': 'warning',
    'High': 'danger'
  };
  return colors[priority] || 'secondary';
}