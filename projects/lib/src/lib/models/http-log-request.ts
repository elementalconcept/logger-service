import { LogLevel } from './log-level';

export interface HttpLogRequest {
  level: LogLevel;
  tag: string;
  message: string;
  sessionId: string;
  clientId: string;
  meta?: any;
}
