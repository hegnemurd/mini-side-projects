const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let copyOfNums = [...nums];
let i = 0;

function creatingElements() {
  let rowNames = document
    .getElementById("pin-number-pad")
    .getElementsByClassName("row");
  for (let rowIndex = 0; rowIndex < rowNames.length; rowIndex++) {
    for (let divIndex = 0; divIndex < 3; divIndex++) {
      const myDiv = document.createElement("div");
      myDiv.classList.add("number-buttons");
      const btn = document.createElement("button");
      btn.classList.add("btn");
      for (i; i < copyOfNums.length; i++) {
        let pinCharacter = nums[i];
        btn.setAttribute("data-pin-char", pinCharacter);
        i.textContent = pinCharacter;
        btn.innerHTML = pinCharacter;
        copyOfNums.splice(i);
      }
      myDiv.appendChild(btn);
      rowNames[rowIndex].appendChild(myDiv);
    }
  }
}

// create 3 div>button elements per 1 row, when there is 3 rows - DONE
// one row finished = next row, until all 3 rows are finished then break out of loop - DONE
// each button needs to have a random non-repetitive number assigned to it from the 'nums' array
// assign 'clearbutton' to clear the number input
// assign the 'shuffle' function to shuffle the numbers on the number pad

for (let i = 0; i < nums.length; i++) {}

/* div.class=row 
<div class="number-buttons">
  <button type="button" class="btn" data-pin-char="5"></button>
</div>; */
