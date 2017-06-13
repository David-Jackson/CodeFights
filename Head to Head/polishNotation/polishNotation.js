function polishNotation(tokens) {
  var isNumber = function(stringRepresentation) {
    return stringRepresentation.length > 1 ||
           '0' <= stringRepresentation[0] &&
           stringRepresentation[0] <= '9';
  };
​
  var stack = [];
​
  for (var i = 0; i < tokens.length; i++) {
    stack.push(tokens[i]);
    while (stack.length > 2 && isNumber(stack[stack.length - 1])
     && isNumber(stack[stack.length - 2])) {
      var leftOperand = parseInt(stack[stack.length - 2]);
      var rightOperand = parseInt(stack[stack.length - 1]);
      var result = 0;
      if (stack[stack.length - 3] === '-') {
        result = leftOperand - rightOperand;
      }
      if (stack[stack.length - 3] === '+') {
        result = leftOperand + rightOperand;
      }
      if (stack[stack.length - 3] === '*') {
        result = leftOperand * rightOperand;
      }
      stack.splice(-3);
      stack.push(result.toString());