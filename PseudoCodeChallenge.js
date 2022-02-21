// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.


//Note to instructors - After doing some research about pseudo coding and looking at examples we covered, I'm still having trouble finding the happy medium of giving sufficient detail to get the point
// across and adding too much. Is it better to have too much information or is it generally better to be short and concise. In terms of Pseudo coding, are we giving more the Sparks notes version
//or Coding for dummies version? Thank you!

//Pseudo code: At first glance of the question , I can see how someone who quickly skimmed over it could potentially hyper-focus on the word  "characters" and
//possibly think of using the method charAt(). We know however that the phrase "string with more characters" could be reworded to say, " return the string of longer length".
// Based on the instructions it is clear that we create a function.
// We start by naming and declaring the function.
// Since we will be comparing two strings , we will use 2 parameters which we will call str1 and str2.
// A conditional if/else statement will be used in order for the comparison to occur.
// We initialize the conditional statement with if
// Using the > than to compare both strings , we add the property .length to both parameters to determine the amount of characters in each.
// If the statement evaluates to true (string 1 contains more characters than string 2) we will return with str1, the longer string.
// The else portion , is the catchall, or the outcome of the conditional if str 1 is shorter or false.
// The result of the catchall is returning str2.
// After closing the entire function we need a way to "visualize" the data for ourselves.
// console.log is the way to do this
// We have two c.logs , in order to pass the arguments in for set 1 and set 2.
// Optionally , we could have included an else if statement, covering occurrences where both strings equaled the same length.


// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"

const longerString = (str1, str2) => {
    if(str1.length > str2.length) {
        return str1
    } else {
        return str2
    }
}
console.log(longerString(fruit1, fruit2))
console.log(longerString(fruit3, fruit4))

// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.
// Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

//Pseudo code: Coding this function is very similar to the function we've created to take test scores and assign them a letter grade.
//We will create the function taking in a single parameter. We can use 3 console.log statements at the end to test our three variables.
//An if, else if, if conditional statement  will be used to for the 3 comparison we need. Above, at or below boiling point.
//We can then attach the appropriate text to output depending on the temperature.

const temp1 = 42
const temp2 = 350
const temp3 = 212


const boilingPoint = (temp) => {
    if(temp > 212) {
        console.log(`${temp}F is above the boiling point!`)
    } else if(temp === 212) {
        console.log(`${temp}F, you are at the boiling point!`)
    } else {
        console.log(`${temp}F is below the boiling point.`)
    }
}

console.log(boilingPoint(temp1))
console.log(boilingPoint(temp2))
console.log(boilingPoint(temp3))

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10
//Pseudo code: We can simply attach the
const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

console.log(myNumbers1.length + myNumbers2.length)

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ohcE"

const currentCohort = "Alpha 2022"


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

const myArray = [13, 34, 5, 10, 27, 42]


// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24
