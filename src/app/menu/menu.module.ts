import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [MenuComponent],
  imports: [
    AppRoutingModule,
    RouterModule,
    CommonModule,
    SharedModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
