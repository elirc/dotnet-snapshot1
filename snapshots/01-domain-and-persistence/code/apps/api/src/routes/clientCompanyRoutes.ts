import { Router } from 'express';
import { clientCompanyService } from '../services/clientCompanyService';

export const clientCompanyRoutes = Router();

clientCompanyRoutes.get('/', async (_req, res) => {
  res.json(await clientCompanyService.listCompanies());
});

clientCompanyRoutes.get('/:id', async (req, res) => {
  const result = await clientCompanyService.getCompany(req.params.id);
  if (!result) {
    res.status(404).json({ message: 'Client company not found' });
    return;
  }

  res.json(result);
});
