const objFirst = {
    studNm : "YouDlee",
    insider : function(){
       let website = "Youtube"
     console.log(`${this.studNm} please follow my website`)
     //console.log(this) // inside this will show its object in which it is declared.

    }

}



objFirst.insider()
objFirst.studNm = "organiser"
objFirst.insider()

//console.log(this) // outside this will show empty {} bcz of global context

// function globalFunc(){

//     let anonymous = "post"
//     console.log(this)
// }


function globalFunc(){

    let anonymous = "post"
    console.log(`${this.anonymous}`) // this keyword will not refer inside a function it will work inside object only.
}


globalFunc() // when call this from inside a function it will show many things.




// const arrowFunc = function () {
//     console.log("inside simple function")
// }

const arrowFunc =  () => {
    console.log("inside arrow function")
}

arrowFunc()



const parametrisedArrowFunc =  (num1,num2) => {
    console.log(num1 + num2)
}

parametrisedArrowFunc(11,12)


const InlineReturnparametrisedArrowFunc =  (num1,num2) =>  console.log(num1 + num2)


InlineReturnparametrisedArrowFunc(21,22)


//second form of arrow function in which we will use implicit return

const arrFunctionImplicitReturn =  (num1,num2) =>  num1 + num2

console.log(arrFunctionImplicitReturn(3,4))



const arrFunctionImplicitReturnInsideBracket =  (num1,num2) =>  (num1 + num2)

console.log(arrFunctionImplicitReturnInsideBracket(3,4))


const arrFunctionExplicitReturn =  (num1,num2) =>  {return num1 + num2}

console.log(arrFunctionExplicitReturn(3,4))

// note :- the concept is if you write curly bracket than only you need to write return otherwise without return will go