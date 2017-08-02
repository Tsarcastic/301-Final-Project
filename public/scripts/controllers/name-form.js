'use strict'


function readUser(e) {
  e.preventDefault();
  var gitUser = userForm.gitUN.value;
  if (gitUser !== "") {
    localStorage.setItem('user', gitUser);
    console.log(gitUser + ' recorded as the user.')
    $('#gitForm').hide()
  } else {
    alert("You need to enter your gitHub user name")

  }
}


if (localStorage.user !== undefined) {
  $('#gitForm').hide()
}

$('#git-button').on('click', readUser)
