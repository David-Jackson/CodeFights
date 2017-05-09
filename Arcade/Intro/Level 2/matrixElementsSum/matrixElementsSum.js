function matrixElementsSum(matrix) {
    var sum = 0;
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (y != matrix.length - 1 && matrix[y][x] == 0) {
                matrix[y + 1][x] = 0;
            }
            sum += matrix[y][x];
        }
    }
    return sum;
}
​