import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Input() signed:boolean;
  @Output() onSignout:EventEmitter<any> = new EventEmitter();
  @Output() onSideBarToggled:EventEmitter<any> = new EventEmitter();


  signout(){
      this.onSignout.emit(null);
  }

  toggleSide(){
      this.onSideBarToggled.emit(null);
  }
}
