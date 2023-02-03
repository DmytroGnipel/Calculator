//create functions
let add = (a, b) => {return +a + +b}
let subtract = (a, b) => {return +a - +b}
let multiply = (a, b) => {return +a * +b}
let divide = (a, b) => {return +a / +b}

let operate = (a, operator, b) => {
    if (operator === '+') return add (a, b)
    if (operator === '-') return subtract (a, b)
    if (operator === 'x') return multiply (a, b)
    if (operator === '/') return divide (a, b)
}

let display = document.querySelector('.display')
display.textContent = '0'
// clearing
let clear =  document.querySelector('.clear')
clear.addEventListener('click', function () {
    display.textContent = '0'
})

let onDisplays = document.getElementsByClassName('onDisplay')
for (let elem of onDisplays) {
        elem.addEventListener('click', function () {
if (display.textContent !== '0') display.textContent += this.textContent
else {display.textContent = this.textContent}
    })
   
}

let equals = document.querySelector('.equals')
equals.addEventListener('click', function() {
    let preArray = display.textContent.split(/(?=[+-/x])/g)
    console.log(preArray)

    let array = [preArray[0], preArray[1].split('').shift(), preArray[1].split('').slice(1).join('')]
       if (preArray.length === 2
        && array[0] - array[0] === 0
        && array[2] - array[2] === 0
        ){
display.textContent = operate(array[0], array[1], array[2])

}
})