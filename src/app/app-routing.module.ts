import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { MenteeDashboardComponent } from './mentee-dashboard/mentee-dashboard/mentee-dashboard.component';
import { LoginComponent } from './login/login/login.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: LoginComponent },
  { path: 'mentee-dashboard/:id', component: MenteeDashboardComponent, pathMatch: 'prefix'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
