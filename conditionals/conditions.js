console.log("Understanding Logical operator in Details")

// const userAge1 = '30'
// const userAge2 = 30
// type conversion to int is happening
//console.log('Is userAge1 not equal to userAge2?', userAge1 !== userAge2) 
// console.log('Is userAge1 > userAge2?', userAge1 > userAge2) 
// console.log('Is userAge1 < userAge2?', userAge1 < userAge2)  
// console.log('The logical AND',(7>4) && (7<10))
// console.log('The logical AND with false output',(7>4) && (7<4))
// console.log('The logical OR with false output',(7<4) || (7<4))
// console.log('The logical OR with true output because one of the value is true ',(7>4) || (7<4)) 

// Be careful with truthy and falsy values 
// console.log('Some special cases for the logical && and || operators \n')
// console.log('The logical && special case is 1 && 2 ', 1 && 2)
// console.log('The logical && special case is 0 && 2 ', 0 && 2) // gives out the first falsy results
// console.log('The logical || special case is 1 && 2 ', 1 || 2) // gives out the first truthy results
// console.log('The logical || special case is 0 && 2 ', 0 || 2)
// console.log('Applying boolean typecasting for && special case is boolean(1 && 2) ', Boolean(1 && 2))
// console.log('Applying boolean typecasting for && special case is boolean(0 && 2) ', Boolean(0 && 2)) // gives out the first falsy results
// console.log('Applying boolean typecasting for || special case is boolean(1 && 2) ', Boolean(1 || 2)) // gives out the first truthy results
// console.log('Applying boolean typecasting for || special case is boolean(0 && 2) ', Boolean(0 || 2))
// console.log('Boolean values for truthy and falsy values for NaN is', Boolean(NaN))
// console.log('Boolean values for truthy and falsy values for numbers say 2 is', Boolean(2))
// console.log('Boolean values for truthy and falsy values for null is', Boolean(null))
// console.log('Boolean values for truthy and falsy values for some string "abc"  is ', Boolean('abc'))
// console.log('Boolean values for truthy and falsy values for zero 0 is', Boolean(0))
// console.log('Boolean values for truthy and falsy values for undefined is', Boolean(undefined))
// console.log('Boolean values for truthy and falsy values for empty string "" is', Boolean(''))
// 
// Some really good results - Till what point the logical operators evaluate
// console.log('Real values for truthy and falsy values for "hello" && 2+5 is',"hello" && 2+5)
// console.log('Real values for truthy and falsy values for "hello" || 2+5 is',"hello" || 2+5)  
// Be careful with the expression results on the console
// At console in the devTools sometimes you get undefined along with your results because REPL is evaluating the expression as well

// console.log('Real values for expression values for "hello" && console.log("logging") is',"hello" && console.log("logging"))
// console.log('Real values for expression values for "hello" || console.log("logging") is',"hello" || console.log("logging"))
// console.log('Binary and operator 3&9', 3&9)  // You will get binary tranformed values converted back to integer
// console.log('Binary or operator 3|15', 3|15)

// Conditional if statement execute one by one - use Debugger tools to check the flow of the program

//debugger
const getDay = '7'
//const userAge = parseInt(prompt('Enter your AGE in number', userName)) // use type casting her as default input of prompt is string type and need to parse it to integer
const dayNumber = parseInt(prompt('Enter DAY in number(between 1-7 )', getDay)) // use type casting her as default input of prompt is string type and need to parse it to integer
// if (!userAge) {
//     console.log("Please add valid AGE. Don't cancel it")
// } else {
//     if (userAge >0 && userAge <15) {  // The if block of code
//         console.log('You are KID with age ', userAge)
//     } else if (userAge >15 && userAge <25) {
//         console.log('You are STUDENT with age ', userAge)
//     }else if (userAge >25 && userAge <45) {
//         console.log('You are Working PRO with age ', userAge)
//     }else if (userAge >45 && userAge <75) {
//         console.log('You are RETIRED with age ', userAge)
//     } else {
//         console.log(`Invalid age ${userAge}, Please enter valid AGE between 1 to 75`)
//     }

// }
switch (dayNumber) {
    case 1:
        console.log(`its ${dayNumber} is Monday`)
        break
    case 2:
        console.log(`its ${dayNumber} is Tuesday`)
        break
    case 3:
        console.log(`its ${dayNumber} is Wednesday`)
        break
    case 4:
        console.log(`its ${dayNumber} is Thursday`)
        break
    case 5:
        console.log(`its ${dayNumber} is Friday`)
        break
    case 6:
        console.log(`its ${dayNumber} is Saturday`)
        break
    case 7:
        console.log(`its ${dayNumber} is Sunday`)
        break
    default:
        console.log('Please enter a valid day number between 1 to 7')
}


console.log("Programme Ended here!!!! ")


