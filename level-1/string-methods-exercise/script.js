function capitalizeAndLowercase(word){
    return (word.toUpperCase() + word.lowerCase())
}

function findMiddleIndex(word){
    return Math.floor(word.length/2);
}

function returnFirstHalf(word){
    return word.slice(0, findMiddleIndex(word));
}

function capitalizeAndLowercase(word){
    return word.slice(0, findMiddleIndex(word)).toUpperCase() +
        word.slice(findMiddleIndex(word), word.length).toLowerCase();
}

console.log(capitalizeAndLowercase("Hello"));
console.log(findMiddleIndex("Hello"));
console.log(returnFirstHalf("Hello"));
console.log(capitalizeAndLowercase("Hello World"));