import { Router } from 'express';
import { archiveClientCompany, createClientCompany, getClientCompany, listClientCompanies, updateClientCompany } from '../controllers/clientCompanyController';
import { requireAuth, requireRole } from '../middleware/authMiddleware';
import { routeHandler } from '../middleware/routeHandler';

export const clientCompanyRoutes = Router();

clientCompanyRoutes.use(requireAuth);
clientCompanyRoutes.get('/', routeHandler(listClientCompanies));
clientCompanyRoutes.post('/', requireRole('admin', 'operator'), routeHandler(createClientCompany));
clientCompanyRoutes.get('/:id', routeHandler(getClientCompany));
clientCompanyRoutes.patch('/:id', requireRole('admin', 'operator'), routeHandler(updateClientCompany));
clientCompanyRoutes.delete('/:id', requireRole('admin'), routeHandler(archiveClientCompany));
