export interface AppConfig {
  nodeEnv: 'development' | 'test' | 'production';
  port: number;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
  requestIdHeader: string;
  corsOrigin: string;
}

export function loadConfig(env = process.env): AppConfig {
  return {
    nodeEnv: (env.NODE_ENV as AppConfig['nodeEnv']) ?? 'development',
    port: Number(env.PORT ?? 4100),
    logLevel: (env.LOG_LEVEL as AppConfig['logLevel']) ?? 'info',
    requestIdHeader: env.REQUEST_ID_HEADER ?? 'x-request-id',
    corsOrigin: env.CORS_ORIGIN ?? 'http://localhost:5173'
  };
}

export const config = loadConfig();
