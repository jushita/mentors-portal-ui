import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewMessageComponent } from './new-message/new-message.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [NewMessageComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NewMessageComponent
  ]
})
export class NewMessageModule { }
