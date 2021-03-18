import { InjectionToken } from '@angular/core';

import { nanoid } from 'nanoid/non-secure';

import { clientIdStorageKey } from './constants';

export const REMOTE_LOG_CLIENT_ID = new InjectionToken<string>(
  'REMOTE_LOG_CLIENT_ID',
  {
    providedIn: 'root',
    factory: () => {
      const value = localStorage.getItem(clientIdStorageKey);

      if (value === null) {
        const id = nanoid();
        localStorage.setItem(clientIdStorageKey, id);
        return id;
      } else {
        return value;
      }
    }
  }
);
