import { TestBed, inject } from '@angular/core/testing';

import { PhoneApiService } from './phone-api.service';

describe('PhoneApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhoneApiService]
    });
  });

  it('should be created', inject([PhoneApiService], (service: PhoneApiService) => {
    expect(service).toBeTruthy();
  }));
});
