import { Router } from 'express';
import { createWorkAgreement, listAgreementsForCompany, searchWorkAgreements, updateWorkAgreementStatus } from '../controllers/workAgreementController';
import { requireAuth, requireRole } from '../middleware/authMiddleware';
import { routeHandler } from '../middleware/routeHandler';

export const workAgreementRoutes = Router();
workAgreementRoutes.use(requireAuth);
workAgreementRoutes.get('/work-agreements', routeHandler(searchWorkAgreements));
workAgreementRoutes.get('/client-companies/:clientCompanyId/work-agreements', routeHandler(listAgreementsForCompany));
workAgreementRoutes.post('/work-agreements', requireRole('admin', 'operator'), routeHandler(createWorkAgreement));
workAgreementRoutes.patch('/work-agreements/:id/status', requireRole('admin', 'operator'), routeHandler(updateWorkAgreementStatus));
