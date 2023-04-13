import { makeAutoObservable } from 'mobx';

class UserStore {
  currentUser = null;

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentUser(user) {
    this.currentUser = user;
  }

  // Add more actions and computed values as needed
}

export default UserStore;
