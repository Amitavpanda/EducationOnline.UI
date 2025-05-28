import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../../services/course.service';
import { CourseDetails, UserReviewModel } from '../../../model/course';
import { CommonModule, DatePipe } from '@angular/common';
import { CourseEnrollmentModel, CoursePaymentModel } from '../../../model/enrollment';
import { ReviewService } from '../../../services/review.service';
import { EnrollmentService } from '../../../services/enrollment.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
  imports: [DatePipe, CommonModule, FormsModule, ReactiveFormsModule],
})
export class CourseDetailsComponent implements OnInit {
  courseId: number | null = null;
  courseDetails: CourseDetails | null = null;
  reviewForm: FormGroup;
  showReviewForm: boolean = false;

  constructor(
    private route: ActivatedRoute, 
    private courseService: CourseService,
    private reviewService: ReviewService,
    private enrollmentService: EnrollmentService,
    private fb: FormBuilder,
  ) {
    this.reviewForm = this.fb.group({
      rating: [null, [Validators.required, Validators.min(1), Validators.max(5)]],
      comments: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('courseId');
      this.courseId = id ? +id : null;
      if (this.courseId !== null) {
        this.fetchCourseDetails(this.courseId);
      }
    });
  }

  fetchCourseDetails(courseId: number): void {
    this.courseService.getCourseDetails(courseId).subscribe(
      (data) => {
        this.courseDetails = data;
        if (!this.courseDetails.sessionDetails) {
          this.courseDetails.sessionDetails = [];
        }
        if (!this.courseDetails.reviews) {
          this.courseDetails.reviews = [];
        }
      },
      (error) => {
        console.error('Error fetching course details:', error);
      }
    );
  }

  openVideo(url: string): void {
    window.open(url, '_blank');
  }
  enroll(): void {

    const paymentModel: CoursePaymentModel[] = [
      {
        paymentId: 0,
        enrollmentId: 0,
        amount: 0, // Set amount as per your logic
        paymentDate: new Date(),
        paymentMethod: 'Credit Card', // Example; replace with actual payment method
        paymentStatus: 'Pending',
      },
    ];

    const enrollmentModel: CourseEnrollmentModel = {
      enrollmentId: 0,
      courseId: this.courseId ?? 0,
      userId: 3, // Assume a method to get user ID
      enrollmentDate: new Date(),
      paymentStatus: 'Pending',
      coursePaymentModel: {
        paymentId: 0,
        enrollmentId: 0,
        amount: 0, // Set amount as per your logic
        paymentDate: new Date(),
        paymentMethod: 'Credit Card', // Example; replace with actual payment method
        paymentStatus: 'Pending',
      },
    };

    this.enrollmentService.enrollCourse(enrollmentModel).subscribe({
      next: (response) => {
        console.log('Enrollment successful:', response);
      },
      error: (error) => {
        if (error.status === 400) {
          console.log(
            'Enrollment failed: This course is already enrolled',
            'Error'
          );
        } else {
          console.error('Something went wrong. Please try again.', 'Error');
        }
      },
      complete: () => {
      },
    });
  }
  addReview(): void {
    this.showReviewForm = true;
  }

  submitReview(): void {
    if (this.reviewForm.valid && this.courseId) {
      const review: UserReviewModel = {
        reviewId: 0,
        courseId: this.courseId,
        userId: 3, // Replace with actual user ID logic
        userName: '',
        rating: this.reviewForm.value.rating,
        comments: this.reviewForm.value.comments,
        reviewDate: new Date(),
      };

      this.reviewService.submitReview(review).subscribe({
        next: () => {
          console.log('Review submitted successfully!', 'Close', {
            duration: 3000,
          });
          this.showReviewForm = false;
          this.reviewForm.reset();
          if (this.courseId !== null) {
            this.fetchCourseDetails(this.courseId); // Refresh reviews
          }
        },
        error: () => {
console.error('Failed to submit review. Please try again.', 'Close', {
            duration: 3000,
          });
        },
      });
    }
  }
}

