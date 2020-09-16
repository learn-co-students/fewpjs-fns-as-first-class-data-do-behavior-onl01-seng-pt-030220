/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(str){
  let time = parseInt(str.split(":")[0]);
  if (time < 12 ){
    return "Good Morning";
  }else if ( time >12 && time < 17){
    return "Good Afternoon";
  }else if (time >= 17){
    return "Good Evening";
  }
}


function displayMessage(str){
  let element = document.getElementById('greeting');
  element.innerText = str;
}
