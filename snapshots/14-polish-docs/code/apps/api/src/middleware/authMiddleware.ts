import type { RequestHandler } from 'express';
import type { UserRole } from '@atlas/shared/user';
import { demoTokens } from '../auth/demoUsers';
import { ApiError } from '../errors/ApiError';

export const requireAuth: RequestHandler = (req, _res, next) => {
  const header = req.header('authorization');
  if (!header) throw new ApiError(401, 'missing_token', 'Authentication token is required');
  if (!header.startsWith('Bearer ')) throw new ApiError(401, 'malformed_token', 'Authorization header must use Bearer token format');
  const user = demoTokens.get(header.slice('Bearer '.length));
  if (!user) throw new ApiError(401, 'invalid_token', 'Authentication token is invalid or expired');
  req.currentUser = user;
  next();
};

export function requireRole(...allowedRoles: UserRole[]): RequestHandler {
  return (req, _res, next) => {
    if (!req.currentUser) throw new ApiError(401, 'missing_token', 'Authentication token is required');
    if (!allowedRoles.includes(req.currentUser.role)) throw new ApiError(403, 'forbidden', 'You do not have access to this action');
    next();
  };
}
