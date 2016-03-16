# <img src="https://cloud.githubusercontent.com/assets/7833470/10423298/ea833a68-7079-11e5-84f8-0a925ab96893.png" width="60"> Javascript Functions

![Ice Cream Sandwich Machine](https://media.giphy.com/media/1kowbKFzLQqXu/giphy.gif)

<em>A **function** is similar to a machine in that it receives an input (ice cream and cookies), processes the input (smash!), and creates a resulting output in a consistent manner (tasty ice cream sandwiches).</em>

#Goals
|   |
|---|  
|Create simple Javascript functions with parameters|  
|Explain difference between returning and printing values|  
|Demonstrate proper function naming conventions|  
|Use scope rules to determine which variables will be defined within a function|



#Setup

1. Summon the Chrome Developer Console (Option + Command + I)
1. Navigate to the `Sources` tab in the Chrome Developer Console.
2. Click on the `Snippets` tab within the Sources display.
3. Right-click and choose `New` to create a new Snippets file.
4. Name the Snippets File `myFunctions`.

#What is a Function?
A function can be thought of as a program within a larger program.  They often perform small or repetitious tasks.  When a function is *called*, the code within the curly braces will be executed.  It will only be executed when the function is called.

##Benefits of Using Functions

- **Encapsulation** - Keeping code for the same purpose in the same place makes finding it and updating it easier.

- **Code Reuse** - "Don't Repeat Yourself" is a principle of coding - keep your programs DRY! Reusing code makes it easier to change how your program works, since you only have to make updates in one place. If you find yourself writing the same code two or more times, a good rule of thumb is to move it into a function!


#Show us a function! 
The function below will display the message `"Hi, everyone!"` to a console.

```javascript    
    function greetEveryone() {
        // anything inside the curly braces will be executed
        return "Hi, everyone!";
    }
```
    
The above code is called a *function definition*.  On its own, the function will not execute.  The function will need to be *called* by an outside source to initialize and carry out its tasks.  To call a function, the function name and following parenthesis are typed as a statement.

```javascript
    greetEveryone(); // Hi, everyone!
```

#Defining a function with a parameter
When a function receives a parameter, it will use that value to perform an action. In the function `greetPerson(name)` the function requires that a name variable be given to it.  

```javascript
    function greetPerson(name) {
        return "Hello " + name);
    }
```

Similar to calling a function without parameters, the function name is called as a statement.  Parameters are passed into the function within the parenthesis.

```javascript
    greetPerson(); // Hello undefined
    greetPerson("Jeff"); // Hello Jeff
```

###Say hello to some students
Functions can take variables as parameters or Strings

```javascript
    var name1 = "Christopher";
    var name2 = "Judy";
    var name3 = "Noomi";

    greetPerson(name1); // Hello Christopher
    greetPerson(name2); // Hello Judy
    greetPerson(name3); // Hello Noomi
    
    greetPerson("Will"); // Hello Will
```
##Defining a function with multiple parameters

Functions can take multiple paramters.  Each parameter must be separated from another by a comma.  

```javascript
   	// Add two integers
    function sum(a, b) {
        return a + b;
    }
    
    var x = 6;
    var y = 2;
    
    sum(x, y); // 8
    sum(2, 3); // 5
    sum(44, 33); // 77
```

##Functions on Integers
```javascript
    // Subtract two integers
    function subtract(a, b) {
        return a - b;
    }
```
``` javascript  
    // Multiply two integers
    function multiply(a, b) {
        return a  *  b;
    }
```
```javascript
    // Divide two integers
    function divide(a, b) {
        return a / b;
    }
``` 

But what if you want to perform functions on numbers that aren't integers?!  Don't worry; Javascript lumps integers and decimal numbers together in one `number` data type, so your functions will still work if you give them arguments that aren't whole numbers. 


##Functions on Strings
Functions may perform actions upon Strings as well.

```javascript
    // convert String to uppercase
    function shout(phrase) {
        return phrase.toUpperCase();
    }
    
    var phrase = 'i am mighty.'
    shout(phrase); // I AM MIGHTY.
```
```javascript
    // convert String to lowercase
    function whisper(phrase) {
        return phrase.toLowerCase();
    }
    
    whisper("I AM SMALL"); // i am small
``` 
```javascript
    // append an exclamation point to the end of a phrase
    function exclaim(phrase) {
        return phrase + '!';
    }
    
    exclaim("Avast, ye mateys"); // Avast, ye mateys!
```

**Note:** When naming Javascript functions, it is best practice to 
 use camelCase if multiple words are used in the title. 
 This helps with readability, much like the case with 
 variable and file naming conventions.

> **Bad Naming Convention:**
> 
> * `Squarethesenumbers()`
> * `CONVERTTOBINARY()`
> * `pythagoreantheorem()`
>  
> **Good Naming Convention:**
> 
> * `hexToBinary()`
> * `determineRootVariant()`
> * `deployPhaserTorpedos()`

```javascript
    // convert spaces to dashes in a phrase
    function spacesToDashes(phrase) {
        return phrase.replace(/ /g, "-");
    }
    
    spacesToDashes("Dash is also a great API lookup tool!"); // Dash-is-also-a-great-API-lookup-tool!
```

In the case of the function spacesToDashes, the function description 'spaces to dashes' the first letters were capitalized and the phrase was concatenated to 'spacesToDashes'
    
##Explicit vs. Implicit Return Values
Functions that return a variable or value are said to have *Explicit* returns.  Functions that simply have a return statement without a variable or value following it are called *Implicit* returns.  Implicit returns will returned an `undefined` value, which is perfectly fine!  Calling the return statement in a function simply signals that the function should end and return control back to the point that called the said function.

###Explicit Example
``` javascript
function explicitFunction() {
    return "Here Is My Explicit Return Value";
}

var returnValue = explicitFunction():
returnValue === "Here Is My Explicit Return Value"; // true
```

###Implicit Example

``` javascript
function implicitFunction() {
    // What do I return?
}

var returnValue = implicitFunction():
returnValue === undefined; // true
```

``` javascript
function implicitFunction2() {
    return; // What do I return?
}

var returnValue = implicitFunction2():
returnValue === undefined; // true
```

##Functions and Booleans
Functions are able to receive and return boolean values.  Functions that return boolean values are commonly used to check the states of variables and whether conditions are met.

> **Note:** It is best practice to name functions with boolean return values with a prefix of 'is', 'has', or 'can.'
> 
> * isEven()
> * isPrime()
> * hasCheezburger()
> * canItBlend()
> 
> This will let the programmer know that the return value of the function will be a boolean value.  It also increases the readiblity of the code.

### Function with boolean value as a parameter
```javascript
// outputs a statement based on boolean value
function hasCheezburger(answer)){
    if (answer === true) {
        console.log("Can I haz ur Cheezburger?");
    } else {
        console.log("Y no Cheezburger?");
    }
}

hasCheezeburger(true);
// Can I haz ur Cheezburger?
=> undefined
```

### Function with boolean return value
```javascript
// checks if number is greater or less than 5
function isGreaterThanFive(number){
    return number > 5;
}

var result = isGreaterThanFive(3);
result; // false; 
```
The above function has two return statements.  Since both are within an `if / else ` statement, only one will apply to the condition.  Once a return statement is executed the function ends.  This ensures that only one return statement can be executed per function.  

*A function may have multiple possible return statements but only one may be executed at any one given function call.*

### Function with both boolean parameter and return values

```javascript
// return opposite boolean value of parameter received
function completelyDisagree(option) {
    if (option === true) {
        return false;
    } else {
        return true;
    }
}

var iAmRight = true;
var doYouAgree = completelyDisagree(iAmRight);
doYouAgree; // false
```

It turns out this is the same as:

``` javascript
function completelyDisagree(option) {
    return !option;
}
```



##Function Scope
A variable that is declared outside a function definition is a **global** variable, and its value is accessible and modifiable throughout your program. A variable that is declared inside a function definition is **local**.

Functions can access and modify global variables at will.  A program cannot access a function's local variable, however.  By nature, variables declared and defined within a function are created and destroyed as soon as the function starts and stops.  The local variable's data would be impossible to depend on from a source outside of the function.  

```javascript
/* banana is a global variable and can be accessed by all functions within the file */
var banana = 1;

/* This function will change the global variable `banana` */
function sliceBanana(slices){
    banana = slices;
    return;
}

sliceBanana(4);
=> undefined
banana;
=> 4
```

```javascript
function multiplyBySix(x){
    /* mult is a local variable and can only be accessed and altered within the function */
    var mult = 6;
    x = x * mult;
    return x;
}

multiplyBySix(4); // 24

/* Attempting to display a local variable outside of its scope will return an undefined */
mult;
// Uncaught ReferenceError: mult is not defined!!! So Bad!!!!
```



##The Call Stack

We say that a function **takes in arguments** and **returns** something to us. You can imagine JavaScript control flow as a person talking on the phone with your program. When you call a function, it's like JS puts the main program on hold and contacts the function. If another function is called, JS puts the first function on hold to contact the new one. When the function finishes, JS returns to the previous call.

To keep track of the functions JS has on hold, it uses a **call stack**. As JS calls a new function, it pushes the function onto the call stack. When a function returns, it pops that function off of the call stack.

![](http://i.stack.imgur.com/4Z6xK.png)


##Function Recursion 

Function recursion is the act of a function calling itself within its own code.  Traditionally, *recursive* functions require at least one parameter passed in.  Each time a function calls iself, the value of the parameter is changed to produce a desired effect.

```javascript
/* Display all numbers from num to 0 on the screen */
function countDown(num){
    /* Base Case */
    if(num < 0){
        return;
    } else {
    
        /* Action Steps */
        console.log(num);
        num = num - 1;
    
        /* Recursive Steps */
        countDown(num);     
    }
}

countDown(10);
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
=> undefined

```

###What is this magic?!
1.  The code above displays the current value of `num` to the screen then decrements the value by one.  
2.  It then calls `countdown(num)` again. This time the value has been decremented.  
3.  Notice that these statements are encapsulated inside an `if` statement.  This creates what is known as a *base case*.  
4.  When `num` no longer satisfies the conditional statement `num >= 0`, (the variable reaches zero,) the function will no longer call itself and will end.
5.  Pat yourself on the back.  This is not simple stuff!  


![recursion](https://lh3.googleusercontent.com/-BOYdZI6tT7Y/UJwzRKYdQNI/AAAAAAAC5js/Ltg-gd6SCQQ/w506-h405/photo.jpg)

*Recursion is your friend!*


**Code Challenge:** Modify the above program to count down to zero, *then* count back up to the original value.




## Exercises
[Function Exercises](https://github.com/SF-WDI-LABS/functions-exercises) 
