# <img src="https://cloud.githubusercontent.com/assets/7833470/10423298/ea833a68-7079-11e5-84f8-0a925ab96893.png" width="60"> Iterators

<img src="http://49.media.tumblr.com/tumblr_lkvyr02YWz1qg39ewo1_500.gif" width=400px>

|Learning Objectives|
| :--- |
| Review `for` loops and their use cases |
| Compare and contrast `for` and `forEach` |
| Review the callback pattern and callback arguments |
| Discuss common problems solved by `map`, `reduce`, and `filter` |
| Practice manipulating arrays using built in array methods |
| Create our own implementation of `forEach`, `map`, and `reduce` |

It's time to dig a little deeper into arrays, and array manipulation methods.

# Using Array Iterators

## `for` Loop Review
We've already seen that we can traverse an array of elements with a simple `for` loop.

```javascript
var potatoes = ["Yukon Gold", "Russet", "Yellow Finn", "Kestrel"];
for(var i=0; i<=potatoes.length-1; i++){
    console.log(potatoes[i] + "!")
}
// Yukon Gold!
// Russet!
// Yellow Finn!
// Kestrel!
//=> undefined
```

If you're not careful, you end up with common problems, like:
* *off-by-one* errors!
* *infinite loops*!

Sometimes all you need is a screw-driver.

Sometimes you need a power-drill.

<img src="https://media.giphy.com/media/uy1hknkaJu8UM/giphy.gif" width="200px">

It's time we "leveled-up" and learned about iterators like `forEach`!

## Array Documentation

The Mozilla Developer Network (MDN) has awesome documentation on Javascript's built-in [Array prototype methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

> **Pro-Tip**: Want to code like a pro? Memorize the built-in methods, and know how to use them!

#### Reading documentation

Let's take a quick look at what MDN says about [Array.prototype.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

```
arr.forEach(callback[, thisArg])
```

#### Questions
<details>
<summary>
**What parameters does `forEach` have?** (Click Here)
</summary>
<br>
The documentation states that `forEach` takes the following arguments:
* 1. a callback function
* 2. an optional argument
</details>

<details>
<summary>
**What parameters does the *callback* have?** (Click here)
</summary>
<br>
The documentation specifies that the callback will receive 3 arguments when called:
* 1. `currentValue`
* 2. `index`
* 3. `array`

</details>

> **Note**: When it says `[, thisArg]`, the brackets mean that this is an **optional** argument. It is not an array! And we will *not* use this argument in today's lab.


## Array.prototype.forEach() - [Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ForEach)

Looping over arrays is such a common problem that the built-in Array method (`Array.prototype.forEach`) was created.

We can just trust that `forEach` will:
* Always loop the correct number of times
* Always give us the current `value`, current `index`, and the original `array`.

Here's an example of looping over a list of `fruits`:

```javascript
var fruits = ["Apple", "Banana", "Cherry", "Durian", "Elderberry",
"Fig", "Guava", "Huckleberry", "Ice plant", "Jackfruit"];

function fruitPrinter(current_value, current_index) {
    console.log(current_index + ". " + current_value);
}

fruits.forEach(fruitsPrinter);

// 0. Apple
// 1. Banana
// 2. Cherry
// 3. Durian
// 4. Elderberry
// 5. Fig
// 6. Guava
// 7. Huckleberry
// 8. Ice plant
// 9. Jackfruit
//=> ["Apple", "Banana", "Cherry", "Durian", "Elderberry",
//    "Fig", "Guava", "Huckleberry", "Ice plant", "Jackfruit"];
```

We can write the same thing a little more succinctly.

```javascript
fruits.forEach(function fruitPrinter(value, index) {
    console.log(index + ". " + value);
});
// same output as above
```

See how `fruitPrinter` is now declared right inside the call to `fruits.forEach`?  If we don't need to use `fruitPrinter` anywhere else, this syntax can be quite convenient.

#### Anonymous Functions

We can shorten up our code even further by removing the "name" part of our function definition.

This is called an *anonymous function*:

```javascript
fruits.forEach(function (value, index) {
    console.log(index + ". " + value);
});
// same output as above
```

All three of these will have the exact same output.  If you don't believe me copy each one into your browser console and try it.

## Array.prototype.map() - [Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map)
Similar to `forEach()`, `map()` traverses an array; this method, however, performs whatever callback function you pass into it on each element.  It outputs the results
of the operation on each element as a new array.

Often we want to do more than just perform an action, like console.log(), on every loop.  When we actually want to modify/manipulate our array, map is our best friend!

#### Example: Double every number

```JavaScript
var numbers = [1, 4, 9];
var doubles = numbers.map(function doubler(num) {
  return num * 2;
});
// doubles is now [2, 8, 18]. numbers is still [1, 4, 9]
```

#### Example: Pluralize all the fruit names

