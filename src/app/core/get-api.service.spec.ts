import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';


import {GetAPIService} from './get-api.service';

describe('GetAPIService', () => {
  let service: GetAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], providers: [GetAPIService]
    });
    service = TestBed.inject(GetAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
