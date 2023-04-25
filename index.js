function isPalindrome(word) {
  // Write your algorithm here
  // Convert string to lowercase
  str = str.toLowerCase();
  
  // Remove non-letter characters
  str = str.replace(/[^a-z]/g, '');
  
  // Compare string to its reverse
  return str === str.split('').reverse().join('');


}
// test cases
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("robot")); // false
/* 
  Add your pseudocode here
  /* 
  Pseudocode:
  1. Convert the input string to lowercase.
  2. Remove any non-letter characters from the string.
  3. Compare the modified string to its reverse.
  4. If the two strings are the same, return true; otherwise, return false.
*/

/*
  Add written explanation of your solution here
  The isPalindrome function takes a string as input and determines whether it is a 
  palindrome or not. First, it converts the string to lowercase using the toLowerCase() method to ensure 
  that capitalization does not affect the result. Next, it removes any non-letter 
  characters from the string using a regular expression and the replace() method. 
  Finally, it compares the modified string to its reverse by splitting it into an 
  array of characters using the split() method, reversing the array using the 
  reverse() method, and joining the array back into a string using the join() method. 
  If the two strings are the same, the function returns true; otherwise, 
  it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("A man a plan a canal Panama"));
  
  console.log("Expecting: false");
  console.log("=>", isPalindrome("not a palindrome"));

module.exports = isPalindrome; 
}
