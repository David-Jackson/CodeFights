function rowsRearranging(matrix) {
    var index = 0;
    var sortByIndex = function(a, b) {
        return a[index] > b[index];
    }
    for (index = 0; index < matrix[0].length; index++) {
        matrix.sort(sortByIndex);
        var allGood = true;
        for (var i = 0; i < matrix[0].length; i++) {
            for (var j = 0; j < matrix.length - 1; j++) {
                if (matrix[j][i] >= matrix[j + 1][i]) {
                    allGood = false;
                    break;
                }
            }
            if (!allGood) break;
        }
        if (allGood) return true;
    }
    return false;
}
​