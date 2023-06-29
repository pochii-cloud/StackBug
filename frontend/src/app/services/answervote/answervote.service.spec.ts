import { TestBed } from '@angular/core/testing';

import { AnswervoteService } from './answervote.service';

describe('AnswervoteService', () => {
  let service: AnswervoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnswervoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
