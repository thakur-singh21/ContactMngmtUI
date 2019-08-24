import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AccessGaurd } from './login/AccessGaurd';
import { RegistrationComponent } from './registration/registration.component';
import { CompaniesComponent } from './companies/companies.component';


const routes: Routes = [{
  path: '',
  component: LoginComponent,
  canActivate: [AccessGaurd]
},
{
  path: 'Home',
  component: HomeComponent
},
{
  path: 'Register',
  component: RegistrationComponent
},
{
  path: 'Companies',
  component: CompaniesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
