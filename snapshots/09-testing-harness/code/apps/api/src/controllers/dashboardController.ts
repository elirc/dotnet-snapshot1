import type { Request, Response } from 'express';
import { workforceOperationsService } from '../services/workforceOperationsService';

export async function getDashboardSummary(_req: Request, res: Response) {
  res.json(await workforceOperationsService.getDashboardSummary());
}
