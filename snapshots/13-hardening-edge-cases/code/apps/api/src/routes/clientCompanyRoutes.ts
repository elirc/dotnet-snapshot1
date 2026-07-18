import { Router } from 'express';
import { archiveClientCompany, createClientCompany, getClientCompany, listClientCompanies, updateClientCompany } from '../controllers/clientCompanyController';
import { requireAuth, requireRole } from '../middleware/authMiddleware';
import { rateLimit } from '../middleware/rateLimitMiddleware';
import { routeHandler } from '../middleware/routeHandler';

const mutationLimit = rateLimit({ windowMs: 60_000, max: 30 });
export const clientCompanyRoutes = Router();
clientCompanyRoutes.use(requireAuth);
clientCompanyRoutes.get('/', routeHandler(listClientCompanies));
clientCompanyRoutes.post('/', mutationLimit, requireRole('admin', 'operator'), routeHandler(createClientCompany));
clientCompanyRoutes.get('/:id', routeHandler(getClientCompany));
clientCompanyRoutes.patch('/:id', mutationLimit, requireRole('admin', 'operator'), routeHandler(updateClientCompany));
clientCompanyRoutes.delete('/:id', mutationLimit, requireRole('admin'), routeHandler(archiveClientCompany));
