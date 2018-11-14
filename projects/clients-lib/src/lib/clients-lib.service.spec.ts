import { TestBed } from '@angular/core/testing';

import { ClientsLibService } from './clients-lib.service';

describe('ClientsLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientsLibService = TestBed.get(ClientsLibService);
    expect(service).toBeTruthy();
  });
});
