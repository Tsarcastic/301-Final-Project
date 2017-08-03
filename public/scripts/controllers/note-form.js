'use strict'

function readData(e) {
  if( $('#body').val() === '') {
    e.preventDefault();
    console.log('The null value is working');
    alert('You need to enter notes in the body')
  } else {
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
  }


  $('#post-button').on('click', readData)
