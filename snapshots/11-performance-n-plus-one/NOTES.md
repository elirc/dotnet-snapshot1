# 11-performance-n-plus-one: Performance N Plus One

## Goal
Show how a harmless-looking relationship lookup becomes slow, then fix it with batching.

## What changed and why
Documented the N+1 query shape, added a measurement harness, implemented batch agreement counts, and updated dashboard/company summaries to use the batched path.

## Key decisions
- Keep the before example in docs: rejected Leaving slow code active. The learner can study the bug without shipping it in the current code. The tradeoff is one extra reference file.
- Repository batch method: rejected Looping in the service. The repository can optimize storage access in one place. The tradeoff is a more specific persistence API.
- Measurement harness: rejected Relying on intuition. Measuring makes the fix concrete. The harness is illustrative rather than a full benchmark suite.

## Deferred on purpose
Search, filters, and pagination are still missing for larger datasets. Snapshot 12 adds them across the stack.

## Where to look
- code/docs/performance/11-n-plus-one-before.md
- code/apps/api/src/repositories/workAgreementRepository.ts
- code/apps/api/src/services/workforceOperationsService.ts
- code/apps/api/src/performance/agreementCountBenchmark.ts

## Predict before you read
If a page lists 50 clients and each client needs agreement counts, how many repository calls should the service make?

## Skills introduced
- N+1 query
- batch loading
- performance measurement
- repository optimization
