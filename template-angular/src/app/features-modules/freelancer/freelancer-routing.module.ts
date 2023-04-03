import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreelancerComponent } from './freelancer.component';

const routes: Routes = [
  { 
    path: '', 
    component: FreelancerComponent,
    children: [
      { path: '', redirectTo: 'dashboards', pathMatch: 'full' },
      { 
        path: 'dashboards', 
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) 
      }, 
      { 
        path: 'developer-profile', 
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) 
      }, 
      { 
        path: 'developers-details', 
        loadChildren: () => import('./freelancer-details/freelancer-details.module').then(m => m.FreelancerDetailsModule) 
      }, 

      { 
        path: 'membership', 
        loadChildren: () => import('./membership/membership.module').then(m => m.MembershipModule) 
      }, 
 
      { 
        path: 'message', 
        loadChildren: () => import('./chats/chats.module').then(m => m.ChatsModule) 
      }, 
      { 
        path: 'reviews', 
        loadChildren: () => import('./review/review.module').then(m => m.ReviewModule) 
      }, 

      { 
        path: 'payments', 
        loadChildren: () => import('./milestones/payments/payments.module').then(m => m.PaymentsModule) 
      },
      { 
        path: 'verify-identitys', 
        loadChildren: () => import('./identify/identify.module').then(m => m.IdentifyModule) 
      }, 
 
 
      { 
        path: 'project', 
        loadChildren: () => import('./project/projects/projects.module').then(m => m.ProjectsModule) 
      }, 
      { 
        path: 'project-details', 
        loadChildren: () => import('./project/projects-details/projects-details.module').then(m => m.ProjectsDetailsModule) 
      },


      { 
        path: 'portfolio', 
        loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule) 
      },
      { 
        path: 'overviews', 
        loadChildren: () => import('./milestones/overviews/overviews.module').then(m => m.OverviewsModule) 
      },
      { 
        path: 'tasks', 
        loadChildren: () => import('./milestones/tasks/tasks.module').then(m => m.TasksModule) 
      },
      { 
        path: 'milestone', 
        loadChildren: () => import('./milestones/milestone/milestone.module').then(m => m.MilestoneModule) 
      },
      { 
        path: 'files', 
        loadChildren: () => import('./milestones/files/files.module').then(m => m.FilesModule) 
      },

      { 
        path: 'user-details', 
        loadChildren: () => import('./freelancerdetails/freelancerdetails.module').then(m => m.FreelancerdetailsModule) 
      },
      { path: 'freelancer-projects', loadChildren: () => import('./freelancer-projects/freelancer-projects.module').then(m => m.FreelancerProjectsModule) },
      { path: 'freelancer-favourite', loadChildren: () => import('./freelancer-favourite/freelancer-favourite.module').then(m => m.FreelancerFavouriteModule) },
      { path: 'freelancer-payments', loadChildren: () => import('./freelancer-payments/freelancer-payments.module').then(m => m.FreelancerPaymentsModule) },
      { path: 'freelancer-settings', loadChildren: () => import('./freelancer-settings/freelancer-settings.module').then(m => m.FreelancerSettingsModule) },
    ]
  },
  
  
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreelancerRoutingModule { }
