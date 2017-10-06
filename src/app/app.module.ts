import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.route';

import { DiscussionModule } from './discussion/discussion.module';
import { DiscussionRoutes } from './discussion/discussion.route';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes,
    DiscussionModule,
    DiscussionRoutes
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
