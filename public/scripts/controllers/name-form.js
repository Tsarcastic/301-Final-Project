'use strict'


function readUser() {
  // e.preventDefault();
  var gitUser = userForm.gitUN.value;
  if (gitUser !== "") {
    localStorage.setItem('user', gitUser);
    console.log(gitUser + ' recorded as the user.')
    $('#gitForm').hide()
  } else {
    alert("You need to enter your gitHub user name")

  }
}

function clearUser() {
  console.log("User Logged Out.")
  localStorage.clear();
  location.reload();
}


if (localStorage.user !== undefined) {
  $('#gitForm').hide()
}

$('#git-button').on('click', readUser);
$('#logout').on ('click', clearUser);
