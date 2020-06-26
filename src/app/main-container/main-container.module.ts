import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContainerComponent } from './main-container/main-container.component';
import { SharedModule } from '../shared/shared.module';
import { MessagesModule } from '../messages/messages.module';



@NgModule({
  declarations: [MainContainerComponent],
  imports: [
    CommonModule,
    SharedModule,
    MessagesModule
  ],
  exports: [
    MainContainerComponent
  ]
})
export class MainContainerModule { }
