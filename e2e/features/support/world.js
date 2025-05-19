const { setWorldConstructor } = require('@cucumber/cucumber');

class CustomWorld {
  constructor() {
    this.pageData = {}; // You can simulate data shared across steps
  }
}

setWorldConstructor(CustomWorld);
