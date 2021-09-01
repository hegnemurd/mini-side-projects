// create 3 div>button elements per 1 row, when there is 3 rows - DONE
// one row finished = next row, until all 3 rows are finished then break out of loop - DONE
// assign 'clearbutton' to clear the number input - DONE

// assign the 'shuffle' function to shuffle the numbers on the number pad
// each button needs to have a random non-repetitive number assigned to it from the 'nums' array
// assign the 'submitPin' function to submit the code and continue to a loading page

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
      i.textContent = pinCharacter;
      btn.innerHTML = pinCharacter;
      copyOfNums.splice(i, 1);
      break;
    }
    const buttons = document.getElementsByClassName("btn");
    for (let j = 0; j < buttons.length; j++) {
      buttons[j].addEventListener("click", numClicked, false);
    }
    divNames[divIndex].appendChild(btn);
  }
}

function numClicked() {
  const input = document.getElementById("pinNum");
  if (input.value.length < 4) {
    input.value += this.getAttribute("data-pin-char");
  } else {
    input.value;
  }
}

function clearInput() {
  const input = document.getElementById("pinNum");
  input.value = "";
}
