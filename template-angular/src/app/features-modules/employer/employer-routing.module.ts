import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployerComponent } from './employer.component';

const routes: Routes = [
  { 
    path: '', 
    component: EmployerComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { 
        path: 'dashboard', 
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) 
      },
      { 
        path: 'company-profile', 
        loadChildren: () => import('./company-profile/my-profile/my-profile.module').then(m => m.MyProfileModule) 
      },
      { 
        path: 'company-details', 
        loadChildren: () => import('./my-company/company-details/company-details.module').then(m => m.CompanyDetailsModule) 
      },
      { 
        path: 'manage-projects',
         loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) 
        },
      { 
        path: 'favourites', 
        loadChildren: () => import('./favourites/favourites.module').then(m => m.FavouritesModule) 
      },
      { 
        path: 'membership-plans', 
        loadChildren: () => import('./membership/membership.module').then(m => m.MembershipModule) 
      },
      { 
        path: 'milestones', 
        loadChildren: () => import('./milestones/milestones.module').then(m => m.MilestonesModule) 
      },
      { 
        path: 'chats', 
        loadChildren: () => import('./chats/chats.module').then(m => m.ChatsModule) 
      },
      { 
        path: 'review', 
        loadChildren: () => import('./review/review.module').then(m => m.ReviewModule) 
      },
      { 
        path: 'deposit-funds', 
        loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) 
      },
      { 
        path: 'verify-identity', 
        loadChildren: () => import('./identify/identify.module').then(m => m.IdentifyModule) 
      },
      { 
        path: 'profile-settings', 
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) 
      },
      { 
        path: 'developer', 
        loadChildren: () => import('./freelancer/freelancer/freelancer.module').then(m => m.FreelancerModule) 
      },
      { 
        path: 'developer-list', 
        loadChildren: () => import('./freelancer/freelancer-list/freelancer-list.module').then(m => m.FreelancerListModule) 
      },
      { 
        path: 'company-project', 
        loadChildren: () => import('./company-profile/company-project/company-project.module').then(m => m.CompanyProjectModule) 
      },
      { 
        path: 'company-gallery', 
        loadChildren: () => import('./company-profile/company-gallery/company-gallery.module').then(m => m.CompanyGalleryModule) 
      },
      { 
        path: 'company-reviews', 
        loadChildren: () => import('./company-profile/company-reviews/company-reviews.module').then(m => m.CompanyReviewsModule) 
      },
      { 
        path: 'post-project', 
        loadChildren: () => import('./postproject/postproject.module').then(m => m.PostprojectModule) 
      },
    ]
 },
  
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
