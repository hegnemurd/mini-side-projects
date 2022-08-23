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
    }
  }
  return numValue;
}

document.getElementById("clearInput").addEventListener("click", clearNum);
document.getElementById("delete").addEventListener("click", deleteNum);

document.getElementById("equal-btn").addEventListener("click", equationValue);
function equationValue(event) {
  let numValue = event.target.getAttribute("data-character");
  document.getElementById("calculation").value += numValue;
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
  return numValue;
  // const operator = "+";
  //   switch (operator) {
  //     case "+":
  //       result = number1 + number2;
  //       console.log(result);
  //       break;
  //     case "-":
  //       result = number1 + number2;
  //       // return result;
  //       console.log(result);
  //       break;
  //     case "/":
  //       result = number1 + number2;
  //       // return result;
  //       console.log(result);
  //       break;
  //     case "*":
  //       result = number1 + number2;
  //       // return result;
  //       console.log(result);
  //       break;
  //   }
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
