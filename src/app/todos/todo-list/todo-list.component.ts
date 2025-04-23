//todo-list.component.ts

import { Component, inject, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  title = '';

  /** service public pour le template */
  readonly todoService = inject(TodoService);

  /** signals exposés */
  todos:     Signal<Todo[]>   = this.todoService.todos;
  remaining: Signal<number>   = this.todoService.remaining;

  /** méthodes appelées par le template */
  add() {
    const t = this.title.trim();
    if (t) { this.todoService.add(t); this.title = ''; }
  }
  toggle  = (id: number) => this.todoService.toggle(id);
  remove  = (id: number) => this.todoService.remove(id);
}
