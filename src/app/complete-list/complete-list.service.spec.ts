import { TestBed } from '@angular/core/testing';

import { CompleteListService } from './complete-list.service';

describe('CompleteListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompleteListService = TestBed.get(CompleteListService);
    expect(service).toBeTruthy();
  });
});
