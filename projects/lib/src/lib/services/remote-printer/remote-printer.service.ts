import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LogPrinter } from '../../models/log-printer';
import { LogLevel } from '../../models/log-level';
import { REMOTE_LOG_ENDPOINT } from '../../models/remote-log-endpoint';
import { REMOTE_LOG_SESSION_ID } from '../../models/session-id';
import { REMOTE_LOG_CLIENT_ID } from '../../models/client-id';
import { HttpLogRequest } from '../../models/http-log-request';

@Injectable({ providedIn: 'root' })
export class RemotePrinterService implements LogPrinter {
  constructor(private readonly http: HttpClient,
              @Inject(REMOTE_LOG_ENDPOINT) private readonly endpoint: string,
              @Inject(REMOTE_LOG_SESSION_ID) private readonly sessionId: string,
              @Inject(REMOTE_LOG_CLIENT_ID) private readonly clientId: string) {
  }

  static factory = (http: HttpClient, endpoint: string, sessionId: string, clientId: string): LogPrinter =>
    new RemotePrinterService(http, endpoint, sessionId, clientId);

  print(level: LogLevel, tag: string, message: string, multiLine: boolean): void {
    this.http
      .post(
        this.endpoint,
        {
          clientId: this.clientId,
          sessionId: this.sessionId,
          level,
          tag,
          message
        } as HttpLogRequest)
      .subscribe();
  }
}
