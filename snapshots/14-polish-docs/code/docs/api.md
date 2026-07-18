# API Documentation

## Auth

Send Authorization: Bearer demo-admin-token, demo-operator-token, or demo-viewer-token. Missing, malformed, invalid, and forbidden auth states return distinct error codes.

## Error envelope

All operational errors return error.code, error.message, optional error.details, and requestId when request context is available.

## Client companies

GET /api/client-companies lists active client companies. POST /api/client-companies creates a company for admin and operator roles. GET, PATCH, and DELETE use /api/client-companies/:id, with DELETE performing an archive.

## Work agreements

GET /api/work-agreements supports q, status, country, page, and pageSize. POST /api/work-agreements creates an agreement. PATCH /api/work-agreements/:id/status applies status transition rules.
