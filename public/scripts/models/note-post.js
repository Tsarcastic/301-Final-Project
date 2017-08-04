'use strict';
var app = app || {};

(function(module) {



  let currentUser = localStorage.getItem('user');

  function User(currentUser, title, category, body) {
    this.userName = currentUser;
    this.title = title;
    this.category = category;
    this.body = body;
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
    User.renderNotes();
    User.renderAll();
    $('#allNotes').hide()
  }

  const errorCallback = function(err) {
    console.error(err);
  }

  var fNoteTemplate = Handlebars.compile($('#note-template').html());

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

      $('#noteAppend').append(noteTemplate({
        title: userNotes[i].title,
        category: userNotes[i].category,
        body: userNotes[i].body,
      }))
    }
  }

  User.findWhere('user_name', currentUser);

  User.renderAll = function() {
    let fNoteTemplate = Handlebars.compile($('#fNote-template').html())
    for (let i = 0; i < userNotes.length; i++) {
      $('#allNotes').append(fNoteTemplate( {
        title: userNotes[i].title,
        category: userNotes[i].category,
        body: userNotes[i].body,
      }))
    }
  }

  User.switchView = function() {
    if ($('#noteAppend').is(':visible')) {
      $('#noteAppend').hide();
      $('#allNotes').show();
    } else {
      $('#noteAppend').show();
      $('#allNotes').hide();
    }
  }

$('#noteListener').on('click', User.switchView);

  module.User = User;
})(app);
