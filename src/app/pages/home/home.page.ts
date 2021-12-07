import { MembersService } from './../../shared/services/members.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomeComponent implements OnInit {
  members = [];
  data: any[] = [];
  pageReady = false;
  found: any[] = [];

  constructor(
    private membersService: MembersService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.setMemberList();
  }

  setMemberList(): void {
    this.membersService.getMemberList()
    .subscribe(
      {
        next: ((list) => {
          this.membersService.memberList = list.results[0].members;
          this.setData();
          this.pageReady = true;
          }),
        error: ((error: any) => {
          this.openSnackBar('Server Error', 'close');
        })
      }
    )
  }

  setData(): void {
    this.data = this.membersService.memberList.map((member: any) => {
      return {
        'id': member.id,
        'name': member.first_name,
        'last_name': member.last_name,
        'gender': member.gender,
        'party': member.party,
      }
    })
  }

  search(info: any): void {
    this.found = [];
    this.data.forEach((member: any) => {
      if(info.filter === 'global') {
        this.searchGlobal(info.value, member);
      } else {
        if(member[info.filter] == info.value) {
          this.found.push(member);
        }
      }
    })
    if(this.found.length === 0) {
      this.setMemberList();
    }
    this.data = this.found;
  }

  searchGlobal(value: string, member: any): void {
    Object.keys(member).forEach((key) => {
      if(member[key] == value) {
        this.found.push(member);
      }
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
