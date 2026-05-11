export function renderTeam(team) {
  return `
    <div class="section-panel">
      <h2>Team roster</h2>
      <p>Overview of capacity, roles, and workload across your key contributors.</p>
      <div class="table-card">
        <table>
          <thead>
            <tr>
              <th>Member</th>
              <th>Role</th>
              <th>Workload</th>
            </tr>
          </thead>
          <tbody>
            ${team.members.map((member) => `
              <tr>
                <td>${member.name}</td>
                <td>${member.role}</td>
                <td>${member.workload}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
