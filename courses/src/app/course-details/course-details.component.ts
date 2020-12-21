import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
courseList:Course[]=[];

  constructor(private _service:CourseService) { }

  ngOnInit(): void {
    this._service.getCourseList().subscribe(data=>this.courseList=data);
  }

}
