import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenteeDashboardComponent, DialogData } from './mentee-dashboard/mentee-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { MenuModule } from '../menu/menu.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [MenteeDashboardComponent, DialogData],
  imports: [
    CommonModule,
    SharedModule,
    MenuModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MenteeDashboardComponent,
    DialogData
  ]
})
export class MenteeDashboardModule { 
  public data = true;
}
