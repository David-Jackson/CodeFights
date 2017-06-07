﻿function spiralNumbers(n) {
  var m = new Array(n);
  var directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  var currentDirectionIndex = 0;
  var currentRow = 0;
  var currentColumn = 0;
  var currentNum = 1;
  var tmpRow;
  var tmpColumn;
  for(var i = 0; i < n; i++) {
    m[i] = new Array(n);
  }
  for(var i = n * n; i > 0; i--) {
    m[currentRow][currentColumn] = currentNum;
    currentNum++;
    if(i > 1) {
      // Determine the next cell
      while(true) {
        tmpRow = currentRow + directions[currentDirectionIndex][0];
        tmpColumn = currentColumn + directions[currentDirectionIndex][1];
        if(tmpRow < 0 || tmpRow >= n || tmpColumn < 0 || tmpColumn >= n ||
          m[tmpRow][tmpColumn]) {
          currentDirectionIndex = (currentDirectionIndex + 1) % directions.length;
        } else {
          currentRow = tmpRow;
          currentColumn = tmpColumn;
          break;
        }
      }
    }
  }
  return m;
}
​