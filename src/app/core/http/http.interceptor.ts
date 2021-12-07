import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpHeaders, HttpResponse } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { catchError, Observable, tap, throwError } from "rxjs";


@Injectable()
export class Interceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders().set('X-API-Key', environment.apiKey);

    const customReq = request.clone({
      headers
    });
    console.log('Request: ',customReq);
    return next.handle(customReq)
    .pipe(
      catchError((error) => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          console.log('this is client side error');
          errorMsg = `Erro: ${error.error.message}`;
        } else {
          console.log('this is server side error');
          errorMsg = `Error code: ${error.status}, Message: ${error.message}`;
        }
        console.log(errorMsg);
        return throwError(() => new Error(errorMsg));
      }),
      tap(event => {
        if (event instanceof HttpResponse) {
          console.log('Response status: ',event.status)
        }
      })
    )
  }
}
