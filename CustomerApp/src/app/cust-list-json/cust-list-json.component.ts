import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerhttpService } from '../customerhttp.service';

@Component({
  selector: 'app-cust-list-json',
  templateUrl: './cust-list-json.component.html',
  styleUrls: ['./cust-list-json.component.css']
})
export class CustListJsonComponent implements OnInit {
title="Customers from JSON File Using http request";

customerList:Customer[]=[];
foundCust!:Customer;
  constructor(private _service:CustomerhttpService) { }

  ngOnInit(): void {
    this._service.geCustomersFromFile().subscribe(data=>this.customerList=data);
  }

  getCustomer(id:number){
    
  }
}
