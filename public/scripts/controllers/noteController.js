'use strict';
var app = app || {};

(function(module) {
  const noteController = {};


  noteController.index = (ctx) => app.noteView.index(ctx.notes);

  // REVIEW: Middleware for grabbing one note by ID:
  noteController.loadById = (ctx, next) => {
    let noteData = note => {
      ctx.notes = note;
      next();
    };

    app.note.findWhere('note_id', ctx.params.note_id, noteData);
  };

  // REVIEW: Middleware for loading up notes by a certain User:
  noteController.loadByUser = (ctx, next) => {
    let UserData = notesByUser => {
      ctx.notes = notesByUser;
      next();
    };

    app.note.findWhere('User', ctx.params.UserName.replace('+', ' '), UserData);
  };

  // REVIEW: Middleware for grabbing all notes with a certain category:
  noteController.loadByCategory = (ctx, next) => {
    let categoryData = notesInCategory => {
      ctx.notes = notesInCategory;
      next();
    };

    app.note.findWhere('category', ctx.params.categoryName, categoryData);
  };

  // REVIEW: Middleware for grabbing ALL notes:
  noteController.loadAll = (ctx, next) => {
    let noteData = () => {
      ctx.notes = app.note.all;
      next();
    };

    if (app.note.all.length) {
      ctx.notes = app.note.all;
      next();
    } else {
      app.note.fetchAll(noteData);
    }
  };

  module.noteController = noteController;
})(app);
