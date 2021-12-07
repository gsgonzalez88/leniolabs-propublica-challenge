import { MembersService } from './../../shared/services/members.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.page';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let memberServiceMock: any;

  memberServiceMock = jasmine.createSpyObj('MembersService', ['getMemberList']);
  memberServiceMock.getMemberList.and.returnValue(of([{}]));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [{ provide: MembersService, useValue: memberServiceMock }]
    })
    .compileComponents();
  });

  beforeEach(() => {

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
