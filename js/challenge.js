document.addEventListener("DOMContentLoaded", (event) => {
  // this displays the element for the counter
  let timerDisplay = document.querySelector("#counter")
  // need to increase the counter and display it 
  let counter = 0 
  setInterval(function () {  
   
  timerDisplay.innerText = counter.toString();
  counter = counter + 1; 
  }, 1000);
});


// get the buttons for adding or subtracting time 
let minusButton = document.querySelector("#minus");
let plusButton = document.querySelector("#plus");

let currentCount = document.querySelector("#counter")

// add event listener to lisent to click events for subtrack button
minusButton.addEventListener("click", () => {
  // get the current count did this in the global scope so I do not have to do it twice
    
  // remove one from the current count 
    currentCount.innerText = parseInt(currentCount.innerText) - 1;
});




// add event listener to lisent to click events for add button
plusButton.addEventListener("click", () => {
  // get the current count did this in the global scope so I do not have to do it twice
  
  // add one from the current count 
  currentCount.innerText = parseInt(currentCount.innerText) + 1;
});