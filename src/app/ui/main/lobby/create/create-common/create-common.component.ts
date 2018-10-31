import { Component, Output, EventEmitter } from '@angular/core';

import { LobbyService, CreateLobbyInput, GameType } from'../../../../../models/';
import { SessionService } from'../../../../../services/';

@Component({
  selector: 'app-create-common',
  templateUrl: './create-common.component.html',
  styleUrls: ['./create-common.component.scss']
})
export class CreateCommonComponent {
	@Output()
	public onCreated = new EventEmitter<number>();

	public types=Object.keys(GameType).filter(k => typeof GameType[k] === "number").map(k => ""+k);

	public data:CreateLobbyInput = new CreateLobbyInput();
  constructor(
	private lobbyService:LobbyService,
		sessionService:SessionService) {
		sessionService.user.subscribe(user => {
			if(user == null)
				return;
			this.data.name = user.name+"'s game";
			this.data.owner = user.id;
		})
	}

	public submit():void{
		if(!this.data.owner){
			//TODO error
			return;
		}
		this.lobbyService.createLobby(this.data).then((result)=>{
			console.log(result);
			this.onCreated.emit();
		});
	}
}
