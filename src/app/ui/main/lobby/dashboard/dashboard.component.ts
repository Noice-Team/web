import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
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

	constructor(
	  	private route: ActivatedRoute,
		private router: Router,
		private lobbyService:LobbyService) {
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

	public create(){
		this.router.navigate(['../','create'], { relativeTo: this.route });
	}
}
