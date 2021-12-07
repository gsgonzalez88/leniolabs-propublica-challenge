import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/shared/services/members.service';

@Component({
  templateUrl: './detail-member.component.html',
})
export class DetailMemberComponent implements OnInit {

  memberDetail: any = {};

  constructor(private membersService: MembersService) { }

  ngOnInit(): void {
    this.memberDetail = this.membersService.member;
  }

}
