const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

Given('I am on the login page', function () {
  this.pageData.page = 'login';
});

When('I enter invalid credentials', function () {
  this.pageData.loginStatus = 'error';
});

Then('I should see an error message', function () {
  expect(this.pageData.loginStatus).to.equal('error');
});
