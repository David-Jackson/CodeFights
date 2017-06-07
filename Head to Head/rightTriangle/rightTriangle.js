function rightTriangle(sides) {
​
  var sqr = function(value) {
    return value * value;
  }
​
  var compareNumbers = function(a, b) {
    return a - b;
  }
​
  sides.sort(compareNumbers);
  if (sqr(sides[0]) + sqr(sides[1]) === sqr(sides[2])) {
    return  true ;
  }
  return false;
}
​
​