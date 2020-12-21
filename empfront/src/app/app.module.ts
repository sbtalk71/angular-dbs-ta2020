import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {HttpClientModule} from '@angular/common/http';
import { FindComponent } from './find/find.component';
import { MyGlobalErrorHandler } from './MyGlobalErrorHandler';
import { AddempComponent } from './addemp/addemp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddempReactiveComponent } from './addemp-reactive/addemp-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmplistComponent,
    EmpdetailsComponent,
    NotfoundComponent,
    FindComponent,
    AddempComponent,
    AddempReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide:ErrorHandler,useClass:MyGlobalErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
