export type ClientStatus = 'active' | 'onboarding' | 'paused';

export interface DashboardClientCard {
  id: string;
  legalName: string;
  country: string;
  status: ClientStatus;
  openAgreements: number;
}

export interface DashboardSummary {
  generatedAt: string;
  activeClients: number;
  pendingAgreements: number;
  countriesCovered: number;
  clientCards: DashboardClientCard[];
}
