import { TestBed } from '@angular/core/testing';

import { LogPrinterService } from './log-printer.service';

describe('LogPrinterService', () => {
  let service: LogPrinterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogPrinterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
