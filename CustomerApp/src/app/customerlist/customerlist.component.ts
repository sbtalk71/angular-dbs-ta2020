import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { customers } from '../customers';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
time1:string="";
 
time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 5000);
  });
  
  title="Customers List";
  customerList:Customer[]=[];
  public foundCust!:Customer;
  constructor(private _service:CustomerService) { }

  ngOnInit(): void {
    this._service.getCustomerList().subscribe(data=>this.customerList=data);
    this.time.subscribe(data=>this.time1=data);
  }

  public getCustomer(id:number){
   // console.log("Selected Customer ID "+id);
   // this.getCustById(id);
  // this.foundCust=cust;

  this.foundCust=this._service.findCustById(id)
 
  }
/*
  getCustById(id:number){
    
    for(let i=0;i<this.customerList.length;i++){
      if(id==this.customerList[i].customerId){
        this.foundCust=this.customerList[i];
      }
    }
  }
  */
}
