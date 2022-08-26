numberEventList();
charactersEventList();

function numberEventList() {
  const numberButtons = document.getElementsByClassName("num-btn");
  for (let index = 0; index < numberButtons.length; index++) {
    const buttonChar = numberButtons[index];
    buttonChar.addEventListener("click", charClicked);
  }
}

function charactersEventList() {
  const equationButtons = document.getElementsByClassName("equation-btn");
  for (let index = 0; index < equationButtons.length; index++) {
    const buttonChar = equationButtons[index];
    buttonChar.addEventListener("click", charClicked);
  }
}

function charClicked(event) {
  let numValue = event.target.getAttribute("data-character");
  // let inputValue = document.getElementById("calculation").value;
  document.getElementById("calculation").value += numValue;
  const input = document.getElementById("calculation");
  // inputValue += numValue;
  console.log(numValue);
  // get the value of the data-number attribute
  let inputLength = numValue.length;
  for (let i = 0; i <= inputLength; i++) {
    if (
      numValue === "+" ||
      numValue === "-" ||
      numValue === "/" ||
      numValue === "*"
    ) {
      document.getElementById("plus").disabled = true;
      document.getElementById("minus").disabled = true;
      document.getElementById("divide").disabled = true;
      document.getElementById("multiply").disabled = true;
    }
  }
  input.value = "";
  return numValue;
}

document.getElementById("clearInput").addEventListener("click", clearNum);
document.getElementById("delete").addEventListener("click", deleteNum);

document.getElementById("equal-btn").addEventListener("click", equationValue);
function equationValue(event) {
  let numValue = event.target.getAttribute("data-character");
  const inputValue = document.getElementById("calculation").value;
  inputValue += numValue;
  let inputLength = numValue.length;
  let result = 0;
  let number1 = 0;
  let number2 = 0;
  // number then character then the input is empty and new number will be added
  // when character is clicked then the numbers are equated
  // 7 + => pressing these two would show =>
  // 89 = => then pressing these would show =>
  // 96
  for (let i = 0; i <= inputLength; i++) {
    if (numValue === "+") {
      result = number1 + number2;
      console.log(result);
    } else if (numValue === "-") {
      result = number1 - number2;
      console.log(result);
    } else if (numValue === "/") {
      result = number1 / number2;
      console.log(result);
    } else if (numValue === "*") {
      result = number1 * number2;
      console.log(result);
    }
  }
  inputValue = "";

  // return numValue;
  console.log(numValue, result);
}

function clearNum() {
  const input = document.getElementById("calculation");
  input.value = "";
}

function deleteNum(inputValue) {}
