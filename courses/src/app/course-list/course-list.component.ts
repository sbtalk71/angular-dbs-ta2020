import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courseList:Course[]=[];

  public selectedId:number;
  constructor(private _service:CourseService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      this.selectedId=parseInt(params.get('id'));
    }

    );
    this._service.getCourseList().subscribe(data=>this.courseList=data);
  }

  public getCourseDetails(id:number){
    this.router.navigate(["/details",id]);
  }

  public isSelected(id:number){
    console.log(id);
    let test:boolean=this.selectedId===id;
    console.log(test);
    return test;
  }
  
}
