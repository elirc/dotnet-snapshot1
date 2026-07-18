# 05-second-entity-relationship: Second Entity Relationship

## Goal
Model work agreements as child records attached to client companies.

## What changed and why
Added WorkAgreement shared types, repository, service, controller, routes, seed records, and frontend agreement panels inside company detail.

## Key decisions
- Agreement belongs to client company: rejected Embedding agreements inside company records. A separate entity supports independent lifecycle and querying. It costs an extra repository and join logic.
- Country-specific fields on agreement: rejected Generic notes blob. Typed fields teach domain modeling and filtering. The tradeoff is schema change when compliance fields grow.
- Create agreements from company detail: rejected Dedicated agreement module immediately. The relationship is easier to learn in context. Snapshot 12 introduces the cross-company agreement workflow.

## Deferred on purpose
Status transitions are still loose. Snapshot 12 adds a proper status workflow spanning the stack.

## Where to look
- code/packages/shared/src/workAgreement.ts
- code/apps/api/src/repositories/workAgreementRepository.ts
- code/apps/api/src/services/workAgreementService.ts
- code/apps/web/src/features/agreements/AgreementPanel.tsx

## Predict before you read
Should the company repository know how to load agreements, or should another service compose the relationship?

## Skills introduced
- entity relationship
- foreign key ownership
- composition service
- nested frontend workflow
