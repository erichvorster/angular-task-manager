import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  //we can list the components, directives, and pipes that are part of the module in the declarations array
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent
  ],
  //we can import other modules by listing them in the imports array
  imports: [
    BrowserModule
  ],
  //we can list the services that are part of the module in the providers array but read further on why this should only be used in some cases
  providers: [],
  //The process of loading the index.html page, app-level module, and app-level component is called bootstrapping, or loading the app.
  bootstrap: [AppComponent]
})
export class AppModule { }


//MODULES - Angular modules consolidate components, directives, and pipes into cohesive blocks of functionality... Modules can also add services

//DIRECTIVE -  Directives are defined as classes that can add new behavior to the elements in the template or modify existing behavior. The purpose of Directives in Angular is to 
//maneuver the DOM, be it by adding new elements to DOM or removing elements and even changing the appearance of the DOM elements.

//PIPES - Pipes are simple functions to use in template expressions to accept an input value and return a transformed value. Pipes are useful because you can use them throughout 
//your application, while only declaring each pipe once.

//SERVICES - Services in Angular are simply typescript classes with the @injectible decorator. This decorator tells angular that the class is a service and can be injected 
//into components that need that service. They can also inject other services as dependencies.

//NgModule - the @NgModule annotation is what actually defines the module.


//////////////////////////////////////////Commands

//ng generate component components/header  - Generates a new compoent and all of its required files.
