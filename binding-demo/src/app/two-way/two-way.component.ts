import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  template: `
    <h1>Two Way Binding</h1>
    <input type="text" name="t1" [(ngModel)]="data"> <br/>
    <h2>{{data}}</h2>
  `,
  styles: [
  ]
})
export class TwoWayComponent implements OnInit {

  public data:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
