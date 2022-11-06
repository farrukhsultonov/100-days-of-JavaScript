const count = document.querySelector(".count");
const input = document.querySelector(".form");
const resetCount = document.querySelector(".reset");
const button = document.querySelector(".button");

input.addEventListener("keyup", () => {
    count.innerHTML = input.value.length;
})

button.addEventListener("click", (e) => {
    if(e.target.classList.contains("reset")) {
        count.innerHTML = 0;
        input.value = ""
    }
})