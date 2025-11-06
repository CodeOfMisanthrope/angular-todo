import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskDto } from '../../data/dtos/task';
import {BASE_API_URL} from '../../consts';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = `${BASE_API_URL}/tasks`;

  constructor(private http: HttpClient) {}

  getTasks(): Observable<TaskDto[]> {
    return this.http.get<TaskDto[]>(this.apiUrl);
  }

  getTaskById(id: number): Observable<TaskDto> {
    return this.http.get<TaskDto>(`${this.apiUrl}/${id}`);
  }

  createTask(name: string, isDone: boolean = false): Observable<TaskDto> {
    return this.http.post<TaskDto>(this.apiUrl, { name, isDone });
  }


  deleteTask(id: number): Observable<TaskDto> {
    return this.http.delete<TaskDto>(`${this.apiUrl}/${id}`);
  }
}
