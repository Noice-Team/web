import { Component } from '@angular/core';

import { LobbyService, Lobby, GameType } from'../../../../../models/';
import { SessionService, User } from'../../../../../services/';

@Component({
  selector: 'app-create-common',
  templateUrl: './create-common.component.html',
  styleUrls: ['./create-common.component.scss']
})
export class CreateCommonComponent {

	public types=Object.keys(GameType).filter(k => typeof GameType[k] === "number").map(k => ""+k);

	public data:Lobby = new Lobby();
  constructor(
		private lobbyService:LobbyService,
		private sessionService:SessionService) {
			sessionService.user.subscribe(user => {
				if(user == null)
					return;
				this.data.name = user.name+"'s game";
			})
		}

		public submit():void{
			console.log("submit", this.types);
		}

}
