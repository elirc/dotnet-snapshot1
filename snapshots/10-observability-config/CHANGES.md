# 10-observability-config: Observability And Config

- code/.env.example: Documented runtime configuration.
- code/apps/api/src/config/env.ts: Added typed environment loading.
- code/apps/api/src/observability/logger.ts: Added structured logger helpers.
- code/apps/api/src/middleware/requestContext.ts: Created request IDs and correlation context.
- code/apps/api/src/middleware/errorMiddleware.ts: Logged errors with request IDs.
- code/apps/api/src/server.ts: Started the app using config and logger.
