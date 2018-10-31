import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Lobby } from './lobby.model';

import { CreateLobbyService, CreateLobbyInput } from './create';
import { GetLobbyService } from './get';

@Injectable({
  providedIn: 'root'
})
export class LobbyService {

	public constructor(
		private createLobbyService:CreateLobbyService,
		private getLobby:GetLobbyService){
  }

	public createLobby(input:CreateLobbyInput){
		return this.createLobbyService.create(input);
	}

	public getAll(start?:number, size?:number):Observable<Array<Lobby>>{
		return this.getLobby.getAll(start, size);
	}
	public getOne(id:string):Observable<Lobby>{
		return this.getLobby.getOne(id);
	}
}
