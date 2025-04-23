import { Routes } from '@angular/router';
import { TodoListComponent } from './todos/todo-list/todo-list.component';

export const routes: Routes = [
  { path: '', component: TodoListComponent },   // page d’accueil
  { path: '**', redirectTo: '' },               // fallback
];
