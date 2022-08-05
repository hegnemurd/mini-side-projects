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
  return numValue;
  // get the value of the data-number attribute
}

document.getElementById("add").addEventListener("click", addNum);
document.getElementById("subtract").addEventListener("click", subtractNum);
document.getElementById("divide").addEventListener("click", divideNum);
document.getElementById("multiply").addEventListener("click", multiNum);
document.getElementById("clearInput").addEventListener("click", clearNum);
document.getElementById("delete").addEventListener("click", deleteNum);

document.getElementById("equal-btn").addEventListener("click", equationValue)
function equationValue(inputValue) {
  // for(i = 0; i <= inputValue; i++) {
  //   switch ()
  // }
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
