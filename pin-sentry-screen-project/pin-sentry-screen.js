const input = document.getElementById("pinNum");
var buttons = document.getElementsByClassName("btn");

Array.prototype.forEach.call(buttons, function (button) {
  button.addEventListener("click", function () {
    if (input.value.length < 4) {
      input.value += this.getAttribute("data-pin-char");
    } else {
      input.value;
    }
  });
});

function clearInput() {
  input.value = "";
}

function rearrangeNumbers() {}
