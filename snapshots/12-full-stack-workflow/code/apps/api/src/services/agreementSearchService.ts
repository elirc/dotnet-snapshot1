import type { AgreementSearchQuery, AgreementSearchResponse } from '@atlas/shared/workAgreement';
import { workAgreementRecords } from '../data/workAgreementRecords';

export class AgreementSearchService {
  async search(query: AgreementSearchQuery): Promise<AgreementSearchResponse> {
    const page = Math.max(1, Number(query.page ?? 1));
    const pageSize = Math.min(50, Math.max(5, Number(query.pageSize ?? 10)));
    const q = query.q?.toLowerCase().trim();
    const filtered = workAgreementRecords.filter((agreement) => {
      const matchesText = !q || [agreement.workerName, agreement.roleTitle, agreement.workerCountry].some((value) => value.toLowerCase().includes(q));
      const matchesStatus = !query.status || query.status === 'all' || agreement.status === query.status;
      const matchesCountry = !query.country || agreement.workerCountry === query.country;
      return matchesText && matchesStatus && matchesCountry;
    });
    const start = (page - 1) * pageSize;
    return { agreements: filtered.slice(start, start + pageSize), page, pageSize, total: filtered.length };
  }
}

export const agreementSearchService = new AgreementSearchService();
