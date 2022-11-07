// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Arrays with captial and lowercase letters
var capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// Arrays with symbols and numbers, only using most common symbols
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", ".", "?", "_", "-"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

// User prompt
function passwordPrompt() {
  if (Number.isNaN(length)) {
    window.alert("Password length must be entered with numbers, try again");
    return;
  }

  if (length > 128) {
    window.alert("Password length is too long, try again");
    return;
  }

  if (length < 8) {
    window.alert("Password length is too short, try again");
    return;
  }

  var lowerCase = confirm("If you would like lowercase letters, click OK");
  var upperCase = confirm("If you would like uppercase letters, click OK");
  var incNumbers = confirm ("If you would like numbers, click OK");
  var specialSymbols = confirm("If you would like symbols, press OK");
  
}