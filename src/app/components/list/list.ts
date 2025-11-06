import {Component} from '@angular/core';
import {TaskDto} from '../../data/dtos/task';
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
  tasks: TaskDto[] = [
    {id: 1, name: 'Изучить Angular', isDone: false},
    {id: 2, name: 'Сделать Todo App', isDone: false},
  ];

  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      taskName: ['', Validators.required]
    });
  }

  onSubmit() {
    const taskName = this.taskForm.get('taskName');
    if (taskName) {
      const name: string = taskName.value;
      this.addTask(name);
    }
  }

  addTask(name: string): void {
    const newTask: TaskDto = {
      id: this.tasks.length + 1,
      name,
      isDone: false
    };
    this.tasks.push(newTask);
  }

  removeTask(taskId: number): void {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}
