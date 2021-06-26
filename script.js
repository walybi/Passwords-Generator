var display = document.getElementById("displayScreen");
var sliderValue = document.getElementById("slider");
var passwordLength = document.getElementById("passLength");
var generatePassword = document.getElementById("generatebtn");
var copyPassword = document.getElementById("copybtn");

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
    }
    if (up === true){
        criteria += upperCaseLetters;
    }
    if (numbers === true){
        criteria += allNumbers;
    }
    if (symbols === true){
        criteria += specialSymbols;
    }
    if (low === false && up === false &&  numbers === false && symbols === false){
        alert("Please select at least one criteria.");
    }

    for (var i = 1; i <= sliderValue.value; i++){
        password += criteria.charAt(Math.floor(Math.random() * (criteria.length - 1)));
}
display.value = password;
}

copyPassword.onclick = function(){
    document.getElementById("displayScreen").select();
    document.execCommand("copy");
    alert("Copied Successfully ");
}


