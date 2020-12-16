import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  template: `
  <div [hidden]="isHidden">  
  <h2>List of names</h2>
    <ul>
    <li *ngFor="let name of names" (click)="selectName(name)">{{name}}</li>
    </ul>
    <h3>You Clicked on {{selectedName}}</h3>
    </div>
    <div>
    <button (click)="toggleDisplay()">{{label}}</button>
    </div>

  `,
  styles: [
  ]
})
export class NgforComponent implements OnInit {

  public isHidden=false;
  public label:string="Hide"
  public selectedName:string="";
  public names:string[]=["Rakesh","Mukesh","Anil","Chandra","Ranga","Pretham","Raja"];
  constructor() { }

  ngOnInit(): void {
  }
  
public toggleDisplay(){
  if(this.isHidden){
    this.isHidden=false;
    this.label="Hide";
  }else{
    this.isHidden=true;
    this.label="Show";
  }
}

public selectName(data:string){
  this.selectedName=data;
}
}
