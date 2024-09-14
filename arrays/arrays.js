// const arr = ['a', 'b', 'c', 'd', 'e',null, undefined, 25, true, false, {
//     name: 'John',
//     age: 30, 
//     age_range:[1, 25],
// }];
// console.log(arr);
// console.log(`Type of array is ${typeof(arr)}`);
// console.log(`Access of array is ${arr[2]}`);  // output c from index 3
// console.log(`Update value inside of array is ${arr[2]='X'}`);  
// console.log(`Update value inside of array is ${arr[9]='XXX'}`); // adding new value at certain index 
// console.log(`Concat with built-in function of array is ${arr.concat('f')}`);
// console.log(`push with built-in function of array is ${arr.push('k','l','m')}`);
// console.log(`length and push with built-in function of array is ${arr[arr.length] = 'X'}`);
// console.log(`length and push with built-in function of array is ${arr[arr.length] = 'XY'}`);
// Because array is an object, we can store key value pair in array without creating object
/**
 * const myArray =[1,2]
 * myArray.name = 'abc' // store name key in array object not in the array element
 * console.log(myArray.name) // return abc
 */ 
// const multiArray = [['abc',2],['pqr',4],['xy',6],['vvv',8],];
// console.log(multiArray)
// console.log(`Multidimensional array ${multiArray}`)
// //multiArray[5][0] = 'kkk'  // Adding element in multi dimension array is very critical
// console.log(multiArray)
// console.log(`Multidimensional array adding element  ${multiArray[9] = ['kkk',12]} `) 
// const tictactoeState = [
//     ['X', null,null],
//     [null, 'O', null],
//     [null, null, 'X']  // This is 2D array
// ]
// console.log(tictactoeState)
// const fruits = ['a', 'b', 'c', 'd'];
// const myFruits = fruits  // Example of shallow copy
// myFruits.push('j')
// myFruits.push('K')
// console.log(fruits) // The value of ORIGINAL fruits array is getting overwritten as well
// console.log(`fruits: ${fruits}`)
// console.log(`myFruits: ${myFruits}`)
// const user1 = {
//     name: 'John',
//     age: 30,
//     address: {
//         street: '123 Main St',
//         city: 'New York',
//         state: 'NY',
//     },
// }
// const user2 = {
//     name: 'Jane',
//     age: 28,
//     address: {
//         street: '456 Elm St',
//         city: 'Los Angeles',
//         state: 'CA',
//     },
// }
// const user3 = user2
// user3.age = 55
// console.log('User2: ',user2)
// console.log('User3: ',user3)   // shallow copy again with objects

// const userName = 'abc'
// const user2 = userName // shallow copy and both variable point to same variable in the memory
// const user3 = userName + ' xyz'  // Now new variable is created called user3
const user2 = {
        name: 'Jane',
        age: 28,
        address: {
            street: '456 Elm St',
            city: 'Los Angeles',
            state: 'CA',
        },
    }
// const user3 = {} // for deep copy
// //const user3 = user2 // shallow copy
// //user3.age = 55
// Object.assign(user3, user2)  // pay attention to the order of objects in arguments
// user3.age = 55
// console.log('User3', user3)
// console.log('User2', user2)
// LATEST SYNTAX in ES6 
const user3 = {...user2} // for deep copy
user3.age = 55
console.log('User3', user3)
console.log('User2', user2)