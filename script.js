// Assignment code here
function generatePassword() {
  var allLowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var allUppsercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialSymbols = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var randomOut = [];

// asking user input

howLong = prompt("Choose between 8 - 128 characters for password length.");
if (howLong < 8 || howLong > 128) {
  return "Choose how long you would like your password to be.";
} else if (isNaN(howLong)) {
  howLong = prompt("Not a valid number.");
}
else {
  alert("Your password will be " + howLong + " in length.");
  
}

numDigit = confirm("Would you like to include numbers?");
  if (numDigit) {
    alert("Your password will include numbers.");
  }
  else {
    alert("You've opted NOT to have numbers inluded.");
  }

upCase = confirm("Would you like to have uppercase letters in your password?");
  if (upCase) {
    alert("Uppercase letters included.");
  }
  else {
    alert("You've opted NOT to have uppercase letters.");
  }

lowCase = confirm("Would you like to have lowercase letters in your password?");
  if (lowCase) {
    var turnToLowercase = alert("Lowercase letters included");
  }
  else {
    alert("You've opted NOT to have lowercase letters.");
  }

specialChar = confirm("Any special characters?");
  if (specialChar) {
    alert("Special charcters included.");
  }
  else {
    alert("You've opted NOT to have special characters.");
  }





  if (lowCase === false && upCase === false && numDigit === false && specialChar === false) {
    return "Please select at least one character type.";
  };

  if (lowCase) {
    randomOut = randomOut.concat(allLowercaseLetters);
  }
  if (upCase) {
    randomOut = randomOut.concat(allUppsercaseLetters);
  }
  if (numbers) {
    randomOut = randomOut.concat(numbers);
  }
  if (specialChar) {
    randomOut = randomOut.concat(specialSymbols);
  }

  let resultPass = ""
  for (let i = 0; i < howLong; i++) {
    let rng =[Math.floor(Math.random() * randomOut.length)];
      resultPass = resultPass + randomOut[rng];
  }
  return resultPass;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
