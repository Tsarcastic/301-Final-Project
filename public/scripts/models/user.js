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
      userName: this.userName
    })
      .then(console.log)
      .then(callback);
  };

  module.User = User;
})(app);
