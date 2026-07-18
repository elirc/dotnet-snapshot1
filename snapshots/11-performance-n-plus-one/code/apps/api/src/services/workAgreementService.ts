import type { CreateWorkAgreementRequest, WorkAgreementListResponse, WorkAgreementStatus } from '@atlas/shared/workAgreement';
import { ApiError } from '../errors/ApiError';
import { clientCompanyRepository, type ClientCompanyRepository } from '../repositories/clientCompanyRepository';
import { workAgreementRepository, type WorkAgreementRepository } from '../repositories/workAgreementRepository';

export class WorkAgreementService {
  constructor(private readonly agreements: WorkAgreementRepository, private readonly companies: ClientCompanyRepository) {}

  async listForClientCompany(clientCompanyId: string): Promise<WorkAgreementListResponse> {
    const company = await this.companies.findById(clientCompanyId);
    if (!company) throw ApiError.notFound('Client company not found');
    return { agreements: await this.agreements.findByClientCompanyId(clientCompanyId) };
  }

  async createAgreement(input: CreateWorkAgreementRequest) {
    const company = await this.companies.findById(input.clientCompanyId);
    if (!company) throw ApiError.notFound('Client company not found');
    const now = new Date().toISOString();
    const agreement = await this.agreements.create({ id: 'agreement_' + Math.random().toString(36).slice(2, 10), clientCompanyId: input.clientCompanyId, workerName: input.workerName, workerCountry: input.workerCountry, roleTitle: input.roleTitle, startDate: input.startDate, status: 'draft', localEntityCode: input.workerCountry.slice(0, 2).toUpperCase() + '-EOR-TBD', createdAt: now, updatedAt: now });
    return { agreement };
  }

  async updateStatus(id: string, status: WorkAgreementStatus) {
    const agreement = await this.agreements.updateStatus(id, status, new Date().toISOString());
    if (!agreement) throw ApiError.notFound('Work agreement not found');
    return { agreement };
  }
}

export const workAgreementService = new WorkAgreementService(workAgreementRepository, clientCompanyRepository);
