# Angular4 simple real-time chat app

### Server side application
[chat-sample: express server](https://github.com/ysscott2012/angular4-chat-sample/tree/master/server)

### Client side application
[chat-sample: angular 4 app](https://github.com/ysscott2012/angular4-chat-sample/tree/master/src/app)

### Dependencies (package.json)

Please see below dependencies. If you are trying to create a new application by yourself, you can copy following dependencies in your package.json file. 
```Javascript
"dependencies": {
    "@angular/common": "^4.0.0",
    "@angular/compiler": "^4.0.0",
    "@angular/core": "^4.0.0",
    "@angular/forms": "^4.0.0",
    "@angular/http": "^4.0.0",
    "@angular/platform-browser": "^4.0.0",
    "@angular/platform-browser-dynamic": "^4.0.0",
    "@angular/router": "^4.0.0",
    "body-parser": "^1.17.2",
    "bootstrap": "^3.3.7",
    "core-js": "^2.4.1",
    "cors": "^2.8.4",
    "express": "^4.15.4",
    "jquery": "^3.2.1",
    "lodash": "^4.17.4",
    "rxjs": "^5.1.0",
    "socket.io": "^2.0.3",
    "zone.js": "^0.8.4"
  }
```
### Usage

- Clone or download this repository. 
  - `git clone https://github.com/ysscott2012/angular4-chat-sample.git`
  
- Install all dependencies.
  - `npm install`
  
- Start server side program.
  - `cd chat-sample/server`
  - `node server.js`
  
- Complie client side application
  - `cd chat-sample/src/app`
  - `ng serve`
  
- When both client and server programs are running, open a browser and enter a URL: `localhost:4200`

