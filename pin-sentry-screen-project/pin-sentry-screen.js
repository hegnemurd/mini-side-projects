// create 3 div>button elements per 1 row, when there is 3 rows - DONE
// one row finished = next row, until all 3 rows are finished then break out of loop - DONE
// If BackButton clicked, clear the pin entered on screen. - DONE
// Show asterisk, in place of "Enter Pin" text, every time a PinNumber (PinNumberButton) is clicked. - DONE
// Maximum pin length is 4. Minimum pin length is 4, before being able to submit. - DONE
// If ClearButton is clicked, remove the last digit entered one by one.  - DONE
// Show "Enter Pin" if no pin entered. - DONE
// If SubmitButton clicked, go to next screen (SuccessScreen). SubmitButton to be disabled until 4 digits entered. - DONE
// If PinRotateButton clicked, rotate numbers randomly in PinNumberButtons. (Challenge). - DONE
// Submit button is disable till input has 4 numbers

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let copyOfNums = [...nums];

function creatingElements() {
  let divNames = document.getElementsByClassName("number-buttons");

  for (let divIndex = 0; divIndex < divNames.length; divIndex++) {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.setAttribute("type", "button");

    for (let i = 0; i < copyOfNums.length; i++) {
      let pinCharacter = copyOfNums[i];
      btn.setAttribute("data-pin-char", pinCharacter);
      btn.innerHTML = pinCharacter;
      btn.addEventListener("click", numClicked, false);
      btn.addEventListener("click", subButtonActive, false);
      copyOfNums.splice(i, 1);
      break;
    }

    divNames[divIndex].appendChild(btn);
  }
}

function numClicked() {
  const input = document.getElementById("pin-num");
  if (input.value.length < 4) {
    input.value += this.getAttribute("data-pin-char");
  } else {
    input.value;
  }
}

function clearInput() {
  const input = document.getElementById("pin-num");
  input.value = "";
  const subBtn = document.getElementById("submit-button");
  subBtn.className = "sub-btn-disabled";
}

function removeChar() {
  const input = document.getElementById("pin-num");
  var val = input.value;
  var lastNum = val.substr(0, val.length - 1);
  input.value = lastNum;
  const subBtn = document.getElementById("submit-button");
  subBtn.className = "sub-btn-disabled";
}

function subButtonActive() {
  const input = document.getElementById("pin-num");
  const subBtn = document.getElementById("submit-button");
  if (input.value.length === 4) {
    subBtn.className = "sub-button";
  } else {
    subBtn.className = "sub-btn-disabled";
  }
}

function loading() {
  const input = document.getElementById("pin-num");
  if (input.value.length === 4) {
    document.getElementById("loading").style.display = "flex";
    finished();
  }
}

function finished() {
  setTimeout(function myFunction() {
    document.getElementsByClassName("cont")[0].style.display = "none";
    document.getElementById("loading").style.display = "none";
    document.getElementById("finished").style.display = "flex";
  }, 3000);
}

function shuffle() {
  const btns = document.getElementsByClassName("btn");
  var ranNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  shufArray(ranNums);
  function shufArray(ranNums) {
    var i = ranNums.length,
      j = 0,
      temp;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));

      temp = ranNums[i];
      ranNums[i] = ranNums[j];
      ranNums[j] = temp;
    }
    return ranNums;
  }
  let copyOfRanNums = [...ranNums];
  for (let btnIndex = 0; btnIndex < btns.length; btnIndex++) {
    const btn = btns[btnIndex];
    for (let n = 0; n < copyOfRanNums.length; n++) {
      let pinChar = copyOfRanNums[n];
      btn.setAttribute("data-pin-char", pinChar);
      btn.innerHTML = pinChar;
      copyOfRanNums.splice(n, 1);
      break;
    }
  }
}
