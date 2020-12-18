import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerService } from './customer.service';
import {HttpClientModule} from '@angular/common/http';
import { CustomerhttpService } from './customerhttp.service';
import { CustListJsonComponent } from './cust-list-json/cust-list-json.component';
import { DisplaypostComponent } from './displaypost/displaypost.component';
import { DisplayPostComponent } from './display-post/display-post.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerlistComponent,
    CustListJsonComponent,
    DisplaypostComponent,
    DisplayPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CustomerService,CustomerhttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
