import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GameComponent } from './game/game.component';
import { MainComponent } from './main/main.component';

import { routes } from './game.routing';

@NgModule({
  imports: [
    CommonModule,
	RouterModule.forChild(routes)
  ],
  declarations: [GameComponent, MainComponent]
})
export class GameModule { }
