import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  member: any = {};
  memberList = [];

  constructor(private http: HttpClient, private router: Router) {}

  getMemberList(): Observable<any> {
    return this.http.get(environment.apiUrl);
  }

  setMemberDetail(row: any): void {
    this.member = this.memberList.find((member: any) => member.id === row.id);
    this.router.navigate(['member-detail']);
  }

}
