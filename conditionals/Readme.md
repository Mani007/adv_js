# Companrision in JS - Advance concepts 
### Comparison operator in JS 
- = assignment operator 
- == equality operator (implicit or automatic type conversion for comparison ). Not recommended and highly unpredictable automatic type conversion
- === STRICT EQUALITY object equality operator, you have to be explicit in type checking
- != not equality operator
- !== STRICT object not equality operator

- '>' greater than operator
- < less than operator
- <= less than equal to operator
- '>=' greater than equal to equal to operator   

Some important note >> is called right shift operator and << is left shift operator. It operates in binary.    

### Logical operator in JS   
Although logical operator look simple but behind the scene it can be very challenging for some operations.    
- ! not operator
- && and operator   Both true
- || or operator  One of them true   
#### Logical binary operator in JS   
Although logical operator look simple but behind the scene it can be very challenging for some operations.    
- ! not operator
- & binary and operator   Both true
- | binary or operator  One of them true   
#### Truthy and Falsy values in JS 
- Fasly value in JS are null, ''(empty string), undefined, 0(zero)  and NaN 
- except the falsy value every thing in primitive datatype are truthy values  
### Conditional statements in JavaScript 
Make sure you use debugger and devTools to check each step of your program executions.    
- The basic `if() {}` block - Each if condition is checked one by one
- The basic `if () {} else if() {}` block - Each if condition is checked one by one, once the condition is met.  program will not check other if conditions. 
- the basic `if() {} else {}` block - Program will not check if condition other wise else will execute. 
- Nested `if() {} else if() {}` block - Program will will operate same as above with nesting executions. 