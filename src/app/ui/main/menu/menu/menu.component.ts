import { Component, EventEmitter, Input, Output, AfterViewInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements  AfterViewInit{

  @Input() signed:boolean;
  @Output() onSignout:EventEmitter<any> = new EventEmitter();

  ngAfterViewInit(){
      /*$('.main.menu').visibility({
          type: 'fixed',
          onFixed :function(){
              $(this).removeClass('labeled icon');
          },
          onUnfixed :function()  {
              $(this).addClass('labeled icon');
          }
      });*/
  }

  signout(){
      this.onSignout.emit(null);
  }

  toggleSide(){
      $('.ui.sidebar').sidebar('toggle')
  }
}
