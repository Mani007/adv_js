console.log('Program starts here ......')
function addtwo(a,b){
    return a + b
}
function subtwo(a,b){
    return a - b
}
function multwo(a,b){
    return a * b
}

let results = multwo(
    addtwo(
        subtwo(5,2),subtwo(6,3)
    ), 
    addtwo(subtwo(7,3),subtwo(7,2)
)
);

console.log('Results: ', results)