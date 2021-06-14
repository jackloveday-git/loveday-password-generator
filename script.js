// Assignment code here

//Iterate Universals
var passwordLength;
var passwordFinal = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



//Generate Password Function
function generatePassword() {
  console.log("Start generatePassword() Function:");

  //Make sure Password Holder is reset each time.
  passwordFinal = "";

  //Never ending loop until return
  var promptCheck = false;
  while (promptCheck == false) {

      //Endless Loop until Length is acceptable value.
      var lengthCheck = false;
      var errorCheck = 0;
      while (lengthCheck == false) {
        var lengthInput = prompt("How long of a password would you like? (8-128)", "8");

        var lengthArray = lengthInput.split("");
        var arrayLength = lengthArray.length;

        //Check input for non number values
        for (var i = 0; i < arrayLength; i++) {
          var x = lengthArray[i];

          if (x >= "0" && x <= "9") {
            //console.log("Value " + i + " is a number.");
          } else {
            //console.log("A non numerical was entered.")
            errorCheck++;
            break;
          }
        }
        
        //If the password has errors, repeat until another value is accepted
        if (errorCheck > 0) {
          alert("Your password contained a non-numerical value.");
          errorCheck = 0;
        
        //Else, move on the value is only numbers
        } else {

          //Make sure it is >8 and <128
          var sum = lengthInput; 
          //console.log(sum);
          if (sum < 8) {
            alert("Please enter a number greater than 8.");
          } else if (sum > 128) {
            alert("Please enter a number less than 128.");
          } else {
            //console.log("Break out length Check");
            passwordLength = sum;
            console.log(" - Confirmed Length is an acceptable value.")
            lengthCheck = true;
          }
        }
      }

      console.log("Begin user confirm's for Attribute Values.");

      //Check and remember Att Values
      var confirmCheck = false;
      var attArray = [];
      var confirmTotal = 0;
      while (confirmCheck == false) {
        //console.log("Start Confirms...");
        var passwordLowercase = confirm("Should your password include 'Lowercase' characters?");
        var passwordUppercase = confirm("Should your password include 'Uppercase' characters?");
        var passwordNumeric = confirm("Should your password include 'Numeric' characters?");
        var passwordSpecial = confirm("Should your password include 'Special' characters?");

        if (passwordLowercase == true) {
          attArray += "L";
          confirmTotal++;
          console.log("Added lowecase to options.");
        };
        if (passwordUppercase == true) {
          attArray += "U";
          confirmTotal++;
          console.log("Added uppercase to options.");
        };
        if (passwordNumeric == true) {
          attArray += "N";
          confirmTotal++;
          console.log("Added numerical chars to options.");
        };
        if (passwordSpecial == true) {
          attArray += "S";
          confirmTotal++;
          console.log("Added special chars to options.");
        };

        if (confirmTotal > 0) {
          console.log("Confirmed at least one attribute was selected.");
          confirmCheck = true;
        } else {
          alert("Please choose at least one attribute for your password.")
        }
      }

      console.log("Start generating Password with " + passwordLength + " chars.");
      while (confirmCheck == true) {

        if (confirmTotal < 1) {
          break;
        }
        //confirmTotal++;
        //Generate the Pass
        for (var z = 0; z < passwordLength; z++) {
          //console.log(z);
          //console.log(passwordLength);
          //Pick an attribute
          var randomSelect = Math.floor(Math.random() * confirmTotal);
          //console.log(randomSelect);
          var attVal = attArray[randomSelect];
          //console.log(attVal);

          if (attVal == "L") {
            //Lowercase
            var holder = alphabetical().toLowerCase();
            var temp = passwordFinal;
            passwordFinal = temp.concat(holder);

          } else if (attVal == "U") {
            //Uppercase
            var holder = alphabetical();
            var temp = passwordFinal;
            passwordFinal = temp.concat(holder);

          } else if (attVal == "N") {
            //Numeric
            var holder = numerical();
            var temp = passwordFinal;
            passwordFinal = temp.concat(holder);

          } else if (attVal == "S") {
            //Special
            var holder = specials();
            var temp = passwordFinal;
            passwordFinal = temp.concat(holder);
          }
        }
        confirmCheck = false;
      }

      console.log("Password Attributes:" + 
        "\n- Length:    " + passwordLength +
        "\n- Lowercase: " + passwordLowercase + 
        "\n- Uppercase: " + passwordUppercase + 
        "\n- Numeric:   " + passwordNumeric + 
        "\n- Special:   " + passwordSpecial);
      
      console.log(passwordFinal);
      return passwordFinal;
  }
}

//Function to call an alphabetical character.
function alphabetical () {
  var alphaArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z' ];
  var alphaLength = alphaArray.length;
  var randomAlpha = Math.floor(Math.random() * alphaLength);
  return alphaArray[randomAlpha];
}

//Function to call a numerical character.
function numerical () {
  var numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var numLength = numArray.length;
  var randomNum = Math.floor(Math.random() * numLength);
  return numArray[randomNum];
}

//Function to call a special character.
function specials () {
  var specialArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '_', '+', '<', '>', '/', '?', '|'];
  var specLength = specialArray.length;
  var randomSpec = Math.floor(Math.random() * specLength);
  return specialArray[randomSpec];
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
