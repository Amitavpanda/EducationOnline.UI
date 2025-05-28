import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/course/category/category.component';
import { AboutComponent } from './components/core/about/about.component';
import { ContactComponent } from './components/core/contact/contact.component';
import { CoursesComponent } from './components/course/courses/courses.component';
import { EnrollmentsComponent } from './components/course/enrollments/enrollments.component';
import { AllCategoriesComponent } from './components/course/all-categories/all-categories.component';
import { CoursesByCategoryComponent } from './components/course/courses-by-category/courses-by-category.component';
import { CourseDetailsComponent } from './components/course/course-details/course-details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path : 'home', component: HomeComponent},
  {path : 'about', component: AboutComponent},
  {path : 'contact', component : ContactComponent},
  { path: 'course/browse', component: CoursesComponent },
  { path: 'course/enrollments', component:EnrollmentsComponent  },
  { path: 'course/category', component: AllCategoriesComponent },
  { path: 'course/category/:categoryId', component: CoursesByCategoryComponent },
  { path: 'course/details/:courseId', component: CourseDetailsComponent },

];
