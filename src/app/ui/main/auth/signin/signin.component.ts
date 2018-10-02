import { Component } from '@angular/core';
import {TransitionController, Transition, TransitionDirection} from "ng2-semantic-ui";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent{
  private providerState = false;
  public formTransitionController = new TransitionController();
  public providerTransitionController = new TransitionController(false);

  constructor() { }


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
}
