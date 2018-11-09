import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';

import { LobbyRoutingModule } from './lobby-routing.module';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateCommonComponent } from './create/create-common/create-common.component';
import { CreatePageComponent } from './create/create-page/create-page.component';
import { CreateModalComponent } from './create/create-modal/create-modal.component';
import { LobbyComponent } from './lobby/lobby.component';


@NgModule({
  imports: [
    CommonModule,
	FormsModule,
	SharedModule,
    LobbyRoutingModule
  ],
  declarations: [MainComponent, DashboardComponent, CreateCommonComponent, CreatePageComponent, CreateModalComponent, LobbyComponent]
})
export class LobbyModule { }
