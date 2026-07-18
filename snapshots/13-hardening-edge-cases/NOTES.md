# 13-hardening-edge-cases: Hardening And Edge Cases

## Goal
Patch the sharp edges that appear once the app resembles an enterprise workflow.

## What changed and why
Added rate limiting, stricter auth failures, frontend error boundaries, accessible form labeling, skip links, and edge-case tests.

## Key decisions
- In-memory rate limiter: rejected External Redis limiter. The in-memory version teaches the shape without infrastructure. Production would externalize storage.
- Error boundary around product shell: rejected Let React crash the whole page. A boundary keeps operators oriented after unexpected UI errors. It can hide bugs if logs are ignored.
- Accessible labels and live regions: rejected Visual-only error text. A11y work makes error states usable for more people. It requires discipline in every new form.

## Deferred on purpose
The remaining work is documentation, cleanup, and a retrospective in snapshot 14.

## Where to look
- code/apps/api/src/middleware/rateLimitMiddleware.ts
- code/apps/api/src/middleware/authMiddleware.ts
- code/apps/web/src/components/ErrorBoundary.tsx
- code/apps/web/src/components/SkipLink.tsx
- code/apps/web/src/features/agreements/AgreementOperationsPage.tsx

## Predict before you read
Which failures should return 401, which should return 403, and which should be rate limited?

## Skills introduced
- rate limiting
- auth edge cases
- error boundaries
- accessibility pass
