function splitByValue(k, elements) {
  var result = [];
  for (var i = 0; i < elements.length; i++) {
    if (elements[i] < k) {
      result.push(elements[i]);
    }
  }
  for (var i = 0; i < elements.length; i++) {
    if (elements[i] >= k) {
      result.push( elements[i] );
    }
  }
  return result;
}
​