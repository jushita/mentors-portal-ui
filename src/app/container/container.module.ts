import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { SharedModule } from '../shared/shared.module';
import { SideBarModule } from '../side-bar/side-bar.module';
import { MainContainerModule } from '../main-container/main-container.module';



@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    SharedModule,
    SideBarModule,
    MainContainerModule
  ],
  exports: [
    ContainerComponent
  ]

})
export class ContainerModule { }
