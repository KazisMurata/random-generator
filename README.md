# random-generator
randomNumGenerator
Function for generating a list of unique numbers in random order in a given range.
At the beginning of the function execution, a Set object is created to store unique values in it. Then we execute a while loop with a condition in which we check the number of records with the desired one, as long as the condition is true the loop will be executed.  The loop generates a random number in the range and writes it to the Set object if it was not there.
After the loop is executed, the Set object is converted into an array and returned for further work with it. 

randomNumGenerator2
First we create an empty array and fill it with the required number of values by the first loop. The second loop goes through the array and swaps the values, generating random indixes. At the end it returns an array.

I realized that the execution speed of the randomNumGenerator function is not optimal because the loop can take a very long time to randomly generate the desired number especially close to the final fill. While the randomNumGenerator2 function loops will run strictly a certain number of times and no more.

For run script:
```node index.js```