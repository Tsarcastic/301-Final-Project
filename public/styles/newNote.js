'use strict';
var app = app || {};

(function(module) {
  const newnote = {};


  newnote.initNewnotePage = function() {
    $('.tab-content').show();
    $('#export-field').hide();
    $('#note-json').on('focus', function() {
      $(this).select();
    });
    $('#new-form').on('change', newnote.create);
    $('#new-form').on('submit', newnote.submit);
  };

  newnote.create = function() {
    $('#notes').empty();
    let formnote = new app.note({
      title: $('#note-title').val(),
      author: $('#note-author').val(),
      authorUrl: $('#note-author-url').val(),
      category: $('#note-category').val(),
      body: $('#note-body').val(),
      publishedOn: new Date().toISOString()
    });

    formnote.render = function() {
      let template = Handlebars.compile($('#note-template').text());

      this.daysAgo = parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000);
      this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';
      this.body = marked(this.body);

      return template(this);
    };

    $('#notes').append(formnote.render('#note-template'));
    $('pre code').each((i, block) => hljs.highlightBlock(block));
  };

  newnote.submit = function(event) {
    event.preventDefault();
    let note = new app.note({
      title: $('#note-title').val(),
      author: $('#note-author').val(),
      authorUrl: $('#note-author-url').val(),
      category: $('#note-category').val(),
      body: $('#note-body').val(),
      publishedOn: new Date().toISOString()
    });

    note.insertRecord();
    window.location = '../';
  };

  newnote.initNewnotePage();
  module.newnote = newnote;
})(app);
