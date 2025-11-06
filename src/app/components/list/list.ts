import { Component } from '@angular/core';
import { TaskDtos } from '../../data/dtos/task';
import {Task} from '../task/task';

@Component({
  selector: 'app-list',
  imports: [
    Task
  ],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {
  tasks: TaskDtos[] = [
    { id: 1, name: 'Изучить Angular' },
    { id: 2, name: 'Сделать Todo App' },
    { id: 3, name: 'Пройди собеседование' }
  ];

  // Метод для добавления новой задачи (если нужно)
  addTask(): void {
    const newTask: TaskDtos = {
      id: this.tasks.length + 1,
      name: `Новая задача ${this.tasks.length + 1}`
    };
    this.tasks.push(newTask);
  }

  // Метод для удаления задачи
  removeTask(taskId: number): void {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}
