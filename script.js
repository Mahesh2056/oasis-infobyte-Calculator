const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

// Function to calculate based on button clicked
const calculate = (btnValue) => {
  display.focus();

  if (btnValue === "=" && output !== "") {
    try {
      // Replace '%' with '/100' for percentage calculation
      output = eval(output.replace("%", "/100"));
    } catch (e) {
      output = "Error";
    }
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.slice(0, -1);
  } else {
    // Prevent consecutive operators or leading operator
    if (output === "" && specialChars.includes(btnValue)) return;
    if (specialChars.includes(output.slice(-1)) && specialChars.includes(btnValue)) {
      output = output.slice(0, -1);
    }
    output += btnValue;
  }
  
  display.value = output;
};

// Add event listener to buttons
buttons.forEach(button => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
