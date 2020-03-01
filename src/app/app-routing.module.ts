import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { MembersComponent } from './modules/members/members.component';


const routes: Routes = [{
    path: '',
    component: DefaultComponent,
    children: [{
        path: '',
        component:DashboardComponent
      },
      {
        path:'posts',
        component: PostsComponent
      },
      {
        path:'members',
        component: MembersComponent
      }]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
