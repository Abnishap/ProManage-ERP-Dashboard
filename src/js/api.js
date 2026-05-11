export async function fetchDashboardData(role) {
  const response = await fetch(`/api/dashboard?role=${encodeURIComponent(role)}`);
  if (!response.ok) {
    throw new Error('Failed to load dashboard data');
  }
  const payload = await response.json();
  return payload.data;
}
