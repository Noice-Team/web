import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LobbyRoutingModule } from './lobby-routing.module';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateCommonComponent } from './create/create-common/create-common.component';
import { CreatePageComponent } from './create/create-page/create-page.component';
import { CreateModalComponent } from './create/create-modal/create-modal.component';


@NgModule({
  imports: [
    CommonModule,
    LobbyRoutingModule
  ],
  declarations: [MainComponent, DashboardComponent, CreateCommonComponent, CreatePageComponent, CreateModalComponent]
})
export class LobbyModule { }
