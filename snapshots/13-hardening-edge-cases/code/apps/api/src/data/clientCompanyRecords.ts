import type { ClientCompany } from '@atlas/shared/clientCompany';

export const clientCompanyRecords: ClientCompany[] = [
  {
    id: 'client_northstar',
    legalName: 'Northstar Analytics Ltd.',
    primaryCountry: 'United Kingdom',
    status: 'active',
    accountOwnerEmail: 'maya.chen@atlas.example',
    createdAt: '2026-05-01T10:00:00.000Z',
    updatedAt: '2026-05-12T14:30:00.000Z'
  },
  {
    id: 'client_helio',
    legalName: 'HelioCloud Inc.',
    primaryCountry: 'United States',
    status: 'onboarding',
    accountOwnerEmail: 'omar.rivera@atlas.example',
    createdAt: '2026-05-03T11:00:00.000Z',
    updatedAt: '2026-05-16T09:15:00.000Z'
  },
  {
    id: 'client_terra',
    legalName: 'Terra Foods GmbH',
    primaryCountry: 'Germany',
    status: 'paused',
    accountOwnerEmail: 'liam.okafor@atlas.example',
    createdAt: '2026-05-08T08:20:00.000Z',
    updatedAt: '2026-05-18T16:45:00.000Z'
  }
];
