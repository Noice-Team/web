import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: '[app-menu-items]',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

  @Input() signed:boolean;
  @Output() onSignout:EventEmitter<any> = new EventEmitter();
  
  signout(){
      this.onSignout.emit(null);
  }

}
