import { Routes } from '@angular/router';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';
import { SingleDatatableComponent } from './components/single-datatable/single-datatable.component';
import { SingleDatatableExampleComponent } from './components/single-datatable-example/single-datatable-example.component';

export const routes: Routes = [
    { path: 'event-bind-example', component: EventBindExampleComponent },
    { path: 'welcome', component: WelcomeComponent},
    { path: '', component: WelcomeComponent},
    { path: 'for-directive-example', component: ForDirectiveExampleComponent},
    { path: 'component-input-example', component: ComponentInputExampleComponent},
    { path: 'single-datatable-component', component: SingleDatatableExampleComponent},
];
