function crossingSum(matrix, a, b) {
    function sum(acc, val) {
        return acc + val;
    }
    return matrix.map(function(val, index, arr) {
        if (index == a) {
            return val.reduce(sum);
        } else {
            return val[b];
        }
    }).reduce(sum);
}
​