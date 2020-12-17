import { Injectable } from '@angular/core';
import { Observable, Observer, of } from 'rxjs';
import { Customer } from './customer';
import { customers } from './customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  
  private foundCust!: Customer;
  constructor() { }

  public getCustomerList(): Observable<Customer[]> {

    return of(customers);
  }


  public findCustById(id: number): Customer {

    for (let i = 0; i < customers.length; i++) {
      if (id == customers[i].customerId) {
        this.foundCust = customers[i];
      }
    }
    return this.foundCust;
  }
}

