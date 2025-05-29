function sayString(str1 ,str2 ){
   // console.log("The world")
   // console.log("wants you.")
   let result = str1 + str2
    //let result = '${str1} + ${str2}'

    return result

}

//sayString()

let result  = sayString("The Home","Stay")

//console.log(result)


function paramFunction (userNm = "Developer"){
  if (!userNm){
    console.log("please enter correct name")
    return
  }
  return `${userNm} logged in`
}

//paramFunction("Developer")

console.log(paramFunction("Hitesh"))

