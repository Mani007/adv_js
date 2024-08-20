
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