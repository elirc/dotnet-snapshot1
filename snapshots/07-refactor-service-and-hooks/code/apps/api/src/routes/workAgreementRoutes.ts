import { Router } from 'express';
import { createWorkAgreement, listAgreementsForCompany } from '../controllers/workAgreementController';
import { requireAuth, requireRole } from '../middleware/authMiddleware';
import { routeHandler } from '../middleware/routeHandler';

export const workAgreementRoutes = Router();

workAgreementRoutes.use(requireAuth);
workAgreementRoutes.get('/client-companies/:clientCompanyId/work-agreements', routeHandler(listAgreementsForCompany));
workAgreementRoutes.post('/work-agreements', requireRole('admin', 'operator'), routeHandler(createWorkAgreement));
