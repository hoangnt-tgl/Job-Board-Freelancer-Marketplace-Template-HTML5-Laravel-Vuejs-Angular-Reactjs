import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  { path: '', 
  component: ProjectsComponent,
  children: [
    { 
      path: 'all-projects', 
      loadChildren: () => import('./all-projects/all-projects.module').then(m => m.AllProjectsModule) 
    }, 
    { 
      path: 'pending-projects', 
      loadChildren: () => import('./pending-projects/pending-projects.module').then(m => m.PendingProjectsModule) 
    }, 
    { 
      path: 'ongoing-projects', 
      loadChildren: () => import('./ongoing-projects/ongoing-projects.module').then(m => m.OngoingProjectsModule) 
    }, 
    { 
      path: 'completed-projects', 
      loadChildren: () => import('./completed-projects/completed-projects.module').then(m => m.CompletedProjectsModule) 
    }, 
    { 
      path: 'cancelled-projects', 
      loadChildren: () => import('./cancelled-projects/cancelled-projects.module').then(m => m.CancelledProjectsModule) 
    },
    { 
      path: 'edit-project', 
      loadChildren: () => import('./edit-project/edit-project.module').then(m => m.EditProjectModule) 
    },  
  ] },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
