import type { RequestHandler } from 'express';
import { ApiError } from '../errors/ApiError';

interface Bucket { count: number; resetAt: number; }
const buckets = new Map<string, Bucket>();

export function rateLimit({ windowMs, max }: { windowMs: number; max: number }): RequestHandler {
  return (req, _res, next) => {
    const key = req.currentUser?.id ?? req.ip;
    const now = Date.now();
    const bucket = buckets.get(key) ?? { count: 0, resetAt: now + windowMs };
    if (bucket.resetAt < now) { bucket.count = 0; bucket.resetAt = now + windowMs; }
    bucket.count += 1;
    buckets.set(key, bucket);
    if (bucket.count > max) throw new ApiError(429, 'rate_limited', 'Too many requests. Please slow down.');
    next();
  };
}
