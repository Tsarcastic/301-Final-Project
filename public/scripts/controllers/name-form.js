'use strict'

$('#main').siblings('.container').hide();
$('nav').hide();

function readUser() {
  // e.preventDefault();
  var gitUser = userForm.gitUN.value;
  if (gitUser !== "") {
    localStorage.setItem('user', gitUser);
    $('#gitForm').hide()
    location.reload();
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
  $('.container').show();
  $('nav').show();
}

$('#git-button').on('click', readUser);
$('#logout').on ('click', clearUser);
