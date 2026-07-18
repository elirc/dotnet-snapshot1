import type { WorkAgreement } from '@atlas/shared/workAgreement';
import { workAgreementRecords } from '../data/workAgreementRecords';

export interface WorkAgreementRepository {
  findByClientCompanyId(clientCompanyId: string): Promise<WorkAgreement[]>;
  create(agreement: WorkAgreement): Promise<WorkAgreement>;
}

export class InMemoryWorkAgreementRepository implements WorkAgreementRepository {
  async findByClientCompanyId(clientCompanyId: string) {
    return workAgreementRecords.filter((agreement) => agreement.clientCompanyId === clientCompanyId).map((agreement) => ({ ...agreement }));
  }

  async create(agreement: WorkAgreement) {
    workAgreementRecords.push(agreement);
    return { ...agreement };
  }
}

export const workAgreementRepository = new InMemoryWorkAgreementRepository();
