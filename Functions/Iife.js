(function first(){
    console.log("This is ifi")
})();

// Parametrised function

( function second(name){
    console.log(`this is second function ${name}`)
} )("practice");


//arrow Internal invoked function expression 

(() => {
    console.log(`This is iife arrow function`)
})();

// parametrised arrow function 

( (num1, num2) => {
    console.log(`This is parametrised iife arrow function ${num1 + num2}`)
})(3,4)