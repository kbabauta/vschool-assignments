/* #1 */

// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
// var amount = 0;

// for (let i = 0; i < officeItems.length; i++){
//   if (officeItems[i] === "computer"){
//      amount++;
//   }
// }
// console.log (amount);

/* #2 */
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]
  for (let i = 0; peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
      if (peopleWhoWantToSeeMadMaxFuryRoad.age >= 18){
          console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max")
      } else {
          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max")
      }
  } 