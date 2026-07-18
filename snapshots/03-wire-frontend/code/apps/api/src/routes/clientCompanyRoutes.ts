import { Router } from 'express';
import { archiveClientCompany, createClientCompany, getClientCompany, listClientCompanies, updateClientCompany } from '../controllers/clientCompanyController';

export const clientCompanyRoutes = Router();

clientCompanyRoutes.get('/', listClientCompanies);
clientCompanyRoutes.post('/', createClientCompany);
clientCompanyRoutes.get('/:id', getClientCompany);
clientCompanyRoutes.patch('/:id', updateClientCompany);
clientCompanyRoutes.delete('/:id', archiveClientCompany);
