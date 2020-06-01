import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [SideBarComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SideBarComponent
  ]
})
export class SideBarModule { }
