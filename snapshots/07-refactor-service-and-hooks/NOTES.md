# 07-refactor-service-and-hooks: Refactor Service And Hooks

## Goal
Revisit earlier shortcuts once duplicated controller and fetch logic become painful.

## What changed and why
Extracted workforce orchestration into a service, tightened shared error handling, and replaced repetitive frontend fetch state with a reusable API resource hook.

## Key decisions
- Refactor after behavior exists: rejected Premature abstraction in snapshot 00. Waiting reveals the real duplication. The tradeoff is living with some mess for a few snapshots.
- WorkforceOperationsService: rejected Controllers composing repositories directly. A fat use-case service keeps business workflow decisions out of HTTP handlers. It can become too large if not split later.
- Reusable useApiResource hook: rejected Copying useEffect loading code. The hook teaches reusable async UI state. Snapshot 08 replaces parts of it with caching.

## Deferred on purpose
Caching and optimistic updates still need a real data layer. Snapshot 08 upgrades frontend data maturity.

## Where to look
- code/apps/api/src/services/workforceOperationsService.ts
- code/apps/api/src/controllers/dashboardController.ts
- code/apps/web/src/hooks/useApiResource.ts
- code/apps/web/src/features/companies/CompanyListPage.tsx

## Predict before you read
Look for repeated loading/error/fetch code in snapshot 06. What would you extract first?

## Skills introduced
- refactoring
- fat service layer
- shared middleware
- custom React hook
