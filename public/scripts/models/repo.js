'use strict';

(function(module) {

  const repos = {};
  let reposAll = [];
  let gitID = localStorage.getItem('user');

  // LOAD AND RENDER
  const successCallback = function(data) {
    reposAll = data;
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
    $('#repos').html(template({
      repository: recent
    }))
  }

  repos.getRepos = () => {
    if(localStorage.getItem('user')){
    $.ajax({
      url: `https://api.github.com/users/${(gitID)}/repos`,
      method: 'GET',
    })
      .then(successCallback, errorCallback);
    }
  }

  repos.sortAll = function() {
    reposAll.sort((a, b) => (new Date(b.updated_at)) - (new Date(a.updated_at)))
    renderRepos();
  }

  repos.getRepos();


  module.repos = repos;

})(window);
