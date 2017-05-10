function isBeautifulString(inputString) {
​
  var len = inputString.length,
      l = 'a'.charCodeAt(),
      r = 'z'.charCodeAt();
  for (var sym = l; sym < r; sym++) {
    var balance = 0;
    for (var i = 0; i < len; i++) {
      if (inputString[i].charCodeAt() === sym) {
        balance++;
      }
      if (inputString[i].charCodeAt() === sym + 1) {
        balance--;
      }
    }
    if (balance < 0) {
      return  false ;
    }
  }
  return true;
}
​
​