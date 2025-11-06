import {Component, Input} from '@angular/core';
import {TaskDtos} from '../../data/dtos/task';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  @Input() task!: TaskDtos;


  onTaskClick() {
    console.log('Clicked task:', this.task.name);
  }
}
