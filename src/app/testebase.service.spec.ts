import { TestBed } from '@angular/core/testing';

import { TestebaseService } from './testebase.service';

describe('TestebaseService', () => {
  let service: TestebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
