import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BlogPost } from './BlogPost';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private _url="https://jsonplaceholder.typicode.com/posts/"
  constructor(private _http:HttpClient) { }

  public getValue():string{
    return "testing service";
  }

  public getDataAsObservable():Observable<string>{
    return of<string>('hello from service');
  }

  public getBlogPost(id:number):Observable<BlogPost>{
    return this._http.get<BlogPost>(this._url+id);
  }
}
