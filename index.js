/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const hour = parseInt(time.split(":")[0], 10);
  const minute = parseInt(time.split(":")[1], 10);
  if (hour < 12) {
    return "Good Morning";
  }
  else if (hour < 17 && hour > 12) {
    return "Good Afternoon";
  }
  else {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(text) {
  const greeting = document.getElementById('greeting')
  greeting.innerText = text
}
