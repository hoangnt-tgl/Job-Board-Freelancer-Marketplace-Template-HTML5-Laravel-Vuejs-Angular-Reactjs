import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreelancerFavouriteComponent } from './freelancer-favourite.component';

const routes: Routes = [{ 
  path: '', 
  component: FreelancerFavouriteComponent,
  children:[
    { 
      path: 'favourite', 
      loadChildren: () => import('./favourites/favourites.module').then(m => m.FavouritesModule) 
    }, 
    { 
      path: 'invitations', 
      loadChildren: () => import('./invitations/invitations.module').then(m => m.InvitationsModule) 
    },
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreelancerFavouriteRoutingModule { }
