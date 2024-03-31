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

  person0 = {
    givenName: 'Bill',
    sirName: 'Mytilinis',
    age: 0x1C,
    email: 'vasilismitilinis@gmail.com',
    address: 'Athens, Greece',
  }

  person1 = {
    givenName: 'Iris',
    sirName: 'Fosk',
    age: 0x1f,
    email: 'irisfosk@gmail.com',
    address: 'New York, United States',
  }
}
