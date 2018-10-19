import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LobbyRoutingModule } from './lobby-routing.module';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  imports: [
    CommonModule,
    LobbyRoutingModule
  ],
  declarations: [MainComponent, DashboardComponent, CreateComponent]
})
export class LobbyModule { }
