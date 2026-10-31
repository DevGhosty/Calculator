const display = document.querySelector(".displayBox");
const buttons = document.querySelectorAll("button");

let firstNumber = 0;
let operator = "";
let newNum = false;

display.value = "0";

// Go through every button
for (let button of buttons) {
  button.onclick = function () {
    let value = button.textContent;

    // Clear
    if (value === "C") {
      display.value = "0";
      firstNumber = 0;
      operator = "";
      newNum = false;
    }

    // Calculate answer
    else if (value === "=") {
      if (operator === "") {
        return;
      }

      let secondNumber = Number(display.value);
      let result = 0;

      if (operator === "+") {
        result = firstNumber + secondNumber;
      } else if (operator === "-") {
        result = firstNumber - secondNumber;
      } else if (operator === "x") {
        result = firstNumber * secondNumber;
      } else if (operator === "/") {
        if (secondNumber === 0) {
          result = "Error";
        } else {
          result = firstNumber / secondNumber;
        }
      }

      display.value = result;
      operator = "";
      newNum = true;
    }

    // Save the operator
    else if (value === "+" || value === "-" || value === "x" || value === "/") {
      if (display.value === "Error") {
        return;
      }

      firstNumber = Number(display.value);
      operator = value;
      newNum = true;
    }

    // Handle displaying numbers
    else {
      if (newNum || display.value === "0") {
        display.value = value;
        newNum = false;
      } else {
        display.value += value;
      }
    }
  };
}
