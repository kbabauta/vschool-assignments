var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// console.log ("fruit: ", fruit);
// console.log ("vegetables: ", vegetables);

/* 1. Removes last item from the array */ 
vegetables.pop();
// console.log ("vegetables: ", vegetables);

/* 2. Removes first item from the array */
fruit.shift();
// console.log ("fruit: ", fruit);

/* 3. Finding the index of "orange". */ 
var indexOrange = fruit.indexOf("orange");
// console.log ("fruit: ", fruit);
// console.log(indexOrange);

/* 4. Adding number from index to end of the "fruit" array */
// console.log ("fruit: ", fruit);
fruit.push("2");
// console.log ("fruit: ", fruit);

/* 5. Using length property to find the length of vegetable array*/
console.log (vegetables.length);

/* 6. Adding number to end of vegetable array */
vegetables.push("4")
// console.log (vegetables)

/* 7. Putting two arrays together into one array. (Fruit first) */
var newArr = fruit.concat(vegetables);
// console.log (newArr)

/* 8. Remove 2 elements from new array */
newArr.splice(4, 2);
// console.log(newArr)

/* 9. Reverse array */
newArr.reverse();
// console.log(newArr);

/* 10. Turn array into a string and return it */
newArr.join(",");
console.log(newArr);