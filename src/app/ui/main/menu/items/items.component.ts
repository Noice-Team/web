import { Component } from '@angular/core';
import {Router} from "@angular/router";

import { AngularFireAuth } from '@angular/fire/auth';

import { ScreenService, Screen } from '../../../../services/client/screen.service';

@Component({
  selector: '[app-menu-items]',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {

  private screen:Screen;
  private user:firebase.User;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private screenService:ScreenService){
      this.screenService.subject.subscribe({
        next : (x) => this.screen = x
      });
      this.afAuth.authState.subscribe(user => {
        this.user = user;
      });
  }

  signout(){
      this.afAuth.auth.signOut();
  }

    signin(){
        this.router.navigate(['./signin']);
    }

    signup(){
        this.router.navigate(['./signup']);
    }
}
