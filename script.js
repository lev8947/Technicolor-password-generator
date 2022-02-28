// Assignment Code

const generateBtn = document.querySelector("#generate");
const spanPasswordLength = document.getElementById("span-length-display");
const inputPasswordLength = document.getElementById("input-length");
const inputLowercase = document.getElementById("input-lowercase");
const inputUppercase = document.getElementById("input-uppercase");
const inputSymbols = document.getElementById("input-symbols");
const inputNumbers = document.getElementById("input-numbers");


setPasswordLengthSpan();

function setPasswordLengthSpan(){
    //grab the value of input
  const passwordLength = inputPasswordLength.value

  //change the text content of span
  spanPasswordLength.textContent = passwordLength;
};
//when I change the slider
inputPasswordLength.addEventListener('input', function(event){

  //the span password length should be updated
setPasswordLengthSpan();

});

const lowercaseSet = "abcdefghijklmnopqrstuvwxyz";
const uppercaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbersSet = "1234567890";
const symbolsSet = "!#$%&'()*+,-./:;<=>?@][_`{|}~";



// When I click on the generate button
generateBtn.addEventListener('click', function(event){


//The app will ask my password length 
  const passwordLength = Number (inputPasswordLength.value);
  console.log(passwordLength);

//It will ask if I want to use (done in html): 

let charset = "";

// lowercase
const wantsLowercase = inputLowercase.checked;
// uppercase
const wantsUppercase = inputUppercase.checked;
// symbols
const wantsSymbols = inputSymbols.checked;
// numbers
const wantsNumbers = inputNumbers.checked;


//in my password


//Once I have selected all the options

if(wantsLowercase){
  charset = charset + lowercaseSet;
}
if(wantsUppercase){
  charset = charset + uppercaseSet;
}
if(wantsNumbers){
  charset = charset + numbersSet;
}
if(wantsSymbols){
  charset = charset + symbolsSet;
}
//Then the app should generate a password based on options

let password = ""

//loop for password length times,
for (let index = 0; index < passwordLength; index++) {
//for each iteration,
//we will generate a random characted from the charset chosen
const randomIndex = Math.floor(Math.random() * charset.length);

const randomChar = charset[randomIndex];
//then we will add this random char to accumulator
  password = password + randomChar;
}


//Then show the generated password in text area

})