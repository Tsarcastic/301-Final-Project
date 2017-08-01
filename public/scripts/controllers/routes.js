'use strict';
var app = app || {};

page('/', app.articleController.loadAll, app.articleController.index);
page('/about', app.aboutController.index);
page('/article/:article_id', app.articleController.loadById, app.articleController.index);

// Redirect home if the default filter option is selected:
page('/category', '/');
page('/user', '/');

page('/user/:userName', app.articleController.loadByUser, app.articleController.index);
page('/category/:categoryName', app.articleController.loadByCategory, app.articleController.index);

// COMMENT: What is this function doing?
page();
