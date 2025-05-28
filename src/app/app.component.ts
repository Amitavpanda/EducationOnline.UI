import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/core/nav-bar/nav-bar.component";
import { HomeComponent } from "./components/home/home.component";
import { PlanAndPricingComponent } from "./components/plan-and-pricing/plan-and-pricing.component";
import { CategoryComponent } from "./components/course/category/category.component";
import { NgxSpinnerComponent } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, NgxSpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OnlineCourseUI';
}
