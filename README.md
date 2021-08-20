# Mr. Robogers Neighborhood

#### This is a site where users input a number and receives a range of values 

#### _By Paige Tiedeman_

## Technologies Used

* HTML
* CSS
* JavaScript
* JQuery
* Bootstrap

## Description

This simple HTML site uses Javascript loops to return a range of numbers from a singular inputted number. Numbers including 3 will be replaced with "Wont you be my neighbor?", including 2 will be replaced with "Boop!", and lastly including 1 will display "Beep!" instead of the number.

## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _Go to the top level of this directory_
* _Open index.html in your browser_
* _Input a number in the form to receive a range_

## Known Bugs

* _N/A_

## License

_[MIT](https://opensource.org/licenses/MIT)_

Copyright (c) 2021 Paige Tiedeman

## Contact Information

_Paige Tiedeman **paigetiedeman@gmail.com**_

## Tests

Describe: rogerReplace()  

Test: "It will return a number to the console"    
Code: rogerReplace(1)  
Expected Output: ""  

Test: "It will return the number 3 with 'Won't you be my neighbor?'"  
Code: rogerReplace(3)  
Expected Output: "Won't you be my neighbor?"  

Test: "It will replace 2 and 1 with Boop! or Beep!"  
Code: rogerReplace(2)  
Expected Output: "Boop!"  

Test: "If number does not equal 1,2 or 3 the inputted number will show"  
Code rogerReplace(5)  
Expected Output: "0", "Beep!", "Boop!" "Won't you be my neighbor?", "4", "5"  

Test: "It will change numbers including 1, 2 or 3 to specified strings"  
Code: rogerReplace(13)  
Expected Output: .. "", "", "Won't you be my neighbor?"  

Test: "It will change all values in the array to strings"  
Code: rogerReplace(5)    
Expected Output: "5"  
