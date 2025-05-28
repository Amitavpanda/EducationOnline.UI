import { Component } from '@angular/core';
import { PlanAndPricingComponent } from '../plan-and-pricing/plan-and-pricing.component';
import { CategoryComponent } from '../course/category/category.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [PlanAndPricingComponent, CategoryComponent, CommonModule, RouterModule]

})
export class HomeComponent {
  currentIndex = 0;
  totalSlides = 3; // Update this if the number of slides changes

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
    this.updateCarousel();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
    this.updateCarousel();
  }

  updateCarousel() {
    const carouselInner = document.getElementById('carousel-inner');
    if (carouselInner) {
      const offset = -this.currentIndex * 100;
      carouselInner.style.transform = `translateX(${offset}%)`;
    }
  }

  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 5000); // Auto-slide every 5 seconds
  }
}
