import { TestBed } from '@angular/core/testing';

import { NgxNeshanService } from './ngx-neshan.service';

describe('NgxNeshanService', () => {
  let service: NgxNeshanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxNeshanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
