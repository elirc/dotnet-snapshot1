import type { DashboardSummary } from '@atlas/shared/dashboard';
import { clientCompanyRepository, type ClientCompanyRepository } from '../repositories/clientCompanyRepository';
import { workAgreementRepository, type WorkAgreementRepository } from '../repositories/workAgreementRepository';

export class WorkforceOperationsService {
  constructor(private readonly companies: ClientCompanyRepository, private readonly agreements: WorkAgreementRepository) {}

  async getDashboardSummary(): Promise<DashboardSummary> {
    const companies = await this.companies.findAll();
    const agreementCounts = await this.agreements.countByClientIds(companies.map((company) => company.id));
    const cards = companies.map((company) => ({ id: company.id, legalName: company.legalName, country: company.primaryCountry, status: company.status, openAgreements: agreementCounts.get(company.id) ?? 0 }));
    return { generatedAt: new Date().toISOString(), activeClients: companies.filter((company) => company.status === 'active').length, pendingAgreements: cards.reduce((sum, card) => sum + card.openAgreements, 0), countriesCovered: new Set(companies.map((company) => company.primaryCountry)).size, clientCards: cards };
  }
}

export const workforceOperationsService = new WorkforceOperationsService(clientCompanyRepository, workAgreementRepository);
