'use strict'


function readUser(e) {
  e.preventDefault();
  var gitUser = userForm.gitUN.value;
  localStorage.setItem('user', gitUser);
  console.log(gitUser + ' recorded as the user.')
  $('#gitForm').hide()
}


if (localStorage.user !== undefined) {
  $('#gitForm').hide()
}

$('#git-button').on('click', readUser)
