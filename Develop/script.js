// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//ask the user how many characters in password
//ask the user through prompts if it needs to have numbers, special characters, upppercase letters, lowercase letters
//console log each answer to make sure it is working
//create variables out of those prompts
//establish numbers, uppercase letters, special characters, and lowercase letters
//create a function that randomly takes from the listed criteria
//
function writePassword() {
  let howMuch = prompt("How many characters does your password need to be?");
  if (howMuch < 8) {
    alert("Password must be between 8-128 characters in length.");
  }
  console.log(howMuch);
  if (howMuch >= 8) {
    let specChar = prompt(
      "Does it need to contain special characters?(yes or no)"
    );
    console.log(specChar);
    let number = prompt("Does it need to contain numbers?(yes or no)");
    console.log(number);
    let uppCase = prompt("Does it need to have capital letters?(yes or no)");
    console.log(uppCase);
    let lowCase = prompt("Does it need to have lower case letters?(yes or no)");
    console.log(lowCase);
  }

  let digits = Math.floor(Math.random() * 10);
  let uppCaseLetters =
    ("A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z");

  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
