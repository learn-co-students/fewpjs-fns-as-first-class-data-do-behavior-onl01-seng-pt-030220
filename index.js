/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */


function greet(argument){
const time = parseInt(argument)
if (time < 12){
  // console.log('Good Morning')
  return "Good Morning"
}
else if (time < 19){
  // console.log('Good afternoon')
  return "Good Afternoon"
} else {
  // console.log('Good Evening')
  return "Good Evening"
}

};

function displayMessage(arg){
let message = document.getElementById("greeting")
message.innerHTML = arg
}
