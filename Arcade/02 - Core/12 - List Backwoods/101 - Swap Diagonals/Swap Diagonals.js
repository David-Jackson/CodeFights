function swapDiagonals(matrix) {
    return matrix.map(function (itemY, y, mat) {
       return itemY.map(function (itemX, x, arr) {
           if (x == y || (arr.length - x - 1) == y) {
               return mat[y][arr.length - 1 - x];
           } else {
               return itemX;
           }
       });
    });
}
​