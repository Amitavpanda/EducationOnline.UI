import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CourseService } from '../../../services/course.service';
import { Course } from '../../../model/course';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-courses-by-category',
  templateUrl: './courses-by-category.component.html',
  styleUrls: ['./courses-by-category.component.css'],
  imports: [DatePipe, CommonModule, RouterLink],
  providers: [DatePipe]
})
export class CoursesByCategoryComponent implements OnInit {
  categoryId: number | null = null;
  courses: Course[] = [];

  constructor(private route: ActivatedRoute, private courseService: CourseService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('categoryId'); // Updated to match the route parameter name
      this.categoryId = id ? +id : null;
      if (this.categoryId !== null) {
        this.fetchCoursesByCategory(this.categoryId);
      }
    });
  }

  fetchCoursesByCategory(categoryId: number): void {
    this.courseService.getCoursesByCategoryId(categoryId).subscribe(
      (data) => {
        this.courses = data;
        console.log('Courses fetched for category ID:', categoryId, this.courses);
      },
      (error) => {
        console.error('Error fetching courses by category:', error);
      }
    );
  }

  viewDetails(courseId: number): void {
    console.log('View details for course:', courseId);
    // Implement navigation or modal logic here
  }
}
