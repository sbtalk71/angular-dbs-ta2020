import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';
import { IEmp } from '../iemp';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  empList:IEmp[]=[];

  constructor(private _service:EmpService,private router:Router) { }

  ngOnInit(): void {
    this._service.getEmpList().subscribe(data=>this.empList=data);
  }

  public getEmpDetails(id:number){
    console.log("You Selected "+id);
    this.router.navigate(['empdetails',id]);

  }
}
