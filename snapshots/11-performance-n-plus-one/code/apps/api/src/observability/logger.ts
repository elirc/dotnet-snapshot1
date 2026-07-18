type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogEvent { level: LogLevel; message: string; requestId?: string; [key: string]: unknown; }

export const logger = {
  debug: (event: Omit<LogEvent, 'level'>) => write({ level: 'debug', ...event }),
  info: (event: Omit<LogEvent, 'level'>) => write({ level: 'info', ...event }),
  warn: (event: Omit<LogEvent, 'level'>) => write({ level: 'warn', ...event }),
  error: (event: Omit<LogEvent, 'level'>) => write({ level: 'error', ...event })
};

function write(event: LogEvent) {
  console.log(JSON.stringify({ timestamp: new Date().toISOString(), service: 'atlas-api', ...event }));
}
