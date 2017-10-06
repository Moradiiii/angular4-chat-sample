import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routes
import { DiscussionRoutes } from './discussion.route';
import { DiscussionComponent } from './discussion.component';
import { DiscussionService } from './services/discussion.service';

import { ChatViewerComponent } from './chat-viewer/chat-viewer.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    DiscussionRoutes
  ],
  declarations: [
    DiscussionComponent,
    ChatViewerComponent,
    ChatComponent
  ],
  providers: [
    DiscussionService
  ],
  exports: [
    DiscussionComponent
  ]
})
export class DiscussionModule { }
