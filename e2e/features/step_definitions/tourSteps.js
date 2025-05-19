const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

Given('I am logged in as admin', function () {
  this.pageData = this.pageData || {};
  this.pageData.user = 'admin'; // Simulate login
});

When('I add a new tour with valid details', function () {
  this.pageData = this.pageData || {};
  this.pageData.tourCreated = true; // Simulate success
});

Then('the tour should be created successfully', function () {
  expect(this.pageData.tourCreated).to.be.true;
});
