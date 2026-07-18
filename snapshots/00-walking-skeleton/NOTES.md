# 00-walking-skeleton: Walking Skeleton

## Goal
Prove the frontend and backend can talk before any business complexity exists.

## What changed and why
Added a tiny Express API, a Vite React app, shared dashboard types, and fake in-memory dashboard data.

## Key decisions
- Monorepo workspace: rejected Separate repos. A workspace keeps API, web, and shared types visible to a junior in one folder. The tradeoff is more package structure on day one.
- Fake in-memory data: rejected Database first. Fake data makes the vertical slice readable. Persistence arrives in snapshot 01.
- One summary endpoint: rejected Many resource endpoints. A summary endpoint proves wiring with minimal route noise. Resource design begins next.

## Deferred on purpose
No real domain model, validation, auth, or persistence yet. Snapshot 01 introduces the first domain model and repository boundary.

## Where to look
- code/apps/api/src/app.ts
- code/apps/api/src/data/demoSnapshot.ts
- code/apps/web/src/App.tsx
- code/packages/shared/src/dashboard.ts

## Predict before you read
Before opening the code, decide where you would put the fake data so both API and UI remain easy to change later.

## Skills introduced
- walking skeleton
- monorepo structure
- shared TypeScript contracts
- vertical slice
