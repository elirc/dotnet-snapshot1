import type { ClientCompany } from '@atlas/shared/clientCompany';

export function buildClientCompany(overrides: Partial<ClientCompany> = {}): ClientCompany {
  const now = '2026-06-01T00:00:00.000Z';
  return { id: 'client_test', legalName: 'Test Client Ltd.', primaryCountry: 'Spain', status: 'onboarding', accountOwnerEmail: 'owner@atlas.example', createdAt: now, updatedAt: now, ...overrides };
}

export function createMemoryRepo(seed: ClientCompany[] = []) {
  const records = [...seed];
  return {
    findAll: async () => records.filter((company) => !company.archivedAt),
    findById: async (id: string) => records.find((company) => company.id === id && !company.archivedAt) ?? null,
    create: async (company: ClientCompany) => { records.push(company); return company; },
    update: async (id: string, patch: Partial<ClientCompany>) => {
      const index = records.findIndex((company) => company.id === id);
      if (index === -1) return null;
      records[index] = { ...records[index], ...patch };
      return records[index];
    },
    archive: async (id: string, archivedAt: string) => Boolean(await (createMemoryRepo(records).update(id, { archivedAt })))
  };
}
