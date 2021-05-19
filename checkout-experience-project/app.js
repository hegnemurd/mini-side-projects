// function loader() {
//   document.getElementById("loader").style.display = "block";
// }

document.getElementById("pay-button").addEventListener("click", loader);
document.getElementById("pay-button").addEventListener("click", done);

function loader() {
  document.getElementById("loader").style.display = "block";
}

function done() {
  setTimeout(function myFunction() {
    document.getElementById("loader").style.display = "none";
    document.getElementsByClassName("container")[0].style.display = "none";
    document.getElementById("done").style.display = "block";
  }, 3000);
}
