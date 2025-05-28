import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course.service';
import { Course } from '../../../model/course';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  imports: [DatePipe, CommonModule, RouterLink],
  providers: [DatePipe]
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.fetchCourses();
  }

  fetchCourses(): void {
    this.courseService.getAllCourses().subscribe(
      (data) => {
        this.courses = data;
      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
  }

  viewDetails(courseId: number): void {
    console.log('View details for course:', courseId);
    // Implement navigation or modal logic here
  }
}
