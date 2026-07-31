//Day 3 Exercise 1 - Types of function
// 1.function declaration
function userProfile(name){
    console.log(`Hello ${name} !`)
}
// Invoking function
userProfile("Ammitha")

// 2. Arrow function
let double = (number) => number*2
console.log(double(5))

/* 3. Anonymous function. = for reference
function (){
  console.log("This message is delayed by 2 seconds")
}*/

//
setTimeout(function(){
    console.log("This message is delayed by 2 seconds")
},2000)


