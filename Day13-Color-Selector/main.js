// // make 4 variable for buttons
// let red = document.querySelector('.red')
// let blue = document.querySelector('.blue')
// let white = document.querySelector('.white')
// let yellow = document.querySelector('.yellow')

// // attach event listener to buttons
// //      that listener needs to change the background


// red.addEventListener('click', () => {
//     document.body.style.backgroundColor = 'red'
// })

// blue.addEventListener('click', () => {
//     document.querySelector('body').style.backgroundColor = 'blue'
// })

// yellow.addEventListener('click', () => {
//     document.querySelector('body').style.backgroundColor = 'yellow'
// })

// white.addEventListener('click', () => {
//     document.querySelector('body').style.backgroundColor = 'white'
// })
const redButton = document.querySelector(".red");
const blueButton = document.querySelector(".blue");
const whiteButton = document.querySelector(".white");
const yellowButton = document.querySelector(".yellow");

let handleClickEvent = (e) => {
    e.preventDefault()
    console.log("I was clicked!");
    let color = e.target.dataset.color
    console.log(e.target);
    document.body.style.backgroundColor = color
}

redButton.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("I was clicked!");
    let color = e.target.dataset.color
    console.log(e.target);
    document.body.style.backgroundColor = color
});
blueButton.addEventListener("click", handleClickEvent);
whiteButton.addEventListener("click", handleClickEvent);
yellowButton.addEventListener("click", handleClickEvent);