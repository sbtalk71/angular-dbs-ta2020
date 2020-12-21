import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseListComponent } from './course-list/course-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:"",redirectTo:"dsahboard",pathMatch:'full'},
  {path:"dashboard",component:DashboardComponent},
  {path:"courselist",component:CourseListComponent},
  {path:"details/:id",component:CourseDetailsComponent},
  {path:"**",component:DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
