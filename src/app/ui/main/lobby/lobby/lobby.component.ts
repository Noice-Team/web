import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { LobbyService, Lobby, UserService, User } from'../../../../models/';
import { SessionService } from '../../../../services/';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent {
	public lobby:Lobby;
	public in = false;

	private  user:User;

	constructor(
		activatedRoute: ActivatedRoute,
		private lobbyService:LobbyService,
		private userService:UserService,
		session:SessionService) {

		session.user.subscribe(user => {
			this.user = user;
			this.checkIsIn();
		});
	  	activatedRoute.paramMap.subscribe(params => {
			let id = params.get('id');
			this.lobbyService.getOne(id, true).subscribe(lobby => {
				this.lobby = lobby;
				this.checkIsIn();
			})
		});
	}

	private checkIsIn(){
		if(!this.user || !this.lobby){
			return;
		}
		let list:Array<string>;
		if((<Array<User>>this.lobby.members)[0].name){
			list = (<Array<User>>this.lobby.members).map(u => u.id);
		}
		else{
			list = <Array<string>>this.lobby.members;
		}
		this.in = list.includes(this.user.id);
	}

	public join():void{
		this.lobbyService.join(this.lobby.id);
	}

	public leave():void{
		this.lobbyService.join(this.lobby.id);
	}
}
