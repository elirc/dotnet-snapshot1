import { Router } from 'express';
import { archiveClientCompany, createClientCompany, getClientCompany, listClientCompanies, updateClientCompany } from '../controllers/clientCompanyController';
import { routeHandler } from '../middleware/routeHandler';

export const clientCompanyRoutes = Router();

clientCompanyRoutes.get('/', routeHandler(listClientCompanies));
clientCompanyRoutes.post('/', routeHandler(createClientCompany));
clientCompanyRoutes.get('/:id', routeHandler(getClientCompany));
clientCompanyRoutes.patch('/:id', routeHandler(updateClientCompany));
clientCompanyRoutes.delete('/:id', routeHandler(archiveClientCompany));
