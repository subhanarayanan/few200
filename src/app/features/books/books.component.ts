import { Component, OnInit } from '@angular/core';
import { BookListItem } from './models';
import { Observable } from 'rxjs';
import { BookState, selectBookListItems } from './reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books$: Observable<BookListItem[]>;
  constructor(private store: Store<BookState>) { }

  ngOnInit() {
    this.books$ = this.store.select(selectBookListItems);
  }


}
