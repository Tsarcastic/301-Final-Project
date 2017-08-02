'use strict';

(function(module) {

  const repos = {};
  let reposAll = [];

  // LOAD AND RENDER
  const successCallback = function(data) {
    reposAll = data;
    console.log(reposAll);
    repos.sortAll()
  }

  const errorCallback = function(err) {
    console.error(err);
  }

  let recent = [];

  function renderRepos() {
    let template = Handlebars.compile($('#repo-template').html())
    for (let i = 0; i < 3; i++) {
      recent.push(reposAll[i])
    }
    console.log(recent);
    $('#repos').html(template({
      repository: recent
    }))
  }

  repos.getRepos = () => {
    console.log("getting!")
    $.getJSON('/data/repo-test.json')
      .then(successCallback, errorCallback);
  }

  repos.sortAll = function() {
    console.log(reposAll);
    reposAll.sort((a, b) => (new Date(b.updated_at)) - (new Date(a.updated_at)))
    renderRepos();
  }

  repos.getRepos();


  module.repos = repos;

})(window);
