import type { WorkAgreement, WorkAgreementStatus } from '@atlas/shared/workAgreement';
import { api } from '../../api/http';
import { useApiResource } from '../../hooks/useApiResource';
import { useQueryClient } from '../../query/queryClient';

export const agreementKeys = {
  byCompany: (companyId: string) => ['agreements', 'company', companyId] as const
};

export function useCompanyAgreements(companyId: string) {
  const queryClient = useQueryClient();
  const resource = useApiResource(async () => {
    const key = [...agreementKeys.byCompany(companyId)];
    const cached = queryClient.get<Awaited<ReturnType<typeof api.listAgreementsForCompany>>>(key);
    if (cached) return cached;
    const result = await api.listAgreementsForCompany(companyId);
    queryClient.set(key, result);
    return result;
  }, [companyId]);

  async function changeStatus(agreement: WorkAgreement, status: WorkAgreementStatus) {
    const key = [...agreementKeys.byCompany(companyId)];
    const current = queryClient.get<{ agreements: WorkAgreement[] }>(key);
    if (current) {
      queryClient.set(key, { agreements: current.agreements.map((item) => item.id === agreement.id ? { ...item, status } : item) });
    }
    try {
      await api.updateWorkAgreementStatus(agreement.id, status);
    } catch (error) {
      if (current) queryClient.set(key, current);
      throw error;
    }
    await resource.reload();
  }

  return { ...resource, changeStatus };
}
