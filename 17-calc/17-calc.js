"use strict";

function calculate(operation) {
  const num1 = Number(document.getElementById("numInput1").value);
  const num2 = Number(document.getElementById("numInput2").value);
  let result;

  if (operation === "+") {
    result = num1 + num2;
  } else if (operation === "-") {
    result = num1 - num2;
  } else if (operation === "*") {
    result = num1 * num2;
  } else if (operation === "/") {
    if (num2 === 0) {
      result = "Error";
    } else {
      result = num1 / num2;
    }
  }
  document.getElementById("result").innerText = result;
}

function clearInputs() {
  document.getElementById("numInput1").value = "";
  document.getElementById("numInput2").value = "";
  document.getElementById("result").innerText = "";
}

document.getElementById("addition").addEventListener("click", function () {
  calculate("+");
});
document.getElementById("subtraction").addEventListener("click", function () {
  calculate("-");
});
document.getElementById("multiply").addEventListener("click", function () {
  calculate("*");
});
document.getElementById("division").addEventListener("click", function () {
  calculate("/");
});
document.getElementById("clear").addEventListener("click", clearInputs);
