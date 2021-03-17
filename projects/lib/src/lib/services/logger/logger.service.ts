import { Injectable } from '@angular/core';

import { LogPrinterService } from '../log-printer/log-printer.service';

import { LogLevel } from '../../models/log-level';
import { BoundLogger } from '../../models/bound-logger';

@Injectable({ providedIn: 'root' })
export class LoggerService {
  private readonly minLogLevel: LogLevel = LogLevel.debug;

  constructor(private readonly printer: LogPrinterService) {
  }

  log = (level: LogLevel, tag: string, message: string) =>
    level >= this.minLogLevel
      ? this.printer.print(level, tag, message, false)
      : undefined;

  logJSON = (level: LogLevel, tag: string, value: any, pretty: boolean) =>
    level >= this.minLogLevel
      ? this.printer.print(level, tag, JSON.stringify(value, undefined, pretty ? 2 : undefined), true)
      : undefined;

  v = (tag: string, message: string) => this.log(LogLevel.verbose, tag, message);
  d = (tag: string, message: string) => this.log(LogLevel.debug, tag, message);
  i = (tag: string, message: string) => this.log(LogLevel.info, tag, message);
  w = (tag: string, message: string) => this.log(LogLevel.warn, tag, message);
  e = (tag: string, message: string) => this.log(LogLevel.error, tag, message);

  vJSON = (tag: string, value: any, pretty: boolean) => this.logJSON(LogLevel.verbose, tag, value, pretty);
  dJSON = (tag: string, value: any, pretty: boolean) => this.logJSON(LogLevel.debug, tag, value, pretty);
  iJSON = (tag: string, value: any, pretty: boolean) => this.logJSON(LogLevel.info, tag, value, pretty);
  wJSON = (tag: string, value: any, pretty: boolean) => this.logJSON(LogLevel.warn, tag, value, pretty);
  eJSON = (tag: string, value: any, pretty: boolean) => this.logJSON(LogLevel.error, tag, value, pretty);

  bind = (tag: string): BoundLogger => ({
    v: (message: string) => this.v(tag, message),
    d: (message: string) => this.d(tag, message),
    i: (message: string) => this.i(tag, message),
    w: (message: string) => this.w(tag, message),
    e: (message: string) => this.e(tag, message),

    vJSON: (value: any, pretty: boolean) => this.vJSON(tag, value, pretty),
    dJSON: (value: any, pretty: boolean) => this.dJSON(tag, value, pretty),
    iJSON: (value: any, pretty: boolean) => this.iJSON(tag, value, pretty),
    wJSON: (value: any, pretty: boolean) => this.wJSON(tag, value, pretty),
    eJSON: (value: any, pretty: boolean) => this.eJSON(tag, value, pretty)
  });
}
