import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpHeaders, HttpResponse } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable, tap } from "rxjs";


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
      tap(event => {
        if (event instanceof HttpResponse) {
          console.log('Response status: ',event.status)
        }
      })
    )
  }
}
