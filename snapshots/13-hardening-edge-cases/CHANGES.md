# 13-hardening-edge-cases: Hardening And Edge Cases

- code/apps/api/src/middleware/rateLimitMiddleware.ts: Added request throttling for mutating routes.
- code/apps/api/src/middleware/authMiddleware.ts: Clarified missing, malformed, and forbidden auth errors.
- code/apps/api/src/routes/clientCompanyRoutes.ts: Applied mutation rate limits.
- code/apps/api/src/routes/workAgreementRoutes.ts: Applied mutation rate limits.
- code/apps/web/src/components/ErrorBoundary.tsx: Added recoverable UI failure boundary.
- code/apps/web/src/components/SkipLink.tsx: Added keyboard navigation aid.
- code/apps/web/src/features/agreements/AgreementOperationsPage.tsx: Improved labels, live regions, and empty states.
- code/apps/api/src/middleware/rateLimitMiddleware.test.ts: Covered throttling edge cases.
