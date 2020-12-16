import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp';

@Component({
  selector: 'app-pipes',
  template: `
    <h2>Angular Pipes</h2>
    <h2>{{title|uppercase}}</h2>
    <h2>{{title|lowercase}}</h2>
    <h2>{{title|titlecase}}</h2>
    <h2>{{67.8|number:'4.3-4'}}</h2>
    <h2> Today is {{today|date:'short'}}</h2>
    <h2>{{empdata|json}}</h2>
    <h2>{{emp|json}}</h2>
  `,
  styles: [
  ]
})
export class PipesComponent implements OnInit {

  public title="leaRning piPes";

  empdata:Object={id:100,name:"Shantanu",city:"Hyderabad",salary:45000};

  public today=Date.now();

  emp:Emp=new Emp(102,"Shan","Bangalore",80000);
  constructor() { }

  ngOnInit(): void {
  }

}
