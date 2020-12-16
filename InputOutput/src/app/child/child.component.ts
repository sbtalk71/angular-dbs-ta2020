import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h1>Child Component</h1>
    <h1>{{data}}</h1>

    <button (click)="fireEvent()">Send Message To Parent</button>
    
  `,
  styles: [
  ]
})
export class ChildComponent implements OnInit {

  @Input("parentData") public data="";

  @Output() public child1Event=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  public fireEvent(){
    this.child1Event.emit("Hello from Child 1");
  }

}
