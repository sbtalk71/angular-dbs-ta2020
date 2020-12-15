import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp';
import { IEmp } from '../iemp';

@Component({
  selector: 'app-emp',
  template: `
    <h1>Emp Details as follows</h1>
    <p>{{emp.printDetails()}}
    <hr>
    <h1>{{emp1.id}}{{emp1.name}}{{emp1.city}}{{emp1.salary}}</h1>
  `,
  styles: [
  ]
})
export class EmpComponent implements OnInit {

  emp:Emp=new Emp(100,'Shantanu',"Hyderabad",45000);
 
  emp1:IEmp={id:100,name:'Arun',city:"Hyderabad",salary:46000};

  constructor() { }

  ngOnInit(): void {
  }

}
