import {Component} from '@angular/core';
import {TaskDtos} from '../../data/dtos/task';
import {Task} from '../task/task';
import {UIInput} from '../ui/ui-input/ui-input.component';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {UiBtn} from '../ui/ui-btn/ui-btn';

@Component({
  selector: 'app-list',
  imports: [
    Task,
    UIInput,
    ReactiveFormsModule,
    UiBtn
  ],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {
  tasks: TaskDtos[] = [
    {id: 1, name: 'Изучить Angular'},
    {id: 2, name: 'Сделать Todo App'},
  ];

  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      taskName: ['', Validators.required]
    });
  }

  // Обработчик для события Submit
  onSubmit() {
    const taskName = this.taskForm.get('taskName');
    if (taskName) {
      const name: string = taskName.value;
      this.addTask(name);
    }
  }

  // Метод для добавления новой задачи (если нужно)
  addTask(name: string): void {
    const newTask: TaskDtos = {
      id: this.tasks.length + 1,
      name,
    };
    this.tasks.push(newTask);
  }

  // Метод для удаления задачи
  removeTask(taskId: number): void {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}
