//Challenge #1 Write a function named marco that returns "polo".
function marco () {
    return "polo"
}
console.log(marco())

//Challenge #2 Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
function greeting(name){
    return "Welcome, " + name + "!"
}
console.log(greeting("Jacob"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
function oddOrEven(num) {
    if (num % 2 === 0) {
        return "This number is even."
    } else {
        return "This number is odd."
    }
}
console.log(oddOrEven(57))
console.log(oddOrEven(6))

//     Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
function triple(num) {
    return num * 3
}
console.log(triple(3))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
function multiply(num1, num2) {
    return num1 * num2
}
console.log(multiply(12, 3))

//     Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly
//     divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
function divisibleBy(num1, num2) {
   if ( num1 % num2 === 0 ) {
       return (num1 + ", is divisible by " + num2)
   } else {
       return ("Sorry, not divisible")
   }
}
console.log(divisibleBy(10, 5))

//     Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
function assignGrade(num) {
    if (num >=88 ) {
        return "You got an A!"
    } else if (num >= 78) {
        return "B for not bad!"
    } else if (num >= 68) {
        return "C's get degrees!"
    } else  {
        return "NGMI"
    }
}
console.log(assignGrade(99))
console.log(assignGrade(85))
console.log(assignGrade(68))
console.log(assignGrade(50))

//     Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
function isLonger(str1, str2) {
    if (str1.length > str2.length) {
        return str1
    } else {
        return str2
    }
}
console.log(isLonger("Superbowl", "Ruby"))

//     Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
function greaterNum(num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}
console.log(greaterNum(10, 27))

//     Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
function yelling(str) {
    return str.toUpperCase()
}
console.log(yelling("put your hands up"))

//     STRETCH Challenges
// The World Translator
// (a) Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language.
// Ensure you function works for at least 5 languages.
const en = "Hello World"
const ja = "こんにちは世界!"
const pt = "Olá, Mundo!"
const sm = "Talofa le lalolagi!"
const is = "Halló heimur"
const enDefault = "Hello World!"

function helloWorld(languageCode) {
     if (languageCode === en) {
        return "Hello World!"
    } else if (languageCode === ja) {
        return ja
    } else if (languageCode === pt) {
        return pt
    } else if (languageCode === sm) {
        return sm
    } else if (languageCode === is) {
        return is
    } else  {
        return "I don't recognize that language code"
    }
}
console.log(helloWorld(en))
console.log(helloWorld(ja))
console.log(helloWorld(pt))
console.log(helloWorld(sm))
console.log(helloWorld(is))
console.log(helloWorld("tl"))




// (b) Have your function default to returning English.


// Will use  ----> return enDefault on all return statements to return English as default in all languages
// console.log(helloWorld(is))

//     The Pluralizer
// (a) Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
//
