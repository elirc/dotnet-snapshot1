# 03-wire-frontend: Wire Feature To Frontend

## Goal
Let an operator list, inspect, and create client companies through the React app.

## What changed and why
Replaced the static dashboard screen with feature pages, a typed API client, and a create form wired to backend CRUD.

## Key decisions
- Feature folders: rejected Flat components folder. Feature folders keep domain UI, API usage, and forms close together. Shared components can still emerge later.
- Simple state machine routing: rejected React Router immediately. The teaching focus is data flow, not routing setup. Real routing can be added once pages multiply.
- Manual fetch client: rejected React Query immediately. Manual fetch exposes loading and error mechanics first. Snapshot 08 upgrades data management.

## Deferred on purpose
The form trusts the user too much and refetching is manual. Snapshot 04 handles errors, and snapshot 08 handles caching.

## Where to look
- code/apps/web/src/api/http.ts
- code/apps/web/src/features/companies/CompanyListPage.tsx
- code/apps/web/src/features/companies/CompanyDetailPage.tsx
- code/apps/web/src/features/companies/CreateCompanyForm.tsx
- code/apps/web/src/App.tsx

## Predict before you read
Where would you keep API fetch logic so components do not hardcode endpoint strings?

## Skills introduced
- frontend integration
- typed API client
- controlled form
- loading states
