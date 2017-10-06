import { Component, OnInit, Input } from '@angular/core';

import { DiscussionService } from '../services/discussion.service';
import { Chat, Discussion } from '../../models/dicussion';

import { environment } from '../../../environments/environment';

import * as io from 'socket.io-client';

@Component({
  selector: 'app-chat-viewer',
  templateUrl: './chat-viewer.component.html',
  styleUrls: ['./chat-viewer.component.css']
})
export class ChatViewerComponent implements OnInit {

  socket = io(environment.SERVER_URL);

  @Input() discussionName: String;
  selectedDiscussion: Discussion;
  /**
   * constructor
   */
  constructor(
    private discussionService: DiscussionService
  ) { }

  /**
   * ngOnInit
   */
  ngOnInit() {
    this.socket.on('new-chat', function (data) {
      if (data.room === this.selectedDiscussion.room) {
        this.selectedDiscussion.chats.push(data);
      }
    }.bind(this));
  }

  /**
   * ngOnChanges
   */
  ngOnChanges() {
    const params = { room: this.discussionName };
    this.discussionService.getDiscussion(params).subscribe(
      data => {
        this.selectedDiscussion = new Discussion(data.payload);
        console.log(this.selectedDiscussion);
      },
      error => console.log(error)
    );
  }



}
