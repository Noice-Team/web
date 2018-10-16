import { TestBed } from '@angular/core/testing';

import { ObjectsUtilsService } from './objects-utils.service';

describe('ObjectsUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObjectsUtilsService = TestBed.get(ObjectsUtilsService);
    expect(service).toBeTruthy();
  });
});
