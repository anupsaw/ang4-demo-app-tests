import { HttpClientTestingModule, HttpTestingController, } from '@angular/common/http/testing';
import { TestBed, inject, } from '@angular/core/testing';
import { HttpClientModule, HttpClient, HttpBackend } from '@angular/common/http';
import { DataServiceService } from './data-service.service';

describe('DataServiceService', () => {
  // let service: DataServiceService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataServiceService]
    });

   // service = TestBed.get(DataServiceService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([DataServiceService], (service: DataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
