import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegestrationComponent } from './regestration/regestration.component';

const routes: Routes = [
{path:"\home", component:LoginComponent},
{path:"\signup",component:RegestrationComponent},
{path:"\login", component:DashboardComponent},
{path:"",redirectTo:"\homepage",pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
