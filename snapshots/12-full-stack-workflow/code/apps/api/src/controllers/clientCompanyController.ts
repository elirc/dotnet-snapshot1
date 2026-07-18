import type { Request, Response } from 'express';
import { ApiError } from '../errors/ApiError';
import { clientCompanyService } from '../services/clientCompanyService';
import { validateCreateClientCompany, validateUpdateClientCompany } from '../validation/clientCompanyValidation';

export async function listClientCompanies(_req: Request, res: Response) {
  res.json(await clientCompanyService.listCompanies());
}

export async function getClientCompany(req: Request, res: Response) {
  const result = await clientCompanyService.getCompany(req.params.id);
  if (!result) throw ApiError.notFound('Client company not found');
  res.json(result);
}

export async function createClientCompany(req: Request, res: Response) {
  validateCreateClientCompany(req.body);
  const result = await clientCompanyService.createCompany(req.body);
  res.status(201).json(result);
}

export async function updateClientCompany(req: Request, res: Response) {
  validateUpdateClientCompany(req.body);
  const result = await clientCompanyService.updateCompany(req.params.id, req.body);
  if (!result) throw ApiError.notFound('Client company not found');
  res.json(result);
}

export async function archiveClientCompany(req: Request, res: Response) {
  const archived = await clientCompanyService.archiveCompany(req.params.id);
  if (!archived) throw ApiError.notFound('Client company not found');
  res.status(204).send();
}
