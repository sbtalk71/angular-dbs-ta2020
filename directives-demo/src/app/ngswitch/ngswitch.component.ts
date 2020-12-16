import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  template: `
    <h2>*ngSwitchCase</h2>
    <div [ngSwitch]="name">
      <div *ngSwitchCase="'shantanu'">Selected Name Shantanu</div>
      <div  *ngSwitchCase="'pavan'">Selected Name Pavan</div>
      <div *ngSwitchDefault>No Proper Selection</div>
  </div>
  `,
  styles: [
  ]
})
export class NgswitchComponent implements OnInit {

  public names:string[]=["shantanu","pavan","Viren","anand","kirti","rajan"];
  public name="shantanu";
  constructor() { }

  ngOnInit(): void {
  }

}
