import { Router } from 'express';
import { createWorkAgreement, listAgreementsForCompany } from '../controllers/workAgreementController';
import { routeHandler } from '../middleware/routeHandler';

export const workAgreementRoutes = Router();

workAgreementRoutes.get('/client-companies/:clientCompanyId/work-agreements', routeHandler(listAgreementsForCompany));
workAgreementRoutes.post('/work-agreements', routeHandler(createWorkAgreement));
