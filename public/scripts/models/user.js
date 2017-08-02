'use strict';
var app = app || {};

(function(module) {
  let currentUser = localStorage.getItem('user');
  console.log(currentUser);

  function User(currentUser) {
    this.userName = currentUser;
    console.log(this.userName);
  }

  User.prototype.createUser = function(callback) {
    $.post('/user', {
        userName: this.userName,
        title: "TEST-TITLE",
        category: "TEST-CATEGORY",
        body: "TEST-BODY"
      })
      .then(console.log)
      .then(callback);
  };

  module.User = User;
})(app);
