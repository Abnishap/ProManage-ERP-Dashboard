// Task Management Logic
document.addEventListener('DOMContentLoaded', function() {
  // Initialize tasks from mockData if not already set
  if (!localStorage.getItem('tasks')) {
    if (typeof mockData !== 'undefined' && mockData.tasks) {
      localStorage.setItem('tasks', JSON.stringify(mockData.tasks));
    }
  }
  
  loadTasks();
  setupTaskEventListeners();
});

function loadTasks() {
  const tasks = getTasksData();
  const tbody = document.getElementById('tasksTableBody');
  if (!tbody) return;

  tbody.innerHTML = '';

  tasks.forEach(task => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${task.id}</td>
      <td>${task.title}</td>
      <td>${task.project}</td>
      <td>${task.assignedTo}</td>
      <td>${task.dueDate}</td>
      <td>${task.priority}</td>
      <td>${task.status}</td>
      <td>
        <button class="btn btn-sm btn-outline-primary me-1" onclick="editTask(${task.id})">
          <i class="fas fa-edit"></i>
        </button>
        <button class="btn btn-sm btn-outline-danger" onclick="deleteTask(${task.id})">
          <i class="fas fa-trash"></i>
        </button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

function setupTaskEventListeners() {
  const addTaskBtn = document.getElementById('addTaskBtn');
  if (addTaskBtn) {
    addTaskBtn.addEventListener('click', function() {
      clearTaskForm();
      document.getElementById('taskModalLabel').textContent = 'Add Task';
    });
  }

  const saveTaskBtn = document.getElementById('saveTaskBtn');
  if (saveTaskBtn) {
    saveTaskBtn.addEventListener('click', saveTask);
  }
}

function saveTask() {
  const taskId = document.getElementById('taskId').value;
  const title = document.getElementById('taskTitle').value;
  const project = document.getElementById('taskProject').value;
  const assignedTo = document.getElementById('taskAssignedTo').value;
  const dueDate = document.getElementById('taskDueDate').value;
  const priority = document.getElementById('taskPriority').value;
  const status = document.getElementById('taskStatus').value;

  if (!title || !project || !assignedTo || !dueDate) {
    AppUtils.showAlert('Please fill in all required fields', 'warning');
    return;
  }

  const tasks = getTasksData();

  if (taskId) {
    const existingTask = tasks.find(task => task.id == taskId);
    if (existingTask) {
      existingTask.title = title;
      existingTask.project = project;
      existingTask.assignedTo = assignedTo;
      existingTask.dueDate = dueDate;
      existingTask.priority = priority;
      existingTask.status = status;
      AppUtils.showAlert('Task updated successfully!', 'success');
    }
  } else {
    const newTask = {
      id: Date.now(),
      title,
      project,
      assignedTo,
      dueDate,
      priority,
      status
    };
    tasks.push(newTask);
    AppUtils.showAlert('Task added successfully!', 'success');
  }

  localStorage.setItem('tasks', JSON.stringify(tasks));
  loadTasks();
  const modal = bootstrap.Modal.getInstance(document.getElementById('taskModal'));
  modal.hide();
  clearTaskForm();
}

function editTask(id) {
  const tasks = getTasksData();
  const task = tasks.find(item => item.id == id);
  if (!task) return;

  document.getElementById('taskModalLabel').textContent = 'Edit Task';
  document.getElementById('taskId').value = task.id;
  document.getElementById('taskTitle').value = task.title;
  document.getElementById('taskProject').value = task.project;
  document.getElementById('taskAssignedTo').value = task.assignedTo;
  document.getElementById('taskDueDate').value = task.dueDate;
  document.getElementById('taskPriority').value = task.priority;
  document.getElementById('taskStatus').value = task.status;

  const taskModal = new bootstrap.Modal(document.getElementById('taskModal'));
  taskModal.show();
}

function deleteTask(id) {
  if (!confirm('Delete this task?')) return;

  const tasks = getTasksData();
  const updated = tasks.filter(task => task.id !== id);
  localStorage.setItem('tasks', JSON.stringify(updated));
  loadTasks();
  AppUtils.showAlert('Task deleted successfully!', 'success');
}

function clearTaskForm() {
  document.getElementById('taskId').value = '';
  document.getElementById('taskForm').reset();
}

function getTasksData() {
  const stored = localStorage.getItem('tasks');
  if (stored) {
    return JSON.parse(stored);
  }

  return [
    {
      id: 1,
      title: 'Equipment Calibration',
      project: 'Assembly Line Upgrade',
      assignedTo: 'Aadrika',
      dueDate: '2026-05-10',
      priority: 'High',
      status: 'In Progress'
    },
    {
      id: 2,
      title: 'Production Planning',
      project: 'Assembly Line Upgrade',
      assignedTo: 'Abnisha',
      dueDate: '2026-05-11',
      priority: 'Medium',
      status: 'Open'
    }
  ];
}

window.editTask = editTask;
window.deleteTask = deleteTask;
