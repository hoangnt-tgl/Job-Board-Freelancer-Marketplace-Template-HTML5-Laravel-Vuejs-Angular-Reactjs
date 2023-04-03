import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreelancerPaymentsComponent } from './freelancer-payments.component';

const routes: Routes = [{ 
  path: '', 
  component: FreelancerPaymentsComponent,
children:[
  { 
    path: 'withdraw-money', 
    loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) 
  }, 
  { 
    path: 'invoices', 
    loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesModule) 
  },
  { 
    path: 'history', 
    loadChildren: () => import('./history/history.module').then(m => m.HistoryModule) 
  },
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreelancerPaymentsRoutingModule { }
