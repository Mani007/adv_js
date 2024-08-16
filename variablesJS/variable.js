console.log('Variable in JS'); 
{ //This is called block scoping
    let userName = 'abc';

}
const age = 25;
{

    var token = 'random';
}
//debugger;
let citizen = true;
let some;  // memory allocated as undefined

let userName = 'xyz';   // resetting the variable values with let and var 
//userName = 1000 // userName changed to number type and program work fine VS code show wrong type in tooltip. DO NOT TRUST VS CODE
//age = 28;  // this is error as we cannot reassign value to const
//let userName = 'pqr'; // now this is error as its a block scoping problem
// now the code work fine as we have redeclared the let variable in proper block scope
//var token = 'new random token'  // redeclareed and reassigned outside the block
console.log('userName: ' + userName + ' age: ' + age + ' token: ' + token + ' citizen: ' + citizen);
console.log('the value of "some" variable is ' + some)
//let some = null;  // we cannot redecalre block scoped varable again 
