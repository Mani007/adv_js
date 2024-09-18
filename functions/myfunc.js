console.log('Functions in JS')
debugger    // helps to control code execution phase not on memory creation phase
let above = intro('yoyo', 25)  // This will work because of its execution context is during memory creation phase globally
console.log(above)
let aboveaddition = addition(3,4)
console.log(aboveaddition)
function intro(names = 'blank', age = 18){  // parameter we define in the function
    //console.log('Namaste!!! ' + names + ' ' + age) // Console output is not equivelent to result of a function. 
    return 'Namaste!!! ' + names + ' ' + age
}

function addition(a,b){
    return a + b
}
console.log('****************************************************************')
let intro1 = intro('bob', 25); // return will be now available in variable intro1
console.log('****************************************************************')
let intro2 = intro('the builder', 35);  // return will be now available in variable intro1
console.log('****************************************************************')
console.log(intro1 , intro2) // return will be output
console.log('****************************************************************')
//let a = addition(2,5)
//let b = addition(3,6)
let add1 = addition(addition(2,10),addition(2,5)) // output will be 14
console.log(add1)