import { TestBed } from '@angular/core/testing';

import { CollectionProviderService } from './collection-provider.service';

describe('CollectionProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CollectionProviderService = TestBed.get(CollectionProviderService);
    expect(service).toBeTruthy();
  });
});
