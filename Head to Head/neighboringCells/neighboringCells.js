function neighboringCells(matrix) {
    function nonValidCells(y, x) {
        var count = 0;
        if (y == 0) count++;
        if (y == matrix.length - 1) count++;
        if (x == 0) count++;
        if (x == matrix[0].length - 1) count++;
        return count;
    }
    return matrix.map(function(row, y) {
        return row.map(function(val, x) {
            return 4 - nonValidCells(y, x);
        });
    });
}
​