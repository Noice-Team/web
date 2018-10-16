import { Component } from '@angular/core';
import {Router} from "@angular/router";


import { ScreenService, Screen, SessionService } from '../../../../services/';
import { User } from '../../../../models/';

@Component({
  selector: '[app-menu-items]',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {

  private screen:Screen;
  public user:User;

  constructor(
    private router: Router,
    private sessionService: SessionService,
    private screenService:ScreenService){
      this.screenService.subject.subscribe({
        next : (x) => this.screen = x
      });
      this.sessionService.user.subscribe(user => {
        this.user = user;
      });
  }

  signout(){
      this.sessionService.signOut();
  }

  signin(){
      this.router.navigate(['./signin']);
  }

  signup(){
      this.router.navigate(['./signup']);
  }
}
