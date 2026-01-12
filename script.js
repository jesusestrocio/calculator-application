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
let tempValueBracket = false ;
let tempValueSubract = false ;

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
        tempValueBracket = true
      }
      else if (usersButtonClick === '-'){
        if (tempValueBracket == true) {
          console.log('We Add Both ( and - to the number')
          tempValueSubract = true
        }
        else {
          console.log('Awaiting Number')
          tempValueSubract = true
        }
      }
      else {
        if (tempValueBracket !== false || tempValueSubract !== false ){
          console.log('Temp Values')
          if (tempValueBracket == false){
            let tempValueSubractString = '-' + usersButtonClick
            console.log(tempValueSubractString)
            usersArray.push(tempValueSubractString)
            console.log(usersArray)
            tempValueSubract = false
          } 
          else if (tempValueBracket == true && tempValueSubract == true){
            let tempValueBracketWithSubtract = '(-' + usersButtonClick + ')'
            usersArray.push(tempValueBracketWithSubtract)
            inputArea.value += ')'
            console.log(usersArray)
            tempValueBracket = false
            tempValueSubract = false
          }
          else {
            let tempValueBracketString = '(' + usersButtonClick + ')'
            usersArray.push(tempValueBracketString)
            inputArea.value += ')'
            console.log(usersArray)
            tempValueBracket = false
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
// [(-1), + , 1, - , (-1), *, 3]
// [2 * 9 + 6 - 8 / 7]
  if (usersButtonClick === '='){
    console.log('User Clicked =')
    let total = 0
    let tempValueOne = 0 ;
    let tempValueTwo = 0;
    let lenOfUserArray = usersArray.length
    let divide, multiply, add , subtract = false
    divide = true
    let i = 0;

    while (i < lenOfUserArray) {
      console.log('While Loop')

      if (divide == true) {
        if (usersArray[i + 1] === '/'){
          console.log(usersArray)
          tempValueOne = Number(usersArray[i])
          tempValueTwo = Number(usersArray [i + 2])
          total = tempValueOne / tempValueTwo
          console.log(total)
          if (i == usersArray.length - 3){
            usersArray[i] = String(total)
          }
          else {
            usersArray[i+2] = String(total)
          }
        }
        else if (i === usersArray.length - 1){
          console.log('Divide >> Multiply')
          divide = false
          multiply = true
          i = 0
        }
      }
      if (multiply === true){
        if (usersArray[i + 1] === '*'){
          console.log(usersArray)
          tempValueOne = Number(usersArray[i])
          tempValueTwo = Number(usersArray [i + 2])
          total = tempValueOne * tempValueTwo
          console.log(total)
          if (i == usersArray.length - 3){
            usersArray[i] = String(total)
          }
          else {
            usersArray[i+2] = String(total)
          }
        }
        else if (i === usersArray.length - 1){
          divide = false
          multiply = false
          add = true
          i = 0
        }
      }
      if (add === true){
      if (usersArray[i + 1] === '+'){
        console.log(usersArray)
        tempValueOne = Number(usersArray[i])
        tempValueTwo = Number(usersArray[i+2])
        total = tempValueOne + tempValueTwo
        console.log(total)
        if (i == usersArray.length - 3){
          usersArray[i] = String(total)
        }
        else {
          usersArray[i+2] = String(total)
        }
        }
        else if (i == usersArray.length - 1){
          divide = false
          multiply = false
          add = false
          subtract = true
          i = 0
        }
      }
      if (subtract === true){
        if (usersArray[i + 1] === '-'){
          console.log(usersArray)
          tempValueOne = Number(usersArray[i])
          tempValueTwo = Number(usersArray [i + 2])
          total = tempValueOne - tempValueTwo
          console.log(total)

          if (i == usersArray.length - 3){
            usersArray[i] = String(total)
          }
          else {
            usersArray[i+2] = String(total)
          }
        }
        else if (i == usersArray.length - 1){
          divide = false
          multiply = false
          add = false
          subtract = false
        }
      }
      i++
    }
  }

});





