import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Vasilis';

  person = {
    givenName: 'Bill',
    sirName: 'Mytilinis',
    age: 0x16,
    email: 'vasilismitilinis@gmail.com'
  }
}
