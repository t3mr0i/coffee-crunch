import { makeAutoObservable } from 'mobx';

class ChatStore {
  chats = [];

  constructor() {
    makeAutoObservable(this);
  }

  setChats(chats) {
    this.chats = chats;
  }

  // Add more actions and computed values as needed
}

export default ChatStore;
