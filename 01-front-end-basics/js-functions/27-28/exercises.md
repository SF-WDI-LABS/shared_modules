## Exercises - JavaScript Functions

These challenges are designed to go from relatively simple to coding interview level intensity.  There are many different ways of reaching the correct result, so feel free to experiment!  

Fill out these empty function definitions.  Unless specified, simply have the function return the desired result to the console.

For some of the problems, you will have to use functions or other variables supplied by JavaScript's built-in `Math` object.  [Here is the documentation on using the `Math` object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math).

**Example Usage of `Math`**
```javascript
	var absoluteValue = Math.abs(-4);
	// evaluates to 4
	
	var fourSquared = Math.pow(4, 2);
	// evaluates to 16
	
	var roundedToNearestInteger = Math.round(1.22343);
	// evaluates to 1
```


##1.  Build your own concatentation
Display a new string that is the combination of two arguments passed into the function 

**Example: `dog` and `house` will display `doghouse`**

```javascript
function combineWords(word1, word2) {
	// TODO: Place your code here
}

combineWords('dog', 'house');
// displays 'doghouse'
```

## 2.  Repeat a phrase
Display an argument phrase to the console n times

```javascript
function repeatPhrase(phrase, n) {
	// TODO: Place your code here
}

repeatPhrase ("Hello", 5);
// displays 
// Hello
// Hello
// Hello
// Hello
// Hello
```

## 3.  Build your own Power function
Display number <sup>power</sup> *without* using built-in `Math` functions

**Example**:   
**4<sup>5</sup> = 4 * 4 * 4 * 4 * 4 = 1024**

```javascript
function toTheNthPower(number, power) {
	// TODO: Place your code here		
}

toTheNthPower(4, 5);
// displays 1024
```

## 4. Area of a circle:  &pi; r<sup>2</sup>
Display the area of a circle given the radius  
[background information](http://www.mathgoodies.com/lessons/vol2/circle_area.html)

```javascript
function areaOfACircle(radius) {
	// TODO: Place your code here
}

areaOfACircle(2);
// displays approximately 12.57
```


## 5.  Pythagorean Theorem: a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
Display c given a and b  
[background information](https://en.wikipedia.org/wiki/Pythagorean_theorem)

```javascript
function pythagoreanTheorem(a, b) {
	// TODO: Place your code here
}

pythagoreanTheorem(3, 4);
// should display 5;
```

##  6. Is X Evenly Divisible by Y ?
Return a boolean value whether or not X can be divided by Y without any remainders.  

*Hint: Explore the world of Modulus operators!*

```javascript
function isXEvenlyDivisibleByY(x, y) {
	// TODO: Place your code here
}

isXEvenlyDivisibleByY(99, 3);
// displays true
```



## 7.  Vowel Count:
Count the number of occurence of vowels in a word.
Vowels are `a`, `e`, `i`, `o`, `u`, and `y`

```javascript
function countVowels(word) {
	// TODO: Place your code here
}

countVowels("stealing");
// displays 3
```
*Challenge: Can you alter the code to count both upper case AND lower case?*



## 8. Build an ASCII Triangle!
Display a simple triangle with asterisks

**Example:   
printTriangle(5)**

```javascript
*
**
***
****
*****
```

```javascript
function printTriangle(length) {
	// TODO: Place your code here
}

printTriangle(3);
// displays
// *
// **
// ***
```

## 9. Stretch Challenge: Can you alter the printTriangle function to create a Pyramid? 
**Example:  printPyramid(10);**

```javascript
           *
          * *
         * * *
        * * * *
       * * * * *
      * * * * * *
     * * * * * * *
    * * * * * * * * 
   * * * * * * * * *
  * * * * * * * * * *
```

*Warning: This is a surprisingly tricky interview-level exercise.  Try at your own risk!*

```javascript
function printPyramid(length) {
	// TODO: Place your code here
}
```

<!--## 10. Stretch Challenge: Functions are varibles too! -->

<!--Functions can take other functions as input. Write a function `wrap` that takes another function as input, calls the function, and console logs the result surrounded by exclaimation points.-->

<!--```js-->
<!--function wrap(myFunction){-->
	// TODO: Place your code here
<!--	console.log("!" + myFunction() + "!");-->
<!--}-->


<!--function returnCoolName(){-->
<!--	return "Ali";-->
<!--}-->
<!--wrap(returnCoolName);-->
// displays !Ali!
<!--```-->

<!--Write a function that takes in a string and returns a function that console.logs that number of exclamation points.-->


<!--```javascript-->
<!--function createHoorayFunction(num) {-->
<!--	return function newFunction(){-->
		// TODO: Place your code here
<!--		for (var i=0; i<num; i++){-->
<!--			console.log("!");-->
<!--		}-->
<!--		console.log(out);-->
<!--	}-->
<!--}-->

<!--var hoorayFiveFunction = createHoorayFunction(5);-->
<!--hoorayFiveFunction();-->
// displays 
// !
// !
// !
// !
// !
<!--```-->
