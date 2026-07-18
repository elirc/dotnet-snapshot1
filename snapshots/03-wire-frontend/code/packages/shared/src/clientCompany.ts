export type ClientCompanyStatus = 'active' | 'onboarding' | 'paused';

export interface ClientCompany {
  id: string;
  legalName: string;
  primaryCountry: string;
  status: ClientCompanyStatus;
  accountOwnerEmail: string;
  createdAt: string;
  updatedAt: string;
  archivedAt?: string;
}

export interface ClientCompanyListItem extends ClientCompany {
  openAgreementCount: number;
}

export interface ClientCompanyListResponse {
  companies: ClientCompanyListItem[];
}

export interface ClientCompanyDetailResponse {
  company: ClientCompany;
}

export interface CreateClientCompanyRequest {
  legalName: string;
  primaryCountry: string;
  accountOwnerEmail: string;
}

export interface UpdateClientCompanyRequest {
  legalName?: string;
  primaryCountry?: string;
  status?: ClientCompanyStatus;
  accountOwnerEmail?: string;
}
