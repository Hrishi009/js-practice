//const objectSinglton = new Object() // This is Singlton object

//console.log(objectSinglton)

const objectLiteral = {} // This is normal object creation

//console.log(objectLiteral)

objectLiteral.id = 1234
objectLiteral.name = "hitesh"
objectLiteral.email = "hitesh@google.com"

//console.log(objectLiteral)

const nestedObject = {
    id: 1234,
    detail:{
        firstNm : "hitesh",
        lastNm : "choudhary",
        fullNm : "hitesh choudhary",
        social:{
           facebook: "facebook.com",
           instagram: "instagram.com",
           twitter: "twitter.com"
        }

    }
}
//console.log(nestedObject)

//console.log(nestedObject.detail)

//console.log(nestedObject.detail.social)

//console.log(nestedObject.detail?.social) // This question mark is optional chaining to spot out nil values if value is nil than don't perform

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a",4:"b",5:"c"}
const obj3 = {6:"a",7:"b",8:"c"}

const obj4 = {obj1,obj2,obj3}

//console.log(obj4)

//console.log(Object.assign({},obj1,obj2,obj3)) // object assign insert objects into a new blank object empty {}

//const spreadObj = {...obj1,...obj2,...obj3}

//console.log(spreadObj)


const users = [
    {
        id: "1234",
        name: "Hitesh"
    },
    {
        id: "1234",
        name: "Hitesh"
    },
    {
        id: "1234",
        name: "Hitesh"
    },
    {
        id: "1234",
        name: "Hitesh"
    },
    {},{}
]

//console.log(users[2].name)

// console.log(Object.keys(nestedObject))
// console.log(Object.values(nestedObject))
//console.log(Object.entries(nestedObject))

console.log(nestedObject.hasOwnProperty(`fullNm`))

