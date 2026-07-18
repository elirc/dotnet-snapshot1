# 11-performance-n-plus-one: Performance N Plus One

- code/docs/performance/11-n-plus-one-before.md: Explained the introduced slow approach and the fix.
- code/apps/api/src/repositories/workAgreementRepository.ts: Added countByClientIds for batched counts.
- code/apps/api/src/services/workforceOperationsService.ts: Replaced per-client agreement lookups with a batched count map.
- code/apps/api/src/performance/agreementCountBenchmark.ts: Added a small measurement harness for the lesson.
- code/apps/api/src/services/workforceOperationsService.test.ts: Covered the batched count behavior.
