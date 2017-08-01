'use strict';
// var app = app || {};
//
// (function(module) {
//   function note(rawDataObj) {
//     Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
//   }
//
//   note.all = [];
//
//
//   note.loadAll = rows => {
//     rows.sort((a, b) => (new Date(b.publishedOn)) - (new Date(a.publishedOn)));
//     note.all = rows.map(ele => new note(ele));
//   };
//
//   note.fetchAll = callback => {
//     $.get('/notes')
//       .then(
//         results => {
//           note.loadAll(results);
//           callback();
//         }
//       )
//   };
//
//
//   note.findWhere = function(field, value, callback) {
//     $.get('/notes/find', {
//         field: field,
//         val: value
//       })
//       .then(callback)
//   };
//
//
//   note.allCategories = function(callback) {
//     $.get('/categories', callback);
//   };
//
//   note.numWordsAll = () => {
//     return note.all.map(note => note.body.match(/\b\w+/g).length)
//       .reduce((a, b) => a + b)
//   };
//
//   note.allusers = () => {
//     return note.all.map(note => note.user)
//       .reduce((names, name) => {
//         if (names.indexOf(name) === -1) names.push(name);
//         return names;
//       }, []);
//   };
//
//   note.numWordsByuser = () => {
//     return note.allusers().map(user => {
//       return {
//         name: user,
//         numWords: note.all.filter(a => a.user === user)
//           .map(a => a.body.match(/\b\w+/g).length)
//           .reduce((a, b) => a + b)
//       }
//     })
//   };
//
//   note.stats = () => {
//     return {
//       numnotes: note.all.length,
//       numWords: note.numWordsAll(),
//       users: note.allusers(),
//     }
//   };
//
//
//   note.truncateTable = callback => {
//     $.ajax({
//         url: '/notes',
//         method: 'DELETE',
//       })
//       .then(console.log)
//       .then(callback);
//   };
//
//   note.prototype.insertRecord = function(callback) {
//     $.post('/notes', {
//         user: this.user,
//         userUrl: this.userUrl,
//         body: this.body,
//         category: this.category,
//         publishedOn: this.publishedOn,
//         title: this.title
//       })
//       .then(console.log)
//       .then(callback);
//   };
//
//   note.prototype.deleteRecord = function(callback) {
//     $.ajax({
//         url: `/notes/${this.note_id}`,
//         method: 'DELETE'
//       })
//       .then(console.log)
//       .then(callback);
//   };
//
//   note.prototype.updateRecord = function(callback) {
//     $.ajax({
//         url: `/notes/${this.note_id}`,
//         method: 'PUT',
//         data: {
//           user: this.user,
//           userUrl: this.userUrl,
//           body: this.body,
//           category: this.category,
//           publishedOn: this.publishedOn,
//           title: this.title,
//           user_id: this.user_id
//         }
//       })
//       .then(console.log)
//       .then(callback);
//   };
//
//   module.note = note;
// })(app);
