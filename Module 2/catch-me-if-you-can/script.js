// 1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:

function sum(x, y){
    //check data types first and throw error
    try {
        if (isNaN(x) || isNaN(y))
        throw Error ("Function only accepts numbers")
    } catch (error) {
        console.log(error)
    }
    return x + y
}

console.log(sum(1,2));
sum("1", "2two");
// 1b) Call the sum function inside a try block using "1" and "2" as arguments. Use console.log within a catch block to inform the user of the error.
// 2a) Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"
var user = {username: "sam", password: "123abc"};
function login(username, password){
  //check credentials
  try {
      if (user.username !== username || user.password !== password)
        throw Error ("Your username or password is invalid")
  } catch (error) {
      return error
  }
  return "Login Accepted"
}
console.log(login("tyler", "password123"))
console.log(login("fred", "hello231"))
console.log(login("username", "password"))