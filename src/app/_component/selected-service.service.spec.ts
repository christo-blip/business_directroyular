import { TestBed } from '@angular/core/testing';

import { SelectedServiceService } from './selected-service.service';

describe('SelectedServiceService', () => {
  let service: SelectedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
