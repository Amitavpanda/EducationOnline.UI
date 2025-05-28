import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CourseCategory } from '../model/category';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private baseUrl = `${environment.apiBaseUrl}/CourseCategory`;
  private apiUrl = `${environment.apiBaseUrl}`;

  constructor(private http: HttpClient) {}

  getCategories(): Observable<CourseCategory[]> {
    return this.http.get<CourseCategory[]>(`${this.baseUrl}`);
  }
}