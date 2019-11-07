import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import * as actions from '../actions/list.actions';

export interface BookEntity {
  id: number;
  title: string;
  author: string;
  format: string;
}

export interface State extends EntityState<BookEntity> {

}

export const adapter = createEntityAdapter<BookEntity>();


const initialState: State = {
  ids: ['1', '2'],
  entities: {
    1: { id: 1, title: 'Harry Potter', author: 'J.K Rowling', format: 'Hardcover' },
    2: { id: 2, title: 'Arabian Nights', author: 'Mark Twain', format: 'E-book' }
  }
};

const reducerFunction = createReducer(
  initialState,
  on(actions.addBook, (state, action) => adapter.addOne(action.payload, state)),
  on(actions.loadBooks, (state, action) => adapter.addAll(action.books, state))
);

export function reducer(state: State = initialState, action: Action) {
  return reducerFunction(state, action);
}
