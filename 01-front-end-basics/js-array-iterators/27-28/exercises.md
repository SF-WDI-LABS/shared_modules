## Exercises - Array iterators ##

### Challenge 1 (map) - [Solution](solutions.js)

Elaine the Etsy Merchant thinks her prices are scaring off customers. Subtracting one penny might help:
Help her out:

```javascript
var prices = [3.00, 4.00, 10.00, 2.25, 3.01];
prices.map(callbackfn);
// returns: [2.99, 3.99, 9.99, 2.24, 3.00]
```

More Challenges:

-  On second thought, Elaine only wants to subtract a penny if it changes the dollars place, e.g.: 10.00 --> 9.99

-  Prices are going up! Elaine needs to raise her prices by 5%.


### Challenge 2 (filter) - [Solution](solutions.js)
Is there an interesting trend in birthdays?  Do people tend to be born more on even-numbered dates or odd-numbered dates?  This is a great chance to do some serious science!

```javascript
var birthDates = [1, 1, 2, 4, 7, 4, 12, 30,...];
birthdates.filter(callbackfn);
evenBirthdates = [2, 4, 4, 12, 30];
```
-  In an organized and semi-nonchaotic fashion, create a master list of all birthdates with every person in the class.  We're only interested in the birthdate (1 - 31), we don't care about month or year.

-  Independently write a filter array function that creates an array for either odd or even birth dates.

-  Compare the results for even numbers with those for odd numbers.  Write some code that reports the results.  For example `6 out of 10 students were born on an even day.  Evens are more common.`  Or `60% of the class was born on an even-numbered day.`

-  Share your results with the class and bask in your great science!

### Challenge 3 (reduce) - [Solution](solutions.js)
Goyle has a lucrative dog walking business. He's made mucho moolah this summer. How much did he make?

```javascript
var earnings = [20, 25, 60, 20, 85, 20];
earnings.reduce(callbackfn);
// 210
```
Challenge:

-  Goyle already has $500 in the bank. How would you incorporate this into your method call? (YOU ARE NOT ALLOWED TO USE output + 500)
-  BONUS: Goyle's curious how many times he earned $20 this summer. (HINT: there's a method for this!)
