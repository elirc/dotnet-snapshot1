# Atlas Global Workforce

Atlas is a simulated enterprise global workforce platform used as a teaching codebase. It shows how a TypeScript/Node API and React frontend grow from a walking skeleton into a production-shaped operator console for client companies, work agreements, auth, observability, testing, performance, and documentation.

## Local navigation

- apps/api contains Express-style controllers, services, repositories, middleware, config, and tests.
- apps/web contains React product screens, auth context, query hooks, and shared UI states.
- packages/shared contains DTOs shared by the API and frontend.
- docs contains API, operations, organization, performance, and retrospective notes.

This snapshot intentionally remains infrastructure-light. Demo auth, in-memory persistence, and the lightweight query cache are teaching tools, not production substitutions.
