# GSORoulette-OLD
Mobile App that generate random attractions, restaurants, and local places around Greensboro 

## Installation
 
This requires Node.js to be installed in your computer. If you dont have Node.js installed in your computer, you can install it here:
(https://nodejs.org/en/)[https://nodejs.org/en/]

After installation of Node.js, you will need to type the following command:
  Mac/Linux/Ubuntu: In terminal, you will need to type the following: $ sudo npm install -g cordova
  Windows: You will have to use Command Prompt as an Administrator to access priviligies. Type in npm install -g cordova
  
Then install Ionic in the same Terminal/Command Prompt:
  Mac/Linuc/Ubuntu: `$sudo npm install -g ionic`
  Windows: `npm install -g ionic`
  
Clone or fork this project as you wish. You will need to use the Terminal/Command Prompt to install platforms. Make sure it is pointing to the root of the directory of GSORoulette. You will need to tell ionic what platforms you will need to install. To install platforms, you will need to type the following command: 
 ` ionic platform install <platform[ios/android]>`
  Example: `ionic platform install ios`
  
Open your favorite Editing tool to access the files. If you want to open the app without using Native Tools, otherwise known as website broswer testing (Android Studio/Xcode/IntelliJ/Eclispe), then type the following:
`ionic serve`
  
If you want to do simulating testing, then type the following on the command line:
  `ionic build <platform>`
  `ionic run <platform>`
  
