import { describe, expect, it } from 'vitest';
import { ClientCompanyService } from './clientCompanyService';
import { buildClientCompany, createMemoryRepo } from '../test/builders';

describe('ClientCompanyService', () => {
  it('creates onboarding clients with generated timestamps', async () => {
    const service = new ClientCompanyService(createMemoryRepo() as never);
    const result = await service.createCompany({ legalName: 'Acme Global', primaryCountry: 'France', accountOwnerEmail: 'owner@atlas.example' });
    expect(result.company.status).toBe('onboarding');
  });

  it('hides archived clients from list results', async () => {
    const repo = createMemoryRepo([buildClientCompany({ id: 'client_a' })]);
    const service = new ClientCompanyService(repo as never);
    await service.archiveCompany('client_a');
    await expect(service.listCompanies()).resolves.toEqual({ companies: [] });
  });
});
