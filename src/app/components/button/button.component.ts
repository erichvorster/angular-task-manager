import { Component, Input, Output, EventEmitter } from '@angular/core';
//Input is used to handle "props" passed to components

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent {
   @Input() text!:string;
   @Input() color!:string;
   @Output() btnClick = new EventEmitter()


   constructor() {}

   
   onClick(){
    this.btnClick.emit();
   }
   
}








//variable! - non-null assertion operator
//What is the TypeScript exclamation mark? The non-null assertion operator tells the TypeScript 
//compiler that a value typed as optional cannot be null or undefined . For example, if we define a 
//variable as possibly a string or undefined, the ! operator tells the compiler to ignore the possibility of it being undefined.


//SHARING DATA BETWEEN CHILD AND PARENT DIRECTIVES. - Inputs & outputs "decorators"

//INPUT "decorator" : lets a parent component update data in the child component.
//OUTPUT "decorator" : lets the child send data to a parent component.


//eventEmitter - Use in components with the @Output directive to emit custom events synchronously or asynchronously,.