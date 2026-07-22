//Day2- Exercise 1 Operators and control statements

//Declare and initialize the variable
let number = 8

// create a function isOddOrEven
function isOddOrEven(number) {
    
    // conditional statement to check whether the declared number is odd or even
    if (number %2 === 0){
       return "number is even"
    }else{
       return "number is odd"
    }
}

//call the function
console.log(isOddOrEven(number))