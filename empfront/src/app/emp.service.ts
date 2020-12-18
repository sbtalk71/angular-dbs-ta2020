import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmp } from './iemp';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  private _baseUrl="http://localhost:8181/emp/";

  constructor(private _http:HttpClient) { }

  public getEmpList():Observable<IEmp[]>{
    return this._http.get<IEmp[]>(this._baseUrl+"list");
  }

  public getEmp(id:number):Observable<IEmp>{
    return this._http.get<IEmp>(this._baseUrl+"find/"+id);
  }
}
