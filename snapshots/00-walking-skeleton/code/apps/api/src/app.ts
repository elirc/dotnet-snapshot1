import cors from 'cors';
import express from 'express';
import { demoDashboardSummary } from './data/demoSnapshot';

export function buildApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', service: 'atlas-api' });
  });

  app.get('/api/dashboard-summary', (_req, res) => {
    res.json(demoDashboardSummary);
  });

  return app;
}
