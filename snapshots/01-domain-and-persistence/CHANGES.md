# 01-domain-and-persistence: Domain Model And Persistence

- code/packages/shared/src/clientCompany.ts: Added the first business entity and request/response DTOs.
- code/packages/shared/package.json: Exported the client company contract.
- code/apps/api/src/data/clientCompanyRecords.ts: Moved client data into a persistence-shaped module.
- code/apps/api/src/repositories/clientCompanyRepository.ts: Introduced the repository interface and in-memory implementation.
- code/apps/api/src/services/clientCompanyService.ts: Added read orchestration for client companies and dashboard metrics.
- code/apps/api/src/routes/clientCompanyRoutes.ts: Added read endpoints for collection and detail.
- code/apps/api/src/app.ts: Mounted client company routes and delegated dashboard data to the service.
