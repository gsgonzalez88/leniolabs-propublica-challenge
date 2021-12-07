import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  member = {};
  memberDetail = {};

  constructor(private http: HttpClient, private router: Router) {}

  getMemberList(): Observable<any> {
    return this.http.get(environment.apiUrl);
  }

  setMemberDetail(index: any): void {
    this.getMemberList()
    .subscribe((list) => {
      this.member = list.results[0].members[index];
      this.router.navigate(['member-detail']);
    })
  }

}
