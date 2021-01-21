// Write a function that takes an array of numbers and returns the largest
function findMax(arr){
    let max = -Infinity
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > max) max = arr[i];
    }
    return max;
}
// console.log(findMax([3, 5, 2, 8, 1]))


// Write a function that takes an array of words and a character and returns each word that has that character present.
function lettersOrCharacters(arr, ch){
    const arr2 =[];
    for (let i = 0; i < arr.length; i ++){
        if (arr[i].indexOf(ch) >= 0) {
            arr2.push(arr[i]);
        }
    }
    return arr2;
}
// console.log(lettersOrCharacters(["#3", "$$$", "C%4!", "Hey!"], "!"))


// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
function isDivisible (num1, num2){
    return num1 % num2 === 0
}
console.log(isDivisible(4,2))
console.log(isDivisible(9,3))
console.log(isDivisible(15,4))