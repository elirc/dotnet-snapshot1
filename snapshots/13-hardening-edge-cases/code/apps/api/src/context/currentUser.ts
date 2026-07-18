import type { CurrentUser } from '@atlas/shared/user';

declare global {
  namespace Express {
    interface Request {
      currentUser?: CurrentUser;
    }
  }
}

export {};
