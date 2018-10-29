import { TestBed } from '@angular/core/testing';

import { GetLobbyService } from './get-lobby.service';

describe('GetLobbyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetLobbyService = TestBed.get(GetLobbyService);
    expect(service).toBeTruthy();
  });
});
