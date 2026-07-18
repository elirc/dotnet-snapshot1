import type { ClientCompanyDetailResponse, ClientCompanyListResponse } from '@atlas/shared/clientCompany';
import type { DashboardSummary } from '@atlas/shared/dashboard';
import { clientCompanyRepository, type ClientCompanyRepository } from '../repositories/clientCompanyRepository';

export class ClientCompanyService {
  constructor(private readonly companies: ClientCompanyRepository) {}

  async listCompanies(): Promise<ClientCompanyListResponse> {
    const companies = await this.companies.findAll();
    return {
      companies: companies.map((company) => ({
        ...company,
        openAgreementCount: 0
      }))
    };
  }

  async getCompany(id: string): Promise<ClientCompanyDetailResponse | null> {
    const company = await this.companies.findById(id);
    return company ? { company } : null;
  }

  async getDashboardSummary(): Promise<DashboardSummary> {
    const companies = await this.companies.findAll();
    return {
      generatedAt: new Date().toISOString(),
      activeClients: companies.filter((company) => company.status === 'active').length,
      pendingAgreements: 0,
      countriesCovered: new Set(companies.map((company) => company.primaryCountry)).size,
      clientCards: companies.map((company) => ({
        id: company.id,
        legalName: company.legalName,
        country: company.primaryCountry,
        status: company.status,
        openAgreements: 0
      }))
    };
  }
}

export const clientCompanyService = new ClientCompanyService(clientCompanyRepository);
