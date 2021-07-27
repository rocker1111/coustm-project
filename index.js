let maxAttempts = 5;

let addBtn = document.getElementById("addBtn");
let output = document.getElementById("output");

let number = [Math.floor(Math.random() * 100)];

addBtn.addEventListener("click", function () {
  let input = document.getElementById("inputUser").value;
  if (input == number) {
    output.innerHTML = `You guessed right, your number was ${number}`;
  } else if (input < number) {
    output.innerHTML =
      "You guessed too low! & You have " + maxAttempts + " attempts left";
    maxAttempts -= 1;
  } else if (input > number) {
    output.innerHTML =
      "You guessed too high! & You have " + maxAttempts + " attempts left";
    maxAttempts -= 1;
  } else if (maxAttempts === 5) {
    output.innerHTML = "You weren't able to guess the correct number";
  }
})