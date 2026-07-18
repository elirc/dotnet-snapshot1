import type { CreateClientCompanyRequest, ClientCompanyDetailResponse, ClientCompanyListResponse } from '@atlas/shared/clientCompany';
import type { ApiErrorResponse } from '@atlas/shared/errors';
import { ApiClientError } from './errors';

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(path, {
    headers: { 'Content-Type': 'application/json', ...(init?.headers ?? {}) },
    ...init
  });

  if (!response.ok) {
    const body = (await response.json()) as ApiErrorResponse;
    throw new ApiClientError(body, response.status);
  }

  if (response.status === 204) return undefined as T;
  return response.json();
}

export const api = {
  listClientCompanies: () => request<ClientCompanyListResponse>('/api/client-companies'),
  getClientCompany: (id: string) => request<ClientCompanyDetailResponse>('/api/client-companies/' + id),
  createClientCompany: (input: CreateClientCompanyRequest) =>
    request<ClientCompanyDetailResponse>('/api/client-companies', { method: 'POST', body: JSON.stringify(input) })
};
