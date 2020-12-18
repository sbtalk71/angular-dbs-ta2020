import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {filter,map, take} from "rxjs/operators/"
import { BlogPost } from './BlogPost';
import { Customer } from './customer';
import {catchError} from 'rxjs/operators';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class CustomerhttpService {

  private _url="/assets/data/customers.json";
  private _postUrl='https://jsonplaceholder.typicode.com/posts';

  constructor(private _http:HttpClient) { }

  public geCustomersFromFile():Observable<Customer[]>{

    return this._http.get<Customer[]>(this._url);
  }

  public findCustById(id:number):Observable<Customer>{
   return this.geCustomersFromFile().pipe(map(e=>{return e[id]}));
  // return this.geCustomersFromFile().pipe(filter(e=>e.customerId==id)));
  }

  public getBlogPosts():Observable<BlogPost[]>{
    return this._http.get<BlogPost[]>(this._postUrl);
  }

  public getBlogPostsById(id:string):Observable<BlogPost>{
    return this._http.get<BlogPost>(this._postUrl+"/"+id);
  }

  
}
