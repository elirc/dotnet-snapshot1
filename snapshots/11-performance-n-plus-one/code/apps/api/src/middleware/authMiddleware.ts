import type { RequestHandler } from 'express';
import type { UserRole } from '@atlas/shared/user';
import { demoTokens } from '../auth/demoUsers';
import { ApiError } from '../errors/ApiError';

export const requireAuth: RequestHandler = (req, _res, next) => {
  const header = req.header('authorization');
  const token = header?.startsWith('Bearer ') ? header.slice('Bearer '.length) : undefined;
  const user = token ? demoTokens.get(token) : undefined;
  if (!user) throw new ApiError(401, 'unauthorized', 'Authentication is required');
  req.currentUser = user;
  next();
};

export function requireRole(...allowedRoles: UserRole[]): RequestHandler {
  return (req, _res, next) => {
    if (!req.currentUser) throw new ApiError(401, 'unauthorized', 'Authentication is required');
    if (!allowedRoles.includes(req.currentUser.role)) throw new ApiError(403, 'forbidden', 'You do not have access to this action');
    next();
  };
}
