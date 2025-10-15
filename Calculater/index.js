// Step 1: Select the screen and all buttons
const screen = document.getElementById("screen");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");

// Step 2: Store current input as string
let currentInput = "";

// Step 3: Add event listeners for number buttons
numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    currentInput += button.textContent; // Append number or dot
    screen.innerText = currentInput;    // Update screen
  });
});

// Step 4: Add event listeners for operator buttons
operatorButtons.forEach(button => {
  button.addEventListener("click", () => {
    currentInput += button.textContent; // Append operator
    screen.innerText = currentInput;
  });
});

// Step 5: Equal button to calculate result
equalButton.addEventListener("click", () => {
  try {
    // Use eval() to calculate the string expression
    const result = eval(currentInput);
    screen.innerText = result;
    currentInput = result.toString(); // Save result for further calculation
  } catch (error) {
    screen.innerText = "Error";
    currentInput = "";
  }
});

// Step 6: Clear button
clearButton.addEventListener("click", () => {
  currentInput = "";
  screen.innerText = "0";
});
