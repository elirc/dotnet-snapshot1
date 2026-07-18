# 09-testing-harness: Testing Harness

## Goal
Add fast feedback around services, HTTP endpoints, and important React behavior.

## What changed and why
Added Vitest-style configs, service unit tests, endpoint integration tests, component tests, and test builders for domain fixtures.

## Key decisions
- Test services directly: rejected Only endpoint tests. Service tests catch business rules quickly. Endpoint tests still verify wiring.
- Fixture builders: rejected Large inline objects. Builders make test intent clearer. They can hide important defaults if overused.
- Few component tests: rejected Snapshot-testing every component. Focused component tests protect behavior without freezing markup.

## Deferred on purpose
Observability and config are still runtime concerns without tests. Snapshot 10 adds those production basics.

## Where to look
- code/apps/api/src/services/clientCompanyService.test.ts
- code/apps/api/src/routes/clientCompanyRoutes.test.ts
- code/apps/api/src/test/builders.ts
- code/apps/web/src/features/companies/CompanyListPage.test.tsx

## Predict before you read
Which rule belongs in a unit test, and which belongs in an endpoint integration test?

## Skills introduced
- unit testing
- integration testing
- component testing
- test fixtures
