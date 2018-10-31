import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { LobbyService, Lobby } from'../../../../models/';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent {
	public lobby:Lobby;

	constructor(
		activatedRoute: ActivatedRoute,
		private lobbyService:LobbyService) {
	  	activatedRoute.paramMap.subscribe(params => {
			let id = params.get('id');
			this.lobbyService.getOne(id).subscribe(lobby => {
				this.lobby = lobby;
			})
		});
	}
}
