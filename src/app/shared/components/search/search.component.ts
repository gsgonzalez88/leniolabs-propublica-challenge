import { Component, Output, EventEmitter } from '@angular/core';
import { FilterConstants } from '../../constants/filter.constants';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  filter: string = FilterConstants.GLOBAL;
  @Output() onGlobalSearch = new EventEmitter();

  constructor() { }

  onSubmit(event: Event, value: string): void {
    event.preventDefault();
    this.onGlobalSearch.emit({ value, filter: this.filter });
  }

  setFilter(type: string): void {
    this.filter = type;
  }

}
