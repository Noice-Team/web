import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Router} from "@angular/router";

import { ScreenService, Screen } from '../../../../services/client/screen.service';

@Component({
  selector: '[app-menu-items]',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {
  @Input() signed:boolean;
  @Output() onSignout:EventEmitter<any> = new EventEmitter();

  private screen:Screen;

  constructor(
    private router: Router,
    private screenService:ScreenService){
      this.screenService.subject.subscribe({
        next : (x) => this.screen = x
      });
  }

  signout(){
      this.onSignout.emit(null);
  }

  signin(){
      this.router.navigate(['./signin']);
  }

  signup(){
      this.router.navigate(['./singup']);
  }

}
