
let userOutput = document.querySelector('.input-area')

let openBracketButton = document.getElementById("open-bracket");
let closeBracketButton = document.getElementById("close-bracket");

let percentageButton = document.getElementById("percentage");
let divisionButton = document.getElementById("division");
let multiplcationButton = document.getElementById("multiplication");
let subtractionButton = document.getElementById("subtraction");
let additionButton = document.getElementById("addition");

let decimalButton = document.getElementById("decimal");

let equalButton = document.getElementById("equals");

let answerButton = document.getElementById("answer");

let clearButton = document.getElementById("clear");

let userClicks = document.querySelectorAll('.arithmetic-operator')

let getNumber = document.querySelectorAll(".number")
let getOperator = document.querySelectorAll(".operator")

closeBracketButton.disabled = true;
// subtractionButton.disabled = true;


subtractionButton.addEventListener("click", function () {
  console.log('Subtract Button Clicked -(Number)')

  let preValueInString = userOutput.value.substring(0, userOutput.value.length - 1)

  console.log(preValueInString)

  if (preValueInString == "("){
    subtractionButton.disabled = false;
  } 
  else if (preValueInString == "-"){
    subtractionButton.disabled = true;
  }
  else if (preValueInString == "."){
    subtractionButton.disabled = true;
  }

})

function disabledOperator(booleanParameter){
  console.log('Disable Function For All Operators')
  getOperator.forEach(eachOperator => {
    eachOperator.disabled = booleanParameter;
  })

  if (userOutput.value.length == 0) {
    subtractionButton.disabled = false;
  }

}
disabledOperator(true)


userClicks.forEach((eachClick) => {
  eachClick.addEventListener('click', function(e){
    // console.log(e.target.value)
    userOutput.value += e.target.value;
    console.log(userOutput.value.length, userOutput.value)
  
  })
})

equalButton.addEventListener("click", function () {
  console.log('Equal button clicked')

  if (userOutput.value.length == 0){
    equalButton.disabled = true;
    console.log("Equal Button Disabled")
  }
  else (
    console.log("Call A Function To Calculate The Equation")
  )

})
  
clearButton.addEventListener("click", function () {
  console.log('delete button clicked')

  if (userOutput.value.length == 0){
    clearButton.disabled = true;
    console.log("Clear Button Disabled")
  }
  else {
      let newUserOutput = userOutput.value.substring(0, userOutput.value.length - 1)
      userOutput.value = newUserOutput
      clearButton.disabled = false;
      disabledOperator(true)
  }

})


openBracketButton.addEventListener("click", function () {
  console.log('open-bracket clicked')
  // userOutput.value += '(';

  openBracketButton.disabled = true;
  closeBracketButton.disabled = false;

  disabledOperator(false)

})


closeBracketButton.addEventListener("click", function () {
  
  if (userOutput.value[userOutput.value.length - 2] == '(' ||
    userOutput.value == ""
  ){
    console.log('Here')
    closeBracketButton.disabled = true;
    let newUserOutput = userOutput.value.substring(0, userOutput.value.length - 1)
    userOutput.value = newUserOutput
  }
  else {
    closeBracketButton.disabled = true;
    openBracketButton.disabled = false;
  }

})


getNumber.forEach(eachNumber => {
  eachNumber.addEventListener('click', function(e){
    console.log(e.target.value)

  disabledOperator(false)
  closeBracketButton.disabled = false;
  })
})

getOperator.forEach(eachOperator => {
  eachOperator.addEventListener('click', function(e){
    console.log(e.target.value)

    disabledOperator(true)
    closeBracketButton.disabled = true;

    if (e.target.value === '%'){
      closeBracketButton.disabled = false;

    }

  })
})

// percentageButton.addEventListener("click", function () {
//   console.log('close-bracket clicked')
//   userOutput.value += '%';
// })

// divisionButton.addEventListener("click", function () {
//   console.log('close-bracket clicked')
//   userOutput.value += '/';
// })

// multiplcationButton.addEventListener("click", function () {
//   console.log('close-bracket clicked')
//   userOutput.value += 'X';
// })

// subtractionButton.addEventListener("click", function () {
//   console.log('close-bracket clicked')
//   userOutput.value += '-';
// })

// additionButton.addEventListener("click", function () {
//   console.log('close-bracket clicked')
//   userOutput.value += '+';
// })

// answerButton.addEventListener("click", function () {
//   console.log('close-bracket clicked')
//   userOutput.value += '<--In Progress';
// })

// decimalButton.addEventListener("click", function () {
//   console.log('close-bracket clicked')
//   userOutput.value += '.';
// })


// let userClick = document.querySelectorAll('.arithmetic-operator')

// console.log(userClick)