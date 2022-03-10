// Assignment Code
var generateBtn = document.querySelector("#generate");

var enter;
var confirmNumber;
var confirmLowercase;
var confirmUppercase;
var confirmSpecCharacter;

specCharacter = ["!", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "`", "~", "<", ">", ".", "/", "?", ";", ":", "[", "]", "{", "}", "|"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var selection;
var toUpper = function (x) {
    return x.toUpperCase ();
};

alphabet2 = alphabet.map(toUpper);

// Write password to the #password input
function generatePassword() {
  enter = parseInt (prompt ("How many characters would you like your random password to be? Choose a value between 8 and 128."));
  if (!enter) {
    alert ("This requires a value between 8 and 128");

  } else if (enter < 8 || enter > 128) {
      enter = parseInt (prompt ("Value must be between 8 and 128"));

  } else {
      confirmLowercase = confirm ("Would you like the password to contain lowercase letters?");
      confirmUppercase = confirm ("Would you like the password to contain uppercase letters?");
      confirmNumber = confirm ("Would you like the password to contain numbers?");
      confirmSpecCharacter = confirm ("Would you like the password to contain special characters?");
  };
  
  if (!confirmLowercase && !confirmUppercase && !confirmNumber && !confirmSpecCharacter) {
    selection = alert ("You must choose at least one criteria!");
  }
  
  else if (confirmLowercase && confirmUppercase && confirmNumber && confirmSpecCharacter) {
    selection = number.concat (alphabet, alphabet2, specCharacter); 
  }
  
  else if (confirmLowercase && confirmUppercase && confirmNumber) {
    selection = number.concat (alphabet, alphabet2);
  }

  else if (confirmLowercase && confirmUppercase && confirmSpecCharacter) {
    selection = specCharacter.concat (alphabet, alphabet2);
  }

  else if (confirmLowercase && confirmNumber && confirmSpecCharacter) {
    selection = number.concat (alphabet, specCharacter);
  }

  else if (confirmUppercase && confirmNumber && confirmSpecCharacter) {
    selection = number.concat (alphabet2, specCharacter);
  }
  
  else if (confirmLowercase && confirmUppercase) {
    selection = alphabet.concat (alphabet2);
  }

  else if (confirmLowercase && confirmNumber) {
    selection = alphabet.concat (number);
  }

  else if (confirmLowercase && confirmSpecCharacter) {
    selection = alphabet.concat (specCharacter);
  }

  else if (confirmUppercase && confirmNumber) {
    selection = alphabet2.concat (number);
  }

  else if (confirmUppercase && confirmSpecCharacter) {
    selection = alphabet2.concat (specCharacter);
  }

  else if (confirmNumber && confirmSpecCharacter) {
    selection = number.concat (specCharacter);
  }
  
  else if (confirmLowercase) {
    selection = alphabet;
  }

  else if (confirmUppercase) {
    selection = alphabet2;
  }

  else if (confirmNumber) {
    selection = number;
  }

  else if (confirmSpecCharacter) {
    selection = specCharacter;
  };

  var password = [];
  for (var i = 0; i < enter; i++) {
      var pickSelection = selection[Math.floor(Math.random() * selection.length)];
      password.push(pickSelection);
  }
  var passwordText = password.join("");
  UserInput(passwordText);
  return passwordText;
}

function UserInput(passwordText) {
    document.getElementById("password").textContent = passwordText;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  password = generatePassword ();
  document.getElementById("password").placeholder = passwordText;
});