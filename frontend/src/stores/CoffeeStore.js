import { makeAutoObservable } from 'mobx';

class CoffeeStore {
  coffeeList = [];

  constructor() {
    makeAutoObservable(this);
  }

  setCoffeeList(coffeeList) {
    this.coffeeList = coffeeList;
  }

  // Add more actions and computed values as needed
}

export default CoffeeStore;
