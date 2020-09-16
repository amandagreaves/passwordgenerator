// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//ask the user how many characters in password
//ask the user through prompts if it needs to have numbers, special characters,
    //upppercase letters, lowercase letters
//console log each answer to make sure it is working
//create variables out of those prompts
//establish possible numbers, uppercase letters, special characters, and lowercase letters
//create a function that randomly takes from the user's criteria
//
function writePassword() {
  var howMuch = prompt("How many characters does your password need to be?", 8);
  if (howMuch < 8) {
    alert("Password must be between 8-128 characters in length.");
  }
  console.log(howMuch);
  if (howMuch >= 8) {
    var specChar = prompt("Does it need to contain special characters?(yes or no)", "yes");
    console.log(specChar);
    var number = prompt("Does it need to contain numbers?(yes or no)", "yes");
    console.log(number);
    var uppCase = prompt("Does it need to have capital letters?(yes or no)", "yes");
    console.log(uppCase);
    var lowCase = prompt("Does it need to have lower case letters?(yes or no)", "yes");
    console.log(lowCase);
  }

  let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let uppCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let lowCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let possSpecChar = ["@", "*", "&", "%", "$", "#", "!"];
  console.log (digits);
  console.log (uppCaseLetters);
  console.log (lowCaseLetters);
  console.log (possSpecChar)
  var ranPass = ""

if (specChar=="yes" && number=="yes" && uppCase=="yes" && lowCase=="yes"){
  console.log("yay!")
  var possChar = []
  possChar = possChar.concat(uppCaseLetters, digits, lowCaseLetters, possSpecChar)
  for (i = 0; i < howMuch; i++) {
  var randomChar = possChar[Math.floor(Math.random() * possChar.length)];
  console.log (randomChar)
  ranPass = ranPass.concat(randomChar)
  }
}
if (specChar=="no" && number=="yes" && uppCase=="yes" && lowCase=="yes"){
  console.log("yay!")
  var possChar = []
  possChar = possChar.concat(uppCaseLetters, digits, lowCaseLetters)
  for (i = 0; i < howMuch; i++) {
  var randomChar = possChar[Math.floor(Math.random() * possChar.length)];
  console.log (randomChar)
  ranPass = ranPass.concat(randomChar)
  }
}
if (specChar=="yes" && number=="no" && uppCase=="yes" && lowCase=="yes"){
  console.log("yay!")
  var possChar = []
  possChar = possChar.concat(uppCaseLetters, lowCaseLetters, possSpecChar)
  for (i = 0; i < howMuch; i++) {
  var randomChar = possChar[Math.floor(Math.random() * possChar.length)];
  console.log (randomChar)
  ranPass = ranPass.concat(randomChar)
  }
}
if (specChar=="yes" && number=="yes" && uppCase=="no" && lowCase=="yes"){
  console.log("yay!")
  var possChar = []
  possChar = possChar.concat(digits, lowCaseLetters, possSpecChar)
  for (i = 0; i < howMuch; i++) {
  var randomChar = possChar[Math.floor(Math.random() * possChar.length)];
  console.log (randomChar)
  ranPass = ranPass.concat(randomChar)
  }
}
if (specChar=="yes" && number=="yes" && uppCase=="yes" && lowCase=="no"){
  console.log("yay!")
  var possChar = []
  possChar = possChar.concat(uppCaseLetters, digits, possSpecChar)
  for (i = 0; i < howMuch; i++) {
  var randomChar = possChar[Math.floor(Math.random() * possChar.length)];
  console.log (randomChar)
  ranPass = ranPass.concat(randomChar)
  }
}
if (specChar=="yes" && number=="yes" && uppCase=="no" && lowCase=="no"){
  console.log("yay!")
  var possChar = []
  possChar = possChar.concat(digits, possSpecChar)
  for (i = 0; i < howMuch; i++) {
  var randomChar = possChar[Math.floor(Math.random() * possChar.length)];
  console.log (randomChar)
  ranPass = ranPass.concat(randomChar)
  }
}
if (specChar=="yes" && number=="no" && uppCase=="no" && lowCase=="yes"){
  console.log("yay!")
  var possChar = []
  possChar = possChar.concat(lowCaseLetters, possSpecChar)
  for (i = 0; i < howMuch; i++) {
  var randomChar = possChar[Math.floor(Math.random() * possChar.length)];
  console.log (randomChar)
  ranPass = ranPass.concat(randomChar)
  }
}
if (specChar=="yes" && number=="no" && uppCase=="yes" && lowCase=="no"){
  console.log("yay!")
  var possChar = []
  possChar = possChar.concat(uppCaseLetters, possSpecChar)
  for (i = 0; i < howMuch; i++) {
  var randomChar = possChar[Math.floor(Math.random() * possChar.length)];
  console.log (randomChar)
  ranPass = ranPass.concat(randomChar)
  }
}
if (specChar=="no" && number=="yes" && uppCase=="no" && lowCase=="yes"){
  console.log("yay!")
  var possChar = []
  possChar = possChar.concat(digits, lowCaseLetters)
  for (i = 0; i < howMuch; i++) {
  var randomChar = possChar[Math.floor(Math.random() * possChar.length)];
  console.log (randomChar)
  ranPass = ranPass.concat(randomChar)
  }
}
function generatePassword() {
  return ranPass
}


  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
