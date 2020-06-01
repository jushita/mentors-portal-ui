import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../home/home.module';
import { MenuModule } from '../menu/menu.module';
import { SideBarModule } from '../side-bar/side-bar.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    MenuModule,
    SideBarModule
  ],
  exports: [
    HomeModule,
    MenuModule,
    SideBarModule
  ]
})
export class CoreModule { }
