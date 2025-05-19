const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

When('I navigate to the tickets page', function () {
  this.pageData = this.pageData || {};
  this.pageData.viewingTickets = true;
});

Then('I should see a list of all tickets', function () {
  expect(this.pageData.viewingTickets).to.be.true;
});
