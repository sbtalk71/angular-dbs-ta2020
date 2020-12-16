import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  template: `
  <h1>Child Component2</h1>
  <h1>{{parent}}</h1>

  <button (click)="fireEvent()">Send Message To Parent</button>
  `,
  styles: [
  ]
})
export class Child2Component implements OnInit {

  @Input("parentData") public parent="";
  
  @Output() public child2Event=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  public fireEvent(){
    this.child2Event.emit("Hello from Child 2");
  }

}
