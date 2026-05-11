export function renderReports(reports) {
  return `
    <div class="section-panel">
      <h2>Report summary</h2>
      <p>Focus on the metrics that matter for your role.</p>
      <div class="grid-3">
        ${reports.items.map((item) => `
          <div class="metric-card">
            <span>${item.label}</span>
            <strong>${item.value}</strong>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
