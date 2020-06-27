import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenteeDashboardComponent } from './mentee-dashboard/mentee-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { MenuModule } from '../menu/menu.module';



@NgModule({
  declarations: [MenteeDashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    MenuModule,
    MenuModule
  ],
  exports: [
    MenteeDashboardComponent
  ]
})
export class MenteeDashboardModule { }
