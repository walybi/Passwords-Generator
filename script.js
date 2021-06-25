var display = document.getElementById("displayScreen");
var sliderValue = document.getElementById("slider");
var passwordLength = document.getElementById("passLength");
var generatePassword = document.getElementById("generatebtn");

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

    
    var password = "";

    if (low === true){
        criteria += lowerCaseLetters;
        console.log(criteria);
    }
    else if (up === true){
        criteria += upperCaseLetters;
        console.log(criteria);
    }
    else if (numbers === true){
        criteria += allNumbers;
        console.log(criteria);
    }
    else if (symbols === true){
        criteria += specialSymbols;
        console.log(criteria);
    }
    else{
        console.log("Please select at least one criteria.");
    }

    for (var i = 1; i <= sliderValue.value; i++){
        password += criteria.charAt(Math.floor(Math.random() * (sliderValue.value -1)))
        console.log(password);
}
display.value = password;
}




// generatePassword.onclick = genpass;

// function genpass(){
//     if(low === true){
//         criteria += lowerCaseLetters;
//         console.log(criteria);
//     }
//     else if(up === true){
//         criteria += upperCaseLetters;
//         console.log(criteria);
//     }
//     else if(numbers === true){
//         criteria += allNumbers;
//         console.log(criteria);
//     }
//     else if(symbols === true){
//         criteria += specialSymbols;
//         console.log(criteria);
//     }
    // else {
    //     alert("Please select at least one criteria");
    // }

    // for(var i = 1; i <=  slider.value; i++){
    //     password += criteria.charAt(Math.floor(Math.random()* (criteria.length - 1)));
    //     console.log(password);
    // }
//     display.value = password;
// }






// var display = document.getElementById("displayWindow");
// var passlength = document.getElementById("lengthValue");
// var slider = document.getElementById("sliderValue");
// var low = document.getElementById("lowercase").checked;
// var up = document.getElementById("uppercase").checked;
// var numbers = document.getElementById("number").checked;
// var symbols = document.getElementById("symbol").checked;
// var generate = document.getElementById("generatebtn");
// var copy = document.getElementById("copybtn");

// var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
// var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var allNumbers = "0123456789";
// var specialSymbols = "!@#$%^&*()_+";

// var criteria = "";
// var password = "";




// // setting the user password length using mouse.
// slider.onclick = function() {
//     passlength.innerHTML = "Length: " + sliderValue.value;
//   };

// // setting the user password length using keyboad arroy keys.
// slider.onkeydown = function() {
//     passlength.innerHTML = "Length: " + sliderValue.value;
//   };

// generate.onclick = function() {
//     if (low === true){
//         criteria += lowerCaseLetters;
//         console.log(criteria);
//     }
//     else if (up === true){
//         criteria += upperCaseLetters;
//     }
//     else if (numbers === true){
//         criteria += allNumbers;
//     }
//     else if (symbols === true){
//         criteria += specialSymbols;
//     }
//     else{
//         alert("Please select at least one criteria");
//     }
//     for( var i = 1; i>=sliderValue.value.length; i++){
//         password = criteria.charAt(Math.floor(Math.random() * criteria.length - 1))
//         console.log(criteria);
//     }
//     display.value = password
// }