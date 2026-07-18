# Learning Journal: Atlas Global Workforce

## Project overview
Atlas Global Workforce is a simulated enterprise operator console for managing client companies and localized work agreements across countries. The teaching goal is not to provide a runnable product; it is to show how a realistic TypeScript/Node plus React codebase gains shape over time through domain modeling, API design, frontend integration, validation, auth, refactoring, data fetching maturity, tests, observability, performance work, hardening, and documentation.

## Architecture conventions
- Backend: Express-style TypeScript with controllers, services, repositories, middleware, config, and observability modules.
- Frontend: React feature folders with typed API clients, auth context, query hooks, reusable UI states, and route-like screen composition.
- Shared contracts: packages/shared contains DTOs used by both API and frontend.
- Persistence: intentionally in-memory, hidden behind repositories so persistence concerns remain teachable without infrastructure.

## Snapshot index
00. 00-walking-skeleton - Prove the frontend and backend can talk before any business complexity exists.
01. 01-domain-and-persistence - Give client companies a real domain shape and hide storage behind a repository boundary.
02. 02-backend-crud - Complete the backend path for creating, reading, updating, and deleting client companies.
03. 03-wire-frontend - Let an operator list, inspect, and create client companies through the React app.
04. 04-validation-and-errors - Make bad input and failed requests predictable across the API and frontend.
05. 05-second-entity-relationship - Model work agreements as child records attached to client companies.
06. 06-auth-authorization - Add current-user context and protect workflows according to operator roles.
07. 07-refactor-service-and-hooks - Revisit earlier shortcuts once duplicated controller and fetch logic become painful.
08. 08-frontend-data-maturity - Move from manual fetch state to cache-aware frontend data flows.
09. 09-testing-harness - Add fast feedback around services, HTTP endpoints, and important React behavior.
10. 10-observability-config - Make runtime behavior visible and environment settings explicit.
11. 11-performance-n-plus-one - Show how a harmless-looking relationship lookup becomes slow, then fix it with batching.
12. 12-full-stack-workflow - Add a realistic cross-stack workflow for agreement search, filtering, pagination, and status transitions.
13. 13-hardening-edge-cases - Patch the sharp edges that appear once the app resembles an enterprise workflow.
14. 14-polish-docs - Finish the teaching artifact with codebase docs, API docs, and a retrospective tying the snapshots together.

## Skills to snapshot map
- walking skeleton: snapshots/00-walking-skeleton
- monorepo structure: snapshots/00-walking-skeleton
- domain modeling: snapshots/01-domain-and-persistence
- DTO design: snapshots/01-domain-and-persistence
- repository abstraction: snapshots/01-domain-and-persistence
- CRUD endpoints: snapshots/02-backend-crud
- controller layer: snapshots/02-backend-crud
- frontend integration: snapshots/03-wire-frontend
- typed API client: snapshots/03-wire-frontend
- input validation: snapshots/04-validation-and-errors
- error middleware: snapshots/04-validation-and-errors
- entity relationship: snapshots/05-second-entity-relationship
- authentication middleware: snapshots/06-auth-authorization
- authorization roles: snapshots/06-auth-authorization
- refactoring: snapshots/07-refactor-service-and-hooks
- custom React hook: snapshots/07-refactor-service-and-hooks
- client caching: snapshots/08-frontend-data-maturity
- optimistic updates: snapshots/08-frontend-data-maturity
- unit testing: snapshots/09-testing-harness
- integration testing: snapshots/09-testing-harness
- component testing: snapshots/09-testing-harness
- environment config: snapshots/10-observability-config
- structured logging: snapshots/10-observability-config
- correlation IDs: snapshots/10-observability-config
- N+1 query: snapshots/11-performance-n-plus-one
- batch loading: snapshots/11-performance-n-plus-one
- search and filtering: snapshots/12-full-stack-workflow
- pagination: snapshots/12-full-stack-workflow
- status workflow: snapshots/12-full-stack-workflow
- rate limiting: snapshots/13-hardening-edge-cases
- error boundaries: snapshots/13-hardening-edge-cases
- accessibility pass: snapshots/13-hardening-edge-cases
- API documentation: snapshots/14-polish-docs
- runbook writing: snapshots/14-polish-docs
- engineering retrospective: snapshots/14-polish-docs

## Study loop
1. Read the Goal in the snapshot NOTES.md.
2. Answer "Predict before you read" before opening code/.
3. Explore code/ using the "Where to look" pointers.
4. Diff against the previous snapshot. In VSCode: select both folders, right-click, then Compare Selected.
5. Check the Key decisions against your prediction and ask what tradeoff you would have made.

## Suggested paths
- New backend engineer: 00 -> 01 -> 02 -> 04 -> 06 -> 10 -> 11.
- New frontend engineer: 00 -> 03 -> 04 -> 07 -> 08 -> 12 -> 13.
- New fullstack product engineer: read every snapshot in order, then revisit 07 and 11 to see why revisiting earlier decisions is normal engineering work.
