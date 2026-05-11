// Mock Data for ProManage ERP Dashboard
const mockData = {
  // User data
  users: [
    {
      id: 1,
      username: 'admin',
      password: 'password', // In real app, this would be hashed
      role: 'coordinator',
      name: 'Abnisha Paudel',
      avatar: 'assets/profile.jpg'
    }
  ],

  // Inventory data
  inventory: [
    {
      id: 1,
      item: "Steel Pipe",
      category: "Raw Materials",
      stock: 20,
      location: "Warehouse A",
      supplier: "SteelCorp Inc.",
      unitCost: 45.50,
      reorderPoint: 15
    },
    {
      id: 2,
      item: "Circuit Board",
      category: "Components",
      stock: 15,
      location: "Warehouse B",
      supplier: "ElectroTech Ltd.",
      unitCost: 12.75,
      reorderPoint: 25
    },
    {
      id: 3,
      item: "Finished Widget",
      category: "Finished Goods",
      stock: 50,
      location: "Shipping Bay",
      supplier: "Internal Production",
      unitCost: 89.99,
      reorderPoint: 10
    },
    {
      id: 4,
      item: "Lubricant",
      category: "Supplies",
      stock: 8,
      location: "Maintenance Room",
      supplier: "LubeMasters",
      unitCost: 25.00,
      reorderPoint: 20
    },
    {
      id: 5,
      item: "Safety Gear",
      category: "Equipment",
      stock: 25,
      location: "Safety Station",
      supplier: "SafeWork Corp.",
      unitCost: 35.00,
      reorderPoint: 15
    },
    // Bridge and Infrastructure Components
    {
      id: 6,
      item: "Elastomeric Bearing",
      category: "Bridge Bearings",
      stock: 12,
      location: "Bridge Storage",
      supplier: "BearingTech Industries",
      unitCost: 850.00,
      reorderPoint: 8
    },
    {
      id: 7,
      item: "Slab Seal Bearing",
      category: "Bridge Bearings",
      stock: 8,
      location: "Bridge Storage",
      supplier: "BearingTech Industries",
      unitCost: 650.00,
      reorderPoint: 6
    },
    {
      id: 8,
      item: "Rocker Roller Bearing",
      category: "Specialized Bearings",
      stock: 15,
      location: "Bridge Storage",
      supplier: "SpecialBearing Co.",
      unitCost: 1200.00,
      reorderPoint: 10
    },
    {
      id: 9,
      item: "Hinge Bearing",
      category: "Specialized Bearings",
      stock: 18,
      location: "Bridge Storage",
      supplier: "SpecialBearing Co.",
      unitCost: 950.00,
      reorderPoint: 12
    },
    {
      id: 10,
      item: "HDPE Corrugated Sheathing Pipe",
      category: "HDPE Pipes",
      stock: 50,
      location: "Warehouse C",
      supplier: "PipeMax Solutions",
      unitCost: 45.00,
      reorderPoint: 30
    },
    {
      id: 11,
      item: "Live Wedge",
      category: "Bridge Components",
      stock: 22,
      location: "Bridge Storage",
      supplier: "BridgeParts Ltd.",
      unitCost: 450.00,
      reorderPoint: 15
    },
    {
      id: 12,
      item: "Grouting Cap",
      category: "Bridge Components",
      stock: 30,
      location: "Bridge Storage",
      supplier: "BridgeParts Ltd.",
      unitCost: 280.00,
      reorderPoint: 20
    },
    // Industrial and Rubber Products
    {
      id: 13,
      item: "Natural Rubber Sheet",
      category: "Rubber Sheets",
      stock: 40,
      location: "Rubber Warehouse",
      supplier: "Rubber Elite Inc.",
      unitCost: 120.00,
      reorderPoint: 25
    },
    {
      id: 14,
      item: "Silicon Rubber Sheet",
      category: "Rubber Sheets",
      stock: 35,
      location: "Rubber Warehouse",
      supplier: "Rubber Elite Inc.",
      unitCost: 180.00,
      reorderPoint: 20
    },
    {
      id: 15,
      item: "Neoprene Rubber Sheet",
      category: "Rubber Sheets",
      stock: 28,
      location: "Rubber Warehouse",
      supplier: "Rubber Elite Inc.",
      unitCost: 150.00,
      reorderPoint: 18
    },
    {
      id: 16,
      item: "Hydraulic Hose",
      category: "Industrial Hoses",
      stock: 60,
      location: "Hose Storage",
      supplier: "HydraFlow Inc.",
      unitCost: 75.00,
      reorderPoint: 35
    },
    {
      id: 17,
      item: "Steam Hose",
      category: "Industrial Hoses",
      stock: 45,
      location: "Hose Storage",
      supplier: "HydraFlow Inc.",
      unitCost: 85.00,
      reorderPoint: 25
    },
    {
      id: 18,
      item: "Air/Water Hose",
      category: "Industrial Hoses",
      stock: 70,
      location: "Hose Storage",
      supplier: "HydraFlow Inc.",
      unitCost: 55.00,
      reorderPoint: 40
    },
    {
      id: 19,
      item: "P-Type Seal",
      category: "Seals & Gaskets",
      stock: 100,
      location: "Seals Warehouse",
      supplier: "SealPro Solutions",
      unitCost: 25.00,
      reorderPoint: 50
    },
    {
      id: 20,
      item: "Water Stopper",
      category: "Seals & Gaskets",
      stock: 80,
      location: "Seals Warehouse",
      supplier: "SealPro Solutions",
      unitCost: 35.00,
      reorderPoint: 40
    },
    {
      id: 21,
      item: "Concrete Pump Ram Seal",
      category: "Seals & Gaskets",
      stock: 55,
      location: "Seals Warehouse",
      supplier: "SealPro Solutions",
      unitCost: 95.00,
      reorderPoint: 30
    },
    {
      id: 22,
      item: "Vehicle Rubber Component",
      category: "Automobile Components",
      stock: 90,
      location: "Auto Parts Section",
      supplier: "AutoRubber Corp.",
      unitCost: 65.00,
      reorderPoint: 50
    },
    {
      id: 23,
      item: "Furniture Rubber Component",
      category: "Furniture Rubber",
      stock: 75,
      location: "Furniture Storage",
      supplier: "FurnitureRubber Ltd.",
      unitCost: 40.00,
      reorderPoint: 40
    },
    {
      id: 24,
      item: "LRPC Tendon Wire",
      category: "Prestressing Systems",
      stock: 25,
      location: "Engineering Lab",
      supplier: "PrestressInnovate",
      unitCost: 500.00,
      reorderPoint: 15
    }
  ],

  // Projects data
  projects: [
    {
      id: 1,
      name: 'Assembly Line Upgrade',
      description: 'Modernize production line with automated systems',
      status: 'In Progress',
      priority: 'High',
      dueDate: '2026-05-15',
      progress: 65,
      assignedTo: ['Abnisha', 'Aadrika'],
      budget: 150000,
      spent: 97500
    },
    {
      id: 2,
      name: 'Quality Control System',
      description: 'Implement automated quality checking',
      status: 'Planning',
      priority: 'Medium',
      dueDate: '2026-06-01',
      progress: 20,
      assignedTo: ['Anki'],
      budget: 75000,
      spent: 15000
    },
    {
      id: 3,
      name: 'Safety Protocol Update',
      description: 'Update workplace safety procedures',
      status: 'Review',
      priority: 'High',
      dueDate: '2026-05-20',
      progress: 90,
      assignedTo: ['Taniya'],
      budget: 25000,
      spent: 22500
    },
    {
      id: 4,
      name: 'Inventory Optimization',
      description: 'Streamline inventory management process',
      status: 'Completed',
      priority: 'Low',
      dueDate: '2026-04-30',
      progress: 100,
      assignedTo: ['Abnisha', 'Anki'],
      budget: 50000,
      spent: 48000
    }
  ],

  // Team/Resources data
  team: [
    {
      id: 1,
      name: 'Abnisha',
      role: 'Production Supervisor',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      availability: 'available',
      skills: ['Production Management', 'Lean Manufacturing'],
      workload: 85
    },
    {
      id: 2,
      name: 'Anki',
      role: 'Quality Control Lead',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
      availability: 'busy',
      skills: ['Quality Assurance', 'Six Sigma'],
      workload: 72
    },
    {
      id: 3,
      name: 'Aadrika',
      role: 'Maintenance Manager',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      availability: 'available',
      skills: ['Equipment Maintenance', 'PLC Programming'],
      workload: 90
    },
    {
      id: 4,
      name: 'Taniya',
      role: 'Safety Coordinator',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      availability: 'offline',
      skills: ['Safety Management', 'Risk Assessment'],
      workload: 68
    }
  ],

  // Meetings/Schedule data
  meetings: [
    {
      id: 1,
      title: 'Production Planning',
      time: '10:00 AM',
      date: '2026-05-10',
      participants: ['Abnisha', 'Anki'],
      location: 'Conference Room A',
      agenda: ['Review production targets', 'Discuss resource allocation']
    },
    {
      id: 2,
      title: 'Quality Review',
      time: '2:00 PM',
      date: '2026-05-10',
      participants: ['Anki', 'Aadrika'],
      location: 'Quality Lab',
      agenda: ['Review recent quality issues', 'Update QC procedures']
    },
    {
      id: 3,
      title: 'Safety Training',
      time: '4:00 PM',
      date: '2026-05-10',
      participants: ['Taniya', 'All Staff'],
      location: 'Training Room',
      agenda: ['Emergency procedures review', 'New safety equipment demo']
    }
  ],

  // Analytics/Reports data
  analytics: {
    revenue: {
      monthly: [950000, 1020000, 980000, 1150000, 1080000, 1200000],
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    projects: {
      status: [12, 6, 3, 2], // Completed, In Progress, Planning, Delayed
      labels: ['Completed', 'In Progress', 'Planning', 'Delayed']
    },
    efficiency: {
      weekly: [82, 85, 87, 89, 91, 88],
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6']
    },
    kpis: {
      totalRevenue: 1200000,
      projectsCompleted: 24,
      efficiencyRate: 87,
      customerSatisfaction: 4.8
    }
  },

  // Tasks data
  tasks: [
    {
      id: 1,
      title: 'Equipment Calibration',
      description: 'Calibrate production line equipment',
      dueDate: '2026-05-10',
      priority: 'High',
      status: 'In Progress',
      assignedTo: 'Aadrika',
      projectId: 1
    },
    {
      id: 2,
      title: 'Production Planning',
      description: 'Plan next week production schedule',
      dueDate: '2026-05-11',
      priority: 'Medium',
      status: 'Open',
      assignedTo: 'Abnisha',
      projectId: 1
    },
    {
      id: 3,
      title: 'Quality Audit',
      description: 'Conduct monthly quality audit',
      dueDate: '2026-05-13',
      priority: 'Low',
      status: 'Open',
      assignedTo: 'Anki',
      projectId: 2
    },
    {
      id: 4,
      title: 'Team Training',
      description: 'Safety training session',
      dueDate: '2026-05-16',
      priority: 'Medium',
      status: 'Planned',
      assignedTo: 'Taniya',
      projectId: 3
    }
  ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = mockData;
} else {
  window.mockData = mockData;
}