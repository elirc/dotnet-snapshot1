import type { Request, Response } from 'express';
import { workAgreementService } from '../services/workAgreementService';

export async function listAgreementsForCompany(req: Request, res: Response) { res.json(await workAgreementService.listForClientCompany(req.params.clientCompanyId)); }
export async function createWorkAgreement(req: Request, res: Response) { res.status(201).json(await workAgreementService.createAgreement(req.body)); }
export async function updateWorkAgreementStatus(req: Request, res: Response) { res.json(await workAgreementService.updateStatus(req.params.id, req.body.status)); }
