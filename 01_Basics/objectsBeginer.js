// objects are decalraed as singlton , literal and constructor. Singlton objects are declared as constructor only


const mySymbol = Symbol("keyFirst")

// This is simple objct literal type
const objFirst = {
name: "Hitesh",
[mySymbol]: "Symbolical Key", // This is proper way to inset a symbol as a key without bracket it willbe consider as simple string 
email: "hitesh@google.com",
location: "Indore",
age: 18,
lastLoggedIn: false,
parameterFunction: function(){}
} 

//console.log(objFirst)
// console.log(objFirst.email)
// console.log(objFirst["email"])
//console.log(objFirst.mySymbol) // it is not considering symbol actually

//console.log(typeof(objFirst[mySymbol]))


objFirst.email = "hitesh@hercircle.com"
//console.log(objFirst.email)


// If you want to freez ur object that nothing change should visible on your object.

//Object.freeze(objFirst)

objFirst.email = "hitesh@google.com" // this will never change bcz of freez object earlier
//console.log(objFirst.email)


//console.log(objFirst)

//Now adding a function 


// Here we are adding a function externally

/*objFirst.greeting = function(){
    console.log("This is greeting function");
}

objFirst.greetingTwo = function(){
    console.log(`This is greeting function for, ${this.email}`);
} */

// console.log(objFirst.greeting())
// console.log(objFirst.greetingTwo())


    // Now function is created separated from object and will be assigned to a function parameter

    function passFirst(){
        console.log(`This is greeting function for, ${this.email}`);
    }

   const toExecute = function(){
    console.log(`This is greeting function for, ${this.email}`);

   }

    //objFirst.parameterFunction = passFirst
    objFirst.parameterFunction = toExecute


    console.log(objFirst.parameterFunction())




