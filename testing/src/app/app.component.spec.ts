import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe("Angular Component Test Suit",()=>{

  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations:[AppComponent]
    }).compileComponents();
  });

  it("it should create the component",()=>{
   const fixture=TestBed.createComponent(AppComponent);
    let appComp=fixture.componentInstance;
    expect(appComp).toBeTruthy();
  });

  it("it should title as testing",()=>{
    const fixture=TestBed.createComponent(AppComponent);
     let appComp=fixture.componentInstance;
    // expect(appComp.title).toEqual("testings");
    expect(appComp.title).toContain("testing");
   });

   it("it should have 'isSelected' as true",()=>{
    const fixture=TestBed.createComponent(AppComponent);
     let appComp=fixture.componentInstance;
    
    expect(appComp.isSelected).toBeTrue();
   });

   it("it should have 'angular' in the text content",()=>{
    const fixture=TestBed.createComponent(AppComponent);
     fixture.detectChanges();
     const nativeElem=fixture.nativeElement;
    expect(nativeElem.querySelector('h1').textContent).toContain("Angular");
   });
});