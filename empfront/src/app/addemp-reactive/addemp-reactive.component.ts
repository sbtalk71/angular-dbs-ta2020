import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addemp-reactive',
  templateUrl: './addemp-reactive.component.html',
  styleUrls: ['./addemp-reactive.component.css']
})
export class AddempReactiveComponent implements OnInit {

  empForm=new FormGroup({
    empid:new FormControl('',[Validators.required]),
    empName:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
    salary:new FormControl('',[Validators.required])
  });

  
  constructor() { }

  ngOnInit(): void {
  }

 public onSubmit(){

  }
}
