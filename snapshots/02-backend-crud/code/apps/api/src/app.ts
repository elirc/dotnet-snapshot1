import cors from 'cors';
import express from 'express';
import { clientCompanyRoutes } from './routes/clientCompanyRoutes';
import { clientCompanyService } from './services/clientCompanyService';

export function buildApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', service: 'atlas-api' });
  });

  app.get('/api/dashboard-summary', async (_req, res) => {
    res.json(await clientCompanyService.getDashboardSummary());
  });

  app.use('/api/client-companies', clientCompanyRoutes);

  return app;
}
