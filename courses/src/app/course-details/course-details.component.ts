import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: Course;
  isNextDisabled=false;
  constructor(private _service: CourseService, private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    let id =0;
    this.route.paramMap.subscribe((params:ParamMap)=>{
      id=parseInt(params.get('id'));
      this._service.getCourse(id).subscribe(data => this.course=data);
    });
    
  }

  public previous(){
    let previousId=this.course.courseId-1;
    this.router.navigate(["/details",previousId]);
  }
  public next(){
    let nextId=this.course.courseId+1;
    this.router.navigate(["/details",nextId]);
    
  }

  public getOverview(){
    this.router.navigate(["overview"],{relativeTo:this.route});
  }

  public getContact(){
    this.router.navigate(["contact"],{relativeTo:this.route});
  }

  gotoCourseList(){
    let selectedId=this.course.courseId;
    this.router.navigate(["/courselist",{id:selectedId}]);
   // this.router.navigate(["../",{id:selectedId}],{relativeTo:this.route});
  }
}
