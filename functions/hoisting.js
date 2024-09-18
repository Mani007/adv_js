console.log('Hoisting Program starts here......')
// hoisting problem with var when we try to access variable before its declared
// the variable goes to temporal dead zone
console.log(yourDJ)
console.log(someuser) // this will not through any error rather return undefined
var someuser = 'abc' // var create variable at the global scope
var yourDJ = function dj(){  // This is called function expression in function defination
    console.log('haalo')
}

function myfun(){ // This is called function declaration in function defination
    console.log('program ends here.....')
}