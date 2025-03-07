"use strict";

let number1 = document.getElementById("numInput1");
let number2 = document.getElementById("numInput2");
let addBtn = document.getElementById("addition");
let subBtn = document.getElementById("subtraction");
let mulBtn = document.getElementById("multiply");
let divBtn = document.getElementById("division");
let clearBtn = document.getElementById("clear");
let result = document.getElementById("result");

addBtn.addEventListener("click", function () {
  let sum = parseFloat(number1.value) + parseFloat(number2.value);
  result.innerText = `${sum}`;
});

subBtn.addEventListener("click", function () {
  let dif = parseFloat(number1.value) - parseFloat(number2.value);
  result.innerText = `${dif}`;
});

mulBtn.addEventListener("click", function () {
  let mul = parseFloat(number1.value) * parseFloat(number2.value);
  result.innerText = `${mul}`;
});

divBtn.addEventListener("click", function () {
  let divisor = parseFloat(number2.value);
  if (divisor === 0) {
    result.textContent = 'Error';
  } else {
    let div = parseFloat(number1.value) / parseFloat(number2.value);
  result.innerText = `${div}`;
  }
});

clearBtn.addEventListener("click", function () {
  number1.value = "";
  number2.value = "";
  result.innerText = "";
});
