import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MembersListComponent } from './members-list.component';
import { of } from 'rxjs';
import { MembersService } from '../../services/members.service';

describe('MembersListComponent', () => {
  let component: MembersListComponent;
  let fixture: ComponentFixture<MembersListComponent>;
  let memberServiceMock: any;

  memberServiceMock = jasmine.createSpyObj('MembersService', ['setMemberDetail']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersListComponent ],
      providers: [
        { provide: MembersService, useValue: memberServiceMock },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call setMemberDetail from service members when getMember is called', () => {
    component.getMember(101);

    expect(memberServiceMock.setMemberDetail).toHaveBeenCalledOnceWith(101);
  });
});
