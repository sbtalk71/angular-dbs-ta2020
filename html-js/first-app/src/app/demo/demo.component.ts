import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <hr>
    <h1>This is Demo Page</h1>
    <h1>{{"one"+" two"}}</h1>
    <h1>{{8+9}}</h1>
    <h1>{{getSomeData()}}</h1>
    <h1>{{testData}}</h1>
    <hr>
  `,
  styles: [
  ]
})
export class DemoComponent implements OnInit {

  testData="Angular Class";
  constructor() { }

  ngOnInit(): void  {
    this.testData="Welcome to Angular";
  }

  public getSomeData(){
    return "From Method Call";
  }
}
