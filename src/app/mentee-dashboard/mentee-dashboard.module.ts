import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenteeDashboardComponent, DialogData } from './mentee-dashboard/mentee-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { MenuModule } from '../menu/menu.module';



@NgModule({
  declarations: [MenteeDashboardComponent, DialogData],
  imports: [
    CommonModule,
    SharedModule,
    MenuModule,
  ],
  exports: [
    MenteeDashboardComponent,
    DialogData
  ]
})
export class MenteeDashboardModule { 
  public data = true;
}
