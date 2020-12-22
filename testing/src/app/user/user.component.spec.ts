import { TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';

import { UserComponent } from './user.component';

fdescribe("Suite for Testing Reactive Form", () => {

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserComponent],
            imports:
                [   BrowserModule,
                    ReactiveFormsModule,
                    FormsModule
                ]
        }).compileComponents();
    });

    it("it should test title text",()=>{
        const fixture=TestBed.createComponent(UserComponent);
        const userComp=fixture.componentInstance;
        expect(userComp.title).toEqual("User Form")
    });

    it("it should set submitted to true",()=>{
        const fixture=TestBed.createComponent(UserComponent);
        const userComp=fixture.componentInstance;
        userComp.onSubmit();
        expect(userComp.submitted).toBeTruthy();
    });

    it("it should detect onSubmit call",()=>{
        const fixture=TestBed.createComponent(UserComponent);
        fixture.detectChanges();
        const comp=fixture.componentInstance;
        spyOn(comp,'onSubmit');
        let btnElement=fixture.debugElement.query(By.css('button')).nativeElement;
        btnElement.click();
        expect(comp.onSubmit).toHaveBeenCalledTimes(0);
      
   });

   it("It shoud detect invalid form",()=>{
    const fixture=TestBed.createComponent(UserComponent);
    const comp=fixture.componentInstance;
    comp.userForm.controls['name'].setValue('');
    comp.userForm.controls['email'].setValue('');
    expect(comp.userForm.valid).toBeFalsy();
   });

   it("It shoud detect invalid form",()=>{
    const fixture=TestBed.createComponent(UserComponent);
    const comp=fixture.componentInstance;
    comp.userForm.controls['name'].setValue('Raj');
    comp.userForm.controls['email'].setValue('raj.gmail.com');
    expect(comp.userForm.valid).toBeFalsy();
   });

   it("It shoud detect valid form",()=>{
    const fixture=TestBed.createComponent(UserComponent);
    const comp=fixture.componentInstance;
    comp.userForm.controls['name'].setValue('Raja');
    comp.userForm.controls['email'].setValue('raj@gmail.com');
    expect(comp.userForm.valid).toBeTruthy();
   });







});