function champernowneDigit(n) {
​
  for (var i = 1; ; i++) {
    var number = i,
        digits = [];
    while (number) {
      digits.push(number % 10);
      number = Math.floor(number / 10);
    }
    digits.reverse();
    if (n <= digits.length) {
      return digits[n - 1];
    }
    n -= digits.length;
  }
}
​