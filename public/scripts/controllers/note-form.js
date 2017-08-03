'use strict'

function readData(e) {
  e.preventDefault();
  let person = localStorage.getItem('user');
  let title = theForm.title.value;
  let category = theForm.category.value;
  let body = theForm.body.value;
  localStorage.setItem('user', person);
  let newUser = new app.User(person,title,category
  ,body);
  console.log(newUser);
  newUser.createUser();
  console.log(person + ' recorded as the user.')

}



$('#post-button').on('click', readData)
