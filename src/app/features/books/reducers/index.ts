import * as fromList from './list.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookListItem } from '../models';
import { Observable } from 'rxjs';

export const featureName = 'booksFeature';

export interface BookState {
  list: fromList.State;
}


export const reducers = {
  list: fromList.reducer
};

// Selectors

// 1. Feature Selector
export const _selectBooksFeature = createFeatureSelector<BookState>(featureName);
// 2. Selector Per Branch
export const _selectListBranch = createSelector(_selectBooksFeature, b => b.list);
// 3. Helpers (optional)

export const { selectAll: _selectBookListArray } = fromList.adapter.getSelectors(_selectListBranch);
// 4. What the components need.

// Todo: We need a selector that returns a MovieListItem[] for our list.
export const selectBookListItems = createSelector(
  _selectBookListArray,
  (books) => books.map(book => ({
    id: book.id,
    title: book.title,
    author: book.author,
    format: book.format
  } as BookListItem)));
