import { TestBed } from '@angular/core/testing';

import { DidacticielService } from './didacticiel.service';

describe('DidacticielService', () => {
  let service: DidacticielService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DidacticielService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
