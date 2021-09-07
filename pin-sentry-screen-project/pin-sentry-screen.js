// create 3 div>button elements per 1 row, when there is 3 rows - DONE
// one row finished = next row, until all 3 rows are finished then break out of loop - DONE
// assign 'clear-button' to clear the number input - DONE
// assign the 'shuffle' function to shuffle the numbers on the number pad - DONE
// each button needs to have a random non-repetitive number assigned to it from the 'nums' array - DONE

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
      btn.innerHTML = pinCharacter;
      btn.addEventListener("click", numClicked, false);
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

function loading() {
  const input = document.getElementById("pin-num");
  if (input.value.length === 4) {
    document.getElementById("loading").style.display = "flex";
    finished();
  } else {
    alert("Pin needs to be 4 numbers long.");
  }
}

function finished() {
  setTimeout(function myFunction() {
    document.getElementsByClassName("cont")[0].style.display = "none";
    document.getElementById("loading").style.display = "none";
    document.getElementById("finished").style.display = "flex";
  }, 3000);
}
