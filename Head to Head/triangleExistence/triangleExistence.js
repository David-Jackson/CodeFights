function triangleExistence(sides) {
​
  var compareNumbers = function(a, b) {
    return a - b;
  };
​
  sides.sort(compareNumbers);
​
  if (sides[0] + sides[1] > sides[2]) {
    return  true ;
  }
  return false;
}
​
​