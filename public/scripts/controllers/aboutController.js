'use strict'

var person = "N/A"

function readData(e) {
  e.preventDefault();
  var person = theForm.name.value;
  console.log(person + " recorded as the user.")
  localStorage.setItem('user', person)
  $.post('/index', {
    person
  })
}



$('#submit').on('click', readData)
