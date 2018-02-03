import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from "./core/auth.guard";

const appRoutes: Routes = [
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule?sync=true',canActivate: [AuthGuard] },  //eager loading
  { path: 'login', loadChildren: './login/login.module#LoginModule?sync=true'},  //eager loading
  { path: 'devices',loadChildren: './devices/devices.module#DevicesModule',canActivate: [AuthGuard]},  //lazy loading
  { path: 'sites', loadChildren: './sites/sites.module#SitesModule',canActivate: [AuthGuard] },  //lazy loading
  { path: '', redirectTo: '/dashboard',pathMatch:'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }



