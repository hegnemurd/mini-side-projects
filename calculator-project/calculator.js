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
  document.getElementById("calculation").value += numValue;
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
      // let buttons = document.getElementsByClassName("equation-btn");
      // for (element in buttons) {
      //   element.disabled = true;
      // }
    }
  }
  return numValue;
}

// document.getElementById("add").addEventListener("click", addNum);
// document.getElementById("subtract").addEventListener("click", subtractNum);
// document.getElementById("divide").addEventListener("click", divideNum);
// document.getElementById("multiply").addEventListener("click", multiNum);
document.getElementById("clearInput").addEventListener("click", clearNum);
document.getElementById("delete").addEventListener("click", deleteNum);

// function checkInput(event, value) {
//   // let inputValue = input.value;
//   let inputLength = value.length;
//   for (let i = 0; i <= inputLength; i++) {
//     if (
//       value === "+" ||
//       value === "-" ||
//       value === "/" ||
//       value === "*"
//     ) {
//       let button = document.getElementsByClassName("equation-btn");
//       button.setAttribute("disabled", "");
//     }
//   }
// }

document.getElementById("equal-btn").addEventListener("click", equationValue);
function equationValue(inputValue) {
  // for(i = 0; i <= inputValue; i++) {
  //   switch ()
  // }
  // find the charater in inputVlaue

  switch (inputValue) {
    case "+":
      result = number1 + number2;
    case "-":
      result = number1 + number2;
    case "/":
      result = number1 + number2;
    case "*":
      result = number1 + number2;
  }
}

// function addNum(numValue) {
//   let number = numValue;
//   let addedNum = number + number;
//   console.log(addedNum);
// }

function clearNum() {
  const input = document.getElementById("calculation");
  input.value = "";
}

function deleteNum(inputValue) {}
