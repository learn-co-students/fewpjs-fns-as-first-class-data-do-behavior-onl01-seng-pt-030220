/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeOfDay) {
  let time = parseInt(timeOfDay)
  if ( time < 12 ) {
    return `Good Morning`
  }
  if (time > 17 ) {
    return `Good Evening`
  }
  if ( 12 > time < 17 ) {
    return `Good Afternoon`
  }
}

function displayMessage(greet) {
  let greeting = document.getElementById("greeting")
    greeting.innerText = greet
}
