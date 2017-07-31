'use strict';
var app = app || {};

(function(module) {
  const user = {};
  user.userID = "bob";
  console.log(user.userID);
  if (localStorage) {
    user.userID = JSON.parse(localStorage.getItem('user'));
  }
  module.user = user;


})(app);

console.log(app);
