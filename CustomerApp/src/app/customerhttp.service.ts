import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerhttpService {

  private _url="/assets/data/customers.json";

  constructor(private _http:HttpClient) { }

  public geCustomersFromFile():Observable<Customer[]>{

    return this._http.get<Customer[]>(this._url);
  }
}
