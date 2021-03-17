import { InjectionToken } from '@angular/core';

import { LogLevel } from './log-level';

export const MIN_LOG_LEVEL = new InjectionToken<LogLevel>(
  'MIN_LOG_LEVEL',
  {
    providedIn: 'root',
    factory: () => LogLevel.info
  }
);
