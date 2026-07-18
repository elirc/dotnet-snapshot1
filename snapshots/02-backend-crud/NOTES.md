# 02-backend-crud: Backend CRUD

## Goal
Complete the backend path for creating, reading, updating, and deleting client companies.

## What changed and why
Added controller functions, write DTOs, mutable repository operations, and HTTP routes for client company CRUD.

## Key decisions
- Controller-service-repository split: rejected One route file with all logic. The split makes responsibilities teachable. The tradeoff is more files for a small feature.
- Soft delete flag: rejected Removing records from memory. Soft delete mirrors enterprise audit needs. The tradeoff is every query must remember to filter archived records.
- Service-generated timestamps: rejected Controller-generated timestamps. Keeping lifecycle fields in the service prevents HTTP details from leaking into domain rules.

## Deferred on purpose
Input validation is still weak by design. Snapshot 04 adds schema validation and consistent API errors.

## Where to look
- code/apps/api/src/controllers/clientCompanyController.ts
- code/apps/api/src/services/clientCompanyService.ts
- code/apps/api/src/repositories/clientCompanyRepository.ts
- code/apps/api/src/routes/clientCompanyRoutes.ts

## Predict before you read
Which layer should decide that a deleted client is archived instead of physically removed?

## Skills introduced
- CRUD endpoints
- controller layer
- soft delete
- service orchestration
