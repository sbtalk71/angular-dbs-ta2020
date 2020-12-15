import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  template: `
    <input type="text" name="t1" [id]="inputId" [disabled]="isDisabled" value="Shantanu">
  `,
  styles: [
  ]
})
export class BindingsComponent implements OnInit {

  isDisabled:boolean=true;
  inputId="tId";
  constructor() { }

  ngOnInit(): void {
  }

}
