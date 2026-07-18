export type ClientCompanyStatus = 'active' | 'onboarding' | 'paused';

export interface ClientCompany {
  id: string;
  legalName: string;
  primaryCountry: string;
  status: ClientCompanyStatus;
  accountOwnerEmail: string;
  createdAt: string;
  updatedAt: string;
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
