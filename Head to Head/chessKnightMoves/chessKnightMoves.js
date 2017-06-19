function chessKnightMoves(cell) {
​
  var isValid = function(pos) {
    if (0 <= pos && pos < 8) {
      return true;
    }
    return false;
  }
​
  var getX = function(pos) {
    return pos.charCodeAt() - 'a'.charCodeAt();
  }
  var getY = function(pos) {
    return pos.charCodeAt() - '1'.charCodeAt();
  }
​
  var current_x = getX(cell[0]);
  var current_y = getY(cell[1]);
  var result = 0;
​
  for (var dx = -2; dx <= 2; dx++) {
    for (var dy = -2; dy <= 2; dy++) {
      if (Math.abs(dx * dy) === 2) {
        if (isValid(current_x + dx) && isValid(current_y + dy)) result++;
      }