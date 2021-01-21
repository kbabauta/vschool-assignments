/* Preliminaries */

// 1.
for (let i = 0; i <= 9; i++){
    // console.log (i);
}

// 2.
for (let i = 9; i >= 0; i--){
    // console.log (i)
}

// 3.


/* Bronze Medal */
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
for (var k = 0; k < fruit.length-1; k+=2){
    // console.log(fruit[k])
}


/* Silver Medal */
var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

// peopleArray.forEach(element => console.log(element.name));

let names = [];
let occupations = [];

for (person of peopleArray){
    names.push(person.name);
    occupations.push(person.occupation);
}

let namesTwo = [];
let occupationsTwo = [];

for (let i =0; i < peopleArray.length; i++){
    if (i % 2 === 0) namesTwo.push(peopleArray[i].name);
    else occupationsTwo.push(peopleArray[i].occupation);
}

//   // ["Harrison Ford", "Vladimir Putin"] // names
//   // ["Singer", "Entertainer"] // occupations


/* Gold */
let arr2 = [];

for (let i = 0; i < 3; i++){
  arr2[i] = [];
  for (let j = 0; j < 3; j++){
    arr2[i][j] = 0;
  }
  console.log(arr2[i]);
}

let arr3 = [];

for (let i = 0; i < 3; i++){
    arr3[i] = [];
    for (let j = 0; j < 3; j++){
      arr3[i][j]
    }
    console.log(arr3[i])
}

let arr4 = [];

for (let i = 0; i < 3; i++){
  arr4[i] = [];
  for (let j = 0; j < 3; j++){
    arr4[i][j] = j;
  }
  console.log(arr4[i]);
}

for (let i = 0; i < 3; i++){
  arr4[i] = [];
  for (let j = 0; j < 3; j++){
    arr4[i][j] = 'x';
  }
  console.log(arr4[i]);
}