var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabet){

    let result = []
    for (let i = 0; i < people.length; i++){
        result[i] = people[i] + ": "
        
        for (let j = 0; j < alphabet.length; j++){
            let letter = []
            letter = alphabet[j] + " "
            result[i] += letter
        }
    }
    console.log(result.join("").split(" "))
}
