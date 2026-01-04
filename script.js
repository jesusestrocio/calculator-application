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

let invalidButtonMap = {}
invalidButtonMap[')'] = 'value )';
invalidButtonMap['%'] = 'value %';
invalidButtonMap['/'] = 'value /';
invalidButtonMap['*'] = 'value *';
invalidButtonMap['+'] = 'value +';
invalidButtonMap['='] = 'value =';


let operatorButtonMap = {}
operatorButtonMap['/'] = 'value /';
operatorButtonMap['*'] = 'value *';
operatorButtonMap['-'] = 'value -';
operatorButtonMap['+'] = 'value +';


let inputField = '' ;

// 
// + I need to ensure only the allowed keys can be pressed on the keyboard using the below function
//
document.addEventListener("keydown", function(event){
  console.log(event.key)

});

let buttonClicked = document.querySelectorAll(".arithmetic-operator")
let inputArea = document.querySelector(".input-area")
let usersArray = []
let numberN = '';
let tempValueBracket = ''
let tempValueSubract = ''

document.addEventListener("click", function(event) {
  let usersButtonClick = event.target.innerHTML;


  if (usersArray.length % 2 == 0){
    console.log("validates")
  }

  if (usersButtonClick in map && usersArray.length % 2 === 0){
    console.log("3 And Validation")
    if (usersButtonClick in invalidButtonMap ){
      inputArea.value = 'Error!'
      console.log('Error!')
    }
    else {
      inputArea.value += usersButtonClick
      if (usersButtonClick === '('){
        console.log('Awaiting Number')
        tempValueBracket = '( )'
      }
      else if (usersButtonClick === '-'){
        if (tempValueBracket !== ''){
          tempValueBracket = '(-'
        }
        else {
          console.log('Awaiting Number')
          tempValueSubract = '- '
        }
      }
      else {
        if (tempValueBracket !== '' || tempValueSubract !== ''){
          console.log('Temp Values')
          if (tempValueBracket == ''){
            tempValueSubract = tempValueSubract + usersButtonClick
            console.log(tempValueSubract)
            usersArray.push(tempValueSubract)
            console.log(usersArray)
            tempValueSubract = ''
          } 
          else if (tempValueBracket.length > 1){
            tempValueBracket = '(-' + usersButtonClick + ')'
            usersArray.push(tempValueBracket)
            inputArea.value += ')'
            console.log(usersArray)
            tempValueBracket = ''
          }
          else {
            tempValueBracket = '(' + usersButtonClick + ')'
            usersArray.push(tempValueBracket)
            inputArea.value += ')'
            console.log(usersArray)
            tempValueBracket = ''
          }
        }
        else {
          usersArray.push(usersButtonClick)
          console.log(usersArray)
        }
      }
    }
  }
  else if (usersButtonClick in operatorButtonMap && usersButtonClick !== '=') {
    usersArray.push(usersButtonClick)
    console.log(usersArray)
  }

  if (usersButtonClick === '='){
    console.log('User Clicked =')
    let total = 0
    for (let i = 0; i > usersArray; i++){

    if (i % 2 == 0){
      if (usersArray[i][0] === '(' || usersArray[i][0] === '-'){
        total = Number(usersArray[1])
      }
      else if (usersArray[i][1] == '-'){
        total = Number(usersArray[2]) 
      }
      else {
        total = Number(usersArray[i])
      }
    }
      if (usersArray[i] == '-'){
        total -= Number(usersArray[i+1])
      }
      
      else if (usersArray[i] == '+'){
        total += Number(usersArray[i+1])
      }

      else if (usersArray[i] == '*'){
        total *= Number(usersArray[i+1])
      }

      else if (usersArray[i] == ''){
        total /= Number(usersArray[i+1])
      }

    } 
  }

});





