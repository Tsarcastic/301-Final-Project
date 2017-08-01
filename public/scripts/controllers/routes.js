'use strict';
var app = app || {};

page('/', app.noteController.loadAll, app.noteController.index);
page('/about', app.aboutController.index);
page('/note/:note_id', app.noteController.loadById, app.noteController.index);

// Redirect home if the default filter option is selected:
page('/category', '/');
page('/user', '/');

page('/user/:userName', app.noteController.loadByUser, app.noteController.index);
page('/category/:categoryName', app.noteController.loadByCategory, app.noteController.index);

// COMMENT: What is this function doing?
page();
