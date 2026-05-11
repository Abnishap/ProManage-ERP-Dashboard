import { createBadge } from '../helpers.js';

export function renderTasks(tasks) {
  return `
    <div class="section-panel">
      <div class="chart-title">
        <div>
          <h2>Task board</h2>
          <p>Task progress, priorities, and upcoming deadlines.</p>
        </div>
        <button id="addTaskBtn" class="btn-primary">Add Task</button>
      </div>
      <div id="addTaskForm" class="add-form" style="display: none;">
        <form id="taskForm">
          <div class="form-group">
            <label for="taskTitle">Title</label>
            <input type="text" id="taskTitle" required>
          </div>
          <div class="form-group">
            <label for="taskDue">Due Date</label>
            <input type="text" id="taskDue" placeholder="e.g., Today, 2d" required>
          </div>
          <div class="form-group">
            <label for="taskPriority">Priority</label>
            <select id="taskPriority">
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div class="form-group">
            <label for="taskStatus">Status</label>
            <select id="taskStatus">
              <option value="Open">Open</option>
              <option value="In progress">In progress</option>
              <option value="Review">Review</option>
              <option value="Planned">Planned</option>
            </select>
          </div>
          <button type="submit" class="btn-primary">Add Task</button>
          <button type="button" id="cancelTaskBtn" class="btn-secondary">Cancel</button>
        </form>
      </div>
      <div class="table-card">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Due</th>
              <th>Priority</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${tasks.rows.map((row) => `
              <tr>
                <td>${row.title}</td>
                <td>${row.due}</td>
                <td>${createBadge(row.priority)}</td>
                <td>${createBadge(row.status)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
