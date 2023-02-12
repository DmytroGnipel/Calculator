const digits = document.querySelectorAll('.digit')
const operators = document.querySelectorAll('.operator')
const display = document.querySelector('.display')
const power = document.getElementById('power')
const equals = document.querySelector('.equals')
const plusMinus = document.getElementById('plusMinus')
const clear = document.querySelector('.clear')
const backspace = document.getElementById('backspace')
const dot = document.getElementById('float')
let firstArgument = '0'
let secondArgument = ''
let operator
display.textContent = firstArgument

//work on keyboard
window.addEventListener('keydown', function(e) {
if (+e.key > 0 && +e.key < 11 || e.key === '0') addNumber (e.key)//append numbers
if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {//append operator
if (!secondArgument) addOperator(e.key)
    else {
    let result = equal(firstArgument, operator, secondArgument)
    operator = e.key
    }
}
if (e.key === '.') addDot(e.key)//append dot
if (e.key === 'Enter') {let result = equal(firstArgument, operator, secondArgument)}//output result
if (e.key === ' ') clearing()//reset
if (e.key === 'Backspace') backspacing()//backspace
if (e.key === 'End') changeSign()//plusMinus
if (e.key === 'Escape') onOff ()//onOff
})

//work on screen
for (let elem of digits) {//append numbers
    elem.addEventListener('click', function () {addNumber(this.textContent)
    })
}

for (let elem of operators) {//append operator and output result
    elem.addEventListener('click', function(){
        if (!secondArgument) addOperator (this.textContent) // set up operator   
        else {let result = equal(firstArgument, operator, secondArgument) //output result
        }             
    })
}

dot.addEventListener('click', function() {//append dot
    addDot()
})

equals.addEventListener('click', function() {//output result
    let result = equal(firstArgument, operator, secondArgument)
})

clear.addEventListener('click', function() {//reset
    clearing()
})

backspace.addEventListener('click', function(){//backspace
    backspacing()
})

plusMinus.addEventListener('click', function(){//plusMinus
    changeSign()
})

power.addEventListener('click', function(){//onOff
    onOff()
})
//FUNCTIONS
function addNumber (content) {
    if (!operator) {firstArgument = Number(firstArgument + content).toString()
    limiting(firstArgument)
    }
    else {secondArgument += content
    limiting(secondArgument)
    }
}
function addOperator (content) { // add operator
    operator = content
}
function equal (a, operator, b) {
    if (secondArgument){
    firstArgument = operate (a, operator, b)
    secondArgument = ''
    trimmingResult(firstArgument.toString())
    return firstArgument
    }
}
function clearing() {
    firstArgument = '0'
    secondArgument = ''
    operator = undefined
    display.textContent = firstArgument
}
function backspacing() {
    function clean (argument) {
    return argument.toString().split('').slice(0, argument.toString().split('').length - 1).join('')
}
    if (!operator && firstArgument !== '0') {
    firstArgument = clean(firstArgument)
    if (firstArgument.length === 0) firstArgument = '0'
    display.textContent = firstArgument
}
    else if (secondArgument) {
    secondArgument = clean(secondArgument)
    if (secondArgument.length === 0) secondArgument = '0'
    display.textContent = secondArgument
}
}
function changeSign() {
    if (!operator && firstArgument !== '0'){
    firstArgument = -firstArgument
    display.textContent = firstArgument
}
    else if (secondArgument){
    secondArgument = -secondArgument
    display.textContent = secondArgument
}
}
function onOff() {
    display.classList.toggle('off')
    clearing()
}
function addDot() {
    if (!operator && !firstArgument.includes('.')){
    firstArgument += '.'
    display.textContent = firstArgument
    }
    else if (secondArgument && operator && !secondArgument.includes('.')) {
    secondArgument += '.'
    display.textContent = secondArgument
    }
}
function limiting(string) {
    if (string.length < 13) display.textContent = string
}
function trimmingResult(result) {
    if (result.length < 13) display.textContent = result
    else {
        if (!result.includes('.')) display.textContent = 'toBigNumbers'
        else {
            result = (+result).toFixed(11 - result.split('.')[0].length)
            display.textContent = result
        }
    }
}
//math functions
let add = (a, b) => {return +a + +b}
let subtract = (a, b) => {return +a - +b}
let multiply = (a, b) => {return +a * +b}
let divide = (a, b) => {if (b !== '0') return a/b
else return 'ERROR!!!'}

let operate = (a, operator, b) => {
    if (operator === '+') return add (a, b)
    if (operator === '-') return subtract (a, b)
    if (operator === '*') return multiply (a, b)
    if (operator === '/') return divide (a, b)
}












































    

