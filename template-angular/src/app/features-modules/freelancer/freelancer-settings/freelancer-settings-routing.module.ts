import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreelancerSettingsComponent } from './freelancer-settings.component';

const routes: Routes = [{ 
  path: '', 
  component: FreelancerSettingsComponent, 
  children:[
    { 
      path: 'profiles-settings', 
      loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      { 
        path: 'delete-account', 
        loadChildren: () => import('./delete-account/delete-account.module').then(m => m.DeleteAccountModule) 
      },
      { 
        path: 'change-passwords', 
        loadChildren: () => import('./change-password/change-password.module').then(m => m.ChangePasswordModule) 
      },
  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreelancerSettingsRoutingModule { }
