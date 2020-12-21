import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddempReactiveComponent } from './addemp-reactive.component';

describe('AddempReactiveComponent', () => {
  let component: AddempReactiveComponent;
  let fixture: ComponentFixture<AddempReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddempReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddempReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
