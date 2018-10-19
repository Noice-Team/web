import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { LobbyService, Lobby } from'../../../../models/';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

	public lobbies:Array<Lobby>;
	private lobbiesSubscription:Subscription;

  constructor(private lobbyService:LobbyService) {
		console.log(this.lobbyService);
		this.onPage(0);
	}

	public onPage(page:number){
		if(this.lobbies){
			this.lobbiesSubscription.unsubscribe();
		}
		this.lobbiesSubscription = this.lobbyService.getAll(page, 30).subscribe(lobbies => {
			this.lobbies = lobbies;
		})
	}
}
