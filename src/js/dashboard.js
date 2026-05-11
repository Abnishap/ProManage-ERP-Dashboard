// Dashboard Statistics and Charts
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all data from mockData if not already set
  if (typeof mockData !== 'undefined') {
    if (!localStorage.getItem('inventory')) {
      localStorage.setItem('inventory', JSON.stringify(mockData.inventory));
    }
    if (!localStorage.getItem('projects')) {
      localStorage.setItem('projects', JSON.stringify(mockData.projects));
    }
    if (!localStorage.getItem('team')) {
      localStorage.setItem('team', JSON.stringify(mockData.team));
    }
    if (!localStorage.getItem('meetings')) {
      localStorage.setItem('meetings', JSON.stringify(mockData.meetings));
    }
    if (!localStorage.getItem('tasks')) {
      localStorage.setItem('tasks', JSON.stringify(mockData.tasks));
    }
  }
  
  loadDashboardContent();
});

function loadDashboardContent() {
  const pageContent = document.getElementById('pageContent');
  if (!pageContent) return;

  pageContent.innerHTML = `
    <div class="row mb-4">
      <div class="col-md-3">
        <div class="card text-center">
          <div class="card-body">
            <i class="fas fa-dollar-sign fa-2x text-success mb-2"></i>
            <h5>Revenue</h5>
            <h3>$1.2M</h3>
            <small class="text-muted">+12% from last month</small>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card text-center">
          <div class="card-body">
            <i class="fas fa-project-diagram fa-2x text-primary mb-2"></i>
            <h5>Active Projects</h5>
            <h3>18</h3>
            <small class="text-muted">4 completed this week</small>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card text-center">
          <div class="card-body">
            <i class="fas fa-tasks fa-2x text-info mb-2"></i>
            <h5>Tasks Completed</h5>
            <h3>142</h3>
            <small class="text-muted">87% completion rate</small>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card text-center">
          <div class="card-body">
            <i class="fas fa-users fa-2x text-warning mb-2"></i>
            <h5>Team Utilization</h5>
            <h3>89%</h3>
            <small class="text-muted">Optimal range</small>
          </div>
        </div>
      </div>
    </div>

    <div class="row mb-4">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">
            <h5>Production Overview</h5>
          </div>
          <div class="card-body">
            <canvas id="productionChart" class="chart-container"></canvas>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-header">
            <h5>Recent Activities</h5>
          </div>
          <div class="card-body">
            <div class="activity-item">
              <small class="text-muted">2 hours ago</small>
              <p>Assembly Line Upgrade completed</p>
            </div>
            <div class="activity-item">
              <small class="text-muted">4 hours ago</small>
              <p>New inventory items added</p>
            </div>
            <div class="activity-item">
              <small class="text-muted">6 hours ago</small>
              <p>Quality audit passed</p>
            </div>
            <div class="activity-item">
              <small class="text-muted">1 day ago</small>
              <p>Team meeting scheduled</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h5>Project Status</h5>
          </div>
          <div class="card-body">
            <canvas id="projectStatusChart" class="chart-container"></canvas>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h5>Resource Allocation</h5>
          </div>
          <div class="card-body">
            <canvas id="resourceChart" class="chart-container"></canvas>
          </div>
        </div>
      </div>
    </div>
  `;

  // Initialize charts
  initializeCharts();
}

function initializeCharts() {
  // Production Chart
  const productionCtx = document.getElementById('productionChart');
  if (productionCtx) {
    new Chart(productionCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Production Output',
          data: [1200, 1350, 1180, 1420, 1380, 1520],
          borderColor: '#007bff',
          backgroundColor: 'rgba(0, 123, 255, 0.1)',
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  // Project Status Chart
  const projectStatusCtx = document.getElementById('projectStatusChart');
  if (projectStatusCtx) {
    new Chart(projectStatusCtx, {
      type: 'doughnut',
      data: {
        labels: ['Completed', 'In Progress', 'Planning', 'On Hold'],
        datasets: [{
          data: [12, 6, 3, 2],
          backgroundColor: ['#28a745', '#007bff', '#ffc107', '#dc3545']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }

  // Resource Chart
  const resourceCtx = document.getElementById('resourceChart');
  if (resourceCtx) {
    new Chart(resourceCtx, {
      type: 'bar',
      data: {
        labels: ['Abnisha', 'Anki', 'Aadrika', 'Taniya'],
        datasets: [{
          label: 'Utilization %',
          data: [85, 72, 90, 68],
          backgroundColor: '#17a2b8'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });
  }
}