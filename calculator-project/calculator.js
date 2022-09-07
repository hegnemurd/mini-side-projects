let result = 0;

numberEventList();
charactersEventList();

function numberEventList() {
  const numberButtons = document.getElementsByClassName("num-btn");
  for (let index = 0; index < numberButtons.length; index++) {
    const buttonNum = numberButtons[index];
    buttonNum.addEventListener("click", numClicked);
  }
}

function charactersEventList() {
  const operationButtons = document.getElementsByClassName("operation-btn");
  for (let index = 0; index < operationButtons.length; index++) {
    const buttonChar = operationButtons[index];
    buttonChar.addEventListener("click", charClicked);
  }
}

function charClicked(event) {
  let charValue = event.target.getAttribute("data-operation");

  document.getElementById("calculation").value += charValue;
  console.log(charValue);

  return charValue;
}

function numClicked(event) {
  equationValue(event);

  let numValue = event.target.getAttribute("data-number");

  document.getElementById("calculation").value += numValue;
  console.log(numValue);

  return numValue;
}

document.getElementById("clearInput").addEventListener("click", clearNum);
document.getElementById("delete").addEventListener("click", deleteNum);

document
  .getElementById("equal-btn")
  .addEventListener("click", equalButtonHandler);

let number = 0;
function equationValue(event) {
  let newResult = 0;
  let character = event.target.getAttribute("data-operation");
  let numberValue = event.target.getAttribute("data-number");
  if (character === "+") {
    return (result = +numberValue + result);
  } else if (character === "-") {
    result = number1 - number2;
  } else if (character === "/") {
    result = number1 / number2;
  } else if (character === "*") {
    result = number1 * number2;
  }
  // else {
  //   // its a number here
  //   number = numberValue;
  // }
  // console.log(result);
}

function equalButtonHandler() {
  console.log("Result:", result);
}

function clearNum() {
  const input = document.getElementById("calculation");
  input.value = "";
}

function deleteNum(inputValue) {
  const input = document.getElementById("calculation");
  input.value = "";
}
