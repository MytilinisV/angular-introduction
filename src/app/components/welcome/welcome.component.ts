import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PersonTableComponent } from '../person-table/person-table.component';
import { EventBindExampleComponent } from '../event-bind-example/event-bind-example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    PersonTableComponent,
    EventBindExampleComponent
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  name = 'Vasilis';
}
