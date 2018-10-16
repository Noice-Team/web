import { TestBed } from '@angular/core/testing';

import { CreateLobbyService } from './create-lobby.service';

describe('CreateLobbyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateLobbyService = TestBed.get(CreateLobbyService);
    expect(service).toBeTruthy();
  });
});
