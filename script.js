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

// When I click on the generate button
generateBtn.addEventListener('click', function(event){

  console.log(event);

//The app will ask my password length 
  const passwordLength = Number (inputPasswordLength.value);
  console.log(passwordLength);

//It will ask if I want to use (done in html): 

// lowercase
const wantsLowercase = inputLowercase.checked;
// uppercase
const wantsUppercase = inputUppercase.checked;
// symbols
const wantsSymbols = inputSymbols.checked;
// numbers
const wantsNumbers = inputNumbers.checked;

console.log(wantsLowercase, wantsUppercase, wantsSymbols, wantsNumbers);







//in my password


//Once I have selected all the options

//Then the app should generate a password based on options

//Then show the generated password in text area

})