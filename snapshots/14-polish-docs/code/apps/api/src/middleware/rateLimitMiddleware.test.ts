import { describe, expect, it } from 'vitest';
import { rateLimit } from './rateLimitMiddleware';

describe('rateLimit', () => {
  it('returns middleware for mutation throttling', () => {
    expect(rateLimit({ windowMs: 1000, max: 1 })).toEqual(expect.any(Function));
  });
});
