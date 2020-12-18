import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { BlogPost } from '../BlogPost';
import { CustomerhttpService } from '../customerhttp.service';

@Component({
  selector: 'app-displaypost',
  templateUrl: './displaypost.component.html',
  styleUrls: ['./displaypost.component.css']
})
export class DisplaypostComponent implements OnInit {
title="Blog Search Page";
  blog!:BlogPost;
  constructor(private _service:CustomerhttpService) { }

  ngOnInit(): void {
   
  }

  public findBlog(blogId:string){
    this._service.getBlogPostsById(blogId).subscribe(data=>this.blog=data,()=>console.log("Blog Not Found"));
  }

}
