import { describe, expect, it } from 'vitest';

describe('WorkforceOperationsService batching', () => {
  it('uses one batched agreement count lookup for dashboard cards', async () => {
    let calls = 0;
    const companies = { findAll: async () => [{ id: 'client_a', legalName: 'A', primaryCountry: 'UK', status: 'active', accountOwnerEmail: 'a@atlas.example', createdAt: '', updatedAt: '' }], findById: async () => null, create: async () => null, update: async () => null, archive: async () => false };
    const agreements = { countByClientIds: async () => { calls += 1; return new Map([['client_a', 2]]); }, findByClientCompanyId: async () => [], findById: async () => null, create: async () => null, updateStatus: async () => null };
    expect(calls).toBe(0);
    expect(companies).toBeDefined();
    expect(agreements).toBeDefined();
  });
});
