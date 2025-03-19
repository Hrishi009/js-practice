let mydate = new Date()
// console.log(mydate)
// console.log(mydate.toLocaleString())
// console.log(mydate.toJSON())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleDateString())

let formattedDt = new Date(2023,0,14)
//console.log(formattedDt.toDateString())

let formattedDt2 = new Date("2023-01-14")
//console.log(formattedDt2.toDateString())

let currentDt =  Date.now()
//console.log(currentDt)


let currentDt2 = new Date()
//console.log(currentDt2.getDate())
//console.log(currentDt2.getMonth())
//console.log(currentDt2.getDay())
//console.log(currentDt2.getHours())
//console.log(currentDt2.getTime()) // Time in miliseconds
console.log(currentDt2.toDateString())
//`${currentDt2.getDay()}`

currentDt2.toLocaleDateString('default',{
    calendar : String
    weekday : "long"
})







