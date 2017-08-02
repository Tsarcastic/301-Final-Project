'use strict'

function readData(e) {
  e.preventDefault();
  if (localStorage.getItem('user') === null) {
    let person = theForm.name.value;
    localStorage.setItem('user', person);
    let newUser = new app.User(person);
    console.log(newUser);
    newUser.createUser();
    console.log(person + " recorded as the user.")
  }
}



$('#git-button').on('click', readData)
