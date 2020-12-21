import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators'
import { IEmp } from './iemp';
import { MyMessageResponse } from './MyResponseMessage';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  private _baseUrl = "http://localhost:8181/emp/";

  constructor(private _http: HttpClient) { }

  public getEmpList(): Observable<IEmp[]> {
    return this._http.get<IEmp[]>(this._baseUrl + "list");
  }

  public getEmp(id: number): Observable<IEmp> {
    return this._http.get<IEmp>(this._baseUrl + "find/" + id);/*.pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error:HttpErrorResponse){
    let errorMessage='';
    if(error.error instanceof ErrorEvent){
      errorMessage=`Error is ${error.error.message}`;
    }else{
      errorMessage=`Error Status ${error.status}\n ${error.message}`;
    }
    //console.log(errorMessage);
    return throwError(errorMessage);
  }*/
  }

  public addEmp(empModel:IEmp):Observable<MyMessageResponse>{
    return this._http.post<MyMessageResponse>(this._baseUrl+"save",empModel);
  }
}
