# 07-refactor-service-and-hooks: Refactor Service And Hooks

- code/apps/api/src/services/workforceOperationsService.ts: Moved dashboard and relationship orchestration into a dedicated use-case service.
- code/apps/api/src/controllers/dashboardController.ts: Slimmed dashboard HTTP handling down to request/response work.
- code/apps/api/src/routes/dashboardRoutes.ts: Mounted dashboard controller independently.
- code/apps/api/src/app.ts: Replaced inline dashboard route with a route module.
- code/apps/web/src/hooks/useApiResource.ts: Added reusable loading/error/data state for fetches.
- code/apps/web/src/features/companies/CompanyListPage.tsx: Replaced duplicated fetch state with the hook.
