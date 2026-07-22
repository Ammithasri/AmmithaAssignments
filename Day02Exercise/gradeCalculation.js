//Day2- Exercise 4 Grade calculation using switch case 

//Declare and initialize the variable
let score = 78

// create a function 
function correspondingGrade (score){
   switch(true){
      case score >= 90:
        return "student grade is A"
      case score >= 80:
        return "student grade is B"
      case score >= 70:
        return "student grade is C"
      case score >= 60:
        return "student grade is D"
      case score >= 50:
        return "student grade is E"
      case score < 50:
        return "student grade is F"
  }
}
console.log(correspondingGrade(score))
