function largestDistance(a) {
​
  var mx =  [a[2], a[3]] ;
  var mn = [a[0], a[1]];
  for (var i = 0; i < a.length; i++) {
    var k = i % 2;
    if (a[i] > mx[k]) {
      mx[k] = a[i];
    } else if (a[i] < mn[k]) {
      mn[k] = a[i];
    }
  }
  return Math.max(mx[0] - mn[0], mx[1] - mn[1]);
}
​