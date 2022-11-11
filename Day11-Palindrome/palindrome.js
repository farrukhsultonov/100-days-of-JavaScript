const btn = document.querySelector(".btn");
const results = document.querySelector(".results");

btn.addEventListener("click", palindromeCheck)

function palindromeCheck() {
    const word = document.querySelector(".input-text").value;
    let length = word.length;
    let startCheck = word.substring(0, Math.floor(length / 2)).toLowerCase();
    let endCheck = word.substring(length - Math.floor(length / 2)).toLowerCase();
    let reverse = endCheck.split('').reverse().join('');
    if (startCheck == reverse) {
        results.innerHTML = `"${word.toUpperCase()}" is a palindrome `;
        document.getElementById("form").value = '';
    } else {
        results.innerHTML = `"${word.toUpperCase()}" is NOT a palindrome `;
        document.getElementById("form").value = '';
    }
}