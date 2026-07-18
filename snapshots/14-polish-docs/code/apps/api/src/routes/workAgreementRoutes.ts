import { Router } from 'express';
import { createWorkAgreement, listAgreementsForCompany, searchWorkAgreements, updateWorkAgreementStatus } from '../controllers/workAgreementController';
import { requireAuth, requireRole } from '../middleware/authMiddleware';
import { rateLimit } from '../middleware/rateLimitMiddleware';
import { routeHandler } from '../middleware/routeHandler';

const mutationLimit = rateLimit({ windowMs: 60_000, max: 40 });
export const workAgreementRoutes = Router();
workAgreementRoutes.use(requireAuth);
workAgreementRoutes.get('/work-agreements', routeHandler(searchWorkAgreements));
workAgreementRoutes.get('/client-companies/:clientCompanyId/work-agreements', routeHandler(listAgreementsForCompany));
workAgreementRoutes.post('/work-agreements', mutationLimit, requireRole('admin', 'operator'), routeHandler(createWorkAgreement));
workAgreementRoutes.patch('/work-agreements/:id/status', mutationLimit, requireRole('admin', 'operator'), routeHandler(updateWorkAgreementStatus));
