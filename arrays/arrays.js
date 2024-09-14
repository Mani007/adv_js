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
const multiArray = [[1,2],[3,4],[5,6],[7,8],];
console.log(`Multidimensional array ${multiArray[0][1]}`)