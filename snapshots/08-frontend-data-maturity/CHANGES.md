# 08-frontend-data-maturity: Frontend Data Maturity

- code/apps/web/src/query/queryClient.tsx: Added a lightweight teaching cache provider.
- code/apps/web/src/features/companies/useCompanyQueries.ts: Centralized company list/detail query behavior.
- code/apps/web/src/features/agreements/useAgreementQueries.ts: Centralized agreement queries and mutations.
- code/apps/web/src/features/agreements/AgreementPanel.tsx: Added optimistic status changes and cache invalidation.
- code/apps/web/src/main.tsx: Wrapped the app in the query provider.
