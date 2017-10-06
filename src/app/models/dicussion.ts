
export class Chat {
  content: String = '';
  sender: String = '';
  date: String = '';

  /**
   * constructor
   * @param chat
   */
  constructor (chat?: any) {
    this.content = chat.content;
    this.sender = chat.sender;
    this.date = chat.date;
  }
}

export class Discussion {
  room: String = '';
  chats: Chat[] = [];

  /**
   *  constructor
   *  @param discussion
   */
  constructor (discussion?: any) {
    if (discussion) {
      this.room = discussion.room;
      this.chats = discussion.chats;
    }
  }
}

