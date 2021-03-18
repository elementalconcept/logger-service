import { InjectionToken } from '@angular/core';

import { nanoid } from 'nanoid/non-secure';

import { sessionIdStorageKey } from './constants';

export const REMOTE_LOG_SESSION_ID = new InjectionToken<string>(
  'REMOTE_LOG_SESSION_ID',
  {
    providedIn: 'root',
    factory: () => {
      const value = sessionStorage.getItem(sessionIdStorageKey);

      if (value === null) {
        const id = nanoid();
        sessionStorage.setItem(sessionIdStorageKey, id);
        return id;
      } else {
        return value;
      }
    }
  }
);
