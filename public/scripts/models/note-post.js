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

  User.findWhere = function(userNameField, thisUser, callback) {
    $.get('/notes/find', {
        field: userNameField,
        val: thisUser
      })
      .then(console.log)
  };



  User.findWhere('user_name', currentUser);
  module.User = User;
})(app);
