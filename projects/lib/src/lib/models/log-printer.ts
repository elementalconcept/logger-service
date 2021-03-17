import { LogLevel } from './log-level';

export interface LogPrinter {
  print: (level: LogLevel, tag: string, message: string, multiLine: boolean) => void;
}
