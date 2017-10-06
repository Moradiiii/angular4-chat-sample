import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// import user class
import { Discussion } from '../../models/dicussion';

@Injectable()
export class DiscussionService {

  URL_FIND_DISCUSSION = environment.SERVER_URL + '/discussion/findOne';
  URL_SAVE_CHAT = environment.SERVER_URL + '/discussion/saveChat';

  /**
   * constructor
   */
  constructor(
    private http: Http
  ) { }

  /**
   * get discussion
   */
  getDiscussion(params: Object) {
    const body = JSON.stringify(params);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.URL_FIND_DISCUSSION, body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  saveChat(params: Object) {
    const body = JSON.stringify(params);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.URL_SAVE_CHAT, body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }
}
