# <img src="https://cloud.githubusercontent.com/assets/7833470/10423298/ea833a68-7079-11e5-84f8-0a925ab96893.png" width="60"> WDI Fundamentals Check-In [SOLUTIONS]

Answer the questions below to the best of your ability.  Feel free to reference your fundamentals workbook, other online resources, and any other notes you’d like. Please do not get help from another person. This check-in has 6 sections:

* Reflection
* Developer Tools 
* HTML and the DOM
* CSS
* JavaScript Language
* JavaScript for Web




##Section 1: Reflection


Fill in the start time now, and come back for the rest of the questions in this section when you’re done. 


1. Start time: __________________

1. Approximate time taken: _____________________________

1. What’s something challenging from Fundamentals that you feel confident about?

1. What’s something from Fundamentals that you need to work on?

1. What resource(s) did you find most helpful?


##Section 2: Developer Tools


1. Computer skills: how many words per minute do you type, according to [http://www.thetypingcat.com/typing-speed-test](http://www.thetypingcat.com/typing-speed-test)?


1. Computer skills: what happens when you use the Command (⌘) + Tab keyboard shortcut on a Mac?


1. What do each of the following Terminal commands do?  Give an example of using each.

  * `ls`  
  * `cd`  
  * `touch`   
  * `mkdir`   
  * `rm`  



1. Describe or draw how git and GitHub work.  Include at least the terms "git commit", "local repository",  "remote repository", "git push", and "git pull". 

##Section 3: HTML & The DOM


1. Write HTML that would create the web page shown in the image below. 

  <img width="250px" src="https://cloud.githubusercontent.com/assets/3254910/20645466/2414946e-b414-11e6-8225-067040df0422.png">
      
2. What is the DOM?  Draw the DOM tree for the HTML you wrote.
	<img width="500px" src="https://cloud.githubusercontent.com/assets/3254910/20645634/ef702c0a-b418-11e6-969e-a374b61bcfee.png">

3. What is an HTML "attribute"?  Give an example.

4. What is the difference between a class and an id in HTML? When would you use each?


##Section 4: CSS


1. My CSS is in a file called styles.css, in the same directory as my index.html file. What should I write in my index.html file to make sure my styles are linked?

1. Draw the CSS box model.

1. Write an HTML element that would match with each of the following selectors:

  * `#subscribe`  
  * `article.featured`  
  * `nav > ul`  
	
1. What is CSS "specificity"?  Rank these in order of specificity from least specific to most specific:   `!important`, class, id, tag, inline style.

##Section 5: JavaScript Language

1. List 3 JavaScript data types, and give an example of each.

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


1. In JavaScript, when should you use =, ==, and ===?

1. In the `scores` array below, how would you change the last score to 27?

	```js
	var scores = [26, 28, 30, 28, 17];
	```

1. In the `address` object below, how would you add the information that the "floor" for this address is 5?

	```js
	var address = {
			city: "San Francisco",
			number: 225,
			street: "Bush St.",
			state: "CA",
			zip: 94104
	};
	```


1. What is the output of the following code?

	```js
	var colors = ["red", "yellow", "green"];
	for (var i = colors.length-1; i >= 0; i = i-1) {
			console.log(colors[i]);
	}
	```


1. Consider the `combine` function below. What value does the `combine` function return for each of the function calls beneath it?

	```js
	function combine(a, b) {
				return a + b;
		}


	// input               		    //=> returned value 
	var x = 1;
	var y = 7;

	combine(x, y);       		      //=> ______________

	combine(combine(x, y), 5);    //=> ______________
	```


1. Contrast `console.log` and `return`.


1. Fill in the `tempToWord` function below so that it returns `"warm"` or `"cool"` depending on the input temperature. For any `temp` above 60 degrees, `tempToWord` should return `"warm"`.  For any temp 60 degrees or below, it should return `"cool"`.
	
	```js
	function tempToWord(temp) {






	}
	```



1. Based on the `tempToWord` code you just wrote, what is the value returned for each of the following function calls:

	```js
	// input         	  //=> returned value

	tempToWord(30);  	  //=>

	tempToWord(60); 	  //=>

	tempToWord(70);  	  //=>
	```

##Section 6: JavaScript for Web

1. My JavaScript code is in a file called script.js, in the same directory as my index.html.  What can I write in index.html to connect my JavaScript to my HTML?

1. What is an "event"? An "event listener"? 

1. Which of the following tasks are capabilities of JavaScript? Choose two and write down the code for completing the task.

	* Add an event listener to a DOM element  
	* Create a DOM element  
	* Add a DOM element to the page  
	* Access the HTML inside an element   
	* Change the text inside an element   
	* Change the source of an image  
	* Add a class to an element  

1. I'm designing a to do list website where users can see a list of tasks they need to do, use a form to input a new task, and click on tasks to cross them off on the list. Pick three of the JavaScript capabilities you found in the last question. How would you advise me to use these for my to do list app?

