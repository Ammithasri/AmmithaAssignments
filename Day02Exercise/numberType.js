// Day2- Exercise 2 Number type

//Declare and initialize the variable
let number = 25

// create a fucntion checkNumberType
function checkNumberType(number) {

    if (number < 0){
        return "it is a negative integer"
    }else if (number > 0){
       return "it is a positive integer"
    }else {
        return "the number is neutral"
    }
}
//call the function
console.log(checkNumberType(number))
