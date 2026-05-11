export function renderOverview(overview) {
  return `
    <div class="grid-2">
      <div>
        <div class="section-panel">
          <h2>Executive summary</h2>
          <p>High-level performance metrics for the current planning cycle.</p>
          <div class="grid-3">
            ${overview.cards.map((card) => `
              <div class="metric-card">
                <span>${card.label}</span>
                <strong>${card.value}</strong>
                <p>${card.detail}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
      <div>
        <div class="section-panel">
          <div class="chart-title">
            <div>
              <h3>Progress trend</h3>
              <p>Weekly performance index</p>
            </div>
            <span class="badge accent">Live</span>
          </div>
          <div class="chart-bars">
            ${overview.chart.map((value) => `<div class="chart-bar" style="height: ${value}%"></div>`).join('')}
          </div>
        </div>
      </div>
    </div>
    <div class="section-panel">
      <h2>Highlights</h2>
      <div class="grid-3">
        ${overview.highlights.map((item) => `
          <div class="metric-card">
            <span>${item.label}</span>
            <strong>${item.value}</strong>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
