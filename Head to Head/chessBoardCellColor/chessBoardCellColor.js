function chessBoardCellColor(cell1, cell2) {
​
  var getX = function(pos) {
    return pos.charCodeAt() - 'A'.charCodeAt();
  }
  var getY = function(pos) {
    return pos.charCodeAt() - '1'.charCodeAt();
  }
​
  var sum1 = getX(cell1[0]) + getY(cell1[1]);
  var sum2 =  getX(cell2[0]) + getY(cell2[1]) ;
  if (sum1 % 2 === sum2 % 2) {
    return true;
  }
  return false;
​
}
​