import type { ErrorRequestHandler } from 'express';
import { ApiError } from '../errors/ApiError';
import { logger } from '../observability/logger';

export const errorMiddleware: ErrorRequestHandler = (error, req, res, _next) => {
  if (error instanceof ApiError) {
    logger.warn({ message: 'operational api error', requestId: req.requestId, code: error.code, statusCode: error.statusCode });
    res.status(error.statusCode).json({ error: { code: error.code, message: error.message, details: error.details, requestId: req.requestId } });
    return;
  }
  logger.error({ message: 'unexpected api error', requestId: req.requestId, errorName: error?.name });
  res.status(500).json({ error: { code: 'internal_error', message: 'Unexpected server error', requestId: req.requestId } });
};
