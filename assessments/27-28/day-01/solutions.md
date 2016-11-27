# <img src="https://cloud.githubusercontent.com/assets/7833470/10423298/ea833a68-7079-11e5-84f8-0a925ab96893.png" width="60"> Day 1 Assessment [SOLUTIONS]

**Instructions:** Do your best! Show your work - we’re more interested in your thought process and problem-solving skills than we are in exact syntax. Feel free to use code or "psuedo-code" (i.e. plain english).

1. Fill in the blank below. When executed, what will the last line of code evaluate to?

	```js
	var student_name = "Bob";
	var greeting = "Welcome to General Assembly, ";
	console.log(greeting + student_name + "!");
	```

  ```js
  // => "Welcome to General Assembly, Bob!"
  ```

2. Translate the following webpage into HTML (do not use any CSS styling).

	![simple-html-page](https://cloud.githubusercontent.com/assets/1489337/13724295/031c7bd2-e836-11e5-882e-c2b24e9c6c9b.png)

	```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>
    <h1>WDI 24</h1>
    <h3>is awesome!</h3>
    <p>I'm such a sweet coder, check out my <a href="https://github.com/username">GitHub page</a>.</p>
    <p>I love <strong>puppies</strong>! Here is my favorite one:</p>
    <img src="puppy.jpg">
  </body>
  </html>
  ```

3. Given the below code, how would you get the value `30`?

	```js
	var ages = [26, 28, 30, 28, 17];
	```

  ```js
  ages[2];
  ```

4. Given the below code, how would you add the name "Michael Nesmith" to the monkees?

    ```js
    var monkees = ["Peter Tork", "Micky Dolenz", "Davy Jones"];
    ```

    ```js
    monkees.push("Michael Nesmith");
    ```

	**4.1** How would you find the total number of band members?

    ```js
    monkees.length
    ```

5. Given the code below, how would you get the street part of the address?
    ```js
    var address = {
        city: "San Francisco",
        number: 225,
        street: "Bush St.",
        state: "CA",
        zip: 94104
    };

    address["street"]   // "Bush St."
    address['street']   // "Bush St."
    address.street      // "Bush St."
    ```

6. Given the `combine` function below, what is the output of the following function calls:

	```js
	function combine (a, b) {
		return a + b;
	}

	// input			   //=> output

	combine("1", "2");     //=> "12"
	combine(4, 5); 	       //=> 9
	combine("8"); 	       //=> "8undefined"
	combine(2, 3, 4); 	   //=> 5

	var a = 1;
	var b = 7;
	var c = 19 + a;
	combine(c, a);	       //=> 21
	var x = combine(a, b);
	combine(x, b);	       //=> 15
	```

7. What is the output of the following code?

	```js
	var rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

	for (var i = 0; i <= rainbowColors.length; i++) {
	  console.log(rainbowColors[i]);
	}
	```

  ```js
  //=> "red"
  //=> "orange"
  //=> "yellow"
  //=> "green"
  //=> "blue"
  //=> "indigo"
  //=> "violet"
	//=> undefined

	// note: `undefined` prints at the end, because the for loop goes through i <= rainbowColors.length (7). `rainbowColors[7]` is undefined.
	// we didn't mark it wrong if you missed the `undefined` part - that was tricky :)
  ```

8. Write a function called `evaluateTemp` that returns "warm" or "cool" depending on the temperature. Anything above 50 degrees is "warm", while anything 50 degrees or below is "cool".

	```js
  function evaluateTemp (temp) {
    if (temp > 50) {
      return "warm";
    } else {
      return "cool";
    }
  }
  ```

	**7.1** Based on the code you just wrote, what is the output of the following function calls:

	```js
	// input		//=> output

	evaluateTemp(30);  //=> "cool"
	evaluateTemp(50);  //=> "cool"
	evaluateTemp(70);  //=> "warm"
	```

9. Write a function called `findGreater` that takes two arguments and returns the greater of the pair.

  ```js
  function findGreater (num1, num2) {
    if (num1 > num2) {
      return num1;
    } else if (num2 > num1) {
      return num2;
    }
    return num1; // "The two numbers are equal";
  }
  ```

	**9.1** Based on the code you just wrote, what is the output of the following function calls:

	```js
	// input			      //=> output

	findGreater(7, 0);        //=> 7
	findGreater(11, 11);      //=> 11

	var b = 010;
	var s = 100;
	findGreater(b, s) === b;  //=> false
	findGreater(s, 1) === s;  //=> true
	```

10. Name as many JavaScript data types as you can think of. **Bonus:** give an example of each!

  ```js
  // PRIMITIVE

  // string
  "web development"

  // number (integer or floating point)
  46
  9.87

  // boolean
  true
  false

  // null (non-existent object)
  null

  // undefined (empty variable)
  undefined

  // REFERENCE

  // object
  {
    name: "Fluffy",
    species: "Unicorn",
    age: 4903
  }

  // array (a kind of object)
  ["apple", "banana", "kiwi"]
  
  // function (also a kind of object)
  function add(a,b) { return a+b; }
  ```
