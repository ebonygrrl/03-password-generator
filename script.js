// Assignment Code
function generatePassword() {
  // Store characters
  var text = '';
  
  // Get password length  
  var charLength = parseInt(prompt("How many characters would you like? Must choose a number between 8-128.", ""));

  // Ask until range criteria is met
  while (charLength < 8 || charLength > 128) {
    charLength = prompt("You must choose a number between 8 and 128!", "");
  }

  // Check for at least 1 character set
  do {
    // Store criteria in variable
    var uppercase = confirm("Would you like to use uppercase characters?"),
        lowercase = confirm("Would you like to use lowercase characters?"),
          numeric = confirm("Would you like to use numeric characters?"),
          special = confirm("Would you like to use special characters?");

    // Check input value
    console.log("Input password length: " + charLength);
    console.log("Uppercase: " + uppercase);
    console.log("Lowercase: " + lowercase);
    console.log("Numeric: " + numeric);
    console.log("Special characters: " + special);
    console.log("----------");

    // Store characters by criteria
    if (uppercase === true) {
      text += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
    }

    if (lowercase === true) {
      text += 'abcdefghijklmnopqrstuvwxyz';
    }

    if (numeric === true) {
      text += '1234567890';
    }

    if (special === true) {
      text += '!@#$%^&*()-_=+?><';
    }

    if (text === '') {
      alert("You must select at least one character");
      console.log("No character selected.");
      console.log("----------");
    }

  } while (text === '');

  // Check selected criteria return
  console.log("Password character option: " + text); 
  console.log("----------");

  var password = '';

  // Loop until password is desired length entered
  for (i=0; i < charLength; i++) {
    // Create random text string with each iteration
    password += text.charAt(Math.floor(Math.random() * text.length));
  }

  // Check password length
  console.log("Password length: " + password.length);
  
  // Pass final output
  return password;
}

// Get button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button. When button is clicked, run function
generateBtn.addEventListener("click", writePassword);
