import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../home/home.module';
import { MenuModule } from '../menu/menu.module';
import { SideBarModule } from '../side-bar/side-bar.module';
import { MessagesModule } from '../messages/messages.module';
import { ContainerModule } from '../container/container.module';
import { MainContainerModule } from '../main-container/main-container.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    MenuModule,
    SideBarModule,
    MessagesModule,
    ContainerModule,
    MainContainerModule
  ],
  exports: [
    HomeModule,
    MenuModule,
    SideBarModule,
    MessagesModule,
    ContainerModule,
    MainContainerModule
  ]
})
export class CoreModule { }
