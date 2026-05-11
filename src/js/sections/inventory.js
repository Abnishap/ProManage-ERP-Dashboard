export function renderInventory(inventory) {
  return `
    <div class="section-panel">
      <h2>Inventory Management</h2>
      <p>Track raw materials, components, and finished goods.</p>
      <div class="inventory-controls">
        <button id="addInventoryBtn" class="btn-primary">Add Item</button>
        <button id="logInventoryBtn" class="btn-secondary">Log Movement</button>
      </div>
      <div id="addInventoryForm" class="add-form" style="display: none;">
        <form id="inventoryForm">
          <div class="form-group">
            <label for="itemName">Item Name</label>
            <input type="text" id="itemName" required>
          </div>
          <div class="form-group">
            <label for="itemCategory">Category</label>
            <select id="itemCategory">
              <option value="Raw Materials">Raw Materials</option>
              <option value="Components">Components</option>
              <option value="Finished Goods">Finished Goods</option>
              <option value="Supplies">Supplies</option>
              <option value="Equipment">Equipment</option>
            </select>
          </div>
          <div class="form-group">
            <label for="itemQuantity">Quantity</label>
            <input type="text" id="itemQuantity" required>
          </div>
          <div class="form-group">
            <label for="itemLocation">Location</label>
            <input type="text" id="itemLocation" required>
          </div>
          <button type="submit" class="btn-primary">Add Item</button>
          <button type="button" id="cancelInventoryBtn" class="btn-secondary">Cancel</button>
        </form>
      </div>
      <div class="inventory-table">
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Location</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${inventory.items.map((item) => `
              <tr>
                <td>${item.name}</td>
                <td>${item.category}</td>
                <td>${item.quantity}</td>
                <td>${item.location}</td>
                <td><span class="status-${item.status.toLowerCase().replace(' ', '')}">${item.status}</span></td>
                <td>
                  <button class="btn-small">Edit</button>
                  <button class="btn-small">Log</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}