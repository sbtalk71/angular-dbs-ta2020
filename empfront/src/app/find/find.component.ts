import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  id!:string;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  findEmp(empId:string){
    this.id=empId;
    this.router.navigate(['/empdetails',this.id]);
  }
}
