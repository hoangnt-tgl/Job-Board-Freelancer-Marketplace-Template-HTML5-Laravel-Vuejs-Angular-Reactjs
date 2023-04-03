import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  { 
    path: '', 
    component: SettingsComponent,
  children: [
    { 
      path: 'basic-settings', 
      loadChildren: () => import('./basic-settings/basic-settings.module').then(m => m.BasicSettingsModule) 
    }, 
    { 
      path: 'change-password', 
      loadChildren: () => import('./change-password/change-password.module').then(m => m.ChangePasswordModule) 
    }, 
    { 
      path: 'delete-account', 
      loadChildren: () => import('./delete-account/delete-account.module').then(m => m.DeleteAccountModule) 
    }
  ] }, ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
