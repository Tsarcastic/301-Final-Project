'use strict'

var person = "N/A"

function readData(event) {
  event.preventDefault();
  var person = theForm.name.value;
  console.log(person + " recorded as the user.")
  localStorage.setItem('user', person)
}



$('#submit').on('click', readData)