import { TestBed, inject } from '@angular/core/testing';

import { BaseService } from './baseservice.service';

describe('BaseserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseService]
    });
  });

  it('should be created', inject([BaseService], (service: BaseService) => {
    expect(service).toBeTruthy();
  }));
});
