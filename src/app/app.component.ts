import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiInteractComponent } from "./api-interact/api-interact.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, ApiInteractComponent]
})
export class AppComponent {
  title = 'front-ecommerce';
}
