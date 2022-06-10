const formAdd = document.addition
const formSub = document.subtract
const formMul = document.multiply

formAdd.addEventListener("submit", function(e){
    e.preventDefault()

    var firstNum = parseInt (formAdd.numOne.value)
    var secondNum = parseInt (formAdd.numTwo.value)
    firstNum.value = ""
    secondNum.value = ""

    const result = firstNum + secondNum

    const p = document.createElement('p')
    p.textContent = result
    document.getElementById("sum").append(p)
})


formSub.addEventListener("submit", function(e){
    e.preventDefault()

    var firstNum = parseInt (formSub.numOne.value)
    var secondNum = parseInt (formSub.numTwo.value)
    firstNum.value = ""
    secondNum.value = ""

    const result = firstNum - secondNum

    const p = document.createElement('p')
    p.textContent = result
    document.getElementById("difference").append(p)
})

formMul.addEventListener("submit", function(e){
    e.preventDefault()

    var firstNum = parseInt(formMul.numOne.value)
    var secondNum = parseInt(formMul.numTwo.value)
    
    const result = firstNum * secondNum

    const p = document.createElement('p')
    p.textContent = result
    document.getElementById("product").append(p)
})