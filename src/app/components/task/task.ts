import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TaskDto} from '../../data/dtos/task';
import {UiBtn} from '../ui/ui-btn/ui-btn';

@Component({
  selector: 'app-task',
  imports: [
    UiBtn
  ],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  @Input() task!: TaskDto;
  @Output() taskDeleted = new EventEmitter<number>();

  onTaskClick() {
    console.log('Clicked task:', this.task.name);
  }

  onDeleteClick(event: Event): void {
    event.stopPropagation();
    this.taskDeleted.emit(this.task.id);
  }
}
