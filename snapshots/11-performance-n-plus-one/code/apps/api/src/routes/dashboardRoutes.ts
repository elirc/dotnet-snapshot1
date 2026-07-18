import { Router } from 'express';
import { getDashboardSummary } from '../controllers/dashboardController';
import { requireAuth } from '../middleware/authMiddleware';
import { routeHandler } from '../middleware/routeHandler';

export const dashboardRoutes = Router();
dashboardRoutes.get('/dashboard-summary', requireAuth, routeHandler(getDashboardSummary));
