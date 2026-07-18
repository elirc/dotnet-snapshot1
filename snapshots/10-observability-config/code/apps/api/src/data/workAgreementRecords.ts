import type { WorkAgreement } from '@atlas/shared/workAgreement';

export const workAgreementRecords: WorkAgreement[] = [
  {
    id: 'agreement_001',
    clientCompanyId: 'client_northstar',
    workerName: 'Avery Brooks',
    workerCountry: 'Ireland',
    roleTitle: 'Senior Data Analyst',
    status: 'in_review',
    startDate: '2026-07-01',
    localEntityCode: 'IE-EOR-01',
    createdAt: '2026-05-20T09:00:00.000Z',
    updatedAt: '2026-05-23T09:00:00.000Z'
  },
  {
    id: 'agreement_002',
    clientCompanyId: 'client_helio',
    workerName: 'Priya Shah',
    workerCountry: 'Canada',
    roleTitle: 'Customer Success Lead',
    status: 'draft',
    startDate: '2026-07-15',
    localEntityCode: 'CA-EOR-02',
    createdAt: '2026-05-21T10:00:00.000Z',
    updatedAt: '2026-05-21T10:00:00.000Z'
  }
];
