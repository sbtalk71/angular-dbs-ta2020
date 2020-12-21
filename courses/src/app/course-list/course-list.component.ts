import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courseList:Course[]=[];

  constructor(private _service:CourseService) { }

  ngOnInit(): void {
    this._service.getCourseList().subscribe(data=>this.courseList=data);
  }

}