```javascript
pluralized_fruits = fruits.map(function pluralize(element) {

  // if word ends in 'y', remove 'y' and add 'ies' to the end
    var lastLetter = element[element.length -1];
     if (lastLetter === 'y') {
      element = element.slice(0,element.length-1) + 'ie';
  }

    return element + 's';
});

fruits // ORIGINAL ARRAY IS UNCHANGED!
//=> ["Apple", "Banana", "Cherry", "Durian", "Elderberry",
//    "Fig", "Guava", "Huckleberry", "Ice plant", "Jackfruit"];

pluralized_fruits // MAP OUTPUT
//=> [ "Apples", "Bananas", "Cherries", "Durians", "Elderberries",
//    "Figs", "Guavas", "Huckleberries", "Ice plants", "Jackfruits"  ]
```

#### Example: Square each number

```javascript
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.map(function square(element) {
  return Math.pow(element, 2);
});
//=> [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

#### Exercise - [Map](exercises.md#challenge-1-map)

## Array.prototype.filter() - [Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Filter)
With the `filter()` method you can create a *second* array filled with elements that pass certain criteria that you designate.  This is great for creating a sub array of fruits that start with vowels, a list of even numbers from a bigger list, and so on.  
  *It's important to remember that a filter method on an array requires a `boolean` return value for the callback function you pass as an argument.*

#### Example: Return a list of fruits that start with vowels

```javascript
var vowels = ["A", "E", "I", "O", "U"];
function vowelFruit(fruit) {
  var result = vowels.indexOf(fruit[0]) >= 0; // indexOf returns -1 if not found
  console.log("result for " + fruit + " is " + result);
  return result;
}
var vowelFruits = fruits.filter(vowelFruit);
//=> ["Apple", "Elderberry", "Ice plant"]
```

Or alternatively:

```javascript
var vowels = ["A", "E", "I", "O", "U"];

var vowelFruits = fruits.filter(function vowelFruit(fruit) {
  return vowels.indexOf(fruit[0]) >= 0; // indexOf returns -1 if not found
});
//=> ["Apple", "Elderberry", "Ice plant"]

```

#### Example: Find all the even numbers that are greater than 5 

```javascript
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

even = numbers.filter(function filterEvens(num) {
  var isEven = num%2==0;
  var greaterThanFive = num > 5;
  return isEven && greaterThanFive;
});
//=> [6, 8, 10]

```

#### Exercise - [Filter](exercises.md#challenge-2-filter)

## Array.prototype.reduce() - [Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
The `reduce()` method is designed to create one single object that is the result of an action performed among all elements in an array.  It essentially 'reduces' the values of an array into one single element.

#### Example: Return the first letter of every word, as a single string

```javascript
avgLen = fruits.reduce(function concatFirstLetter(previous, current, index) {
    if (index == 1) {
      current = current[0];
    }
  return previous + current[0];
});
//=> "ABCDEFGHIJ"

```

#### Example: Find the sum of all of the numbers in an array

```javascript
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

sum = numbers.reduce(function add(previous, current) {
  return current + previous;
});

sum
//=> 55

```

> In the above examples, notice how the first time the callback is called it receives `element[0]` and `element[1]`.
 
There is another way to call this function and specify an initial starting point. 

```javascript
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

sum = numbers.reduce(function add(previous, current) {
  return current + previous;
}, 100);

sum
//=> 155
```

In the above example, the first time the callback is called it receives `100` and `1`.

> **Note**: We set the starting value to `100` by passing in an optional second argument to reduce. 

#### Exercise - [Reduce](exercises.md#challenge-3-reduce)

## Exercises

Before we move on let's finish the [Array Manipulation Exercises](exercises.md) for `map`, `filter`, and `reduce`.


# Building Iterators

#### How does `forEach` work?
Let's think about `forEach` again. What's happening behind the scenes?

* What are our inputs?
* What is our output?
* What happens on each loop?
* What does the callback function do?
* What gets passed into our callback function? i.e. what arguments?
  * Where does it come from?
  * How do we know what to name it?

Let's check:

```javascript
[0, 100, 200, 300].forEach(function printer(element, index, array) {
  console.log(element, index, array);
});
```


<details><summary>
**What are our inputs?** (Click Here)
</summary>
Inputs to `forEach`:
* 1. `callback` (a function) - e.g. `printer`
* 2. `thisArg` (an optional argument) - not used

Inputs to the callback:
* 1. `currentValue` - e.g. `300`
* 2. `index` - e.g. `3`
* 3. `array` - e.g. `[0, 100, 200, 300]`
</details>
  
<details><summary>
**What is our output?** (Click Here)
</summary>
Output from calling `forEach`:
* `undefined` - You can confirm this in your console.

Output from the callback:
* We're not explicitily returning anything in this case, but we do `console.log` every time the callback is called (every loop).
</details>

Given the above, how would you build `forEach` yourself?

## Exercise: Build your own iterators

We are going to [**implement our own iterators**](https://github.com/sf-wdi-27-28/building_js_iterators_lab), from scratch. 

