numberEventList();

function numberEventList() {
  const numberButtons = document.getElementsByClassName("num-btn");
  for (let index = 0; index < numberButtons.length; index++) {
    const buttonChar = numberButtons[index];
    buttonChar.addEventListener("click", charClicked);
  }
}

function charClicked(event) {
  let value = event.target.getAttribute("data-number");
  console.log(value);
  // get the value of the data-number attribute
}

document.getElementById("add").addEventListener("click", addNum);
function addNum(numbersClicked) {
  let number = numbersClicked
  let addedNum = number + number;
  console.log(addedNum);
}

document.getElementById("subtract").addEventListener("click", subtractNum);
function subtractNum(numbersClicked) {}

document.getElementById("divide").addEventListener("click", divideNum);
function divideNum(numbersClicked) {}

document.getElementById("multiply").addEventListener("click", multiNum);
function multiNum(numbersClicked) {}

document.getElementById("clearInput").addEventListener("click", clearNum);
function clearNum() {}

document.getElementById("delete").addEventListener("click", deleteNum);

function deleteNum(inputValue) {}
