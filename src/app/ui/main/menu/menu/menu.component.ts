import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Output() onSideBarToggled:EventEmitter<any> = new EventEmitter();
  
  toggleSide(){
    this.onSideBarToggled.emit(null);
  }
}
