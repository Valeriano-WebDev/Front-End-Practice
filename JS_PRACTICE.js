// // // Create a function that takes in two arrays and returns one array with no duplicate values.
  var arr1 = [3, 7, 10, 5, 4, 3, 3]
 var arr2 = [7, 8, 2, 3, 1, 5, 4]
// // // --> [3, 7, 10, 5, 4, 8, 2, 1]
// //
const noDuplicates = (values1, values2) => {
    let newArray = []
    let combinedArray = values1.concat(values2)
    for(i = 0; i < combinedArray.length; i++) {
        if(newArray.indexOf(combinedArray[i]) === -1) {
            newArray.push(combinedArray[i])

        }
    }
    return newArray
}
console.log(noDuplicates(arr1, arr2))

//
// // // Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
// var addUp1 = 4
// // // // 1 + 2 + 3 + 4 = 10
// // // // --> 10
// var addUp2 = 10
// // // // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// // // // --> 55
// var addUp3 = 600
// // // // --> 180300
//
//
//
// const addAll = (num) => {
//     let counter = 0
//     for(let i = 1; i <= num; i++){
//         counter += i
//     }
//     return counter
// }
// console.log(addAll(addUp1))
//
// // let sum = 0;
// // for (let i = 0; i <= 9; i++, sum += i);
// console.log(sum);