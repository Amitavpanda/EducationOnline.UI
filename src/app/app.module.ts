import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
      CommonModule, // Added to support Angular directives like *ngIf
      HttpClientModule,
      RouterModule.forRoot(routes)
      // other imports...
    ],
    declarations: [
      // Removed AppComponent as it is standalone
      // other components...
    ],
    bootstrap: [] // Removed bootstrap array as AppComponent is standalone
  })
export class AppModule { }