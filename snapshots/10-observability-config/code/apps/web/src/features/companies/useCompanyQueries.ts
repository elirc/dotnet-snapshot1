import { api } from '../../api/http';
import { useApiResource } from '../../hooks/useApiResource';
import { useQueryClient } from '../../query/queryClient';

export const companyKeys = {
  all: ['companies'] as const,
  detail: (id: string) => ['companies', id] as const
};

export function useCompanyList() {
  const queryClient = useQueryClient();
  return useApiResource(async () => {
    const cached = queryClient.get<Awaited<ReturnType<typeof api.listClientCompanies>>>([...companyKeys.all]);
    if (cached) return cached;
    const result = await api.listClientCompanies();
    queryClient.set([...companyKeys.all], result);
    return result;
  }, []);
}

export function useCompanyDetail(companyId: string) {
  const queryClient = useQueryClient();
  return useApiResource(async () => {
    const key = [...companyKeys.detail(companyId)];
    const cached = queryClient.get<Awaited<ReturnType<typeof api.getClientCompany>>>(key);
    if (cached) return cached;
    const result = await api.getClientCompany(companyId);
    queryClient.set(key, result);
    return result;
  }, [companyId]);
}
