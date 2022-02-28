// Assignment Code

const generateBtn = document.querySelector("#generate");
const inputPasswordLength = document.getElementById("input-length");
const spanPasswordLength = document.getElementById("span-length-display");

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

//The app will ask my password length 

//It will ask if I want to use:

// lowercase

// uppercase

// symbols

// numbers

//in my password


//Once I have selected all the options

//Then the app should generate a password

//Then show the generated password in text area

})