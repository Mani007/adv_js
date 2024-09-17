console.log('Functions in JS')
function intro(names = 'blank', age = 18){  // parameter we define in the function
    console.log('Namaste!!! ' + names + ' ' + age) // Console output is not equivelent to result of a function. 
    
}
console.log('****************************************************************')
let intro1 = intro('bob', 25); // return will be undefined
console.log('****************************************************************')
let intro2 = intro('the builder', 35);  // return will be undefined
console.log('****************************************************************')
console.log(intro1 , intro2) // return will be undefined