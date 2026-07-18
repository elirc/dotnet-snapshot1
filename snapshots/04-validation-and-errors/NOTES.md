# 04-validation-and-errors: Validation And Errors

## Goal
Make bad input and failed requests predictable across the API and frontend.

## What changed and why
Added request validation, typed API errors, shared error middleware, async route wrapping, and frontend error/empty states.

## Key decisions
- Small hand-rolled validators: rejected Adding Zod immediately. Hand-rolled validation keeps the lesson dependency-light. The tradeoff is less schema reuse than a production validation library.
- Consistent error envelope: rejected Ad hoc error messages. A stable envelope gives the frontend one parsing path. It requires every layer to throw or translate errors consistently.
- Frontend ErrorNotice component: rejected Inline text in each page. A shared component keeps error states visually consistent. The tradeoff is another abstraction earlier in the UI.

## Deferred on purpose
Authentication and permission errors are still fake. Snapshot 06 adds current-user context and protected routes.

## Where to look
- code/apps/api/src/errors/ApiError.ts
- code/apps/api/src/middleware/errorMiddleware.ts
- code/apps/api/src/validation/clientCompanyValidation.ts
- code/apps/web/src/api/errors.ts
- code/apps/web/src/components/ErrorNotice.tsx

## Predict before you read
If the API rejects a company name, what exact shape should the frontend receive?

## Skills introduced
- input validation
- error middleware
- typed error envelope
- empty states
