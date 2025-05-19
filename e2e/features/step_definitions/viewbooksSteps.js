const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

When('I navigate to the bookings page', function () {
  this.pageData = this.pageData || {};
  this.pageData.viewingBookings = true;
});

Then('I should see a list of all bookings', function () {
  expect(this.pageData.viewingBookings).to.be.true;
});
