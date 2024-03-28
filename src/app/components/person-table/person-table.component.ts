import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  name = 'Vasilis';

  person = {
    givenName: 'Bill',
    sirName: 'Mytilinis',
    age: 0x16,
    email: 'vasilismitilinis@gmail.com'
  }
}
