function numberEventList() {
  let numberButtons = document.getElementsByClassName("num-btn");
  for (let index = 0; index < numberButtons.length; index++) {
    let buttonChar = numberButtons[i];
    buttonChar.addEventListener("click", charClicked);
  }
}

document.getElementById("add").addEventListener("click", addNum);
function addNum(numbersClicked) {
  numbersClicked[0] + numbersClicked[1];
}

document.getElementById("subtract").addEventListener("click", subtractNum);
function subtractNum(numbersClicked) {}

document.getElementById("divide").addEventListener("click", divideNum);
function divideNum(numbersClicked) {}

document.getElementById("multiply").addEventListener("click", multiNum);
function multiplyNum(numbersClicked) {}

document.getElementById("clearInput").addEventListener("click", clearNum);
function clear() {}

document.getElementById("delete").addEventListener("click", deleteNum);

function deleteNum(inputValue) {}
