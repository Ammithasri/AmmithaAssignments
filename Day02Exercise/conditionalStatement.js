///Day2- Exercise 3 conditional statements

//Declare and initialize the variable
let browserName = "chrome"

// create a function checkBrowser
function launchBrowser(browserName){

    // conditional statement to check whether the browser is chrome or not
    if (browserName === "chrome"){
        console.log("using chrome browser")
    }else {
        console.log("using other browser")
    }
}

//call the function
launchBrowser(browserName)

console.log("---------------------------------------------------")

//Declare and initialize the variable
let testType = "sanity"

// create a function checkTestType
function runTests(testType){
    //using switch case
    switch (testType) {
        case "smoke":
            console.log("running smoke test")
            break
        case "sanity":
            console.log("running sanity test")
            break
        case "regression":
             console.log("running regression test")
             break
        default:
            console.log("running smoke test");
            break
    }
}
// call the function
runTests(testType)

