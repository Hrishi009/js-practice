// let a = 10
// const b =  20
// var c = 30

// #Note:- var has scop inside internal and global

if(true){
let a = 10
const b =  20
//var c = 300 
c = 300
}

//console.log(a)
//console.log(b)
//console.log(c)

function one(){
    const name = "Dev"
    function two(){
        const website = "You tube"
        console.log(name)
    }
    //console.log(website) // outside scop
    two()
}
//console.log(name) // outside scop

one()


console.log(addOne(3))

function addOne(num){
    return num + 1
}

//console.log(holdingVariable(4)) // here it will give error Cannot access 'holdingVariable' before initialization


const holdingVariable = function twoadd(num){
    return num + 3
}

console.log(holdingVariable(4))