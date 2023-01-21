function isPalindrome(word) {
  const backardsString = word.split("").reverse().join("");
  return word === backardsString ? true : false;
}

/* 
  Need algorithm that loops through a string and gathers information on each characater in the string.

    iterate over each Char in a string:
      if word === wordbackwards:
        return true else false
*/

/*
  isPalindrome iterates through a string and grabs each charater using the builtin split function and 
  then reverses the string using the built in reverse function. Finally rejoins the string using the join function and returns
  if the word is a palindrome or not.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;


