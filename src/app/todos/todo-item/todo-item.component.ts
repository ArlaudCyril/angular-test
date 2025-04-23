import { Component, Input } from '@angular/core';
import { Todo } from '../todo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input({ required: true }) todo!: Todo;
  @Input({ required: true }) toggle!: (id: number) => void;
  @Input({ required: true }) remove!: (id: number) => void;
}
