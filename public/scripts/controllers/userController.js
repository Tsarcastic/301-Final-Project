'use strict'

function readData(e) {
  e.preventDefault();
  let person = theForm.siteName.value;
  localStorage.setItem('user', person);
  let newUser = new app.User(person);
  console.log(newUser);
  newUser.createUser();
  console.log(person + " recorded as the user.")

}



$('#git-button').on('click', readData)
