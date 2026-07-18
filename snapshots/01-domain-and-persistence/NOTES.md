# 01-domain-and-persistence: Domain Model And Persistence

## Goal
Give client companies a real domain shape and hide storage behind a repository boundary.

## What changed and why
Replaced anonymous dashboard rows with ClientCompany DTOs, an in-memory repository, and a service that owns read behavior.

## Key decisions
- Repository interface first: rejected Direct array imports in routes. The interface makes later persistence swaps visible and testable. It adds a little ceremony before a database exists.
- Shared DTO package: rejected Duplicated API and UI types. Shared contracts prevent drift. The tradeoff is coupling the apps to a package boundary.
- Read-only service for now: rejected Full CRUD immediately. Keeping writes out of this step lets the learner focus on model and persistence boundaries. CRUD arrives in snapshot 02.

## Deferred on purpose
Validation and write operations are still intentionally missing. Snapshot 02 adds CRUD, and snapshot 04 makes inputs trustworthy.

## Where to look
- code/packages/shared/src/clientCompany.ts
- code/apps/api/src/repositories/clientCompanyRepository.ts
- code/apps/api/src/services/clientCompanyService.ts
- code/apps/api/src/routes/clientCompanyRoutes.ts

## Predict before you read
What methods should a repository expose before the product supports create, update, and delete?

## Skills introduced
- domain modeling
- DTO design
- repository abstraction
- service layer
