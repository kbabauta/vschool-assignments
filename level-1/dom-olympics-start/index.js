// let headerContainer = document.getElementById('header')

// let h1 = document.createElement('h1')
// let p = document.createElement('p')
// let span = document.createElement('span')

// span.style.color = 'gold'

// h1.textContent = 'Javascript Made This!!'
// span.textContent = 'Kevin'
// let pText = document.createTextNode(' wrote this Javascript!')

// p.appendChild(span)
// p.appendChild(pText)
// headerContainer.appendChild(h1)
// headerContainer.appendChild(p)

const h1 = document.createElement("h1")
h1.textContent = "JavaScript Made This!"
h1.className = "header"
document.getElementById("header").appendChild(h1)

const subTitle = document.createElement("subTitle")
subTitle.innerHTML = '<span class="name">Kevin</span> wrote the Javascript'
subTitle.className = "header"
document.getElementById("header").appendChild(subTitle)