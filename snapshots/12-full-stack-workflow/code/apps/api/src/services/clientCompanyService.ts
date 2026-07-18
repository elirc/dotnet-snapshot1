import type { CreateClientCompanyRequest, ClientCompanyDetailResponse, ClientCompanyListResponse, UpdateClientCompanyRequest } from '@atlas/shared/clientCompany';
import type { DashboardSummary } from '@atlas/shared/dashboard';
import { clientCompanyRepository, type ClientCompanyRepository } from '../repositories/clientCompanyRepository';

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
}

export class ClientCompanyService {
  constructor(private readonly companies: ClientCompanyRepository) {}

  async listCompanies(): Promise<ClientCompanyListResponse> {
    const companies = await this.companies.findAll();
    return { companies: companies.map((company) => ({ ...company, openAgreementCount: 0 })) };
  }

  async getCompany(id: string): Promise<ClientCompanyDetailResponse | null> {
    const company = await this.companies.findById(id);
    return company ? { company } : null;
  }

  async createCompany(input: CreateClientCompanyRequest): Promise<ClientCompanyDetailResponse> {
    const now = new Date().toISOString();
    const company = await this.companies.create({
      id: 'client_' + slugify(input.legalName),
      legalName: input.legalName,
      primaryCountry: input.primaryCountry,
      accountOwnerEmail: input.accountOwnerEmail,
      status: 'onboarding',
      createdAt: now,
      updatedAt: now
    });
    return { company };
  }

  async updateCompany(id: string, input: UpdateClientCompanyRequest): Promise<ClientCompanyDetailResponse | null> {
    const company = await this.companies.update(id, { ...input, updatedAt: new Date().toISOString() });
    return company ? { company } : null;
  }

  async archiveCompany(id: string): Promise<boolean> {
    return this.companies.archive(id, new Date().toISOString());
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
