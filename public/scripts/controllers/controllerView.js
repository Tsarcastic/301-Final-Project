'use strict'

var user = "N/A"

function readData(event) {
  event.preventDefault();
  var user = theForm.name.value;
  console.log(user + " recorded as the user.")
}

$('#submit').on('click', readData)
