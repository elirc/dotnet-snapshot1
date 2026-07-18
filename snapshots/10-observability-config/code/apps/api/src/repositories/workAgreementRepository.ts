import type { WorkAgreement, WorkAgreementStatus } from '@atlas/shared/workAgreement';
import { workAgreementRecords } from '../data/workAgreementRecords';

export interface WorkAgreementRepository {
  findByClientCompanyId(clientCompanyId: string): Promise<WorkAgreement[]>;
  findById(id: string): Promise<WorkAgreement | null>;
  create(agreement: WorkAgreement): Promise<WorkAgreement>;
  updateStatus(id: string, status: WorkAgreementStatus, updatedAt: string): Promise<WorkAgreement | null>;
}

export class InMemoryWorkAgreementRepository implements WorkAgreementRepository {
  async findByClientCompanyId(clientCompanyId: string) {
    return workAgreementRecords.filter((agreement) => agreement.clientCompanyId === clientCompanyId).map((agreement) => ({ ...agreement }));
  }

  async findById(id: string) {
    const agreement = workAgreementRecords.find((candidate) => candidate.id === id);
    return agreement ? { ...agreement } : null;
  }

  async create(agreement: WorkAgreement) {
    workAgreementRecords.push(agreement);
    return { ...agreement };
  }

  async updateStatus(id: string, status: WorkAgreementStatus, updatedAt: string) {
    const index = workAgreementRecords.findIndex((agreement) => agreement.id === id);
    if (index === -1) return null;
    workAgreementRecords[index] = { ...workAgreementRecords[index], status, updatedAt };
    return { ...workAgreementRecords[index] };
  }
}

export const workAgreementRepository = new InMemoryWorkAgreementRepository();
