import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable(
  {providedIn:'root'}
)
export class MyGlobalErrorHandler implements ErrorHandler{
  constructor(){}
    handleError(error:any) {
        console.log(`Error Message is ${error.message}`);
        throw error;
      }
}