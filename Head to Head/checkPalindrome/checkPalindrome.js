function checkPalindrome(inputString) {
​
  var isPalindrome = true;
  for (var i = 0; i < inputString.length; i++) {
    if (inputString[i] !== inputString[inputString.length - i - 1]) {
      isPalindrome = false;
      break;
    }
  }
​
  return isPalindrome;
}
​