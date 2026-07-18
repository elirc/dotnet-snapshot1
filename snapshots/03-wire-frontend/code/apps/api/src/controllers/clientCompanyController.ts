import type { Request, Response } from 'express';
import { clientCompanyService } from '../services/clientCompanyService';

export async function listClientCompanies(_req: Request, res: Response) {
  res.json(await clientCompanyService.listCompanies());
}

export async function getClientCompany(req: Request, res: Response) {
  const result = await clientCompanyService.getCompany(req.params.id);
  if (!result) {
    res.status(404).json({ message: 'Client company not found' });
    return;
  }
  res.json(result);
}

export async function createClientCompany(req: Request, res: Response) {
  const result = await clientCompanyService.createCompany(req.body);
  res.status(201).json(result);
}

export async function updateClientCompany(req: Request, res: Response) {
  const result = await clientCompanyService.updateCompany(req.params.id, req.body);
  if (!result) {
    res.status(404).json({ message: 'Client company not found' });
    return;
  }
  res.json(result);
}

export async function archiveClientCompany(req: Request, res: Response) {
  const archived = await clientCompanyService.archiveCompany(req.params.id);
  if (!archived) {
    res.status(404).json({ message: 'Client company not found' });
    return;
  }
  res.status(204).send();
}
