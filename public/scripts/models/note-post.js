'use strict';
var app = app || {};

(function(module) {
  let currentUser = localStorage.getItem('user');
  console.log(currentUser);

  function User(currentUser, title, category, body) {
    this.userName = currentUser;
    this.title = title;
    this.category = category;
    this.body = body;
    console.log(this.userName);
  }

  User.prototype.createUser = function(callback) {
    $.post('/user', {
        userName: this.userName,
        title: this.title,
        category: this.category,
        body: this.body
      })
      .then(console.log)
      .then(callback);
  };

  module.User = User;
})(app);
