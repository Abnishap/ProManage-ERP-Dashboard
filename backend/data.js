export const dashboardData = {
  manager: {
    summary: [
      { label: 'Active Projects', value: '18' },
      { label: 'Pending Approvals', value: '11' },
      { label: 'Budget Utilized', value: '74%' },
      { label: 'Team Health', value: '92%' },
    ],
    overview: {
      cards: [
        { label: 'Revenue Growth', value: '+18%', detail: 'QoQ improvements' },
        { label: 'Delivery Confidence', value: '89%', detail: 'Risk adjusted' },
        { label: 'Forecast Accuracy', value: '87%', detail: 'Across 24 projects' },
      ],
      chart: [30, 55, 42, 70, 62, 78],
      highlights: [
        { label: 'Compliance', value: '95%' },
        { label: 'Client satisfaction', value: '4.8/5' },
      ],
    },
    projects: {
      rows: [
        { name: 'Apollo', status: 'In progress', budget: '$142K', owner: 'Emma Reed' },
        { name: 'Nexus', status: 'Review', budget: '$98K', owner: 'Jonah Price' },
        { name: 'Aurora', status: 'Planning', budget: '$130K', owner: 'Priya Shah' },
        { name: 'Sierra', status: 'Delayed', budget: '$220K', owner: 'Lena Hart' },
      ],
    },
    tasks: {
      rows: [
        { title: 'Finalize Q2 report', due: '2d', priority: 'High', status: 'Open' },
        { title: 'Resource plan update', due: '4d', priority: 'Medium', status: 'In progress' },
        { title: 'Vendor sync', due: '5d', priority: 'Low', status: 'Open' },
        { title: 'Budget review', due: '1d', priority: 'High', status: 'Review' },
      ],
    },
    team: {
      members: [
        { name: 'Emma Reed', role: 'Project Lead', workload: '82%' },
        { name: 'Jonah Price', role: 'Financial Analyst', workload: '65%' },
        { name: 'Priya Shah', role: 'Planner', workload: '74%' },
        { name: 'Lena Hart', role: 'QA Lead', workload: '59%' },
      ],
    },
    reports: {
      items: [
        { label: 'Revenue uplift', value: '+18%' },
        { label: 'Project velocity', value: '1.4x' },
        { label: 'Client satisfaction', value: '4.7/5' },
      ],
      progress: [
        { label: 'Quarterly goals', value: 82 },
        { label: 'Operational excellence', value: 74 },
        { label: 'Process improvement', value: 68 },
      ],
    },
  },
  coordinator: {
    summary: [
      { label: 'Production Lines', value: '5/7' },
      { label: 'Open Tasks', value: '42' },
      { label: 'Quality Checks', value: '3 today' },
      { label: 'Active Projects', value: '4' },
    ],
    overview: {
      cards: [
        { label: 'Production Efficiency', value: '87%', detail: 'All lines' },
        { label: 'Equipment Downtime', value: '2%', detail: 'This week' },
        { label: 'Quality Compliance', value: '92%', detail: 'Standards met' },
      ],
      chart: [52, 61, 48, 74, 69, 84],
      highlights: [
        { label: 'Schedule adherence', value: '89%' },
        { label: 'Issue resolution', value: '2h avg' },
      ],
    },
    projects: {
      rows: [
        { name: 'Assembly Line Upgrade', status: 'Phase 3', budget: '$96K', owner: 'Abnisha' },
        { name: 'Quality Control System', status: 'Testing', budget: '$76K', owner: 'Anki' },
        { name: 'Automation Integration', status: 'Implementation', budget: '$110K', owner: 'Aadrika' },
        { name: 'Safety Protocol Update', status: 'Planning', budget: '$142K', owner: 'Taniya' },
      ],
    },
    tasks: {
      rows: [
        { title: 'Equipment Calibration', due: 'Today', priority: 'High', status: 'In progress' },
        { title: 'Production Planning', due: '1d', priority: 'Medium', status: 'Open' },
        { title: 'Quality Audit', due: '3d', priority: 'Low', status: 'Open' },
        { title: 'Team Training', due: '6d', priority: 'Medium', status: 'Planned' },
      ],
    },
    team: {
      members: [
        { name: 'Abnisha', role: 'Production Supervisor', workload: '76%' },
        { name: 'Anki', role: 'Quality Control Lead', workload: '69%' },
        { name: 'Aadrika', role: 'Maintenance Manager', workload: '84%' },
        { name: 'Taniya', role: 'Safety Coordinator', workload: '58%' },
      ],
    },
    reports: {
      items: [
        { label: 'Production Output', value: '89%' },
        { label: 'Defect Rate', value: '1.2%' },
        { label: 'On-time Delivery', value: '95%' },
      ],
      progress: [
        { label: 'Production efficiency', value: 88 },
        { label: 'Quality metrics', value: 79 },
        { label: 'Safety compliance', value: 72 },
      ],
    },
    inventory: {
      items: [
        { name: 'Steel Sheets', category: 'Raw Materials', quantity: '150 units', location: 'Warehouse A', status: 'In Stock' },
        { name: 'Circuit Boards', category: 'Components', quantity: '200 units', location: 'Warehouse B', status: 'Low Stock' },
        { name: 'Finished Widgets', category: 'Finished Goods', quantity: '500 units', location: 'Shipping Bay', status: 'Ready' },
        { name: 'Lubricants', category: 'Supplies', quantity: '50 gallons', location: 'Maintenance Room', status: 'In Stock' },
        { name: 'Safety Gear', category: 'Equipment', quantity: '100 sets', location: 'Safety Station', status: 'In Stock' },
      ],
    },
  },
};
