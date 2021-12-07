import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  filter: string = 'global';

  @Output() onGlobalSearch = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(event: any, value: any) {
    event.preventDefault();
    this.onGlobalSearch.emit({ value, filter: this.filter });
  }

  setFilter(type: string): void {
    this.filter = type;
  }

}
