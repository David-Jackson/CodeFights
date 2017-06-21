function fullSquareOrCube(number) {
    function numToArr(x) {
        var arr = [];
        while (x > 0) {
            arr.push(x % 10);
            x = Math.floor(x / 10);
        }
        return arr;
    }
    function arrToNum (acc, val) {
        return (acc * 10) + val;
    }
    function sortDesc (a, b) {
        return a < b;
    }
    var count = 0;
    var digits = numToArr(number);
    var max = digits.sort(sortDesc).reduce(arrToNum, 0);
    var x = 0;
    var sq = 0;
    var cu = 0;
    var used = [];
    while (sq <= max || cu <= max) {
        if (max == numToArr(sq).sort(sortDesc).reduce(arrToNum, 0) && used.indexOf(sq) == -1) {
            count++;