console.log('Functions in JS')
function intro(names = 'blank', age = 18){  // parameter we define in the function
    console.log('Namaste!!! ' + names + ' ' + age) // Console output is not equivelent to result of a function. 
    
}
console.log('****************************************************************')
intro('bob', 25); // argument we pass to the function
console.log('****************************************************************')
intro('the builder', 35);
console.log('****************************************************************')
intro();