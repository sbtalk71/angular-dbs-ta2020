import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  template: `
  <h1>ngIf Demo</h1>
  <hr>
    <div *ngIf="showName; then displayName; else messageBlock"></div>

    <ng-template #messageBlock>
    <h2>You are not Shantanu</h2>
    </ng-template>

    <ng-template #displayName>
    <h2>Shantanu, Welcome to the application</h2>
    </ng-template>
  `,
  styles: [
  ]
})
export class NgifComponent implements OnInit {

  public showName=true;
  constructor() { }

  ngOnInit(): void {
  }

}
