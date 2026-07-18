import type { DashboardSummary } from '@atlas/shared/dashboard';

export const demoDashboardSummary: DashboardSummary = {
  generatedAt: '2026-06-01T12:00:00.000Z',
  activeClients: 4,
  pendingAgreements: 9,
  countriesCovered: 12,
  clientCards: [
    {
      id: 'client_northstar',
      legalName: 'Northstar Analytics Ltd.',
      country: 'United Kingdom',
      status: 'active',
      openAgreements: 3
    },
    {
      id: 'client_helio',
      legalName: 'HelioCloud Inc.',
      country: 'United States',
      status: 'onboarding',
      openAgreements: 5
    },
    {
      id: 'client_terra',
      legalName: 'Terra Foods GmbH',
      country: 'Germany',
      status: 'paused',
      openAgreements: 1
    }
  ]
};
