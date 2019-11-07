import { createAction, props } from '@ngrx/store';
import { BookEntity } from '../reducers/list.reducer';

let id = 3;

export const addBook = createAction(
  '[ books ] added a book',
  ({ title, author, format }: { title: string, author: string, format: string }) => ({
    payload: {
      id: id++,
      title,
      author,
      format
    } as BookEntity
  })
);

export const loadBooks = createAction(
  '[books] loaded books successfully',
  props<{ books: BookEntity[] }>()
);

