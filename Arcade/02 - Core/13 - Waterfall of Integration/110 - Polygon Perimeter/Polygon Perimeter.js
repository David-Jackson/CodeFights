function polygonPerimeter(matrix) {
    // return the number of true items above, below, left and right an index
    function neighbors(row, col, arr) {
        var count = 0;
        for (var i = -1; i <= 1; i = i + 2) {
            if (row + i >= 0 && row + i < arr.length) {
                count += ((arr[row + i][col]) ? 1 : 0);
            }
        }
        for (var j = -1; j <= 1; j = j + 2) {
            if (col + j >= 0 && col + j < arr[row].length) {
                count += ((arr[row][col + j]) ? 1 : 0);
            }
        }
        return count;
    }
    
    function getSum(total, num) {
        return total + num;
    }
    
    return matrix.map(function (row, y, arr) {
        return row.map(function(val, x) {
            // if (val) console.log(y, x);
            return (val) ? 4 - neighbors(y, x, matrix) : 0;
        }).reduce(getSum);
    }).reduce(getSum);
}
​