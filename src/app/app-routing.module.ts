import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TipCalculatorComponent } from './components/tip-calculator/tip-calculator.component';
import { TodosComponent } from './components/todos/todos.component';
import { CounterComponent } from './components/counter/counter.component';
import { MoviesComponent } from './features/movies/movies.component';
import { BooksComponent } from './features/books/books.component';
import { MathGameComponent } from './features/math-game/math-game.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'tip',
    component: TipCalculatorComponent
  },
  {
    path: 'todos',
    component: TodosComponent
  },
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'math-game',
    component: MathGameComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
