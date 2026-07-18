# 09-testing-harness: Testing Harness

- code/package.json: Added workspace test script.
- code/apps/api/vitest.config.ts: Configured API tests.
- code/apps/api/src/test/builders.ts: Added reusable domain fixture builders.
- code/apps/api/src/services/clientCompanyService.test.ts: Covered service create/archive behavior.
- code/apps/api/src/routes/clientCompanyRoutes.test.ts: Covered HTTP validation and auth paths.
- code/apps/web/vitest.config.ts: Configured frontend component tests.
- code/apps/web/src/test/renderWithProviders.tsx: Added provider-aware render helper.
- code/apps/web/src/features/companies/CompanyListPage.test.tsx: Covered loading and empty list behavior.
