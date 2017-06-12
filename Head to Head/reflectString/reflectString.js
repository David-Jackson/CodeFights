function reflectString(inputString) {
​
  var result = [];
  for (var i = 0; i < inputString.length; i++) {
    var order = inputString.charCodeAt(i) - 'a'.charCodeAt(0),
        reflectedCharCode = 'a'.charCodeAt(0) + 25 - order;
    result.push( String.fromCharCode(reflectedCharCode) );
  }
​
  return result.join('');
}
​