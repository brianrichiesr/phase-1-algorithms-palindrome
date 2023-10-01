function isPalindrome(word) {
  const wordInReverse = word.split("").reverse().join("");
  return word === wordInReverse;
}

/* 
  Write a function that takes a str as an argument
  Split string into an array
  Reverse the array
  Join the array making it the original string in reverse
  Evaluate the string vs. the string in reverse  
  Return boolean true if the word is a palindrome and false if it is not.
*/

/*
  I created a new variable 'wordInReverse'
  I used the String method '.split("")' to split the the string passed into the function, 'word' is the parameter for what will be passed when the user calls the function, into an array consisting of each letter of 'word' being an index of the array
  For example, if I split the word "forum" this way, it would create an array that looked like this:
    ["f", "o", "r", "u", "m"]
  I used the Array method '.reverse()' to reverse the order of the array
  For example, using '.reverse()' on the array I made earlier would make it look like this:
    ["m", "u", "r", "o", "f"]
  I used the Array method '.join("")' to join the newly reversed array back into a string
  I returned the boolean that is a result of the strict equality comparison of the original 'word' and 'wordInReverse'

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
