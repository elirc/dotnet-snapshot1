# Operations Runbook

## Configuration

Use .env.example as the source of expected runtime variables. Config is read through apps/api/src/config/env.ts rather than directly from process.env.

## Logs and request IDs

The API writes structured JSON logs. Request IDs are created or accepted from x-request-id and included in errors.

## Common failures

401 missing_token means the frontend did not send a token. 403 forbidden means the user is authenticated but lacks the required role. 429 rate_limited means mutation traffic exceeded the in-memory teaching limiter.
