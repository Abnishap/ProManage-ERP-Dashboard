const badgeMap = {
  'In progress': 'accent',
  Review: 'warning',
  Planning: 'accent',
  Delayed: 'danger',
  Open: 'warning',
  High: 'danger',
  Medium: 'accent',
  Low: 'success',
  Planned: 'accent',
};

export function createBadge(label) {
  const type = badgeMap[label] || 'accent';
  return `<span class="badge ${type}">${label}</span>`;
}

export function formatDate(date) {
  return date.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
}
