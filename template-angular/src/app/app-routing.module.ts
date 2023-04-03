import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AuthenticateGuard
  } from './core/guard/guard.index';
import { ErrorfoundComponent } from './features-modules/auth/errorfound/errorfound.component';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./features-modules/features-modules.module').then( (m) => m.FeaturesModulesModule) 
  },
  {
    path: '404',
    component: ErrorfoundComponent,
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
