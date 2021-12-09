import { MembersService } from './../../services/members.service';
import { Component, Input } from '@angular/core';

export interface MemberMinimunInfo {
  name: string;
  last_name: string;
  gender: string;
  party: string;
}

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent {

  displayedColumns: string[] = ['name', 'last_name', 'gender', 'party'];
  @Input() dataSource: MemberMinimunInfo[] = [];

  constructor(private membersService: MembersService) { }

  getMember(index: any) {
    this.membersService.setMemberDetail(index);
  }

}
