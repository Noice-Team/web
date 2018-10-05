import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import {TransitionController, Transition, TransitionDirection} from "ng2-semantic-ui";

import { Providers } from '../providers';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
    private providerState = false;
    public formTransitionController = new TransitionController();
    public providerTransitionController = new TransitionController(false);

    public providers = Object.values(Providers);

    public signupData = {
      username:'',
      email:'',
      password:'',
      confirmPassword:''
    };

    constructor(
      private afAuth: AngularFireAuth) {}


    public toogleProvider() {
      if(this.providerState){
        this.providerTransitionController.animate(
          new Transition('fly right', 200, TransitionDirection.Out, () => {
            this.formTransitionController.animate(
              new Transition('fly left', 200, TransitionDirection.In));
          }));
      }
      else{
        this.formTransitionController.animate(
          new Transition('fly right', 200, TransitionDirection.Out, () => {
            this.providerTransitionController.animate(
              new Transition('fly left', 200, TransitionDirection.In));
          }));
      }
      this.providerState = !this.providerState;
    }

    public submit(){
      this.afAuth.auth.createUserWithEmailAndPassword(this.signupData.email, this.signupData.password)
    }
}
