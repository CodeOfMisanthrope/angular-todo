import {Component} from '@angular/core';
import {TaskDto} from '../../data/dtos/task';
import {Task} from '../task/task';
import {UIInput} from '../ui/ui-input/ui-input.component';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {UiBtn} from '../ui/ui-btn/ui-btn';
import {CommonModule} from '@angular/common';
import {TaskService} from '../../services/task';

@Component({
  selector: 'app-list',
  imports: [
    Task,
    UIInput,
    UiBtn,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {
  // tasks: TaskDto[] = [
  //   {id: 1, name: 'Изучить Angular', isDone: false},
  //   {id: 2, name: 'Сделать Todo App', isDone: false},
  // ];

  tasks: TaskDto[] = [];
  taskForm: FormGroup;
  isLoading = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService
  ) {
    this.taskForm = this.fb.group({
      taskName: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.isLoading = true;
    this.error = null;

    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        this.tasks = tasks;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Ошибка загрузки задач:', err);
        this.error = 'Не удалось загрузить задачи';
        this.isLoading = false;
      }
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
