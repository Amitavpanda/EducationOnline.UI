import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../../../services/enrollment.service';
import { CourseEnrollmentModel } from '../../../model/enrollment';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CourseDetailsComponent } from '../course-details/course-details.component';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrls: ['./enrollments.component.css'],
  imports: [DatePipe, CommonModule, RouterLink, ],

})
export class EnrollmentsComponent implements OnInit {
  enrollments: CourseEnrollmentModel[] = [];

  constructor(private enrollmentService: EnrollmentService) {}

  ngOnInit(): void {
    this.fetchEnrollments();
  }

  fetchEnrollments(): void {
    this.enrollmentService.getAllEnrollments().subscribe(
      (data) => {
        this.enrollments = data;
      },
      (error) => {
        console.error('Error fetching enrollments:', error);
      }
    );
  }

  handleAction(enrollmentId: number): void {
    console.log('Action clicked for enrollment:', enrollmentId);
    // Implement action logic here
  }
}
