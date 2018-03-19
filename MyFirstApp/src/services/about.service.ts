import { Injectable } from "@angular/core";

@Injectable()
export class AboutService{
    info = {
        name: 'Alaa Laaribi',
        email: 'alaalaaribi@gmail.com',
        tel: 769116108
    }
    
    comments = [
        {date: new Date(), message:'Thanks!'},
        {date: new Date(), message:'Hello mr Alaa !!'},
        {date: new Date(), message:'Goooooood work!'},
    ];


    addComment(c){
        c.date = new Date();
        this.comments.push(c);
    }

    getAllComments(){
        return this.comments;
    }

    getInfo()
    {
        return this.info;
    }
}