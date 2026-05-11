// Inventory CRUD Operations
document.addEventListener('DOMContentLoaded', function() {
  // Initialize inventory from mockData if not already set
  if (!localStorage.getItem('inventory')) {
    if (typeof mockData !== 'undefined' && mockData.inventory) {
      localStorage.setItem('inventory', JSON.stringify(mockData.inventory));
    }
  }
  
  loadInventory();
  setupInventoryEventListeners();
});

function loadInventory() {
  const inventory = getInventoryData();
  const tbody = document.getElementById('inventoryTableBody');
  if (!tbody) return;

  tbody.innerHTML = '';

  inventory.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.id}</td>
      <td>${item.item}</td>
      <td>${item.category}</td>
      <td>${item.stock}</td>
      <td>${item.location}</td>
      <td><span class="badge ${getStatusBadgeClass(item.stock)}">${getStatusText(item.stock)}</span></td>
      <td>
        <button class="btn btn-sm btn-outline-primary me-1" onclick="editItem(${item.id})">
          <i class="fas fa-edit"></i>
        </button>
        <button class="btn btn-sm btn-outline-danger" onclick="deleteItem(${item.id})">
          <i class="fas fa-trash"></i>
        </button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

function setupInventoryEventListeners() {
  // Search functionality
  const searchInput = document.getElementById('searchInventory');
  if (searchInput) {
    searchInput.addEventListener('input', filterInventory);
  }

  // Category filter
  const categoryFilter = document.getElementById('filterCategory');
  if (categoryFilter) {
    categoryFilter.addEventListener('change', filterInventory);
  }

  // Clear filters
  const clearFiltersBtn = document.getElementById('clearFilters');
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', function() {
      if (searchInput) searchInput.value = '';
      if (categoryFilter) categoryFilter.value = '';
      loadInventory();
    });
  }

  // Save inventory item
  const saveBtn = document.getElementById('saveInventoryBtn');
  if (saveBtn) {
    saveBtn.addEventListener('click', saveInventoryItem);
  }
}

function filterInventory() {
  const searchTerm = document.getElementById('searchInventory').value.toLowerCase();
  const categoryFilter = document.getElementById('filterCategory').value;
  const inventory = getInventoryData();

  const filtered = inventory.filter(item => {
    const matchesSearch = item.item.toLowerCase().includes(searchTerm) ||
                         item.location.toLowerCase().includes(searchTerm);
    const matchesCategory = !categoryFilter || item.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  displayFilteredInventory(filtered);
}

function displayFilteredInventory(inventory) {
  const tbody = document.getElementById('inventoryTableBody');
  tbody.innerHTML = '';

  inventory.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.id}</td>
      <td>${item.item}</td>
      <td>${item.category}</td>
      <td>${item.stock}</td>
      <td>${item.location}</td>
      <td><span class="badge ${getStatusBadgeClass(item.stock)}">${getStatusText(item.stock)}</span></td>
      <td>
        <button class="btn btn-sm btn-outline-primary me-1" onclick="editItem(${item.id})">
          <i class="fas fa-edit"></i>
        </button>
        <button class="btn btn-sm btn-outline-danger" onclick="deleteItem(${item.id})">
          <i class="fas fa-trash"></i>
        </button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

function saveInventoryItem() {
  const form = document.getElementById('addInventoryForm');
  const itemName = document.getElementById('itemName').value;
  const itemCategory = document.getElementById('itemCategory').value;
  const itemStock = document.getElementById('itemStock').value;
  const itemLocation = document.getElementById('itemLocation').value;

  if (!itemName || !itemStock || !itemLocation) {
    AppUtils.showAlert('Please fill in all required fields', 'warning');
    return;
  }

  // In a real app, this would be an API call
  const newItem = {
    id: Date.now(),
    item: itemName,
    category: itemCategory,
    stock: parseInt(itemStock),
    location: itemLocation
  };

  const inventory = getInventoryData();
  inventory.push(newItem);
  localStorage.setItem('inventory', JSON.stringify(inventory));

  // Close modal and reset form
  const modal = bootstrap.Modal.getInstance(document.getElementById('addInventoryModal'));
  modal.hide();
  form.reset();

  loadInventory();
  AppUtils.showAlert('Inventory item added successfully!', 'success');
}

function editItem(id) {
  // Implementation for editing (would open modal with pre-filled data)
  AppUtils.showAlert('Edit functionality coming soon!', 'info');
}

function deleteItem(id) {
  if (confirm('Are you sure you want to delete this item?')) {
    const inventory = getInventoryData();
    const updated = inventory.filter(item => item.id !== id);
    localStorage.setItem('inventory', JSON.stringify(updated));
    loadInventory();
    AppUtils.showAlert('Item deleted successfully!', 'success');
  }
}

function getInventoryData() {
  const stored = localStorage.getItem('inventory');
  if (stored) {
    return JSON.parse(stored);
  }

  // Default data
  return [
    { id: 1, item: "Steel Pipe", category: "Raw Materials", stock: 20, location: "Warehouse A" },
    { id: 2, item: "Circuit Board", category: "Components", stock: 15, location: "Warehouse B" },
    { id: 3, item: "Finished Widget", category: "Finished Goods", stock: 50, location: "Shipping Bay" },
    { id: 4, item: "Lubricant", category: "Supplies", stock: 8, location: "Maintenance Room" },
    { id: 5, item: "Safety Gear", category: "Equipment", stock: 25, location: "Safety Station" }
  ];
}

function getStatusBadgeClass(stock) {
  if (stock <= 10) return 'bg-danger';
  if (stock <= 20) return 'bg-warning';
  return 'bg-success';
}

function getStatusText(stock) {
  if (stock <= 10) return 'Low Stock';
  if (stock <= 20) return 'Medium';
  return 'In Stock';
}

// Make functions global for onclick handlers
window.editItem = editItem;
window.deleteItem = deleteItem;