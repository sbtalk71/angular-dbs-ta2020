import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courseList:Course[]=[];

  constructor(private _service:CourseService,private router:Router) { }

  ngOnInit(): void {
    this._service.getCourseList().subscribe(data=>this.courseList=data);
  }

  public getCourseDetails(id:number){
    this.router.navigate(["/details",id]);
  }
}
