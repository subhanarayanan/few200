import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from '../books/reducers';



@NgModule({
  declarations: [BooksComponent, EntryComponent, ListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, reducers)
  ]
})
export class BooksModule { }
