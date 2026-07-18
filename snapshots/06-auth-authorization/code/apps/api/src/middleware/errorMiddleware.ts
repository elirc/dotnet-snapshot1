import type { ErrorRequestHandler } from 'express';
import { ApiError } from '../errors/ApiError';

export const errorMiddleware: ErrorRequestHandler = (error, _req, res, _next) => {
  if (error instanceof ApiError) {
    res.status(error.statusCode).json({
      error: {
        code: error.code,
        message: error.message,
        details: error.details
      }
    });
    return;
  }

  res.status(500).json({ error: { code: 'internal_error', message: 'Unexpected server error' } });
};
