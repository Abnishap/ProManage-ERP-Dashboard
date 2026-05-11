import { createBadge } from '../helpers.js';

export function renderProjects(projects) {
  return `
    <div class="section-panel">
      <div class="chart-title">
        <div>
          <h2>Project pipeline</h2>
          <p>Active project progress and ownership details.</p>
        </div>
      </div>
      <div class="table-card">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Budget</th>
              <th>Owner</th>
            </tr>
          </thead>
          <tbody>
            ${projects.rows.map((row) => `
              <tr>
                <td>${row.name}</td>
                <td>${createBadge(row.status)}</td>
                <td>${row.budget}</td>
                <td>${row.owner}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
