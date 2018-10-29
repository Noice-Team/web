import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Lobby } from './lobby.model';

import { CreateLobbyService, CreateInput } from './create';
import { GetLobbyService } from './get';

@Injectable({
  providedIn: 'root'
})
export class LobbyService {

	public constructor(
		private createLobbyService:CreateLobbyService,
		private getLobby:GetLobbyService){
  }

	public createLobby(input:CreateInput){
		return this.createLobbyService.create(input);
	}

	public getAll(start?:number, size?:number):Observable<Array<Lobby>>{
		return this.getLobby.getAll(start, size);
	}
}
