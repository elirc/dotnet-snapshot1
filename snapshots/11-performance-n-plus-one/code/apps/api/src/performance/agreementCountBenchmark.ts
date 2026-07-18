import { workforceOperationsService } from '../services/workforceOperationsService';

export async function measureDashboardAgreementCounts() {
  const started = performance.now();
  await workforceOperationsService.getDashboardSummary();
  return { label: 'dashboard-agreement-counts', durationMs: Math.round(performance.now() - started) };
}
