import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {
  lastUpdate = new Date();
  @Input() postName: string;
  @Input() postContent: string;
  @Input() postLoveIt: number;
  @Input() postDontLoveIt = 0;
  @Input() postCreation: string;

  constructor() { }

  ngOnInit() {
  }

  getLoveIts() {
    if (this.postLoveIt > this.postDontLoveIt) {
      return 'green';
    } else if (this.postLoveIt < this.postDontLoveIt) {
      return 'darkred';
    }
  }

  isLoveIts() {
    this.postLoveIt++;
    console.log(this.postLoveIt);
  }

  isDontLoveIt() {
    this.postDontLoveIt++;
    console.log(this.postDontLoveIt);
  }
}
