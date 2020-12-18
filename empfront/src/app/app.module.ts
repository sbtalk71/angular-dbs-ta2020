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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmplistComponent,
    EmpdetailsComponent,
    NotfoundComponent,
    FindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide:ErrorHandler,useClass:MyGlobalErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
