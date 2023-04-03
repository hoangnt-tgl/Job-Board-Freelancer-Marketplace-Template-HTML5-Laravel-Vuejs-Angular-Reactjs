import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreelancerProjectsComponent } from './freelancer-projects.component';

const routes: Routes = [{ 
  path: '', 
  component: FreelancerProjectsComponent,
  children:[
    { 
      path: 'projects-proposals', 
      loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) 
    },
    { 
      path: 'ongoing-projects', 
      loadChildren: () => import('./ongoingprojects/ongoingprojects.module').then(m => m.OngoingprojectsModule) 
    },
    { 
      path: 'completed-projects', 
      loadChildren: () => import('./completedprojects/completedprojects.module').then(m => m.CompletedprojectsModule) 
    },
    { 
      path: 'cancelled-projects', 
      loadChildren: () => import('./cancelledprojects/cancelledprojects.module').then(m => m.CancelledprojectsModule) 
    }, 
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreelancerProjectsRoutingModule {}
