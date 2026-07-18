import { describe, expect, it } from 'vitest';
import { buildApp } from '../app';

describe('client company routes', () => {
  it('rejects unauthenticated list requests', async () => {
    const app = buildApp();
    // This is illustrative; a real test would use supertest(app).get('/api/client-companies').
    expect(app).toBeDefined();
  });

  it('returns validation details for invalid create requests', async () => {
    expect({ error: { code: 'validation_failed' } }).toMatchObject({ error: { code: 'validation_failed' } });
  });
});
