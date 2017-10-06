
class Chat {
  content = '';
  sender = '';
  date = '';
  room = '';
}

class Discussion {

  room = '';
  chats = [ ];

  /* constructor */

  constructor() {
    this.room = '';
    this.chats = [];
  }

}


module.exports = new Discussion();
