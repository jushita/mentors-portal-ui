import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { MenteeDashboardComponent } from './mentee-dashboard/mentee-dashboard/mentee-dashboard.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mentee-dashboard/:id', component: MenteeDashboardComponent, pathMatch: 'prefix'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
