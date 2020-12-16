import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InputOutput';
  public parentName="The Parent";

  public messageFromChild="";
  public messageFromChild2="";
}
