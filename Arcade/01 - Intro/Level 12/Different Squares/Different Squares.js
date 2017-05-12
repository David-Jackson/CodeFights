function differentSquares(matrix) {
    var hist = [];
    var count = 0;
    var matrixToNum = function(m) {
        var num = 0;
        for (var i = 0; i < m.length; i++) {
            for (var j = 0; j < m[i].length; j++) {
                num *= 10;
                num += m[i][j];
            }
        }
        return num;
    }
    for (var i = 0; i < matrix.length - 1; i++) {
        for (var j = 0; j < matrix[i].length - 1; j++) {
            var n = matrixToNum([
                [matrix[i][j], matrix[i][j + 1]],
                [matrix[i + 1][j], matrix[i + 1][j + 1]]
            ]);
            if (hist.indexOf(n) == -1) {
                hist.push(n);
                count++;
            }
        }
    }
    return count;
}s