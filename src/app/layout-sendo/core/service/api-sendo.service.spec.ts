import { TestBed } from '@angular/core/testing';

import { ApiSendoService } from './api-sendo.service';

describe('ApiSendoService', () => {
  let service: ApiSendoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSendoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
