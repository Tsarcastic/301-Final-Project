'use strict';
var app = app || {};
(function(module) {
  const newNote = {};
  newNote.create = function() {
    $('note-template').empty();
    let formNote = new app.Note({
      title: $('#title').val(),
      category: $('#category').val(),
      body: $('#body').val()
    })
  }
  module.newNote = newNote;
})(app);
