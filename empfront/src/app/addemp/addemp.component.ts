import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { IEmp } from '../iemp';
import { MyMessageResponse } from '../MyResponseMessage';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {

  responseMessage='';
  emp:IEmp={"empid":0,"empName":"","city":"","salary":1};
  constructor(private _service:EmpService) { }

  ngOnInit(): void {
  }
public onSubmit(){
  //console.log(empForm);
  this._service.addEmp(this.emp).subscribe(resp=>this.responseMessage=resp.message);
}
}
