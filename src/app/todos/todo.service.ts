//todo.service.ts

import { Injectable, signal, computed } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private readonly STORAGE = 'todos-v1';

  /** signal d’état interne */
  private readonly _todos = signal<Todo[]>(this.load());

  /** lecture seule exposée */
  readonly todos = this._todos.asReadonly();

  /* actions */
  add(title: string) {
    const todo: Todo = { id: Date.now(), title, done: false };
    this.save([...this._todos(), todo]);
  }

  toggle(id: number) {
    this.save(
      this._todos().map(t =>
        t.id === id ? { ...t, done: !t.done } : t,
      ),
    );
  }

  remove(id: number) {
    this.save(this._todos().filter(t => t.id !== id));
  }

  /* dérivé : combien restent à faire */
  readonly remaining = computed(() =>
    this._todos().filter(t => !t.done).length,
  );

  /* helpers persistance */
  private save(todos: Todo[]) {
    localStorage.setItem(this.STORAGE, JSON.stringify(todos));
    this._todos.set(todos);
  }
  private load(): Todo[] {
    return JSON.parse(localStorage.getItem(this.STORAGE) ?? '[]');
  }
}
