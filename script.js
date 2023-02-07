//create functions
let add = (a, b) => {return +a + +b}
let subtract = (a, b) => {return +a - +b}
let multiply = (a, b) => {return +a * +b}
let divide = (a, b) => {if (b !== '0') return a/b
else return 'ERROR!!!'}

let operate = (a, operator, b) => {
    if (operator === '+') return add (a, b)
    if (operator === '-') return subtract (a, b)
    if (operator === 'x') return multiply (a, b)
    if (operator === '/') return divide (a, b)
}

let display = document.querySelector('.display')
let a
let b = ''
let operator = ''
let subA = '0'
display.textContent = 0

let power = document.getElementById('power')
power.addEventListener('click', function() {
    display.classList.toggle('off')
    b = ''
    operator = ''
    subA = '0'
    display.textContent = 0
})

//in the moment of pressing digit or dot
function pressDigitOrDot () {
let digits = document.querySelectorAll('.digit')
for (let elem of digits)
elem.addEventListener('click', function() {
    

    if (a)//operator was pressed
    {if (b.length < 12) {//limiting length of the first argument
        if (this.textContent === '.' && b && !b.includes('.')) {
        b += '.'
        display.textContent += '.' }
      else if (this.textContent !== '.'){
    b += this.textContent
    display.textContent = b
} 
}
    }
    else {//operator wasn't pressed yet
        if (subA.length < 13) {//limiting length of the second argument
        if (this.textContent === '.' && !subA.includes('.')) {//add 'float point'
            subA += '.'
            display.textContent += '.' 
        }
        else if (this.textContent !== '.'){
        subA += this.textContent
    display.textContent = +subA
}
    }
    }
}
)
}
pressDigitOrDot()

function pressOperator () {
//in the moment of pressing operator
let operators = document.querySelectorAll('.operator')
for (let elem of operators)
elem.addEventListener('click', function() {
if (b) {let result = (operate (a, operator, b))//show result on screen when there are both arguments
if (result > 999999999999) {result = 'TooBigNumb'}
let array = result.toString().split('.')
if (result.toString().length > 12){
console.log(11 - array[0].length)
result = result.toFixed(11 - array[0].length)
}
subA = `${result}`
display.textContent = subA
b = ''
} 
a = subA//create first argument and show it in display
operator = this.textContent
})
}
pressOperator()

function pressEquals () {
let equals = document.querySelector('.equals')
equals.addEventListener('click', function () {
if (b) {let result = (operate (a, operator, b))
if (result > 999999999999) {result = 'TooBigNumb'}
let array = result.toString().split('.')
if (result.toString().length > 12){
console.log(11 - array[0].length)
result = result.toFixed(11 - array[0].length)
}
subA = `${result}`
display.textContent = subA
b = ''
} 
})
}
pressEquals()

function clear () {
let clear = document.querySelector('.clear')
clear.addEventListener('click', function(){
    a = undefined
    b = ''
    operator = ''
    subA = '0'
    display.textContent = 0
})
}
clear()

function backspace () {
    let backspace = document.getElementById('backspace')
    backspace.addEventListener('click', function (){
        if (subA && !a){
            subA = subA.split('').slice(0, subA.split('').length -1).join('')
            display.textContent = +subA
        }
        else if (b) {
            b = b.split('').slice(0, b.split('').length -1).join('')
            display.textContent = +b
        }
    })
}
backspace()

function switchMinusPlus () {
    let plusMinus = document.getElementById('plusMinus')
    let counter = 1
    plusMinus.addEventListener('click', function(){
        //until operator became pressed
        if (!a && !b && subA){
            subA = -subA
            display.textContent = subA       
}
//after operator became pressed
else if (b) {
    b = -b
            display.textContent = b
}
})
}
switchMinusPlus ()





    

