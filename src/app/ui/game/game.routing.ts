import { Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { GameComponent } from './game/game.component';

export const routes: Routes = [
  {
    path:'', component:MainComponent,
    children:[
      { path:'', component: GameComponent}
    ]
  }
];
