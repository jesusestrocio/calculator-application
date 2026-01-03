// Add all valid values in a hash map
let map = {};

map['0'] = 'value 0';
map['1'] = 'value 1';
map['2'] = 'value 2';
map['3'] = 'value 3';
map['4'] = 'value 4';
map['5'] = 'value 5';
map['6'] = 'value 6';
map['7'] = 'value 7';
map['8'] = 'value 8';
map['9'] = 'value 9';

map['('] = 'value (';
map[')'] = 'value )';
map['%'] = 'value %';
map['/'] = 'value /';
map['*'] = 'value *';
map['-'] = 'value -';
map['+'] = 'value +';
map['.'] = 'value .';

map['Backspace'] = 'value backshift';
map['='] = 'value =';
// map['Shift'] = 'value shift';

let inputField = '' ;

// 
// + I need to ensure only the allowed keys can be pressed on the keyboard usinf the below function
//
document.addEventListener("keydown", function(event){
  console.log(event.key)

});

let buttonClicked = document.querySelectorAll(".arithmetic-operator")
let inputArea = document.querySelector(".input-area")
let additionalArray = []
let numberN = '';

document.addEventListener("click", function(event) {
  console.log(event.target.innerHTML)

  let userInput = event.target.innerHTML

  if (userInput in map){
    console.log('True', userInput)
    if (userInput !== '+' && userInput !== '='){
      console.log("Addition Has NOT Been Hit")
      numberN += userInput
      console.log(numberN)
    }
    if (userInput === '+'){
      additionalArray.push(numberN)
      numberN = '';
      console.log(additionalArray)
    }
    if (userInput === '='){
      additionalArray.push(numberN)
      console.log(additionalArray)
      numberN = ''
      inputArea.value = addNumbers(additionalArray)
      console.log(addNumbers(additionalArray))
    }
  }
});

// function validation(userInput){
//   if ( userInput !== '+' 
//     && userInput !== '=' 
//     && userInput !== ')'){
//     return true 
//   }
//   return false
// }

function addNumbers (arrayOfNumbers) {
  let total = 0;
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    total += Number(additionalArray[i])
  }
  return total;
}

function subtractNumbers (arrayOfNumbers) {
  let total = 0;
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    total -= Number(additionalArray[i])
  }
  return total;
}