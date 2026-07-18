# 10-observability-config: Observability And Config

## Goal
Make runtime behavior visible and environment settings explicit.

## What changed and why
Added typed config loading, structured logging, request IDs, correlation propagation, and log-aware error middleware.

## Key decisions
- Config module at startup: rejected Reading process.env everywhere. Central config keeps defaults and validation discoverable. The tradeoff is another dependency point for tests.
- Structured JSON logs: rejected Plain console strings. JSON logs work with production log platforms. They are less friendly by eye without formatting.
- Request ID middleware: rejected Generate IDs only in logs. Putting IDs on request context lets every layer correlate work. It requires middleware ordering discipline.

## Deferred on purpose
Performance instrumentation is still shallow. Snapshot 11 introduces a measured N+1 problem and fix.

## Where to look
- code/apps/api/src/config/env.ts
- code/apps/api/src/observability/logger.ts
- code/apps/api/src/middleware/requestContext.ts
- code/apps/api/src/middleware/errorMiddleware.ts

## Predict before you read
Where should a request ID be created so controllers, services, and errors can all use it?

## Skills introduced
- environment config
- structured logging
- correlation IDs
- production diagnostics
