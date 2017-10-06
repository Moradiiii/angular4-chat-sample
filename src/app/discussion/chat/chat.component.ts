import { Component, OnInit, Input } from '@angular/core';

import { DiscussionService } from '../services/discussion.service';
import { Chat, Discussion } from '../../models/dicussion';

import { environment } from '../../../environments/environment';

import * as io from 'socket.io-client';
import * as $ from 'jquery';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  /* CONST */
  socket = io(environment.SERVER_URL);

  @Input() rooms: String[];

  selectedDiscussion: Discussion = null;
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
      this.selectedDiscussion.chats.push(data);
    }.bind(this));
  }

  /**
   * select room
   * @param room
   */
  select(room: String) {
    const params = { room: room };
    this.discussionService.getDiscussion(params).subscribe(
      data => {
        this.selectedDiscussion = new Discussion(data.payload);
        console.log(this.selectedDiscussion);
      },
      error => console.log(error)
    );
  }

 /**
  * keydown event
  * @param event
  */
  keydown(event) {
    if (event.altKey && event.keyCode === 13 && event.value !== '') {

      const chat = {
        content: event.target.value,
        sender: '',
        date: new Date().toJSON(),
        room: this.selectedDiscussion.room
      };

      const params = {
        room: this.selectedDiscussion.room,
        chat: chat
      };

      this.discussionService.saveChat(params).subscribe(
        data => {
          console.log(data);
          $(event.target).val('');
        },
        error => console.log(error)
      );
    }
  }

}
