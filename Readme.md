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