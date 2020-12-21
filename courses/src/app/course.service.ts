import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from './course';
import { courses } from './courses-mock';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  public getCourseList():Observable<Course[]>{
    return of(courses);
  }

  public getCourse(id:number):Observable<Course>{
    
    return of(courses.find(course=>course.courseId==id));
  }
}
