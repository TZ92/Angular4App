import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 
  info:any;
  comments=[];
  comment = {date:null, message:""};
 
  constructor(private aboutservice:AboutService) { 

    this.info=this.aboutservice.getInfo();
    this.comments=this.aboutservice.getAllComments();  }

  ngOnInit() {
  }

  onAddComment(){
    this.comment.date= new Date();
    this.comments.push(this.comment);

    this.comment=  {date:null, message:''};
  }

  onAddCommentNEW(c){
    this.aboutservice.addComment(c);
    this.comments.message="";
    this.comments=this.aboutservice.getAllComments();
  }

}
