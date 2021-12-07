import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  optionsObj = {
    headers: {
      'X-API-Key': 'IqiCcQDjAZofOCxiBBkDcwsUNGFZ5EJjZoeVU4x2'
    }
  }

  constructor(private http: HttpClient) {}

  getMemberList(): Observable<any> {
    return this.http.get(environment.apiUrl, this.optionsObj);
  }

}