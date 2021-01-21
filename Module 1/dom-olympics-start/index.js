let headerContainer = document.getElementById('header')

let h1 = document.createElement('h1')
let p = document.createElement('p')
let span = document.createElement('span')

span.style.color = 'gold'

h1.textContent = 'Javascript Made This!!'
span.textContent = 'Kevin'
let pText = document.createTextNode(' wrote this Javascript!')

p.appendChild(span)
p.appendChild(pText)
headerContainer.appendChild(h1)
headerContainer.appendChild(p)


