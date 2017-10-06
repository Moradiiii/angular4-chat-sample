import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit {

  rooms: String[] = ['Room X', 'Room Y', 'Room Z'];
  /**
   * constructor
   */
  constructor() { }

  ngOnInit() {
  }

}
