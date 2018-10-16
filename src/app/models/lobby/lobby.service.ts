import { Injectable } from '@angular/core';


import { CreateLobbyService, CreateInput } from './create';

@Injectable({
  providedIn: 'root'
})
export class LobbyService {

	public constructor(
		private createLobbyService:CreateLobbyService){
  }

	public createLobby(input:CreateInput){
		return this.createLobbyService.create(input);
	}
}
