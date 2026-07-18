# 08-frontend-data-maturity: Frontend Data Maturity

## Goal
Move from manual fetch state to cache-aware frontend data flows.

## What changed and why
Added a small React Query-style client, query keys, feature query hooks, cache invalidation, and optimistic agreement status updates.

## Key decisions
- React Query-style facade: rejected Raw useEffect everywhere. The facade teaches stale data, invalidation, and mutation flows. It is simulated, so production would use TanStack Query directly.
- Feature-owned query keys: rejected Global string constants only. Feature ownership makes invalidation readable. The tradeoff is learning key discipline.
- Optimistic status update: rejected Wait for server before changing UI. Optimism makes workflows feel fast. The tradeoff is rollback logic when the server rejects.

## Deferred on purpose
Tests do not yet protect query behavior. Snapshot 09 adds the harness and key coverage.

## Where to look
- code/apps/web/src/query/queryClient.tsx
- code/apps/web/src/features/companies/useCompanyQueries.ts
- code/apps/web/src/features/agreements/useAgreementQueries.ts
- code/apps/web/src/features/agreements/AgreementPanel.tsx

## Predict before you read
Which interactions need invalidation, and which can be updated optimistically?

## Skills introduced
- client caching
- query keys
- cache invalidation
- optimistic updates
