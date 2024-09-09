// console.log('objects in JS is the only non primitive datatypes ')  
// const myObj = { 
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     city: 'New York'  // Key-Value Pairs
// } 
// console.log(myObj)
// const myObj2 = { 
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     city: 'New York'  // Key-Value Pairs
// } 
// console.log(myObj2)
const myName = 'abcde';
const myObj1 = {
    name1: 'abcde',
    age1: 30,
 }
const myObj2 = {
    'name-2': 'abcde',
    age2: 20,
 }
console.log(myObj1.name1);
console.log(myObj1['name1']);
console.log(myObj2['name-2']);
console.log(myObj2.name-2);  // will not work properly output is NaN so instead use myobj2['name-2']
const name1='';
const name2='';
const age1=25;
const age2=30;  
// Please check the context above, very interesting memory footprint 