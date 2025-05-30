import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CourseCategory } from '../model/category';
import { Course , CourseDetails, InstructorModel} from '../model/course';
@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private baseUrl = `${environment.apiBaseUrl}/Course`;
  private apiUrl = `${environment.apiBaseUrl}`;

  constructor(private http: HttpClient) {}

  getCoursesByCategoryId(categoryId: number): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}/Category/${categoryId}`);
  }

  getCourseDetails(courseId: number): Observable<CourseDetails> {
    return this.http.get<CourseDetails>(`${this.baseUrl}/${courseId}`);
  }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}`);
  }

  createCourse(course: Course): Observable<any> {
    return this.http.post(`${this.baseUrl}`, course);
  }
  updateCourse(courseId: number, course: Course): Observable<any> {
    return this.http.put(`${this.baseUrl}/${courseId}`, course);
  }

  getInstructors(): Observable<InstructorModel[]> {
    return this.http.get<InstructorModel[]>(`${this.baseUrl}/Instructors`);
  }
  deleteCourse(courseId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${courseId}`);
  }
  uploadThumbnail(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/upload-thumbnail`, formData);
  }
}