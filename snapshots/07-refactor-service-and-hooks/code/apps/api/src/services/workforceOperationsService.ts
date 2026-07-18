import type { DashboardSummary } from '@atlas/shared/dashboard';
import { clientCompanyRepository, type ClientCompanyRepository } from '../repositories/clientCompanyRepository';
import { workAgreementRepository, type WorkAgreementRepository } from '../repositories/workAgreementRepository';

export class WorkforceOperationsService {
  constructor(
    private readonly companies: ClientCompanyRepository,
    private readonly agreements: WorkAgreementRepository
  ) {}

  async getDashboardSummary(): Promise<DashboardSummary> {
    const companies = await this.companies.findAll();
    const cards = await Promise.all(companies.map(async (company) => {
      const agreements = await this.agreements.findByClientCompanyId(company.id);
      return {
        id: company.id,
        legalName: company.legalName,
        country: company.primaryCountry,
        status: company.status,
        openAgreements: agreements.filter((agreement) => agreement.status !== 'active').length
      };
    }));

    return {
      generatedAt: new Date().toISOString(),
      activeClients: companies.filter((company) => company.status === 'active').length,
      pendingAgreements: cards.reduce((sum, card) => sum + card.openAgreements, 0),
      countriesCovered: new Set(companies.map((company) => company.primaryCountry)).size,
      clientCards: cards
    };
  }
}

export const workforceOperationsService = new WorkforceOperationsService(clientCompanyRepository, workAgreementRepository);
