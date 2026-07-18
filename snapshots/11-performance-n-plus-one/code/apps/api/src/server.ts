import { buildApp } from './app';
import { config } from './config/env';
import { logger } from './observability/logger';

const app = buildApp();
app.listen(config.port, () => logger.info({ message: 'api started', port: config.port, nodeEnv: config.nodeEnv }));
