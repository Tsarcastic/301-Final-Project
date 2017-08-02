// 'use strict';
// var app = app || {};
//
// (function(module) {
//   const noteView = {};
//
//
//   const render = function(note) {
//     let template = Handlebars.compile($('#note-template').text());
//
//     note.daysAgo = parseInt((new Date() - new Date(note.publishedOn)) / 60 / 60 / 24 / 1000);
//     note.publishStatus = note.publishedOn ? `published ${note.daysAgo} days ago` : '(draft)';
//     note.body = marked(note.body);
//
//     return template(note);
//   };
//
//
//   noteView.populateFilters = function() {
//     let template = Handlebars.compile($('#option-template').text());
//
//
//     let options = app.note.allAuthors().map(author => template({
//       val: author
//     }));
//     if ($('#author-filter option').length < 2) { // Prevent duplication
//       $('#author-filter').append(options);
//     }
//
//
//     app.note.allCategories(function(rows) {
//       if ($('#category-filter option').length < 2) {
//         $('#category-filter').append(rows.map(row => template({
//           val: row.category
//         })));
//       }
//     });
//   };
//
//
//   noteView.handleFilters = function() {
//     $('#filters').one('change', 'select', function() {
//       let resource = this.id.replace('-filter', '');
//       $(this).parent().siblings().find('select').val(''); // Reset the val from the opposing drop down
//       page(`/${resource}/${$(this).val().replace(/\W+/g, '+')}`); // Replace any/all whitespace with a +
//     });
//   };
//
//
//
//   module.noteView = noteView;
// })(app);
