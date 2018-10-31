import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatePageComponent } from './create/create-page/create-page.component';
import { LobbyComponent } from './lobby/lobby.component';

const routes: Routes = [
  { path:'', component: MainComponent,
    children:[
      {path:'', redirectTo:'dashboard'},
      {path:'dashboard', component:DashboardComponent},
      {path:'create', component:CreatePageComponent},
      {path:'lobby/:id', component:LobbyComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LobbyRoutingModule { }
