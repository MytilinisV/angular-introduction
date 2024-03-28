import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Vasilis';

  person = {
    givenName: 'Bill',
    sirName: 'Mytilinis',
    age: 0x28,
    email: 'vasilismitilinis@gmail.com'
  }
}
