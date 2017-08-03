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
  let userNotes = [];
  const successCallback = function(data) {
    userNotes = data;
    console.log(userNotes);
    User.renderNotes();
  }

  const errorCallback = function(err) {
    console.error(err);
  }

  User.findWhere = function(userNameField, thisUser, callback) {
    $.get('/notes/find', {
        field: userNameField,
        val: thisUser
      })
      .then(successCallback, errorCallback)
  };
  let recentNotes = [];
  User.renderNotes = function() {
    let noteTemplate = Handlebars.compile($('#note-template').html());
    for (var i = userNotes.length - 1; i > userNotes.length - 4; i--) {
      recentNotes.push(userNotes[i]);

      console.log(userNotes[i])
      $('#noteAppend').append(noteTemplate({
        title: userNotes[i].title,
        category: userNotes[i].category,
        body: userNotes[i].body,
      }))
    }

  }

  User.findWhere('user_name', currentUser);
  module.User = User;
})(app);
