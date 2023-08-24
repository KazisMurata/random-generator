# random-generator
Function for generating a list of unique numbers in random order in a given range.
At the beginning of the function execution, a Set object is created to store unique values in it. Then we execute a while loop with a condition in which we check the number of records with the desired one, as long as the condition is true the loop will be executed.  The loop generates a random number in the range and writes it to the Set object if it was not there.
After the loop is executed, the Set object is converted into an array and returned for further work with it. 

For run script:
```node index.js```