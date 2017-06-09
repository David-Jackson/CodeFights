function pagesNumberingWithInk(current, numberOfDigits) {
  var countDigitsInNumber = function(n) {
    var count = 0;
    while (n > 0) {
      count++;
      n = Math.floor(n / 10);
    }
    return count;
  }
  var digitsInCurrent = countDigitsInNumber(current) ;
  while (numberOfDigits >= digitsInCurrent) {
    numberOfDigits -= digitsInCurrent;
    current++;
    digitsInCurrent = countDigitsInNumber(current);
  }
  return current - 1;
}
​