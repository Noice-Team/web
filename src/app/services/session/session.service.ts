import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

import { UserService, User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _user:BehaviorSubject<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private userService: UserService){
      this._user = new BehaviorSubject<User>(null);
      this.afAuth.authState.subscribe(user => {
        if(user == null){
          this._user.next(null);
          return;
        }
        this.userService.getUser(user.uid).subscribe(dbUser => {
          this._user.next(dbUser);
        });
      });
  }

  public get user():BehaviorSubject<User>{
    return this._user;
  }

  public signOut():void{
    this.afAuth.auth.signOut();
  }
}
