function calculateTotalPrice(num1){
    return num1
}
// console.log(calculateTotalPrice(2))
//Above is simple function which is returning num1 value 

// if We need to add more values in one function like shopping cart than we use `REST` or `Spread` operation
// The three dots before parameter is called Rest or Spread operator

function calculateTotalPrice(...num1){
    return num1
}
console.log(calculateTotalPrice(2,3,4,5,6,7,8,9))



//passing object in function

let user = {
    name: "Hitesh",
    empCode: "234"
}

let userDetail = {
    schoolNm: "Hitesh",
    rollNo: "234"
}

function passingObject(anyObject){
console.log(`user name is ${anyObject.name} and employee code ${anyObject.empCode}`)
}

passingObject(userDetail)


//Passing array in function

let myArray = [100,200,300,400,500,1000]

function passingArrayIn(getArray){
    return getArray[4]
}


console.log(passingArrayIn(myArray))