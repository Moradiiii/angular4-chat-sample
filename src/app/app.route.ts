
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DiscussionComponent } from './discussion/discussion.component'

const routes: Routes = [
  { path: '', redirectTo: '/discussion', pathMatch: 'full' },
  { path: 'discussion', component: DiscussionComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutes {};
