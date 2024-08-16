## Variables in JS
### Variables are declared using let, const, var
1. **var** is the oldest way to declare the variable in JS.   
syntax is var x = 20;  // value can be declared later   
**var**  is not confined by the block scope, hence you can change its value anytime and anywhere in the program. If value is not defined then its "undefined" in value.     
2. **let** is ES6 way to declare block scoped variables    
syntax is let x=20;   // value can be declared later 
**let** cannot be accessed beyond its block. If the value is not defined then its "undefined" in value.    
3. **const** is another way of declaring ES6 variables in a block scope    
syntax is const x=20; ***// value has to declared***   
You cannot change the const once declared.    

### Rule for declaring any variable is same as python variable declaration   
All the valid format of variable declarations
> let camelCase, camel_case, CamelCase, Camecase, camelcase1, camel$case, _CamelCase, _camelCase     

Some invalid format for variable declarations are 
> let 1cameCase, camel case, camel#case, #camelcase, etc.