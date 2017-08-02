'use strict'


function readUser(e) {
  e.preventDefault();
  var gitUser = userForm.gitUN.value;
  localStorage.setItem('user', gitUser);
  console.log(gitUser + ' recorded as the user.')
}



$('#git-button').on('click', readUser)
