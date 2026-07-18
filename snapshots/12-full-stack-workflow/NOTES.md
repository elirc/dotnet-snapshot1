# 12-full-stack-workflow: Full Stack Workflow

## Goal
Add a realistic cross-stack workflow for agreement search, filtering, pagination, and status transitions.

## What changed and why
Added agreement query DTOs, backend search/filter/pagination, status transition rules, and a frontend agreement operations page.

## Key decisions
- Cursor-shaped page metadata: rejected Returning raw arrays. Page metadata teaches scalable list APIs. The in-memory backend still uses offset-style slicing for readability.
- Explicit status transition service: rejected Let any PATCH set any status. A transition map makes business rules visible. The tradeoff is more code for a small enum.
- Dedicated agreements page: rejected Only nested company detail panels. Operators need a queue across clients. The tradeoff is more navigation and query state.

## Deferred on purpose
Rate limiting, a11y hardening, and auth edge cases remain. Snapshot 13 handles hardening.

## Where to look
- code/packages/shared/src/workAgreement.ts
- code/apps/api/src/services/agreementSearchService.ts
- code/apps/api/src/services/agreementStatusService.ts
- code/apps/web/src/features/agreements/AgreementOperationsPage.tsx

## Predict before you read
Which filters should be encoded in the URL or query object instead of local component state only?

## Skills introduced
- search and filtering
- pagination
- status workflow
- full-stack feature delivery
