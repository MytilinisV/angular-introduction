import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ListGroupMenuComponent } from './components/list-group-menu/list-group-menu.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent, EventBindExampleComponent, WelcomeComponent, RouterLink, RouterOutlet, ListGroupMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  person0 = {
    givenName: 'Bill',
    sirName: 'Mytilinis',
    age: 0x1C,
    email: 'vasilismitilinis@gmail.com',
    address: 'Athens, Greece',
  };

  person1 = {
    givenName: 'Iris',
    sirName: 'Fosk',
    age: 0x1f,
    email: 'irisfosk@gmail.com',
    address: 'New York, United States',
  };

  users: Person[] = [
    {
      givenName: 'John',
      sirName: 'Doe',
      age: 30,
      email: 'john.doe@example.com',
      address: '123 Main St',
    },
    {
      givenName: 'Jane',
      sirName: 'Doe',
      age: 28,
      email: 'jane.doe@example.com',
      address: '123 Main St',
    },
    {
      givenName: 'Jim',
      sirName: 'Brown',
      age: 45,
      email: 'jim.brown@example.com',
      address: '456 Park Ave',
    },
    {
      givenName: 'Jill',
      sirName: 'Brown',
      age: 42,
      email: 'jill.brown@example.com',
      address: '456 Park Ave',
    },
    {
      givenName: 'Jake',
      sirName: 'Smith',
      age: 36,
      email: 'jake.smith@example.com',
      address: '789 Broadway',
    },
    {
      givenName: 'Judy',
      sirName: 'Smith',
      age: 34,
      email: 'judy.smith@example.com',
      address: '789 Broadway',
    },
    {
      givenName: 'Jack',
      sirName: 'Johnson',
      age: 50,
      email: 'jack.johnson@example.com',
      address: '321 Oak St',
    },
    {
      givenName: 'Julie',
      sirName: 'Johnson',
      age: 48,
      email: 'julie.johnson@example.com',
      address: '321 Oak St',
    },
    {
      givenName: 'Jerry',
      sirName: 'Davis',
      age: 55,
      email: 'jerry.davis@example.com',
      address: '654 Pine St',
    },
    {
      givenName: 'June',
      sirName: 'Davis',
      age: 53,
      email: 'june.davis@example.com',
      address: '654 Pine St',
    },
  ];
}
