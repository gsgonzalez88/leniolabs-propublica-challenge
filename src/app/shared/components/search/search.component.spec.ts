import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { FilterConstants } from '../../constants/filter.constants';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set filter type when setFilter is called', () => {
    component.filter = '';

    component.setFilter(FilterConstants.NAME);

    expect(component.filter).toEqual(FilterConstants.NAME);
  });

  it('should preventSubmit and emit value and filter when onSubmit is called', () => {
    const spyOnGlobalSearch = spyOn(component.onGlobalSearch, 'emit');
    component.filter = FilterConstants.GENDER;
    fixture.detectChanges();
    const mockEvent = new Event('mock');
    const spyOnPreventDefault = spyOn(mockEvent, 'preventDefault');

    component.onSubmit(mockEvent, 'test');

    expect(spyOnPreventDefault).toHaveBeenCalled();
    expect(spyOnGlobalSearch).toHaveBeenCalledOnceWith({ value: 'test', filter: FilterConstants.GENDER });
  });
});
