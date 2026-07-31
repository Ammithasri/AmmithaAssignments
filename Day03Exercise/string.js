// task 1
let s = "Hello World"
// Trim to remove white space at beginning and end and split to convert string to array
let splittedValue = s.trim().split(" ")
let lastWord = splittedValue[splittedValue.length-1]
console.log(lastWord+ " : "+ lastWord.length)

//task 2
let s1 = " fly me to the moon "

let splittedValue1 = s1.trim().split(" ")
let lastWord1 = splittedValue1[splittedValue1.length-1]
console.log(lastWord1 + " : "+ lastWord1.length)

// task 3 anagram
function anagram(str1, str2){
    let sorted1 = str1.trim().toLowerCase().split("").sort().join("")
    let sorted2 = str2.trim().toLowerCase().split("").sort().join("")

    return sorted1 === sorted2
}
console.log(anagram("listen", "silent"))
console.log(anagram("hello", "world"))