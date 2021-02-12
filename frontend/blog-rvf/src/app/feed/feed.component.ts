import { Component, OnInit } from '@angular/core';
import { Post } from '../model/Post';
import { PostService } from '../service/post.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listPost: Post[] | undefined;
  constructor(private PostService: PostService) { }

  ngOnInit(): void {
    this.findPosts();
  }

  findPosts(){
    this.PostService.getPosts().subscribe((data: any) =>{
      this.listPost = data;
    })
  }

}
