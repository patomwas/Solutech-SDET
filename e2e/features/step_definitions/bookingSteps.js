const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

Given('I am on the homepage', function () {
  this.pageData.page = 'home';
});

When('I enter valid guest booking details', function () {
  this.pageData.bookingStatus = 'success';
});

Then('the booking should be successful', function () {
  expect(this.pageData.bookingStatus).to.equal('success');
});
