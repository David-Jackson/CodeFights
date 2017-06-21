function kthDigit(n, k) {
​
  var numDigits = 0, number = n;
  while (number) {
    numDigits++;
    number =  Math.floor(number / 10) ;
  }
​
  var indexFromLast = numDigits - k + 1;
​
  while (n) {
    if (--indexFromLast === 0) {
      return n % 10;
    }
    n = Math.floor(n / 10);
  }
​
  return -1;
}
​