import cors from 'cors';
import express from 'express';
import { errorMiddleware } from './middleware/errorMiddleware';
import { dashboardRoutes } from './routes/dashboardRoutes';
import { clientCompanyRoutes } from './routes/clientCompanyRoutes';
import { workAgreementRoutes } from './routes/workAgreementRoutes';

export function buildApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.get('/api/health', (_req, res) => res.json({ status: 'ok', service: 'atlas-api' }));
  app.use('/api', dashboardRoutes);
  app.use('/api/client-companies', clientCompanyRoutes);
  app.use('/api', workAgreementRoutes);
  app.use(errorMiddleware);
  return app;
}
