import {Component, Input} from '@angular/core';
import {TaskDto} from '../../data/dtos/task';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  @Input() task!: TaskDto;


  onTaskClick() {
    console.log('Clicked task:', this.task.name);
  }
}
