import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DiscussionComponent } from './discussion.component';


const discussionRoutes: Routes = [
  {
    path: 'discussion',
    component: DiscussionComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(discussionRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DiscussionRoutes { }
