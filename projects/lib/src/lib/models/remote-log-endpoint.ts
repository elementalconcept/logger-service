import { InjectionToken } from '@angular/core';

export const REMOTE_LOG_ENDPOINT = new InjectionToken<string>(
  'REMOTE_LOG_ENDPOINT',
  {
    providedIn: 'root',
    factory: () => {
      console.log('Remote logger end-point is not specified!');
      return '';
    }
  }
);
