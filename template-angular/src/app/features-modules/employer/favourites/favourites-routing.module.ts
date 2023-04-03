import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouritesComponent } from './favourites.component';

const routes: Routes = [
  { 
    path: '', 
    component: FavouritesComponent,
    children: [
      { path: 'invitedfavourites', loadChildren: () => import('./invitedfavourites/invitedfavourites.module').then(m => m.InvitedfavouritesModule) },
      { path: 'markedfavourites', loadChildren: () => import('./markedfavourites/markedfavourites.module').then(m => m.MarkedfavouritesModule) },
      { path: 'favourites-list', loadChildren: () => import('./favourites-list/favourites-list.module').then(m => m.FavouritesListModule) },
    ] },
  
   ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavouritesRoutingModule { }
