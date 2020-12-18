import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';

export class MyGlobalErrorHandler implements ErrorHandler{
    handleError(error:HttpErrorResponse) {
        console.log(`Error Message is ${error.message}`);
      }
}