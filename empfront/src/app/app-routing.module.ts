import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddempReactiveComponent } from './addemp-reactive/addemp-reactive.component';
import { AddempComponent } from './addemp/addemp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { EmplistComponent } from './emplist/emplist.component';
import { FindComponent } from './find/find.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:"dashboard",component:DashboardComponent},
  {path:"empdetails/:id",component:EmpdetailsComponent},
  {path:"emplist",component:EmplistComponent},
  {path:"find",component:FindComponent},
  {path:"addemp",component:AddempComponent},
  {path:"addreactive",component:AddempReactiveComponent},
  {path:'notfound',component:NotfoundComponent},
  {path:"**",redirectTo:'emplist',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
