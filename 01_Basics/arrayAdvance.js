let arrayFirst = ["hitesh","Ramesh"]
let arraySecond = ["himanshu","shivam"]

arrayFirst.push(arraySecond)
//console.log(arrayFirst)

let arrayCocatinated = arrayFirst.concat(arraySecond)
//console.log(arrayCocatinated)

let newArray = [1,2,3,[4,5,6,7],[8,[9,[10,11,[12,13,14]]]],15,16,17]

let flatArray = newArray.flat(Infinity)

//console.log(flatArray)

let arrayScore1 = [1,2,3,4]
let arrayScore2 = [5,6,7]
let arrayScore3 = [8,9,10]

let spreadedArray = [...arrayScore1,...arrayScore2,...arrayScore3]

console.log(spreadedArray)

let str = "Hitesh"

// console.log(Array.isArray(str))
// console.log(Array.from(str))

console.log(Array.from({name:"Hitesh"})) // it will give empty array bcz not getting what to do

console.log(Array.of(arrayScore1,arrayScore2,arrayScore3))


console.log(Array.of(...arrayScore1,...arrayScore2,...arrayScore3)) // Three dots will be spraed operator




