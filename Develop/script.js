// Arrays with captial and lowercase letters
var capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// Arrays with symbols and numbers, only using most common symbols
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", ".", "?", "_", "-"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

// User prompt
function passwordPrompt() {
  var length = parseInt(
  window.prompt("How long would you like your password to be?"),
  );

  if (Number.isNaN(length)) {
    window.alert("Password length must be entered with numbers, try again");
    return;
  }

  if (length >= 129) {
    window.alert("Password length is too long, try again");
    return;
  }

  if (length <= 7) {
    window.alert("Password length is too short, try again");
    return;
  }

  var lowerCase = confirm("If you would like lowercase letters, click OK");
  var upperCase = confirm("If you would like uppercase letters, click OK");
  var incNumbers = confirm ("If you would like numbers, click OK");
  var incSymbols = confirm("If you would like symbols, press OK");
  
  // Checking if user selected any of the above options
  if(
    lowerCase === false &&
    upperCase === false &&
    incNumbers === false &&
    incSymbols === false
  ) {
    window.alert("Must have one or more character types");
    return;
  }

  var userInput = {
    length: length,
    lowerCase: lowerCase,
    upperCase: upperCase,
    incNumbers: incNumbers,
    incSymbols: incSymbols,
  };
  return userInput;
}

// Calling on random array
function randomize(arr) {
  var Index = Math.floor(Math.random() * arr.length);
  var randomArray = arr[Index];
  return randomArray;
}

function passwordGen() {
  var totalOptions = passwordPrompt();
  var results = [];
  var totalCharacters = [];
  var inputCharacters = [];

  if (!totalOptions) 
  return;

  if (totalOptions.lowerCase) {
    totalCharacters = totalCharacters.concat(lowercaseLetters);
    inputCharacters.push(randomize(lowercaseLetters));
  }
  if (totalOptions.upperCase) {
    totalCharacters = totalCharacters.concat(capitalLetters);
    inputCharacters.push(randomize(capitalLetters));
  }
  if (totalOptions.incNumbers) {
    totalCharacters = totalCharacters.concat(numbers);
    inputCharacters.push(randomize(numbers));
  }
  if (totalOptions.incSymbols) {
    totalCharacters = totalCharacters.concat(symbols);
    inputCharacters.push(randomize(symbols));
  }
  for (var x = 0; x < totalOptions.length; x++) {
    var generated = randomize(totalCharacters);
    results.push(generated);
  }
  for (var x = 0; x < inputCharacters.length; x++) {
    results[x] = inputCharacters[x];
  }
  return results.join("");
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = passwordGen();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);