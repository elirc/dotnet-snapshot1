import type { CreateClientCompanyRequest, ClientCompanyDetailResponse, ClientCompanyListResponse } from '@atlas/shared/clientCompany';
import type { ApiErrorResponse } from '@atlas/shared/errors';
import type { CreateWorkAgreementRequest, WorkAgreementListResponse, WorkAgreementStatus } from '@atlas/shared/workAgreement';
import { ApiClientError } from './errors';

let authToken: string | null = null;
export function setApiAuthToken(token: string | null) { authToken = token; }
async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(path, { headers: { 'Content-Type': 'application/json', ...(authToken ? { Authorization: 'Bearer ' + authToken } : {}), ...(init?.headers ?? {}) }, ...init });
  if (!response.ok) throw new ApiClientError((await response.json()) as ApiErrorResponse, response.status);
  if (response.status === 204) return undefined as T;
  return response.json();
}
export const api = {
  listClientCompanies: () => request<ClientCompanyListResponse>('/api/client-companies'),
  getClientCompany: (id: string) => request<ClientCompanyDetailResponse>('/api/client-companies/' + id),
  createClientCompany: (input: CreateClientCompanyRequest) => request<ClientCompanyDetailResponse>('/api/client-companies', { method: 'POST', body: JSON.stringify(input) }),
  listAgreementsForCompany: (clientCompanyId: string) => request<WorkAgreementListResponse>('/api/client-companies/' + clientCompanyId + '/work-agreements'),
  createWorkAgreement: (input: CreateWorkAgreementRequest) => request<{ agreement: unknown }>('/api/work-agreements', { method: 'POST', body: JSON.stringify(input) }),
  updateWorkAgreementStatus: (id: string, status: WorkAgreementStatus) => request<{ agreement: unknown }>('/api/work-agreements/' + id + '/status', { method: 'PATCH', body: JSON.stringify({ status }) })
};
