# polishNotation
﻿Programmer John was studying Lisp programming language, when he suddenly realized that he still does not have a calculator written by himself. Every respected programmer should have one! That is why he decided to write a classic calculator that accepts expressions in [Polish notation](keyword://polish-notation).

**Example**

*   For `tokens = ["+", "3", "7"]`, the output should be
    `polishNotation(tokens) = 10`;
*   For `tokens = ["*", "-", "5", "6", "7"]`, the output should be
    `polishNotation(tokens) = -7`;
*   For `tokens = ["-", "5", "*", "6", "7"]`, the output should be
    `polishNotation(tokens) = -37`.

_Examples in conventional notation_

1.  `3 + 7 = 10`;
2.  `(5 - 6) * 7 = -7`;
3.  `5 - (6 * 7) = -37`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.string tokens**

    Tokens of some expression in _Polish notation_. The tokens can be:

    *   `'+'` - addition;
    *   `'*'` - multiplication;
    *   `'-'` - subtraction;
    *   `'n'` - integer number.

    It is guaranteed that the array is not empty and that the given expression is valid.

    _Guaranteed constraints:_
    `3 ≤ tokens.length ≤ 15`.

*   **[output] integer**

    Result of the expression given in _Polish notation_.


## My Solution
```javascript
﻿function polishNotation(tokens) {
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
```
