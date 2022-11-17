function changeBackgroundColorToBlue() {
  // No need to change the content of this function. Don't worry if this code is new to you.
  document.body.style.backgroundColor = 'blue';
}

function changeBackgroundColorToRed() {
  // No need to change the content of this function. Don't worry if this code is new to you.
  document.body.style.backgroundColor = 'red';
}

// make a new parameter and set it equalto red element 

const jsRedButton = document.querySelector('.js-red-button')

const jsBlueButton = document.querySelector('.js-blue-button')

// add an event onto this new button
jsRedButton.addEventListener('click', changeBackgroundColorToRed)

jsBlueButton.addEventListener('click', changeBackgroundColorToBlue)

