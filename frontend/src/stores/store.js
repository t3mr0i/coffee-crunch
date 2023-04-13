import CoffeeStore from './stores/CoffeeStore';
import UserStore from './stores/UserStore';
import PostStore from './stores/PostStore';
import ChatStore from './stores/ChatStore';

const store = {
  coffeeStore: new CoffeeStore(),
  userStore: new UserStore(),
  postStore: new PostStore(),
  chatStore: new ChatStore(),
};

export default store;
