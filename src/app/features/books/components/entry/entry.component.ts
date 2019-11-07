import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookState } from '../../reducers';
import { addBook } from '../../actions/list.actions';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private store: Store<BookState>) { }

  ngOnInit() {
  }

  add(titleEl: HTMLInputElement, authorEl: HTMLInputElement, formatEl: HTMLSelectElement) {

    const itemToAdd = {
      title: titleEl.value,
      author: authorEl.value,
      format: formatEl.value
    };

    this.store.dispatch(addBook({ ...itemToAdd }));

    titleEl.value = '';
    authorEl.value = '';
    formatEl.value = 'H';
    titleEl.focus();

  }
}
