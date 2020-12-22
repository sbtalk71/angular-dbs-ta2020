import { TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
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







});