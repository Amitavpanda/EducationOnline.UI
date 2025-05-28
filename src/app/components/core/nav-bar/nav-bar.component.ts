import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule,  } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  dropdownOpen = false;

  toggleDropdown() {
    console.log('Dropdown toggled');
    this.dropdownOpen = !this.dropdownOpen;
  }
}
