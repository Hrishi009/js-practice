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


//Spread operator with parameter if parameter is introduced in a function than values are ditributed within values and rest

function restOperatorWithParameter(val1,val2,...num1){
    return num1
}
console.log(`parameterised rest operator ${restOperatorWithParameter(2,3,4,5,6,7)}`)


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

function directObjectPassing(empObj){
    console.log(`school name is ${empObj.name} and stud id ${empObj.empCode}`)

}

directObjectPassing({name: "Gabriels", empCode: "234"})


//Passing array in function

let myArray = [100,200,300,400,500,1000]

function passingArrayIn(getArray){
    return getArray[4]
}


console.log(passingArrayIn(myArray))