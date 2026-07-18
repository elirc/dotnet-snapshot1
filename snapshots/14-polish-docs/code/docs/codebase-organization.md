# Codebase Organization

The API follows controllers -> services -> repositories. Controllers translate HTTP details. Services own business use cases. Repositories hide storage details.

The frontend follows feature folders. Feature folders own pages and query hooks for a domain area. Shared components are reserved for reusable UI states such as errors and skip links.

Shared DTOs live in packages/shared so request and response shapes stay synchronized across the stack.
