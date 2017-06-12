function squareDigitsSequence(a0) {
​
  var cur = a0,
      was = [];
​
  while (was.indexOf(cur) === -1) {
    was.push(cur);
    var next = 0;
    while (cur > 0) {
      next += (cur % 10) * (cur % 10);
      cur = Math.floor(cur / 10);
    }
    cur = next;
  }
​
  return  was.length + 1 ;
}
​