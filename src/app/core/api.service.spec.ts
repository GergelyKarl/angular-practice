import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';


import {getApiService} from './api.service';

describe('GetAPIService', () => {
  let service: getApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], providers: [getApiService]
    });
    service = TestBed.inject(getApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
