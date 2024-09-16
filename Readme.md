
# Live Server Setup
### After setting up the live server in VScode and local machine, use the below setup for accessing the web over Local network.   
You will find all the helpful document in each folder with commands and output.   
## How to access the server from Mobile?

 First, make a sure that your PC & Mobile are connected through same network. 

* **Windows** :  Open `CMD` and enter `ipconfig`.
* **Linux/macOS** : Open `terminal` and enter `ifconfig`.

And note down the `IPv4 Address` (probably it will look like 192.168.xx.xx). This is your PC's IP address. Enter the address to your browser's URL Bar with the port number**.

        http://<IP Address> : <Port>

** For an example, if your server running at **http:// 127.0.0.1:3500** on PC then port number is **3500**.     

## VS Code shortcuts
```
Alt+shift+f   // format with prettier
```

### Typing convention in JS is camelCase 
[more info for typing convention is](https://www.freecodecamp.org/news/snake-case-vs-camel-case-vs-pascal-case-vs-kebab-case-whats-the-difference/)

### Console Output saving   
You can save console commands and output from the chrome dev tools in the form of a text file by the following steps: this process will help us to keep records and version of our terminal commands. In future we can try to automate this process of auto saving ang versioning of all the commands in the terminal or dev tools console.    
1. Right-clicking on the console or REPL terminal 
2. Choosing "save as" from the options
3. Choose the correct location and save the output file.    
 Also make sure you update your console to show the timestamp or any other details you prefer to be shown in the console output. We can do that by changing the setting of the console in the chrome dev tools.   
 Here are some important links and tools for the console command and output saving mechanism.  
 [Chrome console magic 1](https://stackoverflow.com/questions/7627113/save-the-console-log-in-chrome-to-a-file)   
 [Chrome console magic with time stamp](https://stackoverflow.com/questions/12008120/console-log-timestamps-in-chrome)   
 [Terminal console magic with time stamp](https://www.cyberciti.biz/faq/howto-save-ouput-of-linux-unix-command-to-file/)   
 [PERL Terminal console magic with time stamp](https://stackoverflow.com/questions/10838963/bash-append-command-output-and-timestamp-to-file)     


 ## Datatypes in JS
 1. Premitive Data Types - string, number, boolean,undefined,null, bigint, symbol
 2. Non Premitive Data Types

# JS code execution model and Debugging tools from chrome devTools 
JS has two phases of execution of code.    
1. The first phase is memory creation phase
2. The second phase is code execution phase     

Use console log method to see the output at different parts of your program or use the devTools debugger with breakpoints to see the execution of your program. Chrome devTools debugger is the best debugger you can get. Check the scope of your variables.  Use the network tab for knowing the file execution and loading from the initiator of the files in the browser.    
[More info about temporal dead zone and hoisting in JS](https://www.freecodecamp.org/news/javascript-temporal-dead-zone-and-hoisting-explained/)     

## Debugger and memory allocations in JS
JS debugger is a very powerful tool for understanding JS program. To understand objects better in JS, please check the memory snapshot of your code.    
Primitive type has combined shared memory in JS heap, whereas non-primitive or object can have their special memory location in the heap, but inside the object they all share common memory locations for primitive types. You can check all these in memory addresses of the variable in the memory tab by searching your variable name and its address. Make sure you also include numerical values while taking the memory snapshot. Some important notes, be careful with string types variables. Also be careful with `var` types as it will overwrite memory when used.    
some examples of memory locations in JS is @75 for all false values, @67 for all true values, @77 for all empty strings etc.     

## Objects in JS   
The only non primitive data types is objects. Objects include arrays, objects(JSON) and other different objects.       
It's very crucial to check the addresses of objects in the heap memory snapshot in the chrome devTools. Understand how objects are create3d and represented in the heap memory of JS engine. There are different variations of objects in JS such as **arrays and functions.**    
Here is the best part, whenever we create two different objects in JS with different name but exactly the same attributes, we will find that the object instance address are different but the attribute inside the object are same. !what a memory optimization in JS!. also similar object stored in same context with different memory address and the best part is if you check obj1=== obj2 the result is false. **So addresses are always compared whenever we compare the objects.**    
In nested objects, its the new address of the nested object is stored in the main object instead of the entire object.    
Objects are always compared based on their addresses rather than their internal values. Hence although the objects are created using **const** variables yet we can change the values inside it because every time a new object is not getting created. Please note that in JS primitive variables are always hold values by its memory address in the heap, so if you change any primitive data type, the values address will be updated from the memory to new value's address. But in case of objects the new address is not changed for entire objects, rather just value in side the object is updated for its new address.      

## Arrays in JavaScript
Arrays are special type of objects(non primitive data type) in JavaScript. It is used to store values in a ordered and index list with similar or different types of elements.     
#### Basic array methods are that are commonly used
- push
- pop
- shift - opposite of pop function as it starts from the beginning of the array
- unshift - opposite of push function as it adds element at the start of the array
- indexOf - It is like a search for getting the index of the element, if present, return -1 if the element is not found
- concat - it can concat any two objects 
- includes - it will tell us if the element is present in the array in true or false
- reverse - reverse all the elements of array
- sort - arrange elements in the order alphabetically, even with numbers, and case sensitive sorting. It primarily sort in utf-16 format. We can also pass our own sort function to define sorting order. 
- slice - cuts the array into slices generally using indexes. Original array will remain the same and new slice array is been generated. 
- splice - same as slice but changes the original array. SO it can also be used to replace elements of an array at a certain index.      

#### Multi-dimensional arrays or nested arrays
Example: [[1,2,3],[4,5,6]]      

#### Deep copy and shallow copy in JS   
In all the objects default behavior of copy is shallow copying. Check the code example for more info    
```javascript
const fruits = ['a', 'b', 'c', 'd'];
const myFruits = fruits  // Example of shallow copy
myFruits.push('j')
myFruits.push('K')
console.log(fruits) // The value of ORIGINAL fruits array is getting overwritten as well
// output fruits = ['a', 'b', 'c', 'd', 'j','K']
```    
To do deep copy, we use SPREAD operator for both objects and arrays.     
**CAREFUL: But the SPREAD operator does not deep copy the nested objects** *Because of this ISSUE we need state management such as redux or zustand in REACT to manage variable states* 
**We can also use JSON.stringify to perform deep copy**  

### Combined assignment operator 
Combined assignment operator are 
- += assignment  **num= num + 5 or num += 5**
- -= assignment  **num= num - 5 or num -= 5**
- %= assignment  **num= num % 5 or num %= 5**
- *= assignment  **num= num * 5 or num *= 5**
- /= assignment  **num= num / 5 or num /= 5**
- ** assignment   num= num**5  or num **= 5
- ++ assignment Increment operator   **++num or num = num + 1 AND num++ or num+=1**    
 num++ means Expression result first then change the value of num     
 ++num means both expression and result are store in num at the same time.   
 ```javascript
 let num = 5;
 const newNum = num++; // num = 6 but newNum=5
 const newNum = ++num; // num = 6 and newNum=6
 ```
- -- assignment Decrement operator   **--num or num = num - 1 AND num-- or num-=1**    

## Loops in JS 
Three main types of loops in JavaScript.    
- for loop
- while loop
- do ...while loop   
Check the coding example for more details.

## Functions in JavaScript
Most useful concepts in JavaScript are functions. It is also very deep and interesting. Function primarily consists of function declaration, function definitions, function calling, function parameter in declaration, function calling with arguments and function return values. Check the code examples of function to know the deeper insights.




