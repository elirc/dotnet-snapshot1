import type { WorkAgreementStatus } from '@atlas/shared/workAgreement';
import { ApiError } from '../errors/ApiError';
import { workAgreementRepository } from '../repositories/workAgreementRepository';

const allowedTransitions: Record<WorkAgreementStatus, WorkAgreementStatus[]> = {
  draft: ['in_review', 'blocked'],
  in_review: ['ready_for_signature', 'blocked'],
  ready_for_signature: ['active', 'blocked'],
  active: ['blocked'],
  blocked: ['draft', 'in_review']
};

export class AgreementStatusService {
  async transition(id: string, nextStatus: WorkAgreementStatus) {
    const current = await workAgreementRepository.findById(id);
    if (!current) throw ApiError.notFound('Work agreement not found');
    if (!allowedTransitions[current.status].includes(nextStatus)) throw new ApiError(409, 'invalid_status_transition', 'That status transition is not allowed');
    return { agreement: await workAgreementRepository.updateStatus(id, nextStatus, new Date().toISOString()) };
  }
}

export const agreementStatusService = new AgreementStatusService();
