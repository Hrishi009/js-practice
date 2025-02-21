//Premitive Data type always on Stack memory

let firstComment = "Abhijeet"
let email = "abhijeet@yopmail.com"
let SecondComment = firstComment // Copoied

firstComment = "Amit"

console.log(firstComment)
console.log(SecondComment)



///Non premitive data is always passed by reference stored in Heap memory
let details = {
    name: "Ashok",
    emailOb : "ashok@yopmail.com" 
}


let firstObj = details

firstObj.emailOb = "bizruptor@yopmail.com"
details.emailOb = "adit@yopmail.com"

console.log(firstObj.emailOb)
console.log(details.emailOb)


