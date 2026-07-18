# 05-second-entity-relationship: Second Entity Relationship

- code/packages/shared/src/workAgreement.ts: Added the second domain entity and DTOs.
- code/packages/shared/package.json: Exported work agreement contracts.
- code/apps/api/src/data/workAgreementRecords.ts: Seeded agreements linked to client companies.
- code/apps/api/src/repositories/workAgreementRepository.ts: Added persistence operations for agreements.
- code/apps/api/src/services/workAgreementService.ts: Added agreement use cases and relationship checks.
- code/apps/api/src/controllers/workAgreementController.ts: Added agreement HTTP handlers.
- code/apps/api/src/routes/workAgreementRoutes.ts: Mounted agreement endpoints.
- code/apps/web/src/features/agreements/AgreementPanel.tsx: Rendered and created agreements from the company detail page.
