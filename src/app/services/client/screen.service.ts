import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

export enum Screen{
  DESKTOP,
  TABLET,
  MOBILE
}

const MOBILE_MAX_WIDTH = 425;  //Adjust as needed
const TABLET_MAX_WIDTH = 1024; //Adjust as needed

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  public subject:BehaviorSubject<Screen>;

  constructor(){
    this.subject = new BehaviorSubject<Screen>(this.determineHost());
    window.addEventListener('resize', () => this.subject.next(this.determineHost()));
  }

  private determineHost():Screen{
    return window.innerWidth <= MOBILE_MAX_WIDTH ? Screen.MOBILE :
      window.innerWidth <= TABLET_MAX_WIDTH ? Screen.TABLET :
      Screen.DESKTOP;
  }
}
