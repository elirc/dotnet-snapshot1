# 04-validation-and-errors: Validation And Errors

- code/apps/api/src/errors/ApiError.ts: Added a typed operational error class.
- code/apps/api/src/middleware/errorMiddleware.ts: Centralized error responses.
- code/apps/api/src/middleware/routeHandler.ts: Added async handler wrapper to remove try/catch noise.
- code/apps/api/src/validation/clientCompanyValidation.ts: Validated create and update payloads.
- code/apps/api/src/controllers/clientCompanyController.ts: Converted controller failures into consistent API errors.
- code/apps/web/src/api/errors.ts: Parsed API error envelopes on the frontend.
- code/apps/web/src/components/ErrorNotice.tsx: Added reusable error display.
- code/apps/web/src/features/companies/CreateCompanyForm.tsx: Added client-side validation and submit error handling.
