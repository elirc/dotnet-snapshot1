# 06-auth-authorization: Auth And Authorization

## Goal
Add current-user context and protect workflows according to operator roles.

## What changed and why
Added demo users, bearer-token middleware, role checks, protected API routes, frontend auth context, login screen, and guarded app shell.

## Key decisions
- Demo bearer tokens: rejected Full OAuth provider. Tokens teach request auth without external setup. The tradeoff is no real identity provider yet.
- Role middleware near routes: rejected Role checks inside repositories. Authorization belongs at the use-case boundary, not persistence. Services still receive current user context for audit fields.
- Frontend auth context: rejected Passing token props everywhere. Context keeps protected pages simple. It creates global state that must be tested later.

## Deferred on purpose
Token expiry, refresh, and rate limiting are not hardened yet. Snapshot 13 handles auth edge cases and abuse protection.

## Where to look
- code/apps/api/src/auth/demoUsers.ts
- code/apps/api/src/middleware/authMiddleware.ts
- code/apps/api/src/context/currentUser.ts
- code/apps/web/src/auth/AuthProvider.tsx
- code/apps/web/src/auth/LoginPage.tsx

## Predict before you read
Which requests should require admin access versus any authenticated operator?

## Skills introduced
- authentication middleware
- authorization roles
- current-user context
- protected routes
