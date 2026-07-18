import type { CreateClientCompanyRequest, UpdateClientCompanyRequest } from '@atlas/shared/clientCompany';
import { ApiError } from '../errors/ApiError';

const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export function validateCreateClientCompany(body: CreateClientCompanyRequest) {
  const details: Record<string, string[]> = {};
  if (!body.legalName || body.legalName.trim().length < 2) details.legalName = ['Legal name must be at least 2 characters.'];
  if (!body.primaryCountry || body.primaryCountry.trim().length < 2) details.primaryCountry = ['Primary country is required.'];
  if (!emailPattern.test(body.accountOwnerEmail ?? '')) details.accountOwnerEmail = ['Account owner email must be valid.'];
  if (Object.keys(details).length) throw ApiError.validation(details);
}

export function validateUpdateClientCompany(body: UpdateClientCompanyRequest) {
  const details: Record<string, string[]> = {};
  if (body.legalName !== undefined && body.legalName.trim().length < 2) details.legalName = ['Legal name must be at least 2 characters.'];
  if (body.accountOwnerEmail !== undefined && !emailPattern.test(body.accountOwnerEmail)) details.accountOwnerEmail = ['Account owner email must be valid.'];
  if (Object.keys(details).length) throw ApiError.validation(details);
}
