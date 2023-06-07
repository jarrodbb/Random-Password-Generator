// Global variables
// var generateBtn is used to select the ID selector
var generateBtn = document.querySelector("#generate");
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numberList = "123456789"
var lowerCaseList = "abcdefghijklmnopqrstuvwxyz"
var upperCaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

//Function to generate password
function writePassword() {

  // First window prompt after button is clicked
  var passwordLength = window.prompt("How many characters do you want the password?")
  // condition if less than 8. Ensure only a password of 8 characters is generated
  if (passwordLength!=8) {
   window.alert("Must be 8 characters long")
    return // return send the user back to the start
   
  } else {
  
  //window confirm boxes are displayed after 8characters are selected. 
  // User is asked if numbers are to be included 
  var addNumber = window.confirm("Add Numbers?")
  // User is asked if Uppercase letters are to be included
  var addUppercase = window.confirm("Add Uppercase Letters?")
  // User is asked if Lowercase letters are to be included
  var addLowercase = window.confirm("Add lowercase Letters?")
  // User is asked if Special Characters are to be included
  var addSpecialCharacters = window.confirm("Add special characters")
  }

  let result = ""; // empty string 
  var possibleCharacters = "" // empty string

  //If statements are used to ensure only the selected criteria are used to generate the password
  // Each window.confirm is broken down individually
  // The empty result string is added to with a single random selection. If the "if statment" is run 4 times it will have 4 inputs
  // The entire number list is added to the empty possibleCharacters variable
  if (addNumber === true) {
result += numberList[Math.floor(Math.random() * numberList.length)]
possibleCharacters += numberList 
}

 if (addUppercase === true) {
  result += upperCaseList[Math.floor(Math.random() * upperCaseList.length)]
possibleCharacters += upperCaseList 
}

 if (addLowercase === true) {
  result += lowerCaseList[Math.floor(Math.random() * lowerCaseList.length)]
possibleCharacters += lowerCaseList 
}

 if (addSpecialCharacters === true) {
  result += specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
 possibleCharacters += specialCharacters
}

//console.log check was used to verify
console.log(possibleCharacters)
console.log(result)

// For loop is used to get the remaining characters (4 characters cause the password can only be 8) 
// For loop starts at result.length casue the are already 4 inputs in the variable
  for (let i = result.length; i<passwordLength; i++) {
    result += possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]
  }

  // var passwordText is used to select the ID selector
  var passwordText = document.querySelector("#password");

  //passwoedText.value = result to link them
  passwordText.value = result


} 

// lisenter is used to display the password
generateBtn.addEventListener("click", writePassword);



