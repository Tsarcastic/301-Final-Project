'use strict';
var app = app || {};

(function(module) {
  const notes = {};
  notes.all = [];

  notes.requestNotes = function(callback) {
    $.get('/notes/find')
      .then(data => {
        notes.all = data,
          err => {
            console.error(err)
          }
      })
      .then(callback);
  };

  notes.with = attr => notes.all.filter(repo => repo[attr]);

  module.notes = notes;
})(app);
