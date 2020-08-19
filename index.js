/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time){
  let timeNow = time.split(':')
  let diffTime = timeNow[0].concat(timeNow[1])
  let result = parseInt(diffTime)

  if (result < 1200){
    return "Good Morning";
  }
  else if (result > 1700){
    return "Good Evening";
  }

  else {
    return "Good Afternoon"
  }

}
/* Write your implementation of displayMessage() */

function displayMessage(greeting) {
  document.getElementById("greeting").innerText = greeting
}
