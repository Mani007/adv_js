console.log('Variable in JS'); 
let userName = 'abc';
const age = 25;
var token = 'random';
let citizen = true;
let some;

userName = 'xyz';   // resetting the variable values with let and var 
age = 28;  // this is error as we cannot reassign value to const

console.log('userName: ' + userName + ' age: ' + age + ' token: ' + token + ' citizen: ' + citizen);
console.log('the value of "some" variable is ' + some)
//let some = null;  // we cannot redecalre block scoped varable again 
