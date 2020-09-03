/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time){
  let fullTime = parseInt(time.split(':'))
  if (fullTime < 12) {
    return 'Good Morning'
  } else if(fullTime > 17) {
    return 'Good Evening'
  } else {
    return 'Good Afternoon'
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(message){
  let greeting = document.getElementById('greeting')
  greeting.innerText = message
}