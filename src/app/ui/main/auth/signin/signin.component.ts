import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';

import { Providers } from '../providers';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent{
  public providers = Object.values(Providers);
  public signinData = {
    email:'',
    password:''
  };

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth) { }

  public signin():void{
    this.afAuth.auth.signInWithEmailAndPassword(this.signinData.email, this.signinData.password)
    .then(() => {
      this.router.navigate(['/']);
    })
    .catch(error => {
      console.error(error);
    });
  }
}
