export type WorkAgreementStatus = 'draft' | 'in_review' | 'ready_for_signature' | 'active' | 'blocked';

export interface WorkAgreement {
  id: string;
  clientCompanyId: string;
  workerName: string;
  workerCountry: string;
  roleTitle: string;
  status: WorkAgreementStatus;
  startDate: string;
  localEntityCode: string;
  createdAt: string;
  updatedAt: string;
}

export interface WorkAgreementListResponse {
  agreements: WorkAgreement[];
}

export interface CreateWorkAgreementRequest {
  clientCompanyId: string;
  workerName: string;
  workerCountry: string;
  roleTitle: string;
  startDate: string;
}
