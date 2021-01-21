    const readline = require("readline-sync");



    const num1 = parseInt (readline.question("Please enter the first number "));
    console.log(num1);
    const num2 = parseInt (readline.question("Please enter the second number "));
    console.log(num2);
    const nodeCalculator=(readline.question("Please enter the operation to perform: add, mul, div, sub "));
    console.log (nodeCalculator);


if (nodeCalculator==="add"){
    add(num1, num2)}
else if (nodeCalculator === "mul"){
    mul(num1, num2)}
else if (nodeCalculator === "div"){
    div(num1, num2)}
else if (nodeCalculator === "sub"){
    sub(num1, num2)}
else {console.log ("Try again")}


function add(num1, num2){
    console.log(`The result is ${num1 + num2}`)
}
function mul(num1, num2){
    console.log(`The result is ${num1 * num2}`)
}
function div(num1, num2){
    console.log(`The result is ${num1 / num2}`)
}
function sub(num1, num2){
    console.log(`The result is ${num1 - num2}`)
}