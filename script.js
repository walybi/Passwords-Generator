var display = document.getElementById("displayScreen");
var sliderValue = document.getElementById("slider");
var passwordLength = document.getElementById("passLength");
var generatePassword = document.getElementById("generatebtn");
var copyPassword = document.getElementById("copubtn");

sliderValue.onclick = function(){
    passwordLength.innerHTML = "Length: " + sliderValue.value;
}
sliderValue.onkeydown = function(){
    passwordLength.innerHTML = "Length: " + sliderValue.value;
}

generatePassword.onclick = function(){
    
    var low = document.getElementById("lowercaseSwitchBox").checked;
    var up = document.getElementById("uppercaseSwitchBox").checked;
    var numbers = document.getElementById("numberSwitchBox").checked;
    var symbols = document.getElementById("symbolSwitchBox").checked;

    var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var allNumbers = "0123456789";
    var specialSymbols = "!@#$%^&*()_+";

    var criteria = "";
    var password = "";

    if (low === true){
        criteria += lowerCaseLetters;
        // console.log(criteria);
    }
    if (up === true){
        criteria += upperCaseLetters;
        // console.log(criteria);
    }
    if (numbers === true){
        criteria += allNumbers;
        // console.log(criteria);
    }
    if (symbols === true){
        criteria += specialSymbols;
        // console.log(criteria);
    }
    if (low === false && up === false &&  numbers === false && symbols === false){
        console.log("Please select at least one criteria.");
    }

    for (var i = 1; i <= sliderValue.value; i++){
        password += criteria.charAt(Math.floor(Math.random() * (criteria.length - 1)));
        // console.log(password);
}
// console.log(password);
display.value = password;
}


