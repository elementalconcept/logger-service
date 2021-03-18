import { TestBed } from '@angular/core/testing';

import { RemotePrinterService } from './remote-printer.service';

describe('RemotePrinterService', () => {
  let service: RemotePrinterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemotePrinterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
