/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeStrincg))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */


   function greet(time){
   var   t=time.split(':')[0]
    var  t=parseInt(t)
      if (t < 12 ) {
       return "Good Morning"
      } else if ( 12 < t && t < 17) {
        return "Good Afternoon"
      } else if ( t > 17 ) {
        return "Good Evening"
      }
   }
  
  function displayMessage(string) {
    let el=document.getElementById('greeting')
     el.innerText =  string
    
  }
  
