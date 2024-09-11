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
const myVariable = 'myVar'  // myVar is key on myObj2
const myObj1 = {
    name1: 'abcde',
    age1: 30,
 }
// const myObj2 = {
//     'name-2': 'abcde',
//     age2: 20,
//     myVar: 'some value',
//  }
 const myObj2 = {
    'name-2': 'abcde',
    age2: 20,
   
 }
 myObj2.lastName = 'surname';
 myObj1['lastName'] = 'my surname';
 console.log(myObj1.lastName);
 console.log(myObj2['lastName']);
// console.log(myObj1.name1);
// console.log(myObj1['name1']);
// console.log(myObj2['name-2']);
// console.log(myObj2['name'+'-2']); // expression is evaluated to make key of myObj2
// console.log(myObj2.myVariable);  // This will give undefined
// console.log(myObj2['myVariable']); // This will give output as "some value". note [] brackets use
// console.log(myObj2.some);  // this will give undefined as result 
// console.log(myObj2.name-2);  // will not work properly output is NaN so instead use myobj2['name-2']
// const name1='';
// const name2='';
// const age1=25;
// const age2=30;  
// Please check the context above, very interesting memory footprint 