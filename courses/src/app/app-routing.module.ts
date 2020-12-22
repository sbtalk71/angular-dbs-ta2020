import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseListComponent } from './course-list/course-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {path:"",redirectTo:"dsahboard",pathMatch:'full'},
  {path:"dashboard",component:DashboardComponent},
  {path:"courselist",component:CourseListComponent},
  {path:"details/:id",component:CourseDetailsComponent,
    children:[
      {path:"overview",component:OverviewComponent},
      {path:"contact",component:ContactInfoComponent}
    ]},
  {path:"**",component:DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
