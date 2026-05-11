// Report Generation and Analytics
document.addEventListener('DOMContentLoaded', function() {
  initializeCharts();
  setupReportEventListeners();
});

function initializeCharts() {
  // Revenue Chart
  const revenueCtx = document.getElementById('revenueChart');
  if (revenueCtx) {
    new Chart(revenueCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Revenue ($)',
          data: [950000, 1020000, 980000, 1150000, 1080000, 1200000],
          borderColor: '#28a745',
          backgroundColor: 'rgba(40, 167, 69, 0.1)',
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
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return '$' + (value / 1000) + 'K';
              }
            }
          }
        }
      }
    });
  }

  // Project Status Chart
  const projectStatusCtx = document.getElementById('projectStatusChart');
  if (projectStatusCtx) {
    new Chart(projectStatusCtx, {
      type: 'pie',
      data: {
        labels: ['Completed', 'In Progress', 'Planning', 'Delayed'],
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

  // Efficiency Chart
  const efficiencyCtx = document.getElementById('efficiencyChart');
  if (efficiencyCtx) {
    new Chart(efficiencyCtx, {
      type: 'bar',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
        datasets: [{
          label: 'Efficiency (%)',
          data: [82, 85, 87, 89, 91, 88],
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

function setupReportEventListeners() {
  // Export report
  const exportBtn = document.getElementById('exportReportBtn');
  if (exportBtn) {
    exportBtn.addEventListener('click', exportReport);
  }

  // Report period change
  const periodSelect = document.getElementById('reportPeriod');
  if (periodSelect) {
    periodSelect.addEventListener('change', function() {
      updateReportPeriod(this.value);
    });
  }
}

function exportReport() {
  // In a real application, this would generate and download a PDF or Excel file
  AppUtils.showAlert('Report export functionality would generate a PDF/Excel file with current data', 'info');

  // Simulate export
  setTimeout(() => {
    AppUtils.showAlert('Report exported successfully!', 'success');
  }, 2000);
}

function updateReportPeriod(period) {
  // Update charts based on selected period
  AppUtils.showAlert(`Switched to ${period} view`, 'info');

  // In a real app, this would fetch different data based on the period
  // For demo purposes, we'll just show a message
}