import { TestBed } from '@angular/core/testing';

import { UpdateLobbyService } from './update-lobby.service';

describe('UpdateLobbyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateLobbyService = TestBed.get(UpdateLobbyService);
    expect(service).toBeTruthy();
  });
});
