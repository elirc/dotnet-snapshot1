import cors from 'cors';
import express from 'express';
import { config } from './config/env';
import { errorMiddleware } from './middleware/errorMiddleware';
import { requestContext } from './middleware/requestContext';
import { dashboardRoutes } from './routes/dashboardRoutes';
import { clientCompanyRoutes } from './routes/clientCompanyRoutes';
import { workAgreementRoutes } from './routes/workAgreementRoutes';

export function buildApp() {
  const app = express();
  app.use(requestContext);
  app.use(cors({ origin: config.corsOrigin }));
  app.use(express.json());
  app.get('/api/health', (req, res) => res.json({ status: 'ok', service: 'atlas-api', requestId: req.requestId }));
  app.use('/api', dashboardRoutes);
  app.use('/api/client-companies', clientCompanyRoutes);
  app.use('/api', workAgreementRoutes);
  app.use(errorMiddleware);
  return app;
}
