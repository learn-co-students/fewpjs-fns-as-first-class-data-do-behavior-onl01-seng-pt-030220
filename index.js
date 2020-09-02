/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let intTime = parseInt(time.split(':')[0]) + parseInt(time.split(':')[1]) / 100;
  if(intTime < 12) {
    return "Good Morning";
  }
  else if (intTime >= 12 && intTime < 17){
    return "Good Afternoon";
  }
  else {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(greeting){
  document.getElementById('greeting').innerText = greeting;
}