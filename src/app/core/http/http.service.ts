import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  optionsObj = {
    headers: {
      'X-API-Key': 'IqiCcQDjAZofOCxiBBkDcwsUNGFZ5EJjZoeVU4x2'
    }
  }
  constructor(private http: HttpClient) { }

  getCongressMembers() {
    return this.http.get(environment.apiUrl, this.optionsObj);
  }
}
