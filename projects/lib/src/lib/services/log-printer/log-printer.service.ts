import { Injectable } from '@angular/core';

import { LogPrinter } from '../../models/log-printer';
import { LogLevel } from '../../models/log-level';

import { logLevelNames } from '../../models/log-level-names';
import { logLevelPrintLength, logTagPrintLength } from '../../models/constants';

@Injectable({ providedIn: 'root' })
export class LogPrinterService implements LogPrinter {
  print = (level: LogLevel, tag: string, message: string, multiLine: boolean): void => {
    const header = `${ this.ts() } ${ this.crop(logLevelNames[ level ], logLevelPrintLength) } [${ this.crop(tag, logTagPrintLength) }]`;

    if (multiLine) {
      console.log(header);
      console.log(message);
    } else {
      console.log(`${ header } ${ message }`);
    }
  };

  private ts = () => new Date().toISOString();

  private crop = (str: string, maxLength: number) => str.padEnd(maxLength).substr(0, maxLength);
}
