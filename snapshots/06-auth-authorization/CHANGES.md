# 06-auth-authorization: Auth And Authorization

- code/packages/shared/src/user.ts: Added user and role contracts.
- code/apps/api/src/auth/demoUsers.ts: Defined demo users and tokens for local auth.
- code/apps/api/src/context/currentUser.ts: Added request-local current user typing.
- code/apps/api/src/middleware/authMiddleware.ts: Added requireAuth and requireRole middleware.
- code/apps/api/src/routes/clientCompanyRoutes.ts: Protected write routes with role checks.
- code/apps/api/src/routes/workAgreementRoutes.ts: Protected agreement operations.
- code/apps/web/src/auth/AuthProvider.tsx: Added frontend auth state and API token plumbing.
- code/apps/web/src/auth/LoginPage.tsx: Added a demo login screen.
- code/apps/web/src/App.tsx: Wrapped product screens in auth-aware shell.
