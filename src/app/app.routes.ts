import { Routes, provideRouter } from '@angular/router';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';
import { SingleDatatableComponent } from './components/single-datatable/single-datatable.component';
import { SingleDatatableExampleComponent } from './components/single-datatable-example/single-datatable-example.component';
import { ComponentOutputExampleComponent } from './components/component-output-example/component-output-example.component';
// import { TemplateDrivenFormExampleComponent } from './components/template-driven-form-example/template-driven-form-example.component';
// import { ReactiveFormExampleComponent } from './components/reactive-form-example/reactive-form-example.component';
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { EpersonTemplateDrivenFormExampleComponent } from './components/eperson-template-driven-form-example/eperson-template-driven-form-example.component';
import { HttpClientExampleComponent } from './components/http-client-example/http-client-example.component';


export const routes: Routes = [
    { path: 'event-bind-example', component: EventBindExampleComponent },
    { path: 'welcome', component: WelcomeComponent},
    { path: '', component: WelcomeComponent},
    { path: 'for-directive-example', component: ForDirectiveExampleComponent},
    { path: 'component-input-example', component: ComponentInputExampleComponent},
    { path: 'single-datatable-component', component: SingleDatatableExampleComponent},
    { path: 'component-output-example', component: ComponentOutputExampleComponent},
    {
      path: 'eperson-template-driven-form-example',
      component: EpersonTemplateDrivenFormExampleComponent,
    },
    {
      path: 'reactive-form-example',
      // component: ReactiveFormExampleComponent,
    },
    { path: '', component: WelcomeComponent },
    { path: 'http-client-example',
      component: HttpClientExampleComponent
    }
];

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes), provideAnimationsAsync(),
      provideHttpClient(withInterceptorsFromDi())
    ]
  };
function provideAnimationsAsync(): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
    throw new Error('Function not implemented.');
}

function withInterceptorsFromDi(): import("@angular/common/http").HttpFeature<import("@angular/common/http").HttpFeatureKind> {
    throw new Error('Function not implemented.');
}

