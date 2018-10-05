import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {SuiModule} from 'ng2-semantic-ui';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu/menu.component';
import { ItemsComponent } from './menu/items/items.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule,
    SuiModule
  ],
  declarations: [MainComponent, HomeComponent, MenuComponent, ItemsComponent,
    SigninComponent, SignupComponent]
})
export class MainModule { }
