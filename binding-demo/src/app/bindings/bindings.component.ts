import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  template: `
    <h1 [class.text-error]="hasError">We are learning Angular Binding</h1>
    <input type="text" name="t1" [id]="inputId" [disabled]="isDisabled" value="Shantanu" #user (keyup)="getUser1(user.value)">

    <button (click)="getUser(user.value)">Update User</button>
    <button (click)="toggleChange()">Toggle</button>

    <hr>
    <h1>{{userName}}</h1>
  `,
  styles: [`
    .text-error {color:red}
    .text-normal {color:green}
  `]
})
export class BindingsComponent implements OnInit {

  isDisabled: boolean = true;
  inputId = "tId";
  textStyle = "text-error";
  hasError = false;

  userName: string = "Not Updated yet";
  constructor() { }

  ngOnInit(): void {
  }

  public toggleChange() {
    if (this.isDisabled) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  public getUser(data: string) {
    this.userName = data;
  }

  public getUser1(value:string) {
    this.userName =value;
  }
}
