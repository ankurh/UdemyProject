import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirectiveDirective {

  private constructor(){
    
  }
  @HostBinding('class.open') classVal = false;
  

  @HostListener('click') toggleClick()
  {
    this.classVal=!this.classVal;
   
  }

  debugger;

}
