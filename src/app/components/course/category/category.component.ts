import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService,  } from '../../../services/course-category.service';
import { CourseCategory } from '../../../model/category';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  standalone: true,
  imports: [CommonModule,RouterModule]
})
export class CategoryComponent implements OnInit {


  @Input() categories: CourseCategory[] = [];
  @Input() viewType: 'tabs' | 'list' = 'list';

  selectedCategory: CourseCategory | null = null;

  constructor(private categoryService:CategoryService) {}

  ngOnInit(): void {
    //this.categories = MOCK_COURSE_CATEGORIES;
    this.getCategories();
    // Default to the first category if viewType is 'tabs'
    if (this.viewType === 'tabs' && this.categories.length > 0) {
      this.selectCategory(this.categories[0]);
    }
  }
  getCategories(){
    this.categoryService.getCategories().subscribe(s=>{
      this.categories = s;
    });

  }
  selectCategory(category: CourseCategory): void {
    this.selectedCategory = category;
  }
}
