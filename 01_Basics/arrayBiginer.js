let arrFirst = [0,1,2,3,4,5] // simple array
//console.log(arrFirst)

let arrSecond = [0,1,2,3,4,5, "Hrishi", true] // in java script elements of an array are irrespective of data type 
// you can store any data type in an array

//console.log(arrSecond)


// add and remove operation from an array
let arrThird = [0,1,2,3,4,5, "Hrishi", true]
arrThird.push(9)
//console.log(arrThird)

// remove operation from an array
let arrFourth = [0,1,2,3,4,5, "Hrishi", true]
arrFourth.pop()
//console.log(arrFourth)

// Shift unshit operation on array
let arrFifth = [0,1,2,3,4,5, "Hrishi", true]
//arrFifth.shift()// Removes the first elemnt of an array if array is empty than it returns without anything
//arrFifth.unshift(10)// insert an element at start of an array mofify range 
//.log(arrFifth)

// slice and splice operation
let arrSixth = [0,1,2,3,4,5, "Hrishi", true]
let slicedArray = arrSixth.slice(2,5)
//console.log(slicedArray)


console.log(arrSixth.splice(0,3))





