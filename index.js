/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  const words = time.split(':');
  console.log(words);
  const parsedWords = parseInt(words, 0);
  console.log(parsedWords)
  if (parsedWords < 12) {
    return "Good Morning"
  }
  else if (parsedWords < 17){
    return "Good Afternoon"
  }
  else {
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(arg){
  // const timeString = document.getElementById('greeting').value
  console.log(arg)
  let greeting = document.getElementById('greeting')
  greeting.innerText = arg
}
