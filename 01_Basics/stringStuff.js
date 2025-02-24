let name = "Praduyman"
let surname = "Vivek"

console.log(`Hello my name is ${name} and full name is ${surname}`)

console.log(name.charAt(2))
console.log(name.indexOf(`h`))

console.log(name.substring(0,5))

console.log(name.slice(-4,7))

const url = "https://google.co%20in"

console.log(url.replace('%20','_'))
console.log(url.includes('co'))