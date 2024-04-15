import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { text } from 'stream/consumers';
import { MenuItem } from '../../shared/interfaces/menu-item';

@Component({
  selector: 'app-list-group-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './list-group-menu.component.html',
  styleUrl: './list-group-menu.component.css'
})
export class ListGroupMenuComponent {
  menu: MenuItem[] = [
    {text: 'Component Input Example', routerLink: 'component-input-example'},
    {text: '@for Directive Example', routerLink: 'for-directive-example'},
    {text: 'Event Bind Example', routerLink: 'event-bind-example'},
    {text: 'single datatable component', routerLink: 'single-datatable-component'},
    {text: 'HTTP Client Example',
      routerLink: 'http-client-example',
    },
    {
      text: 'User Registration Example',
      routerLink: 'user-registration-example'
    }
  ]
};
