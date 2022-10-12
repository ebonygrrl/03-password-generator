// Assignment Code
function generatePassword() {

  // Store characters in array
  const upperChar   = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        lowerChar   = 'abcdefghijklmnopqrstuvwxyz',
        numericChar = '1234567890',
        specialChar = ' !@#$%^&*()-_=+?><';

  // Store prompts in array
  const request = [];

  // Place all characters into new array
  const allChar  = [upperChar,lowerChar,numericChar,specialChar],
        allChars = allChar.join(''); // Create string from allChar array

  // Activate prompts
  var charLength = parseInt(prompt("How many characters would you like? Must choose between 8-128.", "")),
            text = '';

  // Get length from first prompt
  if (charLength >= 8 && charLength <= 128) {

    /*
    request[1] = confirm("Would you like to use uppercase characters?","");
    request[2] = confirm("Would you like to use lowercase characters?", "");
    request[3] = confirm("Would you like to use numeric characters?", "");
    request[4] = confirm("Would you like to use special characters?", "");
    */

    for (i=0; i < charLength; i++) {
      text += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
  } else {
    charLength = prompt("You must choose a number between 8 and 128!", ""); 
    
    console.log(charLength);
    /*   
    request[1] = confirm("Would you like to use uppercase characters?","");
    request[2] = confirm("Would you like to use lowercase characters?", "");
    request[3] = confirm("Would you like to use numeric characters?", "");
    request[4] = confirm("Would you like to use special characters?", "");*/
  }

  //console.log(allChars[Math.floor(Math.random() * allChars.length)]);

/*

    
    // get length from first prompt
    for (i=0; i < charLength; i++) {
      // determine criteria of pass
      
      // loop until length is met
        text += allChars[Math.floor(Math.random() * charLength)];
        console.log(text);
        //text += text + 1;
      }
  for (i=0; i < 5; i++) {
    // Build criteria array
    console.log(random);
    break;
  }*/

  // if number is 8 - 128
  // if uppercase = yes, then criteria.push(request)
/*
  

  // Create loop to choose password characters
  for (i=0; i <= request.length; i++) {
    // if request is between 8 and 128
    if (request[0] >= 8 && request[0] <= 128) {
      //console.log(request);
      if (request[1] === true) {

      }
      if (request[2] === true) {

      }
      if (request[3] === true) {

      }
      if (request[4] === true) {

      }
    } else {
      request[0] = prompt("You must choose a number between 8 and 128!", "");
      console.log(request);
    }
  }*/
  return text;
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
