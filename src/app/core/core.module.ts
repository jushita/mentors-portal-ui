import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../home/home.module';
import { MenuModule } from '../menu/menu.module';
import { SideBarModule } from '../side-bar/side-bar.module';
import { ContainerModule } from '../container/container.module';
import { MainContainerModule } from '../main-container/main-container.module';
import { MenteeDashboardModule } from '../mentee-dashboard/mentee-dashboard.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    MenuModule,
    SideBarModule,
    ContainerModule,
    MainContainerModule,
    MenteeDashboardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeModule,
    MenuModule,
    SideBarModule,
    ContainerModule,
    MainContainerModule,
    MenteeDashboardModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
