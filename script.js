var display = document.getElementById("displayWindow");
var lenght = document.getElementById("lenghtValue");
var slider = document.getElementById("sliderValue");
var low = document.getElementById("lowecase");
var up = document.getElementById("uppercase");
var numbers = document.getElementById("number");
var symbols = document.getElementById("symbol");
var generate = document.getElementById("generatebtn");
var copy = document.getElementById("copybtn");

var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var allNumbers = "0123456789";
var specialSymbols = "!@#$%^&*()_+";

var criteria = "";
var password = "";




// setting the user password lenght using mouse.
slider.onclick = function() {
    lenght.innerHTML = "Lenght: " + sliderValue.value;
  };

// setting the user password lenght using keyboad arroy keys.
slider.onkeydown = function() {
    lenght.innerHTML = "Lenght: " + sliderValue.value;
  };