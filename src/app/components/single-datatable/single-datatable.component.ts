import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EPerson } from '../../shared/interfaces/person';
import { sortBy } from 'lodash-es';

@Component({
  selector: 'app-single-datatable',
  standalone: true,
  imports: [],
  templateUrl: './single-datatable.component.html',
  styleUrl: './single-datatable.component.css'
})
export class SingleDatatableComponent {
  @Input()
  data: EPerson[];
  @Output() personClicked = new EventEmitter<EPerson>();

  sortOrder = {
    givenName: 'none',
    sirName: 'none',
    age: 'none',
    email: 'none',
    education: 'none',
  }

  sortData(sortKey: string) {
    if (this.sortOrder[sortKey] === 'asc') {
      this.sortOrder[sortKey] = 'desc';
      this.data = sortBy(this.data, sortKey).reverse();
    } else {
      this.sortOrder[sortKey] = 'asc';
      this.data = sortBy(this.data, sortKey);
    }

    for (let key in this.sortOrder) {
      if (key !== sortKey) {
        this.sortOrder[key] = 'none';
      }
    }
  }

  sortSign(sortKey: string) {
    if (this.sortOrder[sortKey] === 'asc') {
      return '↑';
    } else if (this.sortOrder[sortKey] === 'desc') {
      return '↓';
    } else {
      return '';
    }
  }

  onPersonClicked(person: EPerson) {
    this.personClicked.emit(person);
  }
}
