import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent }     from './main/main.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  {
    path:'', component:MainComponent,
    children:[
      { path: '', pathMatch: 'full', redirectTo: '/home'},
      { path:'home', component: HomeComponent},
      { path:'signin', component: SigninComponent},
      { path:'signup', component: SignupComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
