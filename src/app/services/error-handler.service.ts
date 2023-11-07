import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(
    private toastr: ToastrService
  ) { }

  /**
   * The function handles HTTP errors by displaying an error message and logging the error, then
   * returning an observable that throws the error message.
   * @param {HttpErrorResponse} e - HttpErrorResponse - The error response object returned by the HTTP
   * request.
   * @returns an Observable that emits an error with the error message.
   */
  handleHttpError(e: HttpErrorResponse): Observable<never> {
    // console.log(e)
    let errorMessage = `Error: ${e.status} (${e.statusText})`;

    if (e.error.error === 'Forbidden') {
      this.toastr.error('This account do not have the necessary permission to access the data from ' + e.url, errorMessage);
    } else {
      if (Array.isArray(e.error.message)) {
        this.toastr.error(e.error.message.join(" "), errorMessage);
      } else {
        this.toastr.error(e.error.message, errorMessage);
      }

      console.error(e);
    }

    return throwError(errorMessage);
  }
}
