import type { RequestHandler } from 'express';
import { randomUUID } from 'node:crypto';
import { config } from '../config/env';

declare global {
  namespace Express {
    interface Request { requestId?: string; }
  }
}

export const requestContext: RequestHandler = (req, res, next) => {
  const incoming = req.header(config.requestIdHeader);
  req.requestId = incoming && incoming.length < 128 ? incoming : randomUUID();
  res.setHeader(config.requestIdHeader, req.requestId);
  next();
};
