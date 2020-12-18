import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpService } from '../emp.service';
import { IEmp } from '../iemp';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {

  emp!: IEmp;
  constructor(private _service: EmpService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let empId = parseInt(this.activeRoute.snapshot.params.id);
    this._service.getEmp(empId).subscribe(data => this.emp = data);
  }

}
