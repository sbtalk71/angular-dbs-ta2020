import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe("My Angular Testing suit1", () => {
  var a;
  beforeEach(() => {
    console.log("Setting value of a to true");
    a = true
  });

  it("suit1:1 The value of a should be true", () => {
    //a = true;
    expect(a).toBe(true);
  });

  it("suite1:2 The value of a now should be false", () => {
    console.log('a=' + a);
    expect(a).toBe(true);
  });

});


describe("My Angular Testing suit2", () => {
  var a;
  beforeEach(() => {
    console.log("suite2:1 Setting value of a to true");
    a = true
  });

  it("suite2:2 The value of a should be true", () => {
    //a = true;
    expect(a).toBe(true);
  });

  it("suite2:3 The value of a now should be false", () => {
    console.log('a=' + a);
    expect(a).toBe(true);
  });

});