/*
Challenge 1 (maps)

Elaine the Etsy Merchant thinks her prices are scaring off customers.
Subtracting one penny might help:
*/
console.log("\n\nChallenge 1");


var prices = [3.00,4.00,10.00,2.25,3.01];
var reducedPrices = prices.map(function(element) {
  return element - 0.01;
});

console.log("Reduced Prices: " + reducedPrices);

console.log("\n\nChallenge 1.1");
/* Challenge 1.1
On second thought, Elaine only wants to subtract a penny if it changes
the dollars place, e.g.: 10.00 --> 9.99*/

var prices = [3.00,4.00,10.00,2.25,3.01];
console.log("Original Prices: " + prices);
var reducedPrices = prices.map(function(element) {
  // establish the length of the initial value,
  // preserving the two digit spaces after the decimal
  // note the crazy cast to string by addition of an empty string! ""
  var initialLength = ((element).toFixed(2)+"").length;

  // establish the length of the original value MINUS .01
  var alteredLength = ((element - 0.01)+"").length;

  // If the price reduction would result in a change in the dollars place
  if( initialLength - alteredLength === 1) {
    // reduce the original value by a penny
    element -= 0.01;
  }
    return element.toFixed(2);
});

console.log("Reduced Prices: " + reducedPrices);


console.log("\n\nChallenge 1.2");
/* Challenge 1.2 */
/* Prices are going up! Elaine needs to raise her prices by 5%. */
var prices = [3.00,4.00,10.00,2.25,3.01];
console.log("Prices: " + prices);
var increasedPrices = prices.map(function(element) {
  return (element + (0.05*element)).toFixed(2);
});
console.log("Increased Prices: " + increasedPrices);



console.log("\n\nChallenge 2.0");
/* Challenge 2.0 */

var birthDates = [1, 1, 2, 3, 3, 3, 5, 5, 6, 6, 8, 8, 10, 10, 12, 12, 13, 13, 15, 17, 17, 18, 20, 20, 26, 31];
var birthDateEvens = birthDates.filter(function(element) {
  if(element %2 === 0){
    return element;
  }
});

console.log(birthDateEvens.length + " out of " +  birthDates.length +
  " students were born on an even date number.  Interesting!");


console.log("\n\nChallenge 3.0");
/* Challenge 3.0 */
/* Goyle has a lucrative dog walking business. He's made mucho
moolah this summer. How much did he make?
*/
var earnings = [20, 25, 60, 20, 85, 20];
var total = earnings.reduce(function(previous, current) {
  return previous + current;
});

console.log("Total earnings: " + total);

console.log("\n\nChallenge 4.1");
/* Challenge 4.1 */
/* Goyle already has $500 in the bank. How would you incorporate
this into your method call? (YOU ARE NOT ALLOWED TO USE output + 500)
*/

/* In the array.reduce() documentation, we can see that there is an optional argument AFTER the callback function
that allows you to set an initial value that the previous callback function will use as the first previous value,
since at the beginning of the iteration there is usually no previous value. */

var earnings = [20, 25, 60, 20, 85, 20];
var total = earnings.reduce(function(previous, current) {
  return previous + current;
}, 500);

console.log("Total earnings: " + total);


console.log("\n\nChallenge 4.2");
/* Challenge 4.2 */
/* BONUS: Goyle's curious how many times he earned $20 this summer. (HINT: there's a method for this!)
*/

var earnings = [20, 25, 60, 20, 85, 20];
var twentyOccurences = earnings.filter(function(element){
    return element === 20;
}).length;

console.log("Amount of occurences that Goyle earned $20 during the summer: " + twentyOccurences);
