import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable, tap } from "rxjs";


@Injectable()
export class Interceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiKey = 'IqiCcQDjAZofOCxiBBkDcwsUNGFZ5EJjZoeVU4x2';

    const headers = new HttpHeaders().set('X-API-Key', apiKey);

    const customReq = request.clone({
      headers
    });
    console.log('Request: ',customReq);
    return next.handle(customReq)
    .pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          console.log('Response status: ',event.status)
        }
      })
    )
  }
}
