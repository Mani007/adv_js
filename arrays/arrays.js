const arr = ['a', 'b', 'c', 'd', 'e',null, undefined, 25, true, false, {
    name: 'John',
    age: 30, 
    age_range:[1, 25],
}];
console.log(arr);
console.log(`Type of array is ${typeof(arr)}`);
console.log(`Access of array is ${arr[2]}`);  // output c from index 3
console.log(`Update value inside of array is ${arr[2]='X'}`);  
console.log(`Update value inside of array is ${arr[9]='XXX'}`); // adding new value at certain index 
console.log(`Concat with built-in function of array is ${arr.concat('f')}`);
console.log(`push with built-in function of array is ${arr.push('p')}`);
console.log(`pop with built-in function of array is ${arr.pop()}`);