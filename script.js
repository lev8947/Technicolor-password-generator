const generateBtn = document.querySelector("#generate");
const spanPasswordLength = document.getElementById("span-length-display");
const inputPasswordLength = document.getElementById("input-length");
const inputLcase = document.getElementById("input-lcase");
const inputUcase = document.getElementById("input-ucase");
const inputSymbols = document.getElementById("input-symbols");
const inputNumbers = document.getElementById("input-numbers");
const textareaPassword = document.getElementById("password");
const error = document.getElementById("error");

setPasswordLengthSpan();

function setPasswordLengthSpan(){
    //grab the value of input
  const passwordLength = inputPasswordLength.value

  //change the text content of span
  spanPasswordLength.textContent = passwordLength;
};
//when I move the slider
inputPasswordLength.addEventListener('input', function(event){

  //the span password length should be updated
setPasswordLengthSpan();

});
  //The password will consist of:
const LcaseSet = "abcdefghijklmnopqrstuvwxyz";
const UcaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbersSet = "1234567890";
const symbolsSet = "!#$%&'()*+,-./:;<=>?@][_`{|}~";

// User click on the generate button
generateBtn.addEventListener('click', function(event){

//The app will ask my password length 
  const passwordLength = Number (inputPasswordLength.value);
  console.log(passwordLength);

//And it will ask if I want to use the checked sets

let charset = "";

// lowercase
const wantsLcase = inputLcase.checked;
// uppercase
const wantsUcase = inputUcase.checked;
// symbols
const wantsSymbols = inputSymbols.checked;
// numbers
const wantsNumbers = inputNumbers.checked;

//in my password
error.textContent = "";

//If the user does not make any selections then:
if(!wantsLcase && !wantsUcase && !wantsNumbers && !wantsSymbols){
  //throw error
error.textContent = "Make a selection you peanut ☺"
return;
}
//Once the user has selected a variation of their choice of the following options
if(wantsLcase){
  charset = charset + LcaseSet;
}
if(wantsUcase){
  charset = charset + UcaseSet;
}
if(wantsNumbers){
  charset = charset + numbersSet;
}
if(wantsSymbols){
  charset = charset + symbolsSet;
}
//Then the app should generate a password based on the users preference
let password = ""

//loop for password length times,
for (let index = 0; index < passwordLength; index++) {
//for each iteration,
//we will generate a random character from the character set chosen
const randomIndex = Math.floor(Math.random() * charset.length);

const randomChar = charset[randomIndex];
//then we will add this random character to accumulator
  password = password + randomChar;
}
//Then show the generated password in text area.
textareaPassword.textContent = password;
})